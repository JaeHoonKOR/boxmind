'use client';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';
import { buttonPress } from '@/lib/animations';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <motion.button
      role="button"
      {...buttonPress}
      className="rounded-2xl px-6 py-3 bg-background shadow-neu text-text"
      style={{ willChange: 'transform' }}
      onClick={(e) => {
        console.log('Button clicked');
        onClick?.(e as any);
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
