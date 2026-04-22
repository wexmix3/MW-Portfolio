import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'chapterly',
    title: 'Chapterly',
    tagline: 'AI-powered reading companion with gamification, social features, and smart insights.',
    description:
      'Chapterly is a full-stack reading tracker that uses Claude AI to generate personalized book insights, predict reading moods, and surface hidden themes. It features an XP/leveling system, reading streaks, social follows, buddy reads, a live reading timer, Goodreads CSV import, and Stripe-powered premium subscriptions.',
    status: 'live',
    liveUrl: 'https://www.getchapterly.com',
    coverImage: '/projects/chapterly.png',
    coverColor: '#1a1a2e',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Anthropic Claude', 'Stripe', 'Tailwind CSS', 'Vercel'],
    category: ['web', 'ai'],
    highlights: [
      'AI-generated reading insights, mood predictions, and genre analysis powered by Claude Haiku',
      'Full gamification engine: XP rewards, level-up system, reading streaks, and leaderboards',
      'Social layer: follows, buddy reads, shared challenges, and reading activity feeds',
      'Stripe subscriptions (monthly + annual), referral system, and push notifications via VAPID',
      'GitHub Actions CI with 70+ Vitest unit tests and 46 Playwright API contract tests',
      'Goodreads CSV import supporting up to 500 books with Google Books metadata enrichment',
    ],
    metrics: { 'Status': 'Live', 'Tests': '116+', 'Features': '30+' },
    liveMetricsUrl: 'https://www.getchapterly.com/api/stats/public',
    lessons: [
      'Supabase RLS policies require careful design — a single missing policy silently hides data from the UI',
      'AI features need retry logic (429/529) and greedy JSON extraction to handle Claude preamble in production',
      'Gamification loops (XP, streaks, leaderboards) dramatically increase session depth — build them early',
    ],
    featured: true,
    order: 1,
  },
  {
    slug: 'courtbook-nyc',
    title: 'CourtBook NYC',
    tagline: 'Find and book basketball courts across New York City — 48 courts, real-time availability.',
    description:
      'CourtBook NYC is an interactive platform for discovering and booking basketball courts across all five NYC boroughs. It features a Mapbox-powered interactive map, Stripe payment integration for bookable indoor venues, a community runs board, and a seeded database of 48 courts sourced and categorized by neighborhood.',
    status: 'in-progress',
    coverImage: '/projects/courtbook.png',
    coverColor: '#0f2027',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Mapbox', 'Stripe', 'Tailwind CSS'],
    category: ['web'],
    highlights: [
      'Interactive Mapbox map with clustering and neighborhood filtering across all five boroughs',
      'Stripe payment flow for bookable indoor venues with real availability tracking',
      'Community runs board — users can create and join pickup games at any court',
      'Seeded database of 48 courts with photos, surface types, amenities, and booking status',
      '32 server-rendered pages with zero build errors and sub-second TTFB on Vercel Edge',
    ],
    metrics: { 'Courts': '48', 'Boroughs': '5', 'Pages': '32' },
    lessons: [
      'react-map-gl v8 must import from react-map-gl/mapbox — the root import silently fails',
      'Stripe client must be lazy-initialized to avoid build-time environment errors in Next.js',
      'Seeding idempotently (upsert on name+borough) makes iterative development dramatically faster',
    ],
    featured: false,
    order: 2,
  },
  {
    slug: 'finance-dashboard',
    title: 'Finance Dashboard',
    tagline: 'Personal finance intelligence — portfolio tracking, budget analysis, and net worth trends.',
    description:
      'A comprehensive personal finance dashboard for tracking investments, budgets, net worth over time, and spending categories. Built across 7 phases with 61 files, it features real-time portfolio performance, category-level budget analysis, and interactive Recharts visualizations.',
    status: 'in-progress',
    coverImage: '/projects/finance.png',
    coverColor: '#0a1628',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Recharts', 'Tailwind CSS'],
    category: ['web', 'data'],
    highlights: [
      '7 development phases complete: portfolio tracking, budget management, net worth trends, category analysis',
      'Interactive Recharts visualizations: line charts, bar charts, donut charts with dark-mode awareness',
      '61 source files with strict TypeScript throughout',
      'Supabase Postgres backend with RLS-protected financial data',
    ],
    metrics: { 'Files': '61', 'Phases': '7/9' },
    lessons: [
      'Recharts SVG tick fill is not affected by CSS dark mode — use a MutationObserver + state to pass conditional fill values',
      'Financial data benefits from pessimistic loading patterns — show stale data instantly, then refresh',
    ],
    featured: false,
    order: 3,
  },
  {
    slug: 'dinnercard',
    title: 'DinnerCard',
    tagline: 'Mobile app for discovering restaurants and building your dining wishlist.',
    description:
      'DinnerCard is a React Native / Expo mobile application for tracking restaurant experiences, building dining wishlists, and discovering new spots with friends. Features swipe-based discovery, shared lists, and a card-based UI optimized for one-handed mobile use.',
    status: 'in-progress',
    coverImage: '/projects/dinnercard.png',
    coverColor: '#1a0a0a',
    tech: ['React Native', 'Expo', 'TypeScript', 'Tailwind (NativeWind)', 'Supabase'],
    category: ['mobile'],
    highlights: [
      'React Native with Expo for cross-platform iOS and Android from a single codebase',
      'Card-based swipe UI for restaurant discovery — intuitive one-handed browsing',
      'Shared dining lists for coordinating where to eat with friends and groups',
      'NativeWind for consistent Tailwind-style utility classes in native mobile',
    ],
    lessons: [
      'EAS Build handles native module complexity — avoid ejecting unless absolutely necessary',
      'NativeWind requires careful setup with Babel — the integration is fragile across Expo SDK versions',
    ],
    featured: false,
    order: 4,
  },
  {
    slug: 'tiktok-trends-analyzer',
    title: 'TikTok Trends Analyzer',
    tagline: 'AI-powered trend analysis tool that surfaces emerging TikTok content patterns.',
    description:
      'An AI-powered analytics tool that analyzes TikTok content trends using Claude AI to categorize, summarize, and surface emerging patterns across niches. Helps creators and marketers understand what content formats and topics are gaining traction before they peak.',
    status: 'in-progress',
    coverImage: '/projects/tiktok.png',
    coverColor: '#010101',
    tech: ['Python', 'Next.js', 'Anthropic Claude', 'TypeScript'],
    category: ['ai', 'data'],
    highlights: [
      'Claude AI categorizes and summarizes trend data across content niches automatically',
      'Surfaces emerging patterns before they peak — early signal detection for creators',
      'Structured JSON output pipeline for reliable AI-powered data extraction',
    ],
    lessons: [
      'Structured JSON prompting with Claude requires greedy regex extraction — naive markdown stripping fails on complex responses',
      'Trend analysis benefits from comparing velocity (rate of growth) not just volume',
    ],
    featured: false,
    order: 5,
  },
  {
    slug: 'hoopers-hub',
    title: 'Hoopers Hub',
    tagline: 'Find pickup basketball games and courts near you — built for NYC ballers.',
    description:
      'Hoopers Hub is a community platform for discovering pickup basketball runs, finding courts, and connecting with local players. Features an interactive map, game listings with skill-level filters, and a court database covering all five NYC boroughs.',
    status: 'in-progress',
    coverImage: '/projects/hoopers.png',
    coverColor: '#0d1f0d',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind CSS'],
    category: ['web'],
    highlights: [
      'Interactive map for discovering courts and pickup runs across NYC boroughs',
      'Game listings with skill-level filters and RSVP system',
      'Court database with surface types, amenities, and real-time availability',
    ],
    lessons: [
      'Community platforms need critical mass before they feel alive — seed data matters as much as the product',
    ],
    featured: false,
    order: 7,
  },
  {
    slug: 'performance-os',
    title: 'Performance OS',
    tagline: 'Personal productivity operating system — goals, habits, and performance tracking.',
    description:
      'Performance OS is a personal productivity system for tracking goals, habits, and performance metrics in a unified dashboard. Designed to treat personal development with the same rigor as business operations — with weekly reviews, OKRs, and data-driven habit analysis.',
    status: 'in-progress',
    coverImage: '/projects/performance.png',
    coverColor: '#0a0a1a',
    tech: ['Next.js 14', 'TypeScript', 'Supabase', 'Tailwind CSS'],
    category: ['web'],
    highlights: [
      'OKR-style goal framework with weekly review cadence built into the product flow',
      'Habit tracking with streak calculations and performance trend analysis',
      'Unified dashboard treating personal development as a data problem',
    ],
    lessons: [
      'Habit products live or die by the streak mechanic — make streak recovery easy to prevent abandonment',
    ],
    featured: false,
    order: 6,
  },
];

export const featuredProjects = projects.filter(p => p.featured).sort((a, b) => a.order - b.order);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug);
}
