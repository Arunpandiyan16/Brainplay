import type {Metadata} from 'next';
import { Cinzel, Cormorant_Garamond } from 'next/font/google'
import './globals.css';


export const metadata: Metadata = {
  title: 'Aetherium: The Last Signal',
  description: 'A mystical journey to restore a forgotten world.',
};

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '600', '700']
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${cormorant.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
