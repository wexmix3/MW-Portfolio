import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';

const financeSkills = ['Project Finance', 'Structured Credit', 'Tax Equity', 'LNG / Renewables', 'Bloomberg', 'Capital IQ'];
const buildingSkills = ['Next.js', 'TypeScript', 'Supabase', 'Claude AI', 'Stripe', 'Vercel'];

export default function AboutHero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden bg-grid-pattern bg-grid">
      {/* NYC skyline banner */}
      <div className="relative w-full h-52 sm:h-64 flex-shrink-0 overflow-hidden mt-14">
        <Image
          src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1920&q=80"
          alt="New York City skyline"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/30 via-void-950/20 to-void-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-void-950/60 via-transparent to-void-950/60" />
      </div>

      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 lg:py-16 flex-1">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-start">

          {/* ── Left column ── */}
          <div className="animate-fade-up">
            {/* Role badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
              Analyst at BBVA · Energy &amp; Infrastructure
            </div>

            {/* Name */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-void-50 leading-tight mb-3">
              Max Wexley
            </h1>

            {/* Title + location */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-6">
              <p className="text-lg sm:text-xl text-void-300 font-medium">
                Finance professional during the day, but a builder by nature.
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
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-void-950 font-semibold text-sm hover:bg-gold-light transition-colors"
              >
                See my work
                <ArrowRight size={15} />
              </Link>
              <a
                href={about.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all"
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
            </div>
          </div>

          {/* ── Right column ── */}
          <div className="flex flex-col gap-4 animate-fade-up delay-200">

            {/* Large headshot card */}
            <div className="rounded-2xl border border-surface-border bg-surface-card overflow-hidden">
              <div className="relative h-72 w-full">
                <Image
                  src="/headshot.jpg"
                  alt="Max Wexley"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  sizes="420px"
                />
              </div>
              <div className="p-4 border-t border-surface-border flex items-center gap-3">
                <div>
                  <p className="font-semibold text-void-50 text-sm">Max Wexley</p>
                  <p className="text-xs text-void-400 mt-0.5">BBVA · Energy Client Coverage</p>
                  <p className="text-xs text-void-500 mt-0.5">Michigan &apos;24 · SIE · Series 7 · Series 63</p>
                </div>
              </div>
            </div>

            {/* Currently building */}
            <div className="rounded-2xl border border-surface-border bg-surface-card p-5">
              <p className="text-xs font-medium text-void-500 uppercase tracking-widest mb-3">
                Currently building
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Chapterly', sub: 'AI reading tracker · Live', href: 'https://www.getchapterly.com', live: true },
                  { name: 'Personal Finance Tracker', sub: 'Portfolio & budget dashboard · Live', href: 'https://finance-dashboard-max.vercel.app', live: true },
                  { name: 'LinkedIn CRM', sub: 'Networking relationship manager · Live', href: 'https://networking-crm-eta.vercel.app', live: true },
                  { name: 'Competitor Analysis Tool', sub: 'AI-powered competitive intelligence', href: null, live: false },
                ].map(({ name, sub, href, live }) =>
                  href ? (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 rounded-lg border border-surface-border hover:border-gold/30 hover:bg-gold/5 transition-all"
                    >
                      <div>
                        <p className="text-sm font-semibold text-void-50 group-hover:text-gold transition-colors">{name}</p>
                        <p className="text-xs text-void-500 mt-0.5">{sub}</p>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />}
                        <ArrowRight size={14} className="text-void-500 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </a>
                  ) : (
                    <div
                      key={name}
                      className="flex items-center justify-between p-3 rounded-lg border border-surface-border"
                    >
                      <div>
                        <p className="text-sm font-semibold text-void-50">{name}</p>
                        <p className="text-xs text-void-500 mt-0.5">{sub}</p>
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-void-700 text-void-500">
                        local
                      </span>
                    </div>
                  )
                )}
              </div>
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
