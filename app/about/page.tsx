import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';
import ContactForm from '@/components/ui/ContactForm';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'About',
  description: 'Max Wexley — Finance analyst at BBVA and self-taught builder. Finance by day, building by nature.',
};

export default function AboutPage() {
  const liveCount = projects.filter(p => p.status === 'live').length;

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
            </h1>
            <p className="text-void-400 text-xl">{about.title}</p>
          </div>
        </div>

        {/* Quick stats row */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { value: liveCount.toString(), label: 'Shipped & live' },
            { value: '2+', label: 'In the pipeline' },
            { value: '3', label: 'Years building' },
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

        {/* Embrace Mental Health Foundation */}
        <div className="mb-14">
          <h2 className="text-xl font-semibold text-void-50 mb-5">Cause</h2>

          {/* Header card */}
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 mb-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Heart size={18} className="text-emerald-400" />
                </div>
                <div>
                  <div className="font-semibold text-void-50">Embrace Mental Health Foundation</div>
                  <div className="text-xs text-emerald-400 font-medium mt-0.5">Co-Founder</div>
                </div>
              </div>
              <a
                href="https://www.embracementalhealthfoundation.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-void-400 hover:text-emerald-400 transition-colors flex-shrink-0 mt-1"
              >
                Visit site <ExternalLink size={11} />
              </a>
            </div>
            <p className="text-sm text-void-300 leading-relaxed mb-4">
              We fund clinics that provide pro bono mental health counseling to those who can&apos;t afford it —
              channeling endurance racing into real psychiatric access. Roughly 67% of young adults with anxiety
              or depression never receive treatment. We&apos;re working to close that gap.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit">
              <span className="text-lg font-bold text-emerald-400">$13,555</span>
              <span className="text-xs text-void-400">raised across 3 campaigns</span>
            </div>
          </div>

          {/* Campaign cards */}
          <div className="flex flex-col gap-3">
            {[
              {
                event: '2024 AACR Philadelphia Marathon',
                raised: '$1,800',
                impact: '10 psychiatric visits at the Josselyn Center + 24 hours of behavioral programming at CHOP\'s Department of Psychiatry and Behavioral Sciences',
              },
              {
                event: '2025 Christie Clinic Illinois Marathon',
                raised: '$1,555',
                impact: '15 psychiatric visits at the Josselyn Center',
              },
              {
                event: 'Phi Gamma Nu Beta Pi — Compete for a Cause',
                raised: '$10,200',
                impact: '115 mental health screenings at the Rosecrance Center, Champaign, IL',
              },
            ].map(({ event, raised, impact }) => (
              <div key={event} className="flex gap-4 p-4 rounded-xl border border-surface-border bg-surface-card">
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5 mb-1">
                    <span className="text-sm font-semibold text-void-50">{event}</span>
                    <span className="text-sm font-bold text-emerald-400">{raised}</span>
                  </div>
                  <p className="text-xs text-void-400 leading-relaxed">{impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="rounded-xl border border-gold/20 bg-gold/5 p-6 mb-10">
          <h2 className="text-lg font-semibold text-void-50 mb-2">Get in touch</h2>
          <p className="text-void-300 text-sm leading-relaxed mb-6">{about.availability}</p>
          <ContactForm />
          <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gold/10">
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
