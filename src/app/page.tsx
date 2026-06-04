'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Shield, Cpu, Zap } from 'lucide-react';
import Magnetic from '@/components/ui/magnetic';
import BentoGrid from '@/components/marketing/bento-grid';
import GlowCard from '@/components/ui/glow-card';

export default function Home() {
  return (
    <div className="relative overflow-hidden w-full pb-24">
      {/* Decorative background light flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-primary-purple/10 via-transparent to-transparent blur-[160px] pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-primary-purple mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="font-semibold tracking-wide uppercase">Next-Gen Creative Agency</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1] mb-8">
          Crafting premium{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">
            interactive design
          </span>{" "}
          &amp; autonomous AI systems
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          An elite collective engineering high-end boilerplate solutions, spatial interfaces, and agentic integrations for hyper-growth startups.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-5 justify-center">
          <Magnetic strength={0.4} scale={1.06}>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-primary-purple to-secondary-cyan text-sm font-bold text-white transition-all shadow-[0_4px_30px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_40px_rgba(168,85,247,0.4)] flex items-center gap-2 group"
            >
              <span>Build My System</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Magnetic>

          <Magnetic strength={0.2} scale={1.04}>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white hover:bg-white/10 hover:border-white/20 transition-all flex items-center gap-2"
            >
              <span>Our Philosophy</span>
            </Link>
          </Magnetic>
        </div>

        {/* Ambient Grid Interface Preview */}
        <div className="w-full mt-24 max-w-5xl relative group/preview">
          {/* Spotlight aura behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-purple/10 to-secondary-cyan/10 blur-[100px] opacity-75 group-hover/preview:opacity-100 transition-opacity duration-500 rounded-3xl" />
          
          <GlowCard glowColor="rgba(168, 85, 247, 0.08)" className="p-2 md:p-4 rounded-3xl bg-zinc-950/40 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="w-full rounded-2xl overflow-hidden border border-white/5 aspect-[16/9] relative bg-zinc-950">
              {/* Fake web app mockup interface */}
              <div className="absolute top-0 left-0 w-full h-11 border-b border-white/5 bg-zinc-900/60 flex items-center px-4 justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                <div className="px-4 py-1 rounded-md bg-zinc-950/80 border border-white/5 text-[10px] font-mono text-zinc-500">
                  aura-agency.com/dashboard
                </div>
                <div className="w-16" />
              </div>
              
              <div className="pt-16 px-6 md:px-12 grid grid-cols-3 gap-6 h-full text-left font-mono">
                {/* Left side info */}
                <div className="col-span-2 flex flex-col gap-6 justify-center">
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] text-secondary-cyan uppercase tracking-wider font-semibold">&gt; Initialize workflow</span>
                    <h3 className="text-white text-xl md:text-3xl font-extrabold tracking-tight font-sans">
                      Automate with agentic precision.
                    </h3>
                  </div>
                  <div className="flex items-center gap-6 text-[10px] text-zinc-500">
                    <div className="flex items-center gap-1.5">
                      <Code className="w-4 h-4 text-primary-purple" />
                      <span>RSC Engine</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Cpu className="w-4 h-4 text-emerald-400" />
                      <span>AI Pipelines</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-secondary-cyan" />
                      <span>Secure Env</span>
                    </div>
                  </div>
                </div>

                {/* Right side stats visual */}
                <div className="flex flex-col justify-center gap-4 border-l border-white/5 pl-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-xs text-zinc-500">Performance</span>
                    <span className="text-2xl font-bold text-white">99.9%</span>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 flex flex-col gap-1">
                    <span className="text-xs text-zinc-500">API Calls</span>
                    <span className="text-2xl font-bold text-secondary-cyan">1.2M+</span>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Bento Grid Capabilities Section */}
      <BentoGrid />

      {/* Final Call to Action Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <GlowCard glowColor="rgba(168, 85, 247, 0.15)" className="p-12 text-center relative overflow-hidden group">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-purple/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary-cyan/10 blur-[80px] rounded-full pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Ready to design your next-gen launchpad?
          </h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm leading-relaxed mb-8">
            Let's build a blazing-fast, custom frontend architecture backed by strict TypeScript and custom automated agent workflows.
          </p>

          <Magnetic strength={0.3} scale={1.05}>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2 group"
            >
              <span>Initiate Project Consult</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </GlowCard>
      </section>
    </div>
  );
}
