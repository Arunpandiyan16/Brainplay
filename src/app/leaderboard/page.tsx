
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Award, Trophy, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { getLeaderboard, UserProfile } from '@/lib/firebase-service';


export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<UserProfile[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setIsLoading(true);
            try {
                const data = await getLeaderboard(10);
                setLeaderboard(data);
            } catch (error) {
                console.error("Failed to fetch leaderboard:", error);
            } finally {
                setIsLoading(false);
            }
        }
        fetchLeaderboard();
    }, []);

    const getRankColor = (rank: number) => {
        if (rank === 0) return 'text-yellow-400';
        if (rank === 1) return 'text-gray-400';
        if (rank === 2) return 'text-yellow-600';
        return 'text-muted-foreground';
    };

    return (
        <div className="flex justify-center items-center py-8">
            <Card className="w-full max-w-4xl border-primary glow-shadow">
                <CardHeader>
                    <CardTitle className="text-4xl font-bold flex items-center justify-center gap-3">
                        <Trophy className="w-10 h-10 text-primary" />
                        Global Leaderboard
                    </CardTitle>
                    <CardDescription className="text-center text-lg">
                        See who is leading the charge across all Brainvia games.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {isLoading ? (
                        <div className="flex justify-center items-center py-16">
                            <Loader2 className="h-16 w-16 animate-spin text-primary" />
                        </div>
                    ) : (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[80px] text-center">Rank</TableHead>
                                    <TableHead>Player</TableHead>
                                    <TableHead className="text-right">Total Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {leaderboard.map((player, index) => (
                                    <TableRow key={player.uid} className={index < 3 ? 'bg-secondary/50' : ''}>
                                        <TableCell className="font-bold text-xl text-center">
                                            <span className={getRankColor(index)}>
                                                {index === 0 && <Award className="inline-block" />}
                                                {index > 0 && (index + 1)}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <Avatar>
                                                    <AvatarFallback>{player.displayName.charAt(0).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium">{player.displayName}</span>
                                                {index < 3 && <Badge variant={index === 0 ? "default" : "secondary"}>{['Gold', 'Silver', 'Bronze'][index]}</Badge>}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-mono text-lg">{player.totalScore.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
