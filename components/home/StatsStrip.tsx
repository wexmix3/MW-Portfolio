import { GitBranch, Star, FolderGit2, Package } from 'lucide-react';
import type { GitHubStats } from '@/types';
import { projects } from '@/data/projects';

interface Props {
  github: GitHubStats | null;
  chapterlyUsers: number | null;
}

export default function StatsStrip({ github, chapterlyUsers }: Props) {
  const stats = [
    {
      icon: <Package size={18} className="text-gold" />,
      value: `${projects.filter(p => p.status === 'live').length}`,
      label: 'Apps live',
      live: false,
    },
    {
      icon: <GitBranch size={18} className="text-gold" />,
      value: github ? `${github.commits90d}+` : '—',
      label: 'Commits (90 days)',
      live: !!github,
    },
    {
      icon: <FolderGit2 size={18} className="text-gold" />,
      value: github ? `${github.repos}` : '—',
      label: 'Public repos',
      live: !!github,
    },
    {
      icon: <Star size={18} className="text-gold" />,
      value: chapterlyUsers ? `${chapterlyUsers.toLocaleString()}+` : '—',
      label: 'Chapterly users',
      live: !!chapterlyUsers,
    },
  ];

  return (
    <section className="border-y border-surface-border bg-surface py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(({ icon, value, label, live }) => (
            <div key={label} className="flex flex-col items-center sm:items-start gap-2">
              <div className="flex items-center gap-2">
                {icon}
                {live && (
                  <span className="flex items-center gap-1 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    live
                  </span>
                )}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-void-50 tabular-nums">
                {value}
              </span>
              <span className="text-xs text-void-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
