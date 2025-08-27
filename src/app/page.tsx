
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit, PencilRuler, Puzzle, Newspaper, Sparkles, Calculator, HelpCircle, Trophy, Award } from 'lucide-react';
import GameCard from '@/components/dashboard/game-card';

const games = [
  {
    title: 'Quiz Clash',
    description: 'Answer tough questions to level up.',
    icon: <BrainCircuit className="w-8 h-8" />,
    href: '/quiz-clash',
    color: 'text-purple-400',
  },
  {
    title: 'Word Hunter',
    description: 'Unscramble words and expand your vocabulary.',
    icon: <PencilRuler className="w-8 h-8" />,
    href: '/word-hunter',
    color: 'text-green-400',
  },
  {
    title: 'Math Rush',
    description: 'Solve arithmetic and aptitude problems.',
    icon: <Calculator className="w-8 h-8" />,
    href: '/math-rush',
    color: 'text-blue-400',
  },
   {
    title: 'Logic Leap',
    description: 'Solve diverse logical puzzles to level up.',
    icon: <HelpCircle className="w-8 h-8" />,
    href: '/logic-leap',
    color: 'text-orange-400',
  },
  {
    title: 'Memory Flip',
    description: 'Match pairs, learn trivia, and level up.',
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
      <section className="text-center py-8 md:py-12">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Play. Learn. Compete.
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-muted-foreground">
          Welcome to BrainPlay, the ultimate hub for fun and knowledge games. Challenge yourself and climb the leaderboards!
        </p>
         <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Button size="lg" className="text-lg w-full sm:w-auto glow-shadow" asChild>
                <Link href="/quiz-clash">Play Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg w-full sm:w-auto" asChild>
                <Link href="/leaderboard"><Award className="mr-2"/> View Leaderboard</Link>
            </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Choose Your Challenge</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.title} {...game} />
          ))}
            <Card className="md:col-span-2 lg:col-span-3 border-primary glow-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                    <Sparkles className="w-8 h-8 text-primary" />
                    <CardTitle className="text-2xl text-primary">Daily Challenge</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-4">A new game with a unique twist, every single day. Today's challenge:</p>
                    <h3 className="text-xl font-semibold mb-2">Quiz Clash: 10 Question Showdown!</h3>
                    <p>Answer 10 questions. Correct answers are worth double points!</p>
                    <Button className="w-full mt-4" variant="default" asChild>
                      <Link href="/daily-challenge">Play Daily Challenge</Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </section>
    </div>
  );
}
