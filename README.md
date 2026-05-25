# 💍 Wedding Invitation — Digital App

A beautiful mobile-first digital wedding invitation built with **React**, **Tailwind CSS v4**, and **Vite**.

---

## ✏️ Edit Your Details

All wedding content lives in one file:

```
src/config.js
```

Open it and fill in:
- Partner names
- Wedding date
- Venue name, address, Maps URL, and photo
- Programme (schedule by day)
- Menu courses
- Important notes
- RSVP form URL and deadline

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deploy (Free)

### Vercel (Recommended)
1. Push project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Deploy
4. Add a custom domain (e.g. `amara-ethan.com`)

### Netlify
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

---

## 📁 Project Structure

```
src/
├── config.js              ← ✏️ EDIT ALL YOUR WEDDING DETAILS HERE
├── App.jsx                ← Main layout orchestration
├── index.css              ← Tailwind v4 + fonts + animations
├── lib/
│   └── utils.js           ← cn() helper (shadcn standard)
└── components/
    ├── EnvelopeScreen.jsx ← Wax seal opening animation
    ├── Section.jsx        ← Scroll-reveal section wrapper
    ├── OrnamentDivider.jsx
    ├── Footer.jsx
    └── sections/
        ├── HeroSection.jsx      ← Cover: names, date, photo
        ├── CountdownSection.jsx ← Live countdown timer
        ├── VenueSection.jsx     ← Venue details + map buttons
        ├── ProgrammeSection.jsx ← Day-by-day schedule
        ├── MenuSection.jsx      ← Dinner menu
        ├── NotesSection.jsx     ← Important notes for guests
        └── RSVPSection.jsx      ← RSVP button + email
```

---

## 🎨 Customizing Design

All colors and fonts are in `src/index.css` under `@theme`:

```css
@theme {
  --color-parchment: #f7f0e8;   /* Page background */
  --color-blush: #f2e8e0;       /* Alternating section bg */
  --color-gold: #c9a96e;        /* Accent color */
  --color-brown: #3a2e2a;       /* Primary text */
  --font-display: 'Cormorant Garamond', serif;
  --font-script: 'Great Vibes', cursive;
  --font-body: 'Raleway', sans-serif;
}
```

---

## 📸 Adding Your Own Photo

In `src/config.js`, update `venue.imageUrl` with:
- A public image URL (Unsplash, Cloudinary, etc.)
- Or import a local file: `import photo from './assets/couple.jpg'` and use it as the value

---

## 📋 RSVP Setup

1. Create a free form at [tally.so](https://tally.so) or [formspree.io](https://formspree.io)
2. Copy the form URL
3. Paste it into `config.js` → `rsvp.formUrl`

---

Made with ❤️ — Customize freely for your special day.
