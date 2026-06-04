'use client';

import React, { useRef, useState } from 'react';

interface MagneticProps {
  children: React.ReactElement<React.ComponentPropsWithRef<any>>;
  range?: number;
  strength?: number;
  scale?: number;
}

export default function Magnetic({
  children,
  range = 70,
  strength = 0.35,
  scale = 1.05,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Get center coordinates of the element
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Distance from pointer to center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    
    // Euclidean distance
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    if (distance < range) {
      setIsHovered(true);
      // Proportional magnetic pull
      const pull = (range - distance) / range;
      setPosition({
        x: deltaX * pull * strength,
        y: deltaY * pull * strength,
      });
    } else {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block transition-transform duration-200 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${isHovered ? scale : 1})`,
      }}
    >
      {children}
    </div>
  );
}
