'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Compass, HelpCircle } from 'lucide-react';
import Magnetic from '@/components/ui/magnetic';

export default function NotFound() {
  return (
    <div className="relative min-h-[70vh] w-full flex items-center justify-center px-6 overflow-hidden">
      {/* Interactive Background Light Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-purple/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-secondary-cyan/5 blur-[90px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-2xl mx-auto flex flex-col items-center text-center relative z-10 py-16">
        
        {/* Animated Cyber Portal Visual */}
        <div className="relative w-44 h-44 mb-10 flex items-center justify-center">
          {/* Inner ring */}
          <div className="absolute w-36 h-36 rounded-full border border-dashed border-primary-purple/40 animate-portal" />
          {/* Outer ring */}
          <div className="absolute w-44 h-44 rounded-full border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.15)]" />
          {/* Glow center */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary-purple to-secondary-cyan opacity-80 blur-[20px] absolute animate-pulse-slow" />
          
          {/* Central status icon */}
          <Compass className="w-10 h-10 text-white relative z-20 animate-bounce" />
        </div>

        {/* 404 Status Header */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-500/5 text-[10px] font-mono text-rose-400 uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
          <span>System Disconnection [404]</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Lost in spatial coordinates
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-sm max-w-md leading-relaxed mb-10">
          The node or route you are searching for does not exist on our servers. Verify the URL or return to core operations.
        </p>

        {/* Floating coordinates indicator */}
        <div className="font-mono text-[9px] text-zinc-600 mb-8 border border-white/5 bg-zinc-950/40 px-4 py-2 rounded-xl flex gap-6">
          <span>LAT: 37.7749° N</span>
          <span>•</span>
          <span>LNG: 122.4194° W</span>
          <span>•</span>
          <span>ALT: 404m</span>
        </div>

        {/* Return Button */}
        <div className="flex gap-4">
          <Magnetic strength={0.3} scale={1.05}>
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-purple to-secondary-cyan text-xs font-bold text-white transition-all shadow-[0_4px_20px_rgba(168,85,247,0.2)] hover:shadow-[0_4px_30px_rgba(168,85,247,0.35)] flex items-center gap-2 group"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return Home</span>
            </Link>
          </Magnetic>

          <Magnetic strength={0.2} scale={1.03}>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all flex items-center gap-2"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Report Issue</span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
