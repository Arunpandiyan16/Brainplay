import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Swords } from 'lucide-react';

const missions = [
  { 
    title: 'The Informant', 
    description: 'A trusted informant has gone missing. Find him before the mafia gets to him. He was last seen near the harbor.',
    image: 'https://placehold.co/400x300',
    hint: 'dark alley',
    reward: '5000 RP'
  },
  { 
    title: 'Rival Gang Takedown', 
    description: 'Rowdy Raja\'s rival is expanding their territory. Disrupt their operations and send a message.',
    image: 'https://placehold.co/400x300',
    hint: 'warehouse fight',
    reward: '10000 RP'
  },
   { 
    title: 'The Heist', 
    description: 'A high-value target is being transported through the city. Assemble a crew and intercept it.',
    image: 'https://placehold.co/400x300',
    hint: 'armored truck',
    reward: '50000 RP'
  },
];

export default function Missions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Swords className="h-6 w-6" />
          Season 1: Cop vs. Mafia
        </CardTitle>
        <CardDescription>
            Complete missions to progress the story and earn rewards.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {missions.map((mission) => (
          <Card key={mission.title} className="flex flex-col sm:flex-row items-center gap-4 p-4 group">
            <Image
                src={mission.image}
                alt={mission.title}
                width={150}
                height={100}
                className="rounded-md object-cover w-full sm:w-[150px] h-auto sm:h-[100px] transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={mission.hint}
            />
            <div className="flex-1">
                <h3 className="text-lg font-bold">{mission.title}</h3>
                <p className="text-sm text-muted-foreground">{mission.description}</p>
                <p className="text-sm font-semibold text-primary mt-2">Reward: {mission.reward}</p>
            </div>
            <Button>Start Mission</Button>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
}