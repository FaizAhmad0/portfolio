"use client";

import { useId, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function ExperienceRow({
  children,
  description,
}: {
  children: ReactNode;
  description: string;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const duration = reducedMotion ? 0 : 0.65;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <div className="experience-row">
      <button
        type="button"
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        className="experience-trigger flex w-full cursor-pointer items-center gap-3 p-3.5 text-left"
        onClick={() => setOpen((value) => !value)}
      >
        {children}
        <motion.span
          aria-hidden="true"
          className="shrink-0 text-[var(--muted)]"
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration, ease }}
        >
          <ChevronDown className="size-4" />
        </motion.span>
      </button>
      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
        className="overflow-hidden"
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration, ease }}
      >
        <motion.p
          className="pb-3 pl-[62px] pr-5 text-xs leading-6 text-[var(--muted)]"
          initial={false}
          animate={{ opacity: open ? 1 : 0, y: open ? 0 : -8 }}
          transition={{
            duration: reducedMotion ? 0 : open ? 0.45 : 0.25,
            delay: reducedMotion ? 0 : open ? 0.08 : 0,
            ease,
          }}
        >
          {description}
        </motion.p>
      </motion.div>
    </div>
  );
}
