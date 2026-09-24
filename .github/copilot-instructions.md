When generating page content, layout structures, styling, or asset references for the Paragon Lincoln Engineering website, always refer to the master documentation and assets inside the `.context/` directory.

Key instructions:
- Read `.context/README.md` for full project context, exact image file names, and architecture decisions.
- Read `.context/documents/Final-Website-Paragon-V2.docx` for master page copy, service descriptions, and contact info.
- Read `.context/documents/Structure-of-Website.docx` for site navigation structure and department routing.
- Use vector asset `.context/branding-assets/logos/Logo2ParagonLE.svg` for header/footer branding.
- Implement the department blog using a static code-based structure (Markdown/JSON/MDX) without any CMS backend.

Project Setup & Scope:
- **Framework**: Astro project located inside the `./astro` directory.
- **Rendering Mode**: 100% Static Site Generation (SSG). Set `output: 'static'` in `astro.config.mjs`. Do NOT use dynamic server adapters or SSR features.
- **Deployment Target**: Firebase Hosting (Static).
- **Directory Scope**: Execute build commands and write UI component files within the `./astro` directory.

Design & UI Guidelines:
- **Responsive Design**: Ensure all layouts are mobile-first and look clean on mobile, tablet, desktop, and ultra-wide screens.
- **Theme Support**: Implement full Light and Dark mode toggle functionality using clean CSS variables or Tailwind `dark:` classes.
- **Animations**: Include subtle, smooth animations (e.g., subtle scroll-triggered fades, smooth micro-interactions on hover, subtle page transitions) using Framer Motion or CSS keyframes to create a modern engineering aesthetic.