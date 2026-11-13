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
          <p className="overline">STACK</p>
          <h2>
            Skills<span>.</span>
          </h2>
          <p>What I use day to day.</p>
        </div>

        <div className="skills-list">
          {skills.map((s, i) => (
            <article className="skill-row reveal" key={s.title}>
              <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p className="skill-names">{s.names}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
