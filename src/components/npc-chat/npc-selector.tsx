'use client';

import type { NPC } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const npcs: NPC[] = [
  {
    id: 'police-inspector',
    name: 'Inspector Vikram',
    personality: 'A tough, no-nonsense cop who is investigating a series of crimes in the city. He is suspicious of everyone.',
    avatar: 'https://placehold.co/64x64/4287f5/e0e8f5?text=IV',
    'data-ai-hint': 'police inspector portrait'
  },
  {
    id: 'tea-stall-owner',
    name: 'Annan',
    personality: 'A friendly and talkative tea stall owner who knows all the local gossip. He is a good source of information.',
    avatar: 'https://placehold.co/64x64/f5bc42/4287f5?text=A',
    'data-ai-hint': 'man portrait'
  },
  {
    id: 'rowdy-raja',
    name: 'Rowdy Raja',
    personality: 'A feared local gangster who is quick to anger. He is fiercely loyal to his gang.',
    avatar: 'https://placehold.co/64x64/e0e8f5/f54242?text=RR',
    'data-ai-hint': 'gangster portrait'
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