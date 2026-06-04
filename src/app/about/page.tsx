'use client';

import React from 'react';
import { Compass, Cpu, Layers, Sparkles } from 'lucide-react';
import GlowCard from '@/components/ui/glow-card';
import Magnetic from '@/components/ui/magnetic';

export default function About() {
  const pillars = [
    {
      icon: <Layers className="w-5 h-5 text-primary-purple" />,
      title: "Visual Depth",
      description: "We focus on spatial layouts, glassmorphism layers, and micro-interactions that make interfaces feel responsive, premium, and alive.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-secondary-cyan" />,
      title: "Autonomous Systems",
      description: "We integrate agentic AI nodes into customer support and workflow automation, lowering costs and increasing reliability.",
    },
    {
      icon: <Compass className="w-5 h-5 text-primary-purple" />,
      title: "Architectural Rigor",
      description: "Our boilerplates use clean folders, strict types, and Next.js React Server Components to maximize performance.",
    },
  ];

  const team = [
    {
      name: "Aria Thorne",
      role: "Creative Director & Co-Founder",
      bio: "Crafting beautiful spatial interactive interfaces and typography directions.",
      avatar: "AT",
      glow: "rgba(168, 85, 247, 0.15)",
    },
    {
      name: "Cyrus Vance",
      role: "Head of Agentic Systems",
      bio: "Building RAG databases, cognitive loops, and LLM automation pipelines.",
      avatar: "CV",
      glow: "rgba(6, 182, 212, 0.15)",
    },
    {
      name: "Elena Rostova",
      role: "Principal Frontend Engineer",
      bio: "Optimizing critical path renders and standardizing clean architectures.",
      avatar: "ER",
      glow: "rgba(168, 85, 247, 0.15)",
    },
  ];

  return (
    <div className="relative overflow-hidden w-full pb-24">
      {/* Light leaks */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* Philosophy Intro */}
        <section id="philosophy" className="mb-24 flex flex-col gap-6 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-primary-purple self-center">
            <Compass className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wide uppercase">Our Philosophy</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-2">
            Design with depth,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">
              deploy with speed
            </span>
          </h1>
          
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            We believe that modern web applications should not only perform flawlessly but also feel tactile and premium. By combining strict architectural practices with fluid visual layouts, we deliver digital products that stand out.
          </p>
        </section>

        {/* Pillars / Values Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
          {pillars.map((pillar, idx) => (
            <GlowCard
              key={pillar.title}
              glowColor={idx === 1 ? "rgba(6, 182, 212, 0.12)" : "rgba(168, 85, 247, 0.12)"}
              className="p-8 flex flex-col gap-4 group"
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-2">{pillar.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{pillar.description}</p>
            </GlowCard>
          ))}
        </section>

        {/* Team Grid Presentation */}
        <section id="team" className="relative">
          {/* Section Header */}
          <div className="flex flex-col gap-4 text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary-cyan self-center">
              <Sparkles className="w-3.5 h-3.5" />
              <span className="font-semibold tracking-wide uppercase">Elite Collective</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Meet the architects
            </h2>
            <p className="text-zinc-400 max-w-md mx-auto text-sm">
              Fusing creative direction and engineering to formulate next-level experiences.
            </p>
          </div>

          {/* Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <GlowCard
                key={member.name}
                glowColor={member.glow}
                className="p-6 flex flex-col items-center text-center group relative"
              >
                {/* Profile Placeholder Initials Logo */}
                <div className="w-20 h-20 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center text-2xl font-extrabold text-white mb-6 relative overflow-hidden group-hover:border-primary-purple/40 transition-all duration-300">
                  <span>{member.avatar}</span>
                  {/* Subtle color highlight */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-purple/10 to-secondary-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary-purple transition-colors duration-300">
                  {member.name}
                </h3>
                <span className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase mt-0.5 mb-4">
                  {member.role}
                </span>
                
                <p className="text-zinc-400 text-xs leading-relaxed max-w-xs mb-6">
                  {member.bio}
                </p>

                {/* Social Links on Team Member */}
                <div className="flex items-center gap-3 border-t border-white/5 pt-4 w-full justify-center">
                  <Magnetic strength={0.2} scale={1.1}>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.2} scale={1.1}>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                      aria-label="GitHub"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                  </Magnetic>
                </div>
              </GlowCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
