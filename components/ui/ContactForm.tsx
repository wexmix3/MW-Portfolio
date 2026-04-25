'use client';

import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

type State = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [message, setMessage] = useState('');
  const [state, setState]     = useState<State>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? 'Something went wrong');
      }
      setState('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div className="flex flex-col items-center gap-3 py-8 text-center">
        <CheckCircle size={36} className="text-emerald-400" />
        <p className="font-semibold text-void-50">Message sent!</p>
        <p className="text-sm text-void-400">I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-void-400 font-medium">Name</label>
          <input
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your name"
            className="px-3 py-2.5 rounded-lg bg-void-950 border border-surface-border text-void-100 text-sm placeholder:text-void-600 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs text-void-400 font-medium">Email</label>
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="px-3 py-2.5 rounded-lg bg-void-950 border border-surface-border text-void-100 text-sm placeholder:text-void-600 focus:outline-none focus:border-gold/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs text-void-400 font-medium">Message</label>
        <textarea
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder="What's on your mind?"
          className="px-3 py-2.5 rounded-lg bg-void-950 border border-surface-border text-void-100 text-sm placeholder:text-void-600 focus:outline-none focus:border-gold/50 transition-colors resize-none"
        />
      </div>

      {state === 'error' && (
        <p className="text-xs text-rose-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={state === 'loading'}
        className="self-start flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gold text-void-950 font-semibold text-sm hover:bg-gold-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <Send size={14} />
        {state === 'loading' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  );
}