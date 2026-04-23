'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const rotatingPhrases = [
  'AI-powered products.',
  'full-stack web apps.',
  'things that ship.',
  'what I can\'t stop thinking about.',
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed]     = useState('');
  const [deleting, setDeleting]       = useState(false);
  const [paused, setPaused]           = useState(false);

  useEffect(() => {
    const target = rotatingPhrases[phraseIndex];

    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false); }, 2000);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length < target.length) {
      const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === target.length) {
      setPaused(true);
      return;
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex(i => (i + 1) % rotatingPhrases.length);
    }
  }, [displayed, deleting, paused, phraseIndex]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-grid-pattern bg-grid">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs font-medium mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-slow" />
          Finance Analyst · Builder · New York City
        </div>

        {/* Name */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-void-50 mb-6 animate-fade-up">
          Max Wexley
        </h1>

        {/* Rotating phrase */}
        <p className="text-xl sm:text-2xl text-void-300 mb-4 h-8 animate-fade-up delay-100">
          I build{' '}
          <span className="text-gold">
            {displayed}
            <span className="inline-block w-0.5 h-5 bg-gold ml-0.5 animate-pulse" />
          </span>
        </p>

        {/* Sub-headline */}
        <p className="text-void-400 text-base sm:text-lg max-w-xl mx-auto mb-12 animate-fade-up delay-200">
          Finance by day. Builder by nature. Currently at BBVA — and shipping real software on the side.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
          <Link
            href="/projects"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg bg-gold text-void-950 font-semibold text-sm hover:bg-gold-light transition-colors"
          >
            See my work
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="group flex items-center gap-2 px-6 py-3 rounded-lg border border-surface-border text-void-200 text-sm hover:border-gold/40 hover:text-gold transition-all"
          >
            About me
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-void-600 text-xs animate-fade-in delay-500">
        <span>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-void-600 to-transparent" />
      </div>
    </section>
  );
}