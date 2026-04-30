const ecosystemCards = [
  {
    title: "ASPIRE PODS",
    description:
      "Customizable embedded Production, Operations, Development, and Support teams for game studios.",
    points: ["Structured. Secure. Scalable.", "Built for studios."],
  },
  {
    title: "ASPIRE GAME ACADEMY",
    description:
      "Pop-up, AAA-led training experiences preparing the next generation of game industry leaders.",
    points: ["Learn. Build.", "Lead the future."],
  },
  {
    title: "EARTH SCHOOL",
    description:
      "VR/AR wellness experiences that blend technology, awareness, consciousness, hypnotherapy-inspired experiences, frequencies, choice-based gameplay, evolution, devolution, and human growth.",
    points: ["Experience. Grow. Transform."],
  },
  {
    title: "ASPIRE GLOBAL FOUNDATION",
    description:
      "Vending Hope. Combining technology with compassion to create real-world impact.",
    points: ["Tech with heart.", "Impact that matters."],
  },
  {
    title: "LOVE STORM RETREATS",
    description:
      "Neurodivergent-affirming spiritual retreats for healing, connection, nervous system support, awareness, and empowered living.",
    points: [],
  },
];

const founderHighlights = [
  "Clinical Hypnotherapist",
  "Performance Psychology",
  "Leadership & Human Potential",
  "Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Doctorates in Philosophy of Metaphysics and Spiritual Counseling",
  "Writer of Earth School: A Temporary Human Experience",
];

export default function Home() {
  return (
    <main className="landing">
      <div className="space-glow glow-purple" />
      <div className="space-glow glow-blue" />
      <div className="space-glow glow-pink" />

      <section className="hero panel">
        <p className="topline">
          Games | Human Potential | Technology | Compassion | Global Impact
        </p>
        <h1>FROM GAME DEV TO HUMAN DEVELOPMENT</h1>
        <p className="subheadline">
          Why the next generation of games will change how we experience
          reality.
        </p>

        <blockquote className="script-quote">
          The future is human.
          <br />
          Let’s build it together.
        </blockquote>

        <div className="cta-row">
          <a className="btn btn-primary" href="#ecosystem">
            Explore the Ecosystem
          </a>
          <a
            className="btn btn-secondary"
            href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
            target="_blank"
            rel="noreferrer"
          >
            Book a Synergy Call
          </a>
        </div>
      </section>

      <section className="panel" id="ecosystem">
        <h2>Main Ecosystem</h2>
        <div className="card-grid">
          {ecosystemCards.map((card) => (
            <article key={card.title} className="ecosystem-card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.points.length > 0 && (
                <ul>
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="panel equation">
        <h2>Technology + Awareness + Compassion = A Better Future</h2>
        <p>Building systems that work.</p>
        <p>Building people up.</p>
        <p>Building what’s next.</p>
      </section>

      <section className="panel founder">
        <h2>Jessica Simmonds</h2>
        <p className="founder-subtitle">Multidisciplinary Entrepreneur</p>
        <p className="experience">20+ years of experience</p>
        <ul>
          {founderHighlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="panel closing">
        <h2>Gaming. Human Performance. Consciousness. Impact.</h2>
        <p>All converging.</p>
      </section>
    </main>
  );
}
