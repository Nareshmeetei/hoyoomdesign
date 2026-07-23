# Migration notes: Framer → Next.js

This app is a rebuild of the Hayoom Design Framer project (`Mx4OMbyyyT7Ui4mpiTES`) as a
Next.js 14 / TypeScript / Tailwind app. Framer does not export its visual canvas as source
code, so this is a content-and-behavior rebuild, not a 1:1 export — every value below was
read from the live Framer node tree (`framer.agent.getNode`/`getNodes`, `framer.getFonts()`,
`framer.getCollection()`) rather than approximated.

**Deployment note:** this repo is connected to Vercel with continuous deployment — every
push to `origin/main` redeploys https://hayoomdesign.com. `vercel.json` (`{"framework":
"nextjs"}`) is required for Vercel to detect the Next.js build correctly; do not remove it.

## What's real / exact

- **Copy** — every section's real text was re-verified against the actual rendered
  `TextRun` content in the Framer node tree (not the node's cached `.name`, which was
  found to be stale/out of date on several nodes — see "Fidelity correction" below).
  This includes the real hero headline ("Growth-Focused Design For Future-Builders"),
  the real comparison table (Hayoom vs. Agencies vs. Freelancers vs. In-House, 8 real
  feature rows + real cost figures), the real "Industries We Specialize In" tags, the
  real 404 copy, and the real footer copy/email (`hello@hayoomdesign.com`).
- **5 CMS case studies** (title, thumbnail, full formatted HTML body, extra images) from
  the "Projects" collection, in `content/projects.json`.
- **45 real images + 1 video**, downloaded from `framerusercontent.com` into `public/`.
- **Real self-hosted fonts** — Array, Satoshi, and Cabinet Grotesk are the project's
  actual font files (`framer.getFonts()` returns real Fontshare-hosted URLs for these),
  downloaded into `public/fonts/` and loaded via `next/font/local` in `lib/fonts.ts`.
- **Real favicon** — `app/icon.png`, downloaded from the project's actual configured
  favicon (`framer.agent.getNode("rootNode").attributes.metadata.favicon`), replacing
  the Next.js default.
- **Real logo** — `public/logos/logo-real.svg`, the actual Nav component's SVG source
  (`framer.agent.getNode("sn783izCx")`), used in Nav and Footer.
- **Real SEO metadata** — title/description/OG image pulled from the project's RootNode.
- **`components/StarRating.tsx`** — ported directly from the project's real code file
  (`rating.tsx`), not recreated.
- **Real color tokens** in `tailwind.config.ts`, pulled from the project's design tokens
  (Primary `rgb(110,239,138)`, Secondary `rgb(1,20,24)`, card/border colors, etc.).
- **Scroll-reveal animation** (`components/Reveal.tsx`) — reproduces the project's
  dominant appear effect (used on ~80% of animated nodes): `threshold:0.5`, trigger
  `onInView` (once), `opacity:0→1` / `y:50→0`, `spring-physics(320, 70, 1, 0.2s)`,
  implemented with matching framer-motion spring params.
- **Primary button** (`components/CtaButton.tsx`) — rewritten from the component's real
  node tree (`framer.agent.getNode("IYmDo4Yhz")`), matching all three structural layers:
  the 1.4px "container" ring (`rgba(110,240,138,0.24)` → hover `0.71`, box-shadow
  `0px 1px 9px rgba(255,255,255,0)` → `0px 1px 7px rgba(255,255,255,0.24)`), the dark
  "Inner Container" pill (`rgb(1,15,18)` → hover `rgb(3,22,26)`, `16px 100px` padding),
  and all 7 real blurred glow-blob layers at their real positions/sizes/colors (2 ambient
  blobs outside the ring, 3 solid blobs clipped to the ring, 2 radial-gradient blobs
  inside the pill) — several of which grow larger on hover per the real `$gesture:"hover"`
  replica. Text color is the real "Primary" token → "white 80" token
  (`rgba(219,219,219,0.8)`). Transition is the component's real
  `spring-physics(500, 60, 1, 0s)`.
- **Custom cursor removed** — the "Cursor" component effect from the first pass was
  removed per explicit request to keep interaction simple; the site now uses the
  default pointer everywhere.
- **Smooth scroll** (`components/SmoothScroll.tsx`) — Lenis-based, reproducing the
  project's "Smooth Scroll" effect component (intensity 6).
- **Ticker / marquee** (`components/Ticker.tsx`) — uses the real speed/gap/direction
  control values read off the project's Ticker instances.
- **Bottom blur gradient** (`components/BlurGradient.tsx`) — reproduces the real "Blur
  Gradient" effect (blur 7px, direction down), confirmed used on Home and Pricing.
- **Real Phosphor icons** — `@phosphor-icons/react` installed; icons mapped by their
  real names read from `$control__name`/`$control__iconName` (CheckCircle, Check, X,
  ArrowUpRight), replacing the emoji/text substitutes from the first pass.
- **Real Cal.com embed** (`components/CalEmbed.tsx`) — the actual footer booking script
  (`calLink: "nareshmeetei/15min"`), ported and wired to load client-side.

## Fidelity correction (from the first pass)

`RichTextNode.name` in Framer's node data is a **cached snapshot**, not always in sync
with what's actually rendered. Several nodes had stale `.name` values that didn't match
their real `TextRun.text` content — most importantly the hero headline, hero subtext,
footer heading, and 404 copy, all of which showed generic Framer-template placeholder
text in `.name` ("Elevate Your Brand with Subscription Design Services...", "Using socio
framer template...") while their real rendered content was completely different. This
pass re-extracted every text node from its `TextRun.text` values instead, which fixed a
meaningful chunk of the copy across Home, Footer, and 404.

Two nodes (`d6pbWhGKK` / `ptBJnffoB`) turned out to be genuine leftover Framer-marketplace
**template vendor** promo copy (a "thanks for using our template, here's a Framer Pro
discount code" note addressed to `hello@framebase.design`) sitting off-canvas — this was
correctly excluded as it isn't Hayoom Design's own content.

## Remaining gaps

1. **Fonts genuinely unobtainable** — Basement Grotesque, MatrixType, MatrixType Display,
   Pixeloid Mono, Pixeloid Sans, OffBit Trial, LCD Solid, and Argon Demo returned no file
   URL from `framer.getFonts()` (true custom-uploaded fonts aren't exposed to plugins per
   Framer's own API docs). These are used sparingly (small badges/labels) and currently
   fall back to Satoshi/PT Mono. If exact parity matters, these need to be manually
   exported from Framer's font settings and re-licensed for self-hosting.
2. **Pricing page tier data is likely under-edited template content on the live site
   itself** — the real extracted tier names/prices (Premium $4490/mo, Elite $6990/mo, MVP
   $9990 one-time) and feature lists ("AI-powered personal assistant", "AI integrations",
   etc.) read as generic AI-SaaS template boilerplate rather than Hayoom Design's actual
   design-agency offering, and don't match the retainer pricing used elsewhere on the site
   ($4,995/mo in the comparison table, $4,495/mo in the Process section, $3,995 one-time
   project). This is rendered exactly as found rather than reconciled or invented — worth
   checking with the live Framer project owner whether `/pricing` needs a real content
   pass, since it's plausible it was never fully customized after being installed from a
   marketplace template.
3. **Monthly/quarterly toggle pairing on `/pricing`** — the real quarterly totals/savings
   text was matched to its monthly price by proximity in the node tree, not by an explicit
   relational field; verify the pairing against the live site if this page goes live as-is.
4. **Animated gradient background** is a CSS approximation (blurred rotating radial
   gradients using the real Mist-preset colors) of what's a WebGL/shader effect in Framer
   — visually similar but not pixel-identical.
5. **npm audit** — 2 vulnerabilities (1 moderate: postcss, bundled inside Next's own
   dependency tree; 1 high: several Next.js 14.2.x CVEs) remain. Fixing the high one
   requires upgrading to Next 15/16, which is an App Router-affecting major version bump
   out of scope for this pass — flagging rather than risking an untested breaking change
   right before a production deploy.
6. **Forms/checkout** — all CTA buttons point to the real DodoPayments checkout URL
   pulled from the project; confirm the linked product/quantity is still correct.
