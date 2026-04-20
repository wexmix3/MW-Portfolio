export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getRatelimit } from '@/lib/ratelimit';
import { about } from '@/data/about';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  // Rate limiting
  const rl = getRatelimit();
  if (rl) {
    const ip = req.headers.get('x-forwarded-for') ?? '127.0.0.1';
    const { success } = await rl.limit(ip);
    if (!success) {
      return NextResponse.json({ error: 'Too many messages. Try again in an hour.' }, { status: 429 });
    }
  }

  let messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  try {
    const body = await req.json();
    messages = body.messages;
    if (!Array.isArray(messages) || messages.length === 0) throw new Error();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  // Stream response using Anthropic SDK directly
  const stream = await anthropic.messages.stream({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 600,
    system: about.chatSystemPrompt,
    messages,
  });

  // Return a streaming text response
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } catch {
        controller.error('Stream error');
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
      'Cache-Control': 'no-cache',
    },
  });
}
