import type {Metadata} from 'next';
import { Oxanium, Orbitron } from 'next/font/google'
import './globals.css';


export const metadata: Metadata = {
  title: 'Chrono-Cortex',
  description: 'A sci-fi adventure game of corporate espionage.',
};

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-headline',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${oxanium.variable} ${orbitron.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
