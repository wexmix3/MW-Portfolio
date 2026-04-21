export const dynamic = 'force-dynamic';

import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, MapPin, ExternalLink, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Resume of Max Wexley — Full-Stack Developer & AI Builder at University of Michigan.',
};

const experience: {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}[] = [
  // Add real work experience here
];

const education = {
  school: 'University of Michigan',
  degree: 'B.S. Computer Science',   // UPDATE: confirm degree & major
  period: '2022 – 2026',             // UPDATE: confirm dates
  location: 'Ann Arbor, MI',
  highlights: [
    'Coursework: Data Structures, Algorithms, Database Systems, Web Systems',
  ],
};

const skillGroups = [
  {
    label: 'Frontend',
    skills: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts'],
  },
  {
    label: 'Backend',
    skills: ['Supabase', 'PostgreSQL', 'Node.js', 'REST APIs', 'Server-Side Rendering'],
  },
  {
    label: 'AI / ML',
    skills: ['Anthropic Claude API', 'Prompt Engineering', 'Streaming Responses', 'Structured JSON Extraction'],
  },
  {
    label: 'DevOps & Tools',
    skills: ['Vercel', 'GitHub Actions', 'Playwright', 'Vitest', 'Stripe'],
  },
];

const projects = [
  {
    name: 'Chapterly',
    url: 'https://www.getchapterly.com',
    tech: 'Next.js · TypeScript · Supabase · Anthropic Claude · Stripe',
    bullets: [
      'Built and launched a full-stack AI reading tracker with 116+ automated tests, live users, and Stripe subscriptions',
      'Implemented AI book insights (Claude Haiku), XP/gamification engine, social layer, buddy reads, and push notifications',
      'Architected CI pipeline with GitHub Actions, Playwright E2E tests, and Vitest unit tests',
    ],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen pt-14">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl text-void-50 mb-1">
                Max Wexley<span className="text-gold">.</span>
              </h1>
              <p className="text-void-300 text-lg">{about.title}</p>
            </div>
            {/* Download button — wire up once you have a PDF */}
            <a
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all flex-shrink-0"
            >
              <Download size={14} />
              Download PDF
            </a>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-void-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={13} />
              Ann Arbor, MI
            </span>
            <a href={`mailto:${about.email}`} className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Mail size={13} />
              {about.email}
            </a>
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <LinkedinIcon width={13} height={13} />
              linkedin.com/in/maxwexley
            </a>
            <a href={about.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <GithubIcon width={13} height={13} />
              github.com/wexmix3
            </a>
          </div>
        </div>

        <hr className="border-surface-border mb-10" />

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Education</h2>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-semibold text-void-50">{education.school}</p>
              <p className="text-void-300 text-sm mt-0.5">{education.degree}</p>
              <ul className="mt-2 space-y-1">
                {education.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-void-400 flex gap-2">
                    <span className="text-gold mt-1.5 flex-shrink-0">·</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-sm text-void-400">{education.period}</p>
              <p className="text-xs text-void-500 mt-0.5">{education.location}</p>
            </div>
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* Experience */}
        {experience.length > 0 && (
          <>
            <section className="mb-10">
              <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, i) => (
                  <div key={i} className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-semibold text-void-50">{exp.role}</p>
                      <p className="text-void-400 text-sm mt-0.5">{exp.org}</p>
                      <ul className="mt-2 space-y-1">
                        {exp.bullets.map((b, j) => (
                          <li key={j} className="text-sm text-void-400 flex gap-2">
                            <span className="text-gold mt-1.5 flex-shrink-0">·</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-void-400 flex-shrink-0">{exp.period}</p>
                  </div>
                ))}
              </div>
            </section>
            <hr className="border-surface-border mb-10" />
          </>
        )}

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Projects</h2>
          <div className="space-y-8">
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
                <ul className="space-y-1">
                  {proj.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-void-400 flex gap-2">
                      <span className="text-gold mt-1.5 flex-shrink-0">·</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xs font-semibold text-gold uppercase tracking-widest mb-4">Skills</h2>
          <div className="space-y-3">
            {skillGroups.map(group => (
              <div key={group.label} className="flex gap-3 sm:gap-6">
                <p className="text-sm text-void-500 w-24 flex-shrink-0 pt-0.5">{group.label}</p>
                <p className="text-sm text-void-300">{group.skills.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-surface-border mb-10" />

        {/* Footer nav */}
        <div className="flex items-center justify-between text-sm text-void-500">
          <Link href="/" className="hover:text-gold transition-colors">← Back to portfolio</Link>
          <Link href="/projects" className="hover:text-gold transition-colors">See all projects →</Link>
        </div>
      </div>
    </div>
  );
}