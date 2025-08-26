
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Zap, Brain, Lightbulb, Trophy, Sparkles, Loader2, Award, RotateCcw, Check, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { wordHunterPuzzles, WordPuzzle } from '@/lib/word-hunter-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const STORAGE_KEY = 'wordHunterProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Language = 'English' | 'Tamil';

interface Letter {
    char: string;
    id: number;
}

interface AnswerSlot {
    id: number;
    char: string;
}

export default function WordHunterPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [language, setLanguage] = useState<Language>('English');
    
    const [puzzle, setPuzzle] = useState<WordPuzzle | null>(null);
    const [availableLetters, setAvailableLetters] = useState<Letter[]>([]);
    const [answerSlots, setAnswerSlots] = useState<AnswerSlot[]>([]);
    
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [solvedCount, setSolvedCount] = useState(0);
    
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    
    const [isWrong, setIsWrong] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [availablePuzzles, setAvailablePuzzles] = useState<WordPuzzle[]>([]);
    
    const { toast } = useToast();

    // Load progress
    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem(STORAGE_KEY);
            if (savedProgress) {
                const data = JSON.parse(savedProgress);
                setLevel(data.savedLevel || 1);
                setXp(data.savedXp || 0);
                setXpToNextLevel(data.savedXpToNextLevel || getXpToNextLevel(data.savedLevel || 1));
                setScore(data.savedScore || 0);
                setSolvedCount(data.savedSolvedCount || 0);
            }
        } catch (error) {
            console.error("Failed to load progress from localStorage", error);
        }
    }, []);

    // Save progress
    useEffect(() => {
        try {
            const progress = JSON.stringify({
                savedLevel: level,
                savedXp: xp,
                savedXpToNextLevel: xpToNextLevel,
                savedScore: score,
                savedSolvedCount: solvedCount
            });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel, score, solvedCount]);

    const getDifficulty = useCallback((): Difficulty => {
        if (level >= 6) return 'Hard';
        if (level >= 3) return 'Medium';
        return 'Easy';
    }, [level]);

    const setupNewPuzzle = (newPuzzle: WordPuzzle) => {
        setPuzzle(newPuzzle);
        const scrambled = newPuzzle.scrambled.split('').map((char, index) => ({ char, id: index }));
        setAvailableLetters(scrambled);
        setAnswerSlots([]);
        setIsCorrect(null);
        setIsLoading(false);
    };

    const fetchPuzzle = () => {
        setIsLoading(true);
        if (availablePuzzles.length === 0) {
            setGameState('ended');
            setIsLoading(false);
            return;
        }
        const newPuzzles = [...availablePuzzles];
        const nextPuzzle = newPuzzles.pop();
        setAvailablePuzzles(newPuzzles);

        if (nextPuzzle) {
            setTimeout(() => setupNewPuzzle(nextPuzzle), 300);
        } else {
             setGameState('ended');
             setIsLoading(false);
        }
    };

    const startGame = () => {
        const difficulty = getDifficulty();
        const puzzlesForLevel = wordHunterPuzzles.filter(p =>
            p.language === language && p.difficulty === difficulty
        );
        const shuffledPuzzles = puzzlesForLevel.sort(() => 0.5 - Math.random());

        if (shuffledPuzzles.length === 0) {
            toast({
                title: 'No Puzzles Available',
                description: 'There are no words for your level in this language. Try resetting progress or changing the language.',
                variant: 'destructive',
            });
            return;
        }

        setAvailablePuzzles(shuffledPuzzles);
        setScore(0);
        setSolvedCount(0);
        setGameState('playing');
        setIsLoading(true);

        // Fetch first puzzle
        const firstPuzzle = shuffledPuzzles.pop();
        if(firstPuzzle) {
            setAvailablePuzzles(shuffledPuzzles);
            setTimeout(() => setupNewPuzzle(firstPuzzle), 300);
        } else {
            setGameState('ended');
        }
    };

    const handleLetterSelect = (letter: Letter) => {
        if (!puzzle || answerSlots.length >= puzzle.word.length || isCorrect !== null) return;
        setAnswerSlots(prev => [...prev, letter]);
        setAvailableLetters(prev => prev.filter(l => l.id !== letter.id));
    };

    const handleLetterDeselect = (slot: AnswerSlot) => {
        if(isCorrect !== null) return;
        setAnswerSlots(prev => prev.filter(s => s.id !== slot.id));
        setAvailableLetters(prev => [...prev, slot].sort((a, b) => a.id - b.id));
    };
    
    useEffect(() => {
        if (puzzle && answerSlots.length === puzzle.word.length && isCorrect === null) {
            const guessedWord = answerSlots.map(s => s.char).join('');
            if (guessedWord.toLowerCase() === puzzle.word.toLowerCase()) {
                setIsCorrect(true);
                const difficulty = getDifficulty();
                let points = 10;
                let awardedXp = 10;
                if (difficulty === 'Medium') {
                    points = 15;
                    awardedXp = 15;
                }
                if (difficulty === 'Hard') {
                    points = 20;
                    awardedXp = 20;
                }
    
                toast({ title: "Correct!", description: `+${points} points & +${awardedXp} XP`, className: 'bg-green-500' });
                setScore(prev => prev + points);
                setSolvedCount(prev => prev + 1);
    
                const newXp = xp + awardedXp;
                if (newXp >= xpToNextLevel) {
                    const nextLevel = level + 1;
                    setLevel(nextLevel);
                    setXp(newXp - xpToNextLevel);
                    setXpToNextLevel(getXpToNextLevel(nextLevel));
                    toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! Harder words unlocked.`, className: 'bg-primary text-primary-foreground' });
                } else {
                    setXp(newXp);
                }

            } else {
                setIsCorrect(false);
                setIsWrong(true);
                toast({ title: "Not quite!", description: "Try again.", variant: 'destructive' });
                setTimeout(() => {
                    setAvailableLetters(prev => [...prev, ...answerSlots].sort((a, b) => a.id - b.id));
                    setAnswerSlots([]);
                    setIsWrong(false);
                    setIsCorrect(null);
                }, 1000);
            }
        }
    }, [answerSlots, puzzle, isCorrect, getDifficulty, toast, xp, xpToNextLevel, level]);


    const resetProgress = useCallback(() => {
        setLevel(1);
        setXp(0);
        setScore(0);
        setSolvedCount(0);
        setXpToNextLevel(getXpToNextLevel(1));
        localStorage.removeItem(STORAGE_KEY);
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    }, [toast]);
    
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
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           Unscramble words to earn XP and level up!
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
                           Round Over!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">Your Final Score:</div>
                        <div className="text-7xl font-bold text-primary">{score}</div>
                        <div className="flex justify-around w-full">
                            <div className="text-lg">
                                <p className="text-muted-foreground">Words Solved</p>
                                <p className="font-bold">{solvedCount}</p>
                            </div>
                            <div className="text-2xl">Final Level: <span className="text-primary">{level}</span></div>
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

    const AnswerDisplay = () => (
        <div className={cn("flex justify-center gap-2 md:gap-3 flex-wrap min-h-[72px] items-center", isWrong && "animate-shake")}>
            {puzzle?.word.split('').map((_, index) => {
                const slot = answerSlots[index];
                const displayChar = slot ? slot.char : '';
                return (
                    <div
                        key={index}
                        onClick={() => slot && handleLetterDeselect(slot)}
                        className={cn("flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-2xl md:text-4xl font-bold rounded-lg shadow-inner uppercase", 
                            slot ? "bg-secondary cursor-pointer" : "bg-muted",
                            isCorrect === true && "border-2 border-green-500",
                        )}
                        style={{ minWidth: '3rem' }}
                    >
                        {displayChar}
                    </div>
                );
            })}
        </div>
    );

    const LetterPool = () => (
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
            {availableLetters.map((letter) => (
                <Button
                    key={letter.id}
                    variant="outline"
                    onClick={() => handleLetterSelect(letter)}
                    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 text-2xl md:text-4xl font-bold rounded-lg shadow-md uppercase transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-50"
                    disabled={isCorrect !== null}
                >
                    {letter.char}
                </Button>
            ))}
        </div>
    );

    const difficulty = getDifficulty();

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
                            <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between">
                        <span>{language} - Words Solved: {solvedCount}</span>
                        <span className="font-semibold">{difficulty}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-muted-foreground">
                            <span>Level {level}</span>
                            <span>{xp} / {xpToNextLevel} XP</span>
                        </div>
                        <Progress value={(xp / xpToNextLevel) * 100} className="w-full h-2" />
                    </div>

                    {isLoading || !puzzle ? (
                        <div className="text-center space-y-4 min-h-[300px] flex flex-col justify-center">
                            <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                            <p className="text-xl text-muted-foreground">Loading new word...</p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <Card className="bg-secondary/50">
                                <CardContent className="p-4 flex items-center justify-center gap-2 text-center">
                                    <Lightbulb className="text-yellow-400 h-5 w-5 shrink-0" />
                                    <p className="text-muted-foreground font-medium">{puzzle.hint}</p>
                                </CardContent>
                            </Card>

                            <div className="p-4 rounded-lg bg-secondary min-h-[100px] flex items-center justify-center">
                                <AnswerDisplay />
                            </div>

                             <div className="p-4 rounded-lg min-h-[140px] flex items-center justify-center">
                                <LetterPool />
                            </div>
                            
                            {isCorrect === true && (
                                <div className="text-center">
                                <Button onClick={fetchPuzzle} className="glow-shadow">
                                    Next Word
                                </Button>
                                </div>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
