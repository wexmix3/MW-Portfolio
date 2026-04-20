const map = {
  live:        { label: 'Live',        cls: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  'in-progress': { label: 'In Progress', cls: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  paused:      { label: 'Paused',      cls: 'bg-void-700/50 text-void-400 border-void-600/30' },
};

export default function StatusBadge({ status }: { status: 'live' | 'in-progress' | 'paused' }) {
  const { label, cls } = map[status];
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full border text-xs font-medium flex-shrink-0 ${cls}`}>
      {status === 'live' && <span className="w-1 h-1 rounded-full bg-emerald-400" />}
      {label}
    </span>
  );
}
