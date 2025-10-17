// File: app/components/Icon.tsx
// What: Icon component using Unicons Monochrome
// Why: Replace emojis with professional vector icons
// Related: page.tsx

import React from 'react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  // Map icon names to Unicons classes
  const iconMap: Record<string, string> = {
    // Pillars
    "sync": "uil-sync",           // 🔄 Portable
    "lock": "uil-lock",           // 🔒 Security
    "bolt": "uil-bolt",           // ⚡ Developer experience
    
    // Categories
    "scroll": "uil-scroll",       // 📜 Rules
    "comment": "uil-comment",     // 💬 Prompts
    "robot": "uil-robot",         // 🤖 Agents
    "brain": "uil-brain",         // 🧠 Memory
    "book": "uil-book-open",      // 📚 Knowledge
    "tools": "uil-wrench",        // 🛠️ Tools
    "settings": "uil-setting",    // ⚙️ Settings
    "shield": "uil-shield-check", // 🛡️ Permissions
    
    // Workflow
    "edit": "uil-edit",           // ✍️ Author
    "check": "uil-check-circle",  // ✅ Validate
    "rocket": "uil-rocket",       // 🚀 Launch
    "repeat": "uil-repeat",       // 🔄 Evolve
  };

  const iconClass = iconMap[name] || "uil-circle";

  return (
    <i 
      className={`${iconClass} ${className}`}
      style={{ fontSize: `${size}px` }}
    />
  );
}
