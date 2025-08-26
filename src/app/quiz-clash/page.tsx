
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { X, Check, BrainCircuit, Loader2, Trophy, Zap, Sparkles, SkipForward, RotateCcw, Award } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Badge } from '@/components/ui/badge';
import { useCountry } from '@/hooks/use-country';
import { quizQuestions, QuizQuestion } from '@/lib/quiz-data';
import Link from 'next/link';

const SKIP_LIMIT = 2;

type GameState = 'start' | 'playing' | 'ended';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

const XP_PER_CORRECT = 10;
const getXpToNextLevel = (level: number) => 50 + (level - 1) * 20;

const STORAGE_KEY = 'quizClashProgress';

export default function QuizClashPage() {
    const [gameState, setGameState] = useState<GameState>('start');
    const [question, setQuestion] = useState<QuizQuestion | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [skipsUsed, setSkipsUsed] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);

    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

    const [availableQuestions, setAvailableQuestions] = useState<QuizQuestion[]>([]);

    const { toast } = useToast();
    const { country } = useCountry();

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
        setQuestion(null);
        setScore(0);
        setConsecutiveCorrect(0);
        setSkipsUsed(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setAnsweredQuestions([]);
        setIsLoading(true);
        
        const difficulties: Difficulty[] = ['Easy'];
        if (level >= 3) difficulties.push('Medium');
        if (level >= 6) difficulties.push('Hard');

        const countryFiltered = quizQuestions.filter(q =>
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
    }, [level, country, toast]);


    useEffect(() => {
        if (gameState === 'playing' && availableQuestions.length > 0 && !question) {
            fetchQuestion();
        }
    }, [gameState, question, availableQuestions, fetchQuestion]);


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
            setScore(prev => prev - 5);
            setConsecutiveCorrect(0);
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
                        <Button size="lg" className="text-xl w-full glow-shadow" onClick={startGame}>
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

    const questionNumber = answeredQuestions.length + 1;

    if (isLoading || !question) {
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
                         <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
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
                       <Button
                            variant="outline"
                            onClick={handleSkip}
                            disabled={skipsUsed >= SKIP_LIMIT || selectedAnswer !== null}
                        >
                            <SkipForward className="mr-2" />
                            Skip ({SKIP_LIMIT - skipsUsed} left)
                        </Button>
                    )}


                    {isCorrect !== null && (
                         <Card className={isCorrect ? "bg-green-500/10" : "bg-red-500/10"}>
                            <CardContent className="p-4 space-y-3">
                               <div className="flex items-center gap-2">
                                {isCorrect ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                               <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                               </div>
                               <p className="text-muted-foreground mt-2">{question.explanation}</p>
                               <Button onClick={fetchQuestion} className="w-full">
                                   Next Question
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
