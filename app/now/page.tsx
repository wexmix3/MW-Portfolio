import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Max Wexley is working on, reading, training, and learning right now.',
};

const LAST_UPDATED = 'April 2026';

type Section = {
  eyebrow: string;
  title: string;
  items: { label: string; sub?: string }[];
};

const sections: Section[] = [
  {
    eyebrow: 'Building',
    title: 'What I\'m working on',
    items: [
      {
        label: 'Chapterly',
        sub: 'A full-stack reading tracker with AI-powered insights, gamification, and social features. Live at getchapterly.com — and the app I use most.',
      },
      {
        label: 'Finance Dashboard',
        sub: 'A personal finance tool covering portfolio tracking, budgets, and net worth trends. Seven phases done, two to go.',
      },
      {
        label: 'More to come',
        sub: 'A few other ideas in early motion. Not ready to name them yet — but they\'re happening.',
      },
    ],
  },
  {
    eyebrow: 'Training',
    title: 'What I\'m doing outside of work',
    items: [
      {
        label: 'Boxing',
        sub: 'Training consistently with the goal of sparring one day. Less about fighting, more about discipline, focus, and having something physical to show up for.',
      },
    ],
  },
  {
    eyebrow: 'Reading',
    title: 'What\'s on my nightstand',
    items: [
      {
        label: 'The Big Deal',
        sub: 'Inside the world of major M&A transactions. Relevant to the finance side of my life.',
      },
      {
        label: 'The Gates of Europe',
        sub: 'A history of Ukraine — dense, good, and a reminder that geography shapes everything.',
      },
      {
        label: 'Red Rising (Second Trilogy)',
        sub: 'Iron Gold, Dark Age, and Light Bringer. The kind of series where you read 100 pages before realizing it\'s midnight.',
      },
    ],
  },
  {
    eyebrow: 'Learning',
    title: 'What I\'m studying',
    items: [
      {
        label: 'Banking products',
        sub: 'Term loans, letters of credit, revolving credit facilities, and tax credit transfers — the plumbing of commercial finance. Relevant to my day job at BBVA and how I think about building fintech.',
      },
      {
        label: 'AI-native development',
        sub: 'Claude Code, VS Code, Supabase, Vercel, and APIs. Less "learning to code," more learning to build quickly and ship things that work.',
      },
    ],
  },
];

export default function NowPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Now</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-void-50 mb-4">
            What I&apos;m doing<span className="text-gold">.</span>
          </h1>
          <p className="text-void-400 leading-relaxed max-w-lg">
            A snapshot of where my attention is right now — work, training, reading, and what I&apos;m actively trying to get better at.
          </p>
          <p className="text-void-500 text-xs mt-4">Last updated: {LAST_UPDATED}</p>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-14">
          {sections.map(({ eyebrow, title, items }) => (
            <section key={eyebrow}>
              <p className="text-gold text-xs font-medium tracking-widest uppercase mb-1">{eyebrow}</p>
              <h2 className="text-lg font-semibold text-void-50 mb-5">{title}</h2>
              <div className="flex flex-col gap-3">
                {items.map(({ label, sub }) => (
                  <div
                    key={label}
                    className="p-5 rounded-xl border border-surface-border bg-surface-card"
                  >
                    <div className="font-medium text-void-50 mb-1">{label}</div>
                    {sub && <p className="text-sm text-void-400 leading-relaxed">{sub}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 pt-8 border-t border-surface-border">
          <p className="text-void-500 text-sm leading-relaxed">
            Inspired by{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-void-400 hover:text-gold transition-colors underline underline-offset-2"
            >
              Derek Sivers&apos; /now page movement
            </a>
            . The idea: a single page that answers &ldquo;what are you up to these days?&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}