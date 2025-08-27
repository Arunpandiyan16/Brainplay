
'use client';

import Link from 'next/link';
import { Brain, User, Sun, Moon, Globe, LogOut, ChevronDown, Gamepad2, Menu, HelpCircle, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { useCountry } from '@/hooks/use-country';
import { useAuth } from '@/hooks/use-auth';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';


const games = [
  { href: '/quiz-clash', label: 'Quiz Clash' },
  { href: '/word-hunter', label: 'Word Hunter' },
  { href: '/math-rush', label: 'Math Rush' },
  { href: '/logic-leap', label: 'Logic Leap' },
  { href: '/memory-flip', label: 'Memory Flip' },
  { href: '/spot-fake-news', label: 'Spot the Fake News' },
  { href: '/daily-challenge', label: 'Daily Challenge' },
]

export default function Header() {
  const { setTheme } = useTheme();
  const { country, setCountry } = useCountry();
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast({ title: 'Logged out successfully.' });
      router.push('/');
    } catch (error) {
      toast({ variant: 'destructive', title: 'Failed to log out.' });
    }
  };

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
       <SheetContent side="left" className="pr-0">
          <SheetHeader className="p-4 text-left">
             <SheetTitle className="text-2xl">
                <SheetClose asChild>
                    <Link href="/" className="flex items-center gap-2">
                      <Brain className="h-6 w-6 text-primary" />
                      <span className="font-bold">Brainvia</span>
                    </Link>
                </SheetClose>
             </SheetTitle>
            <SheetDescription className="sr-only">
              Navigate between the different games and pages.
            </SheetDescription>
          </SheetHeader>
        <div className="flex flex-col space-y-3 pt-6 px-4">
            {games.map((game) => (
                <SheetClose asChild key={game.href}>
                    <Link href={game.href} className="text-lg">
                        {game.label}
                    </Link>
                </SheetClose>
            ))}
             <SheetClose asChild>
                <Link href="/blog" className="text-lg">
                  Blog
                </Link>
              </SheetClose>
            <SheetClose asChild>
                <Link
                    href="/leaderboard"
                    className="text-lg"
                >
                    Leaderboard
                </Link>
            </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex items-center gap-2">
           <MobileNav />
            <Link href="/" className="hidden md:flex items-center space-x-2">
                <Brain className="h-6 w-6 text-primary" />
                <span className="font-bold">Brainvia</span>
            </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6 text-sm ml-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="text-muted-foreground transition-colors hover:text-foreground p-0">
                Games <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {games.map(game => (
                <DropdownMenuItem key={game.href} asChild>
                  <Link href={game.href}>{game.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

           <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1"
          >
            <BookOpen className="w-4 h-4" /> Blog
          </Link>

          <Link
            href="/leaderboard"
            className="text-muted-foreground transition-colors hover:text-foreground flex items-center gap-1"
          >
            <Award className="w-4 h-4" /> Leaderboard
          </Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Select Country</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Select Region</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={country} onValueChange={setCountry}>
                  <DropdownMenuRadioItem value="India">India</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Global">Global</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                     <AvatarFallback>{user.email?.[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                 <DropdownMenuLabel>My Account</DropdownMenuLabel>
                 <DropdownMenuSeparator />
                 <DropdownMenuItem asChild>
                   <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                   </Link>
                 </DropdownMenuItem>
                 <DropdownMenuSeparator />
                 <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                 </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
