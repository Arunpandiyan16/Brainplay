
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Brain, Clock, Trophy, Sparkles, Zap, Loader2, Lightbulb, Repeat } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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

type GameState = 'settings' | 'playing' | 'ended';
type GridSize = '4x4' | '5x4' | '6x5';

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

const GRID_CONFIG = {
  '4x4': { pairs: 8, cols: 4 },
  '5x4': { pairs: 10, cols: 5 },
  '6x5': { pairs: 15, cols: 6 },
};

interface TriviaFact {
    fact: string;
}

export default function MemoryFlipPage() {
  const [gameState, setGameState] = useState<GameState>('settings');
  const [gridSize, setGridSize] = useState<GridSize>('4x4');

  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [trivia, setTrivia] = useState<TriviaFact | null>(null);
  const [isTriviaLoading, setIsTriviaLoading] = useState(false);
  
  const { toast } = useToast();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setupGame = useCallback(() => {
    const { pairs } = GRID_CONFIG[gridSize];
    const availableIcons = Object.keys(EMOJI_PAIRS);
    const selectedIcons = availableIcons.sort(() => 0.5 - Math.random()).slice(0, pairs);
    const gameCards = [...selectedIcons, ...selectedIcons]
      .sort(() => 0.5 - Math.random())
      .map((type, id) => ({ id, type, isFlipped: false, isMatched: false }));
    
    setCards(gameCards);
    const gameDuration = pairs * 10;
    setTotalTime(gameDuration);
    setTimeLeft(gameDuration);

  }, [gridSize]);

  const startGame = () => {
    setGameState('playing');
    setMoves(0);
    setFlippedIndices([]);
    setTrivia(null);
    setupGame();
  };

  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            setGameState('ended');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  useEffect(() => {
    if (cards.length > 0 && cards.every(c => c.isMatched)) {
       if (timerRef.current) clearInterval(timerRef.current);
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
        setCards(prevCards =>
          prevCards.map(card =>
            card.type === firstCard.type ? { ...card, isMatched: true } : card
          )
        );
        fetchTrivia(firstCard.type);
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
  }, [flippedIndices, cards]);

  const handleCardClick = (index: number) => {
    if (isChecking || cards[index].isFlipped || cards[index].isMatched || flippedIndices.length === 2) {
      return;
    }
    setCards(prevCards =>
      prevCards.map((card, i) => (i === index ? { ...card, isFlipped: true } : card))
    );
    setFlippedIndices(prev => [...prev, index]);
  };
  
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
                       Match pairs, test your memory, and learn fun facts!
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="space-y-2 text-left">
                         <label className="text-sm font-medium">Grid Size</label>
                        <Select onValueChange={(v: GridSize) => setGridSize(v)} defaultValue={gridSize}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select grid size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="4x4">4 x 4 (Easy)</SelectItem>
                                <SelectItem value="5x4">5 x 4 (Medium)</SelectItem>
                                <SelectItem value="6x5">6 x 5 (Hard)</SelectItem>
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
        const allMatched = cards.every(c => c.isMatched);
        return (
            <div className="flex justify-center items-center py-8">
                <Card className="w-full max-w-2xl text-center p-8 border-primary glow-shadow">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                           <Trophy className="w-10 h-10 text-yellow-400"/>
                           {allMatched ? "Congratulations!" : "Game Over!"}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="text-2xl">{allMatched ? "You matched all the pairs!" : "Time's up!"}</div>
                        <div className="flex justify-around text-lg w-full bg-secondary/50 p-4 rounded-lg">
                             <div>
                                <p className="text-muted-foreground">Moves</p>
                                <p className="font-bold text-2xl text-primary">{moves}</p>
                            </div>
                            <div>
                                <p className="text-muted-foreground">Time Left</p>
                                <p className="font-bold text-2xl text-primary">{timeLeft}</p>
                            </div>
                        </div>
                        <Button size="lg" className="text-xl w-full" onClick={() => setGameState('settings')}>
                           <Sparkles className="mr-2"/> Play Again
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

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
                           Moves: <span className="font-bold">{moves}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xl font-mono px-3 py-1 rounded-md bg-secondary">
                            <Clock className={`w-5 h-5 ${timeLeft <= 10 ? 'text-red-500' : ''}`}/>
                            <span className={timeLeft <= 10 ? 'text-red-500' : ''}>{timeLeft}</span>
                        </div>
                    </div>
                </CardTitle>
                <CardDescription>Match all the pairs before time runs out!</CardDescription>
            </CardHeader>
             <CardContent className="space-y-4">
                 <Progress value={(timeLeft / totalTime) * 100} className="w-full h-2" />
                <div 
                    className="grid gap-2 md:gap-4 justify-center"
                    style={{ gridTemplateColumns: `repeat(${GRID_CONFIG[gridSize].cols}, minmax(0, 1fr))` }}
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
                            <div className={cn("text-3xl md:text-5xl transition-opacity duration-100 backface-hidden", (card.isFlipped || card.isMatched) ? 'opacity-100' : 'opacity-0')}>
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
