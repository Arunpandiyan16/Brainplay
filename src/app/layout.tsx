import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { CountryProvider } from '@/hooks/use-country';
import { AuthProvider } from '@/hooks/use-auth';
import { Analytics } from "@vercel/analytics/react"
import Footer from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://brainplay-x7d62.web.app'),
  title: 'BrainPlay - Play. Learn. Compete. | Fun Brain Games',
  description: 'A 5-in-1 hub for fun and knowledge games. Challenge yourself with quizzes, word puzzles, math problems, memory games, and more. Play, learn, and compete on the leaderboards!',
  keywords: ['brain games', 'quiz', 'word game', 'math game', 'memory game', 'trivia', 'puzzle games', 'online games', 'educational games'],
  manifest: '/manifest.json',
  openGraph: {
    title: 'BrainPlay - Play. Learn. Compete.',
    description: 'The ultimate hub for fun and knowledge games.',
    url: 'https://brainplay-x7d62.web.app',
    siteName: 'BrainPlay',
    images: [
      {
        url: 'https://brainplay-x7d62.web.app/og-image.png', // It's good practice to have an OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrainPlay - Play. Learn. Compete.',
    description: 'Challenge your mind with fun games on BrainPlay!',
     images: ['https://brainplay-x7d62.web.app/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <CountryProvider>
              <Header />
              <main className="container mx-auto px-4 py-8 flex-grow">
                {children}
              </main>
              <Footer />
              <Toaster />
            </CountryProvider>
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
