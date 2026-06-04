'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sparkles } from 'lucide-react';
import Magnetic from '../ui/magnetic';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4 bg-zinc-950/65 backdrop-blur-md border-b border-white/5'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-purple to-secondary-cyan flex items-center justify-center relative overflow-hidden">
            <Sparkles className="w-4 h-4 text-white group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Aura<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">Agency</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative py-1 ${
                  isActive ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary-purple to-secondary-cyan rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <Magnetic strength={0.4} scale={1.08}>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden group flex items-center gap-1.5"
            >
              {/* Button Border */}
              <span className="absolute inset-0 rounded-full border border-white/10 group-hover:border-transparent transition-colors duration-300" />
              
              {/* Gradient BG on Hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-primary-purple to-secondary-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full -z-10" />
              
              <span className="text-white">Start Project</span>
              <Sparkles className="w-3.5 h-3.5 text-primary-purple group-hover:text-white transition-colors duration-300" />
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-zinc-950/95 backdrop-blur-lg z-40 md:hidden flex flex-col justify-between p-8 border-t border-white/5 animate-fade-in">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-wide transition-colors ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan'
                      : 'text-zinc-400'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-purple to-secondary-cyan flex items-center justify-center gap-2 font-semibold text-white transition-all shadow-[0_4px_20px_rgba(168,85,247,0.25)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start Project</span>
            </Link>
            <p className="text-center text-xs text-zinc-500 mt-6">
              © {new Date().getFullYear()} AuraAgency. All rights reserved.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
