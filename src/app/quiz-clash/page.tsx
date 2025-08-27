
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { X, Check, BrainCircuit, Loader2, Trophy, Zap, Sparkles, SkipForward, RotateCcw, Award, Heart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { useCountry } from '@/hooks/use-country';
import { useAuth } from '@/hooks/use-auth';
import { quizQuestions as staticQuestions, QuizQuestion } from '@/lib/quiz-data';
import Link from 'next/link';
import { getUserProfile, updateGameProgress, GameProgress, defaultGameProgress } from '@/lib/firebase-service';
import { cn } from '@/lib/utils';

const SKIP_LIMIT = 2;
const XP_PER_CORRECT = 10;
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 20;
const MAX_LIVES = 3;
const LIFE_REGEN_MINUTES = 5;

type GameState = 'start' | 'playing' | 'ended' | 'no-lives';
type Difficulty = 'Easy' | 'Medium' | 'Hard';


export default function QuizClashPage() {
    const [gameState, setGameState] = useState<GameState>('start');
    const [question, setQuestion] = useState<QuizQuestion | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [skipsUsed, setSkipsUsed] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));
    const [lives, setLives] = useState(MAX_LIVES);
    const [nextLifeAt, setNextLifeAt] = useState<number | null>(null);
    const [countdown, setCountdown] = useState('');

    const [availableQuestions, setAvailableQuestions] = useState<QuizQuestion[]>([]);

    const { toast } = useToast();
    const { country } = useCountry();
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
        };
        setIsLoading(true);
        const profile = await getUserProfile(user.uid);
        if (profile && profile.quizClash) {
            const { level, xp, xpToNextLevel, score, lives, nextLifeAt } = profile.quizClash;
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
                        setGameState('start');
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
        await updateGameProgress(user.uid, 'quizClash', progress);
    }, [user, score, level, xp, xpToNextLevel, lives, nextLifeAt]);
    
    useEffect(() => {
        if (gameState === 'ended' || gameState === 'start' || gameState === 'no-lives') {
            saveProgress();
        }
    }, [gameState, saveProgress]);


    const fetchQuestion = useCallback(() => {
        setIsLoading(true);
        setSelectedAnswer(null);
        setIsCorrect(null);

        setAvailableQuestions(currentQuestions => {
            if (currentQuestions.length === 0) {
                setGameState('ended');
                setIsLoading(false);
                return [];
            }
            const newQuestions = [...currentQuestions];
            const nextQuestion = newQuestions.pop();
            setQuestion(nextQuestion!);
            setIsLoading(false);
            return newQuestions;
        });
    }, []);

    const startGame = useCallback(() => {
        if (lives <= 0) {
            setGameState('no-lives');
             if (!nextLifeAt) {
                 setNextLifeAt(Date.now() + LIFE_REGEN_MINUTES * 60 * 1000);
            }
            return;
        }

        setQuestion(null);
        setConsecutiveCorrect(0);
        setSkipsUsed(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setAnsweredQuestions([]);
        setIsLoading(true);
        
        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');

        const countryFiltered = staticQuestions.filter(q =>
            (q.country === country || q.country === 'Global') &&
            difficulties.includes(q.difficulty)
        );
        
        const shuffled = countryFiltered.sort(() => 0.5 - Math.random());
        
        if (shuffled.length === 0) {
            toast({
                variant: 'destructive',
                title: 'No Questions Available',
                description: 'There are no questions for your level in this region. Please try another region or reset progress.',
            });
            setGameState('start');
            setIsLoading(false);
            return;
        }
        
        setAvailableQuestions(shuffled);
        setGameState('playing');
    }, [level, country, toast, lives, nextLifeAt]);


    useEffect(() => {
        if (gameState === 'playing' && availableQuestions.length > 0 && !question) {
            fetchQuestion();
        }
    }, [gameState, question, availableQuestions.length, fetchQuestion]);


    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null || !question) return;

        setSelectedAnswer(index);
        const correct = index === question.answerIndex;
        setIsCorrect(correct);
        setAnsweredQuestions(prev => [...prev, { ...question, answeredCorrectly: correct, skipped: false }]);

        if (correct) {
            let points = 10;
            if (question.difficulty === 'Medium') points = 15;
            if (question.difficulty === 'Hard') points = 20;

            const newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);

            if (newConsecutiveCorrect > 0 && newConsecutiveCorrect % 3 === 0) {
                points += 5;
                toast({ title: "Streak Bonus!", description: "+5 extra points for a 3-in-a-row streak!", className: "bg-yellow-500/20" });
            }
            setScore(prev => prev + points);

            const newXp = xp + XP_PER_CORRECT;
            if (newXp >= xpToNextLevel) {
                const nextLevel = level + 1;
                setLevel(nextLevel);
                setXp(newXp - xpToNextLevel);
                const newXpToNext = getXpToNextLevel(nextLevel);
                setXpToNextLevel(newXpToNext);
                toast({ title: `Level Up to ${nextLevel}!`, description: "You've unlocked harder questions. Keep going!", className: 'bg-primary text-primary-foreground' });
            } else {
                setXp(newXp);
            }

        } else {
            toast({ title: "Incorrect!", description: "-1 life.", variant: 'destructive' });
            setScore(prev => Math.max(0, prev - 5));
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

    const handleSkip = () => {
        if (skipsUsed >= SKIP_LIMIT || selectedAnswer !== null || !question) return;
        setSkipsUsed(prev => prev + 1);
        setConsecutiveCorrect(0);
        setAnsweredQuestions(prev => [...prev, { ...question, answeredCorrectly: false, skipped: true }]);
        fetchQuestion();
    };

    const getButtonClass = (index: number) => {
        if (selectedAnswer !== null && question) {
            if (index === question.answerIndex) {
                return 'bg-green-500 hover:bg-green-600 text-white';
            }
            if (index === selectedAnswer) {
                return 'bg-red-500 hover:bg-red-600 text-white';
            }
        }
        return 'bg-secondary hover:bg-accent text-secondary-foreground';
    };

    const resetProgress = async () => {
        const progress = defaultGameProgress();
        setLevel(progress.level);
        setXp(progress.xp);
        setXpToNextLevel(getXpToNextLevel(progress.level));
        setScore(progress.score);
        setLives(progress.lives);
        setNextLifeAt(progress.nextLifeAt);
        if (user) {
            await updateGameProgress(user.uid, 'quizClash', progress);
        }
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

    const renderCategoryBreakdown = () => {
        const breakdown: { [key: string]: { correct: number; total: number } } = {};

        answeredQuestions.forEach(q => {
             if (q.skipped) return;
            if (!breakdown[q.category]) {
                breakdown[q.category] = { correct: 0, total: 0 };
            }
            breakdown[q.category].total++;
            if (q.answeredCorrectly) {
                breakdown[q.category].correct++;
            }
        });

        if (Object.keys(breakdown).length === 0) return null;

        return (
            <div className="w-full space-y-2 text-left bg-secondary/50 p-4 rounded-lg">
                <h4 className="font-semibold text-center">Category Breakdown</h4>
                {Object.entries(breakdown).map(([category, stats]) => (
                    <div key={category} className="flex justify-between items-center text-sm">
                        <p>{category}</p>
                        <p className="font-mono">{stats.correct} / {stats.total}</p>
                    </div>
                ))}
            </div>
        );
    };

    if (isLoading) {
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
                        <Button size="lg" variant="outline" onClick={() => setGameState('start')}>
                           Back to Game Info
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (gameState === 'start') {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary/50 glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <BrainCircuit className="w-10 h-10 text-primary"/>
                           Quiz Clash
                        </CardTitle>
                        <CardDescription className="text-lg mt-2">
                           Your current level is <span className="font-bold text-primary">{level}</span>.
                           Answer questions to earn XP and level up. Good luck!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                        <div className="flex justify-center items-center gap-2 text-2xl font-bold">
                            {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-8 h-8", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
                        <Button size="lg" className="text-xl w-full glow-shadow" onClick={startGame} disabled={lives <= 0}>
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
        const attemptedQuestions = answeredQuestions.filter(q => !q.skipped).length;
        const correctAnswers = answeredQuestions.filter(q => q.answeredCorrectly).length;
        const accuracy = attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary/50 glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Trophy className="w-10 h-10 text-yellow-400"/>
                           Round Complete!
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">Your Final Score:</div>
                        <div className="text-7xl font-bold text-primary">{score}</div>
                         <div className="text-2xl">Final Level: <span className="font-bold text-primary">{level}</span></div>
                        <div className="flex justify-around text-lg w-full bg-secondary/50 p-4 rounded-lg">
                             <div>
                                <p className="text-muted-foreground">Correct</p>
                                <p className="font-bold text-xl">{correctAnswers}/{attemptedQuestions}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Accuracy</p>
                                <p className="font-bold text-xl">{accuracy.toFixed(0)}%</p>
                            </div>
                        </div>
                        {renderCategoryBreakdown()}
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

    const questionNumber = answeredQuestions.length + 1;

    if (!question) {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl border-primary/50 glow-shadow">
                    <CardContent className="p-8 text-center space-y-4">
                        <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                        <p className="text-xl text-muted-foreground">Loading question...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-2xl border-primary/50 glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <BrainCircuit className="text-primary"/>
                           Quiz Clash
                        </div>
                        <div className="flex items-center gap-2">
                             {Array.from({ length: MAX_LIVES }).map((_, i) => (
                                <Heart key={i} className={cn("w-6 h-6", i < lives ? "text-red-500 fill-red-500" : "text-muted-foreground")} />
                            ))}
                        </div>
                    </CardTitle>
                    <CardDescription className="flex justify-between items-center">
                        <span>Question {questionNumber}</span>
                        <div className="flex gap-2">
                          <Badge variant="secondary">{question.difficulty}</Badge>
                          <Badge variant="outline">{question.category}</Badge>
                        </div>
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

                    <div className="p-4 rounded-lg bg-secondary text-center min-h-[120px] flex items-center justify-center">
                        <p className="text-xl font-semibold">{question.question}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.choices.map((choice, index) => (
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
                                            index === question.answerIndex ? <Check/> : (index === selectedAnswer ? <X/> : <span/>)
                                        )}
                                    </div>
                                    <span>{choice}</span>
                                </div>
                            </Button>
                        ))}
                    </div>

                     {selectedAnswer === null && (
                       <div className="flex items-center justify-between">
                            <Button
                                variant="outline"
                                onClick={handleSkip}
                                disabled={skipsUsed >= SKIP_LIMIT || selectedAnswer !== null}
                            >
                                <SkipForward className="mr-2" />
                                Skip ({SKIP_LIMIT - skipsUsed} left)
                            </Button>
                             <Button variant="destructive" onClick={() => setGameState('ended')}>End Game</Button>
                       </div>
                    )}


                    {isCorrect !== null && (
                         <Card className={isCorrect ? "bg-green-500/10" : "bg-red-500/10"}>
                            <CardContent className="p-4 space-y-3">
                               <div className="flex items-center gap-2">
                                {isCorrect ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                               <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                               </div>
                               <p className="text-muted-foreground mt-2">{question.explanation}</p>
                               <Button onClick={fetchQuestion} className="w-full" disabled={lives <=0 && !isCorrect}>
                                   { lives > 0 || isCorrect ? 'Next Question' : 'Out of Lives'}
                               </Button>
                            </CardContent>
                        </Card>
                    )}

                    <div className="flex justify-between items-center font-bold text-2xl">
                        <span>Score: <span className="text-primary">{score}</span></span>
                        {consecutiveCorrect > 0 && <span className="text-sm text-yellow-400 animate-pulse flex items-center gap-1"><Award className="w-4 h-4"/> Streak: {consecutiveCorrect}x</span>}
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
