# Future Forward Ventures

Future Forward Ventures is a responsive single-page marketing website for Vintage Group. The current build presents the group as a multi-sector organization focused on agriculture, agrotech, infrastructure, green energy, finance, and dairy, with a polished landing page, animated sections, and direct contact details.

The latest work focuses on the mobile experience: the hero section is tuned for a single-screen first view, the mobile layout uses a dedicated background asset, and the desktop presentation remains unchanged.

## What is currently in the project

- A fixed header with desktop navigation and a mobile menu.
- A full-screen hero section with brand messaging and feature highlights.
- A mobile-first hero treatment with a centered logo, sunrise-toned background, and a dedicated mobile background image.
- A sectors section that introduces the main business areas.
- A capabilities section that summarizes operational strengths.
- An impact / metrics section with animated counters.
- An about section with mission, vision, and guiding principles.
- A footer with insights, contact information, and newsletter signup UI.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components
- React Router
- TanStack Query
- Vitest

## Scripts

- `bun run dev` - start the local development server.
- `bun run build` - create a production build.
- `bun run preview` - preview the production build locally.
- `bun run lint` - run ESLint across the project.
- `bun run test` - run the test suite once with Vitest.
- `bun run test:watch` - run Vitest in watch mode.

## Project Status

The project is currently in a presentable front-end state:

- The core landing page flow is implemented.
- The design system and layout are already in place.
- Mobile hero styling has been refined to better match the current brand reference.
- The site is content-driven rather than data-driven at this stage.
- Navigation anchors currently point to the one-page sections on the homepage.
- The footer includes placeholder insight items and social links that can be connected to live content later.

## Development Notes

- The homepage title and meta description are set dynamically in `src/pages/Index.tsx`.
- Section reveal behavior is handled by the `useReveal` hook.
- Contact information and sector names are currently hardcoded in the site components.

## Getting Started

1. Install dependencies.
2. Run the dev server.
3. Open the local URL shown by Vite in your browser.

If you want, the next useful update would be to add deployment instructions, live preview screenshots, or a short content management section for future edits.
