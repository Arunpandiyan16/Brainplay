
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Zap, Brain, Lightbulb, Trophy, Sparkles, Loader2, Award, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { wordBank, WordPuzzle } from '@/lib/word-hunter-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const HINT_COST = 15;
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const STORAGE_KEY = 'wordHunterProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Language = 'English' | 'Tamil';

interface Letter {
    char: string;
    id: number;
    used: boolean;
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
    const [isWrong, setIsWrong] = useState(false);

    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [hintTaken, setHintTaken] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [solvedWords, setSolvedWords] = useState<WordPuzzle[]>([]);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    const [availablePuzzles, setAvailablePuzzles] = useState<WordPuzzle[]>([]);

    const { toast } = useToast();

    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem(STORAGE_KEY);
            if (savedProgress) {
                const { savedLevel, savedXp, savedXpToNextLevel, savedScore, savedSolvedWords } = JSON.parse(savedProgress);
                if (savedLevel && typeof savedLevel === 'number') {
                    setLevel(savedLevel);
                    setXp(savedXp || 0);
                    setXpToNextLevel(savedXpToNextLevel || getXpToNextLevel(savedLevel));
                    setScore(savedScore || 0);
                    setSolvedWords(savedSolvedWords || []);
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
                savedSolvedWords: solvedWords
            });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel, score, solvedWords]);


    const fetchPuzzle = useCallback(() => {
        setIsLoading(true);
        setHintTaken(false);
        setShowHint(false);
        setAnswerSlots([]);

        setAvailablePuzzles(currentPuzzles => {
             if (currentPuzzles.length === 0) {
                setGameState('ended');
                setIsLoading(false);
                return [];
            }

            const newPuzzles = [...currentPuzzles];
            const nextPuzzle = newPuzzles.pop();
            if (nextPuzzle) {
                setPuzzle(nextPuzzle);
                setAvailableLetters(nextPuzzle.scrambled.split('').map((char, index) => ({ char, id: index, used: false })));
            } else {
                 setGameState('ended');
            }
            setIsLoading(false);
            return newPuzzles;
        });

    }, []);
    
    const startGame = useCallback(() => {
        setScore(0);
        setSolvedWords([]);
        setPuzzle(null);
        setIsLoading(true);

        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');

        const languagePuzzles = wordBank[language];
        const filteredPuzzles = difficulties.flatMap(diff => languagePuzzles[diff] || []);
        const unsolvedPuzzles = filteredPuzzles.filter(p => !solvedWords.some(s => s.word === p.word));
        const shuffled = unsolvedPuzzles.sort(() => 0.5 - Math.random());
        
        if (shuffled.length === 0) {
            toast({
                variant: 'destructive',
                title: 'Out of Words!',
                description: 'You\'ve solved all available words for your level. Please reset progress or try another language.',
            });
            setGameState('settings');
            setIsLoading(false);
            return;
        }

        setAvailablePuzzles(shuffled);
        setGameState('playing');
    }, [level, language, solvedWords, toast]);

    useEffect(() => {
        if(gameState === 'playing' && availablePuzzles.length > 0 && !puzzle) {
            fetchPuzzle();
        }
    }, [gameState, puzzle, availablePuzzles, fetchPuzzle]);


    const checkAnswer = useCallback(() => {
        if (!puzzle || answerSlots.length !== puzzle.word.length) return;

        const guessedWord = answerSlots.map(s => s.char).join('');

        if (guessedWord.toLowerCase() === puzzle.word.toLowerCase()) {
            let points = 10;
            let awardedXp = 10;
            if (puzzle.difficulty === 'Medium') {
                points = 15;
                awardedXp = 15;
            }
            if (puzzle.difficulty === 'Hard') {
                points = 20;
                awardedXp = 20;
            }
            if (hintTaken) {
                points = Math.floor(points / 2);
                awardedXp = Math.floor(awardedXp / 2);
            }

            toast({ title: "Correct!", description: `+${points} points & +${awardedXp} XP`, className: 'bg-green-500' });
            setScore(prev => prev + points);
            setSolvedWords(prev => [...prev, puzzle]);

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

            setTimeout(() => {
                if (availablePuzzles.length > 0) {
                    fetchPuzzle();
                } else {
                    toast({
                        title: 'Out of Words!',
                        description: 'You\'ve solved all available words for your level. Congrats!',
                    });
                    setGameState('ended');
                }
            }, 500);

        } else {
            setIsWrong(true);
            toast({ title: "Not quite!", description: "Try again.", variant: 'destructive' });
            setTimeout(() => {
                setAnswerSlots([]);
                setAvailableLetters(prev => prev.map(l => ({ ...l, used: false })));
                setIsWrong(false);
            }, 800);
        }
    }, [answerSlots, puzzle, hintTaken, xp, xpToNextLevel, level, fetchPuzzle, toast, availablePuzzles.length]);

    useEffect(() => {
        if (puzzle && answerSlots.length === puzzle.word.length) {
            checkAnswer();
        }
    }, [answerSlots, puzzle, checkAnswer]);

    const handleLetterSelect = (letter: Letter) => {
        if (letter.used || (puzzle && answerSlots.length >= puzzle.word.length)) return;
        setAvailableLetters(prev => prev.map(l => l.id === letter.id ? { ...l, used: true } : l));
        setAnswerSlots(prev => [...prev, { id: letter.id, char: letter.char }]);
    };

    const handleLetterDeselect = (slot: AnswerSlot) => {
        setAnswerSlots(prev => prev.filter(s => s.id !== slot.id));
        setAvailableLetters(prev => prev.map(l => l.id === slot.id ? { ...l, used: false } : l));
    };

    const handleHint = () => {
        if (hintTaken || score < HINT_COST) {
             toast({ title: "Can't take hint", description: hintTaken ? "You've already used it for this word." : "Not enough points.", variant: 'destructive' });
            return;
        }
        setShowHint(true);
        setHintTaken(true);
        setScore(prev => prev - HINT_COST);
    };

    const handleSkip = () => {
      if(isLoading) return;
      fetchPuzzle();
    }

    const resetProgress = () => {
        setLevel(1);
        setXp(0);
        setScore(0);
        setSolvedWords([]);
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
                           Game Over!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">Your Final Score:</div>
                        <div className="text-7xl font-bold text-primary">{score}</div>
                        <div className="flex justify-around w-full">
                            <div className="text-lg">
                                <p className="text-muted-foreground">Words Solved</p>
                                <p className="font-bold">{solvedWords.length}</p>
                            </div>
                            <div className="text-2xl">Final Level: <span className="text-primary">{level}</span></div>
                        </div>
                        {solvedWords.length > 0 &&
                        <Card>
                            <CardHeader><CardTitle>Solved Words</CardTitle></CardHeader>
                            <CardContent>
                                <ul className="space-y-1 text-left max-h-40 overflow-y-auto">
                                    {solvedWords.map(w => <li key={w.word}>{w.word} <span className="text-muted-foreground text-sm">({w.difficulty})</span></li>)}
                                </ul>
                            </CardContent>
                        </Card>
                        }
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
        <div className={cn("flex justify-center gap-2 md:gap-3 flex-wrap", isWrong && "animate-shake")}>
            {puzzle?.word.split('').map((_, index) => {
                const slot = answerSlots[index];
                return (
                    <button
                        key={index}
                        onClick={() => slot && handleLetterDeselect(slot)}
                        className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-background text-2xl md:text-4xl font-bold rounded-lg shadow-inner uppercase cursor-pointer disabled:cursor-not-allowed"
                        disabled={!slot}
                    >
                        {slot?.char}
                    </button>
                );
            })}
        </div>
    );

    const LetterPool = () => (
        <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
            {availableLetters.map((letter) => (
                <button
                    key={letter.id}
                    onClick={() => handleLetterSelect(letter)}
                    disabled={letter.used}
                    className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-secondary text-2xl md:text-4xl font-bold rounded-lg shadow-md uppercase transition-all hover:bg-primary hover:text-primary-foreground disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:bg-secondary"
                >
                    {letter.char}
                </button>
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
                            <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between">
                        <span>{language} - Words Solved: {solvedWords.length}</span>
                        <span className="font-semibold">{puzzle?.difficulty}</span>
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
                            <div className="p-4 rounded-lg bg-secondary min-h-[100px] flex items-center justify-center">
                                <AnswerDisplay />
                            </div>

                             <div className="p-4 rounded-lg min-h-[140px] flex items-center justify-center">
                                <LetterPool />
                            </div>

                            {showHint && (
                                <Card className="bg-secondary/50">
                                    <CardContent className="p-4 flex items-center gap-2">
                                        <Lightbulb className="text-yellow-400" />
                                        <p className="text-muted-foreground">{puzzle.hint}</p>
                                    </CardContent>
                                </Card>
                            )}

                             <div className="flex justify-between items-center">
                                <Button variant="outline" onClick={handleHint} disabled={hintTaken || isLoading || score < HINT_COST}>
                                    <Lightbulb className="mr-2"/>
                                    Hint (-{HINT_COST} pts)
                                </Button>

                                <Button variant="outline" onClick={handleSkip} disabled={isLoading}>
                                    Skip Word
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

    