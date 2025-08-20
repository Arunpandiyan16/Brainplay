'use client';

import type { NPC } from '@/types';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const npcs: NPC[] = [
  {
    id: 'fixer',
    name: 'Silas "Glitch" Mercer',
    personality: 'A grizzled, cynical information broker (a "Fixer") who has seen it all. He talks in cryptic, tech-heavy slang and trusts no one, but he always has the best intel for a price.',
    avatar: 'https://placehold.co/64x64/00f0ff/1a2a3a?text=S',
    'data-ai-hint': 'cyberpunk man portrait'
  },
  {
    id: 'ai-construct',
    name: 'Oracle',
    personality: 'A rogue AI construct that exists only in the digital realm. It speaks in paradoxes and philosophical questions, offering guidance that is as confusing as it is brilliant.',
    avatar: 'https://placehold.co/64x64/ff00ff/1a2a3a?text=O',
    'data-ai-hint': 'ai face'
  },
  {
    id: 'corporate-enforcer',
    name: 'Commander Valerius',
    personality: 'A ruthless, cybernetically-enhanced corporate security chief. He is fiercely loyal to his corporation, viewing everyone else as a potential threat or a disposable asset. He is formal, intimidating, and direct.',
    avatar: 'https://placehold.co/64x64/f0ff00/1a2a3a?text=V',
    'data-ai-hint': 'cyberpunk soldier portrait'
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
        <SelectValue placeholder="Select a contact..." />
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
