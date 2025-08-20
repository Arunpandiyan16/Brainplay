import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { User, Shield, Zap } from 'lucide-react';

export default function PlayerHub() {
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <User className="h-6 w-6" />
                Player Status
                </CardTitle>
                <CardDescription>
                    Your character stats and current loadout.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden group">
                     <Image
                        src="https://placehold.co/600x800"
                        alt="Player Character"
                        layout="fill"
                        objectFit="cover"
                        className="object-top transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint="full body character"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                        <h3 className="text-2xl font-bold text-white">Vigilante_77</h3>
                        <p className="text-sm text-amber-400">Level 12</p>
                    </div>
                </div>
                 <div className="space-y-6">
                    <div className='space-y-4'>
                        <h4 className='font-bold text-lg'>Vitals & Reputation</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="text-muted-foreground text-sm w-20">Health</span>
                                <div className="w-full bg-muted rounded-full h-4 border border-black/20">
                                    <div className="bg-green-500 h-full rounded-full" style={{width: "90%"}}></div>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <span className="text-muted-foreground text-sm w-20">Stamina</span>
                                <div className="w-full bg-muted rounded-full h-4 border border-black/20">
                                    <div className="bg-yellow-500 h-full rounded-full" style={{width: "75%"}}></div>
                                </div>
                            </div>
                             <div className="flex items-center gap-3">
                                <span className="text-muted-foreground text-sm w-20">Reputation</span>
                                 <div className="w-full bg-muted rounded-full h-4 border border-black/20">
                                    <div className="bg-blue-500 h-full rounded-full" style={{width: "40%"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='space-y-3'>
                        <h4 className='font-bold text-lg'>Loadout</h4>
                        <div className="flex items-center gap-4 text-sm font-mono">
                            <Zap className="h-5 w-5 text-primary" /> <span>Primary: AKM-47</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm font-mono">
                            <Shield className="h-5 w-5 text-primary" /> <span>Armor: Tactical Vest</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
