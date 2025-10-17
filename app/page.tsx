import Link from "next/link";
import Navbar from "./components/Navbar";
import CodeTerminal from "./components/CodeTerminal";
import Footer from "./components/Footer";
import Icon from "./components/Icon";

const stats = [
  {
    label: "Canonical primitives",
    value: "8",
    description: "Rules, prompts, agents, memory, knowledge, tools, settings, permissions",
    gradient: "from-violet-400 to-cyan-400",
  },
  {
    label: "npm packages released",
    value: "5",
    description: "Schemas, CLI, Examples, Adapters, Conformance - all v1.0.0",
    gradient: "from-cyan-400 to-lime-400",
  },
  {
    label: "Tests passing",
    value: "230",
    description: "Comprehensive test coverage across all packages",
    gradient: "from-lime-400 to-pink-400",
  },
  {
    label: "Conformance scenarios",
    value: "70",
    description: "Black-box tests to certify VERSA-compatible runtimes",
    gradient: "from-pink-400 to-orange-400",
  },
];

const pillars = [
  {
    icon: "sync",
    title: "Portable by design",
    body: "One `.ai/` folder that every agent runtime can parse. Structured merge rules keep overrides predictable across tools.",
  },
  {
    icon: "lock",
    title: "Security-first",
    body: "Explicit deny → ask → allow permissions, secret bindings, and knowledge redaction baked into the spec from day one.",
  },
  {
    icon: "bolt",
    title: "Developer experience",
    body: "Lintable, diffable, testable. Designed for CI/CD pipelines while staying approachable for humans to author.",
  },
];

const categories = [
  {
    name: "Rules",
    icon: "scroll",
    summary: "Persistent project context delivered to every agent call.",
    color: "from-violet-500 to-violet-600",
  },
  {
    name: "Prompts",
    icon: "comment",
    summary: "Reusable templates with typed variables and inline tests.",
    color: "from-cyan-500 to-cyan-600",
  },
  {
    name: "Agents",
    icon: "robot",
    summary: "Declarative presets describing goals, tools, context attachments.",
    color: "from-lime-500 to-lime-600",
  },
  {
    name: "Memory",
    icon: "brain",
    summary: "Retention policies and durable notes – session, project, or none.",
    color: "from-pink-500 to-pink-600",
  },
  {
    name: "Knowledge",
    icon: "book",
    summary: "Ingestion config for docs, repos, URLs with redaction directives.",
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "Tools",
    icon: "tools",
    summary: "MCP servers and HTTP descriptors for reproducible capabilities.",
    color: "from-violet-500 to-cyan-500",
  },
  {
    name: "Settings",
    icon: "settings",
    summary: "Model routing, budgets, UI preferences, and profile overlays.",
    color: "from-cyan-500 to-lime-500",
  },
  {
    name: "Permissions",
    icon: "shield",
    summary: "Policy enforcement with secret bindings and ask-before-run prompts.",
    color: "from-pink-500 to-orange-500",
  },
];

const workflow = [
  {
    step: "Author",
    icon: "edit",
    detail: "Capture durable guidance in Markdown with `ai:meta` preambles for scope, priority, and attach mode.",
  },
  {
    step: "Validate",
    icon: "check",
    detail: "Run `versa lint` to check JSON Schemas and Markdown metadata across environments.",
  },
  {
    step: "Launch",
    icon: "rocket",
    detail: "Start MCP servers, merge profile overlays, hand the same `.ai/` context to all tools.",
  },
  {
    step: "Evolve",
    icon: "repeat",
    detail: "Ship conformance scenarios, design updates, and spec proposals via issues.",
  },
];

const repos = [
  {
    name: "dotaislash-spec",
    description: "Canonical VERSA 1.0 specification and design rationale.",
    href: "https://github.com/dotAIslash/dotaislash-spec",
    gradient: "from-violet-500 to-violet-600",
    badge: "Spec",
  },
  {
    name: "dotaislash-schemas",
    description: "JSON Schema validation for `.ai/` files - v1.0.0 released.",
    href: "https://github.com/dotAIslash/dotaislash-schemas",
    gradient: "from-cyan-500 to-cyan-600",
    badge: "v1.0.0",
  },
  {
    name: "dotaislash-cli",
    description: "Reference CLI tool (versa init, lint, context) - v1.0.0 released.",
    href: "https://github.com/dotAIslash/dotaislash-cli",
    gradient: "from-lime-500 to-lime-600",
    badge: "v1.0.0",
  },
  {
    name: "dotaislash-examples",
    description: "10 validated example configurations for various project types.",
    href: "https://github.com/dotAIslash/dotaislash-examples",
    gradient: "from-pink-500 to-pink-600",
    badge: "v1.0.0",
  },
  {
    name: "dotaislash-adapters",
    description: "Transform VERSA to native tool formats (Cursor, Windsurf) - v1.0.0.",
    href: "https://github.com/dotAIslash/dotaislash-adapters",
    gradient: "from-orange-500 to-orange-600",
    badge: "v1.0.0",
  },
  {
    name: "dotaislash-conformance",
    description: "70 black-box scenarios to certify VERSA-compatible runtimes.",
    href: "https://github.com/dotAIslash/dotaislash-conformance",
    gradient: "from-violet-500 to-cyan-500",
    badge: "v1.0.0",
  },
  {
    name: "dotaislash.github.io",
    description: "Landing site and documentation built with Next.js 15 + Tailwind 4.",
    href: "https://github.com/dotAIslash/dotaislash.github.io",
    gradient: "from-cyan-500 to-lime-500",
    badge: "Website",
  },
  {
    name: ".github",
    description: "Organization profile and community documentation.",
    href: "https://github.com/dotAIslash/.github",
    gradient: "from-lime-500 to-pink-500",
    badge: "Org",
  },
];

function EnhancedCard({
  children,
  className = "",
  hoverEffect = true,
}: {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border-2 border-gray-800/50 bg-gray-900/70 backdrop-blur-sm p-8 shadow-2xl transition-all duration-500 ${
        hoverEffect ? "hover:border-violet-500/50 hover:scale-[1.02] hover:shadow-violet-500/20" : ""
      } ${className}`}
    >
      {/* Gradient Glow Effect on Hover */}
      {hoverEffect && (
        <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10" />
        </div>
      )}
      
      {/* Animated Border Gradient */}
      {hoverEffect && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-[2px] bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-3xl opacity-20 blur-xl animate-gradient-x" style={{ backgroundSize: "200% 100%" }} />
        </div>
      )}
      
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="text-foreground overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" />
          <div
            className="absolute inset-0 opacity-30 animate-gradient-xy"
            style={{
              background: `
                radial-gradient(at 0% 0%, rgba(108, 19, 127, 0.4) 0%, transparent 50%),
                radial-gradient(at 100% 0%, rgba(13, 217, 255, 0.4) 0%, transparent 50%),
                radial-gradient(at 100% 100%, rgba(217, 255, 51, 0.3) 0%, transparent 50%),
                radial-gradient(at 0% 100%, rgba(255, 26, 175, 0.4) 0%, transparent 50%)
              `,
              backgroundSize: "400% 400%",
            }}
          />
        </div>

        {/* Floating Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" />
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-morph" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border-2 border-cyan-400/40 bg-gray-900/80 backdrop-blur-sm px-5 py-2.5 text-xs font-bold uppercase tracking-[0.35em] text-cyan-300 shadow-lg shadow-cyan-500/20">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Vendor Neutral
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-lime-400 bg-clip-text text-transparent animate-gradient-x inline-block" style={{ backgroundSize: "200% auto" }}>
                  VERSA 1.0
                </span>
                <br />
                <span className="text-gray-100">
                  One <span className="text-cyan-400 font-mono">.ai/</span> folder,
                  <br />
                  every runtime
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                The portable repo spec for agentic coding. Capture{" "}
                <span className="text-violet-400 font-semibold">rules</span>,{" "}
                <span className="text-cyan-400 font-semibold">prompts</span>,{" "}
                <span className="text-lime-400 font-semibold">agents</span>, and more—ship
                to any IDE, CLI, or hosted copilot.
              </p>

              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <Link
                  href="https://github.com/dotAIslash/dotaislash-spec/blob/main/SPEC.md"
                  className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 px-10 py-5 text-lg font-bold text-white shadow-2xl shadow-violet-500/50 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Read the Spec</span>
                  <svg
                    className="h-6 w-6 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="https://github.com/orgs/dotAIslash/discussions"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-cyan-400/60 bg-gray-900/50 backdrop-blur-sm px-10 py-5 text-lg font-bold text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Join Discussions
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex flex-wrap gap-8 pt-8 justify-center lg:justify-start">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center lg:text-left">
                    <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Code Terminal */}
            <div className="animate-float">
              <CodeTerminal />
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-32 fill-gray-900"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* WHY VERSA SECTION */}
      <section id="features" className="relative bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4 block">
              Why VERSA
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interoperable from <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">day one</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Everything you need to hand consistent project context to modern agents, built with AAA accessibility and security best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <EnhancedCard key={pillar.title}>
                <div className="flex items-center justify-between mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Icon name={pillar.icon} size={32} className="text-cyan-300" />
                  </div>
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">{pillar.title}</h3>
                <p className="text-gray-300 leading-relaxed">{pillar.body}</p>
              </EnhancedCard>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-32 fill-gray-900 rotate-180"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section id="versa" className="relative bg-gray-950 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-violet-400 mb-4 block">
              Eight Canonical Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything an agent needs to <span className="bg-gradient-to-r from-cyan-400 to-lime-400 bg-clip-text text-transparent">understand your repo</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              VERSA balances machine readability with human-friendly authoring. Markdown gets JSON front matter, JSON gets deeply merged.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <EnhancedCard key={category.name}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                  <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon name={category.icon} size={24} className="text-white" />
                  </div>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{category.summary}</p>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW SECTION */}
      <section className="relative bg-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-pink-400 mb-4 block">
              Workflow
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              From authoring to runtime in <span className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">four steps</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Designed for DX: lintable, diffable, and easy to automate in CI while staying approachable for humans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <EnhancedCard key={item.step}>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-2xl font-bold text-white mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <div className="mb-4">
                  <Icon name={item.icon} size={40} className="text-cyan-300" />
                </div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">{item.step}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.detail}</p>
              </EnhancedCard>
            ))}
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full transform translate-y-full">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-32 fill-gray-900 rotate-180"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
          </svg>
        </div>
      </section>

      {/* ECOSYSTEM SECTION */}
      <section id="ecosystem" className="relative bg-gray-950 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-lime-400 mb-4 block">
              Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-lime-400 to-cyan-400 bg-clip-text text-transparent">dotAIslash</span> ecosystem
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              All 8 repositories: specs, schemas, CLI tooling, examples, adapters, conformance suites, website, and community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {repos.map((repo) => (
              <EnhancedCard key={repo.name}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-white font-mono">{repo.name}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 text-cyan-300 font-semibold">{repo.badge}</span>
                </div>
                <p className="text-sm text-gray-300 leading-relaxed mb-6">{repo.description}</p>
                
                {/* Gradient Bar */}
                <div className={`h-1 w-full rounded-full bg-gradient-to-r ${repo.gradient} mb-6 group-hover:h-1.5 transition-all duration-300`} />
                
                <Link
                  href={repo.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition-colors group/link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open repository
                  <svg
                    className="h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </EnhancedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative bg-gray-950 py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] p-[2px]">
            {/* Animated Border Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 animate-gradient-x" style={{ backgroundSize: "200% 100%" }} />
            
            {/* Card Content */}
            <div className="relative rounded-[2.4rem] bg-gray-900 px-12 py-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to wire your repo for <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">every agent</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Clone the examples, lint your <code className="text-cyan-400 font-mono">.ai/</code> folder, and open a spec issue if you need new capabilities. We&apos;re building VERSA openly with the community.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="https://github.com/dotAIslash/dotaislash-examples"
                  className="inline-flex items-center gap-3 rounded-full bg-white text-gray-900 px-10 py-5 text-lg font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8" />
                  </svg>
                  Clone Examples
                </Link>
                
                <Link
                  href="https://github.com/dotAIslash/dotaislash-spec/issues/new"
                  className="inline-flex items-center gap-3 rounded-full border-2 border-cyan-400/60 bg-cyan-500/10 text-cyan-300 px-10 py-5 text-lg font-bold hover:bg-cyan-500/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4v16m8-8H4" />
                  </svg>
                  File a Proposal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
