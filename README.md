# Matthew Dodger — Portfolio

A futuristic, terminal-themed developer portfolio built with **Next.js 16**, **React 19**, **Tailwind CSS 4**, and **shadcn/ui**. Features a dark cyberpunk aesthetic with smooth animations powered by Framer Motion.

## Tech Stack

| Layer          | Technology                                      |
| -------------- | ----------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org/) (App Router)  |
| UI Library     | [React 19](https://react.dev/)                  |
| Styling        | [Tailwind CSS 4](https://tailwindcss.com/)      |
| Components     | [shadcn/ui](https://ui.shadcn.com/)             |
| Animation      | [Framer Motion](https://www.framer.com/motion/) |
| Icons          | [Lucide React](https://lucide.dev/)             |
| Font           | IBM Plex Mono (Google Fonts)                    |
| Language       | TypeScript                                      |

## Project Structure

```
portfolio/
├── public/                  # Static assets (logo, robots.txt)
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles & Tailwind imports
│   │   ├── layout.tsx       # Root layout with metadata & font
│   │   └── page.tsx         # Home page (portfolio sections)
│   ├── components/
│   │   ├── portfolio/       # Portfolio section components
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── navbar.tsx
│   │   │   ├── portfolio-gallery.tsx
│   │   │   ├── portfolio-list.tsx
│   │   │   ├── services.tsx
│   │   │   └── skills.tsx
│   │   ├── ui/              # shadcn/ui primitives
│   │   └── ui-portfolio/    # Custom themed UI components
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── page-transition.tsx
│   │       ├── section-title.tsx
│   │       └── terminal-window.tsx
│   ├── hooks/
│   │   ├── use-mobile.ts    # Mobile breakpoint detection
│   │   └── use-toast.ts     # Toast notification hook
│   └── lib/
│       └── utils.ts         # cn() utility (clsx + tailwind-merge)
├── components.json          # shadcn/ui configuration
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies & scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 18+ (or Bun)
- npm / yarn / pnpm / bun

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## Features

- **Terminal-inspired UI** — Monospace font, command-line aesthetic, glowing accents
- **Scroll progress bar** — Gradient progress indicator at the top of the page
- **Cursor glow effect** — Subtle radial gradient follows the mouse on desktop
- **Smooth scroll navigation** — Section-based nav with active state tracking
- **Mobile responsive** — Collapsible hamburger menu with animated overlay
- **Animated sections** — Framer Motion entrance animations throughout
- **Toast notifications** — shadcn/ui toast system ready for use

## Color Palette

| Token          | Hex       | Usage                    |
| -------------- | --------- | ------------------------ |
| Background     | `#011629` | Deep navy background     |
| Text Primary   | `#F5F7FA` | Near-white text          |
| Text Secondary | `#BFC8D1` | Muted gray text          |
| Accent Orange  | `#E97451` | Primary accent color     |
| Accent Teal    | `#7EE7C4` | Secondary accent         |
| Accent Blue    | `#5AA8FF` | Tertiary accent          |
| Border         | `#173248` | Subtle border color      |
| Border Light   | `#38546A` | Lighter border / outline |

## License

Private — All rights reserved.