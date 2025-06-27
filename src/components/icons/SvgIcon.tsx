// Reusable SVG icon component
import { HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<SVGElement> {
  name: "fridge" | "close";
}

const icons = {
  fridge: (
    <path d="M6 2h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 6h6" />
  ),
  close: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l6 6m0-6L6 12" />
  ),
};

function SvgIcon({ name, ...props }: Props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" {...props}>
      {icons[name]}
    </svg>
  );
}

export default memo(SvgIcon);
