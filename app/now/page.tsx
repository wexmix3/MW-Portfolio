import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Now',
  description: 'What Max Wexley is working on, reading, training, and learning right now.',
};

const LAST_UPDATED = 'April 2026';

export default function NowPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14">
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">Now</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-void-50 mb-4">
            What I&apos;m up to
          </h1>
          <p className="text-void-400 leading-relaxed max-w-lg">
            A snapshot of what I&apos;m working on, reading, training for, and learning. Updated when things change.
          </p>
          <p className="text-void-500 text-xs mt-4">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="flex flex-col gap-14">

          {/* Building */}
          <section>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-1">Building</p>
            <h2 className="text-lg font-semibold text-void-50 mb-5">What I&apos;m working on</h2>
            <div className="flex flex-col gap-3">
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="flex items-center justify-between mb-1">
                  <div className="font-medium text-void-50">Chapterly</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Live</span>
                </div>
                <p className="text-sm text-void-400 leading-relaxed">
                  An AI reading tracker I built because I wanted one. Live at{' '}
                  <a href="https://www.getchapterly.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">getchapterly.com</a>
                  {' '}— real users, real subscriptions. Still adding to it.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">Finance Dashboard</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  Personal finance tool I built for myself. Portfolio tracking, budgets, net worth over time. Getting close.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">More coming</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  A few other things in motion. Not ready to talk about yet.
                </p>
              </div>
            </div>
          </section>

          {/* Training */}
          <section>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-1">Training</p>
            <h2 className="text-lg font-semibold text-void-50 mb-5">What I&apos;m doing outside of work</h2>
            <div className="flex flex-col gap-3">

              {/* Half-Ironman */}
              <div className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
                <div className="relative h-64 bg-void-900">
                  <Image
                    src="/halfironman.jpg"
                    alt="Ironman 70.3 Jones Beach finish line"
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center 35%' }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-void-50">Ironman 70.3 — Jones Beach, NY</div>
                    <span className="text-xs text-gold font-medium">5:45</span>
                  </div>
                  <p className="text-sm text-void-400 leading-relaxed">
                    1.2 mile swim, 56 mile bike, 13.1 mile run. Months of early mornings to get there. Worth it.
                  </p>
                </div>
              </div>

              {/* Marathon */}
              <div className="rounded-xl border border-surface-border bg-surface-card overflow-hidden">
                <div className="relative h-64 bg-void-900">
                  <Image
                    src="/marathon.jpg"
                    alt="Philadelphia Marathon"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '62% center' }}
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium text-void-50">Philadelphia Marathon</div>
                    <span className="text-xs text-gold font-medium">3:13</span>
                  </div>
                  <p className="text-sm text-void-400 leading-relaxed">
                    26.2 miles through Philly. The last six were rough. 3:13 — Boston Qualifier. Proud of that one.
                  </p>
                </div>
              </div>

              {/* Boxing */}
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">Boxing</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  Training consistently. Goal is to spar. I like having something physical that demands real focus.
                </p>
              </div>

            </div>
          </section>

          {/* Reading */}
          <section>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-1">Reading</p>
            <h2 className="text-lg font-semibold text-void-50 mb-5">What&apos;s on my nightstand</h2>
            <div className="flex flex-col gap-3">
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">The Big Deal</div>
                <p className="text-sm text-void-400 leading-relaxed">Inside the world of major M&A. Relevant to what I do and genuinely interesting.</p>
              </div>
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">The Gates of Europe</div>
                <p className="text-sm text-void-400 leading-relaxed">History of Ukraine. Dense, slow, and worth it. Geography shapes more than people think.</p>
              </div>
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">Red Rising — Second Trilogy</div>
                <p className="text-sm text-void-400 leading-relaxed">Iron Gold, Dark Age, Light Bringer. The kind of series that keeps you up later than you planned.</p>
              </div>
            </div>
          </section>

          {/* Learning */}
          <section>
            <p className="text-gold text-xs font-medium tracking-widest uppercase mb-1">Learning</p>
            <h2 className="text-lg font-semibold text-void-50 mb-5">What I&apos;m studying</h2>
            <div className="flex flex-col gap-3">
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">Banking products</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  Term loans, revolving credit facilities, letters of credit, tax credit transfers. The mechanics behind how deals actually get done.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-surface-border bg-surface-card">
                <div className="font-medium text-void-50 mb-1">AI development tools</div>
                <p className="text-sm text-void-400 leading-relaxed">
                  Claude Code, VS Code, Supabase, Vercel. The tools available right now are remarkable. I want to get as good as I can at using them.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}