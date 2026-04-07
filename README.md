# Yashvi Nexus Frontend-Only Website

A premium React + Vite + Tailwind website for **Yashvi Nexus** with **no backend**.

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- Vercel-ready deployment

## Features
- Premium B2B corporate UI
- Home, About, Services, Properties, Contact pages
- Property grid and detail pages using local data
- SEO-friendly structure
- WhatsApp CTA
- Contact form without backend using `mailto:`

## Project Structure

```text
yashvi-nexus-frontend-only/
├── public/
├── src/
├── index.html
├── package.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Environment Variables
Create a `.env` file in the root:

```env
VITE_WHATSAPP_NUMBER=919978759097
VITE_GOOGLE_MAPS_EMBED_URL=https://www.google.com/maps?q=Ahmedabad&output=embed
VITE_BUSINESS_EMAIL=hello@yashvinexus.com
```

## How Contact Form Works
This version has **no server**.
When a user submits the form, it opens the user's default email app with the inquiry details pre-filled.

If you want form submissions without backend and without opening email, later you can connect:
- Formspree
- Web3Forms
- Netlify Forms

## Deploy to Vercel
1. Upload this project to GitHub.
2. Import the repo in Vercel.
3. Keep the root directory as default.
4. Framework preset: `Vite`
5. Build command: `npm run build`
6. Output directory: `dist`
7. Add environment variables:
   - `VITE_WHATSAPP_NUMBER`
   - `VITE_GOOGLE_MAPS_EMBED_URL`
   - `VITE_BUSINESS_EMAIL`
8. Deploy.

## Custom Domain
- Open your Vercel project settings.
- Add `yashvinexus.com` and `www.yashvinexus.com`.
- Update DNS records from your domain provider.

## Important
Because this version has no backend:
- no MongoDB
- no admin panel
- no stored leads in database
- property content is managed from local files in `src/data`
