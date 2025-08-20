import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Video } from 'lucide-react';

const videos = [
    {
      title: 'Anirudh Live Concert in Metaverse',
      thumbnail: 'https://placehold.co/600x400',
      hint: 'music concert stage',
      views: '1.2M',
      dj: 'DJ Zen',
    },
    {
      title: 'Exclusive Movie Trailer Premiere',
      thumbnail: 'https://placehold.co/600x400',
      hint: 'movie premiere cinema',
      views: '800K',
      dj: 'CinemaScope',
    },
     {
      title: 'Pro Kabaddi League Finals',
      thumbnail: 'https://placehold.co/600x400',
      hint: 'kabaddi sport stadium',
      views: '2.5M',
      dj: 'SportsZone',
    },
    {
      title: 'Stand-up Comedy by Local Star',
      thumbnail: 'https://placehold.co/600x400',
      hint: 'comedy club stage',
      views: '500K',
      dj: 'Comedy Central',
    }
];

export default function EntertainmentHub() {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <Video className="h-6 w-6" />
                Entertainment Hub
                </CardTitle>
                <CardDescription>
                    Catch live events, concerts, and more.
                </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {videos.map((video) => (
                <div key={video.title} className="flex flex-col gap-2 group">
                    <Image
                        src={video.thumbnail}
                        alt={video.title}
                        width={400}
                        height={225}
                        className="rounded-md object-cover w-full h-auto aspect-video transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={video.hint}
                    />
                    <div className="flex-1">
                        <h3 className="text-md font-bold leading-tight">{video.title}</h3>
                        <p className="text-sm text-muted-foreground">{video.dj}</p>
                        <p className="text-xs text-muted-foreground">{video.views} watching</p>
                    </div>
                </div>
                ))}
            </CardContent>
        </Card>
    );
}
