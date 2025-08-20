
import Image from 'next/image';
import { Card } from '@/components/ui/card';

export default function Minimap() {
  return (
    <Card className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 bg-black/50 backdrop-blur-sm p-2">
        <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
                src="https://placehold.co/400x400"
                alt="Minimap"
                layout="fill"
                objectFit="cover"
                className="opacity-70 animate-pulse-slow"
                data-ai-hint="city map satellite"
            />
            {/* Player Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-3 h-3 bg-cyan-400 rounded-full border-2 border-white shadow-lg" />
            </div>
             {/* North Indicator */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-sm">N</div>
        </div>
    </Card>
  );
}

// Add animation to tailwind config if not present
// in tailwind.config.ts -> theme.extend.animation
// 'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
