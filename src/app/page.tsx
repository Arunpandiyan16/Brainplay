'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import GameInterface from '@/components/game/game-interface';
import { Toaster } from "@/components/ui/toaster"
import type { Mission, BriefingData } from '@/types';
import Weather from '@/components/game/weather';
import DayNightCycle from '@/components/layout/day-night-cycle';


export default function Home() {
  const [activeMission, setActiveMission] = useState<({ mission: Mission, briefing: BriefingData }) | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    document.documentElement.classList.add('dark');
  }, []);

  const handleStartMission = (mission: Mission, briefing: BriefingData) => {
    setActiveMission({ mission, briefing });
  };

  const handleCompleteMission = () => {
    setActiveMission(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
          <GameInterface 
            activeMission={activeMission}
            onStartMission={handleStartMission}
            onCompleteMission={handleCompleteMission}
          />
      </main>
      <DayNightCycle />
      <Weather />
      <Toaster />
    </div>
  );
}
