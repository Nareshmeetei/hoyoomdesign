import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";
import FaqAccordion from "@/components/FaqAccordion";
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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block mb-6 text-xs font-mono uppercase tracking-wide text-primary border border-primary/30 rounded-full px-3 py-1">
            Crafting Unique Brand Identities
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-6">
            Elevate Your Brand with Subscription Design Services
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto mb-8">
            High-converting, buyer-focused design for B2B SaaS &mdash; delivered on a fast, flat-rate subscription.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity"
            >
              Test Us Out For Just $495
            </a>
            <StarRating rating={5} starColor="rgba(255,255,255,0.5)" filledColor="rgba(255,255,255,0.5)" starSize={24} />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Problems</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
            What a weak website is costing you
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {problems.map((p) => (
              <div key={p} className="rounded-2xl border border-white/10 bg-cardBg p-6 text-center">
                <p className="text-white/80 text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Benefits of Hayoom Design</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.heading} className="rounded-2xl border border-white/10 bg-cardBg p-6">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-4 bg-black/40">
                  <Image src={b.image} alt={b.heading} fill className="object-cover" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{b.heading}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity">
              Test Us Out For Just $495
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Start simple. Scale confidently.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {process.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-cardBg p-6">
                <span className="text-primary font-mono text-sm">{step.title}</span>
                <p className="text-white/80 mt-3">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity">
              Subscribe to Secure Your Spot
            </a>
          </div>
        </div>
      </section>

      {/* Projects / Case Studies */}
      <section id="projects" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3">Projects</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">Real results for real founders</h2>
          <Link
            href="/case-study"
            className="inline-flex items-center rounded-full border border-white/20 text-white font-medium px-8 py-4 hover:bg-white/5 transition-colors"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.text}>
              <p className="font-heading text-4xl font-bold text-primary mb-1">{s.number}</p>
              <p className="text-white/60 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Testimonials</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.title} className="rounded-2xl border border-white/10 bg-cardBg p-6">
                <p className="text-white/80 mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-white font-medium">{t.title}</p>
                <p className="text-white/50 text-sm">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables / mini pricing CTA */}
      <section id="pricing" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-cardBg p-10">
          <span className="inline-block mb-4 text-xs font-mono uppercase tracking-wide text-primary border border-primary/30 rounded-full px-3 py-1">
            Pause or Cancel Anytime
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-6">
            Invest in Design That Performs
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
            {deliverables.map((d) => (
              <li key={d} className="flex items-start gap-2 text-white/75 text-sm">
                <span className="text-primary mt-0.5">✓</span>
                {d}
              </li>
            ))}
          </ul>
          <div className="flex flex-col md:flex-row gap-4">
            <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity">
              Book a Call to Secure Your Spot
            </a>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/20 text-white font-medium px-8 py-4 hover:bg-white/5 transition-colors">
              See Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">All Services</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-cardBg p-6">
                <h3 className="font-heading text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-white/65 text-sm">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/pricing" className="inline-flex items-center rounded-full bg-primary text-secondary font-medium px-8 py-4 hover:opacity-90 transition-opacity">
              Activate Your Design Retainer
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-20 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">FAQs</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Frequently asked questions
          </h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>
    </>
  );
}
