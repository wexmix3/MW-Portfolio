export const dynamic = 'force-dynamic';

import AboutHero from '@/components/home/AboutHero';
import StatsStrip from '@/components/home/StatsStrip';
import ContactForm from '@/components/ui/ContactForm';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';
import type { GitHubStats } from '@/types';

async function fetchGitHubStats(): Promise<GitHubStats | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/wexmix3', {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch('https://api.github.com/users/wexmix3/repos?per_page=100', {
        headers,
        next: { revalidate: 3600 },
      }),
    ]);

    if (!userRes.ok || !reposRes.ok) return null;

    const user  = await userRes.json();
    const repos = await reposRes.json();

    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const since = ninetyDaysAgo.toISOString().split('T')[0];

    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:wexmix3+committer-date:>${since}`,
      {
        headers: { ...headers, Accept: 'application/vnd.github.cloak-preview' },
        next: { revalidate: 3600 },
      }
    );

    const commitsData = commitsRes.ok ? await commitsRes.json() : null;
    const totalStars  = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + (r.stargazers_count || 0), 0)
      : 0;

    return {
      repos:      user.public_repos ?? repos.length,
      commits90d: commitsData?.total_count ?? 0,
      stars:      totalStars,
      followers:  user.followers ?? 0,
    };
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const github = await fetchGitHubStats();

  return (
    <>
      <AboutHero />
      <StatsStrip github={github} />

      {/* Contact */}
      <section className="py-20 border-t border-surface-border">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Contact</p>
          <h2 className="text-3xl font-bold text-void-50 mb-2">Get in touch</h2>
          <p className="text-void-400 text-sm mb-8">{about.availability}</p>
          <ContactForm />
          <div className="flex gap-3 mt-6 pt-6 border-t border-surface-border">
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-border text-void-300 text-sm hover:border-gold/30 transition-colors"
            >
              <GithubIcon style={{ width: '14px', height: '14px' }} /> GitHub
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-border text-void-300 text-sm hover:border-gold/30 transition-colors"
            >
              <LinkedinIcon style={{ width: '14px', height: '14px' }} /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}