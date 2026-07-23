import type { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import { Icon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pricing | Hayoom Design",
};

const CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1";

// Real tier names/prices/features: framer.agent.getNode("zBSDgEXjc") ->
// "Desktop-annually" variant, real TextRun content (not the stale RichTextNode.name cache).
const tiers = [
  {
    name: "Premium",
    priceMonthly: "$4490",
    priceQuarterly: "$3490",
    quarterlyTotal: "Total payment: $11,970 (you save $3,000)",
    description: "Perfect for small businesses starting with AI automation.",
    highlighted: false,
    features: [
      "Basic workflow automation",
      "AI-powered personal assistant",
      "Standard analytics & reporting",
      "Email & chat support",
      "Up to 3 AI integrations",
    ],
  },
  {
    name: "Elite",
    priceMonthly: "$6990",
    priceQuarterly: "$5490",
    quarterlyTotal: "Total investment: $17,970 (you save $4,500)",
    description: "Perfect for small businesses starting with AI automation.",
    highlighted: true,
    features: [
      "Advanced workflow automation",
      "AI-driven sales & marketing tools",
      "Enhanced data analytics & insights",
      "Priority customer support",
      "Up to 10 AI integrations",
    ],
  },
  {
    name: "MVP",
    priceOneTime: "$9990",
    description: "Get well designed and functional launch-ready MVP in just 4 weeks",
    highlighted: false,
    features: [
      "Fully customizable AI automation",
      "Dedicated AI business consultant",
      "Enterprise-grade compliance",
      "24/7 VIP support",
      "Unlimited AI integrations",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Pricing</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Simple and Transparent
          </h1>
          <p className="text-white/60 text-center max-w-xl mx-auto mb-16">
            Choose a plan that fits your business needs and start automating with AI
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.08}>
              <div
                className={`rounded-3xl p-8 border h-full flex flex-col ${
                  tier.highlighted ? "border-primary bg-cardBg relative" : "border-white/10 bg-cardBg"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-wide text-secondary bg-primary rounded-full px-3 py-1">
                    Popular
                  </span>
                )}
                <h2 className="font-heading text-2xl font-bold text-white mb-2">{tier.name}</h2>
                {tier.priceOneTime ? (
                  <p className="mb-2">
                    <span className="text-3xl font-bold text-white">{tier.priceOneTime}</span>
                    <span className="text-white/50 text-sm block">One-time-investment</span>
                  </p>
                ) : (
                  <p className="mb-2">
                    <span className="text-3xl font-bold text-white">{tier.priceMonthly}</span>
                    <span className="text-white/50 text-sm"> /month</span>
                  </p>
                )}
                {tier.priceQuarterly && (
                  <p className="text-white/40 text-xs mb-2">
                    or {tier.priceQuarterly}/month billed quarterly &mdash; {tier.quarterlyTotal}
                  </p>
                )}
                <p className="text-white/60 text-sm mb-6">{tier.description}</p>
                <p className="text-white/80 text-sm font-medium mb-3">What&rsquo;s Included:</p>
                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-white/70 text-sm">
                      <Icon name="CheckCircle" size={16} weight="fill" className="text-primary mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaButton href={CHECKOUT_URL} external className="w-full">
                  Pay to Secure Your Spot
                </CtaButton>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="max-w-2xl mx-auto mt-20 text-center">
          <p className="text-white/80 text-lg mb-2">
            &ldquo;Hayoom&rsquo;s design didn&rsquo;t just look great, it brought in more leads and users within
            weeks. Easily the best ROI we&rsquo;ve had.&rdquo;
          </p>
          <p className="text-white/50 text-sm">Raj B. &mdash; Founder, Dealintent</p>
        </Reveal>
      </div>
    </div>
  );
}
