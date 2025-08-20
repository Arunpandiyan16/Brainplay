'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

type GameCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
};

export default function GameCard({ title, description, icon, href, color }: GameCardProps) {
  return (
    <Card className="group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className={`p-2 rounded-lg bg-secondary ${color}`}>
            {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
        <Button variant="outline" size="sm" className="mt-4 w-full group-hover:bg-primary group-hover:text-primary-foreground" asChild>
          <Link href={href}>
            Play Game <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
