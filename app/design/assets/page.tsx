export const metadata = {
  title: "Visual Assets · DotAISlash",
  description: "Official wordmarks, badges, and usage guidance for DotAISlash and VERSA.",
};

const deliverables = [
  {
    title: "Wordmarks & icons",
    description: "SVG and PNG exports for dark and light backgrounds, plus square favicons.",
  },
  {
    title: "Badge set",
    description: "VERSA 1.0 compliant, Powered by VERSA, and community supporter badges in multiple sizes.",
  },
  {
    title: "Color tokens",
    description: "Tailwind and CSS custom property definitions derived from the CodeVibe palette.",
  },
  {
    title: "Typography",
    description: "Recommended font stack pairings and usage examples for headings, body text, and numerals.",
  },
];

export default function AssetsPage() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-6 py-16 space-y-8">
        <h1 className="text-4xl font-bold sm:text-5xl">DotAISlash visual assets</h1>
        <p className="text-lg text-gray-300">
          Downloadable artwork and guidance for representing DotAISlash and the VERSA specification. Assets will be published here as they are finalized.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Planned deliverables</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {deliverables.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-gray-900/70 p-6">
                <h3 className="text-lg font-semibold text-cyan-200">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Usage guidelines</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-300">
            <li>Use provided SVGs whenever possible to preserve gradient fidelity.</li>
            <li>Maintain clear space equal to the height of the slash mark around the wordmark.</li>
            <li>Do not rearrange the gradient stops or recolor the compliant badges.</li>
            <li>Pair logos with AAA-compliant background values (gray-900+, gray-50–100).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Requesting assets</h2>
          <p className="text-gray-300">
            Need a new lockup or file format? Start a thread in the {" "}
            <a
              href="https://github.com/orgs/dotAIslash/discussions"
              className="text-cyan-200 hover:text-cyan-100"
              target="_blank"
              rel="noreferrer"
            >
              DotAISlash discussions
            </a>{" "}
            and we&rsquo;ll get back to you quickly.
          </p>
        </section>
      </div>
    </div>
  );
}
