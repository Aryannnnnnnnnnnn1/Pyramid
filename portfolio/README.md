# Minimal Portfolio (React + Tailwind + Framer Motion)

- Sections: Hero, About, Skills, Projects, Testimonials, Contact
- Dark by default, simple indigo accent, minimal aesthetic
- Micro-interactions: ripple buttons, 3D tilt cards, image zoom/blur
- Working contact form via Resend to huihui3060@gmail.com (configure API key)

## Setup

1. Install deps

```
npm install
```

2. Configure env

Create `.env` in project root:

```
RESEND_API_KEY=your_resend_api_key
```

3. Run dev (client + API)

```
npm run dev
```

- App: http://localhost:5173
- API: http://localhost:5174

## Replace content
- Edit text in `src/sections/*.jsx`
- Replace placeholder images (uses picsum/pravatar) with your own
- Update name in `src/components/Nav.jsx` + footer `src/App.jsx`

## Build
```
npm run build
```

## Theme
- Toggle with the floating button (bottom-right)
- Default is dark; preference persisted in `localStorage`
