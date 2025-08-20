'use client';

import type { NPC } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const npcs: NPC[] = [
  {
    id: 'barista-bob',
    name: 'Barista Bob',
    personality: 'Friendly, cheerful, and always eager to talk about coffee.',
    avatar: 'https://placehold.co/64x64/f5bc42/4287f5?text=BB',
    'data-ai-hint': 'barista portrait'
  },
  {
    id: 'officer-ria',
    name: 'Officer Ria',
    personality: 'Stoic, serious, and dedicated to keeping the city safe. A bit formal.',
    avatar: 'https://placehold.co/64x64/4287f5/e0e8f5?text=OR',
    'data-ai-hint': 'police portrait'
  },
  {
    id: 'tourist-tina',
    name: 'Tourist Tina',
    personality: 'Excitable, curious, and always asking for directions or recommendations.',
    avatar: 'https://placehold.co/64x64/e0e8f5/f5bc42?text=TT',
    'data-ai-hint': 'tourist portrait'
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
        <SelectValue placeholder="Select a character to talk to" />
      </SelectTrigger>
      <SelectContent>
        {npcs.map((npc) => (
          <SelectItem key={npc.id} value={npc.id}>
            {npc.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
