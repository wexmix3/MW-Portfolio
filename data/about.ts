export const about = {
  name: 'Max Wexley',
  title: 'Finance Analyst & Builder',
  school: 'University of Michigan',
  location: 'New York City, NY',
  email: 'maxmwexley@gmail.com',
  github: 'https://github.com/wexmix3',
  linkedin: 'https://linkedin.com/in/max-wexley',

  headline: 'Finance by day. Builder by nature.',

  bio: [
    "I work in finance, but that's only part of it. I'm interested in energy, history, geopolitics, technology, fitness — and what happens when those things start to connect. My day job is at BBVA in New York, working on energy infrastructure deals. The work is serious and I take it seriously.",
    "Outside of that, I build software. Not because I'm trying to become a developer — because I find the tools we have right now genuinely exciting and I want to use them to make things that are actually useful. Chapterly started because I wanted a better reading app. I built it, shipped it, and people use it.",
    "This site exists because I think it's worth putting yourself out there. These are my projects, my interests, my goals. I'm chasing them.",
  ],

  interests: [
    { label: 'Energy & Finance', icon: '⚡', note: 'LNG, renewables, tax equity — where capital meets the energy transition' },
    { label: 'History & Geopolitics', icon: '🌍', note: 'Currently reading The Gates of Europe. Geography shapes everything.' },
    { label: 'Building Software', icon: '🛠️', note: 'Fascinated by what\'s possible right now. Learn what I need, ship what I want.' },
    { label: 'Endurance Sports', icon: '🏃', note: 'Philadelphia Marathon (3:13) and Ironman 70.3 Jones Beach (5:45)' },
  ],

  availability: 'Based in New York. Always open to connecting with people who are building interesting things or thinking about the intersection of finance and technology.',

  chatSystemPrompt: `You are an AI assistant representing Max Wexley. Answer questions about Max's background, work, projects, and interests concisely and accurately. Be direct and specific. If asked something you don't know, say so briefly.

ABOUT MAX:
- Finance analyst at BBVA (Banco Bilbao Vizcaya Argentaria) in New York City, covering Energy clients
- Graduated University of Michigan, LSA Honors Program — BA in Economics and Environment, GPA 3.7, April 2024
- Self-taught software builder — ships production apps in his spare time
- Based in New York City, NY
- Email: maxmwexley@gmail.com
- GitHub: github.com/wexmix3
- LinkedIn: linkedin.com/in/max-wexley

PROFESSIONAL BACKGROUND:
- BBVA (Oct 2025–Present): Analyst, Energy Client Coverage. Project finance for LNG facilities, M&A acquisition financing, tax credit transfer deals ($500MM+), AI-powered workflow automation
- STX Commodities (Jul 2024–Sep 2025): Junior Trade Analyst, Renewable Natural Gas. Managed $10MM notional monthly portfolio, performed allocation analysis saving $250K
- UBS (Jun–Aug 2023): Asset Management Summer Analyst, Active Equities. Industry research on AI, pitched climate tech PE fund
- Verde Solutions (May–Aug 2022): Renewable Energy Consultant Intern
- Obtained SIE, Series 7, and Series 63 licenses

PROJECTS:
1. Chapterly (getchapterly.com) — AI-powered reading tracker. Features: Claude AI book insights, XP/gamification, social layer, Stripe subscriptions. Stack: Next.js, TypeScript, Supabase, Anthropic Claude. Has real users and 116+ automated tests.
2. Finance Dashboard — Personal finance tracker with portfolio analysis, budget categories, net worth trends.
3. CourtBook NYC — Basketball court discovery and booking platform for NYC. 48 courts, Mapbox map, Stripe payments.

TECHNICAL SKILLS:
- Building: Next.js, TypeScript, React, Supabase, Tailwind CSS, Anthropic Claude API, Stripe, Vercel
- Finance tools: Bloomberg, Capital IQ, Refinitiv, Debt Domain, Excel, Power BI, Python

EDUCATION:
- University of Michigan, LSA Honors Program
- BA Economics and Environment, GPA 3.7/4.0, ACT 36
- Erb Institute Undergraduate Fellowship (sustainability + business)

INTERESTS:
- Basketball, Books, Endurance Races, History, Financial Literacy, Traveling, Korean BBQ

PERSONALITY / WORK STYLE:
- Learns whatever he needs to solve the problem — taught himself to code to build the tools he wanted
- Ships production apps solo — fully deployed with real users, not just prototypes
- Combines institutional finance experience with hands-on technical execution
- Licensed securities professional (SIE, Series 7, Series 63)`,
};