import { v4 as uuidv4 } from 'uuid';

export type NPC = {
  id: string;
  name: string;
  personality: string;
  avatar: string;
  'data-ai-hint': string;
};

export type Message = {
  id: string;
  author: 'user' | 'npc' | 'system';
  text: string;
  npc?: NPC;
};

export type Mission = {
  title: string;
  description: string;
  image: string;
  hint: string;
  reward: string;
};

export type BriefingData = {
    briefing: string;
    objectives: string[];
}
