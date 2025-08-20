'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Zap, HeartPulse, Shield, Wind, Sun, Moon } from 'lucide-react';

import ActiveMission from '@/components/dashboard/active-mission';
import Minimap from './minimap';
import InteractiveMap from './interactive-map';
import Hud from './hud';

import type { Mission, BriefingData } from '@/types';

type GameInterfaceProps = {
    activeMission: { mission: Mission; briefing: BriefingData; } | null;
    onStartMission: (mission: Mission, briefing: BriefingData) => void;
    onCompleteMission: () => void;
}

export default function GameInterface({ activeMission, onStartMission, onCompleteMission }: GameInterfaceProps) {
    return (
        <div className="relative w-full h-[calc(100vh-4rem)] overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern z-0 opacity-20"/>
            <Image
                src="https://placehold.co/1920x1080/0a1014/0a1014"
                alt="Mystical Forest background"
                layout="fill"
                objectFit="cover"
                className="z-0 opacity-20"
                data-ai-hint="mystical forest night"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10" />

            <div className="absolute inset-0 z-20 p-4 sm:p-6 md:p-8 flex flex-col justify-between">
                
                <div className="w-full max-w-sm">
                     <Card className="bg-card/80 backdrop-blur-sm border-primary/20">
                        <CardContent className="p-4 space-y-4">
                             <div className="flex items-center gap-4">
                                <div className="relative w-20 h-20 rounded-full overflow-hidden group border-2 border-primary/50 bg-primary/10 flex items-center justify-center">
                                     <Image
                                        src="https://placehold.co/200x200/152a3a/ffc700?text=S"
                                        alt="Signal Tender Avatar"
                                        layout="fill"
                                        objectFit="cover"
                                        data-ai-hint="fantasy character portrait"
                                    />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <h3 className="text-xl font-bold font-headline text-primary">Signal Tender</h3>
                                    <div className="flex items-center gap-3">
                                        <HeartPulse className="w-5 h-5 text-red-500" />
                                        <div className="w-full bg-muted/50 rounded-full h-2.5 border border-black/20">
                                            <div className="bg-red-500 h-full rounded-full" style={{width: "100%"}}></div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Shield className="w-5 h-5 text-blue-400" />
                                        <div className="w-full bg-muted/50 rounded-full h-2.5 border border-black/20">
                                            <div className="bg-blue-500 h-full rounded-full" style={{width: "80%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>


                 <div className="flex items-end gap-4">
                    <Minimap />
                    
                    {activeMission && (
                        <Card className="bg-card/80 backdrop-blur-sm max-w-md hidden md:block border-primary/20">
                             <CardContent className="p-4">
                                <h3 className="font-bold text-lg text-primary font-headline">{activeMission.mission.title}</h3>
                                <p className="text-sm text-white mt-1">{activeMission.briefing.objectives[0]}</p>
                                <div className="flex items-center text-sm font-semibold text-primary pt-2">
                                    <Award className="mr-2 h-4 w-4" />
                                    <span>Reward: {activeMission.mission.reward}</span>
                                </div>
                             </CardContent>
                        </Card>
                    )}
                </div>


                <div className="absolute top-1/2 right-6 -translate-y-1/2 w-full max-w-2xl">
                    {!activeMission ? (
                        <InteractiveMap onStartMission={onStartMission} />
                    ) : (
                        <div className="absolute inset-0 z-30 bg-black/70 flex items-center justify-center p-4">
                            <ActiveMission
                                mission={activeMission.mission}
                                briefing={activeMission.briefing}
                                onComplete={onCompleteMission}
                            />
                        </div>
                    )}
                </div>

                <div className="absolute bottom-4 right-20 sm:right-24 md:right-32 z-30">
                     <Hud />
                </div>
            </div>
        </div>
    );
}
