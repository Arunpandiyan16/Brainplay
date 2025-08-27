
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Brain, Gamepad2, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-4xl border-primary glow-shadow">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
             <Info className="w-16 h-16 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold">
            About Brainvia
          </CardTitle>
           <p className="text-xl text-muted-foreground pt-2">Your Daily Dose of Cognitive Fun</p>
        </CardHeader>
        <CardContent className="space-y-8 text-lg text-center p-8">
            <div className="space-y-4">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-3"><Target className="w-8 h-8 text-primary"/> Our Mission</h2>
                <p>
                    Brainvia is a 5-in-1 hub for fun and knowledge games designed to challenge your mind and provide endless entertainment. Our mission is to make learning and brain-training an exciting and engaging experience for everyone, transforming cognitive improvement from a chore into a daily delight.
                </p>
            </div>
             <div className="space-y-4">
                 <h2 className="text-2xl font-semibold flex items-center justify-center gap-3"><Gamepad2 className="w-8 h-8 text-primary"/> Our Games</h2>
                <p>
                    Whether you're looking to test your general knowledge in <span className="font-semibold text-primary">Quiz Clash</span>, expand your vocabulary with <span className="font-semibold text-primary">Word Hunter</span>, sharpen your logical reasoning with <span className="font-semibold text-primary">Logic Leap</span>, or just have some fun with our other games, Brainvia has something for you. Each game is designed with a sophisticated, level-based progression system that adapts to your skill.
                </p>
            </div>
             <div className="space-y-4">
                <h2 className="text-2xl font-semibold flex items-center justify-center gap-3"><Users className="w-8 h-8 text-primary"/> Our Community</h2>
                <p>
                    Compete with friends and players worldwide on our global leaderboard, and prove your skills. New challenges and content are always being added to keep the fun fresh and the competition fierce.
                </p>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-primary text-xl">
                Thank you for being part of our community!
              </p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
