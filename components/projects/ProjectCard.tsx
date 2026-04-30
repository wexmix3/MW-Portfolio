'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types';
import TechBadge from './TechBadge';
import StatusBadge from './StatusBadge';

export default function ProjectCard({ project }: { project: Project }) {
  const hasScreenshot = project.coverImage?.startsWith('/projects/');

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-xl border border-surface-border bg-surface-card overflow-hidden card-hover"
    >
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{ background: project.coverColor }}
      >
        {hasScreenshot ? (
          <Image
            src={project.coverImage}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <span className="font-display text-5xl text-white/15 group-hover:text-white/25 transition-colors select-none">
            {project.title[0]}
          </span>
        )}
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
        <div className="absolute bottom-3 left-3 flex gap-1">
          {project.category.map(c => (
            <span key={c} className="text-[10px] px-2 py-0.5 rounded-full bg-black/50 text-white/70 capitalize">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-void-50 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>
        <p className="text-sm text-void-400 leading-relaxed line-clamp-2">{project.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {project.tech.slice(0, 4).map(t => <TechBadge key={t} tech={t} />)}
          {project.tech.length > 4 && (
            <span className="text-xs text-void-500">+{project.tech.length - 4}</span>
          )}
        </div>
      </div>
    </Link>
  );
}