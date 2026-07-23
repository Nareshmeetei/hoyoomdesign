import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import FaqAccordion from "@/components/FaqAccordion";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import Ticker from "@/components/Ticker";
import AnimatedGradient from "@/components/AnimatedGradient";
import { Icon } from "@/components/icons";
import faqs from "@/content/faqs.json";

const CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1";

const benefits = [
  {
    image: "/images/OFy8jmlutQpx6iv1xxC6KeDaxLE.png",
    heading: "1. High-Converting Site in 14 Days",
    description: "Skip the typical 3-month agency timeline. Get your new high-converting site live and selling in just 14 days.",
  },
  {
    image: "/images/B876zk12efG1i1kyHi4L1axks.png",
    heading: "2. Websites That Actually Sell",
    description: "Not just something that looks good. The one that drives leads, closes deals, and boosts your conversions by up to 200%",
  },
  {
    image: "/images/AKq5xNZYif9pJDV9GnkqtgXdz4.png",
    heading: "3. High-Impact, Buyer-Focused Design",
    description: "Get persuasive design and copy, backed by B2B buyer psychology and proven across 100+ sites. Crafted to turn visitors into buyers.",
  },
  {
    image: "/images/rnytUvBPzqcoULmekjeNEFeBbw.png",
    heading: "4. Fast and Clear Process",
    description: "Need a quick sprint or a full launch-ready overhaul? Go one-off or on retainer, whatever moves your product forward faster.",
  },
];

const problems = [
  "Deals worth thousands",
  "Monthly wasted marketing spend",
  "Leads going to your competitors",
  "Frustrated users and lost trust",
];

const process = [
  { title: "Step 01", text: "You invest $4,495/month by subscribing to the Hayoom Design retainer." },
  { title: "Step 02", text: "Start requesting whatever you'd like, from UI/UX to logo & brand identity." },
  { title: "Step 03", text: "Receive the world-class designs within 2 business days on average." },
];

const services = [
  { title: "Product Design (UI/UX)", text: "Clean UI/UX that turns complex ideas into joyful experiences your users will love." },
  { title: "Positioning & Copywriting", text: "Clear positioning and messaging that vibe with the right people and turn them into fans." },
  { title: "Brand Identity & Branding", text: "Premium brand identity and branding that helps you stand out and sticks in people's minds." },
  { title: "Website Design & Development", text: "Get high-converting website that also looks great and world-class in just 10 days." },
];

const stats = [
  { number: "11+", text: "Years of experience" },
  { number: "200%", text: "Increase in conversion*" },
  { number: "97%", text: "Client satisfaction rate" },
  { number: "90%", text: "Cost savings" },
];

const testimonials = [
  { title: "Clement Eloy", bio: "Founder & CEO", quote: "We got the ROI in under 90 days. We're extremely happy about the results. Started sawing results in under 30 days." },
  { title: "Raj B.", bio: "Founder, Dealintent", quote: "Naresh's designs speak for themselves bold, strategic, and impactful. He took the time to understand our product, delivering." },
  { title: "Dogen Sharma", bio: "Founder, Pro Health", quote: "From the initial concept to the final product, he was there to support and enhance our ideas. Highly recommended for any serious project." },
  { title: "Sud Parsar", bio: "Founder, ReferScout", quote: "Hayoom Design never ceases to amaze us. We couldn't ask for a better partner for our design needs. Will get more designs done!" },
];

const deliverables = [
  "Dedicated designer who works like a co-founder",
  "Product design (UI/UX)",
  "Positioning, branding & copy",
  "Product strategy",
  "High-coverting site design & development",
  "Async workflow (Slack, Loom, Notion)",
  "Avg. 48 hour delivery",
  "Easy pause or cancel anytime you want",
];

// Real comparison table: framer.agent.getNode + TextRun extraction, "Comparision" section.
const comparisonColumns = ["Hayoom", "Agencies", "Freelancers", "In-House"];
const comparisonRows: { label: string; statuses: ("Check" | "X")[] }[] = [
  { label: "Premium Quality", statuses: ["Check", "Check", "Check", "Check"] },
  { label: "Simple Fixed Pricing", statuses: ["Check", "X", "X", "X"] },
  { label: "Hold Daily Meetings to Plan the Next Meeting", statuses: ["X", "Check", "X", "Check"] },
  { label: "B2B SaaS Specialization", statuses: ["Check", "X", "X", "X"] },
  { label: "Conversion Guarantee", statuses: ["Check", "X", "X", "X"] },
  { label: "Making You Train Them on Your Industry", statuses: ["X", "Check", "Check", "Check"] },
  { label: "Fast Turnaround", statuses: ["Check", "X", "X", "Check"] },
  { label: "Money-back Guarantee", statuses: ["Check", "X", "X", "X"] },
];
const comparisonCost = ["$4,995/month", "$50,000+", "$25-150/h", "$220K+/yr"];

const industries = ["AI/ML", "DEEP TECH", "CLIMATE TECH", "B2B AI SAAS"];

// Real citation-backed stat cards ("why redesign matters" section).
const whyStats = [
  { stat: "It takes just 0.05 seconds for visitors to form an opinion about your website. So first impressions truly drive your conversions.", source: "Google Research, Behaviour & Information Technology (Lindgaard et al.)" },
  { stat: "Companies with modern, conversion-optimized websites see up to 200% higher lead generation compared to outdated designs.", source: "HubSpot, The Science of Website Redesign, and Stanford Persuasive Technology Lab" },
  { stat: "75% of visitors admit to judging a company's credibility based on its website design.", source: "Stanford Web Credibility Research" },
  { stat: "Intuitive website UX can increase SaaS conversion rates by up to 200%.", source: "Pangolin Marketing, highlighted by Divami" },
];

const companyLogos = ["Dealintent", "ReferScout", "Personiq", "Gavel", "Foyrr"];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden">
        <AnimatedGradient color1="rgb(2,23,17)" color2="rgb(19,171,130)" color3="rgb(1,18,13)" rotation={127} speed={20} className="opacity-60" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block mb-6 text-xs font-mono uppercase tracking-wide text-primary border border-primary/30 rounded-full px-3 py-1">
            Crafting Unique Brand Identities
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-[80px] font-medium text-primary leading-[1.2] mb-6">
            Growth-Focused Design For Future-Builders
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            Product Design (UI/UX) | Branding | Positioning | Copywriting | Website
          </p>
          <div className="flex flex-col items-center gap-4">
            <CtaButton href={CHECKOUT_URL} external>
              Test Us Out For Just $495
            </CtaButton>
            <StarRating rating={5} starColor="rgba(255,255,255,0.5)" filledColor="rgba(255,255,255,0.5)" starSize={24} />
            <span className="text-white/50 text-sm">Loved by 20+ Founders</span>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Problems</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3">
              Hidden Cost of &ldquo;Meh&rdquo; Designs
            </h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">Every month with a weak designs cost you&hellip;</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {problems.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-cardBg p-6 text-center h-full">
                  <p className="text-white/80 text-sm">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">We Get It. You Need Results Fast.</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3">
              The Design Advantage You&rsquo;ve Been Missing
            </h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">
              Designs so sharp and strategic, your competitors will start panic-Googling &ldquo;How to catch up.&rdquo;
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.heading} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-cardBg p-6 h-full">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black/40">
                    <Image src={b.image} alt={b.heading} fill className="object-cover" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white mb-2">{b.heading}</h3>
                  <p className="text-white/65 text-sm leading-relaxed">{b.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton href={CHECKOUT_URL} external>
              Test Us Out For Just $495
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              3 Simple Steps To Start Growing:
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-cardBg p-6 h-full">
                  <span className="text-primary font-mono text-sm">{step.title}</span>
                  <p className="text-white/80 mt-3">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton href={CHECKOUT_URL} external>
              Subscribe to Secure Your Spot
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Companies ticker */}
      <section className="py-10 border-t border-white/10">
        <Ticker speed={50} gap={100} direction="Left">
          {companyLogos.map((name) => (
            <span key={name} className="text-white/30 text-xl font-heading whitespace-nowrap px-6">
              {name}
            </span>
          ))}
        </Ticker>
      </section>

      {/* Comparison table */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Comparison</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3">
              Hayoom Design vs. Them (Spoiler: We Win)
            </h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">
              Big agencies wine and dine. Freelancers whine and vanish. We deliver results, no fluff.
            </p>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-cardBg">
              <table className="w-full text-sm min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-white/50 font-normal px-4 py-4">Features</th>
                    {comparisonColumns.map((c) => (
                      <th key={c} className={`px-4 py-4 font-heading ${c === "Hayoom" ? "text-primary" : "text-white/70"}`}>
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.label} className="border-b border-white/5 last:border-0">
                      <td className="text-left text-white/75 px-4 py-4">{row.label}</td>
                      {row.statuses.map((s, i) => (
                        <td key={i} className="px-4 py-4 text-center">
                          {s === "Check" ? (
                            <Icon name="Check" size={18} weight="bold" className="inline text-primary" />
                          ) : (
                            <Icon name="X" size={18} weight="bold" className="inline text-warningRed" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <td className="text-left text-white font-medium px-4 py-4">Cost</td>
                    {comparisonCost.map((c, i) => (
                      <td key={i} className={`px-4 py-4 text-center font-heading ${i === 0 ? "text-primary" : "text-white/70"}`}>
                        {c}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why redesign matters (citation stats) */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyStats.map((w, i) => (
            <Reveal key={w.source} delay={i * 0.05}>
              <div className="rounded-2xl border border-white/10 bg-cardBg p-6 h-full">
                <p className="text-white text-base leading-relaxed mb-3">{w.stat}</p>
                <p className="text-white/40 text-xs">Source: {w.source}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects / Case Studies */}
      <section id="projects" className="px-6 py-20 border-t border-white/10">
        <Reveal className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Some Latest Projects Our Clients Loved</h2>
          <Link href="/case-study" className="inline-flex items-center rounded-full border border-white/20 text-white font-medium px-8 py-4 hover:bg-white/5 transition-colors mt-6">
            View Case Studies
          </Link>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.text} delay={i * 0.05}>
              <p className="font-heading text-4xl font-bold text-primary mb-1">{s.number}</p>
              <p className="text-white/60 text-sm">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Words We Didn&rsquo;t Pay Them to Say
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-cardBg p-6 h-full">
                  <p className="text-white/80 mb-4">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-white font-medium">{t.title}</p>
                  <p className="text-white/50 text-sm">{t.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Retainer / Investment CTA */}
      <section id="pricing" className="px-6 py-20 border-t border-white/10">
        <Reveal className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-cardBg p-10">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Investment</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-1">
            The &ldquo;Why Didn&rsquo;t We Do This Sooner?&rdquo; Investment
          </h2>
          <div className="text-center my-6">
            <span className="font-heading text-4xl font-bold text-primary">$4995</span>
            <span className="text-white/50"> /Month</span>
          </div>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-8">
            Perfect for startups and small teams that need a senior design partner every month without the cost of an in-house team.
          </p>
          <p className="text-white font-medium mb-4">What&rsquo;s Included:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-white/75 text-sm">
                <Icon name="CheckCircle" size={16} weight="fill" className="text-primary mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CtaButton href={CHECKOUT_URL} external>
              Book a Call to Secure Your Spot
            </CtaButton>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white font-medium px-8 py-4 hover:bg-white/5 transition-colors">
              See Full Pricing
            </Link>
          </div>
          <p className="text-white/40 text-xs text-center mt-6">
            Need a one-time project instead? We got it! One-Time Project Starts at $3995 &mdash; simple and transparent pricing, no complex or hidden contract surprises.
          </p>
        </Reveal>
      </section>

      {/* Services */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">All Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3">Here&rsquo;s What All We Do</h2>
            <p className="text-white/60 text-center max-w-xl mx-auto mb-12">
              From sleek and delightful UI/UX to magnetic branding, we&rsquo;ve got your back(end).
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-white/10 bg-cardBg p-6 h-full">
                  <h3 className="font-heading text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-white/65 text-sm">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <CtaButton href="/pricing">Activate Your Design Retainer</CtaButton>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="px-6 py-20 border-t border-white/10">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3">Industries</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">Industries We Specialize In</h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            When you work with industry specialists, you explain less and build more.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <span key={ind} className="rounded-full border border-white/15 text-white/80 text-sm font-mono px-4 py-2">
                {ind}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">No Surprises</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-3">Frequently Asked Questions</h2>
            <p className="text-white/60 text-center mb-12">
              Let&rsquo;s make sure it&rsquo;s clear before you say &ldquo;let&rsquo;s do this.&rdquo;
            </p>
          </Reveal>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
