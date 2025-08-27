'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { LogOut, User as UserIcon, Edit, Save, Award, BrainCircuit, PencilRuler, Calculator, HelpCircle, Trophy, Newspaper } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';
import { getUserProfile, updateUserProfile, UserProfile } from '@/lib/firebase-service';
import { Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

export default function ProfilePage() {
  const { user, isLoading: authLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/login');
    } else if (user) {
      const fetchProfile = async () => {
        const userProfile = await getUserProfile(user.uid);
        setProfile(userProfile);
        setDisplayName(userProfile?.displayName || '');
      };
      fetchProfile();
    }
  }, [user, authLoading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: 'Logged out successfully.' });
      router.push('/');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to log out.' });
    }
  };

  const handleSave = async () => {
    if (!user || !profile) return;
    if (displayName.trim().length < 3) {
      toast({ variant: 'destructive', title: 'Display name must be at least 3 characters.' });
      return;
    }
    await updateUserProfile(user.uid, { displayName });
    setProfile(prev => prev ? { ...prev, displayName } : null);
    setIsEditing(false);
    toast({ title: 'Profile updated!' });
  };
  
  const gameStats = [
    { name: 'Quiz Clash', icon: BrainCircuit, progress: profile?.quizClash },
    { name: 'Word Hunter', icon: PencilRuler, progress: profile?.wordHunter },
    { name: 'Math Rush', icon: Calculator, progress: profile?.mathRush },
    { name: 'Logic Leap', icon: HelpCircle, progress: profile?.logicLeap },
    { name: 'Memory Flip', icon: Trophy, progress: profile?.memoryFlip },
    { name: 'Spot Fake News', icon: Newspaper, progress: profile?.spotFakeNews },
  ]


  if (authLoading || !profile) {
    return (
        <div className="flex justify-center items-center py-8">
            <Loader2 className="h-16 w-16 animate-spin text-primary" />
        </div>
    );
  }

  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-2xl border-primary glow-shadow">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                 <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarFallback className="text-4xl">{profile.displayName?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </div>
            <div className="flex items-center justify-center gap-2">
                {isEditing ? (
                    <Input 
                        value={displayName} 
                        onChange={(e) => setDisplayName(e.target.value)} 
                        className="text-3xl font-bold text-center w-auto"
                    />
                ) : (
                    <CardTitle className="text-3xl">{profile.displayName}</CardTitle>
                )}
                <Button variant="ghost" size="icon" onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
                    {isEditing ? <Save className="h-5 w-5"/> : <Edit className="h-5 w-5"/>}
                </Button>
            </div>
            <CardDescription>{profile.email}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center gap-4 p-4 bg-secondary rounded-lg">
            <Award className="w-8 h-8 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Total Score</p>
              <p className="font-bold text-3xl">{profile.totalScore.toLocaleString()}</p>
            </div>
          </div>
          
          <div className="space-y-4">
             <h3 className="text-xl font-semibold text-center">Game Progress</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {gameStats.map(game => game.progress && (
                   <Card key={game.name} className="bg-background/50">
                        <CardHeader className="flex flex-row items-center justify-between pb-2">
                           <CardTitle className="text-base font-medium flex items-center gap-2">
                            <game.icon className="w-4 h-4 text-primary"/>
                            {game.name}
                           </CardTitle>
                           <p className="text-sm text-muted-foreground">Lvl {game.progress.level}</p>
                        </CardHeader>
                        <CardContent>
                           <div className="text-xs text-muted-foreground text-center mb-1">
                                {game.progress.xp} / {game.progress.xpToNextLevel} XP
                           </div>
                            <Progress value={(game.progress.xp / game.progress.xpToNextLevel) * 100} className="h-2"/>
                            <p className="text-center text-sm mt-2">Score: <span className="font-semibold">{game.progress.score}</span></p>
                        </CardContent>
                   </Card>
                ))}
             </div>
          </div>

        </CardContent>
        <CardFooter>
            <Button variant="destructive" className="w-full" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
