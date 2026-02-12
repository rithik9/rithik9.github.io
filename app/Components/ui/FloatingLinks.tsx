"use client";
import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";

export const FloatingLinks = () => {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Show links if you scrolled past hero (say ~100px)
    setShow(current > 0.05);
  });

  if (!show) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="fixed top-30 right-4 flex flex-col gap-3 z-[5000]"
    >
      {/* LinkedIn Button */}
      <a
        href="https://linkedin.com/in/yourprofile"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center h-12 px-4 rounded-full border border-black/10 dark:border-white/10 bg-transparent hover:bg-black/10 dark:hover:bg-neutral-800 text-sm font-medium text-black dark:text-white transition"
      >
        <FaLinkedin /> 
      </a>

      {/* Resume Button */}
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center h-12 px-4 rounded-full border border-black/10 dark:border-white/10 bg-transparent hover:bg-black/10 dark:hover:bg-neutral-800 text-sm font-medium text-black dark:text-white transition"
      >
        <FaFilePdf /> 
      </a>
    </motion.div>
  );
};
