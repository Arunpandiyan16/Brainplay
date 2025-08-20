'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import Missions from '@/components/dashboard/missions';
import PlayerChat from '@/components/dashboard/player-chat';
import NpcChat from '@/components/npc-chat/npc-chat';
import ActiveMission from '@/components/dashboard/active-mission';
import EntertainmentHub from '@/components/dashboard/entertainment-hub';
import PlayerHub from '@/components/dashboard/player-hub';
import WorldLocations from '@/components/dashboard/world-locations';
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
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 xl:gap-8">
                <div className="md:col-span-3 space-y-6">
                    <PlayerHub />
                    <WorldLocations />
                </div>
                <div className="md:col-span-2 space-y-6">
                    <NpcChat />
                    <PlayerChat />
                </div>
                <div className="md:col-span-5">
                    <Missions onStartMission={handleStartMission} />
                </div>
                 <div className="md:col-span-5">
                    <EntertainmentHub />
                </div>
            </div>
          )}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
