export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const token = process.env.GITHUB_TOKEN;
    const headers: Record<string, string> = token
      ? { Authorization: `Bearer ${token}` }
      : {};

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/wexmix3', { headers }),
      fetch('https://api.github.com/users/wexmix3/repos?per_page=100', { headers }),
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json({ error: 'GitHub API error' }, { status: 502 });
    }

    const user  = await userRes.json();
    const repos = await reposRes.json();

    const ninetyDaysAgo = new Date();
    ninetyDaysAgo.setDate(ninetyDaysAgo.getDate() - 90);
    const since = ninetyDaysAgo.toISOString().split('T')[0];

    const commitsRes = await fetch(
      `https://api.github.com/search/commits?q=author:wexmix3+committer-date:>${since}`,
      { headers: { ...headers, Accept: 'application/vnd.github.cloak-preview' } }
    );

    const commitsData  = commitsRes.ok ? await commitsRes.json() : null;
    const totalStars   = Array.isArray(repos)
      ? repos.reduce((s: number, r: { stargazers_count: number }) => s + (r.stargazers_count || 0), 0)
      : 0;

    return NextResponse.json({
      repos:      user.public_repos ?? repos.length,
      commits90d: commitsData?.total_count ?? 0,
      stars:      totalStars,
      followers:  user.followers ?? 0,
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch GitHub stats' }, { status: 500 });
  }
}
