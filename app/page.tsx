const currentWork = [
  "Aspire Game Academy",
  "EARTH SCHOOL",
  "Love Storm Retreats",
];

const foundation = [
  "Aspire Agency Global",
  "Paramita Academy",
  "Human Performance",
];

const principles = [
  "Real experience beats theory.",
  "Small teams move faster.",
  "Systems create freedom.",
  "Awareness changes outcomes.",
  "Creativity is a human default.",
];

const skills = [
  "Production Systems",
  "Game Workflows",
  "Team Operations",
  "Business Development",
  "Curriculum Design",
  "Live Ops Thinking",
  "Experience Design",
  "Human Performance",
];

function CardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <article key={item} className="card glow-border">
          <h3>{item}</h3>
        </article>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="hero section">
        <p className="eyebrow">Personal Brand Homepage</p>
        <h1>Rev. Dr. Jessica Simmonds</h1>
        <p className="lead">
          Visionary Entrepreneur. Systems Builder. Clinical Hypnotherapist. Published Author.
        </p>
        <p>
          20+ years building high-performance systems, people, and experiences across technology, education, and human transformation.
        </p>
      </section>

      <section className="section">
        <h2>Core Commitments</h2>
        <ul className="statement-list">
          <li>We build systems that work.</li>
          <li>We build people up.</li>
          <li>We build what’s next.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Current Work</h2>
        <CardGrid items={currentWork} />
      </section>

      <section className="section">
        <h2>Foundation</h2>
        <CardGrid items={foundation} />
      </section>

      <section className="section">
        <h2>How I Think</h2>
        <ul className="statement-list">
          {principles.map((statement) => (
            <li key={statement}>{statement}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="pill-wrap">
          {skills.map((skill) => (
            <span key={skill} className="pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section contact">
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:jessica@aspireagencyglobal.com">jessica@aspireagencyglobal.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/jessica-simmonds-aspire4/">Jessica Simmonds</a>
        </p>
      </section>
    </main>
  );
}
