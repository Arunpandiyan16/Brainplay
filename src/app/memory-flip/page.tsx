
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain, Trophy, Sparkles, Zap, Loader2, Lightbulb, Repeat, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { triviaData } from '@/lib/trivia-data';
import Link from 'next/link';
import { useAuth } from '@/hooks/use-auth';
import { getUserProfile, updateGameProgress, GameProgress, defaultGameProgress } from '@/lib/firebase-service';


type GameState = 'settings' | 'playing' | 'ended';

interface CardData {
  id: number;
  type: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const EMOJI_PAIRS: { [key: string]: string } = {
  'Dog': '🐶', 'Cat': '🐱', 'Mouse': '🐭', 'Fox': '🦊',
  'Bear': '🐻', 'Panda': '🐼', 'Koala': '🐨', 'Tiger': '🐯',
  'Lion': '🦁', 'Cow': '🐮', 'Pig': '🐷', 'Frog': '🐸',
  'Octopus': '🐙', 'Monkey': '🐵', 'Chicken': '🐔', 'Penguin': '🐧',
  'Bird': '🐦', 'Unicorn': '🦄', 'Dragon': '🐲', 'Pizza': '🍕',
  'Burger': '🍔', 'Taco': '🌮', 'Sushi': '🍣', 'Apple': '🍎',
  'Banana': '🍌', 'Strawberry': '🍓', 'Sun': '☀️', 'Moon': '🌙',
  'Star': '⭐', 'Heart': '❤️', 'Rocket': '🚀', 'Robot': '🤖',
};

const getGridConfigForLevel = (level: number): { pairs: number; cols: number } => {
    if (level < 3) return { pairs: 3, cols: 3 }; // 2x3 grid
    if (level < 5) return { pairs: 4, cols: 4 }; // 2x4 grid
    if (level < 8) return { pairs: 6, cols: 4 }; // 3x4 grid
    if (level < 12) return { pairs: 8, cols: 4 }; // 4x4 grid
    if (level < 16) return { pairs: 10, cols: 5 }; // 4x5 grid
    if (level < 20) return { pairs: 12, cols: 6 }; // 4x6 grid
    if (level < 25) return { pairs: 15, cols: 6 }; // 5x6 grid
    if (level < 30) return { pairs: 18, cols: 6 }; // 6x6 grid
    if (level < 40) return { pairs: 20, cols: 5 }; // 4x5 x 2 pages? no. let's do bigger grid. 8x5
    if (level < 40) return { pairs: 20, cols: 8 }; // 5x8
    return { pairs: 21, cols: 7 }; // 6x7, max
};

const XP_PER_MATCH = 5;
const SCORE_PER_MATCH = 10;
const getXpToNextLevel = (level: number) => 50 + Math.floor((level - 1) * 22.5);


interface TriviaFact {
    fact: string;
}

export default function MemoryFlipPage() {
  const [gameState, setGameState] = useState<GameState>('settings');
  const [isLoading, setIsLoading] = useState(true);

  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [trivia, setTrivia] = useState<TriviaFact | null>(null);
  const [isTriviaLoading, setIsTriviaLoading] = useState(false);
  
  // Leveling state
  const [level, setLevel] = useState(1);
  const [xp, setXp] = useState(0);
  const [xpToNextLevel, setXpToNextLevel] = useState(getXpToNextLevel(1));

  const { toast } = useToast();
  const { user } = useAuth();
  
    const loadProgress = useCallback(async () => {
        if (!user) {
            setLevel(1);
            setXp(0);
            setXpToNextLevel(getXpToNextLevel(1));
            setScore(0);
            setIsLoading(false);
            return;
        }
        setIsLoading(true);
        const profile = await getUserProfile(user.uid);
        if (profile && profile.memoryFlip) {
            const { level, xp, xpToNextLevel, score } = profile.memoryFlip;
            setLevel(level);
            setXp(xp);
            setXpToNextLevel(xpToNextLevel);
            setScore(score);
        } else {
            const progress = defaultGameProgress();
            setLevel(progress.level);
            setXp(progress.xp);
            setXpToNextLevel(progress.xpToNextLevel);
            setScore(progress.score);
        }
        setIsLoading(false);
    }, [user]);

    useEffect(() => {
        loadProgress();
    }, [loadProgress]);

    const saveProgress = useCallback(async () => {
        if (!user) return;
        const progress: GameProgress = { score, level, xp, xpToNextLevel };
        await updateGameProgress(user.uid, 'memoryFlip', progress);
    }, [user, score, level, xp, xpToNextLevel]);

    useEffect(() => {
        if (gameState === 'ended') {
            saveProgress();
        }
    }, [gameState, saveProgress]);


  const setupGame = useCallback(() => {
    const { pairs } = getGridConfigForLevel(level);
    const availableIcons = Object.keys(EMOJI_PAIRS);
    const selectedIcons = availableIcons.sort(() => 0.5 - Math.random()).slice(0, pairs);
    const gameCards = [...selectedIcons, ...selectedIcons]
      .sort(() => 0.5 - Math.random())
      .map((type, id) => ({ id, type, isFlipped: false, isMatched: false }));
    
    setCards(gameCards);

  }, [level]);

  const startGame = useCallback(() => {
    setGameState('playing');
    setMoves(0);
    setFlippedIndices([]);
    setTrivia(null);
    setupGame();
  }, [setupGame]);
  
    const resetProgress = async () => {
        const progress = defaultGameProgress();
        setLevel(progress.level);
        setXp(progress.xp);
        setXpToNextLevel(progress.xpToNextLevel);
        setScore(progress.score);
        if (user) {
            await updateGameProgress(user.uid, 'memoryFlip', progress);
        }
        toast({ title: 'Progress Reset', description: 'Your level and XP have been reset.' });
    };

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
       setTimeout(() => setGameState('ended'), 1000);
    }
  }, [cards]);
  

  const fetchTrivia = (topic: string) => {
    setIsTriviaLoading(true);
    const facts = triviaData[topic];
    if (facts && facts.length > 0) {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setTrivia({ fact: randomFact });
    } else {
       setTrivia({ fact: 'No fun fact found for this topic!' });
    }
    setIsTriviaLoading(false);
  };

  useEffect(() => {
    if (flippedIndices.length === 2) {
      setIsChecking(true);
      const [firstIndex, secondIndex] = flippedIndices;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];
      setMoves(prev => prev + 1);

      if (firstCard.type === secondCard.type) {
        // Matched
        setScore(prev => prev + SCORE_PER_MATCH);
        setCards(prevCards =>
          prevCards.map(card =>
            card.type === firstCard.type ? { ...card, isMatched: true } : card
          )
        );
        fetchTrivia(firstCard.type);

        const newXp = xp + XP_PER_MATCH;
        if (newXp >= xpToNextLevel) {
            const nextLevel = level + 1;
            setLevel(nextLevel);
            setXp(newXp - xpToNextLevel);
            setXpToNextLevel(getXpToNextLevel(nextLevel));
            toast({ title: "Level Up!", description: `You've reached level ${nextLevel}! The grid size has increased.`, className: 'bg-primary text-primary-foreground' });
        } else {
            setXp(newXp);
        }

        setFlippedIndices([]);
        setIsChecking(false);
      } else {
        // Not a match
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map((card, index) =>
              index === firstIndex || index === secondIndex
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedIndices([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  }, [flippedIndices, cards, xp, xpToNextLevel, level, toast]);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched || flippedIndices.length === 2) {
      return;
    }
    setCards(prevCards =>
      prevCards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );
    setFlippedIndices(prev => [...prev, index]);
  };
  
  if (isLoading && gameState === 'settings') {
     return (
        <div className="flex justify-center items-center py-8">
            <Loader2 className="h-16 w-16 animate-spin text-primary"/>
        </div>
    );
  }

  if (gameState === 'settings') {
    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-md text-center p-8 border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                       <Brain className="w-10 h-10 text-primary"/>
                       Memory Flip
                    </CardTitle>
                    <CardDescription className="text-lg">
                       Your current level is <span className="font-bold text-primary">{level}</span>.
                       <br/>
                       Match pairs to earn XP and unlock larger grids!
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
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
        const allMatched = cards.every(c => c.isMatched);
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Trophy className="w-10 h-10 text-yellow-400"/>
                           {allMatched ? "Congratulations!" : "Game Over"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">{allMatched ? "You matched all the pairs!" : "You decided to end the game."}</div>
                        <div className="text-xl">Your Final Score: <span className="font-bold text-primary">{score}</span></div>
                        <div className="flex justify-around text-lg w-full bg-secondary/50 p-4 rounded-lg">
                             <div>
                                <p className="text-muted-foreground">Moves</p>
                                <p className="font-bold text-2xl text-primary">{moves}</p>
                            </div>
                            <div className="text-lg">
                                <p className="text-muted-foreground">Final Level</p>
                                <p className="font-bold text-2xl text-primary">{level}</p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
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
  
  const { cols } = getGridConfigForLevel(level);

  return (
    <div className="flex flex-col items-center py-8 gap-8">
        <Card className="w-full max-w-4xl border-primary glow-shadow">
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-2xl">
                    <div className="flex items-center gap-2">
                       <Brain className="text-primary"/>
                       Memory Flip
                    </div>
                     <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-lg font-mono px-3 py-1 rounded-md bg-secondary">
                           Score: <span className="font-bold">{score}</span>
                        </div>
                        <Button variant="outline" onClick={() => setGameState('ended')}>End Game</Button>
                    </div>
                </CardTitle>
                <CardDescription className="flex justify-between">
                    <span>Level: <span className="font-bold text-primary">{level}</span></span>
                    <span>Moves: <span className="font-bold text-primary">{moves}</span></span>
                </CardDescription>
            </CardHeader>
             <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium text-muted-foreground">
                        <span>Level {level} XP</span>
                        <span>{xp} / {xpToNextLevel}</span>
                    </div>
                    <Progress value={(xp / xpToNextLevel) * 100} className="w-full h-2" />
                </div>
                <div 
                    className="grid gap-2 md:gap-3 justify-center"
                    style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
                >
                    {cards.map((card, index) => (
                        <button
                            key={index}
                            onClick={() => handleCardClick(index)}
                            disabled={isChecking || card.isFlipped || card.isMatched}
                            className={cn(
                                "aspect-square rounded-lg flex items-center justify-center transition-transform duration-300 transform-style-3d",
                                card.isFlipped || card.isMatched ? 'bg-secondary rotate-y-180' : 'bg-primary/20 hover:bg-primary/40',
                                card.isMatched && 'opacity-50 cursor-default'
                            )}
                        >
                            <div className={cn("text-2xl md:text-4xl transition-opacity duration-100 backface-hidden", (card.isFlipped || card.isMatched) ? 'opacity-100' : 'opacity-0')}>
                                {EMOJI_PAIRS[card.type]}
                            </div>
                        </button>
                    ))}
                </div>
                 <div className="text-center">
                    <Button onClick={startGame} variant="outline">
                        <Repeat className="mr-2" /> Restart Game
                    </Button>
                </div>
            </CardContent>
        </Card>
        
        <AlertDialog open={!!trivia} onOpenChange={(open) => !open && setTrivia(null)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-3 text-2xl">
                       <Lightbulb className="w-8 h-8 text-yellow-400" />
                       Fun Fact!
                    </AlertDialogTitle>
                    <AlertDialogDescription className="text-lg pt-4 min-h-[6rem] flex items-center justify-center">
                        {isTriviaLoading ? <Loader2 className="animate-spin mx-auto"/> : trivia?.fact}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => setTrivia(null)}>Awesome!</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
  );
}

// Add this to globals.css if it's not there, to support the 3D flip animation
/*
@layer utilities {
  .transform-style-3d {
    transform-style: preserve-3d;
  }
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
}
*/
