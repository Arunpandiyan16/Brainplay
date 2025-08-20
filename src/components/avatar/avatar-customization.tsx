'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, Sparkles, Sun, Moon, Sprout } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../ui/tooltip';


type Attunement = {
  id: string;
  name: string;
  description: string;
  url: string;
  hint: string;
};

const attunementOptions = {
  celestial: Array.from({ length: 2 }, (_, i) => ({ id: `celestial${i+1}`, name: i === 0 ? 'Sunstone' : 'Moonstone', description: i === 0 ? 'Attune to the power of the sun.' : 'Attune to the power of the moon.', url: `https://placehold.co/128x128/152a3a/ffc700?text=${i===0 ? 'Sun' : 'Moon'}`, hint: i === 0 ? 'glowing sun orb' : 'glowing moon orb' })),
  terrestrial: Array.from({ length: 2 }, (_, i) => ({ id: `terrestrial${i+1}`, name: i === 0 ? 'Heartwood' : 'Riverstone', description: i === 0 ? 'Attune to the life force of the forest.' : 'Attune to the flow of ancient rivers.', url: `https://placehold.co/128x128/152a3a/90ee90?text=${i===0 ? 'Tree' : 'Wave'}`, hint: i === 0 ? 'glowing seed' : 'water swirl' })),
};


export default function AvatarCustomization() {
  const [celestial, setCelestial] = useState<Attunement>(attunementOptions.celestial[0]);
  const [terrestrial, setTerrestrial] = useState<Attunement>(attunementOptions.terrestrial[0]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary/20 border-primary/50 text-primary">
          <User className="h-5 w-5" />
          <span className="sr-only">Attunement</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card/90 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <DialogTitle className='font-headline'>Tender's Attunement</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="flex flex-col items-center justify-center space-y-4">
             <Card className="w-48 h-48 flex flex-col items-center justify-center bg-muted/50 border-primary/20 p-4 space-y-2">
                {celestial.name === 'Sunstone' ? <Sun className="w-10 h-10 text-primary" /> : <Moon className="w-10 h-10 text-primary" />}
                <h4 className="font-bold font-headline text-lg text-primary">{celestial.name}</h4>
                <p className="text-xs text-center text-muted-foreground">{celestial.description}</p>
            </Card>
             <Card className="w-48 h-48 flex flex-col items-center justify-center bg-muted/50 border-primary/20 p-4 space-y-2">
                <Sprout className="w-10 h-10 text-primary" />
                <h4 className="font-bold font-headline text-lg text-primary">{terrestrial.name}</h4>
                <p className="text-xs text-center text-muted-foreground">{terrestrial.description}</p>
            </Card>
          </div>
          <Tabs defaultValue="celestial" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="celestial">Celestial</TabsTrigger>
              <TabsTrigger value="terrestrial">Terrestrial</TabsTrigger>
            </TabsList>
            <Separator className="my-4 border-primary/20" />
            <TabsContent value="celestial">
                <div className="grid grid-cols-2 gap-4">
                    {attunementOptions.celestial.map((item) => (
                        <TooltipProvider key={item.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => setCelestial(item)} className={cn('rounded-lg overflow-hidden border-2 bg-muted/50', celestial.id === item.id ? 'border-primary' : 'border-transparent' )}>
                                        <Image src={item.url} alt={item.id} width={128} height={128} className="w-full h-auto" data-ai-hint={item.hint} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="terrestrial">
                <div className="grid grid-cols-2 gap-4">
                    {attunementOptions.terrestrial.map((item) => (
                        <TooltipProvider key={item.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => setTerrestrial(item)} className={cn('rounded-lg overflow-hidden border-2 bg-muted/50', terrestrial.id === item.id ? 'border-primary' : 'border-transparent' )}>
                                        <Image src={item.url} alt={item.id} width={128} height={128} className="w-full h-auto" data-ai-hint={item.hint} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent side="top">
                                    <p>{item.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button">Attune</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
