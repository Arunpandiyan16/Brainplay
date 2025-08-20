'use client';

import { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Bot, Send, User } from 'lucide-react';

import type { NPC, Message } from '@/types';
import { handleNpcChat } from '@/app/actions/npc';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import NpcSelector, { npcs } from './npc-selector';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty.'),
});

export default function NpcChat() {
  const [selectedNpc, setSelectedNpc] = useState<NPC>(npcs[0]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { message: '' },
  });

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const userInput = values.message;
    const userMessage: Message = { id: Date.now(), author: 'user', text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    form.reset();
    
    const result = await handleNpcChat({
      userInput,
      npcName: selectedNpc.name,
      npcPersonality: selectedNpc.personality,
      gameContext: 'The user is a player in the CityVerse game, exploring the city and interacting with its inhabitants.',
    });

    if (result.success && result.data) {
        const npcMessage: Message = { id: Date.now() + 1, author: 'npc', text: result.data.npcResponse, npc: selectedNpc };
        setMessages((prev) => [...prev, npcMessage]);
    } else {
        toast({
          variant: 'destructive',
          title: 'Oh no! Something went wrong.',
          description: result.error,
        });
        // Remove the user's message if the call fails
        setMessages(prev => prev.slice(0, prev.length - 1));
    }
    
    setIsLoading(false);
  };
  
  const handleNpcChange = (npcId: string) => {
    const npc = npcs.find(n => n.id === npcId);
    if(npc) {
        setSelectedNpc(npc);
        setMessages([]);
    }
  }

  return (
    <Card className="flex flex-col h-[500px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          AI Character Chat
        </CardTitle>
        <CardDescription>
          Talk to the residents of CityVerse.
        </CardDescription>
        <NpcSelector selectedNpcId={selectedNpc.id} onNpcChange={handleNpcChange} />
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground pt-8">Say hello to {selectedNpc.name}!</div>
            )}
            {messages.map((msg) => (
              <div key={msg.id} className={cn('flex items-start gap-3', msg.author === 'user' && 'justify-end')}>
                {msg.author === 'npc' && (
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={msg.npc?.avatar} data-ai-hint={msg.npc?.['data-ai-hint']} />
                    <AvatarFallback>{msg.npc?.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                )}
                 <div className={cn('rounded-lg px-3 py-2 max-w-[80%]', msg.author === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted')}>
                    <p className="text-sm">{msg.text}</p>
                </div>
                {msg.author === 'user' && (
                  <Avatar className="h-8 w-8">
                    <AvatarFallback><User size={18} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
                 <div className='flex items-start gap-3'>
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={selectedNpc.avatar} data-ai-hint={selectedNpc['data-ai-hint']} />
                        <AvatarFallback>{selectedNpc.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className='rounded-lg px-3 py-2 bg-muted flex items-center gap-2'>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="h-2 w-2 rounded-full bg-slate-400 animate-bounce"></span>
                    </div>
                </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full items-center space-x-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input {...field} placeholder={`Message ${selectedNpc.name}...`} autoComplete="off" disabled={isLoading} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" size="icon" disabled={isLoading}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </Form>
      </CardFooter>
    </Card>
  );
}
