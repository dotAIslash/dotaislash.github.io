// File: app/components/Icon.tsx
// What: Icon component using Lucide icons
// Why: Replace emojis with professional vector icons without external CSS
// Related: page.tsx

import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  BookOpen,
  Bot,
  Brain,
  CheckCircle2,
  Circle,
  Lock,
  MessageCircle,
  Pencil,
  RefreshCw,
  Repeat,
  Rocket,
  ScrollText,
  Settings,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function Icon({ name, className = "", size = 24 }: IconProps) {
  // Map icon names to Lucide components
  const iconMap: Record<string, LucideIcon> = {
    // Pillars
    "sync": RefreshCw,            // 🔄 Portable
    "lock": Lock,                 // 🔒 Security
    "bolt": Zap,                  // ⚡ Developer experience
    
    // Categories
    "scroll": ScrollText,         // 📜 Rules
    "comment": MessageCircle,     // 💬 Prompts
    "robot": Bot,                 // 🤖 Agents
    "brain": Brain,               // 🧠 Memory
    "book": BookOpen,             // 📚 Knowledge
    "tools": Wrench,              // 🛠️ Tools
    "settings": Settings,         // ⚙️ Settings
    "shield": ShieldCheck,        // 🛡️ Permissions
    
    // Workflow
    "edit": Pencil,               // ✍️ Author
    "check": CheckCircle2,        // ✅ Validate
    "rocket": Rocket,             // 🚀 Launch
    "repeat": Repeat,             // 🔄 Evolve
  };

  const IconComponent = iconMap[name] || Circle;

  return (
    <IconComponent
      className={className}
      size={size}
      aria-hidden="true"
    />
  );
}
