import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/data/projects';
import TechBadge from '@/components/projects/TechBadge';
import StatusBadge from '@/components/projects/StatusBadge';

export default function FeaturedProjects() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Work</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-void-50">Featured Projects</h2>
        </div>
        <Link
          href="/projects"
          className="hidden sm:flex items-center gap-1.5 text-sm text-void-400 hover:text-gold transition-colors"
        >
          View all <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group flex flex-col rounded-xl border border-surface-border bg-surface-card overflow-hidden card-hover"
          >
            {/* Cover */}
            <div
              className="h-44 flex items-center justify-center relative overflow-hidden"
              style={{ background: project.coverColor }}
            >
              <span className="font-display text-4xl text-white/20 group-hover:text-white/30 transition-colors select-none">
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
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-void-50 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
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
        ))}
      </div>

      <div className="mt-8 sm:hidden text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm text-void-400 hover:text-gold transition-colors"
        >
          View all projects <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  );
}
