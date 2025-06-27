"use client";
import { motion } from "framer-motion";
import SvgIcon from "../icons/SvgIcon";
import { modalVariants } from "@/lib/animations";
import { memo } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ open, onClose, title, children }: Props) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modalTitle"
    >
      <motion.div
        variants={modalVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="bg-background p-6 rounded-[20px] shadow-neu max-w-md w-full"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 id="modalTitle" className="text-lg font-semibold">
            {title}
          </h2>
          <button
            aria-label="Close"
            onClick={() => {
              console.log("[Modal] close clicked");
              onClose();
            }}
            className="focus:outline-none"
          >
            <SvgIcon name="close" width={16} height={16} />
          </button>
        </div>
        {children}
      </motion.div>
    </div>
  );
}

export default memo(Modal);
