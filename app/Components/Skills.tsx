import { skills } from "@/data";
import Section from "./Section";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="02 / 03"
      title="Skills"
      overline="STACK"
      subtitle="What I use day to day."
    >
      <div className="skills-list">
        {skills.map((s, i) => (
          <article className="skill-row reveal" key={s.title}>
            <span className="skill-index">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.title}</h3>
            <p className="skill-names">{s.names}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
