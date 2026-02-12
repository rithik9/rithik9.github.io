"use client";
import Hero from "./Components/Hero";
import { FloatingNav } from "./Components/ui/FloatingNav";
import { GoHomeFill } from "react-icons/go";
import Grid from "./Components/ui/Grid";
import TestMotion from "./Components/ui/Grid";
import Experience from "./Components/Experience";
import { navItems } from "@/data";
import Contact from "./Components/Contact";
import Skills from "./Components/ui/Skills";



export default function Home() {
  return (
    <main className="relative flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        {/* <Grid /> */}
        <Skills />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
