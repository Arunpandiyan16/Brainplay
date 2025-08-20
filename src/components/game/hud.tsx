'use client';

import { useState } from 'react';
import { MessageSquare, Compass } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import NpcChat from '@/components/npc-chat/npc-chat';

export default function Hud() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg" className="bg-secondary hover:bg-primary/20 border-primary/50 text-primary">
          <Compass className="mr-2" />
          Compass
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col bg-card/90 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <DialogTitle className='font-headline'>Whispering Compass</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-hidden mt-4">
          <NpcChat />
        </div>
      </DialogContent>
    </Dialog>
  );
}
