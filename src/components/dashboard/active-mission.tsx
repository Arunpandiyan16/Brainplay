'use client';

import Image from 'next/image';
import { ListChecks, CheckCircle2, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import type { Mission, BriefingData } from '@/types';

type ActiveMissionProps = {
  mission: Mission;
  briefing: BriefingData;
  onComplete: () => void;
};

export default function ActiveMission({ mission, briefing, onComplete }: ActiveMissionProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{mission.title}</CardTitle>
        <CardDescription className="text-md text-muted-foreground">{mission.description}</CardDescription>
        <div className="flex items-center text-lg font-semibold text-primary pt-2">
            <Award className="mr-2 h-5 w-5" />
            <span>Reward: {mission.reward}</span>
        </div>
      </CardHeader>
      <CardContent className="grid md:grid-cols-2 gap-6 xl:gap-8">
        <div className="space-y-6">
            <div className="space-y-2">
                <h4 className="font-bold text-xl">Briefing from Inspector Vikram:</h4>
                <ScrollArea className="h-48 pr-4">
                    <p className="text-muted-foreground whitespace-pre-wrap">{briefing.briefing}</p>
                </ScrollArea>
            </div>
            <div className="space-y-2">
                <h4 className="font-bold text-xl flex items-center gap-2"><ListChecks /> Objectives:</h4>
                <ul className="space-y-2 list-disc pl-5">
                    {briefing.objectives.map((obj, index) => (
                        <li key={index} className="text-muted-foreground">{obj}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="relative rounded-lg overflow-hidden h-64 md:h-auto">
            <Image
                src={mission.image}
                alt={mission.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={mission.hint}
                className="transition-transform duration-300 hover:scale-105"
            />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onComplete} size="lg" className="w-full md:w-auto">
          <CheckCircle2 className="mr-2" />
          Mark as Complete
        </Button>
      </CardFooter>
    </Card>
  );
}
