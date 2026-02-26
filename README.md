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
        hero-left.jpeg
        hero-right.jpeg
      /programs
        program-dance.jpeg
        program-games.jpeg
        program-drawing.jpeg
        program-movement.jpeg
      /gallery
        gallery-01.jpeg ... gallery-12.jpeg
    /icons
      folk-dance.svg
      brain-games.svg
      drawing.svg
      movement.svg
      instagram.svg
  README.md
  ATTRIBUTION.md
  .nojekyll
```

## Local Usage

1. Open `index.html` directly in your browser.
2. Edit text/content in `index.html`.
3. Replace placeholder images in `/assets/images` subfolders with optimized `.jpeg` files.

## Features Included

- Sticky navigation + mobile hamburger menu
- Smooth scrolling with active section highlighting
- Hero, program cards, and detailed program blocks
- Filterable gallery + lightbox + load more
- Contact form with free FormSubmit integration
- Back-to-top floating button
- Semantic HTML and keyboard-friendly interactions

## Contact Form Behavior

The contact form posts directly via FormSubmit (free):

- Form action in `index.html`:
  - `action="https://formsubmit.co/digitaldataliteracy@gmail.com"`
- First submission requires activation from an email sent by FormSubmit.
- After activation, form submissions go to the configured inbox.

## Practical Image Replacement

- Easiest workflow: keep current file names and overwrite files in:
  - `/assets/images/hero`
  - `/assets/images/programs`
  - `/assets/images/gallery`
- If you change file names, update matching `src` paths in `index.html`.

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Push this project to the default branch (for example `main`).
3. Open `Settings` -> `Pages`.
4. Choose `Deploy from a branch`.
5. Select branch (`main`) and folder (`/root`), then save.

## Custom Domain (High-Level)

1. Add your custom domain in `Settings` -> `Pages`.
2. Create a `CNAME` file in repo root with your domain.
3. Add DNS records at your provider:
   - `A` records for apex domain to GitHub Pages IPs.
   - `CNAME` record for `www` to `<username>.github.io`.
4. Wait for DNS propagation and enable HTTPS.
