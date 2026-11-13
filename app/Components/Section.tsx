type Props = {
  id: string;
  index: string;
  title: string;
  overline: string;
  subtitle: string;
  className?: string;
  children: React.ReactNode;
};

// Shared layout for the numbered content sections: side rail + heading.
export default function Section({ id, index, title, overline, subtitle, className = "", children }: Props) {
  return (
    <section className={`content-section container section-grid ${className}`} id={id}>
      <aside className="section-rail reveal">
        <span className="rail-index">{index}</span>
        <span className="rail-name">{title.toUpperCase()}</span>
        <div className="rail-rule" />
      </aside>

      <div className="section-main">
        <div className="section-heading reveal">
          <p className="overline">{overline}</p>
          <h2>
            {title}
            <span>.</span>
          </h2>
          <p>{subtitle}</p>
        </div>
        {children}
      </div>
    </section>
  );
}
