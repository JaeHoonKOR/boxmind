'use client';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import SvgIcon from '../icons/SvgIcon';
import { sectionEntry } from '@/lib/animations';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, title, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && ref.current) {
      gsap.fromTo(ref.current, sectionEntry.from, sectionEntry.to);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <div ref={ref} className="bg-background p-6 rounded-[20px] shadow-neu max-w-md w-full" style={{ willChange: 'transform' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 id="modalTitle" className="text-lg font-semibold">{title}</h2>
          <button aria-label="Close" onClick={onClose} className="focus:outline-none">
            <SvgIcon name="close" width={16} height={16} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
