
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Zap, Brain, Lightbulb, Trophy, Sparkles, Loader2, Award, RotateCcw, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { wordHunterPuzzles, WordPuzzle } from '@/lib/word-hunter-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { getUserProfile, updateGameProgress, GameProgress, defaultGameProgress } from '@/lib/firebase-service';


const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const MAX_LIVES = 3;
const LIFE_REGEN_MINUTES = 5;

type GameState = 'settings' | 'playing' | 'ended' | 'no-lives';
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
    const [isLoading, setIsLoading] = useState(true);
    const [solvedCount, setSolvedCount] = useState(0);
    
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    const [lives, setLives] = useState(MAX_LIVES);
    const [nextLifeAt, setNextLifeAt] = useState<number | null>(null);
    const [countdown, setCountdown] = useState('');
    
    const [isWrong, setIsWrong] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [availablePuzzles, setAvailablePuzzles] = useState<WordPuzzle[]>([]);
    
    const { toast } = useToast();
    const { user } = useAuth();

     const loadProgress = useCallback(async () => {
        if (!user) {
            const progress = defaultGameProgress();
            setLevel(progress.level);
            setXp(progress.xp);
            setXpToNextLevel(getXpToNextLevel(progress.level));
            setScore(progress.score);
            setLives(progress.lives);
            setNextLifeAt(progress.nextLifeAt);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const profile = await getUserProfile(user.uid);
        if (profile && profile.wordHunter) {
            const { level, xp, xpToNextLevel, score, lives, nextLifeAt } = profile.wordHunter;
            setLevel(level);
            setXp(xp);
            setXpToNextLevel(xpToNextLevel);
            setScore(score);
            setLives(lives ?? MAX_LIVES);
            setNextLifeAt(nextLifeAt ?? null);
        } else {
            const progress = defaultGameProgress();
            setLevel(progress.level);
            setXp(progress.xp);
            setXpToNextLevel(getXpToNextLevel(progress.level));
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
        if (lives >= MAX_LIVES) {
            setNextLifeAt(null);
            return;
        }

        let interval: NodeJS.Timeout;
        if (gameState === 'no-lives' && nextLifeAt) {
            interval = setInterval(() => {
                const now = Date.now();
                if (now >= nextLifeAt) {
                    const newLives = Math.min(MAX_LIVES, lives + 1);
                    setLives(newLives);
                    if (newLives < MAX_LIVES) {
                        setNextLifeAt(Date.now() + LIFE_REGEN_MINUTES * 60 * 1000);
                    } else {
                        setNextLifeAt(null);
                        setGameState('settings');
                    }
                } else {
                    const diff = nextLifeAt - now;
                    const minutes = Math.floor((diff / 1000) / 60);
                    const seconds = Math.floor((diff / 1000) % 60);
                    setCountdown(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [gameState, nextLifeAt, lives]);

    const saveProgress = useCallback(async () => {
        if (!user) return;
        const progress: GameProgress = { score, level, xp, xpToNextLevel, lives, nextLifeAt };
        await updateGameProgress(user.uid, 'wordHunter', progress);
    }, [user, score, level, xp, xpToNextLevel, lives, nextLifeAt]);
    
    useEffect(() => {
        if (gameState === 'ended' || gameState === 'settings' || gameState === 'no-lives') {
            saveProgress();
        }
    }, [gameState, saveProgress]);


    const getDifficulty = useCallback((): Difficulty => {
        if (level >= 6) return 'Hard';
        if (level >= 3) return 'Medium';
        return 'Easy';
    }, [level]);

    const setupNewPuzzle = useCallback((newPuzzle: WordPuzzle) => {
        setPuzzle(newPuzzle);
        const scrambled = newPuzzle.scrambled.split('').map((char, index) => ({ char, id: index }));
        setAvailableLetters(scrambled);
        setAnswerSlots([]);
        setIsCorrect(null);
        setIsLoading(false);
    }, []);

    const fetchPuzzle = useCallback(() => {
        setIsLoading(true);
        setAvailablePuzzles(currentPuzzles => {
            if (currentPuzzles.length === 0) {
                setGameState('ended');
                setIsLoading(false);
                return [];
            }
            const newPuzzles = [...currentPuzzles];
            const nextPuzzle = newPuzzles.pop();
            if (nextPuzzle) {
                setTimeout(() => setupNewPuzzle(nextPuzzle), 300);
            } else {
                setGameState('ended');
                setIsLoading(false);
            }
            return newPuzzles;
        });
    }, [setupNewPuzzle]);

    const startGame = useCallback(() => {
        if (lives <= 0) {
            setGameState('no-lives');
             if (!nextLifeAt) {
                 setNextLifeAt(Date.now() + LIFE_REGEN_MINUTES * 60 * 1000);
            }
            return;
        }

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
        setSolvedCount(0);
        setGameState('playing');
        setIsLoading(true);
        fetchPuzzle();
    }, [language, getDifficulty, toast, fetchPuzzle, lives, nextLifeAt]);

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
    
    const checkAnswer = useCallback(() => {
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
                toast({ title: "Not quite!", description: "Try again. -1 life.", variant: 'destructive' });
                
                const newLives = lives - 1;
                setLives(newLives);
                if (newLives < MAX_LIVES && !nextLifeAt) {
                    setNextLifeAt(Date.now() + LIFE_REGEN_MINUTES * 60 * 1000);
                }
                if (newLives <= 0) {
                    setGameState('no-lives');
                }

                setTimeout(() => {
                    setAvailableLetters(prev => [...prev, ...answerSlots].sort((a, b) => a.id - b.id));
                    setAnswerSlots([]);
                    setIsWrong(false);
                    setIsCorrect(null);
                }, 1000);
            }
        }
    }, [puzzle, answerSlots, isCorrect, getDifficulty, toast, xp, xpToNextLevel, level, lives, nextLifeAt]);
    
    useEffect(() => {
        checkAnswer();
    }, [checkAnswer]);


    const resetProgress = useCallback(async () => {
        const progress = defaultGameProgress();
        setLevel(progress.level);
        setXp(progress.xp);
        setXpToNextLevel(getXpToNextLevel(progress.level));
        setScore(progress.score);
        setLives(progress.lives);
        setNextLifeAt(progress.nextLifeAt);
        if (user) {
            await updateGameProgress(user.uid, 'wordHunter', progress);
        }
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    }, [user, toast]);
    
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
                           <Brain className="w-10 h-10 text-primary"/>
                           Word Hunter
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           Unscramble words to earn XP and level up!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                            {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-8 h-8", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
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
                            <Button size="lg" className="text-xl w-full" onClick={startGame} disabled={lives <= 0}>
                               <Sparkles className="mr-2"/> {lives > 0 ? 'Play Again' : 'Out of Lives'}
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
                        <div className="flex items-center gap-2">
                             {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-6 h-6", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
                    </CardTitle>
                     <CardDescription className="flex justify-between">
                        <span>Score: <span className="font-bold text-primary">{score}</span> | Level: <span className="font-bold text-primary">{level}</span></span>
                         <Button variant="destructive" size="sm" onClick={() => setGameState('ended')}>End Game</Button>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium text-muted-foreground">
                            <span>Level {level} XP</span>
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
                                <Button onClick={fetchPuzzle} className="glow-shadow" disabled={lives <= 0}>
                                    {lives > 0 ? 'Next Word' : 'Out of Lives'}
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
