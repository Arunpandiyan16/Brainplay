'use client';

import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, User as UserIcon } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

export default function ProfilePage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const { toast } = useToast();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login');
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: 'Logged out successfully.' });
      router.push('/');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to log out.' });
    }
  };

  if (isLoading || !user) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex justify-center items-center py-8">
      <Card className="w-full max-w-lg border-primary glow-shadow">
        <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
                 <Avatar className="h-24 w-24 border-4 border-primary">
                    <AvatarFallback className="text-4xl">{user.email?.[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </div>
          <CardTitle className="text-3xl">My Profile</CardTitle>
          <CardDescription>View and manage your account details.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-secondary rounded-lg">
            <UserIcon className="w-6 h-6 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-semibold text-lg">{user.email}</p>
            </div>
          </div>
          <Button variant="destructive" className="w-full" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
