import type { Metadata } from 'next';
import { Inter, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Max Wexley — Full-Stack Developer & AI Builder',
    template: '%s | Max Wexley',
  },
  description:
    'University of Michigan developer building AI-powered web apps. Creator of Chapterly, CourtBook NYC, and more. Specializing in Next.js, TypeScript, Supabase, and Anthropic Claude.',
  keywords: ['Max Wexley', 'developer', 'AI', 'Next.js', 'University of Michigan', 'Chapterly', 'portfolio'],
  authors: [{ name: 'Max Wexley' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://maxwexley.com',
    siteName: 'Max Wexley',
    title: 'Max Wexley — Full-Stack Developer & AI Builder',
    description:
      'University of Michigan developer building AI-powered web apps. Creator of Chapterly, CourtBook NYC, and more.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Max Wexley' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Wexley — Full-Stack Developer & AI Builder',
    description: 'University of Michigan developer building AI-powered web apps.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://maxwexley.com'),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="bg-void-950 text-void-50 min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
