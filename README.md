# Faisal Hussain — Senior Solutions Architect & Engineering Leader Portfolio

> Modern portfolio engineered with **Astro 5 Islands Architecture**, **React 19**, **Tailwind CSS**, and configured for edge deployment on **Cloudflare Pages**.

---

## ⚡ Architecture Highlights

- **Astro Islands Architecture**: Static HTML generated at build time with 0 KB initial JavaScript for static sections (Hero, About, Experience, Skills, Footer).
- **Interactive Islands**: Dynamic isolated islands powered by React 19:
  - `HeaderIsland`: Sticky glassmorphic navigation, active section scroll-spy, and anti-FOUC dark/light theme switch.
  - `ProjectsIsland`: Dynamic category filtering (AI & Intelligence, Web Platforms, Mobile & Web3).
  - `ContactIsland`: One-click copy-to-clipboard for direct email/phone with toast feedback and transmission form.
- **Design Standard**: Polished Obsidian & Slate aesthetic inspired by high-end design systems (Linear, Vercel, Stripe), micro-borders, glassmorphism, responsive typography, and refined interaction states.
- **Cloudflare Pages Edge Ready**: Configured with `@astrojs/cloudflare` adapter and `wrangler.json` / `wrangler.toml` targeting `./dist`.

---

## 🛠️ Tech Stack

- **Framework**: [Astro 5](https://astro.build/)
- **Islands UI**: [React 19](https://react.dev/), [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/), [PostCSS](https://postcss.org/), [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)
- **Deployment & Edge**: [Cloudflare Pages](https://pages.cloudflare.com/) via `@astrojs/cloudflare` and `wrangler`
- **Language**: TypeScript (strict mode)

---

## 📁 Directory Structure

```
my-portfolio/
├── astro.config.mjs         # Astro & Cloudflare adapter configuration
├── package.json             # Scripts & dependencies
├── postcss.config.js        # PostCSS with Tailwind & Autoprefixer
├── tailwind.config.js       # Design tokens, fonts, and theme extensions
├── tsconfig.json            # Strict TypeScript configuration
├── wrangler.json            # Cloudflare Pages deployment configuration
├── wrangler.toml            # Cloudflare Pages TOML configuration
├── public/                  # Static assets & redirects
│   ├── favicon.svg
│   └── _redirects
└── src/
    ├── assets/              # Optimized WebP assets & project previews
    ├── components/
    │   ├── layout/
    │   │   ├── HeaderIsland.tsx   # Interactive navbar & theme island
    │   │   └── Footer.astro       # Clean architectural footer
    │   └── sections/
    │       ├── Hero.astro         # High-impact architectural hero
    │       ├── About.astro        # Narrative & 4 core pillars
    │       ├── Experience.astro   # 15-year career timeline
    │       ├── Skills.astro       # Capabilities & tooling matrix
    │       ├── ProjectsIsland.tsx # Filterable projects island
    │       └── ContactIsland.tsx  # Interactive contact & inquiry island
    ├── layouts/
    │   └── Layout.astro     # Global HTML shell & theme provider
    ├── pages/
    │   └── index.astro      # Root page entrypoint
    └── styles/
        └── global.css       # Obsidian/slate design system & custom utilities
```

---

## 🚀 Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Local Development Server
```bash
npm run dev
```
Starts the local development server with Hot Module Replacement (HMR).

### 3. Production Build
```bash
npm run build
```
Generates the fully optimized static and island bundles in `./dist`.

### 4. Local Production Preview
```bash
npm run preview
```
Previews the production build locally.

---

## ☁️ Cloudflare Pages Deployment

### Option A: Direct CLI Deployment via Wrangler
Ensure you are authenticated with Cloudflare (`npx wrangler login`), then run:
```bash
npm run deploy
```
*(Executes `wrangler pages deploy dist`)*

### Option B: Cloudflare Pages Dashboard / Git Integration
Connect your GitHub repository to Cloudflare Pages with these build settings:
- **Framework Preset**: `Astro`
- **Build Command**: `npm run build`
- **Build Output Directory**: `dist`
- **Root Directory**: `/`
- **Environment Variable**: `NODE_VERSION = 22`
