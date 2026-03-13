# Product Requirements Document (PRD)
## Bosque Natural — Shopify E-Commerce Website Rebuild
**Version:** 1.0  
**Date:** March 2026  
**Prepared for:** Claude Code  
**Live Store URL:** https://www.elbosqueoriental.com  
**Target Launch:** Within 1 month

---

## 1. Project Overview

### 1.1 Business Background

Bosque Natural (trading online as *El Bosque Oriental*) is a family-run herbolario (herbalist/health shop) and Traditional Chinese Medicine (TCM) clinic based in Spain. The business has operated for over 40 years and combines two services under one roof:

1. **Herbolario / Supplement Store** — 200+ natural health products including supplements, vitamins, and natural oils from leading brands (Solgar, A.Vogel, Sura Vitasan, Lamberts, etc.)
2. **Acupuncture Clinic** — a licensed Chinese acupuncture practice (Acupuntura China)

The physical store has warm, wood-panelled interiors and a deep-rooted reputation in the local community. The brand identity features a red Chinese seal stamp (森 — meaning "forest") paired with the wordmark "bosque natural" in the Gabarito typeface, conveying the East-meets-West philosophy of the business.

### 1.2 Problem Statement

The current Shopify store (elbosqueoriental.com) was set up but never properly configured. Key issues:
- Default Shopify placeholder copy is still visible ("Welcome to our store", unnamed collections)
- Products show €0.00 pricing and "Out of Stock" status
- No brand identity applied — logo, colours, and fonts are absent
- No social proof (reviews, testimonials)
- No About/brand story page
- No product categories or collections organised
- Does not reflect the trust and credibility of a 40+ year established business

### 1.3 Goals

- Make the store look **professional, trustworthy, and complete** within 1 month
- Apply the **Bosque Natural brand identity** consistently across all pages
- Organise 200+ products into logical **categories and collections**
- Add **multilingual support** (Spanish primary, English and other EU languages secondary)
- Enable a **blog** for educational health content
- Surface the physical store's **40-year heritage** as a key trust signal
- **Ship to Spain and the rest of the EU**
- **Lay the foundation for Bosque Natural's own private-label supplement line** — the store must be architected from the start to support this future transition
- **Collect customer and product data** to inform which supplement to develop first (see Section 11 — Data Strategy)

---

## 2. Target Audience

| Segment | Description |
|---|---|
| Primary | Health-conscious Spanish adults (30–55) looking for supplements and natural health products online |
| Secondary | Younger wellness enthusiasts (18–30) who research products before buying |
| Tertiary | Elderly customers who are existing physical shop regulars needing online access |
| Geographic | Spain (primary), rest of EU (secondary) |

---

## 3. Brand Identity

### 3.1 Brand Story (to use in copywriting)

> Bosque Natural is a family-run herbolario and acupuncture clinic with over 40 years of experience in natural health and traditional Chinese medicine. Founded in Spain, we believe in the power of nature and the wisdom of the East — bringing you carefully selected supplements, vitamins, and natural products to support your wellbeing. From our warm wooden shelves in our physical store to your door, every product we offer is one we trust.

### 3.2 Logo

The brand uses the **"bosque natural" logo** — a Chinese seal stamp (森, meaning "forest") paired with the rounded wordmark "bosque natural". Multiple logo variants are available:

- **Primary (colour):** Red seal + black wordmark — use on white/light backgrounds
- **Black version:** Black seal + black wordmark — for monochrome contexts
- **White version:** White seal + white wordmark — for dark backgrounds
- **Stamp only:** Red seal icon — for favicon and small contexts

Logo files are located in `/uploads/BN-*.png` and `/uploads/BNStampVector.svg`.

**Favicon:** Use `BN-StampFilled.png` (red stamp on white) or `BNStampVector.svg`.

### 3.3 Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Black | `#111111` | Headings, primary text, footer background |
| Red | `#d60036` | Accents, CTA buttons, logo stamp |
| Forest Green | `#00592e` | Secondary accents, trust badges, labels |
| White | `#ffffff` | Backgrounds, cards |

### 3.4 Typography

| Role | Font | Notes |
|---|---|---|
| Headings / Titles | LT Saeada | Bold, large scale |
| Body / Descriptions | Gabarito | Regular weight |
| Description small | Gabarito | Light weight |

> **Note for Claude Code:** LT Saeada may not be available as a Google Font. If unavailable, substitute with **Nunito** (similar rounded sans-serif) for headings. Gabarito is available on Google Fonts.

### 3.5 Design Style

**Design inspiration — study and draw from these reference stores:**

| Store | URL | What to borrow |
|---|---|---|
| Solgar | solgar.com | Premium supplement branding, clean product photography, ingredient storytelling |
| iHerb | iherb.com | Category navigation, filter UX, trust signals, review system, multilingual |
| Naturitas | naturitas.es | Spanish-market natural health UX, collection structure, blog format |
| Holland & Barrett | hollandandbarrett.com | Editorial health content, benefit-led product descriptions, loyalty feel |

**Visual principles:**
- **Minimal and clean** — white backgrounds, lots of breathing room
- Black (`#111111`) for all headings and primary text
- Red (`#d60036`) for CTAs, accents, and the logo stamp
- Green (`#00592e`) for trust/nature signals and labels
- Warm lifestyle photography from the physical store
- Benefit-led product cards (e.g. "For joints", "For energy") like Solgar and H&B
- Editorial-style blog like Holland & Barrett — content that educates, not just sells
- Prominent review scores on collection pages like iHerb

---

## 4. Site Architecture

### 4.1 Navigation Structure

```
Header:
  Logo (left)
  Nav links: Inicio | Catálogo | Colecciones | Blog | Nosotros | Contacto
  Icons (right): Search | Language switcher | Cart

Footer:
  Logo + Brand tagline
  Links: Política de privacidad | Política de reembolso | Aviso legal | Contacto
  Payment icons
  Social media links (if applicable)
  Physical store address + phone: 952 584 736
```

### 4.2 Pages Required

| Page | Priority | Notes |
|---|---|---|
| Homepage | P0 | Full redesign — see Section 5.1 |
| Collection/Category pages | P0 | Organised product browsing |
| Product Detail Page | P0 | Full descriptions, trust signals |
| About Us / Nosotros | P0 | Brand story, 40-year heritage, physical store photos |
| Blog | P1 | Educational health content |
| Contact | P1 | Phone, address, map, contact form |
| Search Results | P1 | With filters |
| Cart & Checkout | P2 | Already configured — minor trust signal improvements |

### 4.3 Collections / Product Categories

Organise the 200+ products into the following collections (create in Shopify admin):

1. **Vitaminas y Minerales** — Vitamins & Minerals
2. **Suplementos Deportivos** — Sports Supplements
3. **Aceites Naturales** — Natural Oils (e.g., Almond Oil, Evening Primrose)
4. **Omega y Ácidos Grasos** — Omega & Fatty Acids (Fish Oil, etc.)
5. **Digestión y Bienestar** — Digestion & Wellbeing
6. **Colesterol y Corazón** — Cholesterol & Heart Health
7. **Articulaciones y Huesos** — Joints & Bones
8. **Cabello y Piel** — Hair & Skin
9. **Infusiones y Tés** — Herbal Teas
10. **Ofertas** — Sale / Deals

---

## 5. Page Specifications

### 5.1 Homepage

**Section 1 — Hero Banner**
- Full-width hero image (use physical store interior photos or a clean lifestyle wellness image)
- Headline: "Tu salud natural, con 40 años de experiencia"
- Subheadline: "Suplementos, vitaminas y productos naturales seleccionados por expertos. Envíos a toda España y Europa."
- CTA button (red): "Ver Productos" → links to /collections/all
- Secondary CTA (outlined): "Conócenos" → links to /pages/nosotros

**Section 2 — Trust Bar (below hero)**
- 4 icons in a horizontal row:
  - ✓ Más de 40 años de experiencia
  - ✓ Envíos a España y Europa
  - ✓ Productos naturales seleccionados
  - ✓ Asesoramiento experto

**Section 3 — Featured Collections**
- Grid of 4–6 collection cards with image, name, and "Ver colección" link
- Pull from the collections listed in Section 4.3

**Section 4 — Bestsellers / Featured Products**
- Horizontal scroll or 4-column grid of featured products
- Show: product image, name, price, "Añadir al carrito" button

**Section 5 — Brand Story Teaser**
- Split layout: left = photo of physical store or family, right = 2–3 sentence brand story
- CTA: "Nuestra historia" → /pages/nosotros

**Section 6 — Blog Preview** (if blog has posts)
- 3 most recent blog article cards

**Section 7 — Contact/Location Banner**
- Physical store address + phone number: 952 584 736
- Google Maps embed or link
- Opening hours (if available)

---

### 5.2 Product Detail Page (PDP)

Each product page must include:
- High-quality product image(s)
- Product name and brand
- Price (fix all €0.00 pricing)
- Stock status (fix all "Out of Stock" to correct status)
- Full product description
- Key benefits (bullet points)
- Ingredients / composition
- Recommended dosage
- "Añadir al carrito" button (red, prominent)
- Trust signals: "Envío a España y Europa", "Devoluciones aceptadas"
- Related products section at the bottom

---

### 5.3 About Us Page (/pages/nosotros)

Content sections:
1. **Hero:** "40 años cuidando tu salud" — with a photo of the physical store exterior
2. **Our Story:** Brand story text (see Section 3.1) with store interior photos
3. **Our Services:** Two columns — Herbolario / Acupunctura China
4. **Our Values:** Natural, Expert, Trusted, Family
5. **Find Us:** Address, phone, map embed

---

### 5.4 Blog

- URL: /blogs/salud-natural
- Categories/tags: Nutrición, Suplementos, Medicina Tradicional China, Consejos de Salud
- Article template: Hero image, author, date, body text, related articles
- 3 placeholder/starter articles should be created as drafts

---

### 5.5 Contact Page

- Contact form (name, email, subject, message)
- Phone: 952 584 736
- Physical address
- Google Maps embed
- Opening hours

---

## 6. Functional Requirements

### 6.1 Search & Filtering

| Feature | Requirement |
|---|---|
| Search bar | Visible in header at all times; autocomplete/predictive results |
| Filter by collection | Sidebar or top filter bar on collection pages |
| Filter by brand | Dropdown filter (Solgar, A.Vogel, Sura Vitasan, Lamberts, Marnys, etc.) |
| Filter by price | Slider or range selector |
| Filter by benefit | Dropdown (Digestión, Articulaciones, Corazón, etc.) |
| Sort options | Price (asc/desc), Name (A–Z), Newest |

### 6.2 Multilingual Support

- **Primary language:** Spanish (es)
- **Secondary:** English (en), and at minimum French (fr) or German (de)
- Use Shopify's built-in Markets / Translate & Adapt app for language management
- Language switcher in header (flag icons or dropdown)
- All static copy must be provided in Spanish; Claude Code should translate to English

### 6.3 Cart & Checkout

- Already configured — no rebuild required
- Add trust badges near checkout: "Pago seguro", "SSL", payment method icons
- Ensure shipping rates for Spain + EU are configured

### 6.4 Mobile Responsiveness

Mobile is a primary target — not an afterthought. The majority of Spanish e-commerce traffic is mobile. Every page must be designed and tested mobile-first, taking inspiration from how iHerb and Holland & Barrett handle mobile UX.

**General Principles**
- Design mobile-first, then scale up to desktop
- Test every page at 375px (iPhone SE), 390px (iPhone 14), and 414px (iPhone Plus) widths
- All tap targets minimum 44x44px
- No horizontal scrolling on any page
- Font sizes: minimum 16px for body text (prevents iOS auto-zoom on inputs)

**Header & Navigation**
- Sticky header on mobile — stays visible when scrolling
- Hamburger menu (☰) replaces full nav links on mobile
- Slide-out drawer menu with full navigation tree
- Search bar accessible with one tap from header
- Cart icon with item count always visible in header
- Logo scales down appropriately — use stamp-only version (`BN-StampFilled.png`) if wordmark is too wide

**Homepage**
- Hero section: full-screen height on mobile, headline text minimum 28px, CTA buttons full-width
- Trust bar: scrolls horizontally or stacks into 2x2 grid on mobile
- Collections grid: 2 columns on mobile (not 4)
- Featured products: horizontal scroll carousel on mobile (like iHerb)
- Brand story section: image stacks above text on mobile
- All sections have adequate padding (minimum 16px horizontal)

**Collection / Category Pages**
- Filter bar collapses into a "Filter & Sort" button at top on mobile
- Filters open as a full-screen overlay drawer (like Naturitas and H&B mobile)
- Product grid: 2 columns on mobile
- Product cards: image, name, price, and "Add to cart" button all visible without scrolling within card

**Product Detail Page (PDP)**
- Product image: full-width swipeable image gallery on mobile
- "Add to Cart" button: sticky at bottom of screen on mobile (always visible as user scrolls — this is critical for conversion, used by iHerb and Solgar)
- Product description: collapsed behind "Read more" toggle on mobile to reduce scroll
- Related products: horizontal scroll carousel on mobile

**Blog**
- Article cards: single column on mobile
- Article body: comfortable line length (max 680px), 18px font size for readability

**Cart & Checkout**
- Cart drawer slides in from the right on mobile (do not navigate to a separate cart page)
- Checkout: Shopify's native checkout is already mobile-optimised — do not customise in a way that breaks it

**Forms (Contact, Newsletter)**
- Full-width input fields on mobile
- Large, clearly labelled submit buttons
- No side-by-side form fields on mobile — stack vertically

**Performance on Mobile**
- Target Google PageSpeed mobile score: 60+ (70+ preferred)
- All images lazy-loaded below the fold
- Hero image served at appropriate mobile resolution (max 800px wide for mobile)
- Avoid large JavaScript libraries that slow mobile load time

**Testing Checklist for Claude Code**
Before marking any phase complete, verify the following on mobile:
- [ ] Header is sticky and hamburger menu works
- [ ] All pages load without horizontal scroll
- [ ] Product grid shows 2 columns
- [ ] Filters open as overlay drawer on collection pages
- [ ] Sticky "Add to Cart" button visible on PDP
- [ ] Product images swipeable on PDP
- [ ] All buttons and links are easily tappable
- [ ] Text is readable without zooming
- [ ] Forms are usable with on-screen keyboard

---

## 7. Trust & Social Proof

| Element | Implementation |
|---|---|
| Years in business | "Más de 40 años" badge/banner — display on homepage and footer |
| Physical store | Show exterior and interior photos — especially on About page |
| Product reviews | Install a Shopify reviews app (e.g., Judge.me — free tier) |
| Secure payment icons | Visa, Mastercard, PayPal, Apple Pay, Google Pay in footer and checkout |
| Privacy & legal | Ensure all policy pages are complete (already present: Privacy, Returns, Legal, T&C) |
| Phone number | Prominently display 952 584 736 — signals a real, contactable business |

---

## 8. Technical Requirements

### 8.1 Shopify Theme

- Use a free Shopify theme as the base: **Dawn** (recommended — clean, minimal, performant) or **Sense**
- Customise via the Shopify Theme Editor and/or custom code in `theme.liquid` / section files
- Do NOT use a paid theme unless the free options are insufficient

### 8.2 Shopify Apps (Free Tier Only)

| App | Purpose |
|---|---|
| Judge.me Product Reviews | Customer reviews |
| Translate & Adapt | Multilingual support |
| Shopify Search & Discovery | Enhanced filters and search |
| Shopify Blog | Built-in — no additional app needed |

### 8.3 Performance

- Images: compress all product images before upload (WebP format preferred, max 500KB)
- Lazy load images below the fold
- Minimise custom JS — rely on Shopify's native functionality where possible
- Target Lighthouse mobile score: 70+

### 8.4 SEO Basics

- Page titles and meta descriptions for all key pages (in Spanish)
- Product URL slugs: /products/[product-name-in-spanish]
- Collection URL slugs: /collections/[category-name-in-spanish]
- Alt text on all product images
- Sitemap: auto-generated by Shopify (verify at /sitemap.xml)

---

## 9. Content Requirements

### 9.1 Copy Tone of Voice

- Warm, expert, trustworthy
- Approachable — not clinical or corporate
- Spanish-first; knowledgeable about natural health
- Emphasise the family heritage and 40+ years of expertise

### 9.2 Images to Use

The following real photos should be incorporated:

| Photo | Use |
|---|---|
| Store exterior (Acupuntura China + El Bosque sign) | About page hero, homepage brand section |
| Store interior (wooden shelves, product wall) | Homepage brand teaser, About page |
| Waiting room (acupuncture clinic) | About page — TCM section |

> Store photos are in `/uploads/mmexport*.jpg`

### 9.3 Homepage Headline Copy (Spanish / English)

| Element | ES | EN |
|---|---|---|
| Hero headline | "Tu salud natural, con 40 años de experiencia" | "Your natural health, backed by 40 years of expertise" |
| Hero subheadline | "Suplementos y vitaminas seleccionados por expertos. Envíos a España y Europa." | "Expert-selected supplements and vitamins. Shipping across Spain and Europe." |
| Trust bar item 1 | "Más de 40 años de experiencia" | "40+ years of experience" |
| Trust bar item 2 | "Envíos a España y Europa" | "Shipping to Spain & Europe" |
| Trust bar item 3 | "Productos naturales seleccionados" | "Carefully selected natural products" |
| Trust bar item 4 | "Asesoramiento experto" | "Expert advice" |

---

## 11. Data Strategy — Informing the Own-Brand Supplement Line

A core long-term goal is for Bosque Natural to launch its own line of supplements. The website must be built from day one to collect the data needed to make this decision with confidence. The following data collection mechanisms must be implemented in V1.

### 11.1 Product Demand Signals

| Signal | How to Capture | Tool |
|---|---|---|
| Most viewed products | Track product page views | Shopify Analytics (built-in) |
| Most searched terms | Capture search queries with zero or low results | Shopify Search & Discovery app |
| Most added to cart (even if not purchased) | Monitor cart abandonment by product | Shopify Analytics |
| Best sellers by revenue and units | Weekly review of top products | Shopify Reports |
| Most wishlisted / saved products | Add a Wishlist feature (V2) | — |

**Action for Claude Code:** Ensure Shopify Analytics is enabled and the Search & Discovery app is installed and logging search terms from day one.

### 11.2 Customer Intent Data

| Signal | How to Capture | Tool |
|---|---|---|
| Health goals / concerns | Add optional "What are you looking for?" quiz on homepage | Shopify app: Tolstoy or a simple form |
| Blog content engagement | Track which health topics get most reads/clicks | Google Analytics 4 (connect to Shopify) |
| Contact form enquiries | Tag enquiries by product/health topic | Manual review of contact form submissions |
| Newsletter sign-up interests | Segment subscribers by interest category | Klaviyo or Shopify Email (free tier) |

### 11.3 Gap Analysis — Finding the White Space

The own-brand product decision should be driven by identifying where:
1. **High search demand** exists but **low product availability** in the current catalogue
2. **High cart abandonment** on specific products (desire exists, but friction or price is stopping purchase)
3. **Blog topics** generating most traffic suggest unmet educational/product needs
4. **Customer questions** (via contact form or in-store) reveal recurring health concerns not well served

### 11.4 Data Collection Infrastructure to Build in V1

1. **Google Analytics 4** — connect via Shopify's Google & YouTube channel app. Track: page views, search terms, product views, add-to-cart events, checkout funnel.
2. **Shopify Search & Discovery** — install and enable search term logging. Review the "Top searches with no results" report monthly — this is gold for product gaps.
3. **Email capture with interest segmentation** — add a newsletter signup popup or footer form. Ask one question: "What's your main health goal?" with options (Energy, Joints, Digestion, Immunity, Skin & Hair, Weight Management). Tag subscribers accordingly.
4. **Blog with UTM tracking** — each blog article should target a specific health concern. Monitor which articles drive the most product page visits.
5. **Monthly review ritual** — once the store is live, conduct a monthly data review covering: top 10 products by views, top 10 search terms, top 3 blog posts, and contact form themes.

### 11.5 Own-Brand Product Decision Framework

When enough data has been collected (suggest: 3–6 months post-launch), use this framework to choose the first own-brand product:

| Criteria | Weight | Source |
|---|---|---|
| High search volume on site | 30% | Shopify Search & Discovery |
| High sales velocity of equivalent third-party product | 25% | Shopify Reports |
| Strong blog engagement on related topic | 20% | Google Analytics |
| Good margin potential vs current wholesale cost | 15% | Manual analysis |
| Aligns with brand values (natural, evidence-based) | 10% | Brand judgement |

The product scoring highest across these criteria is the recommended first own-brand launch.

---

## 12. Out of Scope (V1)

The following features are explicitly excluded from the initial launch and can be considered for V2:

- Loyalty / rewards programme
- Subscription / recurring orders
- Wishlist / favourites
- Live chat integration
- Custom mobile app
- Advanced personalisation / recommendation engine
- Own-brand product pages (infrastructure is built, products come later)

---

## 13. Success Metrics

| Metric | Target (30 days post-launch) |
|---|---|
| Site looks professional / no placeholder content | 100% — zero placeholder text visible |
| All products have correct pricing | 100% — no €0.00 prices |
| All products have stock status set | 100% |
| Products organised into collections | All 200+ products assigned to at least 1 collection |
| About page published | ✓ Live |
| Blog with 3+ draft posts | ✓ Live |
| Multilingual (ES + EN) | ✓ Live |
| Mobile score (Lighthouse) | 70+ |
| Google Analytics 4 connected | ✓ Tracking from day 1 |
| Search term logging active | ✓ Shopify Search & Discovery installed |
| Email capture with interest segmentation live | ✓ At least 1 signup form active |

---

## 12. Phased Delivery Plan

### Phase 1 — Foundation (Week 1)
- Apply brand identity: logo, colours, fonts to Dawn theme
- Fix all pricing (no €0.00)
- Fix all stock statuses
- Remove all placeholder copy

### Phase 2 — Content & Structure (Week 2)
- Create and populate all collections
- Write and add product descriptions
- Build About Us page with store photos
- Build Contact page

### Phase 3 — Trust & Discovery (Week 3)
- Install Judge.me reviews app
- Configure Shopify Search & Discovery (filters)
- Add trust bar to homepage
- Homepage hero section with brand story

### Phase 4 — Multilingual, Blog & Data Infrastructure (Week 4)
- Set up Translate & Adapt for ES + EN
- Create blog structure and 3 starter posts
- Connect Google Analytics 4
- Install Shopify Search & Discovery and enable search term logging
- Add email capture form with interest segmentation
- Final QA on mobile and desktop
- Soft launch

---

## Appendix A — Key Assets Reference

| Asset | File | Use |
|---|---|---|
| Logo (red + black, horizontal) | `BN-LongFilled.png` | Header, primary usage |
| Logo (black, horizontal) | `BN-LongBlack.png` | Monochrome contexts |
| Logo (white, horizontal) | `BN-LongWhite.png` | Dark backgrounds, footer |
| Logo (stacked, colour) | `BN-StackedFilledLogo.png` | Square contexts |
| Favicon stamp | `BN-StampFilled.png` | Browser favicon |
| Branding guide | `BN-BrandingGuide.png` | Colour + font reference |
| Store exterior | `mmexport1716142211035.jpg` | About page, homepage |
| Store interior 1 | `mmexport1716142212951.jpg` | About page |
| Store interior 2 | `mmexport1716142215050.jpg` | About page |
| Acupuncture waiting room | `mmexport1716145649146.jpg` | About page — TCM section |

---

## Appendix B — Shopify-Specific Implementation Notes for Claude Code

1. **Theme:** Start with Shopify Dawn theme (latest version). Customise via `/config/settings_data.json` and section Liquid files.
2. **Brand colours:** Set in theme settings as CSS variables — `--color-button: #d60036`, `--color-heading: #111111`, `--color-accent: #00592e`.
3. **Logo upload:** Upload `BN-LongFilled.png` as the header logo in Theme Editor → Header settings.
4. **Favicon:** Upload `BN-StampFilled.png` as favicon in Theme Editor → Favicon settings.
5. **Collections:** Create collections manually in Shopify Admin → Products → Collections before assigning products.
6. **Pricing fix:** Bulk edit product prices in Shopify Admin → Products → select all → Edit → update price column.
7. **Metafields:** For product benefits/ingredients, consider adding custom metafields in Shopify Admin → Settings → Custom Data.
8. **Blog:** Shopify has a built-in blog at Online Store → Blog Posts. Create blog titled "Salud Natural".
9. **Languages:** Install "Translate & Adapt" from Shopify App Store (free). Set Spanish as default, add English.
10. **Reviews:** Install "Judge.me Product Reviews" (free). Configure to show star ratings on collection and product pages.

---

*End of PRD — Version 1.0*
*Built for Claude Code — feed this document directly as context when starting the Shopify build.*