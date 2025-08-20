'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map } from 'lucide-react';
import type { Mission, BriefingData } from '@/types';
import MissionCard from '../dashboard/mission-card';

const missions: (Mission & { position: { top: string; left: string } })[] = [
  {
    title: 'Data Heist',
    description: 'Breach the security of Arasaka Tower.',
    image: 'https://placehold.co/400x300/1a2a3a/00f0ff',
    hint: 'futuristic skyscraper night',
    reward: '15000 Credits',
    position: { top: '35%', left: '25%' },
  },
  {
    title: 'Neural Espionage',
    description: "Extract information from a rival exec.",
    image: 'https://placehold.co/400x300/1a2a3a/ff00ff',
    hint: 'cyberpunk meeting room',
    reward: '25000 Credits',
    position: { top: '60%', left: '70%' },
  },
  {
    title: 'Prototype Extraction',
    description: 'Steal a combat drone prototype.',
    image: 'https://placehold.co/400x300/1a2a3a/f0ff00',
    hint: 'high-tech laboratory',
    reward: '75000 Credits',
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
          <Map className="h-6 w-6" />
          World Map
        </CardTitle>
        <CardDescription>Select a mission node to receive briefing.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-primary/30">
          <Image
            src="https://placehold.co/800x450/050a10/00f0ff"
            alt="Cyberpunk City Map"
            layout="fill"
            objectFit="cover"
            data-ai-hint="cyberpunk city map"
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
