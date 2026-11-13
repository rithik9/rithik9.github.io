import { contributions } from "@/data";

export default function Experience() {
  return (
    <section className="content-section container section-grid" id="experience">
      <aside className="section-rail reveal">
        <span className="rail-index">01 / 03</span>
        <span className="rail-name">EXPERIENCE</span>
        <div className="rail-rule" />
      </aside>

      <div className="section-main">
        <div className="section-heading reveal">
          <p className="overline">WHAT I&apos;VE WORKED ON</p>
          <h2>
            Experience<span>.</span>
          </h2>
          <p>Real projects, real constraints, and a few numbers I&apos;m proud of.</p>
        </div>

        <div className="job-intro reveal">
          <div>
            <span className="job-date">NOV 2024 — PRESENT</span>
            <h3>Mango Mass Media</h3>
            <p>Junior Software Developer · Hyderabad</p>
          </div>
          <div className="job-summary">
            Building backend services, document processing systems and internal
            tools. I work with both product stakeholders and the people who use
            what we ship.
          </div>
        </div>

        <div>
          {contributions.map((c, i) => (
            <article className="contribution reveal" key={c.title}>
              <span className="contribution-no">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="contribution-area">{c.area}</p>
                <h3>{c.title}</h3>
                <p className="contribution-description">{c.description}</p>
                <p className="contribution-tools">{c.tools}</p>
              </div>
              <strong className="contribution-result">{c.result}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
