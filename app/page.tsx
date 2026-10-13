import Image from "next/image";
import jessImage from "../public/earth-school-jess.webp";
import { bookingUrl, PrivateSessions } from "./components/PrivateSessions";

const earthSchoolUrl = "https://earth-school-five.vercel.app";
const socialLinks = [
  { label: "Instagram", handle: "@jessgoodvibesonly", url: "https://www.instagram.com/jessgoodvibesonly/" },
  { label: "YouTube", handle: "@EarthSchoolOfficial", url: "https://www.youtube.com/@EarthSchoolOfficial" },
  { label: "LinkedIn", handle: "Rev. Dr. Jess", url: "https://www.linkedin.com/in/jessica-simmonds-aspire4/" },
];
const guestTransmissionInquiryUrl =
  "mailto:jessgoodvibesonly@gmail.com?subject=" +
  encodeURIComponent("EARTH SCHOOL — Guest Transmission Proposal") +
  "&body=" +
  encodeURIComponent(
    "Hi Jess,\n\nI would love to explore being part of EARTH SCHOOL.\n\nName / public name: \nWebsite or social profile: \nMy work / community: \nTopic I would love to share: \nPreferred format (retro voicemail / drive-in / either): \nInterested in discussing a character inspired by my likeness? (optional): \nEmail to reach me: \n\nI understand this is an unpaid collaboration proposal, not an agreement to use or license my work. Any recording, image or likeness permissions would be agreed separately in writing before use.\n\nThank you!"
  );
const earthSchoolInvestorPdfUrl = "/EARTH-SCHOOL-INVESTOR-OVERVIEW.pdf";
const earthSchoolHighlights = [
  {
    title: "ECHO POINT ISLAND",
    description:
      "A mysterious 1980s East Coast world filled with retro locations, hidden stories, memorable characters and layers of reality waiting to be discovered.",
  },
  {
    title: "THE SANCTUARY VEHICLE",
    description:
      "Your private space for reflection, meditation, breathwork, journaling, consciousness tools and conversations with your AI companion.",
  },
  {
    title: "DREAM STATE DINER",
    description:
      "The social heart of Echo Point Island—a place to meet, talk, collaborate, connect and discover new quests.",
  },
  {
    title: "THE LIGHT SYSTEM",
    description:
      "Choices, courage, creativity, connection and awareness generate light. As your light grows, the world responds.",
  },
];

const earthSchoolGallery = [
  {
    "file": "echo-point-lighthouse",
    "title": "Echo Point Island",
    "caption": "The lighthouse at sunset in the UEFN world.",
    "alt": "EARTH SCHOOL in the UEFN editor, showing a lighthouse beneath a purple and pink sunset",
    "width": 675,
    "height": 1200
  },
  {
    "file": "dream-state-diner",
    "title": "Dream State Diner",
    "caption": "A look inside the island’s retro diner.",
    "alt": "EARTH SCHOOL gameplay inside Dream State Diner, with blue booths, a counter and patterned floors",
    "width": 1200,
    "height": 675
  },
  {
    "file": "sanctuary-vehicle",
    "title": "Sanctuary Vehicle",
    "caption": "Retro TVs and a quiet place to pause.",
    "alt": "Sanctuary Vehicle interior in the UEFN editor, with retro televisions, patterned wallpaper and a striped sofa",
    "width": 1200,
    "height": 675
  },
  {
    "file": "island-characters",
    "title": "Meeting the island’s characters",
    "caption": "An early in-game encounter with Morgan.",
    "alt": "EARTH SCHOOL gameplay showing the player avatar facing Morgan across a blue counter",
    "width": 900,
    "height": 1200
  },
  {
    "file": "behind-the-scenes",
    "title": "Behind the scenes with Jess",
    "caption": "Building the island and editing its transmissions.",
    "alt": "Jess’s workstation with EARTH SCHOOL open in UEFN and a transmission being edited on a laptop",
    "width": 1200,
    "height": 675
  },
  {
    "file": "early-world-experiment",
    "title": "An early world experiment",
    "caption": "A separate Bitmagic exploration of Echo Point Island.",
    "alt": "An early Echo Point Island concept on a laptop in Bitmagic, showing a coastal village with blue lights",
    "width": 675,
    "height": 1200
  }
];

const speakingTopics = [
  "AI, Consciousness, and the Future of Human Development",
  "Technology and the Human Mind",
  "The Future of VR/AR Human Development Experiences",
  "The Future of Immersive Wellness",
  "From Game Development to Human Development",
  "Games as Consciousness-Shifting Experiences",
  "Building People-First Systems",
  "Technology, Compassion, and Global Impact",
  "Neurodivergent-Affirming Leadership and Human Development",
];

const entrepreneurialExperience = [
  "CEO & Founder, Aspire Agency Global Inc.",
  "Founder, Paramita Academy of Makeup (international education brand)",
  "Makeup artist trained in London, England (since 1999) with professional experience across film, television, editorial, bridal, and artistry",
  "Built and led education-based businesses for over two decades",
  "Training and certifying makeup artists globally since 2002",
];

const creativeArtisticWork = [
  "Traveled to 23 countries",
  "Completed the Scotiabank Half Marathon (Toronto)",
  "Daily meditation practice (5+ years)",
  "Lived in Toronto and Mexico",
  "Self-taught Spanish speaker",
  "Based on the East Coast of Canada",
  "Loves humour and positivity",
  "Identical twin",
  "Mother of four",
  "Focus areas: neuroscience and homesteading",
  "Gardening and cooking enthusiast",
  "Her AI is named NOVA",
  "Near-death experience survivor",
  "Mi’kmaq roots",
];

const credibilityAffiliations = [
  "Psychology Today Profile",
  "Women in Games Ambassador",
  "IGDA Member",
  "Published Author of A Spiritual Warrior’s Path to Re-Enlightening",
  "Creator of EARTH SCHOOL™\nAn Original Open-World Multiplayer Experience",
];

const credentials = [
  "Doctorate in Philosophy of Metaphysics",
  "Doctorate in Philosophy of Spiritual Counselling",
  "Clinical Hypnotherapist (Since 2006)",
  "Cognitive Behavioral Therapy (CBT) Practitioner",
  "Neuro-Linguistic Programming (NLP) Practitioner",
  "Life Between Lives Therapy Practitioner",
  "Past Life Regression Practitioner",
  "Spiritual Life Coach",
  "EFT & TFT Tapping Practitioner",
  "Interfaith Minister",
  "Spiritual Minister",
  "Shamanic Healing Energy Practitioner",
  "Akashic Records Practitioner",
  "Reiki Level 2",
  "Death Guide",
  "Advanced Meditation Practitioner",
  "HeartMath Practitioner",
  "Holistic Health Practitioner",
  "Neuroplasticity: How to Rewire Your Brain Certification",
  "Joe Dispenza Progressive Course Graduate",
  "Eckhart Tolle — A New Earth Course",
  "Millionaire Mind Intensive Graduate",
];

const featuredCredentials = [
  { label: "Metaphysics", detail: "Doctorate in Philosophy of Metaphysics" },
  { label: "Spiritual Counselling", detail: "Doctorate in Philosophy of Spiritual Counselling" },
  { label: "Hypnotherapy", detail: "Clinical Hypnotherapist since 2006" },
  { label: "Interfaith", detail: "Ordained Spiritual-Interfaith Minister" },
  { label: "Teaching", detail: "25+ years of teaching and education" },
  { label: "Mind & Change", detail: "CBT, NLP, meditation and neuroplasticity studies" },
];

const getPillClassName = (text: string) =>
  text.length > 110 ? "pill long-pill" : "pill";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#top">Skip to content</a>
      <header className="site-header">
        <nav className="site-nav" aria-label="Primary navigation">
          <a className="site-mark" href="#top" aria-label="Rev. Dr. Jessica Simmonds — home">
            <img src="/peacesymbolgold.png" alt="" aria-hidden="true" />
            <span>Jess Good Vibes Only</span>
          </a>
          <div className="desktop-nav">
            <a className="nav-link" href="#earth-school">EARTH SCHOOL</a>
            <a className="nav-link" href="#guest-transmissions">Be in the Game</a>
            <a className="nav-link" href="#mens-day-title">Events</a>
            <a className="nav-link" href="#private-sessions">Private Sessions</a>
            <a className="nav-link" href="#podcast">Podcasts</a>
            <a className="nav-link" href="#credentials">Meet Jess</a>
            <a
              className="btn nav-booking-button"
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a Reading on Calendly (opens in a new tab)"
            >
              Book a Reading
            </a>
          </div>
          <details className="mobile-nav">
            <summary aria-label="Open navigation menu"><span aria-hidden="true" /></summary>
            <div className="mobile-nav-panel">
              <a href="#earth-school">EARTH SCHOOL</a>
              <a href="#guest-transmissions">Be in the Game</a>
              <a href="#art">Art by Jess</a>
              <a href="/earth-school-mens-day">Men’s Day · November 28</a>
              <a href="/earth-school-womens-day">Women’s Day · December 5</a>
              <a href="#private-sessions">Private Sessions</a>
              <a href="#podcast">Podcasts</a>
              <a href="#credentials">Meet Jess</a>
              <a href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              <a href="https://www.youtube.com/@EarthSchoolOfficial" target="_blank" rel="noopener noreferrer">YouTube ↗</a>
              <a
                className="btn nav-booking-button"
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a Reading on Calendly (opens in a new tab)"
              >
                Book a Reading
              </a>
            </div>
          </details>
        </nav>
      </header>
      <main id="top" className="landing">
      <section className="hero glass" aria-label="Meet Jess">
        <div className="hero-copy heroTextContainer">
          <div className="heroHeader">
            <img src="/peacesymbolgold.png" className="peaceHeroLeft" alt="Peace icon" />
            <div><p className="hero-name">Rev. Dr. Jessica Simmonds</p><h1>Jess <span className="color-pop pop-cyan">Good</span><br />Vibes <span className="color-pop pop-pink">Only</span><span className="hero-period">.</span></h1></div>
          </div>
          <h2>Technology × <span className="color-pop pop-yellow">Consciousness</span> × Creativity</h2>
          <p>CEO, Aspire Agency Global Inc. | Founder | Public Speaker | Author</p>
          <p className="hero-lede">Creative worlds, conscious exploration and meaningful human experiences.</p>
          <p className="hero-highlight">Building EARTH SCHOOL—where awareness becomes part of the game.</p>


          <div className="cta-row">
            <a
              className="btn secondary"
              href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
              target="_blank"
              rel="noreferrer"
            >
              Book a Synergy Call ↗
            </a>
            <a className="hero-text-link" href="#earth-school">Discover EARTH SCHOOL ↓</a>
          </div>
          <nav className="social-shortcuts" aria-label="Follow Jess and EARTH SCHOOL">
            <span className="social-shortcuts-label">Follow the journey</span>
            {socialLinks.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={`${social.label} ${social.handle} (opens in a new tab)`}>
                {social.label}<span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="hero-image-wrap">
          <Image
            src={jessImage}
            alt="Rev. Dr. Jessica Simmonds"
            className="hero-image"
            sizes="(max-width: 900px) 100vw, 40vw"
            priority
          />
        </div>
      </section>
      <div className="identity-strip"><span>Games</span><span>Human Potential</span><span>Technology</span><span>Compassion</span><span>Global Impact</span></div>
      <section id="credentials" className="credentials-spotlight" aria-labelledby="credentials-spotlight-title">
        <div className="credentials-spotlight-header">
          <div>
            <p className="credentials-eyebrow">THE HUMAN BEHIND THE VISION</p>
            <h2 id="credentials-spotlight-title">Meet Jess.<br /><em>Experience meets <span className="color-pop pop-blue">imagination.</span></em></h2>
          </div>
          <div className="credentials-spotlight-story">
            <p>Rev. Dr. Jessica Simmonds is an entrepreneur, author, public speaker, educator, ordained interfaith minister and creator of EARTH SCHOOL. Her work spans spiritual counselling, hypnotherapy, creative education, human development and immersive experiences.</p>
            <p>Almost three decades of entrepreneurship. Over 25 years of teaching. A lifelong curiosity about consciousness and what it means to be human.</p>
          </div>
        </div>
        <div className="featured-credentials">
          {featuredCredentials.map((item, index) => (
            <article className="featured-credential" key={item.label}>
              <span className="featured-credential-index">0{index + 1}</span>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
        <details className="credentials-expand">
          <summary>Explore all credentials &amp; certifications <span aria-hidden="true">↗</span></summary>
          <ul className="credentials-full-list">
            {credentials.map((credential) => <li key={credential}>{credential}</li>)}
          </ul>
        </details>
      </section>

      <section id="earth-school" className="earth-school-feature" aria-labelledby="earth-school-title">
        <div className="earth-school-atmosphere" aria-hidden="true" />
        <div className="earth-school-content">
          <p className="earth-school-kicker">IN DEVELOPMENT IN UEFN / FORTNITE · ECHO POINT ISLAND</p>
          <p className="genre-eyebrow">A <span className="color-pop pop-cyan">NEW GENRE</span> IN GAMING</p>
          <h2 id="earth-school-title">EARTH SCHOOL</h2>
          <p className="earth-school-subtitle">A Temporary Human Experience</p>
          <h3>What if being human is the game—and remembering who you are is how you learn to play it?</h3>
          <div className="earth-school-story">
            <p>
              EARTH SCHOOL is an original spiritual exploration game and immersive world set on Echo Point
              Island—a mysterious East Coast community frozen in the 1980s. I&apos;m creating a new kind
              of experience where consciousness, ancient wisdom and self-discovery become something people can play.
              The prototype is being built using Unreal Editor for Fortnite (UEFN).
            </p>
            <p>
              Players create an avatar, explore the island, meet its characters and move through
              quests shaped by choice, attention, creativity, connection and awareness. Your
              choices generate light. As your awareness grows, the avatar evolves and the world
              responds—revealing new paths, synchronicities, abilities and hidden layers of reality.
            </p>
            <p>Guest transmissions are planned as recorded messages discovered on retro answering
              machines, payphones and the island’s drive-in screen.</p>
            <p>Most games ask how powerful your character can become.</p>
            <p>EARTH SCHOOL asks who you can become through playing.</p>
          </div>
          <p className="earth-school-differentiator">The avatar evolves because the player does.</p>
          <div className="earth-school-highlights">
            {earthSchoolHighlights.map((highlight, index) => (
              <article key={highlight.title} className="earth-school-highlight">
                <span aria-hidden="true">0{index + 1}</span>
                <h4>{highlight.title}</h4>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
          <div className="earth-school-gallery" aria-labelledby="earth-school-gallery-title">
            <div className="earth-school-gallery-heading">
              <p className="earth-school-kicker">FROM JESS’S DEVELOPMENT DESK</p>
              <h3 id="earth-school-gallery-title">Step inside the world.</h3>
              <p>Real photos from the making of EARTH SCHOOL. The game is in development; these images capture the journey so far.</p>
            </div>
            <div className="earth-school-gallery-grid">
              {earthSchoolGallery.map((photo) => (
                <figure className="earth-school-gallery-card" key={photo.file}>
                  <a href={`/earth-school/${photo.file}.webp`} target="_blank" rel="noopener noreferrer" aria-label={`View full photo: ${photo.title} (opens in a new tab)`}>
                    <Image src={`/earth-school/${photo.file}.webp`} alt={photo.alt} width={photo.width} height={photo.height} sizes="(max-width: 680px) 100vw, (max-width: 900px) 50vw, 33vw" className="earth-school-gallery-image" />
                    <span className="earth-school-gallery-expand" aria-hidden="true">View photo ↗</span>
                  </a>
                  <figcaption><h4>{photo.title}</h4><p>{photo.caption}</p></figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="earth-school-actions">
            <a className="btn earth-school-button" href={earthSchoolUrl} target="_blank" rel="noreferrer">
              Explore EARTH SCHOOL
            </a>
            <a className="earth-school-investor-link" href={earthSchoolInvestorPdfUrl} target="_blank" rel="noopener noreferrer">
              View investor overview ↗
            </a>
          </div>
        </div>
      </section>

      <section id="guest-transmissions" className="guest-transmissions" aria-labelledby="guest-transmissions-title">
        <div className="guest-transmissions-masthead">
          <div className="guest-transmissions-headline">
            <p className="guest-transmissions-eyebrow"><span aria-hidden="true" className="guest-transmissions-led" /> GUEST TRANSMISSIONS · OPEN INVITATION</p>
            <h2 id="guest-transmissions-title">Your voice.<br /><em>Someone else&apos;s <span className="color-pop pop-pink">discovery.</span></em></h2>
          </div>
          <div className="guest-transmissions-introduction">
            <p>We&apos;re inviting spiritual teachers, thinkers, storytellers and consciousness creators to become part of <strong>EARTH SCHOOL</strong>—a new kind of exploration game being developed inside Fortnite.</p>
            <p>Instead of another interview, imagine sharing an idea in your own words, at your own pace. Record an uninterrupted <strong>20–30 minute transmission</strong> on a subject that means something to you. Somewhere on our nostalgic 1980s island, a player may discover it.</p>
          </div>
        </div>
        <div className="guest-transmissions-choices">
          <article className="guest-transmissions-choice">
            <div className="guest-transmissions-choice-top"><span>01 / AN ANALOG MESSAGE</span><span className="guest-transmissions-symbol" aria-hidden="true">☎</span></div>
            <h3>The Voicemail</h3>
            <p>A voice waiting to be heard. Players find your transmission through a retro answering machine or an island payphone, like an unexpected message from a friend.</p>
          </article>
          <article className="guest-transmissions-choice">
            <div className="guest-transmissions-choice-top"><span>02 / A BIG-SCREEN MOMENT</span><span className="guest-transmissions-symbol" aria-hidden="true">✦</span></div>
            <h3>The Drive-In</h3>
            <p>Your photograph, your voice and atmospheric visuals fill the island&apos;s outdoor cinema—turning an evening at the drive-in into a new perspective.</p>
          </article>
        </div>
        <div className="guest-transmissions-details">
          <div className="guest-transmissions-themes">
            <p className="guest-transmissions-small-label">CONVERSATIONS WE&apos;RE EXPLORING</p>
            <p>Ancient wisdom meets everyday experience. Hermetic principles, simulation theory, neuroscience, the nervous system, manifestation, numerology, astrology, synchronicity, Kabbalah, energy, attention and choice. Or choose a topic that&apos;s entirely your own.</p>
            <p className="guest-transmissions-character">There may also be opportunities to discuss an in-game character inspired by your likeness, subject to development feasibility and your explicit permission.</p>
          </div>
          <div className="guest-transmissions-apply">
            <p className="guest-transmissions-small-label">A NEW WAY TO SHARE WHAT YOU KNOW</p>
            <h3>Want to leave a transmission?</h3>
            <p>Tell us a little about your work, the topic you&apos;d love to explore and whether the voicemail or drive-in speaks to you.</p>
            <a className="btn guest-transmissions-button" href={guestTransmissionInquiryUrl}>Request to Be in the Game <span aria-hidden="true">↗</span></a>
            <p className="guest-transmissions-apply-note">This opens a pre-filled email to Jess. Send it from your email app to make your enquiry.</p>
          </div>
        </div>
        <p className="guest-transmissions-permission">This is an unpaid creative collaboration. Submitting an enquiry doesn&apos;t guarantee an appearance or grant permission to use your material. Recordings, photographs, likenesses and promotional excerpts would only be used with separately agreed written permission.</p>
      </section>

      <section id="art" className="art-showcase" aria-labelledby="art-showcase-title">
        <div className="art-showcase-intro">
          <div>
            <p className="art-showcase-eyebrow">ORIGINAL WORK · THE ART OF JESS</p>
            <h2 id="art-showcase-title">Art, instinct<br />&amp; <span className="color-pop pop-blue">expression.</span></h2>
          </div>
          <div>
            <p>My art is another way I explore the human experience—through images, symbols, colour, intuition and the unexpected. These are photographs of my original works, shared here just as I created them.</p>
            <p className="art-source-note">Original artwork by Rev. Dr. Jessica Simmonds.</p>
          </div>
        </div>
        <div className="art-gallery-grid">
          <figure className="art-gallery-piece art-gallery-featured">
            <a href="/art/jess-original-earth-school-art.jpg" target="_blank" rel="noopener noreferrer" aria-label="View original EARTH SCHOOL artwork at full size">
              <Image src="/art/jess-original-earth-school-art.jpg" width={2072} height={3720} alt="Original colourful EARTH SCHOOL artwork by Jess featuring hand-drawn symbols and figures" sizes="(max-width: 740px) 100vw, 48vw" />
            </a>
            <figcaption>EARTH SCHOOL — original artwork <span>01 / 03</span></figcaption>
          </figure>
          <figure className="art-gallery-piece">
            <a href="/art/jess-original-mona-art.jpg" target="_blank" rel="noopener noreferrer" aria-label="View original Jess portrait artwork at full size">
              <Image src="/art/jess-original-mona-art.jpg" width={3072} height={4080} alt="Jess's original Mona Lisa-inspired portrait artwork against a vibrant red background" sizes="(max-width: 740px) 100vw, 24vw" />
            </a>
            <figcaption>Portrait study — original artwork <span>02 / 03</span></figcaption>
          </figure>
          <figure className="art-gallery-piece">
            <a href="/art/jess-original-vision-art.jpg" target="_blank" rel="noopener noreferrer" aria-label="View original Jess vision artwork at full size">
              <Image src="/art/jess-original-vision-art.jpg" width={2629} height={3896} alt="Jess's original expressive portrait with vivid colour, symbols and writing" sizes="(max-width: 740px) 100vw, 24vw" />
            </a>
            <figcaption>Symbolic expression — original artwork <span>03 / 03</span></figcaption>
          </figure>
        </div>
      </section>

      <div className="events-heading"><p className="chapter-label">02 / COME TOGETHER</p><h2>Bring the experience<br /><em>into <span className="color-pop pop-pink">real life.</span></em></h2></div>
      <div className="event-pair">
      <section className="glass section mens-day-ad" aria-labelledby="mens-day-title">
        <p className="authority">IN PERSON · CHARLOTTETOWN · SATURDAY, NOVEMBER 28, 2026</p>
        <p className="mens-day-ad-edition">THE FIRST MEN’S DAY</p>
        <h3 id="mens-day-title"><span>EARTH SCHOOL</span>A Spiritual Warrior’s Day for Men</h3>
        <p>A day of hypnotherapy, meditation, grounding, intuitive exploration, art and connection with Rev. Dr. Jess.</p>
        <p><strong>10 AM–7 PM · $333 CAD per person · 10 places</strong><br />Food and refreshments included. Venue details to follow.</p>
        <div className="cta-row"><a className="btn" href="/earth-school-mens-day">Explore the men’s day ↗</a></div>
      </section>

      <section className="glass section mens-day-ad" aria-labelledby="womens-day-title">
        <p className="authority">IN PERSON · CHARLOTTETOWN · SATURDAY, DECEMBER 5, 2026</p>
        <p className="mens-day-ad-edition">THE WOMEN’S DAY</p>
        <h3 id="womens-day-title"><span>EARTH SCHOOL</span>A Spiritual Warrior’s Day for Women</h3>
        <p>A day to come back to yourself through meditation, hypnotherapy, intuitive exploration, art and connection with Rev. Dr. Jess.</p>
        <p><strong>10 AM–7 PM · $333 CAD per person · 10 places</strong><br />Food and refreshments included. Venue details to follow.</p>
        <div className="cta-row"><a className="btn" href="/earth-school-womens-day">Explore the women’s day ↗</a></div>
      </section>

      </div>
      <PrivateSessions />

      <section className="glass section center manifesto">
        <h3>I create worlds that invite people to see differently.</h3>
        <p>
          My work brings together game development, immersive technology, human potential,
          consciousness, compassion, and real-world impact.
        </p>
        <p className="formula">Technology + Awareness + Compassion = A Better Future</p>
        <p>Creating with curiosity. Making room for discovery. Building what’s next.</p>
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

      <section id="about" className="glass section resume-section"><p className="chapter-label">03 / MEET THE HUMAN</p>
        <h3>Global Experience, Credibility & Human Development Work</h3>
        <p>
          Rev. Dr. Jessica Simmonds is a lifelong entrepreneur with almost three decades of
          experience, an author, educator and teacher, an ordained Spiritual-Interfaith Minister,
          the creator of EARTH SCHOOL, and a mother of four. She holds a doctorate in philosophy
          of metaphysics. Her work bridges technology, consciousness, creativity and real-world
          transformation.
        </p>
        <div className="resume-grid">
          <details className="resume-card">
            <summary>Almost Three Decades of Entrepreneurial Experience</summary>
            <ul className="credential-badges">
              {entrepreneurialExperience.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </details>
          <details className="resume-card">
            <summary>A Spiritual Being Having a Human Experience Since 1979</summary>
            <ul className="credential-badges">
              {creativeArtisticWork.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </details>
          <details className="resume-card">
            <summary>Credibility & Affiliations</summary>
            <ul className="credential-badges">
              {credibilityAffiliations.map((item) => (
                <li key={item} className={getPillClassName(item)}>{item}</li>
              ))}
            </ul>
          </details>

        </div>
      </section>

      <div className="perspective-pair">
      <section className="glass section edge-section">
        <h3>My Unique Edge</h3>
        <p>
          I build experiences at the intersection of immersive technology, human consciousness,
          creativity, wellness, games, and global impact.
        </p>
        <p>From meaningful gameplay to real-world reflection, my work connects imagination, people, and possibility.</p>
        <p>This includes:</p>
        <ul className="edge-list">
          <li>AI-assisted creativity</li>
          <li>AI-supported human development</li>
          <li>AI-powered systems and workflows</li>
          <li>Human-centered technology</li>
        </ul>
      </section>

      <section className="glass section edge-section">
        <h3>AI + Human Potential</h3>
        <p>
          AI does not replace the human experience. It expands it.
        </p>
        <p>
          Used with intention, it helps us recognize patterns, build better systems, and support creativity, access, and growth.
        </p>
        <p>
          My work brings together AI, immersive technology, game development, and consciousness-based design to support:
        </p>
        <ul className="edge-list">
          <li>Human potential</li>
          <li>Education and talent development</li>
          <li>Immersive experiences and creative learning</li>
          <li>Real-world impact</li>
        </ul>
      </section>

      </div>
      <section className="glass section speaking-topics-section"><p className="chapter-label">04 / IDEAS WORTH SHARING</p>
        <h3>Speaking Topics</h3>
        <p>
          I speak at the intersection of technology, consciousness, storytelling and human potential—inviting audiences to rethink what games, creativity and personal growth can make possible.
        </p>
        <p>
          My talks are designed to shift perspective, spark innovation, and leave people seeing their work, their lives, and what&apos;s possible differently.
        </p>
        <p className="speaking-topics-intro">Core Topics:</p>
        <div className="topicGrid">
          {speakingTopics.map((topic) => (
            <span key={topic} className="topicPill">
              {topic}
            </span>
          ))}
        </div>
        <p className="speaking-topics-highlight">&ldquo;These are not just talks. They are perspective-shifting experiences.&rdquo;</p>
        <p className="text-center text-sm md:text-base font-medium mt-6 opacity-90">
          Jess <img src="/peacesymbolgold.png" className="peaceSignoff" alt="Peace icon" />
        </p>
      </section>

      <section id="podcast" className="private-sessions podcast-feature" aria-labelledby="podcast-title">
        <div className="podcast-wave" aria-hidden="true">{[22,45,70,35,95,55,80,40,100,62,28,73,48,90,30,65,40,85,52,25].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div>
        <div className="private-sessions-grid">
          <div className="private-sessions-copy">
            <p className="private-eyebrow">ON AIR · PODCASTS &amp; CONVERSATIONS</p>
            <h2 id="podcast-title" style={{ maxWidth: "15ch" }}>Let’s make it a conversation.</h2>
            <div className="private-introduction">
              <p>Consciousness. Creativity. Being human. The future of games. Invite Rev. Dr. Jess to your podcast for an open, curious conversation that connects big ideas with real life.</p>
              <p>From building EARTH SCHOOL inside Fortnite to spiritual exploration, entrepreneurship and neurodivergent creativity—there’s plenty to talk about.</p>
            </div>
            <p className="private-signature">A temporary human experience. A conversation worth having.</p>
          </div>
          <div className="service-card">
            <p className="service-label">BEHIND THE MIC · REV. DR. JESS</p>
            <h3>Invite Jess to Your Podcast</h3>
            <p className="service-description">Creating an episode about self-awareness, consciousness, human behaviour, immersive technology or following a vision? Let’s connect.</p>
            <div className="topicGrid" style={{ margin: "1.5rem 0" }}>
              {["EARTH SCHOOL & gaming", "Consciousness & ancient wisdom", "AI & human potential", "Neurodivergent creativity"].map((topic) => <span key={topic} className="topicPill">{topic}</span>)}
            </div>
            <a className="btn service-booking-button" href={"mailto:jessgoodvibesonly@gmail.com?subject=" + encodeURIComponent("Podcast invitation for Rev. Dr. Jess") + "&body=" + encodeURIComponent("Hi Jess,\n\nI’d love to invite you onto my podcast.\n\nMy name: \nPodcast name and website: \nProposed topic: \nAudience: \nRecording format (remote / in person): \nPreferred dates and time zone: \nEpisode promotion plans: \n\nLooking forward to connecting!")}>Send a Podcast Request <span aria-hidden="true">↗</span></a>
            <p className="service-support">Opens an email draft with the details to include. Send it from your email app, and Jess will reply directly.</p>
          </div>
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
        <p className="final-cta-prompt">Where do you want to start?</p>
        <div className="final-cta-buttons" role="group" aria-label="Explore Jessica’s ecosystem">
          <a
            className="btn final-cta-primary"
            href="https://calendly.com/aspiritualwarriorspath/synergy-call-aspire-x-earth-school-x-partnerships"
            target="_blank"
            rel="noreferrer"
          >
            Book a Synergy Call
          </a>
          <a className="btn final-cta-secondary" href={earthSchoolUrl} target="_blank" rel="noreferrer">
            Explore Earth School
          </a>
          <a className="btn final-cta-secondary" href="https://www.aspiritualwarriorspath.com" target="_blank" rel="noreferrer">
            Spiritual Work & Writings
          </a>
        </div>
        <nav className="footer-social-links" aria-label="Follow on social media">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer">
              {social.label}<span className="footer-social-handle">{social.handle}</span><span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </nav>
        <div className="final-cta-divider" aria-hidden="true" />
        <p className="final-cta-note">For partnerships, speaking, media, or aligned collaboration, let&apos;s connect.</p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:jessgoodvibesonly@gmail.com">jessgoodvibesonly@gmail.com</a>
          </p>
          <p>
            <strong>Business Email:</strong>{' '}
            <a href="mailto:jessica@aspireagencyglobal.com">jessica@aspireagencyglobal.com</a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{' '}
            <a href="https://wa.me/19029405818" target="_blank" rel="noopener noreferrer">
              +1 (902) 940-5818
            </a>
          </p>
        </div>
        <p className="final-cta-signoff">
          Jess <img src="/peacesymbolgold.png" className="peaceSignoff" alt="Peace icon" />
        </p>
        <div className="final-cta-divider" aria-hidden="true" />
        <p className="creator-credit">
          All videos, websites, and creative content featured here were concepted, designed, and
          created by Jessica Simmonds.
        </p>
      </section>
      </main>
    </>
  );
}
