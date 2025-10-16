"use client";

import { useState } from "react";

const codeExamples = {
  structure: `.ai/
├── context.json          # Base configuration
├── profiles/
│   ├── cursor.json       # Cursor IDE settings
│   ├── windsurf.json     # Windsurf overrides
│   └── claude.json       # Claude-specific
├── rules/
│   ├── style.md          # Code style guide
│   └── security.md       # Security policies
├── agents/
│   └── code-reviewer.json
└── tools/
    └── mcp-servers.json`,
  contextJson: `{
  "version": "1.0",
  "rules": ["rules/style.md"],
  "context": ["src/**/*.ts"],
  "agents": ["agents/code-reviewer.json"],
  "settings": {
    "model": "claude-sonnet-4",
    "temperature": 0.7
  }
}`,
  profile: `{
  "version": "1.0",
  "merge": "deep",
  "settings": {
    "model": "gpt-4-turbo",
    "shortcuts": {
      "review": "agents/code-reviewer.json"
    }
  }
}`,
};

type ExampleKey = keyof typeof codeExamples;

export default function CodeTerminal() {
  const [activeTab, setActiveTab] = useState<ExampleKey>("structure");

  const tabs: { key: ExampleKey; label: string }[] = [
    { key: "structure", label: "Folder Structure" },
    { key: "contextJson", label: "context.json" },
    { key: "profile", label: "profile override" },
  ];

  return (
    <div className="rounded-3xl overflow-hidden border-2 border-gray-800 shadow-2xl group hover:border-violet-500/50 transition-all duration-300">
      {/* Terminal Header */}
      <div className="bg-gray-900 px-6 py-4 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500 hover:bg-pink-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-orange-500 hover:bg-orange-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-lime-500 hover:bg-lime-400 transition-colors cursor-pointer" />
          </div>
          <span className="ml-2 text-gray-400 text-sm font-mono">.ai/</span>
        </div>
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === tab.key
                  ? "bg-violet-600/20 text-violet-300 border border-violet-500/40"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Code Content */}
      <div className="bg-gray-950 p-6 overflow-x-auto min-h-[300px] relative">
        <pre className="text-sm font-mono leading-relaxed">
          <code className="text-gray-200 whitespace-pre">{codeExamples[activeTab]}</code>
        </pre>
        
        {/* Gradient Accent */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 via-cyan-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Gradient Border Effect */}
      <div className="h-1 bg-gradient-to-r from-violet-500 via-cyan-500 to-pink-500" />
    </div>
  );
}
