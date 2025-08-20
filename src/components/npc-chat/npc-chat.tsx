'use client';

import { useState, useRef, useEffect } from 'react';
import { Loader2, Send } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { handleNpcChat } from '@/app/actions/npc';
import type { Message, NPC } from '@/types';
import NpcSelector, { npcs } from './npc-selector';

export default function NpcChat() {
  const [selectedNpcId, setSelectedNpcId] = useState<string>(npcs[0].id);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const selectedNpc = npcs.find((npc) => npc.id === selectedNpcId)!;

  useEffect(() => {
    // Scroll to the bottom when messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: uuidv4(), author: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const result = await handleNpcChat({
        userInput: input,
        npcName: selectedNpc.name,
        npcPersonality: selectedNpc.personality,
        gameContext: "The user is the Signal Tender, a mystical being trying to restore a lost world. You are a spirit of this world.",
    });

    if (result.success && result.data) {
        const npcMessage: Message = {
            id: uuidv4(),
            author: 'npc',
            text: result.data.npcResponse,
            npc: selectedNpc,
        };
        setMessages((prev) => [...prev, npcMessage]);
    } else {
        toast({
            variant: 'destructive',
            title: 'The signal fades...',
            description: result.error,
        });
        setMessages((prev) => prev.slice(0, prev.length -1));
    }
    setIsLoading(false);
  };

  return (
    <Card className="w-full h-full flex flex-col bg-transparent border-none shadow-none">
        <CardHeader className="p-0 mb-4">
            <NpcSelector selectedNpcId={selectedNpcId} onNpcChange={setSelectedNpcId} />
        </CardHeader>
        <CardContent className="flex-1 overflow-hidden p-0">
            <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                 <div className="space-y-4">
                    {messages.map((message) => (
                        <div key={message.id} className={`flex items-start gap-3 ${message.author === 'user' ? 'justify-end' : ''}`}>
                            {message.author === 'npc' && message.npc && (
                                <Avatar className="w-8 h-8 border-2 border-primary">
                                    <AvatarImage src={message.npc.avatar} alt={message.npc.name} data-ai-hint={message.npc['data-ai-hint']}/>
                                    <AvatarFallback>{message.npc.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            )}
                            <div className={`rounded-lg px-3 py-2 max-w-sm ${message.author === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
                                <p className="text-sm font-body">{message.text}</p>
                            </div>
                         </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3">
                            <Avatar className="w-8 h-8 border-2 border-primary">
                                <AvatarImage src={selectedNpc.avatar} alt={selectedNpc.name} data-ai-hint={selectedNpc['data-ai-hint']} />
                                <AvatarFallback>{selectedNpc.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="rounded-lg px-3 py-2 bg-muted">
                                <Loader2 className="h-5 w-5 animate-spin" />
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
        </CardContent>
        <CardFooter className="p-0 pt-4">
            <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Whisper to the spirits..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    disabled={isLoading}
                    autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                    <Send className="h-4 w-4" />
                </Button>
            </form>
        </CardFooter>
    </Card>
  );
}
