export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  // Lazy-init inside handler so build-time env check doesn't fail
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder');

  let name: string, email: string, message: string;
  try {
    const body = await req.json();
    name    = String(body.name    ?? '').trim();
    email   = String(body.email   ?? '').trim();
    message = String(body.message ?? '').trim();
    if (!name || !email || !message) throw new Error('Missing fields');
    if (!email.includes('@'))        throw new Error('Invalid email');
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Invalid request' },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured' }, { status: 503 });
  }

  try {
    await resend.emails.send({
      from:    'Portfolio <onboarding@resend.dev>',
      to:      'maxmwexley@gmail.com',
      subject: `Portfolio contact from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
