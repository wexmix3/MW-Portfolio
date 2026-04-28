export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Image from 'next/image';
import { Heart, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Technology, philanthropy, and athletics — what Max Wexley builds and pursues.',
};

const IN_PROGRESS_SHOWN = ['finance-dashboard', 'hoopers-hub'];

const campaigns = [
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
];

function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <p className="text-gold text-xs font-medium tracking-widest uppercase">{label}</p>
        <div className="flex-1 h-px bg-surface-border" />
      </div>
      <h2 className="text-2xl font-bold text-void-50 mb-2">{title}</h2>
      {description && <p className="text-void-400 text-sm max-w-xl">{description}</p>}
    </div>
  );
}

export default function ProjectsPage() {
  const liveProjects     = projects.filter(p => p.status === 'live').sort((a, b) => a.order - b.order);
  const progressProjects = projects.filter(p => IN_PROGRESS_SHOWN.includes(p.slug)).sort((a, b) => a.order - b.order);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Page header */}
        <div className="mb-16">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-void-50 mb-4">Projects</h1>
          <p className="text-void-400 max-w-xl">
            What I build, what I fund, and what I train for.
          </p>
        </div>

        {/* ── TECHNOLOGY ── */}
        <section className="mb-20">
          <SectionHeader
            label="Technology"
            title="Software"
            description="Apps I've built and shipped — from AI-powered tools to personal finance."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {liveProjects.map(p => <ProjectCard key={p.slug} project={p} />)}
          </div>

          {progressProjects.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-5">
                <p className="text-void-500 text-xs font-medium tracking-widest uppercase">In Progress</p>
                <div className="flex-1 h-px bg-surface-border" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {progressProjects.map(p => <ProjectCard key={p.slug} project={p} />)}
              </div>
            </>
          )}
        </section>

        {/* ── PHILANTHROPY ── */}
        <section className="mb-20">
          <SectionHeader
            label="Philanthropy"
            title="Embrace Mental Health Foundation"
            description="Co-founded to fund pro bono psychiatric care through endurance racing."
          />

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

          <div className="flex flex-col gap-3">
            {campaigns.map(({ event, raised, impact }) => (
              <div key={event} className="flex gap-4 p-4 rounded-xl border border-surface-border bg-surface-card">
                <div className="flex-shrink-0 mt-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
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
        </section>

        {/* ── ATHLETICS ── */}
        <section>
          <SectionHeader
            label="Athletics"
            title="Racing & Training"
            description="Endurance sports have been the backbone of the foundation work — and a discipline I pursue on their own terms."
          />

          <div className="flex flex-col gap-4">
            {/* Ironman */}
            <div className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
              <div className="relative h-64 bg-void-900">
                <Image
                  src="/halfironman.jpg"
                  alt="Ironman 70.3 Jones Beach finish line"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 42%' }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-void-50">Ironman 70.3 — Jones Beach, NY</div>
                  <span className="text-sm font-bold text-gold">5:45</span>
                </div>
                <p className="text-sm text-void-400 leading-relaxed">
                  1.2 mile swim, 56 mile bike, 13.1 mile run. Months of early mornings to get there. Worth it.
                </p>
              </div>
            </div>

            {/* Marathon */}
            <div className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
              <div className="relative h-64 bg-void-900">
                <Image
                  src="/marathon.jpg"
                  alt="Philadelphia Marathon"
                  fill
                  className="object-cover"
                  style={{ objectPosition: '62% 15%' }}
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-semibold text-void-50">Philadelphia Marathon</div>
                  <span className="text-sm font-bold text-gold">3:13</span>
                </div>
                <p className="text-sm text-void-400 leading-relaxed">
                  26.2 miles through Philly. The last six were rough. 3:13. Proud of that one.
                </p>
              </div>
            </div>

            {/* Boxing */}
            <div className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
              <div className="relative h-64 bg-void-900">
                <Image
                  src="/boxing.jpg"
                  alt="Boxing training"
                  fill
                  className="object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              <div className="p-5">
                <div className="font-semibold text-void-50 mb-1">Boxing</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  Training consistently. Goal is to spar. I like having something physical that demands real focus.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

