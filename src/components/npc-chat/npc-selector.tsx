'use client';

import type { NPC } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const npcs: NPC[] = [
  {
    id: 'guardian',
    name: 'The First Guardian',
    personality: 'An ancient, wise, and solemn spirit of a Signal Tender from a forgotten era. It speaks in poetic, sorrowful verses, hinting at a great tragedy that caused the Static.',
    avatar: 'https://placehold.co/64x64/aaccff/1a2a3a?text=G',
    'data-ai-hint': 'wise old spirit fantasy'
  },
  {
    id: 'trickster',
    name: 'The Whispering Fen',
    personality: 'A chaotic, playful, and unpredictable nature spirit from the swamps. It speaks in riddles and rhymes, offering truths wrapped in illusions. It finds the Static amusing.',
    avatar: 'https://placehold.co/64x64/90ee90/1a2a3a?text=F',
    'data-ai-hint': 'nature spirit magic'
  },
  {
    id: 'oracle',
    name: 'The Star-Caller',
    personality: 'A cosmic entity bound to an observatory, perceiving all timelines. It is detached, clinical, and speaks of possibilities as cold facts. It views the Static as a simple universal inevitability.',
    avatar: 'https://placehold.co/64x64/d8b4fe/1a2a3a?text=O',
    'data-ai-hint': 'cosmic entity galaxy'
  },
];

type NpcSelectorProps = {
    selectedNpcId: string;
    onNpcChange: (npcId: string) => void;
}

export default function NpcSelector({ selectedNpcId, onNpcChange }: NpcSelectorProps) {
  return (
    <Select value={selectedNpcId} onValueChange={onNpcChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Attune to a spirit..." />
      </SelectTrigger>
      <SelectContent>
        {npcs.map((npc) => (
          <SelectItem key={npc.id} value={npc.id} className="font-headline">
            {npc.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
