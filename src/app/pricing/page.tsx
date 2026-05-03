import Link from "next/link";
import {
  ArrowRight,
  BackgroundFx,
  Footer,
  GitHubIcon,
  Nav,
} from "@/components/site";

export const metadata = {
  title: "Pricing — AI IDE",
  description:
    "Simple, commitment-based pricing for AI IDE. The longer you commit, the more you save. 6-month plan recommended.",
};

type Plan = {
  id: "monthly" | "3-month" | "6-month" | "12-month";
  duration: string;
  totalMonths: number;
  monthly: number;
  total: number;
  saveLabel?: string;
  recommended?: boolean;
  blurb: string;
};

const PLANS: Plan[] = [
  {
    id: "monthly",
    duration: "Monthly",
    totalMonths: 1,
    monthly: 20,
    total: 20,
    blurb: "Try it out. Cancel anytime.",
  },
  {
    id: "3-month",
    duration: "3 Months",
    totalMonths: 3,
    monthly: 18,
    total: 54,
    saveLabel: "Save 10%",
    blurb: "A short commitment for short projects.",
  },
  {
    id: "6-month",
    duration: "6 Months",
    totalMonths: 6,
    monthly: 15,
    total: 90,
    saveLabel: "Save 25%",
    recommended: true,
    blurb: "The sweet spot. Most builders pick this.",
  },
  {
    id: "12-month",
    duration: "12 Months",
    totalMonths: 12,
    monthly: 12,
    total: 144,
    saveLabel: "Save 40%",
    blurb: "For teams and serial shippers.",
  },
];

const FEATURES = [
  "Unlimited AI chat with project-aware context",
  "RAG over your full codebase (Supabase pgvector)",
  "Multi-agent backend — RAG, edit, terminal",
  "Monaco editor with all themes",
  "Drag-and-drop project import",
  "Bring your own model (OpenAI / Ollama)",
  "Auto-saved cloud workspaces",
  "Priority support",
];

export default function PricingPage() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <BackgroundFx />
      <Nav active="pricing" />

      <PricingHero />
      <PlansGrid />
      <Comparison />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function PricingHero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-10 sm:pt-32">
      <div className="flex flex-col items-center text-center animate-float-up">
        <span className="mb-6 inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
          Pricing
        </span>
        <h1 className="max-w-3xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          One product.{" "}
          <span className="bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent glow-text">
            Pick your commitment.
          </span>
        </h1>
        <p className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          Every plan ships the full AI IDE — same features, same agents, same
          editor. The longer you commit, the less you pay.
        </p>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Plans grid                                                                 */
/* -------------------------------------------------------------------------- */

function PlansGrid() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-10 pb-16">
      <div className="grid gap-5 lg:grid-cols-4">
        {PLANS.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
      <p className="mt-8 text-center text-xs text-muted">
        Prices in USD. Renews automatically at the end of the term — cancel any
        time before renewal.
      </p>
    </section>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  const recommended = !!plan.recommended;
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-7 transition-all ${
        recommended
          ? "gradient-border border-transparent bg-panel shadow-[0_30px_80px_-20px_rgba(88,166,255,0.35)] lg:-translate-y-3 lg:scale-[1.03]"
          : "border-white/[0.06] bg-panel hover:border-white/10 hover:bg-white/[0.02]"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-background shadow-[0_0_24px_-4px_rgba(88,166,255,0.7)]">
            <SparkIcon className="h-3 w-3" />
            Recommended
          </span>
        </div>
      )}

      <div className="flex items-baseline justify-between">
        <h3 className="text-base font-semibold tracking-tight">
          {plan.duration}
        </h3>
        {plan.saveLabel && (
          <span
            className={`rounded-md px-2 py-0.5 text-[11px] font-semibold ${
              recommended
                ? "bg-accent/15 text-accent"
                : "bg-white/[0.05] text-muted"
            }`}
          >
            {plan.saveLabel}
          </span>
        )}
      </div>

      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-4xl font-semibold tracking-tight">
          ${plan.monthly}
        </span>
        <span className="text-sm text-muted">/mo</span>
      </div>

      <p className="mt-1 text-xs text-muted">
        {plan.totalMonths === 1 ? (
          <>Billed monthly</>
        ) : (
          <>
            ${plan.total} billed every {plan.totalMonths} months
          </>
        )}
      </p>

      <p className="mt-4 text-sm leading-relaxed text-muted">{plan.blurb}</p>

      <Link
        href="#"
        className={`mt-6 group flex h-10 items-center justify-center gap-1.5 rounded-xl px-4 text-sm font-semibold transition-all ${
          recommended
            ? "bg-foreground text-background hover:scale-[1.02] hover:shadow-[0_8px_40px_-8px_rgba(230,237,243,0.5)]"
            : "border border-white/10 bg-white/[0.03] text-foreground hover:border-white/20 hover:bg-white/[0.06]"
        }`}
      >
        Start with {plan.duration.toLowerCase()}
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </Link>

      <ul className="mt-7 space-y-2.5 border-t border-white/[0.06] pt-6 text-sm">
        {FEATURES.slice(0, 4).map((f) => (
          <li
            key={f}
            className="flex items-start gap-2.5 leading-relaxed text-foreground/85"
          >
            <CheckIcon
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                recommended ? "text-accent" : "text-accent-3"
              }`}
            />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Comparison / Everything included                                           */
/* -------------------------------------------------------------------------- */

function Comparison() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 py-20">
      <div className="rounded-2xl border border-white/[0.06] bg-panel p-8 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
              Every plan includes
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
              No tiers. No paywalled features.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              You get the full IDE on day one — multi-agent backend, RAG, the
              Monaco editor, themes, and the terminal. The only thing that
              changes is how long you&apos;re paying for.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm leading-relaxed"
              >
                <CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

function FAQ() {
  const faqs = [
    {
      q: "Why is the 6-month plan recommended?",
      a: "It's the sweet spot for most builders — long enough to ship a real product with the IDE, short enough that you're not over-committing. The 25% discount also lands at a satisfying $15/month.",
    },
    {
      q: "What happens at the end of my term?",
      a: "Your plan auto-renews at the same duration unless you change it. You can switch plans or cancel any time before renewal from your account settings.",
    },
    {
      q: "Can I switch plans mid-term?",
      a: "Yes. Upgrade to a longer commitment any time and we'll prorate the difference. Downgrades take effect at the next renewal.",
    },
    {
      q: "Do you offer team plans?",
      a: "Team plans are coming soon. In the meantime, reach out and we'll set you up with a custom multi-seat arrangement.",
    },
    {
      q: "Can I bring my own AI model?",
      a: "Absolutely. AI IDE works with OpenAI keys or a local Ollama install — your subscription covers the IDE itself, not model usage.",
    },
    {
      q: "Is there a free trial?",
      a: "The monthly plan is your trial. Cancel within 7 days for a full refund, no questions asked.",
    },
  ];

  return (
    <section className="relative mx-auto w-full max-w-4xl px-6 py-20">
      <div className="text-center">
        <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
          FAQ
        </span>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          Questions, answered.
        </h2>
      </div>
      <div className="mt-12 grid gap-3">
        {faqs.map((f) => (
          <details
            key={f.q}
            className="group rounded-xl border border-white/[0.06] bg-panel px-6 py-5 transition-colors hover:border-white/10 open:border-white/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium tracking-tight">
              {f.q}
              <PlusIcon className="h-4 w-4 flex-shrink-0 text-muted transition-transform group-open:rotate-45" />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Final CTA                                                                  */
/* -------------------------------------------------------------------------- */

function FinalCTA() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-4 pb-24">
      <div className="gradient-border relative overflow-hidden rounded-3xl bg-panel p-12 text-center sm:p-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(88,166,255,0.18),transparent_70%)]" />
        <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="bg-grid h-full w-full" />
        </div>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          Pick a plan. Open the IDE.{" "}
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Start shipping.
          </span>
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="group flex h-11 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-all hover:scale-[1.02]"
          >
            Get the 6-month plan
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://github.com"
            className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 text-sm font-medium transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <GitHubIcon className="h-4 w-4" />
            Star on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12.5l4.5 4.5L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z"
        fill="currentColor"
      />
    </svg>
  );
}
