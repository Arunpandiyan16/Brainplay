import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Map } from 'lucide-react';

const locations = [
  { name: 'Chennai Marina', image: 'https://placehold.co/600x400', hint: 'city beach' },
  { name: 'Madurai Temple Town', image: 'https://placehold.co/600x400', hint: 'temple city' },
  { name: 'Village Outskirts', image: 'https://placehold.co/600x400', hint: 'rural village' },
  { name: 'Western Ghats', image: 'https://placehold.co/600x400', hint: 'mountain forest' },
];

export default function WorldLocations() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Map className="h-6 w-6" />
          Explore the World
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {locations.map((loc) => (
            <div key={loc.name} className="relative rounded-lg overflow-hidden group">
              <Image
                src={loc.image}
                alt={loc.name}
                width={600}
                height={400}
                className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={loc.hint}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">{loc.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
