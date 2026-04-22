'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import TechBadge from '@/components/projects/TechBadge';
import StatusBadge from '@/components/projects/StatusBadge';
import type { Project } from '@/types';

type Category = 'all' | 'web' | 'mobile' | 'ai' | 'data';

const filters: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile', value: 'mobile' },
  { label: 'AI', value: 'ai' },
  { label: 'Data', value: 'data' },
];

const IN_PROGRESS_SHOWN = ['finance-dashboard', 'hoopers-hub'];

export default function ProjectsPage() {
  const [active, setActive] = useState<Category>('all');

  const liveProjects = projects.filter(p => p.status === 'live');
  const inProgressProjects = projects.filter(p => IN_PROGRESS_SHOWN.includes(p.slug));

  const filteredLive = active === 'all'
    ? liveProjects
    : liveProjects.filter(p => p.category.includes(active));

  const sortedLive = [...filteredLive].sort((a, b) => a.order - b.order);
  const sortedInProgress = [...inProgressProjects].sort((a, b) => a.order - b.order);

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Portfolio</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-void-50 mb-4">Projects</h1>
          <p className="text-void-400 max-w-xl">
            Live projects are fully deployed and built around a real problem. In-progress ones are on the way.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`px-4 py-1.5 rounded-full text-sm border transition-all ${
                active === value
                  ? 'bg-gold text-void-950 border-gold font-medium'
                  : 'border-surface-border text-void-400 hover:border-gold/30 hover:text-void-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Live grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {sortedLive.map(project => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* In Progress section */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <p className="text-void-400 text-xs font-medium tracking-widest uppercase">In Progress</p>
            <div className="flex-1 h-px bg-surface-border" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sortedInProgress.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-surface-border bg-surface-card overflow-hidden card-hover"
    >
      {/* Cover */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.coverColor }}
      >
        <span className="font-display text-5xl text-white/15 group-hover:text-white/25 transition-colors select-none">
          {project.title[0]}
        </span>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={e => e.stopPropagation()}
            className="absolute top-3 right-3 p-1.5 rounded-md bg-black/40 text-white/60 hover:text-white transition-colors"
          >
            <ExternalLink size={13} />
          </a>
        )}
        {/* Category pills */}
        <div className="absolute bottom-3 left-3 flex gap-1">
          {project.category.map(c => (
            <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 text-white/70 capitalize">
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h2 className="font-semibold text-void-50 group-hover:text-gold transition-colors">
            {project.title}
          </h2>
          <StatusBadge status={project.status} />
        </div>

        <p className="text-sm text-void-400 leading-relaxed line-clamp-2">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.slice(0, 4).map(t => (
            <TechBadge key={t} tech={t} />
          ))}
          {project.tech.length > 4 && (
            <span className="text-xs text-void-500">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
