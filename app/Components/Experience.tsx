import { roles, education } from "@/data";

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
          <p className="overline">2024 — PRESENT</p>
          <h2>
            Experience<span>.</span>
          </h2>
          <p>Real projects, real constraints, and a few numbers I&apos;m proud of.</p>
        </div>

        {roles.map((role) => (
          <div className="role" key={role.date}>
            <div className="job-intro reveal">
              <div>
                <span className="job-date">{role.date}</span>
                <h3>{role.company}</h3>
                <p>{role.position}</p>
              </div>
              <div className="job-summary">{role.summary}</div>
            </div>

            {role.contributions.map((c, i) => (
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
        ))}

        <div className="job-intro education reveal">
          <div>
            <span className="job-date">{education.date}</span>
            <h3>{education.school}</h3>
            <p>{education.degree}</p>
          </div>
          <div className="job-summary">Education</div>
        </div>
      </div>
    </section>
  );
}
