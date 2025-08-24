'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Clock, Zap, Brain, Lightbulb, Trophy, Sparkles, Loader2, Award, Languages, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { wordBank, WordPuzzle } from '@/lib/word-hunter-data';

const TOTAL_TIME = 120; // 2 minutes
const HINT_COST = 5;
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 25;
const STORAGE_KEY = 'wordHunterProgress';

type GameState = 'settings' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';
type Language = 'English' | 'Tamil';

export default function WordHunterPage() {
    const [gameState, setGameState] = useState<GameState>('settings');
    const [language, setLanguage] = useState<Language>('English');
    
    const [puzzle, setPuzzle] = useState<WordPuzzle | null>(null);
    const [guess, setGuess] = useState('');
    const [score, setScore] = useState(0);
    const [gameTimeLeft, setGameTimeLeft] = useState(TOTAL_TIME);
    
    const [isLoading, setIsLoading] = useState(false);
    const [hintTaken, setHintTaken] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [solvedWords, setSolvedWords] = useState<WordPuzzle[]>([]);

    // Leveling state
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    const [availablePuzzles, setAvailablePuzzles] = useState<WordPuzzle[]>([]);
    
    const inputRef = useRef<HTMLInputElement>(null);
    const { toast } = useToast();
    
    // Load progress from localStorage on initial render
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

    // Save progress to localStorage whenever it changes
    useEffect(() => {
        try {
            const progress = JSON.stringify({ savedLevel: level, savedXp: xp, savedXpToNextLevel: xpToNextLevel });
            localStorage.setItem(STORAGE_KEY, progress);
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [level, xp, xpToNextLevel]);
    
    const loadAndShufflePuzzles = useCallback(() => {
        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');
        
        const languagePuzzles = wordBank[language];
        const filteredPuzzles = difficulties.flatMap(diff => languagePuzzles[diff] || []);
        
        // Filter out already solved words from the current session
        const unsolvedPuzzles = filteredPuzzles.filter(p => !solvedWords.some(s => s.word === p.word));

        setAvailablePuzzles(unsolvedPuzzles.sort(() => 0.5 - Math.random()));
    }, [language, level, solvedWords]);


    const fetchPuzzle = useCallback(() => {
        setIsLoading(true);
        setHintTaken(false);
        setShowHint(false);
        setGuess('');

        setTimeout(() => {
             if (availablePuzzles.length === 0) {
                 toast({
                    variant: 'destructive',
                    title: 'Out of Words!',
                    description: 'You\'ve solved all available words for your level. Level up or reset progress!',
                });
                setGameState('ended');
                setIsLoading(false);
                return;
            }
            
            const nextPuzzle = availablePuzzles.pop();
            setPuzzle(nextPuzzle!);
            setAvailablePuzzles(availablePuzzles);
            setIsLoading(false);
        }, 500)
       
    }, [availablePuzzles, toast]);
    
    useEffect(() => {
        if (gameState === 'playing') {
            loadAndShufflePuzzles();
        }
    }, [gameState, loadAndShufflePuzzles]);

    useEffect(() => {
        if (gameState === 'playing' && availablePuzzles.length > 0 && !puzzle) {
            fetchPuzzle();
        }
    }, [gameState, puzzle, availablePuzzles, fetchPuzzle])

    const startGame = () => {
        setScore(0);
        setGameTimeLeft(TOTAL_TIME);
        setSolvedWords([]);
        setGameState('playing');
        setPuzzle(null); // Ensure loading screen shows
    };

    useEffect(() => {
        if (gameState !== 'playing') return;

        if (gameTimeLeft <= 0) {
            setGameState('ended');
            return;
        }

        const gameTimer = setInterval(() => {
            setGameTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);

        return () => clearInterval(gameTimer);
    }, [gameState, gameTimeLeft]);

     useEffect(() => {
        if (gameState === 'playing' && !isLoading) {
            inputRef.current?.focus();
        }
    }, [puzzle, gameState, isLoading]);


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!puzzle || !guess) return;

        if (guess.trim().toLowerCase() === puzzle.word.toLowerCase()) {
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
            
            toast({ title: "Correct!", description: `+${points} points & +${awardedXp} XP`, className: 'bg-green-500' });
            setScore(prev => prev + points);
            setSolvedWords(prev => [...prev, puzzle]);
            
            // Handle XP and leveling up
            const newXp = xp + awardedXp;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                setXpToNextLevel(getXpToNextLevel(nextLevel));
                toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! Harder words unlocked.`, className: 'bg-primary text-primary-foreground' });
                loadAndShufflePuzzles(); // Reload puzzles for new level
            } else {
                setXp(newXp);
            }
            
            fetchPuzzle();
        } else {
            toast({ title: "Incorrect!", description: "-3 points", variant: 'destructive' });
            setScore(prev => prev - 3);
        }
        setGuess('');
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
                        <div className="text-lg">
                            <p className="text-muted-foreground">Words Solved</p>
                            <p className="font-bold">{solvedWords.length}</p>
                        </div>
                         <div className="text-2xl">Final Level: <span className="text-primary">{level}</span></div>
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
                        <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    const ScrambledLetters = () => (
        <div className="flex justify-center gap-2 md:gap-4 flex-wrap">
            {puzzle?.scrambled.split('').map((char, index) => (
                <div key={index} className="flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-background text-2xl md:text-4xl font-bold rounded-lg shadow-inner">
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
                                    ref={inputRef}
                                    value={guess}
                                    onChange={(e) => setGuess(e.target.value)}
                                    placeholder="Your guess..."
                                    className="text-lg h-12 text-center text-2xl"
                                    disabled={isLoading}
                                />
                                <Button type="submit" size="lg" className="h-12 text-lg" disabled={isLoading}>Guess</Button>
                            </form>
                             <div className="flex justify-between items-center">
                                <Button variant="outline" onClick={handleHint} disabled={hintTaken || isLoading || score < HINT_COST}>
                                    <Lightbulb className="mr-2"/>
                                    Hint (-{HINT_COST} pts)
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
