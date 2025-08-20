'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, BrainCircuit, PencilRuler, Puzzle, Newspaper, Sparkles } from 'lucide-react';
import GameCard from '@/components/dashboard/game-card';

const games = [
  {
    title: 'Quiz Clash',
    description: '30-second rapid fire quiz.',
    icon: <BrainCircuit className="w-8 h-8" />,
    href: '/quiz-clash',
    color: 'text-purple-400',
  },
  {
    title: 'Word Hunter',
    description: 'Unscramble words against the clock.',
    icon: <PencilRuler className="w-8 h-8" />,
    href: '/word-hunter',
    color: 'text-green-400',
  },
  {
    title: 'Math Rush',
    description: 'Quick mental math challenges.',
    icon: <Puzzle className="w-8 h-8" />,
    href: '/math-rush',
    color: 'text-blue-400',
  },
  {
    title: 'Memory Flip',
    description: 'Match pairs and learn trivia.',
    icon: <Trophy className="w-8 h-8" />,
    href: '/memory-flip',
    color: 'text-yellow-400',
  },
  {
    title: 'Spot the Fake News',
    description: 'Test your media literacy skills.',
    icon: <Newspaper className="w-8 h-8" />,
    href: '/spot-fake-news',
    color: 'text-red-400',
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Play. Learn. Compete.
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Welcome to BrainPlay, the ultimate hub for fun and knowledge games. Challenge yourself and climb the leaderboards!
        </p>
        <Button size="lg" className="mt-8 text-lg glow-shadow" asChild>
          <Link href="/quiz-clash">Play Now</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Choose Your Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
           <div className="lg:col-span-1"></div>
            <Card className="md:col-span-2 lg:col-span-1 border-primary glow-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Daily Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">A new game with a unique twist, every single day. Today's challenge:</p>
                    <h3 className="text-xl font-semibold mb-2">Quiz Clash: Time Attack!</h3>
                    <p>Timer is reduced to 20 seconds. Correct answers are worth double points!</p>
                    <Button className="w-full mt-4" variant="default">Play Daily Challenge</Button>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
