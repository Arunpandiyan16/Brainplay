
'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Clock, Trophy, Sparkles, Zap, HelpCircle, Lightbulb, Check, X, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { logicPuzzles, LogicPuzzle } from '@/lib/logic-leap-data';
import { Badge } from '@/components/ui/badge';

const TOTAL_TIME = 180; // 3 minutes for the game
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const STORAGE_KEY = 'logicLeapProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

export default function LogicLeapPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [puzzle, setPuzzle] = useState<LogicPuzzle | null>(null);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [solvedCount, setSolvedCount] = useState(0);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showResult, setShowResult] = useState(false);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

    const [availablePuzzles, setAvailablePuzzles] = useState<LogicPuzzle[]>([]);

    const { toast } = useToast();
    const inputRef = useRef<HTMLInputElement>(null);

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

    useEffect(() => {
        try {
            const progress = JSON.stringify({ savedLevel: level, savedXp: xp, savedXpToNextLevel: xpToNextLevel });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel]);

    const fetchPuzzle = useCallback(() => {
        setShowResult(false);
        setIsCorrect(null);
        setGuess('');
        
        setAvailablePuzzles(currentPuzzles => {
            if (currentPuzzles.length === 0) {
                toast({
                    variant: 'destructive',
                    title: 'Out of Puzzles!',
                    description: 'You\'ve solved all available puzzles for your level. Congrats!',
                });
                setGameState('ended');
                return [];
            }
            
            const newPuzzles = [...currentPuzzles];
            const nextPuzzle = newPuzzles.pop()
            setPuzzle(nextPuzzle!);
            return newPuzzles;
        });
    }, [toast]);
    
    useEffect(() => {
        if(gameState === 'playing' && availablePuzzles.length > 0 && !puzzle) {
            fetchPuzzle();
        }
    }, [gameState, puzzle, fetchPuzzle, availablePuzzles]);

    const startGame = useCallback(() => {
        setScore(0);
        setTimeLeft(TOTAL_TIME);
        setSolvedCount(0);
        setGuess('');
        setPuzzle(null);

        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');

        const puzzlesForLevel = logicPuzzles.filter(p => difficulties.includes(p.difficulty));
        setAvailablePuzzles(puzzlesForLevel.sort(() => 0.5 - Math.random()));
        
        setGameState('playing');
    }, [level]);
    
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
        if (gameState === 'playing' && puzzle) {
            inputRef.current?.focus();
        }
    }, [puzzle, gameState]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!puzzle || guess === '' || showResult) return;

        const correct = guess.toLowerCase() === puzzle.answer.toString().toLowerCase();
        setIsCorrect(correct);
        setShowResult(true);

        if (correct) {
            const awardedXp = puzzle.xp;
            let points = 15;
            if (puzzle.difficulty === 'Medium') points = 25;
            if (puzzle.difficulty === 'Hard') points = 40;

            toast({ title: "Correct!", description: `+${points} points & +${awardedXp} XP`, className: 'bg-green-500' });
            setScore(prev => prev + points);
            setSolvedCount(prev => prev + 1);

            const newXp = xp + awardedXp;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! Harder puzzles unlocked.`, className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }
        } else {
            toast({ title: "Incorrect!", description: `The correct answer was ${puzzle.answer}.`, variant: 'destructive' });
            setScore(prev => prev - 5);
        }
    };
    
    const resetProgress = () => {
        setLevel(1);
        setXp(0);
        setXpToNextLevel(getXpToNextLevel(1));
        localStorage.removeItem(STORAGE_KEY);
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    if (gameState === 'settings') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-md text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <HelpCircle className="w-10 h-10 text-primary"/>
                           Logic Leap
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           <br/>
                           Solve puzzles to earn XP and unlock harder challenges!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
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
                                <p className="text-muted-foreground">Puzzles Solved</p>
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

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-3xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <HelpCircle className="text-primary"/>
                           Logic Leap
                        </div>
                         <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                            <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-500' : ''}`}/>
                            <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}</span>
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between items-center">
                        <div>
                            <span>Score: <span className="font-bold text-primary">{score}</span></span>
                            <span className="ml-4">Level: <span className="font-bold text-primary">{level}</span></span>
                        </div>
                        {puzzle && <Badge variant="secondary">{puzzle.type}</Badge>}
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

                    <div className={cn(
                        "p-6 rounded-lg bg-secondary min-h-[150px] flex items-center justify-center text-center"
                    )}>
                       <p className="text-xl md:text-2xl font-semibold leading-relaxed">{puzzle?.text}</p>
                    </div>
                    
                    {!showResult ? (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                            <Input 
                                ref={inputRef}
                                value={guess}
                                onChange={(e) => setGuess(e.target.value)}
                                placeholder="Your answer..."
                                className="text-lg h-14 text-center sm:text-2xl"
                                type={puzzle?.answerType || 'text'}
                                autoComplete="off"
                                autoCapitalize="none"
                                autoCorrect="off"
                            />
                            <Button type="submit" size="lg" className="h-14 text-lg">Submit</Button>
                        </form>
                    ) : (
                         <Card className={cn(isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500')}>
                            <CardContent className="p-4 space-y-3">
                               <div className="flex items-center gap-2 text-lg font-semibold">
                                {isCorrect ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                               <p>{isCorrect ? 'Correct!' : 'Not quite!'}</p>
                               </div>
                               <div className="flex items-start gap-3">
                                    <Lightbulb className="w-5 h-5 mt-1 text-yellow-400 shrink-0"/>
                                    <p className="text-muted-foreground">{puzzle?.explanation}</p>
                                </div>
                                <Button onClick={fetchPuzzle} className="w-full">
                                    Next Puzzle
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
