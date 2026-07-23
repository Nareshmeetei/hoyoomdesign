import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Hayoom Design",
};

const CHECKOUT_URL = "https://checkout.dodopayments.com/buy/pdt_luow17L2Ht890y4x5it8m?quantity=1";

const tiers = [
  {
    name: "Basic",
    price: "$4,495",
    period: "/month",
    cta: "Pay to Secure Your Spot",
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
    name: "Popular",
    price: "$6,995",
    period: "/month",
    cta: "Pay to Secure Your Spot",
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
    name: "Enterprise",
    price: "Custom",
    period: "",
    cta: "Pay to Secure Your Spot",
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
        <p className="text-primary text-xs font-mono uppercase tracking-wide mb-3 text-center">Pricing</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white text-center mb-4">
          Start simple. Scale confidently.
        </h1>
        <p className="text-white/60 text-center max-w-xl mx-auto mb-16">
          Only pay for what your team needs. Pause or cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-3xl p-8 border ${
                tier.highlighted ? "border-primary bg-cardBg relative" : "border-white/10 bg-cardBg"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-wide text-secondary bg-primary rounded-full px-3 py-1">
                  Popular
                </span>
              )}
              <h2 className="font-heading text-2xl font-bold text-white mb-2">{tier.name}</h2>
              <p className="mb-6">
                <span className="text-3xl font-bold text-white">{tier.price}</span>
                <span className="text-white/50 text-sm">{tier.period}</span>
              </p>
              <ul className="flex flex-col gap-3 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-white/70 text-sm">
                    <span className="text-primary mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center rounded-full font-medium px-6 py-3 transition-opacity hover:opacity-90 ${
                  tier.highlighted ? "bg-primary text-secondary" : "border border-white/20 text-white"
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
