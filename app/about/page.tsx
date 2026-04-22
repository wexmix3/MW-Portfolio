import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About',
  description: 'Max Wexley — University of Michigan developer building AI-powered apps.',
};

export default function AboutPage() {
  const liveCount    = projects.filter(p => p.status === 'live').length;
  const projectCount = projects.length;

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden border border-surface-border flex-shrink-0">
            <Image src="/headshot.jpg" alt="Max Wexley" width={80} height={80} className="w-full h-full object-cover object-top" />
          </div>
          <div>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">About</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-void-50 mb-2">
              Max Wexley
              <span className="text-gold">.</span>
            </h1>
            <p className="text-void-400 text-xl">{about.title}</p>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { value: projectCount.toString(), label: 'Projects built' },
            { value: liveCount.toString(), label: 'Live & deployed' },
            { value: '3+', label: 'AI-powered apps' },
          ].map(({ value, label }) => (
            <div key={label} className="p-4 rounded-xl border border-surface-border bg-surface-card text-center">
              <div className="text-3xl font-bold text-gold mb-1">{value}</div>
              <div className="text-xs text-void-400">{label}</div>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-void-50 mb-5">Who I Am</h2>
          <div className="flex flex-col gap-4">
            {about.bio.map((para, i) => (
              <p key={i} className="text-void-300 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-void-50 mb-5">Interests</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {about.interests.map(({ label, icon, note }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-4 rounded-xl border border-surface-border bg-surface-card"
              >
                <span className="text-2xl">{icon}</span>
                <div>
                  <div className="font-medium text-void-50 mb-1">{label}</div>
                  <div className="text-sm text-void-400">{note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-void-50 mb-5">Stack</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                area: 'Frontend',
                items: ['Next.js 14 App Router', 'React', 'TypeScript strict', 'Tailwind CSS', 'Recharts'],
              },
              {
                area: 'Backend',
                items: ['Supabase (Auth + Postgres + RLS)', 'API route handlers', 'Server-side rendering', 'ISR & streaming'],
              },
              {
                area: 'AI / ML',
                items: ['Anthropic Claude (Haiku + Sonnet)', 'Streaming responses', 'Structured JSON extraction', 'Retry + rate limit patterns'],
              },
              {
                area: 'DevOps & Tooling',
                items: ['Vercel', 'GitHub Actions CI', 'Playwright E2E', 'Vitest unit tests', 'Stripe subscriptions'],
              },
            ].map(({ area, items }) => (
              <div key={area}>
                <div className="text-xs text-gold font-medium tracking-widest uppercase mb-3">{area}</div>
                <ul className="flex flex-col gap-1.5">
                  {items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-void-300">
                      <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-void-50 mb-5">Education</h2>
          <div className="flex items-center gap-5 p-5 rounded-xl border border-surface-border bg-surface-card">
            <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0">
              🎓
            </div>
            <div>
              <div className="font-semibold text-void-50">University of Michigan</div>
              <div className="text-sm text-void-400">Ann Arbor, MI</div>
            </div>
          </div>
        </div>

        {/* Availability + contact */}
        <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 mb-10">
          <h2 className="text-lg font-semibold text-void-50 mb-2">Availability</h2>
          <p className="text-void-300 text-sm leading-relaxed mb-5">{about.availability}</p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-void-950 text-sm font-medium hover:bg-gold-light transition-colors"
            >
              <Mail size={14} /> Get in touch
            </a>
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-border text-void-300 text-sm hover:border-gold/30 transition-colors"
            >
              <GithubIcon style={{width:"14px",height:"14px"}} /> GitHub
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-border text-void-300 text-sm hover:border-gold/30 transition-colors"
            >
              <LinkedinIcon style={{width:"14px",height:"14px"}} /> LinkedIn
            </a>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/now"
            className="group inline-flex items-center gap-2 text-sm text-void-400 hover:text-gold transition-colors"
          >
            See what I&apos;m working on right now
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
