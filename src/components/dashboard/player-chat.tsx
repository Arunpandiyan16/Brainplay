'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageSquare, Loader2 } from 'lucide-react';
import { getPlayerChatMessage } from '@/app/actions/chat';

type ChatMessage = {
  id: number;
  author: string;
  text: string;
};

export default function PlayerChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, author: 'System', text: 'Welcome to the global chat!' },
  ]);
  const [input, setInput] = useState('');
  const [isAiThinking, setIsAiThinking] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages(prev => [...prev, { id: Date.now(), author: 'You', text: input.trim() }]);
      setInput('');
    }
  };
  
  useEffect(() => {
    let isMounted = true;
    const fetchAiMessage = async () => {
        setIsAiThinking(true);
        const lastMessages = messages.slice(-5).map(m => `${m.author}: ${m.text}`);
        const result = await getPlayerChatMessage({ previousMessages: lastMessages });
        if(isMounted && result.success && result.data) {
            setMessages(prev => [...prev, { id: Date.now(), author: result.data.author, text: result.data.text }]);
        }
        setIsAiThinking(false);
    }
    
    // Fetch a message when the component mounts
    if(messages.length === 1) {
        fetchAiMessage();
    }

    const intervalId = setInterval(() => {
        fetchAiMessage();
    }, 10000 + Math.random() * 5000); // 10-15 seconds

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    }
  }, []);


  return (
    <Card className="flex flex-col h-[400px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6" />
          Global Chat
        </CardTitle>
        <CardDescription>Talk with other players in the verse.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className="flex flex-col">
                <span className={`font-bold text-sm ${msg.author === 'You' ? 'text-primary' : 'text-muted-foreground'}`}>
                  {msg.author}
                </span>
                <p className="text-sm break-words">{msg.text}</p>
              </div>
            ))}
             {isAiThinking && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>New message...</span>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSend} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            autoComplete="off"
          />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
