export const dynamic = 'force-dynamic';

import nextDynamic from 'next/dynamic';
import AboutHero from '@/components/home/AboutHero';
import StatsStrip from '@/components/home/StatsStrip';
import type { GitHubStats } from '@/types';

const FeaturedProjects = nextDynamic(() => import('@/components/home/FeaturedProjects'), { ssr: true });

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

    const user = await userRes.json();
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
    const totalStars = Array.isArray(repos)
      ? repos.reduce((sum: number, r: { stargazers_count: number }) => sum + (r.stargazers_count || 0), 0)
      : 0;

    return {
      repos: user.public_repos ?? repos.length,
      commits90d: commitsData?.total_count ?? 0,
      stars: totalStars,
      followers: user.followers ?? 0,
    };
  } catch {
    return null;
  }
}

async function fetchChapterlyUsers(): Promise<number | null> {
  try {
    const res = await fetch('https://www.getchapterly.com/api/stats/public', {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.userCount ?? null;
  } catch {
    return null;
  }
}

export default async function HomePage() {
  const [github, chapterlyUsers] = await Promise.all([
    fetchGitHubStats(),
    fetchChapterlyUsers(),
  ]);

  return (
    <>
      <AboutHero />
      <StatsStrip github={github} chapterlyUsers={chapterlyUsers} />
      <FeaturedProjects />
    </>
  );
}