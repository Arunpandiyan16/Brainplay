'use client';

import { useState, useEffect } from 'react';
import { Sun, Cloud, CloudRain, Wind } from 'lucide-react';

export type WeatherType = 'sunny' | 'cloudy' | 'rainy' | 'windy';

const weatherOptions: WeatherType[] = ['sunny', 'cloudy', 'rainy', 'windy'];

const weatherIcons: Record<WeatherType, React.ReactNode> = {
  sunny: <Sun className="h-5 w-5 text-yellow-400" />,
  cloudy: <Cloud className="h-5 w-5 text-slate-400" />,
  rainy: <CloudRain className="h-5 w-5 text-blue-400" />,
  windy: <Wind className="h-5 w-5 text-green-400" />,
};

const weatherOverlays: Record<WeatherType, string> = {
    sunny: '',
    cloudy: 'bg-black/10',
    rainy: 'bg-blue-900/20 backdrop-blur-sm',
    windy: ''
}

export default function Weather() {
  const [currentWeather, setCurrentWeather] = useState<WeatherType>('sunny');

  useEffect(() => {
    const weatherInterval = setInterval(() => {
      const nextWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
      setCurrentWeather(nextWeather);
    }, 30000); // Change weather every 30 seconds

    return () => clearInterval(weatherInterval);
  }, []);

  return (
    <>
        <div className={`absolute inset-0 z-10 pointer-events-none transition-all duration-1000 ${weatherOverlays[currentWeather]}`}>
            {currentWeather === 'rainy' && (
                <div className="absolute inset-0 h-full w-full bg-[url('https://placehold.co/10x10/ffffff/ffffff.png?text=_')] bg-repeat animate-rain" />
            )}
        </div>
        <div className="fixed bottom-16 right-4 z-50">
            <div className="flex items-center gap-2 rounded-full bg-card/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm border">
                {weatherIcons[currentWeather]}
                <span className="capitalize">{currentWeather}</span>
            </div>
        </div>
    </>
  );
}
