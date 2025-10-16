export default function Footer() {
  return (
    <footer className="relative bg-gray-950 text-gray-200 mt-24">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full transform -translate-y-full">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 fill-gray-950"
        >
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl blur-lg opacity-50" />
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center shadow-glow-violet">
                  <span className="text-white font-bold text-2xl">.ai/</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  dotAIslash
                </span>
                <span className="text-sm text-gray-400 -mt-1">VERSA 1.0</span>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              The vendor-neutral extensible repo spec for agents. One `.ai/` folder, every runtime.
              Built with accessibility, security, and developer experience in mind.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/dotAIslash"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-violet-600 hover:to-cyan-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.91 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.59-2.805 5.61-5.475 5.91.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://github.com/orgs/dotAIslash/discussions"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-gradient-to-br hover:from-violet-600 hover:to-cyan-600 flex items-center justify-center transition-all hover:scale-110"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-spec" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Specification
                </a>
              </li>
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-examples" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-cli" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  CLI Tool
                </a>
              </li>
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-schemas" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Schemas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://github.com/orgs/dotAIslash/discussions" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Discussions
                </a>
              </li>
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-spec/issues" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Issue Tracker
                </a>
              </li>
              <li>
                <a href="https://github.com/dotAIslash/dotaislash-conformance" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Conformance
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 dotAIslash. Open source under MIT License.</p>
          <div className="h-1 w-32 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500 rounded-full" />
        </div>
      </div>
    </footer>
  );
}
