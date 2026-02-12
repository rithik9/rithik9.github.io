"use client";
import { cn } from './../../utils/cn';

interface NavTextProps {
  children: string;
  className?: string;
}

export const NavText = ({ children, className }: NavTextProps) => {
  return (
    <span
      className={cn(
        "relative inline-block",
        // "opacity-0 translate-y-1",
        "animate-nav-text-in",
        className
      )}
    >
      {children}

      {/* underline */}
      <span
        className="
          pointer-events-none
          absolute left-0 -bottom-1
          h-px w-full
          scale-x-0
          origin-left
          bg-white
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />
    </span>
  );
};
