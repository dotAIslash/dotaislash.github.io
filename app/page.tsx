import Link from "next/link";

const repoLinks = [
  {
    name: "dotaislash-spec",
    description: "Authoritative SPEC.md for VERSA 1.0 and beyond.",
    href: "https://github.com/dotAIslash/dotaislash-spec",
    color: "border-violet-500/30 text-violet-200",
  },
  {
    name: "dotaislash-schemas",
    description: "JSON Schemas for validating every `.ai/` artifact.",
    href: "https://github.com/dotAIslash/dotaislash-schemas",
    color: "border-cyan-500/30 text-cyan-200",
  },
  {
    name: "dotaislash-cli",
    description: "Reference CLI for init, lint, merge, and context export.",
    href: "https://github.com/dotAIslash/dotaislash-cli",
    color: "border-lime-500/30 text-lime-200",
  },
  {
    name: "dotaislash-examples",
    description: "Minimal and full project samples for the `.ai/` layout.",
    href: "https://github.com/dotAIslash/dotaislash-examples",
    color: "border-pink-500/30 text-pink-200",
  },
  {
    name: "dotaislash-conformance",
    description: "Black-box scenarios to certify runtime compliance.",
    href: "https://github.com/dotAIslash/dotaislash-conformance",
    color: "border-orange-500/30 text-orange-200",
  },
  {
    name: "dotaislash-website",
    description: "Documentation hub, migration guides, and adapter registry.",
    href: "https://github.com/dotAIslash/dotaislash-website",
    color: "border-cyan-500/30 text-cyan-200",
  },
];

const versaPoints = [
  {
    title: "Interoperable",
    body: "Mirrors AGENTS.md, CLAUDE.md, GEMINI.md, and Cursor rules for effortless adoption.",
    color: "text-violet-200",
  },
  {
    title: "Extensible",
    body: "Profiles, user overrides, and namespaced extensions keep the spec future-proof.",
    color: "text-cyan-200",
  },
  {
    title: "Secure",
    body: "Deny → ask → allow permissions, secret bindings, and automatic redaction guidance.",
    color: "text-lime-200",
  },
  {
    title: "Accessible",
    body: "Built on the AAA-compliant CodeVibe design system for docs and dashboards.",
    color: "text-pink-200",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-gradient-hero opacity-30 animate-gradient-xy"
        style={{ backgroundSize: "200% 200%" }}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-20 lg:gap-28 lg:pb-32 lg:pt-24">
        <header className="relative flex flex-col gap-16 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-8 text-center lg:max-w-xl lg:text-left">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gray-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 lg:mx-0">
              Vendor neutral
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              VERSA 1.0 — one <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-lime-400 bg-clip-text text-transparent">.ai/ folder</span>, many runtimes
            </h1>
            <p className="text-lg text-gray-300 sm:text-xl">
              DotAISlash maintains VERSA (Vendor-neutral Extensible Repo Spec for Agents) so IDEs, CLIs, and hosted copilots can read the same project context — plus the CodeVibe design system for a consistent visual language.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="#versa"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-glow-violet transition hover:shadow-glow-cyan"
              >
                <span>Explore VERSA</span>
                <svg
                  className="h-5 w-5 transition group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#design"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-8 py-4 text-base font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              >
                Design resources
              </Link>
            </div>
            <dl className="flex flex-wrap justify-center gap-8 text-sm text-gray-200 lg:justify-start">
              <div className="flex flex-col items-center lg:items-start">
                <dt className="uppercase text-gray-400">Categories</dt>
                <dd className="text-2xl font-semibold text-cyan-200">8 primitives</dd>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <dt className="uppercase text-gray-400">File types</dt>
                <dd className="text-2xl font-semibold text-cyan-200">JSON + Markdown</dd>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <dt className="uppercase text-gray-400">Interop</dt>
                <dd className="text-2xl font-semibold text-cyan-200">Claude · Cursor · Gemini · Codex</dd>
              </div>
            </dl>
          </div>
          <div className="relative mx-auto max-w-xl rounded-3xl border border-white/10 bg-gray-900/60 p-8 shadow-2xl backdrop-blur-xl">
            <div className="absolute -left-10 top-10 h-48 w-48 animate-blob bg-gradient-to-br from-violet-600/40 to-cyan-500/40 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-52 w-52 animate-blob bg-gradient-to-tr from-pink-500/30 to-orange-500/30 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3 text-sm text-cyan-200">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-500 text-lg font-bold">.ai</span>
                <span>Zero-boilerplate agent project starter</span>
              </div>
              <pre className="overflow-x-auto rounded-2xl bg-gray-950/80 p-6 text-sm leading-relaxed text-gray-200 shadow-inner">
<span className="text-cyan-300">.ai/</span>
├── <span className="text-violet-300">manifest.json</span>
├── <span className="text-violet-300">settings.json</span>
├── <span className="text-violet-300">permissions.json</span>
├── rules/
│   ├── <span className="text-gray-100">overview.md</span>
│   └── <span className="text-gray-100">backend.md</span>
├── prompts/
│   └── <span className="text-gray-100">summarize.md</span>
├── agents/
│   └── <span className="text-gray-100">codegen.md</span>
├── tools/
│   └── <span className="text-gray-100">mcp.servers.json</span>
├── knowledge/
│   └── <span className="text-gray-100">sources.json</span>
└── memory/
    └── <span className="text-gray-100">policy.md</span>
              </pre>
              <p className="mt-6 text-sm text-gray-400">Eight canonical categories · merge-aware overlays · AAA accessibility baseline.</p>
            </div>
          </div>
        </header>

        <section id="versa" className="relative rounded-3xl border border-white/10 bg-gray-950/70 p-10 shadow-xl">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl">VERSA 1.0 · Vendor-neutral Extensible Repo Spec for Agents</h2>
              <p className="text-lg text-gray-300">
                Lessons from AGENTS.md, CLAUDE.md, GEMINI.md, and Cursor rules distilled into a single portable schema. Author once, ship everywhere, stay future-proof.
              </p>
              <ul className="grid gap-4 text-sm text-gray-200 sm:grid-cols-2">
                {versaPoints.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-gray-900/80 p-4"
                  >
                    <span className={`font-semibold ${item.color}`}>{item.title}</span>
                    <div className="mt-2 text-gray-300">{item.body}</div>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900/70 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                  href="https://github.com/dotAIslash/dotaislash-spec"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read SPEC.md
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900/70 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/10"
                  href="https://github.com/dotAIslash/dotaislash-cli"
                  target="_blank"
                  rel="noreferrer"
                >
                  Install CLI
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gray-900/70 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">Merge order</h3>
              <ol className="mt-4 space-y-3 text-sm text-gray-200">
                <li><span className="font-semibold text-cyan-200">1.</span> `.ai/settings.json`</li>
                <li><span className="font-semibold text-cyan-200">2.</span> `.ai/profiles/&lt;name&gt;.settings.json` (when `AI_PROFILE` is set)</li>
                <li><span className="font-semibold text-cyan-200">3.</span> `~/.ai/settings.json` (keys flagged `user_overridable`)</li>
                <li><span className="font-semibold text-cyan-200">4.</span> Runtime flags &amp; ephemeral overrides</li>
              </ol>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gray-400">Permissions</p>
              <p className="font-semibold text-cyan-100">deny → ask → allow</p>
              <p className="mt-4 text-sm text-gray-300">
                Secrets bind to environment or keychain providers only, and knowledge ingestion follows built-in redaction hints.
              </p>
            </div>
          </div>
        </section>

        <section id="stack" className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">The DotAISlash toolchain</h2>
            <p className="mt-4 text-gray-300">
              Planned open-source repositories that bring VERSA to life.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repoLinks.map((repo) => (
              <a
                key={repo.name}
                href={repo.href}
                target="_blank"
                rel="noreferrer"
                className={`rounded-3xl border bg-gray-900/60 p-6 transition hover:border-cyan-400/40 hover:bg-gray-900 ${repo.color}`}
              >
                <h3 className="text-xl font-semibold">{repo.name}</h3>
                <p className="mt-2 text-sm text-gray-300">{repo.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="design" className="space-y-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Design resources</h2>
            <p className="mt-4 text-lg text-gray-300">
              The CodeVibe design system powers our AAA-compliant docs and dashboards.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/design/codevibe"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Open CodeVibe documentation
            </Link>
            <Link
              href="/design/assets"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              View visual assets
            </Link>
          </div>
        </section>

        <section id="community" className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Build the interoperable future with us</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-300">
            Governance drafts, RFC flows, adapters, and community calls are all being shaped now. Join early to help steer the standard.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/orgs/dotAIslash/discussions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Org discussions
            </a>
            <a
              href="https://github.com/dotAIslash/dotaislash-rfcs"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Submit an RFC
            </a>
            <a
              href="https://github.com/alpha912"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
            >
              Contact Alphin Tom
            </a>
          </div>
        </section>
      </div>
      <footer className="border-t border-white/10 bg-gray-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-gray-400 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-semibold text-gray-100">DotAISlash</p>
            <p className="text-gray-400">
              VERSA 1.0 · JSON + Markdown interop for agentic coding · © 2025 Alphin Tom
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-cyan-200" href="https://github.com/dotAIslash" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="hover:text-cyan-200" href="https://github.com/dotAIslash/dotaislash-spec" target="_blank" rel="noreferrer">
              Spec repo
            </a>
            <a className="hover:text-cyan-200" href="https://github.com/dotAIslash/dotaislash-website" target="_blank" rel="noreferrer">
              Docs site
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
