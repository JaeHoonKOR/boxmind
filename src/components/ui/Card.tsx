// Simple container with neumorphic shadow
import { HTMLAttributes, memo } from "react";

function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-[20px] p-4 bg-background shadow-neu ${className}`}
      {...props}
    />
  );
}

export { Card };
export default memo(Card);
