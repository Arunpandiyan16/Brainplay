'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Clock, Loader2, Zap, Brain, Lightbulb, Trophy, Sparkles, Languages, Award, ShieldQuestion } from 'lucide-react';
import { generateWord, WordHunterInput, WordHunterOutput } from '@/ai/flows/word-hunter-flow';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const TOTAL_TIME = 120; // 2 minutes
const ROUND_TIME = 30;

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Language = 'English' | 'Tamil';

export default function WordHunterPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [difficulty, setDifficulty] = useState<Difficulty>('Medium');
    const [language, setLanguage] = useState<Language>('English');
    
    const [puzzle, setPuzzle] = useState<WordHunterOutput | null>(null);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [gameTimeLeft, setGameTimeLeft] = useState(TOTAL_TIME);
    const [roundTimeLeft, setRoundTimeLeft] = useState(ROUND_TIME);
    
    const [isLoading, setIsLoading] = useState(false);
    const [hintTaken, setHintTaken] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [solvedWords, setSolvedWords] = useState<WordHunterOutput[]>([]);

    const { toast } = useToast();

    const fetchPuzzle = useCallback(async () => {
        setIsLoading(true);
        setHintTaken(false);
        setShowHint(false);
        setGuess('');
        try {
            const newPuzzle = await generateWord({ difficulty, language });
            setPuzzle(newPuzzle);
            setRoundTimeLeft(ROUND_TIME);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Failed to generate a new word. Please try again.',
            });
            setGameState('ended');
        } finally {
            setIsLoading(false);
        }
    }, [difficulty, language, toast]);

    const startGame = () => {
        setScore(0);
        setGameTimeLeft(TOTAL_TIME);
        setSolvedWords([]);
        setGameState('playing');
        fetchPuzzle();
    };

    useEffect(() => {
        if (gameState !== 'playing') return;

        if (gameTimeLeft <= 0) {
            setGameState('ended');
            return;
        }

        const gameTimer = setInterval(() => {
            setGameTimeLeft(prev => Math.max(0, prev - 1));
            setRoundTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(gameTimer);
    }, [gameState, gameTimeLeft]);

    useEffect(() => {
        if (roundTimeLeft <= 0 && gameState === 'playing') {
            toast({ title: "Time's up for this word!", description: "Moving to the next one." });
            fetchPuzzle();
        }
    }, [roundTimeLeft, gameState, fetchPuzzle, toast]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!puzzle || !guess) return;

        if (guess.toLowerCase() === puzzle.word.toLowerCase()) {
            toast({ title: "Correct!", description: "+10 points", className: 'bg-green-500' });
            setScore(prev => prev + 10);
            setSolvedWords(prev => [...prev, puzzle]);
            fetchPuzzle();
        } else {
            toast({ title: "Incorrect!", description: "-3 points", variant: 'destructive' });
            setScore(prev => prev - 3);
        }
        setGuess('');
    };
    
    const handleHint = () => {
        if (hintTaken || score < 2) {
             toast({ title: "Can't take hint", description: hintTaken ? "You've already used it for this word." : "Not enough points.", variant: 'destructive' });
            return;
        }
        setShowHint(true);
        setHintTaken(true);
        setScore(prev => prev - 2);
    };

    if (gameState === 'settings') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-md text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Brain className="w-10 h-10 text-primary"/>
                           Word Hunter
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Unscramble words against the clock. Choose your challenge!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2 text-left">
                            <label className="text-sm font-medium">Language</label>
                            <Select onValueChange={(v: Language) => setLanguage(v)} defaultValue={language}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="English">English</SelectItem>
                                    <SelectItem value="Tamil">Tamil</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
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
                        <div className="text-lg">
                            <p className="text-muted-foreground">Words Solved</p>
                            <p className="font-bold">{solvedWords.length}</p>
                        </div>
                        <Card>
                            <CardHeader><CardTitle>Solved Words</CardTitle></CardHeader>
                            <CardContent>
                                {solvedWords.length > 0 ? (
                                    <ul className="space-y-1 text-left">
                                        {solvedWords.map(w => <li key={w.word}>{w.word} - <i className="text-muted-foreground">{w.hint}</i></li>)}
                                    </ul>
                                ) : <p>You didn't solve any words.</p>}
                            </CardContent>
                        </Card>
                        <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const ScrambledLetters = () => (
        <div className="flex justify-center gap-2 md:gap-4">
            {puzzle?.scrambled.split('').map((char, index) => (
                <div key={index} className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-background text-2xl md:text-4xl font-bold rounded-lg">
                    {char}
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-2xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <Brain className="text-primary"/>
                           Word Hunter
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                                <Award />
                                <span>{score}</span>
                            </div>
                            <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                                <Clock className={`w-5 h-5 ${gameTimeLeft <= 10 ? 'text-red-500' : ''}`}/>
                                <span>{gameTimeLeft}</span>
                            </div>
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between">
                        <span>{language} - {difficulty}</span>
                        <span>Words Solved: {solvedWords.length}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                     <Progress value={(gameTimeLeft / TOTAL_TIME) * 100} className="w-full h-2" />

                    {isLoading || !puzzle ? (
                        <div className="text-center space-y-4 min-h-[250px] flex flex-col justify-center">
                            <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                            <p className="text-xl text-muted-foreground">Generating new word...</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="p-4 rounded-lg bg-secondary min-h-[120px] flex items-center justify-center">
                                <ScrambledLetters />
                            </div>
                            
                            {showHint && (
                                <Card className="bg-secondary/50">
                                    <CardContent className="p-4 flex items-center gap-2">
                                        <Lightbulb className="text-yellow-400" />
                                        <p className="text-muted-foreground">{puzzle.hint}</p>
                                    </CardContent>
                                </Card>
                            )}
                            
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <Input 
                                    value={guess}
                                    onChange={(e) => setGuess(e.target.value)}
                                    placeholder="Your guess..."
                                    className="text-lg h-12"
                                    disabled={isLoading}
                                />
                                <Button type="submit" size="lg" className="h-12" disabled={isLoading}>Guess</Button>
                            </form>
                             <div className="flex justify-between items-center">
                                <Button variant="outline" onClick={handleHint} disabled={hintTaken || isLoading || score < 2}>
                                    <Lightbulb className="mr-2"/>
                                    Hint (-2 pts)
                                </Button>
                                 <div className="w-2/5">
                                    <p className="text-sm text-muted-foreground text-right mb-1">Round time</p>
                                    <Progress value={(roundTimeLeft / ROUND_TIME) * 100} className="h-1" />
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
