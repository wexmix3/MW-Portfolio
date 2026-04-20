'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/projects', label: 'Projects' },
  { href: '/about',    label: 'About' },
  { href: '/chat',     label: 'Chat with AI' },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-border bg-void-950/80 backdrop-blur-md">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg text-void-50 hover:text-gold transition-colors"
        >
          MW<span className="text-gold">.</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-gold'
                  : 'text-void-300 hover:text-void-50'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="mailto:maxmwexley@gmail.com"
            className="text-sm px-3 py-1.5 rounded-md border border-surface-border text-void-200 hover:border-gold hover:text-gold transition-all"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-void-300 hover:text-void-50"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-surface-border bg-void-950 px-4 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`text-sm ${
                pathname === href ? 'text-gold' : 'text-void-300'
              }`}
            >
              {label}
            </Link>
          ))}
          <a href="mailto:maxmwexley@gmail.com" className="text-sm text-void-300">
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
