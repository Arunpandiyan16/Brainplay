import Link from 'next/link';
import { Brain, User, Languages, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary" />
          <span className="font-bold">BrainPlay</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
            <Link href="/leaderboard" className="text-muted-foreground transition-colors hover:text-foreground">Leaderboard</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <Button variant="ghost" size="icon">
                <Languages className="h-5 w-5" />
                <span className="sr-only">Switch Language</span>
            </Button>
             <Button variant="ghost" size="icon">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
            </Button>
            <Button variant="outline" size="sm" asChild>
                <Link href="/login">
                    <User className="mr-2 h-4 w-4"/>
                    Login
                </Link>
            </Button>
        </div>
      </div>
    </header>
  );
}
