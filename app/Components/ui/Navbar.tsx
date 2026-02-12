"use client";

import React, { useState } from "react";
// import {
//     motion,
//     AnimatePresence,
//     useScroll,
//     useMotionValueEvent,
// } from "motion/react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import { NavText } from "./NavText";

type NavItem = {
    name: string;
    link: string;
};

export const Navbar = ({
    navItems,
    className,
}: {
    navItems: NavItem[];
    className?: string;
}) => {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(true);

    useMotionValueEvent(scrollY, "change", (current) => {
        const prev = scrollY.getPrevious() ?? 0;

        // Always show near top
        if (current < 80) {
            setVisible(true);
            return;
        }

        // Scroll down → hide
        if (current > prev) {
            setVisible(false);
        }
        // Scroll up → show
        else {
            setVisible(true);
        }
    });

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: 0 }}
                animate={{ y: visible ? 0 : "-100%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[5000] bg-black text-white",
                    "border-b border-white/10",
                    className
                )}
            >
                <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-center">
                    <div className="flex items-center gap-8">
                        {navItems.map((item, idx) => (
                            <a
                                key={idx}
                                href={item.link}
                                className="group text-sm text-white/80 hover:text-white transition-colors"
                            >
                                <NavText>{item.name}</NavText>
                            </a>
                        ))}
                    </div>
                </div>

            </motion.nav>
        </AnimatePresence>
    );
};
