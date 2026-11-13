"use client";
import { useEffect, useState } from "react";
import { navItems } from "@/data";

export default function Navbar() {
  const [current, setCurrent] = useState("#me");

  // Highlight the nav link of the section currently in view.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent("#" + e.target.id);
        }),
      { rootMargin: "-20% 0px -60% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="#me">
          rithik<span className="accent">_</span>
        </a>
        <nav className="main-nav" aria-label="Portfolio sections">
          {navItems.map((n) => (
            <a
              key={n.link}
              href={n.link}
              className={`nav-item${current === n.link ? " current" : ""}`}
            >
              <span>{n.no}</span>
              {n.name}
            </a>
          ))}
        </nav>
        <span className="header-caption">FULL STACK ENGINEER</span>
      </div>
    </header>
  );
}
