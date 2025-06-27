import { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[20px] p-4 bg-background shadow-neu ${className}`}
      {...props}
    />
  );
}
