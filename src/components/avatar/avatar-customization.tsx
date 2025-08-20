'use client';

import { useState } from 'react';
import Image from 'next/image';
import { User, Sparkles, Loader2 } from 'lucide-react';

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
  CardContent,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { randomizeAvatar } from '@/app/actions/avatar';
import { useToast } from '@/hooks/use-toast';

type AvatarPart = {
  id: string;
  url: string;
  hint: string;
};

const avatarOptions = {
  faces: Array.from({ length: 4 }, (_, i) => ({ id: `face${i+1}`, url: `https://placehold.co/128x128/e0e8f5/4287f5?text=F${i+1}`, hint: 'avatar face' })),
  clothes: Array.from({ length: 4 }, (_, i) => ({ id: `clothes${i+1}`, url: `https://placehold.co/128x128/e0e8f5/4287f5?text=C${i+1}`, hint: 'avatar clothes' })),
  accessories: Array.from({ length: 4 }, (_, i) => ({ id: `acc${i+1}`, url: `https://placehold.co/128x128/e0e8f5/4287f5?text=A${i+1}`, hint: 'avatar accessory' })),
};

export default function AvatarCustomization() {
  const [face, setFace] = useState<AvatarPart>(avatarOptions.faces[0]);
  const [clothes, setClothes] = useState<AvatarPart>(avatarOptions.clothes[0]);
  const [accessory, setAccessory] = useState<AvatarPart>(avatarOptions.accessories[0]);
  const [isRandomizing, setIsRandomizing] = useState(false);
  const { toast } = useToast();

  const handleRandomize = async () => {
    setIsRandomizing(true);
    const result = await randomizeAvatar();
    if (result.success && result.data) {
        setFace(result.data.face);
        setClothes(result.data.clothes);
        setAccessory(result.data.accessory);
    } else {
        toast({
          variant: 'destructive',
          title: 'Avatar Generation Failed',
          description: result.error,
        });
    }
    setIsRandomizing(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <User className="h-5 w-5" />
          <span className="sr-only">Customize Avatar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Customize Your Avatar</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Card className="w-48 h-48 relative overflow-hidden flex items-center justify-center bg-muted">
                {isRandomizing ? (
                  <Loader2 className="h-12 w-12 animate-spin text-primary" />
                ) : (
                  <>
                    <Avatar className="w-full h-full rounded-none">
                        <AvatarImage src={face.url} alt="Avatar Face" className="object-cover" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0">
                        <Image src={clothes.url} alt="Avatar Clothes" layout="fill" objectFit="contain" data-ai-hint={clothes.hint} />
                    </div>
                    <div className="absolute inset-0">
                        <Image src={accessory.url} alt="Avatar Accessory" layout="fill" objectFit="contain" data-ai-hint={accessory.hint}/>
                    </div>
                  </>
                )}
            </Card>
            <Button variant="secondary" onClick={handleRandomize} disabled={isRandomizing}>
                {isRandomizing ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <Sparkles className="mr-2 h-4 w-4" />
                )}
                Randomize
            </Button>
          </div>
          <Tabs defaultValue="face" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="face">Face</TabsTrigger>
              <TabsTrigger value="clothes">Clothes</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
            </TabsList>
            <Separator className="my-4" />
            <TabsContent value="face">
                <div className="grid grid-cols-2 gap-4">
                    {avatarOptions.faces.map((item) => (
                        <button key={item.id} onClick={() => setFace(item)} className={cn('rounded-lg overflow-hidden border-2', face.id === item.id ? 'border-primary' : 'border-transparent' )}>
                            <Image src={item.url} alt={item.id} width={128} height={128} className="w-full h-auto" data-ai-hint={item.hint} />
                        </button>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="clothes">
                <div className="grid grid-cols-2 gap-4">
                    {avatarOptions.clothes.map((item) => (
                        <button key={item.id} onClick={() => setClothes(item)} className={cn('rounded-lg overflow-hidden border-2', clothes.id === item.id ? 'border-primary' : 'border-transparent' )}>
                            <Image src={item.url} alt={item.id} width={128} height={128} className="w-full h-auto" data-ai-hint={item.hint} />
                        </button>
                    ))}
                </div>
            </TabsContent>
            <TabsContent value="accessories">
                <div className="grid grid-cols-2 gap-4">
                    {avatarOptions.accessories.map((item) => (
                        <button key={item.id} onClick={() => setAccessory(item)} className={cn('rounded-lg overflow-hidden border-2', accessory.id === item.id ? 'border-primary' : 'border-transparent' )}>
                            <Image src={item.url} alt={item.id} width={128} height={128} className="w-full h-auto" data-ai-hint={item.hint} />
                        </button>
                    ))}
                </div>
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
            <DialogClose asChild>
                <Button type="button">Save Changes</Button>
            </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
