export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Max Wexley — Finance analyst and builder. BBVA Energy Coverage, Michigan \'24.',
};

const experience = [
  {
    role: 'Analyst — Energy Client Coverage',
    org: 'Banco Bilbao Vizcaya Argentaria (BBVA)',
    location: 'New York City, NY',
    period: 'October 2025 – Present',
    bullets: [
      'Collaborated on a Left Lead project finance transaction for a 30 MPTA Venture Global LNG facility.',
      'Pitched a $14B acquisition financing to a Chemicals client, including a three-statement financial model.',
      'Worked on 5 tax credit transfer deals worth over $500MM that contributed more than $6MM in P&L.',
      'Developed AI-powered tools to automate workflows using APIs, Vercel, AppScript, and VS Code.',
      'Obtained SIE, Series 7, and Series 63 licenses within the first 3 months on the job.',
    ],
  },
  {
    role: 'Junior Trade Analyst — Renewable Natural Gas',
    org: 'STX Commodities',
    location: 'New York City, NY',
    period: 'July 2024 – September 2025',
    bullets: [
      'Oversaw a notional value of $10MM worth of product flowing through the portfolio monthly.',
      'Performed allocation analysis to determine optimal positions, leading to $250K in desk savings.',
    ],
  },
  {
    role: 'Asset Management Summer Analyst — Active Equities',
    org: 'UBS',
    location: 'Chicago, IL',
    period: 'June 2023 – August 2023',
    bullets: [
      'Conducted an industry analysis on the emergence of artificial intelligence and presented research findings.',
      'Pitched a climate tech private equity fund to the Asset Management arm with intern team members.',
    ],
  },
  {
    role: 'Renewable Energy Consultant Intern',
    org: 'Verde Solutions',
    location: 'Chicago, IL',
    period: 'May 2022 – August 2022',
    bullets: [
      'Used Helioscope and Energy Toolbase to develop solar proposals for clients and financing groups.',
      'Researched S-RECs and subsidies to evaluate client electricity bills and bitcoin mining projects.',
    ],
  },
  {
    role: 'Accounting Intern',
    org: '25N Coworking',
    location: 'Virtual',
    period: 'March 2022 – December 2022',
    bullets: [
      'Reconciled balance sheet and prepared financial statement packets in accordance with GAAP.',
      'Analyzed variances to budget or prior periods and presented findings to the CFO and the board.',
    ],
  },
];

const projects = [
  {
    name: 'Chapterly',
    url: 'https://www.getchapterly.com',
    tech: 'Next.js · TypeScript · Supabase · Anthropic Claude · Stripe · Vercel',
    bullets: [
      'Built and shipped a full-stack AI reading tracker with real users and Stripe subscription billing.',
      'Implemented AI-powered book insights (Claude), XP/gamification engine, social layer, and push notifications.',
      'Architected CI pipeline with GitHub Actions, 70+ unit tests, and 46 Playwright API contract tests.',
    ],
  },
];

const education = {
  school: 'University of Michigan, LSA Honors Program',
  degree: 'Bachelor of Arts in Economics and Environment',
  period: 'August 2020 – April 2024',
  location: 'Ann Arbor, MI',
  highlights: [
    'GPA: 3.7 / 4.0 · ACT: 36',
    'Coursework: Macroeconomics, Microeconomics, Econometrics, Data Science, Calculus, Public Finance, Corporate Governance, Financial Markets, Statistics',
    'Erb Institute Undergraduate Fellowship — 5 courses and 6 workshops on sustainability and business; consulted for a local business on carbon footprint reduction.',
  ],
};

const skills = {
  finance: 'Bloomberg · Capital IQ · Refinitiv · Debt Domain · Excel · Power BI · Python',
  building: 'Next.js · TypeScript · React · Supabase · Anthropic Claude API · Stripe · Vercel · GitHub Actions',
  other: 'PowerPoint · VS Code · AppScript',
};

const interests = 'Endurance Races · Basketball · History · Financial Literacy · Traveling · Korean BBQ · Animals · Books';

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* ── Header ── */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl text-void-50 mb-1">
                Max Wexley<span className="text-gold">.</span>
              </h1>
              <p className="text-void-300 text-base">Finance Analyst &amp; Builder</p>
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-void-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              New York City, NY
            </span>
            <a href="tel:2242471940" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Phone size={13} />
              (224) 247-1940
            </a>
            <a href={`mailto:${about.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={13} />
              {about.email}
            </a>
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <LinkedinIcon width={13} height={13} />
              linkedin.com/in/max-wexley
            </a>
          </div>
        </div>

        <hr className="border-surface-border mb-10" />

        {/* ── Education ── */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Education</h2>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="font-semibold text-void-50">{education.school}</p>
              <p className="text-void-300 text-sm italic mt-0.5">{education.degree}</p>
              <ul className="mt-3 space-y-1.5">
                {education.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-void-400 flex gap-2">
                    <span className="text-gold mt-1.5 flex-shrink-0 leading-none">·</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm text-void-400 whitespace-nowrap">{education.period}</p>
              <p className="text-xs text-void-500 mt-0.5">{education.location}</p>
            </div>
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* ── Experience ── */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-void-50">{exp.org}</p>
                  <p className="text-void-400 text-sm italic mt-0.5">{exp.role}</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-sm text-void-400 flex gap-2">
                        <span className="text-gold mt-1.5 flex-shrink-0 leading-none">·</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-right flex-shrink-0 min-w-[140px]">
                  <p className="text-xs text-void-400 whitespace-nowrap">{exp.period}</p>
                  <p className="text-xs text-void-500 mt-0.5">{exp.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* ── Projects ── */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Projects</h2>
          <div className="space-y-6">
            {projects.map((proj, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-void-50">{proj.name}</p>
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-void-500 hover:text-gold transition-colors"
                  >
                    <ExternalLink size={13} />
                  </a>
                </div>
                <p className="text-xs text-void-500 mb-2">{proj.tech}</p>
                <ul className="space-y-1.5">
                  {proj.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-void-400 flex gap-2">
                      <span className="text-gold mt-1.5 flex-shrink-0 leading-none">·</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* ── Skills ── */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-5">Skills</h2>
          <div className="space-y-3">
            {Object.entries(skills).map(([label, val]) => (
              <div key={label} className="flex gap-4 sm:gap-8">
                <p className="text-sm text-void-500 w-20 flex-shrink-0 capitalize pt-0.5">{label}</p>
                <p className="text-sm text-void-300">{val}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* ── Interests ── */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">Interests</h2>
          <p className="text-sm text-void-400">{interests}</p>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* Footer nav */}
        <div className="flex items-center justify-between text-sm text-void-500">
          <Link href="/" className="hover:text-gold transition-colors">← Back to site</Link>
          <a
            href={about.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-gold transition-colors"
          >
            <LinkedinIcon width={13} height={13} />
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}