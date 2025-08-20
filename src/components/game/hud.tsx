'use client';

import { useState } from 'react';
import { MessageSquare, Users } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PlayerChat from '@/components/player-chat/player-chat';
import NpcChat from '@/components/npc-chat/npc-chat';

export default function Hud() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <MessageSquare className="mr-2" />
          Chat
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] h-[70vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Communications</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="global" className="flex-1 flex flex-col overflow-hidden">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="global">
                <MessageSquare className="mr-2 h-4 w-4" /> Global Chat
            </TabsTrigger>
            <TabsTrigger value="npc">
                <Users className="mr-2 h-4 w-4" /> NPC Chat
            </TabsTrigger>
          </TabsList>
          <TabsContent value="global" className="flex-1 overflow-hidden mt-4">
            <PlayerChat />
          </TabsContent>
          <TabsContent value="npc" className="flex-1 overflow-hidden mt-4">
            <NpcChat />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
