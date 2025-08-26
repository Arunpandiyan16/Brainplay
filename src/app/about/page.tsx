'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-3xl border-primary glow-shadow">
        <CardHeader>
          <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
            <Info className="w-10 h-10 text-primary" />
            About BrainPlay
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-lg text-center">
          <p>
            BrainPlay is a 5-in-1 hub for fun and knowledge games designed to challenge your mind and provide endless entertainment. Our mission is to make learning and brain-training an exciting and engaging experience for everyone.
          </p>
          <p>
            Whether you're looking to test your general knowledge in Quiz Clash, expand your vocabulary with Word Hunter, sharpen your logical reasoning with Logic Leap, or just have some fun with our other games, BrainPlay has something for you.
          </p>
          <p>
            Compete with friends and players worldwide, climb the leaderboards, and prove your skills. New challenges and content are always being added to keep the fun going.
          </p>
          <p className="font-semibold text-primary">
            Thank you for playing!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
