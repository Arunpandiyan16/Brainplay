import Header from '@/components/layout/header';
import WorldLocations from '@/components/dashboard/world-locations';
import Missions from '@/components/dashboard/missions';
import PlayerChat from '@/components/dashboard/player-chat';
import NpcChat from '@/components/npc-chat/npc-chat';
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            <div className="lg:col-span-2 space-y-6 xl:space-y-8">
              <WorldLocations />
              <Missions />
            </div>
            <div className="lg:col-span-1 space-y-6 xl:space-y-8">
              <NpcChat />
              <PlayerChat />
            </div>
          </div>
        </div>
      </main>
      <Toaster />
    </div>
  );
}
