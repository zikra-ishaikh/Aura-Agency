'use client';

import React from 'react';
import { Cpu, Zap, Layers, Sparkles, Terminal, MessageSquare } from 'lucide-react';
import GlowCard from '../ui/glow-card';

export default function BentoGrid() {
  return (
    <section id="features" className="py-24 px-6 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-secondary-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="flex flex-col gap-4 text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary-cyan self-center">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wide uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white max-w-2xl mx-auto">
            Engineered for elite{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">
              digital operations
            </span>
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-base">
            We bridge the gap between stunning aesthetic direction and production-ready system architecture.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: AI Automation & Workflow Ops (Width 2 on md) */}
          <GlowCard
            glowColor="rgba(6, 182, 212, 0.15)"
            className="md:col-span-2 p-8 min-h-[300px] flex flex-col justify-between group"
          >
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-2 max-w-md">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-secondary-cyan group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mt-4">AI Automation & Workflow Ops</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Inject autonomous agent pipelines directly into your business logic. We design, deploy, and scale custom LLM integrations that optimize operational bottlenecks.
                </p>
              </div>
              
              {/* Dynamic node visual element */}
              <div className="hidden lg:flex flex-col gap-3 p-4 bg-zinc-900/50 rounded-xl border border-white/5 font-mono text-[10px] w-64 text-zinc-500 relative overflow-hidden">
                <div className="flex items-center gap-1.5 text-secondary-cyan">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-cyan animate-pulse" />
                  <span>Agent node #041 Active</span>
                </div>
                <div className="border-b border-white/5 pb-2">
                  <span className="text-zinc-300">Run:</span> analyze-customer-sentiment
                </div>
                <div className="flex flex-col gap-1 text-[9px]">
                  <div>&gt; Loading semantic database... <span className="text-emerald-400">OK</span></div>
                  <div>&gt; Computing embeddings vector... <span className="text-emerald-400">OK</span></div>
                  <div>&gt; Dispatching server action hook... <span className="text-primary-purple">RUNNING</span></div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mt-6 border-t border-white/5 pt-4">
              <span>RAG pipelines</span>
              <span>•</span>
              <span>Custom agents</span>
              <span>•</span>
              <span>Cognitive mapping</span>
            </div>
          </GlowCard>

          {/* Card 2: Agency Stats (Width 1 on md) */}
          <GlowCard
            glowColor="rgba(168, 85, 247, 0.15)"
            className="p-8 min-h-[300px] flex flex-col justify-between group"
          >
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-primary-purple group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6" />
            </div>
            <div className="flex flex-col gap-4 my-6">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold tracking-tight text-white">99.8%</span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5">Development Velocity</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold tracking-tight text-white">24/7</span>
                <span className="text-xs text-zinc-400 font-mono mt-0.5">Automated Operations</span>
              </div>
            </div>
            <div className="text-xs text-zinc-400 border-t border-white/5 pt-4">
              Continuous deployment cycles with zero cold starts.
            </div>
          </GlowCard>

          {/* Card 3: Design Excellence (Width 1 on md) */}
          <GlowCard
            glowColor="rgba(168, 85, 247, 0.15)"
            className="p-8 min-h-[300px] flex flex-col justify-between group"
          >
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-primary-purple group-hover:scale-110 transition-transform duration-300">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mt-4">Spatial Depth UI</h3>
              <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                Beautiful glassmorphism surfaces combined with smooth coordinate tracking and micro-animations.
              </p>
              
              {/* Color circles overlap visual */}
              <div className="flex items-center -space-x-3 mt-6">
                <div className="w-8 h-8 rounded-full bg-primary-purple shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                <div className="w-8 h-8 rounded-full bg-secondary-cyan shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10" />
              </div>
            </div>
            <div className="text-xs text-zinc-500 border-t border-white/5 pt-4 font-mono">
              Theme: Dark-mode exclusive
            </div>
          </GlowCard>

          {/* Card 4: Creative Technology Stack (Width 2 on md) */}
          <GlowCard
            glowColor="rgba(6, 182, 212, 0.15)"
            className="md:col-span-2 p-8 min-h-[300px] flex flex-col justify-between group"
          >
            <div className="flex flex-col gap-2">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-secondary-cyan group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mt-4">Modern Stack Architecture</h3>
              <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
                Engineered with next-generation developer tooling. Blazing fast load speeds, optimal server component hydration, and clean architectural patterns.
              </p>
            </div>

            {/* Badges Container */}
            <div className="flex flex-wrap gap-2.5 mt-8 border-t border-white/5 pt-6">
              {[
                "Next.js 16 (App Router)",
                "React 19 Server Components",
                "Tailwind CSS v4 (CSS-First)",
                "TypeScript (Strict Mode)",
                "Turbopack Compiler",
                "Server Functions (RSC)",
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 group-hover:border-white/20 transition-colors"
                >
                  {badge}
                </span>
              ))}
            </div>
          </GlowCard>

          {/* Card 5: Interactive Terminal Demo */}
          <GlowCard
            glowColor="rgba(6, 182, 212, 0.15)"
            className="p-6 min-h-[300px] flex flex-col justify-between group font-mono text-xs text-zinc-400"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-secondary-cyan" />
                <span className="text-[10px] text-zinc-500">aura-core@cli</span>
              </div>
              <div className="flex gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-500/50" />
                <span className="w-2 h-2 rounded-full bg-amber-500/50" />
                <span className="w-2 h-2 rounded-full bg-emerald-500/50" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5 my-4 text-[10px] leading-normal flex-grow">
              <div className="text-zinc-600">$ aura run optimize-bundle</div>
              <div>Analyzing page structure...</div>
              <div>⚡ Turbopack enabled: compiled in <span className="text-secondary-cyan">14ms</span></div>
              <div>✓ Critical path CSS injected</div>
              <div>✓ SEO tags checked (100/100 score)</div>
              <div className="text-emerald-400">✓ Production build bundle ready</div>
            </div>

            <div className="border-t border-white/5 pt-4 text-[10px] text-zinc-500">
              Zero boilerplate startup. Code base ready for deployment.
            </div>
          </GlowCard>

          {/* Card 6: Client Testimonial Support */}
          <GlowCard
            glowColor="rgba(168, 85, 247, 0.15)"
            className="p-8 min-h-[300px] flex flex-col justify-between group"
          >
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit text-primary-purple group-hover:scale-110 transition-transform duration-300">
              <MessageSquare className="w-6 h-6" />
            </div>

            <div className="flex flex-col gap-2 my-4">
              <blockquote className="text-zinc-300 text-sm italic leading-relaxed">
                "AuraAgency's template saved us weeks of initial architecture. The Bento layout and clean code allowed us to ship our product in record time."
              </blockquote>
              <div className="flex flex-col mt-2">
                <span className="text-xs font-semibold text-white">Alex Chen</span>
                <span className="text-[10px] text-zinc-500">CTO, SynthLab AI</span>
              </div>
            </div>

            <div className="text-xs text-zinc-500 border-t border-white/5 pt-4">
              Trusted by elite creators.
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}
