import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, ArrowLeft, CheckCircle2, Lightbulb } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { getProjectBySlug, projects } from '@/data/projects';
import TechBadge from '@/components/projects/TechBadge';
import StatusBadge from '@/components/projects/StatusBadge';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const idx   = projects.findIndex(p => p.slug === project.slug);
  const next  = projects[(idx + 1) % projects.length];
  const prev  = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Back */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-void-400 hover:text-void-200 transition-colors mb-10"
        >
          <ArrowLeft size={14} /> All projects
        </Link>

        {/* Hero cover */}
        <div
          className="h-56 sm:h-72 rounded-2xl flex items-center justify-center mb-10 relative overflow-hidden border border-surface-border"
          style={{ background: project.coverColor }}
        >
          <span className="font-display text-8xl sm:text-9xl text-white/10 select-none">
            {project.title[0]}
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold text-void-50 mb-2">{project.title}</h1>
            <p className="text-void-400 text-lg">{project.tagline}</p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <StatusBadge status={project.status} />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gold text-void-950 text-sm font-medium hover:bg-gold-light transition-colors"
              >
                <ExternalLink size={13} /> Live site
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-surface-border text-void-300 text-sm hover:border-gold/30 transition-colors"
              >
                <GithubIcon style={{width:"13px",height:"13px"}} /> Repo
              </a>
            )}
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {project.tech.map(t => <TechBadge key={t} tech={t} />)}
        </div>

        <hr className="border-surface-border mb-10" />

        {/* Description */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-void-50 mb-3">Overview</h2>
          <p className="text-void-300 leading-relaxed">{project.description}</p>
        </section>

        {/* Metrics */}
        {project.metrics && (
          <section className="mb-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="p-4 rounded-xl border border-surface-border bg-surface-card text-center">
                  <div className="text-2xl font-bold text-gold mb-1">{value}</div>
                  <div className="text-xs text-void-400">{key}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Highlights */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-void-50 mb-4">Key Features</h2>
          <ul className="flex flex-col gap-3">
            {project.highlights.map(h => (
              <li key={h} className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-void-300 text-sm leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Lessons */}
        <section className="mb-10">
          <h2 className="text-lg font-semibold text-void-50 mb-4">What I Learned</h2>
          <div className="flex flex-col gap-3">
            {project.lessons.map(l => (
              <div key={l} className="flex items-start gap-3 px-4 py-3 rounded-lg border border-surface-border bg-surface-card">
                <Lightbulb size={15} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-void-300 text-sm leading-relaxed">{l}</span>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* Next / Prev navigation */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href={`/projects/${prev.slug}`}
            className="group flex flex-col p-4 rounded-xl border border-surface-border bg-surface-card card-hover"
          >
            <span className="text-xs text-void-500 mb-1">← Previous</span>
            <span className="text-sm font-medium text-void-200 group-hover:text-gold transition-colors">
              {prev.title}
            </span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col p-4 rounded-xl border border-surface-border bg-surface-card card-hover sm:items-end"
          >
            <span className="text-xs text-void-500 mb-1">Next →</span>
            <span className="text-sm font-medium text-void-200 group-hover:text-gold transition-colors">
              {next.title}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
