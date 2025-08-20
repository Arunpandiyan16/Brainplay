'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import WorldLocations from '@/components/dashboard/world-locations';
import Missions from '@/components/dashboard/missions';
import PlayerChat from '@/components/dashboard/player-chat';
import NpcChat from '@/components/npc-chat/npc-chat';
import ActiveMission from '@/components/dashboard/active-mission';
import { Toaster } from "@/components/ui/toaster"
import type { Mission, BriefingData } from '@/types';


export default function Home() {
  const [activeMission, setActiveMission] = useState<({ mission: Mission, briefing: BriefingData }) | null>(null);

  const handleStartMission = (mission: Mission, briefing: BriefingData) => {
    setActiveMission({ mission, briefing });
  };

  const handleCompleteMission = () => {
    setActiveMission(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="container mx-auto">
          {activeMission ? (
            <ActiveMission 
              mission={activeMission.mission}
              briefing={activeMission.briefing}
              onComplete={handleCompleteMission}
            />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
              <div className="lg:col-span-2 space-y-6 xl:space-y-8">
                <WorldLocations />
                <Missions onStartMission={handleStartMission} />
              </div>
              <div className="lg:col-span-1 space-y-6 xl:space-y-8">
                <NpcChat />
                <PlayerChat />
              </div>
            </div>
          )}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
