'use client';

import React, { useActionState, startTransition } from 'react';
import { Mail, Phone, MapPin, Sparkles, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';
import { submitContactForm, FormState } from '@/app/actions';
import GlowCard from '@/components/ui/glow-card';
import Magnetic from '@/components/ui/magnetic';

const initialState: FormState = {
  success: false,
  message: '',
};

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  const contactDetails = [
    {
      icon: <Mail className="w-5 h-5 text-primary-purple" />,
      label: "Email",
      value: "hello@auraagency.com",
      href: "mailto:hello@auraagency.com",
    },
    {
      icon: <Phone className="w-5 h-5 text-secondary-cyan" />,
      label: "Phone",
      value: "+1 (555) 019-2834",
      href: "tel:+15550192834",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-purple" />,
      label: "Studio Location",
      value: "Metropolitan District, SF, CA",
      href: "#",
    },
  ];

  const projectTypes = [
    { value: "design", label: "UI/UX Design" },
    { value: "development", label: "Engineering" },
    { value: "ai-integration", label: "AI Integration" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="relative overflow-hidden w-full pb-24">
      {/* Light leaks */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary-purple/5 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-cyan/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* Header */}
        <div className="flex flex-col gap-4 text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-primary-purple self-center">
            <MessageSquare className="w-3.5 h-3.5" />
            <span className="font-semibold tracking-wide uppercase">Initiate Consult</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mt-2">
            Let's build something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-secondary-cyan">
              exceptional
            </span>
          </h1>
          <p className="text-zinc-400 text-sm">
            Reach out to kick off your project design review or request custom agent integrations.
          </p>
        </div>

        {/* Form & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-white tracking-tight">Connect with our team</h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
              We respond to qualified requests within 24 hours. Let us know your technical requirements and business goals.
            </p>

            <div className="flex flex-col gap-4">
              {contactDetails.map((detail) => (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="p-3 bg-zinc-900 border border-white/10 rounded-xl group-hover:scale-105 transition-transform">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-wider">
                      {detail.label}
                    </span>
                    <span className="text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors mt-0.5">
                      {detail.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="border-t border-white/5 pt-8 mt-4">
              <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider font-mono mb-2">
                Operational Status
              </h4>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Taking projects for Q3/Q4 2026</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="lg:col-span-3">
            <GlowCard glowColor="rgba(168, 85, 247, 0.12)" className="p-8">
              {state?.success ? (
                /* Success Screen */
                <div className="flex flex-col items-center text-center py-12 px-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-zinc-400 text-sm max-w-md leading-relaxed mb-8">
                    {state.message}
                  </p>
                  <Magnetic strength={0.3} scale={1.05}>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold text-white transition-all"
                    >
                      Submit Another Query
                    </button>
                  </Magnetic>
                </div>
              ) : (
                /* Form Display */
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* General Status Messages */}
                  {state?.message && !state.success && (
                    <div className="p-4 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs rounded-xl font-medium">
                      {state.message}
                    </div>
                  )}

                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Aria Vance"
                      disabled={isPending}
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-zinc-950/40 text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple/50 focus:ring-1 focus:ring-primary-purple/50 transition-all text-sm"
                    />
                    {state?.errors?.name && (
                      <span className="text-[11px] text-rose-500 font-medium font-mono">{state.errors.name[0]}</span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. aria@example.com"
                      disabled={isPending}
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-zinc-950/40 text-white placeholder-zinc-600 focus:outline-none focus:border-secondary-cyan/50 focus:ring-1 focus:ring-secondary-cyan/50 transition-all text-sm"
                    />
                    {state?.errors?.email && (
                      <span className="text-[11px] text-rose-500 font-medium font-mono">{state.errors.email[0]}</span>
                    )}
                  </div>

                  {/* Project Type selection */}
                  <div className="flex flex-col gap-2">
                    <span className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                      Project Type
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-1">
                      {projectTypes.map((type) => (
                        <label
                          key={type.value}
                          className="flex items-center justify-center p-3 rounded-xl border border-white/5 bg-zinc-950/40 hover:border-white/10 hover:bg-zinc-900/40 cursor-pointer transition-all text-xs text-zinc-400 font-medium select-none text-center has-[:checked]:border-primary-purple/60 has-[:checked]:bg-primary-purple/5 has-[:checked]:text-white"
                        >
                          <input
                            type="radio"
                            name="projectType"
                            value={type.value}
                            defaultChecked={type.value === 'design'}
                            disabled={isPending}
                            className="sr-only"
                          />
                          <span>{type.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-400 font-mono uppercase tracking-wider">
                      Project Specification
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your system details, targets, or custom integration requests..."
                      disabled={isPending}
                      className="w-full px-4 py-3 rounded-xl border border-white/5 bg-zinc-950/40 text-white placeholder-zinc-600 focus:outline-none focus:border-primary-purple/50 focus:ring-1 focus:ring-primary-purple/50 transition-all text-sm resize-none"
                    />
                    {state?.errors?.message && (
                      <span className="text-[11px] text-rose-500 font-medium font-mono">{state.errors.message[0]}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="mt-4">
                    <Magnetic strength={0.3} scale={1.03}>
                      <button
                        type="submit"
                        disabled={isPending}
                        className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary-purple to-secondary-cyan text-sm font-bold text-white hover:opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(168,85,247,0.2)]"
                      >
                        {isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-white" />
                            <span>Validating Credentials...</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-4 h-4 text-white" />
                            <span>Submit Consult Brief</span>
                          </>
                        )}
                      </button>
                    </Magnetic>
                  </div>
                </form>
              )}
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}
