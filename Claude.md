# CLAUDE.md — Bosque Natural Shopify Store

## Project Intelligence File for Claude Code

---

## 1. Project Overview

You are building and customising a Shopify e-commerce store for **Bosque Natural** (trading as  *El Bosque Oriental* ), a family-run herbolario (natural health shop) and Traditional Chinese Medicine acupuncture clinic based in Spain, with over 40 years of history.

* **Live store URL:** https://www.elbosqueoriental.com
* **Shopify theme:** Dawn (latest version) — all work is a **fork of the Dawn theme**
* **Primary language:** Spanish (es)
* **Secondary languages:** English (en), French (fr), German (de)
* **Shipping:** Spain + rest of EU
* **Product catalogue:** 200+ natural health supplements and vitamins

The full Product Requirements Document (PRD) for this project is in `/PRD/BosqueNatural-PRD.md`. Read it before starting any task.

---

## 2. Technology Stack

### Core

* **Platform:** Shopify (hosted — no local server)
* **Theme base:** Dawn theme (forked) — do NOT switch themes or install a new base theme
* **Templating language:** Liquid (Shopify's templating language)
* **Styles:** CSS with Shopify's CSS custom properties system — Dawn uses CSS variables extensively, always honour this pattern
* **JavaScript:** Vanilla JS only — Dawn uses no framework. Do not introduce React, Vue, or any JS framework
* **Version control:** Git — commit after every meaningful change with a clear commit message

### Shopify-Specific

* **Theme files live in:** the local project folder (pulled from Shopify via Shopify CLI)
* **To preview changes:** run `shopify theme dev --store elbosqueoriental.com` in the terminal
* **To push changes to live store:** run `shopify theme push --store elbosqueoriental.com`
* **Never edit theme files directly in the Shopify admin** while Claude Code has the files locally — this causes conflicts

### File Structure (Dawn theme)

```
/assets          → CSS, JS, image assets
/config          → settings_schema.json (Theme Editor settings), settings_data.json (saved values)
/layout          → theme.liquid (master layout), password.liquid
/locales         → translation JSON files (es.json, en.json, etc.)
/sections        → Shopify sections (reusable page blocks)
/snippets        → Reusable Liquid partials
/templates       → Page templates (index, product, collection, blog, etc.)
```

---

## 3. Brand Identity

Always apply these brand values consistently across all files. Never deviate from them.

### Colours

```
--color-black:        #111111   → Headings, primary text, footer background
--color-red:          #d60036   → CTA buttons, accents, logo stamp colour
--color-green:        #00592e   → Trust badges, nature/health labels, secondary accents
--color-white:        #ffffff   → Page backgrounds, card backgrounds
--color-light-grey:   #f5f5f5   → Section backgrounds, subtle dividers
```

When setting colours in Dawn, map them to the correct Dawn CSS variable names in `config/settings_data.json`:

* `colors_accent_1` → `#d60036` (red — primary CTA)
* `colors_accent_2` → `#00592e` (green — secondary accent)
* `colors_text` → `#111111` (black)
* `colors_background_1` → `#ffffff` (white)
* `colors_background_2` → `#f5f5f5` (light grey)
* `colors_button_label` → `#ffffff`
* `colors_button` → `#d60036`

### Typography

* **Headings:** LT Saeada — if unavailable as a web font, substitute Nunito (available on Google Fonts)
* **Body text:** Gabarito (available on Google Fonts)
* **Minimum body font size:** 16px (prevents iOS auto-zoom on inputs)
* Load Google Fonts in `layout/theme.liquid` via `<link>` preconnect and stylesheet tags

### Logo Files

All logo files are in the `/assets` folder. Use the correct variant per context:

| Context                              | File                                              |
| ------------------------------------ | ------------------------------------------------- |
| Header (light background)            | `BN-LongFilled.png`(red stamp + black wordmark) |
| Header (dark background)             | `BN-LongWhite.png`(all white)                   |
| Footer                               | `BN-LongWhite.png`                              |
| Favicon                              | `BN-StampFilled.png`                            |
| Mobile header (if wordmark too wide) | `BN-StampFilled.png`(stamp only)                |

### Design References

The source code of these reference stores has been saved locally in the `/references` folder. **Read these files before making any design decisions.** Study their patterns, class naming, component structure, and CSS approaches.

| Store                       | Folder                           | What to study                                                          |
| --------------------------- | -------------------------------- | ---------------------------------------------------------------------- |
| **Solgar**            | `/references/solgar/`          | Premium supplement feel, ingredient storytelling, product page layout  |
| **iHerb**             | `/references/iherb/`           | Filter/facet UX, trust signals, review layout, category navigation     |
| **Holland & Barrett** | `/references/holland-barrett/` | Editorial health content, benefit-led product descriptions, mobile nav |
| **Naturitas**         | `/references/naturitas/`       | Spanish-market natural health UX, collection structure, blog format    |

When starting any new section or component, check the references folder first and ask: *"How did Solgar/iHerb/H&B solve this same UI problem?"* Then adapt their approach to fit the Bosque Natural brand identity defined above.

---

## 4. Coding Standards & Rules

### Liquid

* Always use Liquid's built-in filters — never write custom JS to do what Liquid can do natively
* Use `{{ 'style.css' | asset_url | stylesheet_tag }}` pattern for assets
* Use `{% render 'snippet-name' %}` not `{% include %}` (deprecated in Dawn)
* Never hardcode text strings — use `{{ 'section.key' | t }}` translation keys so multilingual works
* When adding new translatable strings, add them to ALL locale files: `locales/es.default.json`, `locales/en.json`
* Schema settings in sections must have `"id"`, `"type"`, `"label"`, and `"default"` fields

### CSS

* Use CSS custom properties (variables) — never hardcode hex colours directly in CSS rules
* Follow Dawn's BEM-like naming: `.section-name__element--modifier`
* Mobile-first: write base styles for mobile, use `@media (min-width: 750px)` for tablet, `@media (min-width: 990px)` for desktop
* Dawn breakpoints: 750px (tablet), 990px (desktop), 1200px (wide)
* Never use `!important` unless absolutely necessary and comment why

### JavaScript

* Vanilla JS only — no frameworks, no jQuery
* Use `customElements.define()` for web components (Dawn's pattern)
* Always add event listeners with `addEventListener`, never inline `onclick`
* Defer non-critical JS — use `defer` attribute

### General

* Never delete Dawn's original files — if overriding, copy the section/snippet and rename it with a `bn-` prefix (e.g., `bn-product-card.liquid`)
* Always test changes with `shopify theme dev` before pushing to live
* Commit to Git after every completed task: `git add . && git commit -m "descriptive message"`
* Never push broken code to the live store

---

## 5. Site Architecture

### Navigation

```
Header (sticky on mobile):
  Left:   Logo
  Centre: Inicio | Catálogo | Colecciones ▾ | Blog | Nosotros | Contacto
  Right:  Search icon | Language switcher | Cart icon (with item count)

Mobile header:
  Left:   Hamburger menu (☰)
  Centre: Logo stamp (BN-StampFilled.png)
  Right:  Search icon | Cart icon
```

### Pages & Templates

| Page       | Template file                    | Priority |
| ---------- | -------------------------------- | -------- |
| Homepage   | `templates/index.json`         | P0       |
| Collection | `templates/collection.json`    | P0       |
| Product    | `templates/product.json`       | P0       |
| About Us   | `templates/page.nosotros.json` | P0       |
| Contact    | `templates/page.contact.json`  | P1       |
| Blog       | `templates/blog.json`          | P1       |
| Article    | `templates/article.json`       | P1       |
| Search     | `templates/search.json`        | P1       |
| Cart       | `templates/cart.json`          | P2       |

### Collections / Product Categories

Products must be organised into these collections (create via Shopify Admin if not already existing):

1. `vitaminas-minerales` — Vitaminas y Minerales
2. `suplementos-deportivos` — Suplementos Deportivos
3. `aceites-naturales` — Aceites Naturales
4. `omega-acidos-grasos` — Omega y Ácidos Grasos
5. `digestion-bienestar` — Digestión y Bienestar
6. `colesterol-corazon` — Colesterol y Corazón
7. `articulaciones-huesos` — Articulaciones y Huesos
8. `cabello-piel` — Cabello y Piel
9. `infusiones-tes` — Infusiones y Tés
10. `ofertas` — Ofertas

---

## 6. Mobile Requirements (Critical)

Mobile is a primary target — not an afterthought. Every change must be tested at 375px width.

* **Header:** Sticky on scroll. Hamburger menu on mobile opens a slide-out drawer
* **Product grids:** 2 columns on mobile, 4 on desktop
* **Collection filters:** Collapse into a "Filtrar" button on mobile, open as full-screen overlay drawer
* **Product page:** Sticky "Añadir al carrito" button fixed to bottom of screen on mobile
* **Product images:** Swipeable gallery on mobile
* **Featured products:** Horizontal scroll carousel on mobile
* **Cart:** Slide-in drawer (do not navigate to separate cart page)
* **All tap targets:** Minimum 44x44px
* **No horizontal scroll** on any page at any mobile width
* **Forms:** Stack all fields vertically on mobile, full-width inputs

---

## 7. Installed Shopify Apps

These apps are installed or should be installed. Account for their integration in theme code:

| App                        | Handle      | Purpose                                                  |
| -------------------------- | ----------- | -------------------------------------------------------- |
| Shopify Search & Discovery | Built-in    | Enhanced filters — outputs `{% render 'facets' %}`    |
| Judge.me Product Reviews   | `judgeme` | Review widgets — use `{% render 'judgeme_widgets' %}` |
| Translate & Adapt          | Built-in    | Multilingual — do not hardcode strings, use `           |
| Shopify Blog               | Built-in    | No extra integration needed                              |

---

## 8. Multilingual Rules

* **Default locale:** Spanish (`es.default.json`)
* **Additional locales:** English (`en.json`), French (`fr.json`), German (`de.json`)
* Every user-facing string must use the `| t` translation filter: `{{ 'products.add_to_cart' | t }}`
* When adding new translation keys, add to ALL locale files simultaneously
* Language switcher in header should use Shopify's `localization` object:
  ```liquid
  {% for locale in localization.available_languages %}  <a href="{{ locale | link_to_locale }}">{{ locale.name }}</a>{% endfor %}
  ```

---

## 9. Trust & Social Proof Elements

These must appear on the specified pages:

* **Trust bar** (4 icons): appears on homepage below hero and on all collection pages
  * ✓ Más de 40 años de experiencia
  * ✓ Envíos a España y Europa
  * ✓ Productos naturales seleccionados
  * ✓ Asesoramiento experto
* **Review stars:** visible on product cards in collection grids (via Judge.me)
* **Phone number:** 952 584 736 — visible in header (desktop) and footer
* **Payment icons:** Visa, Mastercard, PayPal, Apple Pay, Google Pay — in footer
* **Security badge:** "Pago 100% seguro" near add-to-cart button on product pages
* **Years badge:** "Más de 40 años" — on homepage hero and about page

---

## 10. Data & Analytics (Build From Day One)

These must be configured before the store goes live — not as an afterthought:

* **Google Analytics 4:** Connect via Shopify's Google & YouTube channel app. Ensure `gtag` events fire for: page_view, view_item, add_to_cart, begin_checkout, purchase
* **Shopify Search & Discovery:** Must be installed and logging search terms from day one — this data informs future own-brand product decisions
* **Email capture form:** Add to homepage and footer with interest segmentation question: "¿Cuál es tu objetivo de salud principal?" with options: Energía, Articulaciones, Digestión, Inmunidad, Piel y Cabello, Control de Peso

---

## 11. Physical Store Details (Use in Copy & About Page)

```
Business name:    Bosque Natural / El Bosque Oriental
Type:             Herbolario + Acupuntura China clinic
History:          Family-run, 40+ years in operation
Phone:            952 584 736
Services:         Natural supplements, vitamins, Traditional Chinese Medicine, acupuncture
Store vibe:       Warm wooden interiors, extensive product wall, trusted local institution
Brand philosophy: East meets West — combining natural product expertise with TCM wisdom
```

Store photos are available in `/assets/`:

* `store-exterior.jpg` — storefront with Acupuntura China + El Bosque signage
* `store-interior-1.jpg` — wooden shelves with full product wall
* `store-interior-2.jpg` — wider interior shot
* `store-waiting-room.jpg` — acupuncture clinic waiting room

---

## 12. Phased Build Plan

Complete phases in order. Do not start Phase 2 until Phase 1 is fully complete and tested.

### Phase 1 — Foundation (Week 1)

* [ ] Apply brand colours to `config/settings_data.json`
* [ ] Upload and set logo in theme header settings
* [ ] Set favicon to `BN-StampFilled.png`
* [ ] Load Gabarito and Nunito from Google Fonts in `layout/theme.liquid`
* [ ] Remove ALL placeholder copy (hero text, collection names, "Welcome to our store")
* [ ] Fix all €0.00 product prices
* [ ] Fix all "Out of Stock" statuses
* [ ] Apply sticky header on mobile

### Phase 2 — Content & Structure (Week 2)

* [ ] Create all 10 collections and assign products
* [ ] Write Spanish product descriptions for all products
* [ ] Build About Us page (`page.nosotros`) with store photos and brand story
* [ ] Build Contact page with form, phone, address, map embed

### Phase 3 — Trust & Discovery (Week 3)

* [ ] Build homepage sections: hero, trust bar, collections grid, featured products, brand story teaser
* [ ] Install and configure Judge.me — show stars on collection cards
* [ ] Configure Shopify Search & Discovery filters (brand, price, benefit/category)
* [ ] Add trust signals to product pages (security badge, shipping info)
* [ ] Mobile QA — test all pages at 375px

### Phase 4 — Multilingual, Blog & Analytics (Week 4)

* [ ] Configure Translate & Adapt for ES + EN
* [ ] Ensure all strings use `| t` filter
* [ ] Create blog (`salud-natural`) with 3 starter articles
* [ ] Connect Google Analytics 4
* [ ] Add email capture form with interest segmentation
* [ ] Full QA — mobile and desktop
* [ ] Push to live store

---

## 13. Before Every Work Session

1. Run `git pull` to get latest changes
2. Run `shopify theme dev --store elbosqueoriental.com` to start local preview
3. Check which Phase you are on and which tasks are incomplete
4. Read the relevant section of the PRD before starting

## Before Every Push to Live

1. Test on mobile at 375px — no horizontal scroll, sticky header works, cart drawer works
2. Test add-to-cart flow end to end
3. Check no placeholder text is visible anywhere
4. Run `git commit -m "clear description of changes"`
5. Run `shopify theme push --store elbosqueoriental.com`

---

*This file is the source of truth for all development decisions on this project. If something is not covered here, refer to the PRD at `/PRD/BosqueNatural-PRD.md`. If still unclear, ask before proceeding.*
