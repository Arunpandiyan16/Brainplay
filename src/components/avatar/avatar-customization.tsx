'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateAvatar } from '@/ai/flows/avatar-flow';
import { Loader2, Dices } from 'lucide-react';
import Image from 'next/image';

const avatarParts = ['Face', 'Clothes', 'Accessories'];

export function AvatarCustomization() {
  const [generatedParts, setGeneratedParts] = useState<Record<string, string>>({
    Face: '/placeholder-face.png',
    Clothes: '/placeholder-clothes.png',
    Accessories: '/placeholder-accessories.png',
  });
  const [isLoading, setIsLoading] = useState<Record<string, boolean>>({
    Face: false,
    Clothes: false,
    Accessories: false,
  });

  const handleGenerate = async (part: string, prompt: string) => {
    setIsLoading((prev) => ({ ...prev, [part]: true }));
    try {
      const result = await generateAvatar({ part, prompt });
      if (result.imageDataUri) {
        setGeneratedParts((prev) => ({ ...prev, [part]: result.imageDataUri }));
      }
    } catch (error) {
      console.error(`Failed to generate ${part}:`, error);
      // TODO: Add user-facing error toast
    } finally {
      setIsLoading((prev) => ({ ...prev, [part]: false }));
    }
  };

  const handleRandomizeAll = () => {
    handleGenerate('Face', 'a stoic, futuristic male face with cybernetic lines');
    handleGenerate('Clothes', 'a sleek, high-collar jacket with neon trim');
    handleGenerate('Accessories', 'glowing holographic glasses');
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          Tender's Attunement
          <Button variant="ghost" size="icon" onClick={handleRandomizeAll}>
            <Dices className="h-5 w-5" />
            <span className="sr-only">Randomize All</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {avatarParts.map((part) => (
          <div key={part} className="space-y-2">
            <h3 className="font-semibold">{part}</h3>
            <div className="flex items-center gap-2">
              <div className="relative h-16 w-16 rounded-md bg-muted/50 overflow-hidden">
                <Image src={generatedParts[part]} alt={`Generated ${part}`} layout="fill" objectFit="cover" />
                {isLoading[part] && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Loader2 className="h-6 w-6 animate-spin text-primary" />
                    </div>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => handleGenerate(part, `a random futuristic ${part.toLowerCase()}`)}
                disabled={isLoading[part]}
              >
                {isLoading[part] ? 'Generating...' : `New ${part}`}
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
