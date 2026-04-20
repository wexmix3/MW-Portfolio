import Link from 'next/link';
import { Mail, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import { about } from '@/data/about';

export default function AboutTeaser() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid sm:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-gold text-xs font-medium tracking-widest uppercase mb-2">About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-void-50 mb-5">
            The projects are<br />
            <span className="font-display italic text-gold">the person.</span>
          </h2>
          <p className="text-void-400 leading-relaxed mb-6 text-sm sm:text-base">
            CourtBook came from loving basketball. Chapterly came from reading constantly.
            The Finance Dashboard came from obsessing over personal finance.
            I don&apos;t build to practice — I build because I have an itch that won&apos;t go
            away until the thing exists.
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-1.5 text-sm text-void-300 hover:text-gold transition-colors"
          >
            More about me <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Right — contact card */}
        <div className="rounded-xl border border-surface-border bg-surface-card p-6 flex flex-col gap-5">
          <div>
            <h3 className="font-semibold text-void-50 mb-1">Let&apos;s build something.</h3>
            <p className="text-sm text-void-400">{about.availability}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${about.email}`}
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-border hover:border-gold/30 hover:bg-gold/5 transition-all group"
            >
              <Mail size={16} className="text-gold" />
              <span className="text-sm text-void-200 group-hover:text-void-50 transition-colors">
                {about.email}
              </span>
            </a>
            <a
              href={about.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-border hover:border-gold/30 hover:bg-gold/5 transition-all group"
            >
              <GithubIcon className="text-gold" style={{width:"16px",height:"16px"}} />
              <span className="text-sm text-void-200 group-hover:text-void-50 transition-colors">
                github.com/wexmix3
              </span>
            </a>
            <a
              href={about.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-surface-border hover:border-gold/30 hover:bg-gold/5 transition-all group"
            >
              <LinkedinIcon className="text-gold" style={{width:"16px",height:"16px"}} />
              <span className="text-sm text-void-200 group-hover:text-void-50 transition-colors">
                linkedin.com/in/maxwexley
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
