
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Trophy, Sparkles, Zap, HelpCircle, Lightbulb, Check, X, RotateCcw, Loader2, Award, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { logicPuzzles, LogicPuzzle } from '@/lib/logic-leap-data';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { getUserProfile, updateGameProgress, GameProgress, defaultGameProgress } from '@/lib/firebase-service';

const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const MAX_LIVES = 3;
const LIFE_REGEN_MINUTES = 5;

type GameState = 'settings' | 'playing' | 'ended' | 'no-lives';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

export default function LogicLeapPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [puzzle, setPuzzle] = useState<LogicPuzzle | null>(null);
    const [score, setScore] = useState(0);
    const [solvedCount, setSolvedCount] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    const [lives, setLives] = useState(MAX_LIVES);
    const [nextLifeAt, setNextLifeAt] = useState<number | null>(null);
    const [countdown, setCountdown] = useState('');

    const [isLoading, setIsLoading] = useState(true);
    const [availablePuzzles, setAvailablePuzzles] = useState<LogicPuzzle[]>([]);

    const { toast } = useToast();
    const { user } = useAuth();

    const loadProgress = useCallback(async () => {
        if (!user) {
            setLevel(1);
            setXp(0);
            setXpToNextLevel(getXpToNextLevel(1));
            setScore(0);
            setLives(MAX_LIVES);
            setNextLifeAt(null);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const profile = await getUserProfile(user.uid);
        if (profile && profile.logicLeap) {
            const { level, xp, xpToNextLevel, score, lives, nextLifeAt } = profile.logicLeap;
            setLevel(level);
            setXp(xp);
            setXpToNextLevel(xpToNextLevel);
            setScore(score);
            setLives(lives);
            setNextLifeAt(nextLifeAt);
        } else {
            const progress = defaultGameProgress();
            setLevel(progress.level);
            setXp(progress.xp);
            setXpToNextLevel(progress.xpToNextLevel);
            setScore(progress.score);
            setLives(progress.lives);
            setNextLifeAt(progress.nextLifeAt);
        }
        setIsLoading(false);
    }, [user]);

    useEffect(() => {
        loadProgress();
    }, [loadProgress]);
    
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (gameState === 'no-lives' && nextLifeAt) {
            interval = setInterval(() => {
                const now = Date.now();
                const diff = nextLifeAt - now;
                if (diff <= 0) {
                    setLives(prev => prev + 1);
                    setNextLifeAt(null);
                    setGameState('settings');
                    clearInterval(interval);
                } else {
                    const minutes = Math.floor((diff / 1000) / 60);
                    const seconds = Math.floor((diff / 1000) % 60);
                    setCountdown(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, nextLifeAt]);

    const saveProgress = useCallback(async () => {
        if (!user) return;
        const progress: GameProgress = { score, level, xp, xpToNextLevel, lives, nextLifeAt };
        await updateGameProgress(user.uid, 'logicLeap', progress);
    }, [user, score, level, xp, xpToNextLevel, lives, nextLifeAt]);

    useEffect(() => {
        if (gameState === 'ended' || gameState === 'settings' || gameState === 'no-lives') {
            saveProgress();
        }
    }, [gameState, saveProgress]);

    const fetchPuzzle = useCallback(() => {
        setIsLoading(true);
        setSelectedAnswer(null);
        setIsCorrect(null);

        setAvailablePuzzles(currentPuzzles => {
            if (currentPuzzles.length === 0) {
                setGameState('ended');
                setIsLoading(false);
                return [];
            }
            
            const newPuzzles = [...currentPuzzles];
            const nextPuzzle = newPuzzles.pop()
            setPuzzle(nextPuzzle!);
            setIsLoading(false);
            return newPuzzles;
        });
    }, []);
    
    const startGame = useCallback(() => {
        if (lives <= 0) {
            setGameState('no-lives');
            return;
        }
        setSolvedCount(0);
        setPuzzle(null);
        setIsLoading(true);
        setConsecutiveCorrect(0);

        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');

        const puzzlesForLevel = logicPuzzles.filter(p => difficulties.includes(p.difficulty));
        const shuffledPuzzles = puzzlesForLevel.sort(() => 0.5 - Math.random());
        
        if (shuffledPuzzles.length === 0) {
            toast({
                title: 'Out of Puzzles!',
                description: 'You\'ve solved all available puzzles for your level. Congrats!',
            });
            setGameState('settings');
            setIsLoading(false);
        } else {
            setAvailablePuzzles(shuffledPuzzles);
            setGameState('playing');
        }
    }, [level, lives, toast]);

    useEffect(() => {
        if (gameState === 'playing' && availablePuzzles.length > 0 && !puzzle) {
            fetchPuzzle();
        }
    }, [gameState, puzzle, availablePuzzles.length, fetchPuzzle]);

    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null || !puzzle) return;

        setSelectedAnswer(index);
        const correct = index === puzzle.answerIndex;
        setIsCorrect(correct);

        if (correct) {
            const awardedXp = puzzle.xp;
            let points = 15;
            if (puzzle.difficulty === 'Medium') points = 25;
            if (puzzle.difficulty === 'Hard') points = 40;

            const newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);

            if (newConsecutiveCorrect > 0 && newConsecutiveCorrect % 3 === 0) {
                points += 10;
                 toast({ title: "Streak Bonus!", description: "+10 extra points for a 3-in-a-row streak!", className: "bg-yellow-500/20" });
            }

            setScore(prev => prev + points);
            setSolvedCount(prev => prev + 1);

            const newXp = xp + awardedXp;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: `Level Up to ${nextLevel}!`, description: `You've unlocked harder puzzles. Well done!`, className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }
        } else {
            toast({ title: "Incorrect!", description: `The correct answer was "${puzzle.choices[puzzle.answerIndex]}".`, variant: 'destructive' });
            setScore(prev => prev - 5);
            setConsecutiveCorrect(0);
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives < MAX_LIVES && !nextLifeAt) {
                setNextLifeAt(Date.now() + LIFE_REGEN_MINUTES * 60 * 1000);
            }
            if (newLives <= 0) {
                setGameState('no-lives');
            }
        }
    };
    
    const resetProgress = async () => {
        const progress = defaultGameProgress();
        setLevel(progress.level);
        setXp(progress.xp);
        setXpToNextLevel(progress.xpToNextLevel);
        setScore(progress.score);
        setLives(progress.lives);
        setNextLifeAt(progress.nextLifeAt);
        if (user) {
            await updateGameProgress(user.uid, 'logicLeap', progress);
        }
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    const getButtonClass = (index: number) => {
        if (selectedAnswer !== null && puzzle) {
            if (index === puzzle.answerIndex) {
                return 'bg-green-500 hover:bg-green-600 text-white'; // Correct answer
            }
            if (index === selectedAnswer) {
                return 'bg-red-500 hover:bg-red-600 text-white'; // Incorrectly selected answer
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
    
    if (gameState === 'no-lives') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-md text-center p-8 border-destructive/50 glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Heart className="w-10 h-10 text-destructive fill-destructive"/>
                           Out of Lives!
                        </CardTitle>
                        <CardDescription className="text-lg">
                           You've run out of lives. A new life will be ready in:
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="text-5xl font-bold font-mono text-primary">
                            {countdown}
                        </div>
                        <Button size="lg" variant="outline" onClick={() => setGameState('settings')}>
                           Back to Game Info
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

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
                        <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                            {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-8 h-8", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
                        <Button size="lg" className="text-xl w-full glow-shadow mt-4" onClick={startGame} disabled={lives <= 0}>
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
                           Round Complete!
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
                         <div className="flex gap-4">
                            <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                               <Sparkles className="mr-2"/> New Game
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

    if (isLoading || !puzzle) {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl border-primary/50 glow-shadow">
                    <CardContent className="p-8 text-center space-y-4">
                        <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                        <p className="text-xl text-muted-foreground">Loading puzzle...</p>
                    </CardContent>
                </Card>
            </div>
        );
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
                        <div className="flex items-center gap-2">
                             {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-6 h-6", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between items-center">
                        <div>
                            <span>Score: <span className="font-bold text-primary">{score}</span></span>
                            <span className="ml-4">Level: <span className="font-bold text-primary">{level}</span></span>
                        </div>
                        <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {puzzle.choices.map((choice, index) => (
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
                                            index === puzzle.answerIndex ? <Check/> : (index === selectedAnswer ? <X/> : <span/>)
                                        )}
                                    </div>
                                    <span>{choice}</span>
                                </div>
                            </Button>
                        ))}
                    </div>

                    {selectedAnswer !== null && isCorrect && (
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
                    {consecutiveCorrect > 0 && <div className="text-sm text-yellow-400 animate-pulse flex items-center gap-1 justify-center"><Award className="w-4 h-4"/> Streak: {consecutiveCorrect}x</div>}
                </CardContent>
            </Card>
        </div>
    );
}
