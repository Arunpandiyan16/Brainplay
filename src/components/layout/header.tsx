import { SunMoon } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <SunMoon className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-headline font-bold text-foreground tracking-widest">AETHERIUM</h1>
        </div>
      </div>
    </header>
  );
}
