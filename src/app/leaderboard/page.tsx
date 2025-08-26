
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Award, Trophy, Loader2 } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock data - in a real app, this would come from a backend
const getMockLeaderboardData = () => {
    const users = [
        { name: 'PlayerOne', score: 12550, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d' },
        { name: 'QuizMaster', score: 11200, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d' },
        { name: 'LogicLeaper', score: 10850, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d' },
        { name: 'WordHunterPro', score: 9900, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026707d' },
        { name: 'MathGenius', score: 9850, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026708d' },
        { name: 'FakeNewsSpotter', score: 8700, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026709d' },
        { name: 'DailyChamp', score: 8150, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026710d' },
        { name: 'MemoryWhiz', score: 7600, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026711d' },
        { name: 'RookieRanger', score: 6500, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026712d' },
        { name: 'Brainiac', score: 5400, avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026713d' },
    ];
    // In a real app, you would fetch and combine scores from localStorage for each game
    // For this mock, we'll just use the pre-defined scores.
    return users.sort((a, b) => b.score - a.score);
};


export default function LeaderboardPage() {
    const [leaderboard, setLeaderboard] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching data
        setTimeout(() => {
            const data = getMockLeaderboardData();
            setLeaderboard(data);
            setIsLoading(false);
        }, 1000);
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
                        See who is leading the charge across all BrainPlay games.
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
                                    <TableHead className="text-right">Score</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {leaderboard.map((player, index) => (
                                    <TableRow key={player.name} className={index < 3 ? 'bg-secondary/50' : ''}>
                                        <TableCell className="font-bold text-xl text-center">
                                            <span className={getRankColor(index)}>
                                                {index === 0 && <Award className="inline-block" />}
                                                {index > 0 && (index + 1)}
                                            </span>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-4">
                                                <Avatar>
                                                    <AvatarImage src={player.avatar} alt={player.name} />
                                                    <AvatarFallback>{player.name.charAt(0).toUpperCase()}</AvatarFallback>
                                                </Avatar>
                                                <span className="font-medium">{player.name}</span>
                                                {index < 3 && <Badge variant={index === 0 ? "default" : "secondary"}>{['Gold', 'Silver', 'Bronze'][index]}</Badge>}
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right font-mono text-lg">{player.score.toLocaleString()}</TableCell>
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
