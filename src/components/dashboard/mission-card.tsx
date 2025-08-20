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
import { Loader2, ListChecks, Swords } from 'lucide-react';
import { getMissionBriefing } from '@/app/actions/mission';
import { useToast } from '@/hooks/use-toast';
import { ScrollArea } from '../ui/scroll-area';
import type { Mission, BriefingData } from '@/types';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type MissionCardProps = {
  mission: Mission;
  onStartMission: (mission: Mission, briefing: BriefingData) => void;
};

export default function MissionCard({ mission, onStartMission }: MissionCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [briefingData, setBriefingData] = useState<BriefingData | null>(null);
  const { toast } = useToast();

  const handleOpenDialog = async () => {
    setIsOpen(true);
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

  const handleAcceptMission = () => {
    if (briefingData) {
      onStartMission(mission, briefingData);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DialogTrigger asChild>
                <button onClick={handleOpenDialog} className="p-2 bg-primary/80 rounded-full hover:bg-primary transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent outline-none">
                    <Swords className="h-6 w-6 text-primary-foreground" />
                </button>
            </DialogTrigger>
          </TooltipTrigger>
          <TooltipContent side="top" className="bg-card text-card-foreground border-border">
            <p className="font-bold">{mission.title}</p>
            <p className="text-sm text-muted-foreground">{mission.description}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
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
                <Button type="button" disabled={isLoading || !briefingData} onClick={handleAcceptMission}>
                    Accept Mission
                </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
