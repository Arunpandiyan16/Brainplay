import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clapperboard, Music, Puzzle } from 'lucide-react';

const entertainment = [
  { name: 'Virtual Cinema', icon: Clapperboard, image: 'https://placehold.co/400x300', hint: 'cinema interior' },
  { name: 'Live Concerts', icon: Music, image: 'https://placehold.co/400x300', hint: 'live concert' },
  { name: 'Mini-Games', icon: Puzzle, image: 'https://placehold.co/400x300', hint: 'arcade games' },
];

export default function EntertainmentHub() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clapperboard className="h-6 w-6" />
          Entertainment Hub
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {entertainment.map((item) => (
            <Card key={item.name} className="overflow-hidden group">
              <div className="relative h-32">
                 <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={item.hint}
                  />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-semibold">{item.name}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
