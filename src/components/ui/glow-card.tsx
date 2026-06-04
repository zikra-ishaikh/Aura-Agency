'use client';

import React, { useRef, useState } from 'react';

interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glowColor?: string;
  className?: string;
}

export default function GlowCard({
  children,
  glowColor = 'rgba(168, 85, 247, 0.12)', // Default purple glow
  className = '',
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top } = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass-panel glass-panel-hover rounded-2xl relative overflow-hidden ${className}`}
      {...props}
    >
      {/* Interactive mouse spotlight glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, ${glowColor}, transparent 80%)`,
          }}
        />
      )}

      {/* Subtly colored border trace spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px z-10 rounded-2xl opacity-40 transition-opacity duration-300"
          style={{
            border: '1px solid transparent',
            background: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.35), transparent 70%)`,
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />
      )}

      <div className="relative z-20 h-full w-full">{children}</div>
    </div>
  );
}
