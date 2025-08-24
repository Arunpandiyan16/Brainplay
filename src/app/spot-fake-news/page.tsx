
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, X, Check, Newspaper, Loader2, Trophy, Zap, Sparkles, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useCountry } from '@/hooks/use-country';
import { fakeNewsData, NewsHeadline } from '@/lib/spot-fake-news-data';

const TOTAL_TIME = 90; // 90 seconds for the game

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

export default function SpotFakeNewsPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [difficulty, setDifficulty] = useState<Difficulty>('Medium');

    const [headline, setHeadline] = useState<NewsHeadline | null>(null);
    const [selection, setSelection] = useState<'real' | 'fake' | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [isLoading, setIsLoading] = useState(false);
    const [answeredCount, setAnsweredCount] = useState(0);
    const [correctCount, setCorrectCount] = useState(0);
    const [availableHeadlines, setAvailableHeadlines] = useState<NewsHeadline[]>([]);

    const { toast } = useToast();
    const { country } = useCountry();

    const fetchHeadline = useCallback(() => {
        setIsLoading(true);
        setSelection(null);
        setIsCorrect(null);
        setHeadline(null);
        
        if (availableHeadlines.length === 0) {
            const filtered = fakeNewsData.filter(h => 
                h.difficulty === difficulty && 
                (h.country === country || h.country === 'Global')
            );
            const shuffled = filtered.sort(() => 0.5 - Math.random());
            setAvailableHeadlines(shuffled);
            
            if (shuffled.length === 0) {
                 toast({
                    variant: 'destructive',
                    title: 'Out of Headlines!',
                    description: 'You have seen all headlines for this difficulty. Try another setting!',
                });
                setGameState('ended');
                setIsLoading(false);
                return;
            }
        }
        
        setTimeout(() => {
            const nextHeadline = availableHeadlines.pop();
            setHeadline(nextHeadline!);
            setAvailableHeadlines([...availableHeadlines]); // Update state
            setIsLoading(false);
        }, 500);

    }, [difficulty, country, availableHeadlines, toast]);
    
    const startGame = () => {
        setScore(0);
        setTimeLeft(TOTAL_TIME);
        setGameState('playing');
        setAnsweredCount(0);
        setCorrectCount(0);
        setAvailableHeadlines([]); // Reset available headlines
        setHeadline(null); // Force fetch on start
    };

    useEffect(() => {
        if(gameState === 'playing' && !headline && !isLoading){
            fetchHeadline();
        }
    }, [gameState, headline, isLoading, fetchHeadline]);

    useEffect(() => {
        if (gameState !== 'playing' || isLoading) return;

        if (timeLeft <= 0) {
            setGameState('ended');
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState, timeLeft, isLoading]);

    const handleAnswer = (choice: 'real' | 'fake') => {
        if (selection !== null || !headline) return;
        
        setSelection(choice);
        const correct = (choice === 'real' && headline.isReal) || (choice === 'fake' && !headline.isReal);
        setIsCorrect(correct);
        setAnsweredCount(prev => prev + 1);

        if (correct) {
            toast({ title: "Correct!", description: "+15 points", className: 'bg-green-500' });
            setScore(prev => prev + 15);
            setCorrectCount(prev => prev + 1);
        } else {
            toast({ title: "Incorrect!", description: "-10 points", variant: 'destructive' });
            setScore(prev => prev - 10);
        }
    };
    
    const nextHeadline = () => {
        if(timeLeft > 0) {
            fetchHeadline();
        } else {
            setGameState('ended');
        }
    }

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
                           Can you tell real headlines from fakes? Test your skills!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="space-y-2 text-left">
                             <label className="text-sm font-medium">Difficulty</label>
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
                        <Button size="lg" className="text-xl w-full" onClick={startGame}>
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
                           <Newspaper className="text-primary"/>
                           Spot the Fake News
                        </div>
                        <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                            <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-500' : ''}`}/>
                            <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Score: <span className="font-bold text-primary">{score}</span></CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Progress value={(timeLeft / TOTAL_TIME) * 100} className="w-full h-2" />
                    
                    {isLoading || !headline ? (
                        <div className="min-h-[300px] flex flex-col justify-center items-center text-center space-y-4">
                            <Loader2 className="h-16 w-16 animate-spin text-primary"/>
                            <p className="text-xl text-muted-foreground">Getting headline for {country}...</p>
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
