
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Sparkles, Zap, Calculator, Plus, Minus, X as MultiplyIcon, Divide, RotateCcw, Brain, Loader2, Check, X as WrongIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { problemBank, MathProblem } from '@/lib/math-rush-data';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { getUserProfile, updateGameProgress, GameProgress, defaultGameProgress } from '@/lib/firebase-service';

const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Operation = 'Addition' | 'Subtraction' | 'Multiplication' | 'Division' | 'Mixed';

interface ArithmeticProblem {
  text: string;
  answer: number;
  xp: number;
  type: 'Arithmetic';
  choices: (string | number)[];
  answerIndex: number;
}

type Problem = ArithmeticProblem | (MathProblem & { choices: (string|number)[], answerIndex: number});


export default function MathRushPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
    const [operation, setOperation] = useState<Operation>('Mixed');
    
    const [problem, setProblem] = useState<Problem | null>(null);
    const [score, setScore] = useState(0);
    const [solvedCount, setSolvedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    // Leveling state
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

    const { toast } = useToast();
    const { user } = useAuth();

    const loadProgress = useCallback(async () => {
        if (!user) {
            setLevel(1);
            setXp(0);
            setXpToNextLevel(getXpToNextLevel(1));
            setScore(0);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const profile = await getUserProfile(user.uid);
        if (profile && profile.mathRush) {
            const { level, xp, xpToNextLevel, score } = profile.mathRush;
            setLevel(level);
            setXp(xp);
            setXpToNextLevel(xpToNextLevel);
            setScore(score);
        } else {
            const progress = defaultGameProgress();
            setLevel(progress.level);
            setXp(progress.xp);
            setXpToNextLevel(progress.xpToNextLevel);
            setScore(progress.score);
        }
        setIsLoading(false);
    }, [user]);

    useEffect(() => {
        loadProgress();
    }, [loadProgress]);

    const saveProgress = useCallback(async () => {
        if (!user) return;
        const progress: GameProgress = { score, level, xp, xpToNextLevel };
        await updateGameProgress(user.uid, 'mathRush', progress);
    }, [user, score, level, xp, xpToNextLevel]);
    
    useEffect(() => {
        if (gameState === 'ended') {
            saveProgress();
        }
    }, [gameState, saveProgress]);
    
    const generateChoices = (correctAnswer: number | string): { choices: (string|number)[], answerIndex: number} => {
        let choices: (string | number)[] = [correctAnswer];
        const correctAnswerNum = typeof correctAnswer === 'string' ? parseFloat(correctAnswer) : correctAnswer;
        
        if (typeof correctAnswer === 'number') {
             while (choices.length < 4) {
                const offset = (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 5) + 1);
                let wrongAnswer = correctAnswerNum + offset;
                if(correctAnswerNum > 100) {
                     wrongAnswer = correctAnswerNum + (Math.random() < 0.5 ? -1 : 1) * (Math.floor(Math.random() * 10) + 5);
                }
                wrongAnswer = parseFloat(wrongAnswer.toFixed(1));
                if (!choices.includes(wrongAnswer) && wrongAnswer > 0) {
                    choices.push(wrongAnswer);
                }
            }
        } else {
             // For string answers (logical reasoning)
             const otherOptions = problemBank.filter(p => p.type === 'Logical Reasoning' && p.answer !== correctAnswer).map(p => p.answer);
             const shuffledOptions = otherOptions.sort(() => 0.5 - Math.random());
             choices = [...choices, ...shuffledOptions.slice(0, 3)];
        }


        const shuffledChoices = choices.sort(() => Math.random() - 0.5);
        const answerIndex = shuffledChoices.indexOf(correctAnswer);
        return { choices: shuffledChoices, answerIndex };
    }

    const generateProblem = useCallback(() => {
        setIsLoading(true);
        setSelectedAnswer(null);
        setIsCorrect(null);

        // Advanced problems unlocked at higher levels
        let advancedChance = 0;
        if (level >= 11) advancedChance = 0.60; // 60% chance
        else if (level >= 8) advancedChance = 0.50; // 50% chance
        else if (level >= 5) advancedChance = 0.35; // 35% chance
        else if (level >= 2) advancedChance = 0.20; // 20% chance
        
        const shouldShowAdvanced = Math.random() < advancedChance;

        if (shouldShowAdvanced && problemBank.length > 0) {
            const advancedProblem = problemBank[Math.floor(Math.random() * problemBank.length)];
            const { choices, answerIndex } = generateChoices(advancedProblem.answer);
            setProblem({...advancedProblem, choices, answerIndex});
            setIsLoading(false);
            return;
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
        
        const { choices, answerIndex } = generateChoices(answer);
        setProblem({ text: `${num1} ${op} ${num2}`, answer, xp: xpPoints, type: 'Arithmetic', choices, answerIndex });
        setIsLoading(false);

    }, [difficulty, operation, level]);

    const startGame = useCallback(() => {
        // Score is preserved
        setSolvedCount(0);
        setProblem(null);
        setGameState('playing');
        setIsLoading(true);
    }, []);
    
    useEffect(() => {
        if(gameState === 'playing' && !problem) {
            generateProblem();
        }
    }, [gameState, problem, generateProblem]);


    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null || !problem) return;

        setSelectedAnswer(index);
        const correct = index === problem.answerIndex;
        setIsCorrect(correct);

        if (correct) {
            const awardedXp = problem.xp;
            const points = problem.type === 'Arithmetic' ? 10 : 15;
            toast({ title: "Correct!", description: `+${points} points & +${awardedXp} XP`, className: 'bg-green-500' });
            setScore(prev => prev + points);
            setSolvedCount(prev => prev + 1);

            // Handle XP and leveling up
            const newXp = xp + awardedXp;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! Harder problems unlocked.`, className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }

        } else {
            toast({ title: "Incorrect!", description: `-5 points. The correct answer was ${problem.choices[problem.answerIndex]}.`, variant: 'destructive' });
            setScore(prev => prev - 5);
        }
    };
    
    const resetProgress = async () => {
        const progress = defaultGameProgress();
        setLevel(progress.level);
        setXp(progress.xp);
        setXpToNextLevel(progress.xpToNextLevel);
        setScore(progress.score);
        if (user) {
            await updateGameProgress(user.uid, 'mathRush', progress);
        }
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    const getIconForOperation = () => {
        if (problem?.type === 'Aptitude' || problem?.type === 'Logical Reasoning') {
            return <Brain />;
        }
        switch(operation) {
            case 'Addition': return <Plus />;
            case 'Subtraction': return <Minus />;
            case 'Multiplication': return <MultiplyIcon />;
            case 'Division': return <Divide />;
            default: return <Calculator />;
        }
    }
    
    const getButtonClass = (index: number) => {
        if (selectedAnswer !== null && problem) {
            if (index === problem.answerIndex) {
                return 'bg-green-500 hover:bg-green-600 text-white';
            }
            if (index === selectedAnswer) {
                return 'bg-red-500 hover:bg-red-600 text-white';
            }
        }
        return 'bg-secondary hover:bg-accent text-secondary-foreground';
    };

    if (isLoading && gameState === 'settings') {
         return (
            <div className="flex justify-center items-center py-8">
                <Loader2 className="h-16 w-16 animate-spin text-primary"/>
            </div>
        );
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
                           Solve problems to earn XP and unlock aptitude & logical reasoning questions!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium">Arithmetic Operation</label>
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
                             <label className="text-sm font-medium">Arithmetic Difficulty</label>
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
                           Game Over!
                        </CardTitle>
                        <CardDescription>You decided to end the game.</CardDescription>
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
                        <div className="flex gap-4">
                            <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                               <Sparkles className="mr-2"/> Play Again
                            </Button>
                             <Button size="lg" className="text-xl w-full" variant="outline" asChild>
                               <Link href="/">Back to Home</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const ProblemDisplay = () => {
        if (!problem) return null;
        if (problem.type === 'Arithmetic') {
            return <p className="text-3xl md:text-5xl font-bold tracking-widest text-center">{problem.text} = ?</p>;
        }
        return <p className="text-xl md:text-2xl font-semibold leading-relaxed text-center">{problem.text}</p>;
    }


    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-3xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <div className="text-primary">{getIconForOperation()}</div>
                           Math Rush
                        </div>
                        <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
                    </CardTitle>
                     <CardDescription className="flex justify-between items-center">
                        <div>
                            <span>Score: <span className="font-bold text-primary">{score}</span></span>
                            <span className="ml-4">Level: <span className="font-bold text-primary">{level}</span></span>
                        </div>
                        {problem?.type !== 'Arithmetic' && <Badge variant="secondary">{problem?.type}</Badge>}
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-muted-foreground">
                            <span>Level {level} XP</span>
                            <span>{xp} / {xpToNextLevel}</span>
                        </div>
                        <Progress value={(xp / xpToNextLevel) * 100} className="w-full h-2" />
                    </div>

                    {isLoading || !problem ? (
                         <div className="text-center space-y-4 min-h-[300px] flex flex-col justify-center">
                            <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                         </div>
                    ) : (
                        <>
                         <div className={cn(
                            "p-4 rounded-lg bg-secondary min-h-[120px] flex items-center justify-center",
                            problem?.type !== 'Arithmetic' && 'py-8'
                         )}>
                            <ProblemDisplay />
                         </div>
                    
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {problem.choices.map((choice, index) => (
                                <Button
                                    key={index}
                                    size="lg"
                                    className={`justify-start h-auto py-4 text-base text-left whitespace-normal ${getButtonClass(index)}`}
                                    onClick={() => handleAnswer(index)}
                                    disabled={selectedAnswer !== null}
                                >
                                    <div className="flex items-center">
                                        <div className="w-6 mr-3">
                                            {selectedAnswer !== null && (
                                                index === problem.answerIndex ? <Check/> : (index === selectedAnswer ? <WrongIcon/> : <span/>)
                                            )}
                                        </div>
                                        <span className="flex-1">{choice}</span>
                                    </div>
                                </Button>
                            ))}
                        </div>

                        {isCorrect !== null && (
                             <Card className={isCorrect ? "bg-green-500/10" : "bg-red-500/10"}>
                                <CardContent className="p-4 space-y-3">
                                   <div className="flex items-center gap-2">
                                    {isCorrect ? <Check className="text-green-500" /> : <WrongIcon className="text-red-500" />}
                                   <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                                   </div>
                                   {!isCorrect && <p className="text-muted-foreground">The correct answer was: {problem.choices[problem.answerIndex]}</p>}
                                   <Button onClick={generateProblem} className="w-full">
                                       Next Problem
                                   </Button>
                                </CardContent>
                            </Card>
                        )}
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
