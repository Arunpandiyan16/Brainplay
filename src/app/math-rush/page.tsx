
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Clock, Trophy, Sparkles, Zap, Calculator, Plus, Minus, X, Divide, Award, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { aptitudeQuestions, AptitudeQuestion } from '@/lib/math-rush-data';

const TOTAL_TIME = 60; // 60 seconds for the game
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const STORAGE_KEY = 'mathRushProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Operation = 'Addition' | 'Subtraction' | 'Multiplication' | 'Division' | 'Mixed';

interface Problem {
  text: string;
  answer: number;
  xp: number;
  type: 'Arithmetic' | 'Aptitude';
}

export default function MathRushPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
    const [operation, setOperation] = useState<Operation>('Mixed');
    
    const [problem, setProblem] = useState<Problem | null>(null);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [solvedCount, setSolvedCount] = useState(0);

    // Leveling state
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

    const { toast } = useToast();
    const inputRef = useRef<HTMLInputElement>(null);

    // Load progress from localStorage
    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem(STORAGE_KEY);
            if (savedProgress) {
                const { savedLevel, savedXp, savedXpToNextLevel } = JSON.parse(savedProgress);
                if (savedLevel && typeof savedLevel === 'number') {
                    setLevel(savedLevel);
                    setXp(savedXp || 0);
                    setXpToNextLevel(savedXpToNextLevel || getXpToNextLevel(savedLevel));
                }
            }
        } catch (error) {
            console.error("Failed to load progress from localStorage", error);
        }
    }, []);

    // Save progress to localStorage
    useEffect(() => {
        try {
            const progress = JSON.stringify({ savedLevel: level, savedXp: xp, savedXpToNextLevel: xpToNextLevel });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel]);

    const generateProblem = useCallback((): Problem => {
        // Aptitude questions unlocked at level 5
        const shouldShowAptitude = level >= 5 && Math.random() < 0.25; // 25% chance for aptitude question
        if (shouldShowAptitude && aptitudeQuestions.length > 0) {
            const aptitudeProblem = aptitudeQuestions[Math.floor(Math.random() * aptitudeQuestions.length)];
            return { ...aptitudeProblem, type: 'Aptitude' };
        }

        // Otherwise, generate arithmetic problem
        let num1: number, num2: number, answer: number, op: string, xpPoints: number;
        
        const difficultyRanges = {
            Easy: { min: 1, max: 10, xp: 10 },
            Medium: { min: 2, max: 25, xp: 15 },
            Hard: { min: 10, max: 99, xp: 20 },
        };
        
        const { min, max, xp } = difficultyRanges[difficulty];
        xpPoints = xp;

        const ops = ['+', '-', '*', '/'];
        let selectedOp = operation === 'Mixed' ? ops[Math.floor(Math.random() * ops.length)] : '';
        if (operation === 'Addition') selectedOp = '+';
        if (operation === 'Subtraction') selectedOp = '-';
        if (operation === 'Multiplication') selectedOp = '*';
        if (operation === 'Division') selectedOp = '/';
        
        switch(selectedOp) {
            case '*':
                num1 = Math.floor(Math.random() * (difficulty === 'Easy' ? 9 : 12)) + 2;
                num2 = Math.floor(Math.random() * (difficulty === 'Easy' ? 9 : 12)) + 2;
                answer = num1 * num2;
                op = '×';
                break;
            case '/':
                const divisor = Math.floor(Math.random() * (difficulty === 'Easy' ? 9 : 15)) + 2;
                answer = Math.floor(Math.random() * (difficulty === 'Easy' ? 9 : 15)) + 2;
                num1 = divisor * answer;
                num2 = divisor;
                op = '÷';
                break;
            case '-':
                num1 = Math.floor(Math.random() * (max - min + 1)) + min;
                num2 = Math.floor(Math.random() * (num1 - min + 1)) + min; // ensure positive result
                answer = num1 - num2;
                op = '-';
                break;
            default: // Addition
                num1 = Math.floor(Math.random() * (max - min + 1)) + min;
                num2 = Math.floor(Math.random() * (max - min + 1)) + min;
                answer = num1 + num2;
                op = '+';
                break;
        }

        return { text: `${num1} ${op} ${num2}`, answer, xp: xpPoints, type: 'Arithmetic' };
    }, [difficulty, operation, level]);

    const startGame = () => {
        setScore(0);
        setTimeLeft(TOTAL_TIME);
        setSolvedCount(0);
        setGuess('');
        setProblem(null); // Force loading state
        setGameState('playing');
    };
    
    useEffect(() => {
        if(gameState === 'playing' && !problem) {
            setProblem(generateProblem());
        }
    }, [gameState, problem, generateProblem]);

    useEffect(() => {
        if (gameState === 'playing') {
            const timer = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timer);
                        setGameState('ended');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [gameState]);

     useEffect(() => {
        if (gameState === 'playing' && problem) {
            inputRef.current?.focus();
        }
    }, [problem, gameState]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!problem || guess === '') return;

        if (parseInt(guess, 10) === problem.answer) {
            const awardedXp = problem.xp;
            toast({ title: "Correct!", description: `+10 points & +${awardedXp} XP`, className: 'bg-green-500' });
            setScore(prev => prev + 10);
            setSolvedCount(prev => prev + 1);

            // Handle XP and leveling up
            const newXp = xp + awardedXp;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! New challenges unlocked.`, className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }

        } else {
            toast({ title: "Incorrect!", description: `The answer was ${problem.answer}. -5 points.`, variant: 'destructive' });
            setScore(prev => prev - 5);
        }
        setGuess('');
        setProblem(generateProblem());
    };
    
    const resetProgress = () => {
        setLevel(1);
        setXp(0);
        setXpToNextLevel(getXpToNextLevel(1));
        localStorage.removeItem(STORAGE_KEY);
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    const getIconForOperation = () => {
        switch(operation) {
            case 'Addition': return <Plus />;
            case 'Subtraction': return <Minus />;
            case 'Multiplication': return <X />;
            case 'Division': return <Divide />;
            default: return <Calculator />;
        }
    }

    if (gameState === 'settings') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-md text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Calculator className="w-10 h-10 text-primary"/>
                           Math Rush
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           Solve problems to earn XP and unlock harder challenges!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium">Operation (Arithmetic Only)</label>
                            <Select onValueChange={(v: Operation) => setOperation(v)} defaultValue={operation}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select operation" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Mixed">Mixed</SelectItem>
                                    <SelectItem value="Addition">Addition</SelectItem>
                                    <SelectItem value="Subtraction">Subtraction</SelectItem>
                                    <SelectItem value="Multiplication">Multiplication</SelectItem>
                                    <SelectItem value="Division">Division</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div className="space-y-2 text-left">
                             <label className="text-sm font-medium">Difficulty (Arithmetic Only)</label>
                            <Select onValueChange={(v: Difficulty) => setDifficulty(v)} defaultValue={difficulty}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select difficulty" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Easy">Easy</SelectItem>
                                    <SelectItem value="Medium">Medium</SelectItem>
                                    <SelectItem value="Hard">Hard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button size="lg" className="text-xl w-full glow-shadow mt-4" onClick={startGame}>
                           <Zap className="mr-2"/> Start Game
                        </Button>
                        <Button size="sm" variant="outline" onClick={resetProgress}>
                           <RotateCcw className="mr-2"/> Reset Progress
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (gameState === 'ended') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Trophy className="w-10 h-10 text-yellow-400"/>
                           Time's Up!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">Your Final Score:</div>
                        <div className="text-7xl font-bold text-primary">{score}</div>
                        <div className="flex justify-around w-full">
                            <div className="text-lg">
                                <p className="text-muted-foreground">Problems Solved</p>
                                <p className="font-bold">{solvedCount}</p>
                            </div>
                            <div className="text-2xl">Final Level: <span className="text-primary">{level}</span></div>
                        </div>
                        <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const ProblemDisplay = () => {
        if (!problem) return null;
        if (problem.type === 'Aptitude') {
            return <p className="text-xl md:text-2xl font-semibold leading-relaxed text-center">{problem.text}</p>;
        }
        return <p className="text-3xl md:text-5xl font-bold tracking-widest text-center">{problem.text} = ?</p>;
    }

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-2xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <div className="text-primary">{getIconForOperation()}</div>
                           Math Rush
                        </div>
                         <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                            <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-500' : ''}`}/>
                            <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}</span>
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between">
                        <span>Score: <span className="font-bold text-primary">{score}</span></span>
                        <span>Level: <span className="font-bold text-primary">{level}</span></span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-muted-foreground">
                            <span>Level {level}</span>
                            <span>{xp} / {xpToNextLevel} XP</span>
                        </div>
                        <Progress value={(xp / xpToNextLevel) * 100} className="w-full h-2" />
                    </div>

                    <div className="p-4 rounded-lg bg-secondary min-h-[120px] flex items-center justify-center">
                        <ProblemDisplay />
                    </div>
                    
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                        <Input 
                            ref={inputRef}
                            value={guess}
                            onChange={(e) => setGuess(e.target.value)}
                            placeholder="Your answer..."
                            className="text-lg h-14 text-center text-2xl"
                            type="number"
                        />
                        <Button type="submit" size="lg" className="h-14 text-lg">Submit</Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
