# My Portfolio

A production-ready full-stack portfolio built with Next.js, Tailwind CSS, Supabase, and Resend, deployed on Vercel.

**Live site:** [portfolio-hazel-eight-93.vercel.app](https://portfolio-hazel-eight-93.vercel.app/)

## Features
- Responsive, dark-first design with glassmorphism and animations
- Skills, Projects, and Medium sections built from reusable components
- Real newsletter signup: stores emails in Supabase, prevents duplicates, sends a welcome email via Resend

## Tech Stack
Next.js (App Router) · React · Tailwind CSS · Supabase · Resend · Vercel

## Getting Started
```bash
git clone https://github.com/aaishadhungana/portfolio.git
cd portfolio
npm install
# create .env.local and fill in the environment variables
npm run dev
```

## Environment Variables
| Variable | Used for |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Database endpoint |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public client key (RLS-protected) |
| `RESEND_API_KEY` | Sending welcome emails |


