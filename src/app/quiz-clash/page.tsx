'use client';

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Clock, X, Check, BrainCircuit, Loader2, Trophy, Zap, ShieldAlert, Sparkles } from 'lucide-react';
import { generateQuizQuestion, QuizQuestion } from '@/ai/flows/quiz-flow';
import { useToast } from '@/hooks/use-toast';

const TOTAL_TIME = 30;
const TOTAL_QUESTIONS = 5;

type GameState = 'start' | 'playing' | 'ended';

export default function QuizClashPage() {
    const [gameState, setGameState] = useState<GameState>('start');
    const [questions, setQuestions] = useState<QuizQuestion[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const currentQuestion = questions[currentQuestionIndex];

    const fetchQuestion = useCallback(async () => {
        setIsLoading(true);
        try {
            const question = await generateQuizQuestion({ category: 'General Knowledge' });
            setQuestions(prev => [...prev, question]);
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
    
    const handleAnswer = (index: number) => {
        if (selectedAnswer !== null) return;
        
        setSelectedAnswer(index);
        const correct = index === currentQuestion.answerIndex;
        setIsCorrect(correct);

        if (correct) {
            setScore(prev => prev + 10);
        } else {
            setScore(prev => prev - 5);
        }

        setTimeout(() => {
            setSelectedAnswer(null);
            setIsCorrect(null);
            
            if (currentQuestionIndex < TOTAL_QUESTIONS - 1) {
                setCurrentQuestionIndex(prev => prev + 1);
                 if (currentQuestionIndex + 1 === questions.length) {
                    fetchQuestion();
                }
            } else {
                setGameState('ended');
            }
        }, 1500);
    };

    const startGame = () => {
        setQuestions([]);
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimeLeft(TOTAL_TIME);
        setGameState('playing');
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
                        <p className="text-2xl">Your Final Score:</p>
                        <p className="text-7xl font-bold text-primary">{score}</p>
                        <Button size="lg" className="text-xl w-full" onClick={startGame}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    if (isLoading && questions.length === currentQuestionIndex) {
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
                    <CardDescription>Question {currentQuestionIndex + 1} of {TOTAL_QUESTIONS}</CardDescription>
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

                    {isCorrect !== null && (
                         <Card className="bg-secondary/50">
                            <CardContent className="p-4">
                               <p className="font-semibold text-lg">{isCorrect ? 'Correct!' : 'Incorrect!'}</p>
                               <p className="text-muted-foreground">{currentQuestion.explanation}</p>
                            </CardContent>
                        </Card>
                    )}

                    <div className="text-center font-bold text-2xl">
                        Score: <span className="text-primary">{score}</span>
                    </div>

                </CardContent>
            </Card>
        </div>
    );
}
