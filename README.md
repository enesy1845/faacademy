# Kidvanceacademy One-Page Website

A fast, responsive, accessible single-page website template built with plain HTML, CSS, and vanilla JS.

## Project Structure

```text
/
  index.html
  /assets
    /css
      styles.css
    /js
      main.js
    /images
      /brand
        logo.svg
      /hero
        hero-left.webp
        hero-right.webp
      /programs
        program-dance.webp
        program-games.webp
        program-drawing.webp
        program-movement.webp
      /gallery
        gallery-01.webp ... gallery-12.webp
    /icons
      folk-dance.svg
      brain-games.svg
      drawing.svg
      movement.svg
  README.md
  ATTRIBUTION.md
  .nojekyll
```

## Local Usage

1. Open `index.html` directly in your browser.
2. Edit text/content in `index.html`.
3. Replace placeholder images in `/assets/images` subfolders with optimized `.webp` files.

## Features Included

- Sticky navigation + mobile hamburger menu
- Smooth scrolling with active section highlighting
- Hero with CTA
- Programs cards + scroll-to detailed blocks
- Filterable gallery (All / Dance / Games / Drawing)
- Gallery lightbox modal (ESC to close)
- Client-side "Load more"
- For Parents trust section
- About section
- Contact form with `mailto:` fallback + copy-text fallback
- Back-to-top button
- Semantic HTML and keyboard-friendly interactions

## Contact Form Behavior

Default form mode uses mailto fallback in JS:

- Update recipient email in `assets/js/main.js`:
  - `const recipient = 'hello@kidvanceacademy.com';`

If you want direct form posting (without opening email app), add:

- `data-formspree-endpoint="https://formspree.io/f/your-id"` to `<form id="contactForm">`

Then JS will send with `fetch` and fall back to mailto if that request fails.

## Practical Image Replacement

- You can keep your own file names, but then update matching `src` paths in `index.html`.
- Easiest workflow: keep existing file names and just overwrite files in:
  - `/assets/images/hero`
  - `/assets/images/programs`
  - `/assets/images/gallery`
- This avoids touching HTML and prevents broken paths.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Push this project to the repository default branch (for example `main`).
3. Open repository `Settings` -> `Pages`.
4. Under `Build and deployment`, select `Deploy from a branch`.
5. Choose branch (`main`) and root folder (`/root`), then save.
6. Wait for deployment and use the generated `github.io` URL.

## Custom Domain (High-Level)

1. Add your custom domain in `Settings` -> `Pages`.
2. Create a `CNAME` file in repo root containing your domain (for example `www.example.com`).
3. Add DNS records at your domain provider:
   - `A` records pointing apex domain to GitHub Pages IPs.
   - `CNAME` record for `www` pointing to `<username>.github.io`.
4. Wait for DNS propagation and enable HTTPS in Pages settings.

## Notes

- `.nojekyll` is included to avoid Jekyll processing issues on GitHub Pages.
- All code comments are in English and intended for easy edits.
