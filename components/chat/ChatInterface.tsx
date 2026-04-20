'use client';

import { useState, useRef, useEffect, FormEvent } from 'react';
import { Send, Sparkles, User, Bot, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED = [
  'What projects has Max built?',
  'What AI tools does he use?',
  'Is Max available for internships?',
  'What makes Chapterly unique?',
  'What\'s his tech stack?',
  'Tell me about CourtBook NYC.',
];

export default function ChatInterface() {
  const [messages, setMessages]   = useState<Message[]>([]);
  const [input, setInput]         = useState('');
  const [streaming, setStreaming] = useState(false);
  const [error, setError]         = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send(userText: string) {
    if (!userText.trim() || streaming) return;
    setError(null);

    const newMessages: Message[] = [...messages, { role: 'user', content: userText }];
    setMessages(newMessages);
    setInput('');
    setStreaming(true);

    // Add empty assistant message to fill in
    setMessages(m => [...m, { role: 'assistant', content: '' }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? `HTTP ${res.status}`);
      }

      const reader = res.body?.getReader();
      const decoder = new TextDecoder();
      if (!reader) throw new Error('No response stream');

      let accumulated = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages(m => {
          const updated = [...m];
          updated[updated.length - 1] = { role: 'assistant', content: accumulated };
          return updated;
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.';
      setError(msg);
      setMessages(m => m.slice(0, -1)); // remove empty assistant message
    } finally {
      setStreaming(false);
      inputRef.current?.focus();
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  const showSuggestions = messages.length === 0;

  return (
    <div className="flex flex-col flex-1 max-w-3xl w-full mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="py-8 text-center border-b border-surface-border mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gold/10 border border-gold/20 mb-4">
          <Sparkles size={20} className="text-gold" />
        </div>
        <h1 className="text-2xl font-bold text-void-50 mb-1">Chat with Max&apos;s AI</h1>
        <p className="text-void-400 text-sm">
          Powered by Claude · Ask anything about Max&apos;s projects, skills, or background
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 flex flex-col gap-5 pb-4 overflow-y-auto">
        {showSuggestions && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
            {SUGGESTED.map(q => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-left p-3 rounded-lg border border-surface-border bg-surface-card text-xs text-void-300 hover:border-gold/30 hover:text-void-100 transition-all"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                msg.role === 'assistant'
                  ? 'bg-gold/10 border border-gold/20'
                  : 'bg-void-700 border border-surface-border'
              }`}
            >
              {msg.role === 'assistant'
                ? <Bot size={13} className="text-gold" />
                : <User size={13} className="text-void-300" />
              }
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'assistant'
                  ? 'bg-surface-card border border-surface-border text-void-200 rounded-tl-sm'
                  : 'bg-gold text-void-950 font-medium rounded-tr-sm'
              }`}
            >
              {msg.content || (streaming && i === messages.length - 1
                ? <Loader2 size={14} className="animate-spin text-gold" />
                : null
              )}
            </div>
          </div>
        ))}

        {error && (
          <p className="text-center text-sm text-red-400">{error}</p>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="sticky bottom-0 pb-6 pt-2 bg-gradient-to-t from-void-950 via-void-950/95 to-transparent">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Ask anything about Max..."
            disabled={streaming}
            className="flex-1 px-4 py-3 rounded-xl bg-surface-card border border-surface-border text-void-100 placeholder-void-500 text-sm focus:outline-none focus:border-gold/40 disabled:opacity-60 transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || streaming}
            className="px-4 py-3 rounded-xl bg-gold text-void-950 hover:bg-gold-light disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            {streaming
              ? <Loader2 size={16} className="animate-spin" />
              : <Send size={16} />
            }
          </button>
        </form>
        <p className="text-center text-[10px] text-void-600 mt-2">
          Powered by Anthropic Claude · 20 messages/hour limit
        </p>
      </div>
    </div>
  );
}
