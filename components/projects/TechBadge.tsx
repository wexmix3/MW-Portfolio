const techColors: Record<string, string> = {
  'Next.js 14':       'bg-white/5 text-void-200',
  'Next.js':          'bg-white/5 text-void-200',
  'TypeScript':       'bg-blue-500/10 text-blue-300',
  'Supabase':         'bg-emerald-500/10 text-emerald-300',
  'Anthropic Claude': 'bg-gold/10 text-gold',
  'Stripe':           'bg-purple-500/10 text-purple-300',
  'Tailwind CSS':     'bg-cyan-500/10 text-cyan-300',
  'Vercel':           'bg-white/5 text-void-200',
  'Mapbox':           'bg-blue-600/10 text-blue-400',
  'Recharts':         'bg-orange-500/10 text-orange-300',
  'React Native':     'bg-sky-500/10 text-sky-300',
  'Expo':             'bg-indigo-500/10 text-indigo-300',
  'Python':           'bg-yellow-500/10 text-yellow-300',
};

export default function TechBadge({ tech }: { tech: string }) {
  const cls = techColors[tech] ?? 'bg-void-800/60 text-void-300';
  return (
    <span className={`inline-flex px-2 py-0.5 rounded text-xs font-medium ${cls}`}>
      {tech}
    </span>
  );
}
