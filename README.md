This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Design conventions

`DESIGN.MD` defines the visual identity. `app/globals.css` exposes its colors and fonts through Tailwind theme tokens, alongside the grain effect.

- Use `PageContainer` for shared content width and responsive page gutters.
- Use Tailwind's standard `sm`, `md`, and `lg` breakpoints, spacing scale, and container widths. Avoid Figma coordinates, percentage widths, and one-off pixel utilities.
- The guideline spacing values map to `2`, `3`, `4`, `6`, `8`, `12`, and `18` on Tailwind's 4px base scale.
- Use `font-mono` for body text and navigation, `font-sans font-bold` for display headings, and `font-pixel` for occasional accents.
- The hero uses `text-2xl`, `sm:text-3xl`, and `lg:text-5xl`; navigation uses `text-sm`, `sm:text-base`, and `lg:text-xl`.
- Keep grain in `GrainBackground` and its theme tokens. Preserve the reduced-motion variant.
- Image dimensions and responsive `sizes` describe media; ASCII shader parameters describe the renderer. Keep these separate from layout styling.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
