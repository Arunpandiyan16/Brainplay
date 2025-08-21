
'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, X, Check, BrainCircuit, Loader2, Trophy, Zap, Sparkles, SkipForward } from 'lucide-react';
import { generateQuizQuestion, QuizQuestion } from '@/ai/flows/quiz-flow';
import { useToast } from '@/hooks/use-toast';

const TOTAL_TIME = 30;
const TOTAL_QUESTIONS = 5;
const SKIP_LIMIT = 1;

const CATEGORIES = ['General Knowledge', 'Movies', 'Cricket', 'Tech', 'Tamil Nadu GK'];

type GameState = 'start' | 'playing' | 'ended';

interface QuestionWithCategory extends QuizQuestion {
    category: string;
}

export default function QuizClashPage() {
    const [gameState, setGameState] = useState<GameState>('start');
    const [questions, setQuestions] = useState<QuestionWithCategory[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [isLoading, setIsLoading] = useState(false);
    const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
    const [skipsUsed, setSkipsUsed] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [answeredQuestions, setAnsweredQuestions] = useState<any[]>([]);
    const { toast } = useToast();

    const currentQuestion = questions[currentQuestionIndex];

    const fetchQuestion = useCallback(async () => {
        setIsLoading(true);
        try {
            const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];
            const question = await generateQuizQuestion({ category });
            setQuestions(prev => [...prev, { ...question, category }]);
        } catch (error) {
            console.error(error);
            toast({
                variant: 'destructive',
                title: 'Error',
                description: 'Failed to generate a new question. Please try again.',
            });
        } finally {
            setIsLoading(false);
        }
    }, [toast]);
    
    useEffect(() => {
        if (gameState === 'playing' && questions.length === 0) {
            fetchQuestion();
        }
    }, [gameState, questions.length, fetchQuestion]);


    useEffect(() => {
        if (gameState !== 'playing' || isLoading) return;

        if (timeLeft === 0) {
            setGameState('ended');
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState, timeLeft, isLoading]);

    const proceedToNextQuestion = useCallback(() => {
        setSelectedAnswer(null);
        setIsCorrect(null);
        
        if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
             if (currentQuestionIndex + 1 >= questions.length) {
                fetchQuestion();
            }
        } else {
            setGameState('ended');
        }
    }, [currentQuestionIndex, questions.length, fetchQuestion]);
    
    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return;
        
        setSelectedAnswer(index);
        const correct = index === currentQuestion.answerIndex;
        setIsCorrect(correct);
        setAnsweredQuestions(prev => [...prev, { ...currentQuestion, answeredCorrectly: correct, skipped: false }]);

        if (correct) {
            let points = 10;
            const newConsecutiveCorrect = consecutiveCorrect + 1;
            setConsecutiveCorrect(newConsecutiveCorrect);
            setCorrectAnswers(prev => prev + 1);

            if (newConsecutiveCorrect > 0 && newConsecutiveCorrect % 3 === 0) {
                points += 5; // Streak bonus
                toast({ title: "Streak Bonus!", description: "+5 extra points!" });
            }
            setScore(prev => prev + points);
        } else {
            setScore(prev => prev - 5);
            setConsecutiveCorrect(0);
        }

        setTimeout(() => {
            proceedToNextQuestion();
        }, 1500);
    };

    const handleSkip = () => {
        if (skipsUsed >= SKIP_LIMIT || selectedAnswer !== null) return;
        setSkipsUsed(prev => prev + 1);
        setConsecutiveCorrect(0);
        setAnsweredQuestions(prev => [...prev, { ...currentQuestion, answeredCorrectly: false, skipped: true }]);
        proceedToNextQuestion();
    };

    const startGame = () => {
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(TOTAL_TIME);
        setGameState('playing');
        setConsecutiveCorrect(0);
        setSkipsUsed(0);
        setCorrectAnswers(0);
        setSelectedAnswer(null);
        setIsCorrect(null);
        setAnsweredQuestions([]);
    };
    
    const getButtonClass = (index: number) => {
        if (selectedAnswer !== null) {
            if (index === currentQuestion.answerIndex) {
                return 'bg-green-500 hover:bg-green-600'; // Correct answer
            }
            if (index === selectedAnswer) {
                return 'bg-red-500 hover:bg-red-600'; // Incorrectly selected answer
            }
        }
        return 'bg-secondary hover:bg-accent';
    };

    const renderCategoryBreakdown = () => {
        const breakdown: { [key: string]: { correct: number; total: number } } = {};

        answeredQuestions.forEach(q => {
            if (!breakdown[q.category]) {
                breakdown[q.category] = { correct: 0, total: 0 };
            }
            breakdown[q.category].total++;
            if (q.answeredCorrectly) {
                breakdown[q.category].correct++;
            }
        });

        return (
            <div className="w-full space-y-2 text-left">
                <h4 className="font-semibold">Category Breakdown:</h4>
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
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <BrainCircuit className="w-10 h-10 text-primary"/>
                           Quiz Clash
                        </CardTitle>
                        <CardDescription className="text-lg">
                           Answer {TOTAL_QUESTIONS} questions within {TOTAL_TIME} seconds. Good luck!
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Button size="lg" className="text-xl w-full glow-shadow" onClick={startGame}>
                           <Zap className="mr-2"/> Start Game
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (gameState === 'ended') {
        const attemptedQuestions = answeredQuestions.filter(q => !q.skipped).length;
        const accuracy = attemptedQuestions > 0 ? (correctAnswers / attemptedQuestions) * 100 : 0;
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
                        <div className="flex justify-around text-lg w-full">
                            <div>
                                <p className="text-muted-foreground">Accuracy</p>
                                <p className="font-bold">{accuracy.toFixed(0)}%</p>
                            </div>
                             <div>
                                <p className="text-muted-foreground">Correct</p>
                                <p className="font-bold">{correctAnswers}/{TOTAL_QUESTIONS}</p>
                            </div>
                        </div>
                        {renderCategoryBreakdown()}
                        <Button size="lg" className="text-xl w-full" onClick={startGame}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (isLoading && questions.length <= currentQuestionIndex) {
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl border-primary glow-shadow">
                    <CardContent className="p-8 text-center space-y-4">
                        <Loader2 className="h-16 w-16 animate-spin mx-auto text-primary"/>
                        <p className="text-xl text-muted-foreground">Generating challenging questions...</p>
                    </CardContent>
                </Card>
            </div>
        );
    }

    if (!currentQuestion) return null;

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-2xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between text-2xl">
                        <div className="flex items-center gap-2">
                           <BrainCircuit className="text-primary"/>
                           Quiz Clash 
                        </div>
                        <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                            <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-500' : ''}`}/>
                            <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}</span>
                        </div>
                    </CardTitle>
                    <CardDescription>Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS} ({currentQuestion.category})</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <Progress value={(timeLeft / TOTAL_TIME) * 100} className="w-full h-2" />
                    
                    <div className="p-4 rounded-lg bg-secondary text-center min-h-[80px] flex items-center justify-center">
                        <p className="text-lg font-semibold">{currentQuestion.question}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQuestion.choices.map((choice, index) => (
                            <Button 
                                key={index} 
                                size="lg" 
                                className={`justify-start h-auto py-3 text-left whitespace-normal ${getButtonClass(index)}`}
                                onClick={() => handleAnswer(index)}
                                disabled={selectedAnswer !== null}
                            >
                                <div className="flex items-center">
                                    <div className="w-6 mr-3">
                                        {selectedAnswer !== null && (
                                            index === currentQuestion.answerIndex ? <Check/> : (index === selectedAnswer ? <X/> : <span/>)
                                        )}
                                    </div>
                                    <span>{choice}</span>
                                </div>
                            </Button>
                        ))}
                    </div>

                     {isCorrect === null && (
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
                         <Card className="bg-secondary/50">
                            <CardContent className="p-4">
                               <div className="flex items-center gap-2">
                                {isCorrect ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                               <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                               </div>
                               <p className="text-muted-foreground mt-2">{currentQuestion.explanation}</p>
                            </CardContent>
                        </Card>
                    )}

                    <div className="flex justify-between items-center font-bold text-2xl">
                        <span>Score: <span className="text-primary">{score}</span></span>
                        {consecutiveCorrect > 0 && <span className="text-sm text-yellow-400 animate-pulse">Streak: {consecutiveCorrect}x</span>}
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}

    
