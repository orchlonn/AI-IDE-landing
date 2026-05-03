import Link from "next/link";

type NavKey = "features" | "agents" | "how-it-works" | "pricing";

export function BackgroundFx() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="bg-grid bg-grid-fade absolute inset-0" />
      <div className="absolute -top-40 left-1/2 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(88,166,255,0.18),rgba(163,113,247,0.08)_40%,transparent_75%)] blur-2xl" />
      <div className="absolute top-[55%] -left-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgba(163,113,247,0.18),transparent_70%)] blur-3xl" />
      <div className="absolute top-[70%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(63,185,80,0.12),transparent_70%)] blur-3xl" />
    </div>
  );
}

export function Logo() {
  return (
    <div className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-[13px] font-bold text-background shadow-[0_0_24px_-4px_rgba(88,166,255,0.7)]">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="M9 6 4 12l5 6M15 6l5 6-5 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export function Nav({ active }: { active?: NavKey }) {
  const linkClass = (key: NavKey) =>
    `transition-colors hover:text-foreground ${
      active === key ? "text-foreground" : "text-muted"
    }`;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            AI IDE
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link href="/#features" className={linkClass("features")}>
            Features
          </Link>
          <Link href="/#agents" className={linkClass("agents")}>
            Agents
          </Link>
          <Link href="/#how-it-works" className={linkClass("how-it-works")}>
            How it works
          </Link>
          <Link href="/pricing" className={linkClass("pricing")}>
            Pricing
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors hover:text-foreground"
          >
            GitHub
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="#"
            className="hidden h-9 items-center rounded-lg px-3 text-sm text-muted transition-colors hover:text-foreground sm:flex"
          >
            Sign in
          </Link>
          <Link
            href="#"
            className="group flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3.5 text-sm font-medium text-foreground transition-all hover:border-accent/40 hover:bg-accent/10"
          >
            Launch IDE
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="relative mx-auto mt-12 w-full max-w-6xl border-t border-white/[0.06] px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold text-foreground">AI IDE</span>
          <span className="text-muted/70">© 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#agents"
            className="transition-colors hover:text-foreground"
          >
            Agents
          </Link>
          <Link
            href="/pricing"
            className="transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a href="#" className="transition-colors hover:text-foreground">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
    </svg>
  );
}
