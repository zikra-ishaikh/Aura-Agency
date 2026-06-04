'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    studio: [
      { name: 'Philosophy', href: '/about#philosophy' },
      { name: 'Creative Team', href: '/about#team' },
      { name: 'Case Studies', href: '/#features' },
    ],
    services: [
      { name: 'AI Automation & Ops', href: '/#features' },
      { name: 'High-End Web Design', href: '/#features' },
      { name: 'Visual Identity Systems', href: '/#features' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
    ],
  };

  return (
    <footer className="relative border-t border-white/5 bg-zinc-950/40 mt-auto overflow-hidden">
      {/* Decorative Light Leak */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group self-start">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-purple to-secondary-cyan flex items-center justify-center relative overflow-hidden">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">Agency</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
              Design agency specializing in digital experiences, automated AI ops, and premium design systems for modern brands.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="https://linkedin.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Links Column 1: Studio */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Studio</h4>
            <ul className="flex flex-col gap-3">
              {links.studio.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Focus</h4>
            <ul className="flex flex-col gap-3">
              {links.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5 group"
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3: Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Legal</h4>
            <ul className="flex flex-col gap-3">
              {links.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors flex items-center gap-0.5 group"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            © {currentYear} AuraAgency. Crafted by elite developers for premium digital performance.
          </p>
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
