'use client';

import { useParams } from 'next/navigation';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Gamepad2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex justify-center py-8">
      <Card className="w-full max-w-4xl border-primary/50 glow-shadow">
        <CardHeader>
          <div className="mb-4">
             <Link href="/blog" className="flex items-center text-sm text-primary hover:underline">
               <ArrowLeft className="w-4 h-4 mr-2" />
               Back to Blog
             </Link>
          </div>
          <Badge variant="outline" className="w-fit">{post.category}</Badge>
          <CardTitle className="text-4xl font-bold pt-2">{post.title}</CardTitle>
          <CardDescription className="flex items-center gap-2 pt-2 text-base">
            <Calendar className="w-4 h-4" /> Published on {post.date}
          </CardDescription>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none text-lg space-y-6 p-8">
          {post.content}

          {post.relatedGame && (
             <div className="bg-secondary/50 p-6 rounded-lg text-center mt-12">
                <h3 className="text-2xl font-semibold mb-2">Ready to Play?</h3>
                <p className="text-muted-foreground mb-4">
                    Put what you've learned into practice! Click below to play <span className="font-bold text-primary">{post.relatedGame.name}</span>.
                </p>
                <Button size="lg" asChild>
                    <Link href={post.relatedGame.href}>
                       <Gamepad2 className="mr-2" /> Play {post.relatedGame.name}
                    </Link>
                </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
