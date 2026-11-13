"use client";
import { useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  // Fade elements in as they scroll into view.
  useEffect(() => {
    document.documentElement.classList.add("js");
    const io = new IntersectionObserver(
      (entries, obs) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.05 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
