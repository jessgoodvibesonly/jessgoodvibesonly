import Image from "next/image";
import jessImage from "../jessmysticalimage.png";

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
  "AI, Consciousness, and the Future of Human Development",
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

const entrepreneurialExperience = [
  "CEO, Aspire Agency Global Inc.",
  "Founder of Paramita Academy of Makeup (global education brand)",
  "Built and led education-based businesses for over two decades",
  "Trained and certified makeup artists since 2002",
  "Background in film, television, editorial, bridal, and professional makeup artistry",
  "Built global-facing brands connected to education, creativity, talent, wellness, and human development",
];

const publishedAuthor = [
  "Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Writer of Earth School: A Temporary Human Experience",
  "Creator of transformational frameworks exploring consciousness, spiritual growth, awareness, boundaries, and the human experience",
];

const credentials = [
  "Clinical Hypnotherapy",
  "Advanced Meditation Practitioner",
  "HeartMath Practitioner",
  "NLP",
  "CBT Life Coaching",
  "Reiki Level 2",
  "Akashic Records",
  "Past Life Regression",
  "Life Between Lives Therapy",
  "Shamanic Practices",
  "Joe Dispenza Progressive Course",
];

const getPillClassName = (text: string) =>
  text.length > 110 ? "pill long-pill" : "pill";

export default function Home() {
  return (
    <main className="landing">
      <section className="hero glass">
        <div className="hero-copy">
          <h1>Rev. Dr. Jessica Simmonds</h1>
          <h2>Technology × Consciousness × Creativity</h2>
          <p>CEO, Aspire Agency Global Inc. | Founder | Public Speaker | Author</p>
          <p>
            Visionary builder, interfaith minister, and published author creating never-been-done-before
            ideas across immersive technology, games, wellness, and global impact as a tech + AI +
            human potential leader and global ecosystem creator.
          </p>
          <p>
            I combine AI, immersive technology, game development, and the human mind to build
            systems that scale studios and experiences that elevate people.
          </p>
          <p className="hero-highlight">
            Why the next generation of games will change how we experience reality.
          </p>
          <p className="strip">Games | Human Potential | Technology | Compassion | Global Impact</p>
          <p className="authority">
            AI • Technology • Human Potential • Public Speaker • Founder • Author
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
          <Image
            src={jessImage}
            alt="Rev. Dr. Jessica Simmonds"
            className="hero-image rounded-2xl object-cover"
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        </div>
      </section>

      <section id="ecosystem" className="glass section">
        <h3>One Global Ecosystem for Studios, Talent, Transformation, and Impact</h3>
        <p>
          Rev. Dr. Jessica Simmonds is building a global ecosystem where technology, human
          potential, game development, education, compassion, and immersive experiences connect.
        </p>
        <p>
          Aspire P.O.D.S. uses AI-aware workflows to support modern studio operations. Aspire Game
          Academy prepares talent for the future of AI-supported game production. EARTH SCHOOL
          explores AI-guided awareness, choice-based progression, and immersive human development.
          Aspire Global Foundation uses technology and compassion to create scalable impact. Love
          Storm Retreats brings human connection, nervous system support, and
          neurodivergent-affirming transformation.
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

      <section className="glass section resume-section">
        <h3>Global Experience, Credibility & Human Development Work</h3>
        <p>
          Rev. Dr. Jessica Simmonds brings 20+ years of entrepreneurial experience across
          education, beauty, media, spiritual development, coaching, hypnotherapy, game industry
          infrastructure, immersive technology, and global impact work. Her work connects
          technology with the human mind, human potential, creativity, compassion, and real-world
          transformation.
        </p>
        <div className="resume-grid">
          <article className="resume-card">
            <h4>20+ Years Entrepreneurial Experience</h4>
            <ul className="credential-badges">
              {entrepreneurialExperience.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="resume-card">
            <h4>Credibility & Affiliations</h4>
            <ul className="credential-badges">
              <li className={getPillClassName("Women in Games Ambassador")}>Women in Games Ambassador</li>
              <li className={getPillClassName("IGDA member")}>IGDA member</li>
              {publishedAuthor.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="resume-card">
            <h4>Credentials & Certifications</h4>
            <ul className="credential-badges">
              {credentials.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="resume-card">
            <h4>Global Vision</h4>
            <p>
              Jessica’s work is global in scope, connecting Canadian-built studio infrastructure,
              international education, immersive wellness, spiritual development, retreats, and
              technology-driven compassion projects.
            </p>
            <ul className="credential-badges">
              <li className={getPillClassName("Aspire P.O.D.S. serves game studios globally.")}>Aspire P.O.D.S. serves game studios globally.</li>
              <li className={getPillClassName("Aspire Game Academy is designed for global pop-up education.")}>Aspire Game Academy is designed for global pop-up education.</li>
              <li className={getPillClassName("EARTH SCHOOL is designed as a VR/AR human development experience.")}>EARTH SCHOOL is designed as a VR/AR human development experience.</li>
              <li
                className={getPillClassName("Aspire Global Foundation uses technology and compassion for real-world impact.")}
              >
                Aspire Global Foundation uses technology and compassion for real-world impact.
              </li>
              <li
                className={getPillClassName("Love Storm Retreats supports neurodivergent-affirming healing and connection.")}
              >
                Love Storm Retreats supports neurodivergent-affirming healing and connection.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section className="glass section">
        <h3>My Unique Edge</h3>
        <p>
          I build experiences that merge immersive technology, human consciousness, creativity,
          compassion, wellness, games, and global impact for partners including Meta, Mindvalley,
          Shepherd’s Studio, game studios, wellness leaders, media, investors, and collaborators.
        </p>
        <p>From production pipelines to consciousness design, my work bridges:</p>
        <ul className="edge-list">
          <li>AI-assisted creativity</li>
          <li>AI-supported human development</li>
          <li>AI-powered systems and workflows</li>
          <li>Human-centered technology</li>
        </ul>
      </section>

      <section className="glass section">
        <h3>AI + Human Potential</h3>
        <p>
          AI is not replacing the human experience. Used with intention, it can help us understand
          patterns, build better systems, support creativity, improve access, and expand what is
          possible for people and organizations.
        </p>
        <p>
          My work explores how AI, immersive technology, game development, hypnotherapy-inspired
          design, and consciousness-based frameworks can come together to support human growth,
          education, studio infrastructure, and real-world impact.
        </p>
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

      <section className="quote-section" aria-label="Frida Kahlo quote">
        <p className="quote-section-main">&ldquo;I have painted my own reality.&rdquo; — Frida Kahlo</p>
        <p className="quote-section-support">
          You can curate your experience. You can shape your reality.
        </p>
      </section>

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
