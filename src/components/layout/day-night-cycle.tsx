'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Sunrise, Sunset } from 'lucide-react';
import { getTimeOfDay } from '@/lib/time';

type TimeOfDay = 'day' | 'night' | 'sunrise' | 'sunset';

const icons: Record<TimeOfDay, React.ReactNode> = {
  sunrise: <Sunrise className="h-5 w-5 text-yellow-400" />,
  day: <Sun className="h-5 w-5 text-yellow-300" />,
  sunset: <Sunset className="h-5 w-5 text-orange-400" />,
  night: <Moon className="h-5 w-5 text-slate-400" />,
};

const timeOfDayClasses: Record<TimeOfDay, string> = {
    sunrise: 'light',
    day: 'light',
    sunset: 'dark', // Sunset often has darker skies
    night: 'dark',
};

export default function DayNightCycle() {
  const [timeOfDay, setTimeOfDay] = useState<TimeOfDay>('day');
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateCycle = () => {
      const now = new Date();
      const currentTOD = getTimeOfDay(now);
      const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      setTimeOfDay(currentTOD);
      setTimeString(currentTime);

      const theme = timeOfDayClasses[currentTOD];
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };

    updateCycle(); 
    const intervalId = setInterval(updateCycle, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm border">
        {icons[timeOfDay]}
        <span>{timeString}</span>
      </div>
    </div>
  );
}
