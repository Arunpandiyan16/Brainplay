
'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, BookOpen, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPage() {
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter">
          The Brainvia Blog
        </h1>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
          Insights, tips, and stories about cognitive skills, learning, and the power of games.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.slug} className="group hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
            <CardHeader>
              <Badge variant="outline" className="w-fit mb-2">{post.category}</Badge>
              <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </CardTitle>
              <CardDescription className="flex items-center gap-2 pt-2">
                 <Calendar className="w-4 h-4"/> {post.date}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground flex-grow">{post.description}</p>
              <Button variant="outline" className="mt-6 w-full" asChild>
                <Link href={`/blog/${post.slug}`}>
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
