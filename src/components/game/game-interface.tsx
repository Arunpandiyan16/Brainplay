'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award } from 'lucide-react';

import ActiveMission from '@/components/dashboard/active-mission';
import Minimap from './minimap';
import InteractiveMap from './interactive-map';

import type { Mission, BriefingData } from '@/types';

type GameInterfaceProps = {
    activeMission: { mission: Mission; briefing: BriefingData; } | null;
    onStartMission: (mission: Mission, briefing: BriefingData) => void;
    onCompleteMission: () => void;
}

export default function GameInterface({ activeMission, onStartMission, onCompleteMission }: GameInterfaceProps) {
    return (
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            {/* Background Image */}
            <Image
                src="https://placehold.co/1920x1080"
                alt="First-person view from a car"
                layout="fill"
                objectFit="cover"
                className="z-0"
                data-ai-hint="first person car interior"
            />
            <div className="absolute inset-0 bg-black/10 z-10" />

            {/* HUD Elements */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                
                {/* Top Left: Player Status */}
                <div className="w-full max-w-sm">
                     <Card className="bg-card/80 backdrop-blur-sm">
                        <CardContent className="p-4 space-y-4">
                             <div className="flex items-center gap-4">
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden group border-2 border-primary/50">
                                     <Image
                                        src="https://placehold.co/200x200"
                                        alt="Player Character"
                                        layout="fill"
                                        objectFit="cover"
                                        className="object-top"
                                        data-ai-hint="full body character"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-xl font-bold text-white">Vigilante_77</h3>
                                    <div className="flex items-center gap-3">
                                        <span className="text-green-400 text-sm w-12">Health</span>
                                        <div className="w-full bg-muted/50 rounded-full h-2.5 border border-black/20">
                                            <div className="bg-green-500 h-full rounded-full" style={{width: "90%"}}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="text-yellow-400 text-sm w-12">Stamina</span>
                                        <div className="w-full bg-muted/50 rounded-full h-2.5 border border-black/20">
                                            <div className="bg-yellow-500 h-full rounded-full" style={{width: "75%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>


                {/* Bottom Left: Minimap */}
                 <div className="flex items-end gap-4">
                    <Minimap />
                    
                    {/* Active Mission Objective */}
                    {activeMission && (
                        <Card className="bg-card/80 backdrop-blur-sm max-w-md hidden md:block">
                             <CardContent className="p-4">
                                <h3 className="font-bold text-lg text-amber-400">{activeMission.mission.title}</h3>
                                <p className="text-sm text-white mt-1">{activeMission.briefing.objectives[0]}</p>
                                <div className="flex items-center text-sm font-semibold text-primary pt-2">
                                    <Award className="mr-2 h-4 w-4" />
                                    <span>Reward: {activeMission.mission.reward}</span>
                                </div>
                             </CardContent>
                        </Card>
                    )}
                </div>


                {/* Map instead of pausible content */}
                {!activeMission && (
                     <div className="absolute top-1/2 right-6 -translate-y-1/2 w-full max-w-2xl">
                        <InteractiveMap onStartMission={onStartMission} />
                    </div>
                )}
            </div>
             {/* Full screen active mission */}
            {activeMission && (
                <div className="absolute inset-0 z-30 bg-black/70 flex items-center justify-center p-4">
                   <ActiveMission
                     mission={activeMission.mission}
                     briefing={activeMission.briefing}
                     onComplete={onCompleteMission}
                    />
                </div>
            )}
        </div>
    );
}
