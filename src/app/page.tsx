'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import DayNightCycle from '@/components/layout/day-night-cycle';
import GameInterface from '@/components/game/game-interface';
import { Toaster } from "@/components/ui/toaster"
import type { Mission, BriefingData } from '@/types';
import Weather from '@/components/game/weather';


export default function Home() {
  const [activeMission, setActiveMission] = useState<({ mission: Mission, briefing: BriefingData }) | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
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
      {isClient && <DayNightCycle />}
      {isClient && <Weather />}
      <main className="flex-1">
          <GameInterface 
            activeMission={activeMission}
            onStartMission={handleStartMission}
            onCompleteMission={handleCompleteMission}
          />
      </main>
      <Toaster />
    </div>
  );
}
