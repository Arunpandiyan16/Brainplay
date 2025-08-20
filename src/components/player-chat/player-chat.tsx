'use client';

import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Send, Rss } from 'lucide-react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getPlayerChatMessage } from '@/app/actions/chat';
import { useToast } from '@/hooks/use-toast';
import type { Message } from '@/types';

const initialMessages: Message[] = [
    {id: uuidv4(), author: 'system', text: 'Connection to Global Net established.'},
    {id: uuidv4(), author: 'npc', text: 'Anyone seen the new Zetatech cyberdeck? The specs are insane.', npc: { id: 'generic1', name: 'NetRunner22', avatar: `https://placehold.co/40x40/e81cff/ffffff?text=NR`, personality: '', 'data-ai-hint': 'hacker avatar'}},
];


export default function PlayerChat() {
    const [messages, setMessages] = useState<Message[]>(initialMessages);
    const [input, setInput] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({
                top: scrollAreaRef.current.scrollHeight,
                behavior: 'smooth',
            });
        }
    }, [messages]);

    // AI message generation interval
    useEffect(() => {
        setIsGenerating(true);
        const intervalId = setInterval(async () => {
            const lastFewMessages = messages.slice(-5).map(m => `${m.npc?.name || m.author}: ${m.text}`);
            const result = await getPlayerChatMessage({ previousMessages: lastFewMessages });
            
            if (result.success && result.data) {
                const newMessage: Message = {
                    id: uuidv4(),
                    author: 'npc',
                    text: result.data.text,
                    npc: { id: result.data.author, name: result.data.author, avatar: `https://placehold.co/40x40/e81cff/ffffff?text=${result.data.author.substring(0,2)}`, personality: '', 'data-ai-hint': 'hacker avatar' },
                };
                setMessages(prev => [...prev, newMessage]);
            }
        }, 10000); // Generate a message every 10 seconds

        setIsGenerating(false);
        return () => clearInterval(intervalId);
    }, [messages]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = {
            id: uuidv4(),
            author: 'user',
            text: input,
            npc: { id: 'user', name: 'Agent_77', avatar: 'https://placehold.co/40x40/ffffff/000000?text=A77', personality: '', 'data-ai-hint': 'player avatar'}
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');
    };

    return (
        <Card className="w-full h-full flex flex-col bg-transparent border-none shadow-none">
            <CardContent className="flex-1 overflow-hidden p-0">
                <ScrollArea className="h-full pr-4" ref={scrollAreaRef}>
                    <div className="space-y-4">
                        {messages.map((msg) => (
                             <div key={msg.id} className={`flex items-start gap-2 text-sm ${msg.author === 'user' ? 'justify-end' : ''} ${msg.author === 'system' ? 'justify-center' : ''}`}>
                                {msg.author === 'system' && (
                                    <p className="text-xs text-muted-foreground italic">-- {msg.text} --</p>
                                )}
                                {msg.author !== 'user' && msg.author !== 'system' && (
                                     <span className="font-bold text-primary font-headline">{msg.npc?.name}:</span>
                                )}
                                {msg.author !== 'system' && (
                                <p className={`${msg.author === 'user' ? 'text-right text-accent' : 'text-foreground/80'}`}>
                                    {msg.text}
                                </p>
                                )}
                             </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-0 pt-4">
                 <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Broadcast message..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        autoComplete='off'
                    />
                    <Button type="submit" size="icon" disabled={!input.trim()}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    );
}
