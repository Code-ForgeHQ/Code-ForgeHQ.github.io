# Code Forge — Website

> **Turning Ideas Into Technology.**

The official website repository for **Code Forge**, an independent software development organization exploring software engineering, artificial intelligence, web technologies, and open-source development.

🌐 **Live website:** https://code-forgehq.github.io/  
🏢 **GitHub organization:** https://github.com/Code-ForgeHQ

---

## Overview

This repository contains the source code for the Code Forge public website. The site is designed as a dark, editorial-style digital experience that introduces the organization, its areas of exploration, its engineering principles, and its approach to building software.

The website is intentionally lightweight: it is built as a static page and does not require a frontend framework, package manager, build step, or server-side application.

## Features

- **Bilingual interface:** English is the default language, with Persian available through the language switch in the header.
- **Right-to-left Persian layout:** Switching to Persian updates the document language and direction and applies Persian typography and layout adjustments.
- **Responsive design:** Layouts adapt to desktop, tablet, and mobile screens.
- **Animated visual details:** Includes a subtle particle canvas, orbital graphic, scrolling ticker, hover transitions, and scroll-reveal effects.
- **Reading progress indicator:** A slim progress line at the top of the page follows the visitor's scroll position.
- **Reduced-motion support:** The particle animation is disabled when the visitor's system requests reduced motion.
- **Direct organization links:** Visitors can explore the Code Forge GitHub organization and its public repositories.

## Website Sections

The page is organized into the following sections:

1. **Hero** — introduces Code Forge and its central message.
2. **The Organization** — explains the organization's purpose and guiding principles.
3. **Capabilities** — presents software engineering, artificial intelligence, web technologies, and open source.
4. **The Code Forge Mindset** — describes the values behind the work.
5. **How We Work** — outlines the discover, explore, engineer, and evolve process.
6. **Technology Landscape** — presents the technologies and platforms the organization explores.
7. **Projects** — provides an overview of the evolving project ecosystem and links to public repositories.
8. **Contact** — directs visitors to the organization on GitHub.

## Technology

The website uses standard browser technologies:

- **HTML5** for page structure and content.
- **CSS3** for layout, responsive styling, visual effects, and animations.
- **Vanilla JavaScript** for language switching, navigation, scroll effects, and interactive behavior.
- **Canvas API** for the lightweight particle animation.
- **Google Fonts** for Manrope, DM Mono, and Vazirmatn typography.

There are no framework or runtime dependencies.

## Repository Structure

```text
.
├── index.html   # Complete website: markup, styles, and JavaScript
└── README.md    # Project documentation
```

The current implementation keeps the website in a single `index.html` file. Styles and scripts are embedded in that file, so there is no separate source, assets, or build directory required.

## Run Locally

You can preview the website without installing dependencies:

1. Clone or download this repository.
2. Open `index.html` in a modern browser.

For a local HTTP preview, you can optionally run Python from the repository directory:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Language Switching

English is the initial language. The **فارسی** control in the top navigation switches the page to Persian. The same control then displays **EN**, allowing visitors to return to English.

The language switch updates:

- Visible text covered by the translation dictionary.
- The document's `lang` and `dir` attributes.
- Persian font and right-to-left layout rules.
- The page title and meta description.
- Navigation labels and accessibility labels.

Brand names and technology names remain in their original form where appropriate.

## Deployment

The site is published with **GitHub Pages** from this repository.

To update the live website:

1. Edit `index.html` or the relevant repository documentation.
2. Commit and push the changes to the repository's publishing branch.
3. GitHub Pages will publish the updated static files. Deployment may take a short time to become visible.

No compilation or bundling step is needed.

## Making Changes

- Keep the English and Persian content aligned when editing visible copy.
- When adding a new text element that needs translation, add its exact English text and Persian equivalent to the `languageMap` in `index.html`.
- Preserve the existing responsive breakpoints when changing navigation or section layouts.
- Test both language directions and check the page at desktop and mobile widths.
- Keep animations subtle and respect the `prefers-reduced-motion` media preference.

## Project Scope

This repository documents and serves the **Code Forge website**. It is separate from any personal GitHub profile README and is not intended to act as an individual developer biography.

The website describes the organization's areas of interest and working philosophy. Project listings and claims about released work should be updated as concrete public projects become available.

---

© Code Forge — Turning Ideas Into Technology.
