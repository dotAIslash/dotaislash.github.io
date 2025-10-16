import Link from "next/link";

const stats = [
  {
    label: "Canonical primitives",
    value: "8",
    description: "Rules, prompts, agents, memory, knowledge, tools, settings, permissions",
  },
  {
    label: "File formats",
    value: "2",
    description: "Plain JSON for structure, Markdown for human-readable context",
  },
  {
    label: "Interop targets",
    value: "Claude · Cursor · Gemini · Codex",
    description: "Designed to map onto today’s IDE + CLI copilots",
  },
];

const pillars = [
  {
    title: "Portable by design",
    body: "One `.ai/` folder that every agent runtime can parse. Structured merge rules keep overrides predictable.",
  },
  {
    title: "Security-first",
    body: "Explicit deny → ask → allow permissions, secret bindings, and knowledge redaction baked in.",
  },
  {
    title: "Accessible visuals",
    body: "The CodeVibe system pushes AAA contrast, gradient energy, and curvy geometry across docs and dashboards.",
  },
];

const categories = [
  {
    name: "Rules",
    summary: "Persistent project context delivered to every agent call.",
  },
  {
    name: "Prompts",
    summary: "Reusable templates with typed variables and inline tests.",
  },
  {
    name: "Agents",
    summary: "Declarative presets describing goals, tools, context attachments, and memory scope.",
  },
  {
    name: "Memory",
    summary: "Retention policies and durable notes – session, project, or none.",
  },
  {
    name: "Knowledge",
    summary: "Ingestion config for docs, repos, and URLs with redaction directives.",
  },
  {
    name: "Tools",
    summary: "MCP servers and HTTP descriptors so capabilities are reproducible anywhere.",
  },
  {
    name: "Settings",
    summary: "Model routing, budgets, UI preferences, and profile overlays.",
  },
  {
    name: "Permissions",
    summary: "Deny / ask / allow policy with secret bindings and enforcement hints.",
  },
];

const workflow = [
  {
    step: "Author",
    detail: "Capture durable guidance in Markdown with `ai:meta` preambles for scope, priority, and attach mode.",
  },
  {
    step: "Validate",
    detail: "Run `versa lint` to check JSON Schemas and Markdown metadata across environments.",
  },
  {
    step: "Launch",
    detail: "Start MCP servers, merge profile overlays, and hand the same `.ai/` context to IDEs, CLIs, and hosted agents.",
  },
  {
    step: "Evolve",
    detail: "Ship conformance scenarios, design updates, and spec proposals via issues and discussions.",
  },
];

const repos = [
  {
    name: "dotaislash-spec",
    description: "Authoritative SPEC.md for VERSA 1.0 and future revisions.",
    href: "https://github.com/dotAIslash/dotaislash-spec",
  },
  {
    name: "dotaislash-schemas",
    description: "JSON Schema definitions for every `.ai/` artifact.",
    href: "https://github.com/dotAIslash/dotaislash-schemas",
  },
  {
    name: "dotaislash-cli",
    description: "Reference CLI to init, lint, print merged context, and preview agent packets.",
    href: "https://github.com/dotAIslash/dotaislash-cli",
  },
  {
    name: "dotaislash-examples",
    description: "Minimal and full project templates you can clone today.",
    href: "https://github.com/dotAIslash/dotaislash-examples",
  },
  {
    name: "dotaislash-conformance",
    description: "Black-box scenarios used to certify VERSA-compatible runtimes.",
    href: "https://github.com/dotAIslash/dotaislash-conformance",
  },
];

function GlowCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gray-900/70 p-6 shadow-[0_30px_80px_rgba(12,14,26,0.45)] transition hover:border-cyan-400/40 ${className}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-all duration-500 hover:opacity-100" style={{ background: "radial-gradient(circle at top, rgba(217,51,255,0.35), transparent 60%), radial-gradient(circle at bottom, rgba(13,217,255,0.25), transparent 65%)" }} />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-foreground">
      <section className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 lg:flex-row lg:items-center lg:gap-20">
        <div className="absolute inset-x-0 -top-32 h-96 bg-gradient-hero opacity-30 blur-3xl" aria-hidden />
        <div className="absolute -left-20 top-0 h-72 w-72 animate-blob rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/40 blur-3xl" aria-hidden />
        <div className="absolute right-0 bottom-0 h-64 w-64 animate-blob rounded-full bg-gradient-to-tr from-pink-500/40 to-orange-400/40 blur-3xl animation-delay-2000" aria-hidden />

        <div className="relative z-10 flex-1 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-gray-900/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">
            Vendor neutral
          </div>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-lime-400 bg-clip-text text-transparent">
              VERSA 1.0
            </span>{" "}
            is the portable `.ai/` repo spec for agentic coding
          </h1>
          <p className="text-lg text-gray-300 sm:text-xl">
            Capture rules, prompts, agents, memory, and more in one folder. Ship it to any IDE, CLI, or hosted copilot and get identical context every time.
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="https://github.com/dotAIslash/dotaislash-spec"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-glow-violet transition hover:shadow-glow-cyan"
              target="_blank"
              rel="noreferrer"
            >
              <span>Read the spec</span>
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
              href="https://github.com/orgs/dotAIslash/discussions"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-8 py-4 text-base font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
              target="_blank"
              rel="noreferrer"
            >
              Join discussions
            </Link>
          </div>
        </div>

        <GlowCard className="flex-1">
          <div className="space-y-6">
            <div className="text-sm uppercase tracking-[0.3em] text-gray-500">Spec snapshot</div>
            <ul className="space-y-5">
              {stats.map((item) => (
                <li key={item.label} className="flex flex-col gap-1">
                  <div className="text-3xl font-semibold text-cyan-200">{item.value}</div>
                  <div className="text-sm font-medium text-gray-200">{item.label}</div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </GlowCard>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          eyebrow="Why VERSA"
          title="Interoperable from day one"
          description="Everything you need to hand consistent project context to modern agents ranked by AAA accessibility and security best practices."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <GlowCard key={pillar.title}>
              <h3 className="text-xl font-semibold text-cyan-200">{pillar.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{pillar.body}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <section id="versa" className="relative mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          eyebrow="Eight canonical categories"
          title="Everything an agent needs to understand your repo"
          description="VERSA balances machine readability with human-friendly authoring. Markdown gets JSON front matter (`ai:meta`), JSON gets deeply merged.">
        </SectionHeading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <GlowCard key={category.name} className="h-full">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-200">{category.name}</h3>
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-violet-500/50 to-cyan-500/50" />
              </div>
              <p className="mt-3 text-sm text-gray-300">{category.summary}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          eyebrow="Workflow"
          title="From authoring to runtime in four deliberate steps"
          description="Designed for DX: lintable, diffable, and easy to automate in CI while staying approachable for humans."
        />
        <div className="relative mt-12 grid gap-8 lg:grid-cols-4">
          {workflow.map((item, index) => (
            <GlowCard key={item.step} className="h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-lg font-bold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-cyan-200">{item.step}</h3>
              <p className="mt-3 text-sm text-gray-300">{item.detail}</p>
            </GlowCard>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          eyebrow="Ecosystem"
          title="The DotAISlash toolkit"
          description="Specs, schemas, CLI tooling, examples, and conformance suites keep VERSA grounded in real projects."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {repos.map((repo) => (
            <GlowCard key={repo.name}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cyan-200">{repo.name}</h3>
                <span className="text-sm text-gray-500">GitHub</span>
              </div>
              <p className="mt-3 text-sm text-gray-300">{repo.description}</p>
              <Link
                href={repo.href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-cyan-100"
                target="_blank"
                rel="noreferrer"
              >
                Open repository
                <svg
                  className="h-4 w-4"
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
            </GlowCard>
          ))}
        </div>
      </section>

      <section id="design" className="mx-auto max-w-6xl px-6 pb-24">
        <SectionHeading
          eyebrow="Design system"
          title="CodeVibe powers our documentation and dashboards"
          description="Gradients, AAA contrast, and organic geometry keep VERSA materials fresh without sacrificing legibility."
        />
        <GlowCard className="mt-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cyan-200">Design resources</h3>
              <p className="text-sm text-gray-300">
                CodeVibe blends Cyber Violet, Electric Cyan, Neon Lime, Plasma Pink, and Sunset Orange. Animations like gradient shimmers and morphing blobs add motion while staying performant.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/design/codevibe"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
                >
                  Read the system notes
                </Link>
                <Link
                  href="/design/assets"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/60 px-6 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/10"
                >
                  Visual assets
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                "linear-gradient(135deg, #6C137F 0%, #0DD9FF 100%)",
                "linear-gradient(90deg, #FF1AAF 0%, #D9FF33 50%, #0DD9FF 100%)",
                "linear-gradient(45deg, #FF8833 0%, #FF4DCC 100%)",
              ].map((gradient, idx) => (
                <div
                  key={idx}
                  className="h-28 rounded-3xl border border-white/10 shadow-lg"
                  style={{ background: gradient }}
                />
              ))}
            </div>
          </div>
        </GlowCard>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/80 to-cyan-500/80 p-[1px] shadow-[0_40px_120px_rgba(12,14,26,0.6)]">
          <div className="rounded-3xl bg-gray-950/90 px-10 py-12 text-center lg:px-16">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Ready to wire your repo for every agent?
            </h2>
            <p className="mt-4 text-lg text-gray-200">
              Clone the examples, lint your `.ai/` folder, and open a spec issue if you need new capabilities. We’re building VERSA openly with the community.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="https://github.com/dotAIslash/dotaislash-examples"
                className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
                target="_blank"
                rel="noreferrer"
              >
                Clone examples
              </Link>
              <Link
                href="https://github.com/dotAIslash/dotaislash-spec/issues/new"
                className="inline-flex items-center gap-2 rounded-full bg-white text-base font-semibold text-gray-900 px-8 py-4 transition hover:bg-gray-100"
                target="_blank"
                rel="noreferrer"
              >
                File a proposal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
      <span className="text-xs font-semibold uppercase tracking-[0.4em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-3xl text-base text-gray-300">{description}</p>
      {children}
    </div>
  );
}
