import Image from "next/image";
import jessImage from "../jessmysticalimage.png";

const ecosystemCards = [
  {
    title: "ASPIRE P.O.D.S.",
    description:
      "Embedded production, operations, development, and support infrastructure for modern game studios.",
    tagline:
      "AI-aware, customizable, and integrated directly into studio pipelines. Structured. Secure. Scalable. Built from Canada. Serving studios globally.",
  },
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
      "Neurodivergent-affirming retreats for healing, connection, nervous system support, and empowered living.",
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
  "Neurodivergent-Affirming Leadership and Human Development",
  "The Future of VR/AR Human Development Experiences",
  "Global Game Development Infrastructure",
  "Building People-First Systems",
];

const entrepreneurialExperience = [
  "CEO & Founder, Aspire Agency Global Inc.",
  "Founder, Paramita Academy of Makeup (international education brand)",
  "Makeup artist trained in London, England (since 1999) with professional experience across film, television, editorial, bridal, and artistry",
  "Built and led education-based businesses for over two decades",
  "Training and certifying makeup artists globally since 2002",
];

const creativeArtisticWork = ["Multimedia Artist (published & exhibiting)", "Singer", "Poet"];

const credibilityAffiliations = [
  "Psychology Today Profile",
  "Women in Games Ambassador",
  "IGDA Member",
  "Published Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Author of Earth School: A Temporary Human Experience",
];

const credentials = [
  "Doctorate in Philosophy of Metaphysics",
  "Doctorate in Philosophy of Spiritual Counselling",
  "Clinical Hypnotherapist",
  "Cognitive Behavioral Therapy (CBT) Practitioner",
  "Neuro-Linguistic Programming (NLP) Practitioner",
  "Life Between Lives Therapy Practitioner",
  "Past Life Regression Practitioner",
  "Spiritual Life Coach",
  "Interfaith Minister",
  "Spiritual Minister",
  "Shamanic Practitioner",
  "Akashic Records Practitioner",
  "Reiki Level 2",
  "Death Doula / Death Guide",
  "Advanced Meditation Practitioner",
  "HeartMath Practitioner",
  "Holistic Health Practitioner",
  "Joe Dispenza Progressive Course Graduate",
  "Eckhart Tolle — A New Earth Course",
  "Millionaire Mind Intensive Graduate",
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
          <p className="hero-lede">
            Visionary founder, public speaker, interfaith minister, author, and global ecosystem
            builder creating new models across AI, immersive technology, games, wellness,
            education, and human development.
          </p>
          <p className="hero-lede">
            I combine AI, game development, immersive technology, and the human mind to build
            systems that support studios, creators, neurodivergent thinkers, and people seeking
            meaningful transformation.
          </p>
          <p className="hero-highlight">
            Why the next generation of games will change how we experience reality.
          </p>
          <p className="strip">Games | Human Potential | Technology | Compassion | Global Impact</p>
          <p className="authority">
            AI • Technology • Human Potential • Public Speaker • Founder • Author
          </p>
          <div className="cta-row">
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

      <section className="glass section">
        <p className="flow">
          Aspire P.O.D.S. → Aspire Game Academy → EARTH SCHOOL → Aspire Global Foundation → Love Storm Retreats
        </p>
        <p className="clarity">
          This is not a collection of separate projects. This is one connected global ecosystem where technology, AI, human potential, game development, education, immersive experiences, and compassion come together.
        </p>
        <p className="clarity">
          Aspire P.O.D.S. forms the foundation — embedded infrastructure supporting studios. From there, the ecosystem expands into education, immersive experiences, and human transformation.
        </p>
        <p className="clarity">
          Together, this creates a unified system: infrastructure for studios, education for talent, experiences for people, and impact for the world.
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

      <section className="glass section">
        <h3>Neurodivergent-Affirming Work</h3>
        <p>
          My work is intentionally designed to support neurodivergent individuals, including those
          with ADHD, autism, sensory sensitivity, and nonlinear ways of thinking.
        </p>
        <p>
          Rather than expecting people to fit into rigid systems, I design environments and
          experiences that adapt to how people naturally think, feel, and process the world.
        </p>
        <p>
          This includes creating spaces that reduce overwhelm, support the nervous system, and
          encourage clarity, creativity, and authentic self-expression.
        </p>
        <p>This includes:</p>
        <ul className="edge-list">
          <li>neurodivergent-affirming retreat experiences (Love Storm Retreats)</li>
          <li>immersive environments designed for clarity and ease</li>
          <li>awareness-based approaches to growth and transformation</li>
          <li>systems that align with real human behavior, not forced structure</li>
        </ul>
      </section>

      <section className="glass section resume-section">
        <h3>Global Experience, Credibility & Human Development Work</h3>
        <p>
          Rev. Dr. Jessica Simmonds brings over 20+ years of entrepreneurial experience across
          global education, media, beauty, immersive technology, and human development. Her work
          bridges technology, consciousness, creativity, and real-world transformation.
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
            <h4>Creative & Artistic Work</h4>
            <ul className="credential-badges">
              {creativeArtisticWork.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="resume-card">
            <h4>Credibility & Affiliations</h4>
            <ul className="credential-badges">
              {credibilityAffiliations.map((item) => (
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
