import { skills } from "@/data";

export default function Skills() {
  return (
    <section className="content-section container section-grid" id="skills">
      <aside className="section-rail reveal">
        <span className="rail-index">02 / 03</span>
        <span className="rail-name">SKILLS</span>
        <div className="rail-rule" />
      </aside>

      <div className="section-main">
        <div className="section-heading reveal">
          <p className="overline">A FEW THINGS I KNOW</p>
          <h2>
            Skills<span>.</span>
          </h2>
          <p>Tools change. The fundamentals, not so much.</p>
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <article className="skill-row reveal" key={s.title}>
              <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{s.title}</h3>
                <p className="skill-detail">{s.detail}</p>
              </div>
              <p className="skill-names">{s.names}</p>
            </article>
          ))}
        </div>

        <p className="skills-outro reveal">
          A good tool is the one that solves the problem. I&apos;m not
          particularly loyal to frameworks.
        </p>
      </div>
    </section>
  );
}
