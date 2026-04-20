export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: 'live' | 'in-progress' | 'paused';
  liveUrl?: string;
  repoUrl?: string;
  coverImage: string;
  coverColor: string; // fallback gradient color
  tech: string[];
  category: ('web' | 'mobile' | 'ai' | 'data')[];
  highlights: string[];
  metrics?: Record<string, string>;
  liveMetricsUrl?: string;
  lessons: string[];
  featured: boolean;
  order: number;
}

export interface GitHubStats {
  repos: number;
  commits90d: number;
  stars: number;
  followers: number;
}

export interface ChapterlyStats {
  userCount: number;
}
