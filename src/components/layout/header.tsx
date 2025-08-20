import { Gamepad2 } from 'lucide-react';
import AvatarCustomization from '@/components/avatar/avatar-customization';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Gamepad2 className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Nayagan's Saga</h1>
        </div>
        <AvatarCustomization />
      </div>
    </header>
  );
}