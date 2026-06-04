# 🌌 AuraAgency — Premium Next.js 16 & Tailwind CSS v4 Boilerplate Template

A blazing-fast, dark-mode exclusive marketing shell and developer boilerplate designed for creative agencies, AI automation studios, and elite freelancers. 

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zikra-ishaikh/Aura-Agency)

---

## 🎨 Design System & Aesthetic DNA

- **Dark-Mode Base**: Zinc Black (`#09090b`) canvas utilizing a mesh grid and glowing purple/cyan blooms.
- **Frosted Glass Cards**: Semi-transparent frosted glass panels (`rgba(24, 24, 27, 0.65)`) with translucent 1px borders.
- **Spotlight Hover Effects**: Mouse cursor tracking radial glows that follow the pointer across card faces and card borders.
- **Magnetic Interactivity**: Physics-aligned magnetic translate shifts applied to call-to-actions on hover.
- **Stark Contrast Typography**: Outfitted with bold tracking headers (Plus Jakarta Sans) mixed with monospaced terminal text (Geist Mono).

---

## 🏗️ Folder Architecture

We decouple primitive UI items from structural marketing sections:

```txt
src/
├── app/
│   ├── actions.ts           # Contact validation Server Action
│   ├── globals.css          # Tailwind CSS v4 variable theme overrides
│   ├── layout.tsx           # Global HTML wrapper and font loaders
│   ├── page.tsx             # Home landing page with animated Hero
│   ├── about/
│   │   └── page.tsx         # Philosophy & team grid showcase
│   ├── contact/
│   │   └── page.tsx         # Contact Form using React 19 useActionState
│   └── not-found.tsx        # Custom 404 route featuring a portal animation
├── components/
│   ├── ui/
│   │   ├── glow-card.tsx    # Cursor spotlight tracking card panels
│   │   └── magnetic.tsx     # Smooth physical magnetic pull wrapper
│   └── marketing/
│       ├── navbar.tsx       # Frosted glass responsive header
│       ├── footer.tsx       # Custom SVG social widget footbar
│       └── bento-grid.tsx   # Premium Bento Grid capability structure
```

---

## ⚡ Technical Highlights

- **Framework**: Next.js 16+ (App Router) using React Server Components (RSC).
- **Styling**: Tailwind CSS v4 utilizing native CSS-first `@theme` variables.
- **Forms**: Powered by React 19's new `useActionState` and Server Actions for validated submissions.
- **Strict TypeScript**: Full type safety configured for variables and route parameters.
- **Compiling**: Compiled and bundled with Turbopack for near-instant rendering.

---

## 🚀 Getting Started

### 1. Clone the project
```bash
git clone https://github.com/zikra-ishaikh/Aura-Agency.git
cd Aura-Agency
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

### 4. Build for production
```bash
npm run build
```

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
