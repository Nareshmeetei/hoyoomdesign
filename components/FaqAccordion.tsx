"use client";

import { useState } from "react";

type Faq = { question: string; answer: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={faq.question} className="rounded-2xl border border-white/10 bg-cardBg overflow-hidden">
            <button
              className="w-full flex items-center justify-between text-left px-6 py-5"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="text-white font-medium pr-4">{faq.question}</span>
              <span className="text-primary text-xl shrink-0">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-6 pb-5 text-white/65 text-sm leading-relaxed">{faq.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
