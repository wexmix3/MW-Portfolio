import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

const aiFeatures = [
  { project: 'Chapterly', feature: 'AI book insights & mood predictions' },
  { project: 'Chapterly', feature: 'Genre analysis + reading pattern trends' },
  { project: 'TikTok Analyzer', feature: 'Trend categorization & signal detection' },
  { project: 'This site', feature: 'AI chatbot that answers questions about me' },
];

export default function AICta() {
  return (
    <section className="border-y border-surface-border bg-surface py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-gold" />
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                AI-First Development
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-void-50 mb-4">
              I build with<br />
              <span className="text-gold-gradient font-display italic">Claude AI.</span>
            </h2>
            <p className="text-void-400 text-base leading-relaxed mb-8">
              Every app I ship uses Anthropic&apos;s Claude as a core feature — not a demo, not a wrapper.
              Streaming responses, structured JSON extraction, retry logic, rate limiting. Production-grade AI.
            </p>
            <Link
              href="/chat"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold/10 border border-gold/20 text-gold text-sm font-medium hover:bg-gold/20 transition-all"
            >
              Ask my AI anything
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right — feature list */}
          <div className="flex flex-col gap-3">
            {aiFeatures.map(({ project, feature }) => (
              <div
                key={feature}
                className="flex items-center gap-4 px-4 py-3.5 rounded-lg border border-surface-border bg-surface-card"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <div>
                  <span className="text-xs text-gold/70 font-medium">{project} · </span>
                  <span className="text-sm text-void-200">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
