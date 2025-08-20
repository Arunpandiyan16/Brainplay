'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ListChecks } from 'lucide-react';
import { getMissionBriefing } from '@/app/actions/mission';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';

type Mission = {
  title: string;
  description: string;
  image: string;
  hint: string;
  reward: string;
};

type MissionCardProps = {
  mission: Mission;
};

type BriefingData = {
    briefing: string;
    objectives: string[];
}

export default function MissionCard({ mission }: MissionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [briefingData, setBriefingData] = useState<BriefingData | null>(null);
  const { toast } = useToast();

  const handleStartMission = async () => {
    if (briefingData) return; // Don't re-fetch if we already have it

    setIsLoading(true);
    const result = await getMissionBriefing({
      missionTitle: mission.title,
      missionDescription: mission.description,
    });
    
    if (result.success && result.data) {
        setBriefingData(result.data);
    } else {
        toast({
            variant: 'destructive',
            title: 'Briefing Failed',
            description: result.error,
        });
        setIsOpen(false);
    }
    setIsLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card className="flex flex-col sm:flex-row items-center gap-4 p-4 group">
        <Image
          src={mission.image}
          alt={mission.title}
          width={150}
          height={100}
          className="rounded-md object-cover w-full sm:w-[150px] h-auto sm:h-[100px] transition-transform duration-300 group-hover:scale-105"
          data-ai-hint={mission.hint}
        />
        <div className="flex-1">
          <h3 className="text-lg font-bold">{mission.title}</h3>
          <p className="text-sm text-muted-foreground">{mission.description}</p>
          <p className="text-sm font-semibold text-primary mt-2">
            Reward: {mission.reward}
          </p>
        </div>
        <DialogTrigger asChild>
          <Button onClick={handleStartMission}>Start Mission</Button>
        </DialogTrigger>
      </Card>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{mission.title}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
            {isLoading && (
                <div className="flex items-center justify-center h-64">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                </div>
            )}
            {briefingData && !isLoading &&(
                <ScrollArea className="h-64 pr-4">
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-bold text-lg mb-2">Briefing from Inspector Vikram:</h4>
                            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{briefingData.briefing}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><ListChecks /> Objectives:</h4>
                            <ul className="space-y-2 list-disc pl-5 text-sm">
                                {briefingData.objectives.map((obj, index) => (
                                    <li key={index}>{obj}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </ScrollArea>
            )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
           <DialogClose asChild>
                <Button type="button" disabled={isLoading}>
                    Accept Mission
                </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
