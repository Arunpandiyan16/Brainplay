
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { X, Check, Newspaper, Loader2, Trophy, Zap, Sparkles, Lightbulb, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useCountry } from '@/hooks/use-country';
import { fakeNewsData, NewsHeadline } from '@/lib/spot-fake-news-data';
import Link from 'next/link';

const XP_PER_CORRECT = 15;
const getXpToNextLevel = (level: number) => 75 + (level - 1) * 25;
const STORAGE_KEY = 'fakeNewsProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

export default function SpotFakeNewsPage() {
    const [gameState, setGameState] = useState<GameState>('settings');

    const [headline, setHeadline] = useState<NewsHeadline | null>(null);
    const [selection, setSelection] = useState<'real' | 'fake' | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [answeredCount, setAnsweredCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [availableHeadlines, setAvailableHeadlines] = useState<NewsHeadline[]>([]);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

    const { toast } = useToast();
    const { country } = useCountry();

    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem(STORAGE_KEY);
            if (savedProgress) {
                const { savedLevel, savedXp, savedXpToNextLevel, savedScore, savedAnsweredCount, savedCorrectCount } = JSON.parse(savedProgress);
                if (savedLevel && typeof savedLevel === 'number') {
                    setLevel(savedLevel);
                    setXp(savedXp || 0);
                    setXpToNextLevel(savedXpToNextLevel || getXpToNextLevel(savedLevel));
                    setScore(savedScore || 0);
                    setAnsweredCount(savedAnsweredCount || 0);
                    setCorrectCount(savedCorrectCount || 0);
                }
            }
        } catch (error) {
            console.error("Failed to load progress from localStorage", error);
        }
    }, []);

    useEffect(() => {
        try {
            const progress = JSON.stringify({ 
                savedLevel: level, 
                savedXp: xp, 
                savedXpToNextLevel: xpToNextLevel,
                savedScore: score,
                savedAnsweredCount: answeredCount,
                savedCorrectCount: correctCount
            });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel, score, answeredCount, correctCount]);


    const fetchHeadline = useCallback(() => {
        setIsLoading(true);
        setSelection(null);
        setIsCorrect(null);

        setAvailableHeadlines(currentHeadlines => {
            if (currentHeadlines.length === 0) {
                setGameState('ended');
                setIsLoading(false);
                return [];
            }

            const newHeadlines = [...currentHeadlines];
            const nextHeadline = newHeadlines.pop();
            setHeadline(nextHeadline!);
            setIsLoading(false);
            return newHeadlines;
        });

    }, []);

    const startGame = useCallback(() => {
        setScore(0);
        setAnsweredCount(0);
        setCorrectCount(0);
        setHeadline(null);
        setIsLoading(true);
        
        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 5) difficulties.push('Hard');

        const filtered = fakeNewsData.filter(h =>
            difficulties.includes(h.difficulty) &&
            (h.country === country || h.country === 'Global')
        );
        
        if(filtered.length === 0) {
            toast({
                variant: 'destructive',
                title: 'No Headlines Available!',
                description: 'There are no headlines for your current level and region.',
            });
            setGameState('settings');
            setIsLoading(false);
            return;
        }
        
        const shuffled = filtered.sort(() => 0.5 - Math.random());
        setAvailableHeadlines(shuffled);
        setGameState('playing');
    }, [level, country, toast]);

    useEffect(() => {
       if (gameState === 'playing' && availableHeadlines.length > 0 && !headline) {
            fetchHeadline();
        }
    }, [gameState, headline, availableHeadlines.length, fetchHeadline]);

    const handleAnswer = (choice: 'real' | 'fake') => {
        if (selection !== null || !headline) return;

        setSelection(choice);
        const correct = (choice === 'real' && headline.isReal) || (choice === 'fake' && !headline.isReal);
        setIsCorrect(correct);
        setAnsweredCount(prev => prev + 1);

        if (correct) {
            const points = headline.difficulty === 'Easy' ? 10 : headline.difficulty === 'Medium' ? 15 : 20;
            toast({ title: "Correct!", description: `+${points} points & +${XP_PER_CORRECT} XP`, className: 'bg-green-500' });
            setScore(prev => prev + points);
            setCorrectCount(prev => prev + 1);

            const newXp = xp + XP_PER_CORRECT;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! Harder headlines unlocked.`, className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }
        } else {
            toast({ title: "Incorrect!", description: "-10 points", variant: 'destructive' });
            setScore(prev => prev - 10);
        }
    };

    const nextHeadline = () => {
        if(availableHeadlines.length > 0) {
            fetchHeadline();
        } else {
             toast({
                title: 'Out of Headlines!',
                description: 'You have seen all headlines for this level. Congrats!',
            });
            setGameState('ended');
        }
    }

    const resetProgress = () => {
        setLevel(1);
        setXp(0);
        setScore(0);
        setAnsweredCount(0);
        setCorrectCount(0);
        setXpToNextLevel(getXpToNextLevel(1));
        localStorage.removeItem(STORAGE_KEY);
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    if (gameState === 'settings') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Newspaper className="w-10 h-10 text-primary"/>
                           Spot the Fake News
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           <br/>
                           Tell real headlines from fakes to earn XP and level up!
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
        const accuracy = answeredCount > 0 ? (correctCount / answeredCount) * 100 : 0;
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Trophy className="w-10 h-10 text-yellow-400"/>
                           Game Over!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">Your Final Score:</div>
                        <div className="text-7xl font-bold text-primary">{score}</div>
                         <div className="text-2xl">Final Level: <span className="font-bold text-primary">{level}</span></div>
                        <div className="flex justify-around text-lg w-full bg-secondary/50 p-4 rounded-lg">
                            <div>
                                <p className="text-muted-foreground">Answered</p>
                                <p className="font-bold">{correctCount}/{answeredCount}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Accuracy</p>
                                <p className="font-bold">{accuracy.toFixed(0)}%</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <Button size="lg" className="text-xl w-full" onClick={startGame}>
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

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-3xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <Newspaper className="text-primary"/>
                           Spot the Fake News
                        </div>
                         <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
                    </CardTitle>
                    <CardDescription className="flex justify-between">
                        <span>Score: <span className="font-bold text-primary">{score}</span></span>
                        <span>Level: <span className="font-bold text-primary">{level}</span></span>
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

                    {isLoading || !headline ? (
                        <div className="min-h-[300px] flex flex-col justify-center items-center text-center space-y-4">
                            <Loader2 className="h-16 w-16 animate-spin text-primary"/>
                            <p className="text-xl text-muted-foreground">Loading headlines for {country}...</p>
                        </div>
                    ) : (
                        <div className="min-h-[300px] flex flex-col justify-between">
                            <div>
                                <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{headline.source}</p>
                                <blockquote className="mt-2 text-2xl md:text-3xl font-bold leading-tight text-center border-l-4 border-primary pl-4">
                                    {headline.headline}
                                </blockquote>
                            </div>

                            {selection === null ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                    <Button onClick={() => handleAnswer('real')} className="h-24 text-3xl" variant="outline">
                                        <Check className="w-8 h-8 mr-4"/> Real
                                    </Button>
                                    <Button onClick={() => handleAnswer('fake')} className="h-24 text-3xl" variant="outline">
                                        <X className="w-8 h-8 mr-4"/> Fake
                                    </Button>
                                </div>
                            ) : (
                                <Card className={cn("mt-6", isCorrect ? 'bg-green-500/10 border-green-500' : 'bg-red-500/10 border-red-500')}>
                                    <CardHeader>
                                        <CardTitle className={cn("flex items-center gap-2", isCorrect ? 'text-green-400' : 'text-red-400')}>
                                            {isCorrect ? <Check/> : <X/>}
                                            {isCorrect ? 'You are correct!' : 'Not quite!'}
                                        </CardTitle>
                                         <CardDescription>The headline was <span className="font-bold">{headline.isReal ? "REAL" : "FAKE"}</span>.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Lightbulb className="w-5 h-5 mt-1 text-yellow-400 shrink-0"/>
                                            <p className="text-muted-foreground">{headline.explanation}</p>
                                        </div>
                                        <Button onClick={nextHeadline} className="w-full">
                                            Next Headline
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

    
