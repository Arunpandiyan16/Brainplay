'use client';

import Link from 'next/link';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Brain className="h-5 w-5 text-primary" />
          <span>© {new Date().getFullYear()} BrainPlay. All Rights Reserved.</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/about" className="hover:text-primary transition-colors">About</Link>
           <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <Link href="/support" className="hover:text-primary transition-colors">Support</Link>
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
