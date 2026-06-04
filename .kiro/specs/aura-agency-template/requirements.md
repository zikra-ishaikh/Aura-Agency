# Requirements Document

## Introduction

AuraAgency is a premium, production-ready Next.js 15+/16 & Tailwind CSS v4 website template targeting creative digital agencies, AI automation studios, high-end design collectives, and elite freelance developers. The template transforms a bare-bones Next.js scaffold into a fully designed, dark-mode-exclusive marketing shell featuring glassmorphism UI patterns, Bento Grid layouts, micro-interactions, and a pristine component architecture. The goal is to save teams weeks of frontend setup while delivering a high-converting, SEO-optimised, performance-first web presence out of the box.

---

## Glossary

- **Template**: The AuraAgency codebase delivered as a reusable Next.js project scaffold.
- **App_Router**: The Next.js App Router, using the `app/` directory with React Server Components (RSC) by default.
- **RSC**: React Server Component — a component rendered exclusively on the server, producing zero client-side JavaScript by default.
- **Client_Component**: A React component annotated with `"use client"` that runs in the browser and supports interactivity, state, and effects.
- **Design_System**: The collection of CSS custom properties, Tailwind v4 theme tokens, typography scales, and spacing rules that define AuraAgency's visual identity.
- **Bento_Grid**: A CSS Grid–based layout pattern that arranges content cards in a magazine-style, asymmetric multi-column and multi-row grid.
- **Glassmorphism_Card**: A UI element styled with `backdrop-filter: blur()`, semi-transparent background (`rgba(24,24,27,0.65)`), and a 1 px translucent border to simulate frosted glass.
- **Micro_Interaction**: A subtle, CSS or JS-driven animation (magnetic hover shift, smooth scale, gradient glow border pulse) triggered by user interaction.
- **Navigation**: The site-wide header component containing the brand logo, page links, and an optional CTA button.
- **Footer**: The site-wide footer component containing copyright text, social links, and supplementary navigation.
- **Hero_Section**: The primary above-the-fold section of the Home page, containing a headline, sub-headline, CTA buttons, and an animated visual element.
- **Features_Section**: A Bento Grid section on the Home page presenting key product capabilities as individual Glassmorphism_Cards.
- **Stats_Section**: A section on the Home page displaying quantitative social-proof metrics (e.g. clients served, projects delivered).
- **CTA_Section**: A call-to-action section prompting visitors to contact the agency or start a project.
- **Team_Grid**: A grid section on the About page presenting team member cards with name, role, and avatar.
- **Philosophy_Section**: A section on the About page communicating the studio's mission, values, and approach.
- **Contact_Form**: An interactive HTML form on the Contact page for capturing leads, with client-side validation.
- **Validator**: The client-side form validation logic that checks Contact_Form field values before submission.
- **Not_Found_Page**: The custom 404 error page (`app/not-found.tsx`) rendered by Next.js when no route matches.
- **Metadata_API**: The Next.js `Metadata` export used in `layout.tsx` and `page.tsx` files to set `<title>`, `<meta>`, and Open Graph tags.
- **Color_Token**: A CSS custom property defined in the `@theme` block of `globals.css` that maps semantic names to hex values.
- **src_directory**: The optional `src/` folder housing all application source code, separate from project config files.

---

## Requirements

### Requirement 1: Design System Foundation

**User Story:** As a developer using the template, I want a consistent, centrally-defined design system so that all components share the same visual language without manual colour or spacing coordination.

#### Acceptance Criteria

1. THE Design_System SHALL define the following Color_Tokens in `globals.css` using Tailwind v4 native `@theme` blocks: `--color-background` (`#09090b`), `--color-accent-primary` (`#a855f7`), `--color-accent-secondary` (`#06b6d4`), `--color-card-bg` (`rgba(24,24,27,0.65)`), `--color-border` (`rgba(255,255,255,0.08)`), `--color-text-primary` (`#fafafa`), `--color-text-muted` (`#a1a1aa`).
2. THE Design_System SHALL configure Tailwind v4's `@theme` block to expose the Color_Tokens as the following utility-class prefixes: `bg-background`, `bg-card`, `text-primary`, `text-muted`, `text-accent-primary`, `text-accent-secondary`, `border-border`, `bg-accent-primary`, `bg-accent-secondary`.
3. THE Design_System SHALL define a typography scale in the `@theme` block with the following named text-size tokens: `--text-display` (4rem / 64 px), `--text-heading` (2rem / 32 px), `--text-body` (1rem / 16 px), exposed as Tailwind utilities `text-display`, `text-heading`, and `text-body`.
4. THE Design_System SHALL set `body { background-color: var(--color-background); color: var(--color-text-primary); }` in `globals.css` so that every page renders on Zinc Black (`#09090b`) with white text by default.
5. THE `globals.css` file SHALL NOT contain a `@media (prefers-color-scheme: light)` block, and the `<html>` element SHALL NOT receive a `class="light"` or equivalent attribute, because the Template is dark-mode exclusive.

---

### Requirement 2: Project Architecture

**User Story:** As a developer adopting the template, I want a clean, scalable folder structure so that I can extend the codebase without confusion about where components belong.

#### Acceptance Criteria

1. THE Template SHALL organise all application source code under a `src/` directory with the following sub-directories: `src/app/` (App_Router pages and layouts), `src/components/ui/` (atomic UI primitives), `src/components/marketing/` (structural page-level section blocks), `src/lib/` (shared utility functions and constants). THE `tsconfig.json` SHALL define a path alias `@/*` mapping to `./src/*` so imports resolve correctly.
2. THE Template SHALL use TypeScript with `strict: true` in `tsconfig.json` across all source files.
3. THE Template SHALL use Tailwind CSS v4 with the `@tailwindcss/postcss` PostCSS plugin as the sole styling mechanism; no CSS-in-JS libraries SHALL be introduced.
4. THE App_Router SHALL define a single root layout at `src/app/layout.tsx` that: imports `src/app/globals.css`, wraps all routes with the Navigation and Footer components, and exports a `Metadata` object with `title: "AuraAgency"` and a `description` of at least 50 characters.
5. THE Template SHALL NOT include a `middleware.ts` file anywhere in the `src/` directory.

---

### Requirement 3: Navigation Component

**User Story:** As a site visitor, I want a persistent navigation header so that I can access any page from any location on the site.

#### Acceptance Criteria

1. THE Navigation SHALL render with the brand name "AuraAgency" and page links to Home (`/`), About (`/about`), and Contact (`/contact`).
2. THE Navigation SHALL apply `backdrop-filter: blur(12px)` and a 1 px bottom border with colour `var(--color-border)` so that it appears visually separated from page content.
3. THE Navigation SHALL be `position: sticky` at `top: 0` with `z-index: 100` or higher to overlay all page content during scroll.
4. IF a visitor's viewport width is less than 768 px, THE Navigation SHALL display a hamburger menu toggle button. WHEN the toggle is activated, THE Navigation SHALL reveal the page links in a vertically stacked drawer. WHEN the drawer is open, THE Navigation SHALL close it if the toggle is activated again OR if a navigation link inside the drawer is selected.
5. WHERE the hamburger menu is required (viewport < 768 px), THE Navigation SHALL be implemented as a Client_Component to support the open/close toggle state, while the desktop version MAY remain an RSC.
6. THE Navigation SHALL include an `aria-label` describing the open/close purpose on the hamburger button, an `aria-expanded` attribute reflecting the current drawer state, `role="navigation"` on the `<nav>` element, and SHALL close the drawer and return focus to the hamburger button when the Escape key is pressed while the drawer is open.
7. THE Navigation SHALL apply a visually distinct style (e.g. `color: var(--color-accent-primary)` or an underline) to the link whose `href` matches the current route, so visitors can identify their active page.

---

### Requirement 4: Footer Component

**User Story:** As a site visitor, I want a branded footer so that I can find supplementary links and copyright information at the bottom of every page.

#### Acceptance Criteria

1. THE Footer SHALL render as an RSC containing the brand name "AuraAgency", a copyright notice displaying `© {currentYear} AuraAgency` (where `currentYear` is derived server-side at render time), and links to Home (`/`), About (`/about`), and Contact (`/contact`).
2. THE Footer SHALL apply a 1 px top border with colour `var(--color-border)` to visually separate it from page content.
3. THE Footer SHALL be responsive: on viewports ≥ 768 px, THE Footer SHALL display a 3-column grid layout; on viewports < 768 px, THE Footer SHALL collapse to a single-column stacked layout.

---

### Requirement 5: Home Page — Hero Section

**User Story:** As a prospective client visiting the site, I want an immediately compelling above-the-fold experience so that I understand what AuraAgency offers within three seconds.

#### Acceptance Criteria

1. THE Hero_Section SHALL render as an RSC and display a primary headline with a font size of at least 48 px (3rem), a supporting sub-headline, a primary "Start a Project" button linking to `/contact`, and a secondary "View Our Work" button linking to `/#features`.
2. THE Hero_Section SHALL apply a CSS radial gradient behind the headline that includes `var(--color-accent-primary)` at its centre, transitioning to `var(--color-background)` at its edge.
3. WHEN a visitor hovers over a CTA button in the Hero_Section, THE Hero_Section SHALL apply a `transform: scale(1.04)` and a box-shadow or border glow using `var(--color-accent-primary)` over a `transition` of 200 ms `ease-out`, implemented using CSS only (no JavaScript event handlers).
4. THE Hero_Section SHALL include an animated decorative element (floating gradient orbs implemented as `position: absolute` divs with CSS `@keyframes` animation, or an equivalent CSS-only technique) with an animation duration between 3 s and 8 s and set to loop infinitely.
5. IF a visitor's viewport width is less than 768 px, THE Hero_Section SHALL stack all elements vertically (flex-direction: column) AND reduce the primary headline font size to at least 32 px (2rem).

---

### Requirement 6: Home Page — Features Section

**User Story:** As a prospective client, I want to quickly grasp the agency's core capabilities so that I can decide whether their services fit my needs.

#### Acceptance Criteria

1. THE Features_Section SHALL render as an RSC inside a Bento_Grid layout with at least six capability cards displayed in a CSS Grid of at least 3 columns × 2 rows on viewports ≥ 768 px, with at least one card spanning more than one column or row to create an asymmetric layout.
2. EACH capability card in the Features_Section SHALL be styled as a Glassmorphism_Card with `backdrop-filter: blur(16px)`, `background-color: var(--color-card-bg)`, and a 1 px border with colour `var(--color-border)`.
3. EACH capability card SHALL contain an icon (SVG or Unicode emoji), a short title of at most 40 characters, and a description of at most 120 characters.
4. WHEN a visitor hovers over a Glassmorphism_Card in the Features_Section, THE Features_Section SHALL apply a CSS border-glow effect that transitions from `var(--color-border)` to a gradient of `var(--color-accent-primary)` and `var(--color-accent-secondary)` over a `transition` of 300 ms using CSS `transition` (no JavaScript).
5. WHEN a visitor's viewport width drops below 768 px, THE Features_Section SHALL collapse the Bento_Grid so that each capability card occupies the full container width (single-column layout).
6. IF a visitor's viewport width is at least 768 px, THE Features_Section SHALL display the Bento_Grid in the minimum 3-column layout defined in criterion 1.

---

### Requirement 7: Home Page — Stats Section

**User Story:** As a prospective client, I want to see quantifiable social proof so that I can trust the agency's experience and scale.

#### Acceptance Criteria

1. THE Stats_Section SHALL render as an RSC displaying at least four static metrics, each consisting of a numeric value rendered at a font size of at least 2rem and a label of at most 30 characters (e.g. "150+" / "Clients Served", "300+" / "Projects Delivered", "8 Years" / "Industry Experience", "99%" / "Client Satisfaction").
2. THE Stats_Section SHALL apply `color: var(--color-accent-primary)` to each numeric value element.
3. IF a visitor's viewport width is less than 768 px, THE Stats_Section SHALL display the metrics in a 2-column grid layout.
4. IF a visitor's viewport width is at least 768 px, THE Stats_Section SHALL display all metrics in a single horizontal row (1-row grid or flex layout).

---

### Requirement 8: Home Page — CTA Section

**User Story:** As a prospective client who has scrolled through the home page, I want a final prompt to take action so that I know how to initiate contact.

#### Acceptance Criteria

1. THE CTA_Section SHALL render as an RSC with a headline of at least 32 px (2rem) font size, a supporting sentence of at most 160 characters, and a primary CTA button linking to `/contact`.
2. THE CTA_Section SHALL apply a CSS linear or radial gradient background that includes both `var(--color-accent-primary)` and `var(--color-accent-secondary)` as colour stops, so the section is visually distinct from the surrounding `var(--color-background)` sections.
3. WHEN a visitor hovers over the CTA button in the CTA_Section, THE CTA_Section SHALL apply `transform: scale(1.04)` and a box-shadow or border glow using `var(--color-accent-primary)` over a `transition` of 200 ms `ease-out`, implemented using CSS only (no JavaScript event handlers).
4. THE CTA_Section SHALL be responsive: IF a visitor's viewport width is less than 768 px, THE CTA_Section SHALL stack its headline, supporting sentence, and button vertically in a single-column layout.

---

### Requirement 9: About Page

**User Story:** As a prospective client who wants to know who they would be working with, I want an About page that presents the team and the studio's philosophy so that I can assess culture fit.

#### Acceptance Criteria

1. THE App_Router SHALL expose an About page at the `/about` route via `src/app/about/page.tsx`, rendered as an RSC.
2. THE About page SHALL export a `Metadata` object with a `title` that includes both "About" and "AuraAgency" (e.g. "About — AuraAgency") and a `description` of at least 50 characters.
3. THE Team_Grid SHALL display at least four team member cards, each containing a circular avatar placeholder of at least 80 px diameter, a name, and a role title, arranged in a responsive CSS Grid: 2 columns on viewports < 768 px, 3 columns on viewports 768–1023 px, and 4 columns on viewports ≥ 1024 px.
4. THE Philosophy_Section SHALL display the studio's mission statement and at least three core values, each core value presented as a Glassmorphism_Card with `backdrop-filter: blur(16px)`, `background-color: var(--color-card-bg)`, and a 1 px border with colour `var(--color-border)`.
5. WHEN a visitor hovers over a team member card in the Team_Grid, THE Team_Grid SHALL apply `transform: scale(1.03)` with `transition: transform 200ms ease-out` using CSS only (no JavaScript event handlers).

---

### Requirement 10: Contact Page

**User Story:** As a prospective client ready to reach out, I want a Contact page with a validated form so that I can send an enquiry without errors going unnoticed.

#### Acceptance Criteria

1. THE App_Router SHALL expose a Contact page at the `/contact` route via `src/app/contact/page.tsx`.
2. THE Contact page SHALL export a `Metadata` object with a descriptive `title` and `description` for SEO.
3. THE Contact_Form SHALL be implemented as a Client_Component with the following fields: Name (text, required, ≥ 2 and ≤ 100 characters), Email (email, required, valid RFC-5321 format), Subject (text, required, ≥ 5 and ≤ 150 characters), and Message (textarea, required, ≥ 20 and ≤ 2000 characters).
4. WHEN a visitor submits the Contact_Form with one or more empty required fields, THE Validator SHALL display an inline error message beneath each invalid field indicating the field is required, without reloading the page.
5. WHEN a visitor submits the Contact_Form with an Email field value that does not match a valid email format, THE Validator SHALL display an inline error message "Please enter a valid email address" beneath the Email field without reloading the page.
6. WHEN a visitor submits the Contact_Form with all fields valid, THE Contact_Form SHALL replace the form with a success confirmation message (e.g. "Thank you — we'll be in touch shortly.") that persists until the page is refreshed, without navigating away.
7. THE Contact_Form SHALL apply `outline: 2px solid var(--color-accent-primary)` focus-ring styles on all input and textarea elements to ensure keyboard-navigable accessibility.
8. IF a visitor's viewport width is at least 768 px, THE Contact page SHALL display the agency's contact details (email address and location) alongside the Contact_Form in a two-column layout.
9. IF a visitor's viewport width is less than 768 px, THE Contact page SHALL display the contact details and Contact_Form in a single-column stacked layout.

---

### Requirement 11: Custom 404 Page

**User Story:** As a visitor who navigates to a non-existent route, I want a branded 404 page so that I remain oriented within the site and have a clear path back.

#### Acceptance Criteria

1. THE App_Router SHALL render a custom 404 page via `src/app/not-found.tsx` as an RSC whenever a route is not matched.
2. THE Not_Found_Page SHALL display a "404" indicator at a font size of at least 6rem styled with `color: var(--color-accent-primary)`, a message communicating that the requested page was not found and inviting navigation back to the site, and a "Return Home" link to `/`.
3. THE Not_Found_Page SHALL set `background-color: var(--color-background)`, `color: var(--color-text-primary)`, and use the `text-heading` and `text-body` typography scale tokens defined in the Design_System, maintaining visual brand consistency.
4. THE Not_Found_Page SHALL export a `Metadata` object with `title: "404 — Page Not Found"` and a `description` of at least 20 characters.

---

### Requirement 12: SEO and Metadata

**User Story:** As the template owner, I want all pages to have proper metadata so that they are indexed correctly by search engines and share well on social platforms.

#### Acceptance Criteria

1. THE Metadata_API SHALL be used in each of the four page files (Home, About, Contact, Not_Found) to export a `Metadata` object containing a `title` of at most 60 characters and a `description` of at most 160 characters.
2. THE root layout (`src/app/layout.tsx`) SHALL define a `metadataBase` set to an absolute URL (protocol + hostname, e.g. `https://www.auraagency.com`) so that relative Open Graph image paths resolve correctly.
3. THE root layout SHALL export a default `Metadata` object with `title: "AuraAgency"`, a site-wide description, and Open Graph fields `type: "website"`, `title`, `description`, and `images` (at least one image entry).
4. THE root layout `Metadata` SHALL include `twitter: { card: "summary_large_image" }` to enable rich Twitter/X card previews when the site URL is shared.
5. WHEN a page defines its own `Metadata` export with a `title` and `description`, THEN that page SHALL render with the page-level `title` and `description` in the `<head>`, while the root layout's Open Graph `type` and `images` fields SHALL remain unchanged.

---

### Requirement 13: Accessibility Baseline

**User Story:** As a developer shipping the template to clients, I want a minimum accessibility baseline so that the produced sites are usable by keyboard and screen-reader users.

#### Acceptance Criteria

1. THE Template SHALL ensure all interactive elements (buttons, links, form inputs) have a visible focus indicator of at least `outline: 2px solid var(--color-accent-primary)` with `outline-offset: 2px`.
2. THE Template SHALL provide descriptive `alt` attributes on all `<img>` or `next/image` elements; decorative images SHALL use `alt=""`.
3. THE Template SHALL use semantic HTML elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`, `<article>`, `<h1>`–`<h6>`) throughout all page and component files; each page SHALL contain exactly one `<main>` element and exactly one `<h1>` element.
4. THE Contact_Form SHALL associate each `<label>` element with its corresponding input via matching `htmlFor` and `id` attributes.
5. WHEN the mobile Navigation drawer is open, THE Navigation SHALL trap keyboard focus within the drawer until it is closed; WHEN the drawer closes, THE Navigation SHALL return focus to the hamburger toggle button.

---

### Requirement 14: Performance Baseline

**User Story:** As the template owner, I want the site to be fast by default so that end clients get strong Core Web Vitals scores without additional optimisation work.

#### Acceptance Criteria

1. THE Template SHALL use `next/image` for all raster images; no bare `<img>` elements SHALL appear in any source file.
2. THE Template SHALL use `next/font/google` for all custom fonts configured with `display: 'swap'` to prevent render-blocking font loads.
3. THE Template SHALL render all non-interactive sections (Navigation on desktop, Hero_Section, Features_Section, Stats_Section, CTA_Section, Team_Grid, Philosophy_Section, Footer) as RSC.
4. THE Template SHALL NOT import any third-party animation library (e.g. Framer Motion, GSAP, anime.js) in any source file.
5. ALL Micro_Interactions defined in this spec SHALL be implemented exclusively with CSS `transition`, `transform`, and `@keyframes` properties; no JavaScript `addEventListener` or inline `onMouseEnter`/`onMouseLeave` handlers SHALL be used to drive Micro_Interaction animations.
6. ALL `next/image` elements rendered above the fold (within the Hero_Section) SHALL include the `priority` prop to ensure they are preloaded and do not negatively impact LCP.
