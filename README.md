# SWEDA Website Prototype

A static HTML/CSS/JS prototype for the SWEDA website, built from the supplied
homepage and Employment Support service page designs.

## What's included

| Page | Status |
|---|---|
| `index.html` | Full homepage — hero, stats, accordion of services, success stories, funders, contact form |
| `services.html` | Overview page linking to the four service pages |
| `employment-support.html` | Full service page (matches the supplied design) |
| `business-support.html` | Full service page, same layout, tailored content |
| `digital-skills.html` | Full service page, same layout, tailored content |
| `welfare-advisory.html` | Full service page, same layout, tailored content |
| `contact.html` | Dedicated contact page with form |
| `about.html`, `fundraising.html`, `partnerships.html`, `whats-on.html` | **Placeholder pages** — linked from the nav so nothing 404s, marked with a "TODO" badge, ready for real content |

Shared code lives in `css/styles.css` and `js/script.js`. Every page includes
both, so editing either file updates the whole site.

## Hosting on GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Push everything in this folder to the repo, keeping the folder structure
   (`css/`, `js/`, and the `.html` files at the root).
3. On GitHub: **Settings → Pages → Build and deployment → Source: Deploy from
   a branch**, choose `main` and `/ (root)`, then save.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`
   within a minute or two.

No build step is required — it's plain HTML, CSS and vanilla JS.

## Things to swap out before this goes live

- **Colours/fonts**: brand colours are CSS variables at the top of
  `css/styles.css` (`--purple`, `--pink`, `--orange`, `--indigo`, etc.) —
  change them there and they update everywhere.
- **Logo**: currently a simple inline SVG mark next to the word "sweda" in
  each page's `<header>`. Swap for a real logo file/SVG when you have one.
- **Photos**: every photo is a dashed-border placeholder box
  (`.placeholder-img`) with a label describing what should go there. Replace
  the `<div class="placeholder-img">...</div>` with an `<img>` tag.
- **Funder logos**: `index.html` has three dashed placeholder boxes in the
  "Funders & Partners" section — swap for real logo images.
- **Contact form**: this is a static site, so the form doesn't actually send
  anywhere yet. It validates and shows a confirmation message on-page (see
  the comment block in `js/script.js`). To make it live, connect it to a
  service like Formspree or Netlify Forms, or point it at your own backend.
- **Placeholder pages**: `about.html`, `fundraising.html`,
  `partnerships.html`, and `whats-on.html` are intentionally minimal — add
  real content whenever you're ready, following the same header/footer
  structure as the other pages.
- **Social links**: the social icons in the header/footer currently link to
  `#`. Point them at SWEDA's real profiles.

## Structure notes

- The navbar is duplicated at the top of every page (no templating system,
  since this is a plain static site) — if you add/rename a nav link, update
  it in each `.html` file's `<nav class="main-nav">` block, and in each
  `<div class="footer-grid">` menu list.
- The homepage service accordion uses native `<details>`/`<summary>`
  elements, so it needs no JavaScript and works even if scripts are blocked.
- Mobile nav, the success-story carousel, and form handling are the only bits
  of custom JS, all in `js/script.js`.
