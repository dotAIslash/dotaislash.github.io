export const metadata = {
  title: "CodeVibe Design System · DotAISlash",
  description:
    "CodeVibe is a vibrant, AAA-compliant design system inspired by syntax highlighting and gradient energy.",
};

const palette = [
  {
    name: "Cyber Violet",
    role: "Primary",
    description:
      "Innovation-forward hero color. Used for brand moments, hero gradients, and signatures.",
  },
  {
    name: "Electric Cyan",
    role: "Secondary",
    description:
      "Signal clarity and interface intent — ideal for controls, dividers, and links.",
  },
  {
    name: "Neon Lime",
    role: "Accent",
    description:
      "High-energy success and motion color for highlights, metrics, and pulses.",
  },
  {
    name: "Plasma Pink",
    role: "Accent",
    description:
      "Warmth and creativity layered into gradients, cards, and badges.",
  },
  {
    name: "Sunset Orange",
    role: "Accent",
    description:
      "Warning, urgency, and strong call-to-action treatments.",
  },
];

const gradients = [
  {
    name: "CodeVibe Hero",
    value: "linear-gradient(135deg, #6C137F 0%, #0DD9FF 100%)",
    usage: "Headline hero sections and premium panels.",
  },
  {
    name: "Electric Pulse",
    value: "linear-gradient(90deg, #FF1AAF 0%, #D9FF33 50%, #0DD9FF 100%)",
    usage: "Primary call-to-action buttons and interactive affordances.",
  },
  {
    name: "Sunset Burst",
    value: "linear-gradient(45deg, #FF8833 0%, #FF4DCC 100%)",
    usage: "Positive confirmations and celebratory UI moments.",
  },
];

export default function CodeVibePage() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        <div
          className="pointer-events-none absolute -top-32 right-0 h-72 w-72 rounded-full bg-gradient-to-br from-violet-600/30 to-cyan-500/30 blur-3xl"
          aria-hidden
        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">CodeVibe Design System</h1>
          <p className="text-lg text-gray-300">
            CodeVibe pairs gradient energy with AAA-compliant contrast, making it ideal for dashboards, documentation, and agentic tooling.
          </p>
        </div>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Palette pillars</h2>
          <p className="text-gray-300">
            Each color has semantic meaning inspired by syntax highlighting. Use the darker values for copy and neutral surfaces to hit WCAG AAA.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {palette.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-white/10 bg-gray-900/70 p-6"
              >
                <h3 className="text-lg font-semibold text-cyan-200">{item.name}</h3>
                <p className="text-sm uppercase tracking-[0.2em] text-gray-500">{item.role}</p>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Accessibility rules</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-300">
            <li>Body copy uses 700–900 tones on light surfaces; 50–200 tones on dark surfaces.</li>
            <li>Reserve vibrant mid-tones (400–600) for gradients, accents, and icons.</li>
            <li>Pair color with iconography or labels to avoid color-only communication.</li>
            <li>Gradient text must use the darkest stop to validate contrast.</li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Gradient presets</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {gradients.map((gradient) => (
              <div
                key={gradient.name}
                className="rounded-3xl border border-white/10 bg-gray-900/70 p-4 text-sm text-gray-200"
              >
                <div
                  className="mb-3 h-24 rounded-2xl shadow-lg"
                  style={{ background: gradient.value }}
                />
                <h3 className="text-base font-semibold text-foreground">{gradient.name}</h3>
                <p className="mt-2 text-xs text-gray-300">{gradient.value}</p>
                <p className="mt-2 text-sm text-gray-300">{gradient.usage}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Component guidelines</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-300">
            <li>Heroes pair gradient backdrops with curved cards and animated blobs for depth.</li>
            <li>Primary CTAs use the Electric Pulse gradient with glow shadows and pill geometry.</li>
            <li>Cards rely on blurred layers, 24px+ radii, and subtle gradient borders.</li>
            <li>Wave dividers transition between sections without relying on straight lines.</li>
          </ul>
        </section>

        <section className="mt-12 space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">Implementation notes</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-300">
            <li>Tailwind CSS with custom tokens supplies colors, keyframes, and shadows.</li>
            <li>Use CSS custom properties for gradients in plain CSS contexts.</li>
            <li>Enable static export with Next.js to deploy on GitHub Pages.</li>
          </ul>
          <p className="text-sm text-gray-400">
            Need more? Join the <a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/orgs/dotAIslash/discussions" target="_blank" rel="noreferrer">DotAISlash discussions</a> and request assets or components.
          </p>
        </section>
      </div>
    </div>
  );
}
