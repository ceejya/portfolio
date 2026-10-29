# John Ojasanya — Portfolio

A React portfolio built with Vite. The contact form is a Vercel serverless function that sends messages through Resend.

Project preview photos are temporary stock-image placeholders in `public/images/`. Replace them with real project screenshots when they are ready.

## Run locally

Install Node.js 20.19+ (or 22.12+) and npm, then run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`). Create a production build with `npm run build` and inspect it with `npm run preview`.

## Configure the contact form

Add these environment variables to Vercel (and to a local `.env` file when using `vercel dev`):

- `RESEND_API_KEY` — a Resend API key.
- `CONTACT_EMAIL` — the inbox that should receive portfolio messages.
- `RESEND_FROM` — a sender address on a domain verified with Resend, for example `John's Portfolio <hello@your-verified-domain.com>`.

The API key is used only by the serverless function and must never be added to client-side code. Deploy the site to Vercel to enable `/api/contact`. For local end-to-end testing of the form, use the Vercel CLI (`vercel dev`) with the environment variables configured. Until the form is configured, visitors can still email John directly using the address on the page.
