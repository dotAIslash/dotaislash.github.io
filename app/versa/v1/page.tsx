export const metadata = {
  title: "VERSA Spec v1.0 · DotAISlash",
  description: "Track progress on the VERSA 1.0 specification and roadmap.",
};

export default function VersaV1Page() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-8">
        <h1 className="text-4xl font-bold sm:text-5xl">VERSA 1.0 specification</h1>
        <p className="text-lg text-gray-300">
          The full specification will live here soon. In the meantime follow updates in the spec repository and community discussions.
        </p>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Roadmap</h2>
          <ul className="list-disc space-y-3 pl-6 text-gray-300">
            <li>Publish the draft SPEC.md in <a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/dotAIslash/dotaislash-spec" target="_blank" rel="noreferrer">dotaislash-spec</a>.</li>
            <li>Generate JSON Schemas via <a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/dotAIslash/dotaislash-schemas" target="_blank" rel="noreferrer">dotaislash-schemas</a>.</li>
            <li>Wire the CLI to render merged `.ai/` states (<a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/dotAIslash/dotaislash-cli" target="_blank" rel="noreferrer">dotaislash-cli</a>).</li>
            <li>Add diagrams and styled examples using the CodeVibe design system.</li>
          </ul>
        </section>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Stay involved</h2>
          <p className="text-gray-300">
            Join the conversation in the <a className="text-cyan-200 hover:text-cyan-100" href="https://github.com/orgs/dotAIslash/discussions" target="_blank" rel="noreferrer">DotAISlash discussions</a> space or open an issue on the spec repo.
          </p>
        </section>
      </div>
    </div>
  );
}
