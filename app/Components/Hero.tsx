import ProfilePhoto from "./ProfilePhoto";
import { links } from "@/data";

export default function Hero() {
  return (
    <section className="hero container" id="me">
      <div className="hero-intro reveal">
        <span className="small-marker" />
        <span>PORTFOLIO</span>
        <span className="hero-intro-right">BASED IN HYDERABAD, INDIA</span>
      </div>

      <div className="hero-body">
        <div className="hero-copy">
          <p className="hero-sup reveal">$ whoami</p>
          <h1 className="hero-title reveal">
            Rithik<span className="cursor">_</span>
          </h1>
          <p className="hero-headline reveal">
            Full stack software engineer working in{" "}
            <em>React, Node.js and Python.</em>
          </p>
          <p className="hero-description reveal">
            I work across backend systems, web products and data workflows. Most
            days, that means making APIs faster, moving data reliably, and
            building things that people find genuinely useful.
          </p>
          <div className="hero-actions reveal">
            <a className="text-link text-link-primary" href="#experience">
              Experience <span>↘</span>
            </a>
            <a
              className="text-link"
              href={links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé (PDF) <span>↗</span>
            </a>
          </div>
        </div>

        <ProfilePhoto />
      </div>

      <div className="hero-footer reveal">
        <span>SCROLL ↓</span>
        <span>WORKING WITH NODE, REACT & PYTHON</span>
        <span>01 — 04</span>
      </div>
    </section>
  );
}
