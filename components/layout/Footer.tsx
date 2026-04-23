import Link from 'next/link';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';

export default function Footer() {
  return (
    <footer className="border-t border-surface-border mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-display text-void-50">
            Max Wexley
          </span>
          <span className="text-xs text-void-400">Finance by day. Builder by nature.</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/wexmix3"
            target="_blank"
            rel="noopener noreferrer"
            className="text-void-400 hover:text-void-50 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon style={{fontSize:"18px", width:"18px", height:"18px"}} />
          </a>
          <a
            href="https://linkedin.com/in/maxwexley"
            target="_blank"
            rel="noopener noreferrer"
            className="text-void-400 hover:text-void-50 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon style={{fontSize:"18px", width:"18px", height:"18px"}} />
          </a>
          <a
            href="mailto:maxmwexley@gmail.com"
            className="text-void-400 hover:text-void-50 transition-colors"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-void-500">
          <Link href="/projects" className="hover:text-void-300 transition-colors">Projects</Link>
          <Link href="/about"    className="hover:text-void-300 transition-colors">About</Link>
          <Link href="/now"      className="hover:text-void-300 transition-colors">Now</Link>
        </div>
      </div>
    </footer>
  );
}
