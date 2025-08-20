'use client';

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Map } from 'lucide-react';
import type { Mission, BriefingData } from '@/types';
import MissionCard from '../dashboard/mission-card';

const missions: (Mission & { position: { top: string; left: string } })[] = [
  {
    title: 'The Informant',
    description: 'Find a missing informant near the harbor.',
    image: 'https://placehold.co/400x300',
    hint: 'dark alley',
    reward: '5000 RP',
    position: { top: '35%', left: '25%' },
  },
  {
    title: 'Rival Gang Takedown',
    description: "Disrupt a rival's operations.",
    image: 'https://placehold.co/400x300',
    hint: 'warehouse fight',
    reward: '10000 RP',
    position: { top: '60%', left: '70%' },
  },
  {
    title: 'The Heist',
    description: 'Intercept a high-value target.',
    image: 'https://placehold.co/400x300',
    hint: 'armored truck',
    reward: '50000 RP',
    position: { top: '15%', left: '80%' },
  },
];

type InteractiveMapProps = {
  onStartMission: (mission: Mission, briefing: BriefingData) => void;
};

export default function InteractiveMap({ onStartMission }: InteractiveMapProps) {
  return (
    <Card className="bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-6 w-6" />
          World Map
        </CardTitle>
        <CardDescription>Select a mission from the map to begin.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden border-2 border-primary/30">
          <Image
            src="https://placehold.co/800x450"
            alt="Game World Map"
            layout="fill"
            objectFit="cover"
            data-ai-hint="city map illustration"
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
