const ecosystemCards = [
  {
    title: "ASPIRE PODS",
    description:
      "Customizable embedded Production, Operations, Development, and Support teams for game studios.",
    lines: ["Structured. Secure. Scalable.", "Built for studios."],
  },
  {
    title: "ASPIRE GAME ACADEMY",
    description:
      "Pop-up, AAA-led training experiences preparing the next generation of game industry leaders.",
    lines: ["Learn. Build.", "Lead the future."],
  },
  {
    title: "EARTH SCHOOL",
    description:
      "VR/AR wellness experiences that blend technology, awareness, and human growth.",
    lines: ["Experience. Grow.", "Transform."],
  },
  {
    title: "ASPIRE GLOBAL FOUNDATION",
    subtitle: "Vending Hope",
    description:
      "Combining technology with compassion to create real-world impact.",
    lines: ["Tech with heart.", "Impact that matters."],
  },
  {
    title: "LOVE STORM RETREATS",
    description:
      "Neurodivergent-affirming retreats for healing, connection, and empowered living.",
  },
];

const speakerItems = [
  "Clinical Hypnotherapist",
  "Performance Psychology",
  "Leadership & Human Potential",
  "Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Doctorates in Philosophy of Metaphysics and Spiritual Counseling",
  "Writer of Earth School: A Temporary Human Experience",
];

export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="hero section">
        <p className="eyebrow">From Game Dev to Human Development</p>
        <h1>FROM GAME DEV TO HUMAN DEVELOPMENT</h1>
        <p className="lead">
          Why the next generation of games will change how we experience
          reality.
        </p>
        <p className="theme-line">
          Games | Human Potential | Technology | Compassion | Global Impact
        </p>
      </section>

      <section className="section equation">
        <h2>Technology + Awareness + Compassion = A Better Future</h2>
        <p className="main-message">
          Building systems that work.
          <br />
          Building people up.
          <br />
          Building what&apos;s next.
        </p>
      </section>

      <section className="section">
        <h2>From Game Dev to Human Development Ecosystem</h2>
        <div className="grid ecosystem-grid">
          {ecosystemCards.map((card) => (
            <article key={card.title} className="card glow-border ecosystem-card">
              <h3>{card.title}</h3>
              {card.subtitle ? <p className="card-subtitle">{card.subtitle}</p> : null}
              <p>{card.description}</p>
              {card.lines?.length ? (
                <p className="card-lines">
                  {card.lines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <section className="section speaker">
        <h2>Speaker: Jessica Simmonds</h2>
        <p className="lead">Multidisciplinary Entrepreneur</p>
        <p className="years">20+ years of experience</p>
        <ul className="statement-list">
          {speakerItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="section quote-section">
        <p className="handwritten">
          The future is human.
          <br />
          Let&apos;s build it together.
        </p>
        <p className="closing-line">
          Gaming. Human Performance. Consciousness. Impact.
          <br />
          All converging.
        </p>
      </section>
    </main>
  );
}
