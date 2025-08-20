'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, Sparkles, Loader2, Cpu, ScanEye, Shield } from 'lucide-react';

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
import { randomizeAvatar } from '@/app/actions/avatar';
import { useToast } from '@/hooks/use-toast';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '../ui/tooltip';


type Augmentation = {
  id: string;
  name: string;
  url: string;
  hint: string;
};

const augmentationOptions = {
  optics: Array.from({ length: 4 }, (_, i) => ({ id: `optic${i+1}`, name: `Kiroshi Optics Mk.${i+1}`, url: `https://placehold.co/128x128/1a2a3a/00f0ff?text=O${i+1}`, hint: 'cybernetic eye' })),
  processors: Array.from({ length: 4 }, (_, i) => ({ id: `proc${i+1}`, name: `Zetatech Chip v${i+1}.0`, url: `https://placehold.co/128x128/1a2a3a/00f0ff?text=P${i+1}`, hint: 'computer chip' })),
  defenses: Array.from({ length: 4 }, (_, i) => ({ id: `def${i+1}`, name: `Subdermal Armor ${i+1}`, url: `https://placehold.co/128x128/1a2a3a/00f0ff?text=D${i+1}`, hint: 'energy shield' })),
};


export default function AvatarCustomization() {
  const [optic, setOptic] = useState<Augmentation>(augmentationOptions.optics[0]);
  const [processor, setProcessor] = useState<Augmentation>(augmentationOptions.processors[0]);
  const [defense, setDefense] = useState<Augmentation>(augmentationOptions.defenses[0]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary/20 border-primary/50 text-primary">
          <User className="h-5 w-5" />
          <span className="sr-only">Cybernetics</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-card/90 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <DialogTitle className='font-headline'>Cybernetic Augmentations</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="flex flex-col items-center justify-center space-y-4">
             <Card className="w-48 h-48 flex flex-col items-center justify-center bg-muted/50 border-primary/20 p-4 space-y-2">
                <ScanEye className="w-10 h-10 text-primary" />
                <h4 className="font-bold font-headline text-lg text-primary">{optic.name}</h4>
                <p className="text-xs text-center text-muted-foreground">Advanced optical implant for enhanced threat detection.</p>
            </Card>
             <Card className="w-48 h-48 flex flex-col items-center justify-center bg-muted/50 border-primary/20 p-4 space-y-2">
                <Cpu className="w-10 h-10 text-primary" />
                <h4 className="font-bold font-headline text-lg text-primary">{processor.name}</h4>
                <p className="text-xs text-center text-muted-foreground">Co-processor for faster neural processing and hacking.</p>
            </Card>
          </div>
          <Tabs defaultValue="optics" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="optics">Optics</TabsTrigger>
              <TabsTrigger value="processors">Processors</TabsTrigger>
              <TabsTrigger value="defenses">Defenses</TabsTrigger>
            </TabsList>
            <Separator className="my-4 border-primary/20" />
            <TabsContent value="optics">
                <div className="grid grid-cols-2 gap-4">
                    {augmentationOptions.optics.map((item) => (
                        <TooltipProvider key={item.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => setOptic(item)} className={cn('rounded-lg overflow-hidden border-2 bg-muted/50', optic.id === item.id ? 'border-primary' : 'border-transparent' )}>
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
            <TabsContent value="processors">
                <div className="grid grid-cols-2 gap-4">
                    {augmentationOptions.processors.map((item) => (
                        <TooltipProvider key={item.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => setProcessor(item)} className={cn('rounded-lg overflow-hidden border-2 bg-muted/50', processor.id === item.id ? 'border-primary' : 'border-transparent' )}>
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
            <TabsContent value="defenses">
                 <div className="grid grid-cols-2 gap-4">
                    {augmentationOptions.defenses.map((item) => (
                         <TooltipProvider key={item.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <button onClick={() => setDefense(item)} className={cn('rounded-lg overflow-hidden border-2 bg-muted/50', defense.id === item.id ? 'border-primary' : 'border-transparent' )}>
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
                <Button type="button">Commit Changes</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
