'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Compass } from 'lucide-react';
import type { Mission, BriefingData } from '@/types';
import MissionCard from '../dashboard/mission-card';

const missions: (Mission & { position: { top: string; left: string } })[] = [
  {
    title: 'The Sunken Temple',
    description: 'Restore the signal at the coastal ruins.',
    image: 'https://placehold.co/400x300/1a2a3a/ffc700',
    hint: 'ancient temple ruins coast',
    reward: 'Fragment of Light',
    position: { top: '35%', left: '25%' },
  },
  {
    title: 'The Whispering Peaks',
    description: "Align the monoliths atop the frozen mountains.",
    image: 'https://placehold.co/400x300/1a2a3a/aaccff',
    hint: 'snowy mountain peak monoliths',
    reward: 'Breath of Winter',
    position: { top: '60%', left: '70%' },
  },
  {
    title: 'The Gilded Forest',
    description: 'Find the heart of the ancient woods.',
    image: 'https://placehold.co/400x300/1a2a3a/e0ffb0',
    hint: 'ancient glowing forest',
    reward: 'Seed of Life',
    position: { top: '15%', left: '80%' },
  },
];

type InteractiveMapProps = {
  onStartMission: (mission: Mission, briefing: BriefingData) => void;
};

export default function InteractiveMap({ onStartMission }: InteractiveMapProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-headline text-primary">
          <Compass className="h-6 w-6" />
          World Map
        </CardTitle>
        <CardDescription>Follow the echoes to restore the signal.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-primary/30">
          <Image
            src="https://placehold.co/800x450/050a10/ffc700"
            alt="Mystical World Map"
            layout="fill"
            objectFit="cover"
            data-ai-hint="fantasy world map ancient"
            className="opacity-80"
          />
          {missions.map((mission) => (
            <div
              key={mission.title}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ top: mission.position.top, left: mission.position.left }}
            >
              <MissionCard mission={mission} onStartMission={onStartMission} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
