# Migration notes: Framer → Next.js

This app is a rebuild of the Hayoom Design Framer project (`Mx4OMbyyyT7Ui4mpiTES`) as a
Next.js 14 / TypeScript / Tailwind app, generated from real content pulled out of the
Framer project via the Framer agent API (page node trees, the "Projects" CMS collection,
FAQ items, Nav/Footer component definitions, design color tokens, and real image/video
assets). Framer does not export its visual canvas as source code, so this is a faithful
content rebuild rather than a 1:1 export — see the list below for what needs manual
follow-up before this is production-ready.

## What's real / ported directly

- All copy: hero, benefits, process steps, services, stats, testimonials, deliverables,
  9 FAQ items, nav links, footer links, 404 copy — pulled from the live project content.
- 5 CMS case studies (title, thumbnail, full formatted HTML body, extra images) from the
  "Projects" collection, in `content/projects.json`.
- 45 real images + 1 video, downloaded from `framerusercontent.com` into `public/`.
- `components/StarRating.tsx` — ported directly from the project's real code file
  (`rating.tsx`), not recreated.
- Color palette in `tailwind.config.ts` — pulled from the project's actual color/design
  tokens (Primary `rgb(110,239,138)`, Secondary `rgb(1,20,24)`, card/border colors, etc.).
- Original 3 logo SVGs kept in `public/logos/` from the prior repo state.

## Needs manual follow-up

1. **Fonts** — the real project uses paid/custom fonts (Array, Satoshi, Cabinet Grotesk,
   Basement Grotesque, OffBit Trial) that aren't on Google Fonts and can't be extracted
   through the Framer agent API. This build substitutes Space Grotesk (headings), Inter
   (body), and PT Mono (labels) as close Google Font stand-ins. To match exactly, export
   the real font files from Framer (Site Settings → Fonts) and load them via
   `next/font/local` in `app/layout.tsx`.

2. **Cal.com booking embed** (footer) — the real footer embeds a live Cal.com scheduler
   (`calLink: "nareshmeetei/15min"`). The current `Footer.tsx` has a placeholder div with
   the same id (`my-cal-inline-15min`); you need to re-add the actual Cal.com embed script
   client-side (e.g. in a `useEffect` in a client component) since Framer's HTML-embed
   component doesn't carry over automatically.

3. **Checkout links** — all CTA buttons point to the real DodoPayments checkout URL
   (`checkout.dodopayments.com/...`) pulled from the project; these should keep working
   as-is since they're external, but verify the product/quantity still matches what you
   want live.

4. **Pricing page numbers** — the pricing page's exact tier names/prices are rendered
   client-side in Framer and weren't available through the static export path used here.
   The feature lists per tier (Basic / Popular / Enterprise) are the real extracted
   feature lists, but the **displayed prices ($4,495 / $6,995 / Custom) are placeholders** —
   the $4,495/month figure is confirmed real (from the Process section copy), the others
   need verification against the live pricing page before launch.

5. **Icons** — the real site uses the Phosphor icon set via a large custom code component
   (`Phosphor.tsx`) that wasn't practical to port verbatim. This build uses simple text/emoji
   substitutes (✓, arrows) instead. Swap in a proper icon library (e.g. `phosphor-react` or
   `lucide-react`) for parity.

6. **Industries section** — the homepage had an "Industries" section title in the source
   but its card content wasn't captured as inspectable component data (likely raw canvas
   frames rather than component instances) and was not ported. Add this section manually
   by referencing the live site at https://hayoomdesign.framer.website/.

7. **Animations** — Framer's on-scroll/on-mount motion effects, the animated gradient
   background, ticker/marquee logos, and custom cursor were not reproduced (they're
   Framer-runtime-specific). The layout and content are faithful; add your own
   Tailwind/Framer Motion animations if you want equivalent motion.

8. **Footer heading text** — the footer's heading/paragraph RichText nodes contained
   what appears to be leftover template placeholder copy ("Elevate Your Brand with
   Subscription Design Services..." / "Using socio framer template...") rather than
   custom copy — this was replaced with a reasonable CTA heading in `Footer.tsx`; verify
   against the live site and adjust if the original was intentional.

9. **npm audit** — `npm install` reports 2 vulnerabilities (moderate/high) in transitive
   dev dependencies as of this build; run `npm audit` and update before shipping.

## Deployment

This repo is ready to import into Vercel directly (Next.js is auto-detected). No env vars
are required for the current build — all content is static/local (`content/*.json`,
`public/*`). Connect the GitHub repo `Nareshmeetei/hoyoomdesign` in the Vercel dashboard
to deploy.
