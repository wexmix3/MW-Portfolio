import Image from 'next/image';
import Link from 'next/link';
import { Mail, ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';

const financeSkills = ['Project Finance', 'Structured Credit', 'Tax Equity', 'LNG / Renewables', 'Bloomberg', 'Capital IQ'];
const buildingSkills = ['Next.js', 'TypeScript', 'Supabase', 'Claude AI', 'Stripe', 'Vercel'];

export default function AboutHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-grid-pattern bg-grid">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-center">

          {/* ── Left column ── */}
          <div className="animate-fade-up">
            {/* Role badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
              Analyst at BBVA · Energy &amp; Infrastructure
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-void-50 leading-tight mb-3">
              Max Wexley<span className="text-gold">.</span>
            </h1>

            {/* Title + location */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
              <p className="text-lg sm:text-xl text-void-300 font-medium">
                Finance by day. Builder by nature.
              </p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-void-600" />
              <span className="flex items-center gap-1 text-sm text-void-500">
                <MapPin size={13} />
                New York City, NY
              </span>
            </div>

            {/* Bio */}
            <div className="space-y-4 mb-8 max-w-xl">
              {about.bio.map((para, i) => (
                <p key={i} className="text-void-400 leading-relaxed text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-void-950 font-semibold text-sm hover:bg-gold-light transition-colors"
              >
                <LinkedinIcon width={16} height={16} />
                LinkedIn
              </a>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                <FileText size={15} />
                Resume
              </Link>
              <a
                href={about.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                <GithubIcon width={15} height={15} />
                GitHub
              </a>
              <a
                href={`mailto:${about.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all"
              >
                <Mail size={15} />
                Email
              </a>
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4 animate-fade-up delay-200">

            {/* Identity card */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-5 flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-gold/20 flex-shrink-0">
                <Image src="/headshot.jpg" alt="Max Wexley" width={56} height={56} className="w-full h-full object-cover object-top" />
              </div>
              <div>
                <p className="font-semibold text-void-50 text-sm">Max Wexley</p>
                <p className="text-xs text-void-400 mt-0.5">BBVA · Energy Client Coverage</p>
                <p className="text-xs text-void-500 mt-0.5">Michigan &apos;24 · SIE · Series 7 · Series 63</p>
              </div>
            </div>

            {/* Currently building */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-5">
              <p className="text-xs font-medium text-void-500 uppercase tracking-widest mb-3">
                Currently building
              </p>
              <a
                href="https://www.getchapterly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 rounded-lg border border-surface-border hover:border-gold/30 hover:bg-gold/5 transition-all"
              >
                <div>
                  <p className="text-sm font-semibold text-void-50 group-hover:text-gold transition-colors">
                    Chapterly
                  </p>
                  <p className="text-xs text-void-500 mt-0.5">AI reading tracker · Live users</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
                  <ArrowRight size={14} className="text-void-500 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                </div>
              </a>
            </div>

            {/* Dual skill panels */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-5 space-y-4">
              <div>
                <p className="text-xs font-medium text-void-500 uppercase tracking-widest mb-2">Finance</p>
                <div className="flex flex-wrap gap-1.5">
                  {financeSkills.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md border border-surface-border bg-void-950 text-void-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-surface-border pt-4">
                <p className="text-xs font-medium text-void-500 uppercase tracking-widest mb-2">Building</p>
                <div className="flex flex-wrap gap-1.5">
                  {buildingSkills.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md border border-gold/20 bg-gold/5 text-gold">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-void-600 text-xs">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-void-600 to-transparent" />
      </div>
    </section>
  );
}