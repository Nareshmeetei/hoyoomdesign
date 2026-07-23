"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    Cal?: any;
  }
}

// Reproduces the project's real footer Cal.com HTML embed (calLink: "nareshmeetei/15min"),
// ported from the embed script extracted out of the Footer component definition.
export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = document;
      C.Cal =
        C.Cal ||
        function (...args: any[]) {
          const cal = C.Cal;
          const ar = args;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function (...apiArgs: any[]) {
              p(api, apiArgs);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "15min", { origin: "https://app.cal.com" });
    window.Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view", theme: "dark" },
      calLink: "nareshmeetei/15min",
    });
    window.Cal.ns["15min"]("ui", {
      theme: "dark",
      cssVarsPerTheme: { dark: { "cal-brand": "#6EEF8A" } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id="my-cal-inline-15min"
      style={{ width: "100%", height: "600px", overflow: "scroll" }}
      className="rounded-2xl border border-white/10"
    />
  );
}
