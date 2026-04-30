const podBadges = [
  "Production",
  "Live Ops",
  "QA",
  "DevQA",
  "Player Support",
  "Community",
  "Localization",
  "Monetization",
  "Analytics Ops",
  "Release Stability",
];

const ecosystemCards = [
  {
    title: "ASPIRE GAME ACADEMY",
    description:
      "Pop-up, AAA-led training experiences preparing the next generation of game industry leaders.",
    tagline: "Learn. Build. Lead the future.",
  },
  {
    title: "EARTH SCHOOL",
    description:
      "VR/AR wellness experiences that blend technology, awareness, consciousness, hypnotherapy-inspired experiences, frequencies, choice-based gameplay, evolution, devolution, and human growth.",
    tagline: "Experience. Grow. Transform.",
  },
  {
    title: "ASPIRE GLOBAL FOUNDATION",
    description:
      "Vending Hope. Combining technology with compassion to create real-world impact.",
    tagline: "Tech with heart. Impact that matters.",
  },
  {
    title: "LOVE STORM RETREATS",
    description:
      "Neurodivergent-affirming spiritual retreats for healing, connection, nervous system support, awareness, and empowered living.",
    tagline: "Heal. Connect. Rise.",
  },
];

const speakingTopics = [
  "From Game Dev to Human Development",
  "Technology and the Human Mind",
  "The Future of Immersive Wellness",
  "Games as Consciousness-Shifting Experiences",
  "Building Systems that Scale People and Studios",
  "Technology, Compassion, and Global Impact",
  "Neurodivergent-Affirming Leadership and Retreat Design",
  "The Future of VR/AR Human Development Experiences",
  "Global Game Development Infrastructure",
  "Building People-First Systems",
];

export default function Home() {
  return (
    <main className="landing">
      <section className="hero glass">
        <div className="hero-copy">
          <h1>Rev. Dr. Jessica Simmonds</h1>
          <h2>Bridging Technology, Consciousness, and Human Potential</h2>
          <p>
            Public Speaker, Founder, and Creator of immersive systems at the intersection of game
            development, awareness, and real-world transformation.
          </p>
          <p>
            I combine technology with the human mind, building systems that scale studios and
            experiences that transform how people think, feel, and live.
          </p>
          <p className="hero-highlight">
            Why the next generation of games will change how we experience reality.
          </p>
          <p className="strip">Games | Human Potential | Technology | Compassion | Global Impact</p>
          <p className="authority">
            20+ Years Experience • Clinical Hypnotherapist • Performance Psychology • Doctorates in
            Metaphysics & Spiritual Counseling • Author • Founder • Public Speaker
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#ecosystem">
              Explore the Ecosystem
            </a>
            <a
              className="btn secondary"
              href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
              target="_blank"
              rel="noreferrer"
            >
              Book a Synergy Call
            </a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src="/jessica-mystical.jpg" alt="Rev. Dr. Jessica Simmonds mystical portrait" className="hero-image" />
        </div>
      </section>

      <section id="ecosystem" className="glass section">
        <h3>One Global Ecosystem for Studios, Talent, Transformation, and Impact</h3>
        <p>
          Rev. Dr. Jessica Simmonds is building a global ecosystem where technology, human
          potential, game development, education, compassion, and immersive experiences connect.
        </p>
        <p>
          Aspire P.O.D.S. supports studios. Aspire Game Academy trains future talent. EARTH SCHOOL
          creates immersive VR/AR human development experiences. Aspire Global Foundation turns
          technology into compassion and real-world impact. Love Storm Retreats supports healing,
          connection, and neurodivergent-affirming transformation.
        </p>
        <p>
          Together, they form one connected global vision: systems for studios, education for
          talent, experiences for people, and compassion for the world.
        </p>
      </section>

      <section className="pods-feature">
        <span className="badge">Global Studio Infrastructure</span>
        <h3>ASPIRE P.O.D.S.</h3>
        <h4>Production • Operations • Development • Support</h4>
        <p>Customizable embedded Canadian production and Live Ops pods built for game studios globally.</p>
        <p>
          Aspire P.O.D.S. integrates directly into studio pipelines to support production, QA,
          DevQA, Live Ops, player support, community, localization, monetization, analytics
          operations, and release stability.
        </p>
        <p>
          Embedded infrastructure, not traditional outsourcing. Structured. Secure. Scalable. Built
          from Canada. Serving studios globally.
        </p>
        <div className="badge-row">
          {podBadges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </section>

      <section className="glass section">
        <p className="flow">
          Aspire P.O.D.S. → Aspire Game Academy → EARTH SCHOOL → Aspire Global Foundation → Love Storm Retreats
        </p>
        <p className="clarity">
          This is not a collection of random projects. This is one global ecosystem combining
          technology with the human mind, global game development, education, immersive wellness,
          compassion, and real-world impact.
        </p>
        <div className="cards">
          {ecosystemCards.map((card) => (
            <article key={card.title} className="card">
              <h4>{card.title}</h4>
              <p>{card.description}</p>
              <strong>{card.tagline}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="glass section center">
        <h3>I build systems for studios and experiences for people.</h3>
        <p>
          My work brings together game development, immersive technology, human potential,
          consciousness, compassion, and real-world impact.
        </p>
        <p className="formula">Technology + Awareness + Compassion = A Better Future</p>
        <p>Building systems that work. Building people up. Building what’s next.</p>
      </section>

      <section className="glass section two-col">
        <div>
          <h3>Rev. Dr. Jessica Simmonds</h3>
          <p className="sub">Multidisciplinary Entrepreneur | Visionary Builder</p>
          <ul>
            <li>CEO, Aspire Agency Global</li>
            <li>Founder, Aspire Game Academy</li>
            <li>Creator, EARTH SCHOOL</li>
            <li>Founder, Aspire Global Foundation</li>
            <li>Creator, Love Storm Retreats</li>
            <li>Public Speaker</li>
          </ul>
        </div>
        <div>
          <h4>Credentials</h4>
          <ul>
            <li>Clinical Hypnotherapist</li>
            <li>Performance Psychology Practitioner</li>
            <li>Spiritual Life Coach</li>
            <li>Interfaith Minister</li>
            <li>Doctorates in Philosophy of Metaphysics and Spiritual Counseling</li>
            <li>Author of A Spiritual Warrior’s Path to Re-Enlightening</li>
            <li>Writer of Earth School: A Temporary Human Experience</li>
          </ul>
        </div>
      </section>

      <section className="glass section">
        <h3>I combine technology with the human mind.</h3>
        <p>From production pipelines to consciousness design, my work bridges:</p>
        <ul className="edge-list">
          <li>Game development</li>
          <li>Neuroscience-inspired awareness</li>
          <li>Immersive environments</li>
          <li>Human transformation</li>
          <li>Compassion-driven technology</li>
          <li>Public speaking and thought leadership</li>
          <li>Global studio infrastructure</li>
          <li>Education and talent development</li>
        </ul>
      </section>

      <section className="glass section">
        <h3>Speaking Topics</h3>
        <div className="topic-grid">
          {speakingTopics.map((topic) => (
            <span key={topic} className="topic-badge">
              {topic}
            </span>
          ))}
        </div>
      </section>

      <section className="quote">The future is human. Let’s build it together.</section>

      <section className="glass section center final-cta">
        <h3>Gaming. Human Performance. Consciousness. Impact.</h3>
        <p>All converging.</p>
        <a
          className="btn primary"
          href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
          target="_blank"
          rel="noreferrer"
        >
          Book a Synergy Call
        </a>
      </section>
    </main>
  );
}
