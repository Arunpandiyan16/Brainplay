'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, Sparkles, Dices, Loader2 } from 'lucide-react';
import { randomizeAvatar } from '@/app/actions/avatar';

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
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

type AvatarPart = {
  id: string;
  url: string;
  hint: string;
};

const initialAvatar = {
  face: { id: 'face1', url: 'https://placehold.co/200x200/152a3a/ffc700?text=Face', hint: 'default face' },
  clothes: { id: 'clothes1', url: 'https://placehold.co/200x200/152a3a/90ee90?text=Clothes', hint: 'default clothes' },
  accessory: { id: 'accessory1', url: 'https://placehold.co/200x200/152a3a/aaccff?text=Accessory', hint: 'default accessory' },
};

export default function AvatarCustomization() {
  const [avatar, setAvatar] = useState(initialAvatar);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleRandomize = async () => {
    setIsGenerating(true);
    const result = await randomizeAvatar();
    if (result.success) {
      setAvatar(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'Generation Failed',
        description: result.error,
      });
    }
    setIsGenerating(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full bg-secondary hover:bg-primary/20 border-primary/50 text-primary">
          <User className="h-5 w-5" />
          <span className="sr-only">Customize Avatar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[400px] bg-card/90 backdrop-blur-lg border-primary/20">
        <DialogHeader>
          <DialogTitle className='font-headline'>Signal Tender's Form</DialogTitle>
        </DialogHeader>
        <div className="py-4 space-y-6">
            <Card className="relative w-48 h-48 mx-auto bg-muted/50 border-primary/20 flex items-center justify-center">
                 {isGenerating ? (
                    <Loader2 className="w-12 h-12 animate-spin text-primary" />
                ) : (
                    <>
                        <Image src={avatar.face.url} alt="Avatar Face" layout="fill" objectFit="cover" className="z-10" data-ai-hint={avatar.face.hint} />
                        <Image src={avatar.clothes.url} alt="Avatar Clothes" layout="fill" objectFit="cover" className="z-20" data-ai-hint={avatar.clothes.hint} />
                        <Image src={avatar.accessory.url} alt="Avatar Accessory" layout="fill" objectFit="cover" className="z-30" data-ai-hint={avatar.accessory.hint} />
                    </>
                )}
            </Card>
            
            <div className="flex justify-center">
                <Button onClick={handleRandomize} disabled={isGenerating}>
                    <Dices className="mr-2" />
                    {isGenerating ? 'Generating...' : 'Randomize Form'}
                </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground">
                <p>Don't like the look? Let the Aether reshape your form.</p>
            </div>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button">Confirm Form</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
