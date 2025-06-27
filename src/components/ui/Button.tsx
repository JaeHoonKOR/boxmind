"use client";
// Basic button with small press animation
import { motion } from "framer-motion";
import { HTMLAttributes, memo } from "react";
import { buttonPress } from "@/lib/animations";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <motion.button
      role="button"
      {...buttonPress}
      className="rounded-2xl px-6 py-3 bg-background shadow-neu text-text"
      style={{ willChange: "transform" }}
      onClick={(e) => {
        console.log("[Button] click");
        onClick?.(e as any);
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export { Button };
export default memo(Button);
