import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <BackgroundFx />
      <Nav />
      <Hero />
      <LogosRow />
      <IDEPreview />
      <Features />
      <AgentsSection />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/* Background                                                                 */
/* -------------------------------------------------------------------------- */

function BackgroundFx() {
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

/* -------------------------------------------------------------------------- */
/* Nav                                                                        */
/* -------------------------------------------------------------------------- */

function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-[15px] font-semibold tracking-tight">
            AI IDE
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
          <a
            href="#features"
            className="transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a href="#agents" className="transition-colors hover:text-foreground">
            Agents
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-foreground"
          >
            How it works
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground"
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

function Logo() {
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

/* -------------------------------------------------------------------------- */
/* Hero                                                                       */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-24 pb-12 sm:pt-32 sm:pb-20">
      <div className="flex flex-col items-center text-center animate-float-up">
        <a
          href="#agents"
          className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pr-4 pl-1.5 text-xs text-muted backdrop-blur transition-colors hover:border-accent/30 hover:text-foreground"
        >
          <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-accent uppercase">
            New
          </span>
          Multi-agent backend with RAG over your codebase
          <ArrowRight className="h-3 w-3" />
        </a>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          The AI-native IDE
          <br />
          <span className="bg-gradient-to-r from-accent via-accent-2 to-accent bg-clip-text text-transparent glow-text">
            built for builders.
          </span>
        </h1>

        <p className="mt-7 max-w-2xl text-balance text-base leading-relaxed text-muted sm:text-lg">
          A modern, AI-first code editor with project-aware chat, multi-agent
          retrieval, and the Monaco editor you already know — all in a single,
          fast, drag-and-drop workspace.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="group relative flex h-11 items-center gap-2 rounded-xl bg-foreground px-5 text-sm font-semibold text-background transition-all hover:scale-[1.02] hover:shadow-[0_8px_40px_-8px_rgba(230,237,243,0.5)]"
          >
            Launch the IDE
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#how-it-works"
            className="flex h-11 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-foreground transition-colors hover:border-white/20 hover:bg-white/[0.06]"
          >
            <PlayIcon className="h-4 w-4" />
            See how it works
          </Link>
        </div>

        <div className="mt-7 flex items-center gap-5 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-3 animate-pulse-soft" />
            Local-first
          </span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>Bring your own model</span>
          <span className="hidden h-3 w-px bg-white/10 sm:block" />
          <span>Open source</span>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Logos / tech row                                                           */
/* -------------------------------------------------------------------------- */

function LogosRow() {
  const stack = [
    "Next.js",
    "Monaco Editor",
    "FastAPI",
    "LangChain",
    "Ollama",
    "Supabase",
  ];
  return (
    <section className="relative mx-auto w-full max-w-5xl px-6 py-8">
      <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted">
        Built on tools you already trust
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted/90">
        {stack.map((s) => (
          <span
            key={s}
            className="opacity-80 transition-opacity hover:opacity-100"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* IDE Preview                                                                */
/* -------------------------------------------------------------------------- */

function IDEPreview() {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-6 pt-12 pb-20">
      <div className="gradient-border relative overflow-hidden rounded-2xl bg-panel shadow-[0_30px_100px_-20px_rgba(0,0,0,0.6)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border-soft bg-sidebar/80 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          </div>
          <div className="ml-3 flex items-center gap-1.5 text-xs text-muted">
            <FolderIcon className="h-3.5 w-3.5" />
            ai-ide / src / app
          </div>
          <div className="ml-auto hidden items-center gap-2 text-[11px] text-muted sm:flex">
            <span className="rounded bg-white/[0.04] px-1.5 py-0.5 font-mono">
              ⌘K
            </span>
            <span>to ask AI</span>
          </div>
        </div>

        {/* Body */}
        <div className="grid grid-cols-12 text-sm">
          {/* File tree */}
          <aside className="col-span-3 hidden border-r border-border-soft bg-sidebar/60 p-3 md:block">
            <div className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-wider text-muted">
              Explorer
            </div>
            <FileNode label="ai-ide-frontend" depth={0} folder open>
              <FileNode label="src" depth={1} folder open>
                <FileNode label="app" depth={2} folder open>
                  <FileNode label="layout.tsx" depth={3} />
                  <FileNode label="page.tsx" depth={3} active />
                  <FileNode label="globals.css" depth={3} />
                </FileNode>
                <FileNode label="components" depth={2} folder>
                  <FileNode label="EditorArea.tsx" depth={3} />
                  <FileNode label="LeftSidebar.tsx" depth={3} />
                  <FileNode label="RightSidebar.tsx" depth={3} />
                  <FileNode label="Terminal.tsx" depth={3} />
                </FileNode>
                <FileNode label="hooks" depth={2} folder>
                  <FileNode label="useChat.ts" depth={3} />
                  <FileNode label="useFileManager.ts" depth={3} />
                </FileNode>
              </FileNode>
              <FileNode label="package.json" depth={1} />
            </FileNode>
          </aside>

          {/* Editor */}
          <div className="col-span-12 flex flex-col bg-panel md:col-span-6">
            <div className="flex items-center gap-1 border-b border-border-soft bg-sidebar/40 px-2 pt-2">
              <Tab label="page.tsx" active />
              <Tab label="useChat.ts" />
              <Tab label="route.ts" />
            </div>
            <div className="mock-scroll relative max-h-[420px] overflow-auto p-4 font-mono text-[12.5px] leading-6">
              <CodeBlock />
              <div className="pointer-events-none absolute inset-x-4 top-[7.5rem] h-6 rounded animate-shimmer" />
            </div>
          </div>

          {/* Chat */}
          <aside className="col-span-12 flex flex-col border-t border-border-soft bg-panel md:col-span-3 md:border-t-0 md:border-l">
            <div className="border-b border-border-soft px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted">
              AI Chat
            </div>
            <div className="flex-1 space-y-3 overflow-hidden p-3 text-[12.5px]">
              <ChatBubble role="user">
                Why is <code className="text-accent">useChat</code> re-rendering
                on every keystroke?
              </ChatBubble>
              <ChatBubble role="assistant">
                I scanned <code className="text-accent">useChat.ts:42</code> —
                the input is in the same state object as the message list, so
                each keypress re-renders the chat tree. Split{" "}
                <code className="text-accent">chatInput</code> into its own
                state, or memoize the message list.
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-accent/30 bg-accent/10 px-2 py-1 text-[11px] text-accent">
                  <SparkIcon className="h-3 w-3" />
                  Apply fix
                </div>
              </ChatBubble>
              <div className="flex items-center gap-2 text-[11px] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-soft" />
                Indexing 142 files…
              </div>
            </div>
            <div className="border-t border-border-soft p-2">
              <div className="flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.02] px-2.5 py-2 text-[12px] text-muted">
                <span>Ask anything…</span>
                <span className="ml-auto inline-block h-3.5 w-px bg-accent animate-blink" />
              </div>
            </div>
          </aside>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-border-soft bg-sidebar/80 px-3 py-1.5 text-[11px] text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-3" />
              Connected
            </span>
            <span>main</span>
            <span>TypeScript</span>
          </div>
          <div className="flex items-center gap-3">
            <span>UTF-8</span>
            <span>Ln 24, Col 17</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FileNode({
  label,
  depth,
  folder,
  open,
  active,
  children,
}: {
  label: string;
  depth: number;
  folder?: boolean;
  open?: boolean;
  active?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <div
        className={`flex items-center gap-1.5 rounded-md px-2 py-1 text-[12px] ${
          active
            ? "bg-accent/10 text-accent"
            : "text-foreground/80 hover:bg-white/[0.03]"
        }`}
        style={{ paddingLeft: 8 + depth * 12 }}
      >
        {folder ? (
          <ChevronIcon className={`h-3 w-3 ${open ? "rotate-90" : ""}`} />
        ) : (
          <span className="w-3" />
        )}
        {folder ? (
          <FolderIcon className="h-3.5 w-3.5 text-accent/80" />
        ) : (
          <FileIcon className="h-3.5 w-3.5 text-muted" />
        )}
        <span className="truncate">{label}</span>
      </div>
      {open && children}
    </div>
  );
}

function Tab({ label, active }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-t-md border-x border-t px-3 py-1.5 text-[12px] ${
        active
          ? "border-border-soft bg-panel text-foreground"
          : "border-transparent text-muted hover:text-foreground"
      }`}
    >
      <FileIcon className="h-3 w-3" />
      {label}
    </div>
  );
}

function CodeBlock() {
  return (
    <pre className="text-foreground/90">
      <Line n={1}>
        <K>import</K> {"{ useState, useEffect }"} <K>from</K>{" "}
        <S>&quot;react&quot;</S>;
      </Line>
      <Line n={2}>
        <K>import</K> {"{ Editor }"} <K>from</K>{" "}
        <S>&quot;@monaco-editor/react&quot;</S>;
      </Line>
      <Line n={3}> </Line>
      <Line n={4}>
        <C>{"// Project-aware chat with RAG over the workspace"}</C>
      </Line>
      <Line n={5}>
        <K>export default function</K> <F>EditorArea</F>() {"{"}
      </Line>
      <Line n={6}>
        {" "}
        <K>const</K> [code, setCode] = <F>useState</F>(<S>&quot;&quot;</S>);
      </Line>
      <Line n={7}>
        {" "}
        <K>const</K> {"{ messages, send }"} = <F>useChat</F>({"{"}
      </Line>
      <Line n={8} highlight>
        {"    "}context: <V>code</V>, <V>language</V>, <V>fileTree</V>,
      </Line>
      <Line n={9}>
        {"    "}agents: [<S>&quot;rag&quot;</S>, <S>&quot;edit&quot;</S>,{" "}
        <S>&quot;terminal&quot;</S>],
      </Line>
      <Line n={10}> {"});"}</Line>
      <Line n={11}> </Line>
      <Line n={12}>
        {" "}
        <K>return</K> (
      </Line>
      <Line n={13}>
        {"    "}
        <T>&lt;Editor</T>
      </Line>
      <Line n={14}>
        {"      "}
        <P>language</P>=<S>&quot;typescript&quot;</S>
      </Line>
      <Line n={15}>
        {"      "}
        <P>theme</P>=<S>&quot;github-dark&quot;</S>
      </Line>
      <Line n={16}>
        {"      "}
        <P>value</P>={"{"}code{"}"} <P>onChange</P>={"{"}setCode{"}"}
      </Line>
      <Line n={17}>
        {"    "}
        <T>/&gt;</T>
      </Line>
      <Line n={18}> );</Line>
      <Line n={19}>{"}"}</Line>
    </pre>
  );
}

function Line({
  n,
  children,
  highlight,
}: {
  n: number;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex gap-4 rounded-sm ${
        highlight ? "bg-accent/[0.08]" : ""
      }`}
    >
      <span className="w-6 shrink-0 select-none text-right text-muted/60">
        {n}
      </span>
      <span className="whitespace-pre">{children}</span>
    </div>
  );
}

const K = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#ff7b72]">{children}</span>
);
const S = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#a5d6ff]">{children}</span>
);
const C = ({ children }: { children: React.ReactNode }) => (
  <span className="text-muted italic">{children}</span>
);
const F = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#d2a8ff]">{children}</span>
);
const V = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#79c0ff]">{children}</span>
);
const T = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#7ee787]">{children}</span>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#79c0ff]">{children}</span>
);

function ChatBubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  const isUser = role === "user";
  return (
    <div
      className={`rounded-lg border px-3 py-2 leading-relaxed ${
        isUser
          ? "border-accent/20 bg-accent/[0.07] text-foreground"
          : "border-white/[0.06] bg-white/[0.02] text-foreground/90"
      }`}
    >
      {children}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Features                                                                   */
/* -------------------------------------------------------------------------- */

function Features() {
  const items = [
    {
      title: "Monaco-powered editor",
      body: "The same editor that powers VS Code — syntax, IntelliSense, multi-cursor, and themes you already love.",
      icon: <CodeIcon className="h-5 w-5" />,
    },
    {
      title: "Project-aware AI chat",
      body: "Chat that actually reads your project. Cite files, edit in place, and apply diffs without leaving the editor.",
      icon: <SparkIcon className="h-5 w-5" />,
    },
    {
      title: "RAG over your codebase",
      body: "Embedded with your code, indexed in Supabase pgvector. Answers grounded in your repo, not the public internet.",
      icon: <SearchIcon className="h-5 w-5" />,
    },
    {
      title: "Multi-agent backend",
      body: "LangChain agents for retrieval, editing, and terminal execution — orchestrated by FastAPI on your machine.",
      icon: <BranchIcon className="h-5 w-5" />,
    },
    {
      title: "Integrated terminal",
      body: "Run, lint, install, and test without context-switching. The AI reads stdout so you don't have to copy-paste errors.",
      icon: <TerminalIcon className="h-5 w-5" />,
    },
    {
      title: "Drag, drop, ship",
      body: "Drop a folder to import an entire project. Auto-save to Supabase, switch projects, and pick up exactly where you left off.",
      icon: <UploadIcon className="h-5 w-5" />,
    },
  ];

  return (
    <section
      id="features"
      className="relative mx-auto w-full max-w-6xl px-6 py-24"
    >
      <SectionHeader
        kicker="Features"
        title="Everything you need to ship with AI."
        sub="A developer-grade IDE with first-class AI primitives — built around the workflow you already have."
      />
      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.title}
            className="group relative bg-background p-7 transition-colors hover:bg-white/[0.02]"
          >
            <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent text-accent transition-all group-hover:border-accent/40 group-hover:text-foreground">
              {it.icon}
            </div>
            <h3 className="text-base font-semibold tracking-tight">
              {it.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{it.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/* Agents section                                                             */
/* -------------------------------------------------------------------------- */

function AgentsSection() {
  const agents = [
    {
      name: "RAG Agent",
      tag: "retrieval",
      desc: "Searches your project's vector index to ground every answer in your real code.",
      color: "from-accent/40 to-accent/0",
    },
    {
      name: "Edit Agent",
      tag: "code-edit",
      desc: "Proposes diffs and applies them in-editor with one click. Multi-file edits supported.",
      color: "from-accent-2/40 to-accent-2/0",
    },
    {
      name: "Terminal Agent",
      tag: "exec",
      desc: "Runs commands, reads output, and reasons about errors — closes the loop on debugging.",
      color: "from-accent-3/40 to-accent-3/0",
    },
  ];

  return (
    <section
      id="agents"
      className="relative mx-auto w-full max-w-6xl px-6 py-24"
    >
      <SectionHeader
        kicker="Agents"
        title="A team of agents, one chat box."
        sub="Behind every message is a graph of specialized agents. Routed automatically — no prompt engineering required."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {agents.map((a) => (
          <div
            key={a.name}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-panel p-6 transition-all hover:border-white/10 hover:bg-white/[0.02]"
          >
            <div
              className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${a.color} opacity-60 blur-3xl transition-opacity group-hover:opacity-90`}
            />
            <div className="relative">
              <div className="flex items-center gap-2 text-xs font-mono text-muted">
                <span className="rounded bg-white/[0.05] px-1.5 py-0.5">
                  {a.tag}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold tracking-tight">
                {a.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {a.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted/80">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-3 animate-pulse-soft" />
                Online
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <StatCard
          number="100%"
          label="Local-first"
          sub="Run with Ollama on your machine. Your code never leaves your laptop unless you want it to."
        />
        <StatCard
          number="<200ms"
          label="Avg. retrieval"
          sub="Supabase pgvector + chunked embeddings keep grounding fast, even on large monorepos."
        />
      </div>
    </section>
  );
}

function StatCard({
  number,
  label,
  sub,
}: {
  number: string;
  label: string;
  sub: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-panel p-7">
      <div className="flex items-baseline gap-3">
        <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-4xl font-semibold tracking-tight text-transparent">
          {number}
        </span>
        <span className="text-sm text-muted">{label}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-muted">{sub}</p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* How it works                                                               */
/* -------------------------------------------------------------------------- */

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Drop your project",
      body: "Drag a folder into the editor. Files are parsed, the workspace is auto-saved, and indexing begins.",
    },
    {
      n: "02",
      title: "Embed & index",
      body: "Your code is chunked, embedded, and stored in Supabase pgvector. Search and retrieval go live in seconds.",
    },
    {
      n: "03",
      title: "Build with the agents",
      body: "Ask, edit, and run — all in one chat. Apply diffs in place, run terminal commands, and ship.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="relative mx-auto w-full max-w-6xl px-6 py-24"
    >
      <SectionHeader
        kicker="How it works"
        title="From zero to shipping in three steps."
        sub="A workflow that gets out of your way. No setup walls, no plugin hell."
      />
      <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative rounded-2xl border border-white/[0.06] bg-panel p-7"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-muted">{s.n}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
            {i < steps.length - 1 && (
              <ArrowRight className="absolute top-1/2 -right-3 hidden h-4 w-4 -translate-y-1/2 text-muted lg:block" />
            )}
          </div>
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
    <section className="relative mx-auto w-full max-w-6xl px-6 py-24">
      <div className="gradient-border relative overflow-hidden rounded-3xl bg-panel p-12 text-center sm:p-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(closest-side,rgba(88,166,255,0.18),transparent_70%)]" />
        <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <div className="bg-grid h-full w-full" />
        </div>
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Stop tab-switching to get help.
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
            Bring AI into your editor.
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-balance text-muted">
          Open the IDE, drop a folder, and start asking questions about your
          code. No installs. No extensions. No friction.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#"
            className="group flex h-11 items-center gap-2 rounded-xl bg-foreground px-6 text-sm font-semibold text-background transition-all hover:scale-[1.02]"
          >
            Launch the IDE
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
/* Footer                                                                     */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="relative mx-auto mt-12 w-full max-w-6xl border-t border-white/[0.06] px-6 py-10">
      <div className="flex flex-col items-center justify-between gap-6 text-sm text-muted sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="font-semibold text-foreground">AI IDE</span>
          <span className="text-muted/70">© 2026</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#agents" className="transition-colors hover:text-foreground">
            Agents
          </a>
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

/* -------------------------------------------------------------------------- */
/* Section header                                                             */
/* -------------------------------------------------------------------------- */

function SectionHeader({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="inline-block rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted">
        {kicker}
      </span>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-balance text-base leading-relaxed text-muted">
        {sub}
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function ArrowRight({ className = "" }: { className?: string }) {
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

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M8 5.5v13l11-6.5L8 5.5z" />
    </svg>
  );
}

function FolderIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M3 7.5A2.5 2.5 0 015.5 5H10l2 2h6.5A2.5 2.5 0 0121 9.5v8A2.5 2.5 0 0118.5 20h-13A2.5 2.5 0 013 17.5v-10z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function FileIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 3H7.5A2.5 2.5 0 005 5.5v13A2.5 2.5 0 007.5 21h9a2.5 2.5 0 002.5-2.5V8l-5-5zM14 3v5h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
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

function CodeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M9 7l-5 5 5 5M15 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M20 20l-3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BranchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="6" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="6" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="18" cy="8" r="2.2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M6 8.2v7.6M8 6.5c5 0 8 1.5 8 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TerminalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="4"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7 9l3 3-3 3M13 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UploadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 16V4m0 0l-4 4m4-4l4 4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GitHubIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .5C5.6.5.5 5.6.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.6-1.3-1.6-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4 1 0 2 .1 2.9.4 2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.6 18.4.5 12 .5z" />
    </svg>
  );
}
