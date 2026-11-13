import { roles, education } from "@/data";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="01 / 03"
      title="Experience"
      overline="2024 — PRESENT"
      subtitle="Real projects, real constraints, and a few numbers I'm proud of."
    >
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
    </Section>
  );
}
