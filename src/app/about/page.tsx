
'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info, Brain, Gamepad2, Users, Target, BarChart, CheckCircle } from 'lucide-react';

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
        <CardContent className="space-y-10 text-lg text-center p-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold flex items-center justify-center gap-3"><Target className="w-8 h-8 text-primary"/> Our Mission</h2>
                <p className="max-w-3xl mx-auto">
                    Brainvia was born from a simple yet powerful idea: that improving your mind should be as enjoyable as playing a game. Our mission is to make cognitive enhancement accessible, engaging, and genuinely fun for everyone. We believe that learning and brain-training shouldn't be a chore, but a daily source of delight and discovery. We're dedicated to creating a vibrant platform where curiosity thrives and every challenge helps you grow.
                </p>
            </div>
            <div className="space-y-4">
                <h2 className="text-3xl font-semibold flex items-center justify-center gap-3"><Brain className="w-8 h-8 text-primary"/> Our Philosophy</h2>
                <p className="max-w-3xl mx-auto">
                    We design our games based on principles of learning science and gamification. By presenting challenges in an interactive format with clear goals and instant feedback, we tap into the brain's natural reward system. Our adaptive difficulty ensures that you are always perfectly challenged—never bored, never overwhelmed. This approach helps to build stronger neural pathways, improve memory retention, and sharpen problem-solving skills in a sustainable way.
                </p>
            </div>
             <div className="space-y-4">
                 <h2 className="text-3xl font-semibold flex items-center justify-center gap-3"><Gamepad2 className="w-8 h-8 text-primary"/> Our Games</h2>
                <p className="max-w-3xl mx-auto">
                    From the lightning-fast trivia of <span className="font-semibold text-primary">Quiz Clash</span> to the lexical challenges of <span className="font-semibold text-primary">Word Hunter</span>, each game in the Brainvia suite is a unique adventure. Test your critical thinking with <span className="font-semibold text-primary">Logic Leap</span>, sharpen your numerical skills in <span className="font-semibold text-primary">Math Rush</span>, or see how you stack up against misinformation in <span className="font-semibold text-primary">Spot the Fake News</span>. With a sophisticated level-based progression system, there's always a new peak to conquer.
                </p>
            </div>
             <div className="space-y-4">
                <h2 className="text-3xl font-semibold flex items-center justify-center gap-3"><Users className="w-8 h-8 text-primary"/> Join Our Community</h2>
                <p className="max-w-3xl mx-auto">
                    Brainvia is more than just a collection of games; it's a global community of curious minds. Compete with friends and players worldwide on our global leaderboard, track your personal growth on your profile, and be part of a movement that celebrates knowledge and mental fitness. New challenges and content are always on the horizon to keep the fun fresh and the competition friendly but fierce.
                </p>
            </div>
            <div className="pt-4">
              <p className="font-semibold text-primary text-xl">
                Thank you for being part of the Brainvia journey!
              </p>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
