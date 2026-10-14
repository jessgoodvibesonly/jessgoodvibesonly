import Image from "next/image";
import ArtworkGallery from "./components/ArtworkGallery";
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

const originalArtHighlights = [
  {
    "src": "/art/jess-heart-of-colour.jpg",
    "title": "Heart of Colour",
    "alt": "Original vibrantly coloured anatomical heart illustration by Jess",
    "w": 2883,
    "h": 3796
  },
  {
    "src": "/art/jess-bloom-and-become.jpg",
    "title": "Bloom & Become",
    "alt": "Original mixed-media Jess artwork of bright flowers and a self-empowerment message",
    "w": 3072,
    "h": 3518
  },
  {
    "src": "/art/jess-purpose-of-enlightenment.jpg",
    "title": "Stay Open",
    "alt": "Original illustrated sketchbook page by Jess exploring enlightenment",
    "w": 2289,
    "h": 2945
  },
  {
    "src": "/art/jess-colourful-rooster.jpg",
    "title": "The Rooster",
    "alt": "Original expressive rooster painting by Jess",
    "w": 2393,
    "h": 2684
  },
  {
    "src": "/art/jess-brain-and-beliefs.jpg",
    "title": "The Inner Mind",
    "alt": "Original brain and belief map illustration by Jess",
    "w": 1933,
    "h": 2679
  },
  {
    "src": "/art/jess-cosmic-night.jpg",
    "title": "Cosmic Night",
    "alt": "Original artwork of swirling blue night sky and stars by Jess",
    "w": 2996,
    "h": 3979
  }
];

const speakingTopics = [
  "The Art of Conscious Programming: Remembering Who You Are",
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
            <a className="nav-link" href="#mens-day-title">Retreats</a>
            <a className="nav-link" href="/inner-circle">Inner Circle · $33/mo</a>
            <a className="nav-link" href="#art">My Art</a>
            <a className="nav-link" href="#talks">Talks</a>
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
              <a href="/earth-school-mens-day">Men’s Day · November 28</a>
              <a href="/earth-school-womens-day">Women’s Day · December 5</a>
              <a href="/inner-circle">Inner Circle · $33/mo</a>
              <a href="#art">My Art</a>
              <a href="#talks">Talks</a>
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
      <section aria-label="Explore Jess's offerings" style={{maxWidth:"1180px",margin:"18px auto 22px",padding:"0 18px"}}>
        <p style={{textAlign:"center",fontFamily:"sans-serif",letterSpacing:"0.18em",fontSize:"0.78rem",fontWeight:700,margin:"0 0 12px"}}>WORK WITH JESS · CHOOSE YOUR EXPERIENCE</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"14px"}}>
          <article style={{border:"1px solid rgba(221,183,128,.65)",borderRadius:"20px",padding:"22px",background:"linear-gradient(130deg,rgba(63,39,80,.82),rgba(23,27,46,.94))",color:"#fff3e4",boxShadow:"0 8px 30px #0002"}}>
            <p style={{fontSize:"0.75rem",letterSpacing:"0.13em",fontFamily:"sans-serif",color:"#ffdda3",margin:"0 0 8px"}}>ONE-ON-ONE · 45 MINUTES</p>
            <h2 style={{fontSize:"clamp(1.35rem,2vw,1.7rem)",margin:"0 0 8px",color:"inherit"}}>Intuitive Clarity Reading</h2>
            <p style={{fontSize:"2.2rem",fontWeight:800,margin:"6px 0",color:"#ffe1ac"}}>$111 CAD <span style={{fontSize:"0.9rem",fontWeight:400,color:"#fff3e4"}}>/ session</span></p>
            <p style={{fontSize:"0.95rem",lineHeight:1.6}}>A private intuitive session for perspective, guidance and clarity.</p>
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:"10px",padding:"12px 18px",borderRadius:"99px",background:"#f5d39c",color:"#211724",fontWeight:700,textDecoration:"none"}}>Book a Reading ↗</a>
          </article>
          <article style={{border:"1px solid rgba(221,183,128,.65)",borderRadius:"20px",padding:"22px",background:"linear-gradient(130deg,rgba(31,73,83,.85),rgba(27,30,61,.94))",color:"#fff3e4",boxShadow:"0 8px 30px #0002"}}>
            <p style={{fontSize:"0.75rem",letterSpacing:"0.13em",fontFamily:"sans-serif",color:"#ffdda3",margin:"0 0 8px"}}>MONTHLY GROUP MENTORSHIP</p>
            <h2 style={{fontSize:"clamp(1.35rem,2vw,1.7rem)",margin:"0 0 8px",color:"inherit"}}>EARTH SCHOOL · The Inner Circle</h2>
            <p style={{fontSize:"2.2rem",fontWeight:800,margin:"6px 0",color:"#ffe1ac"}}>$33 CAD <span style={{fontSize:"0.9rem",fontWeight:400,color:"#fff3e4"}}>/ month</span></p>
            <p style={{fontSize:"0.95rem",lineHeight:1.6}}>Group calls, weekly transmissions and activations. Cancel anytime.</p>
            <a href="/inner-circle" style={{display:"inline-block",marginTop:"10px",padding:"12px 18px",borderRadius:"99px",background:"#f5d39c",color:"#211724",fontWeight:700,textDecoration:"none"}}>Explore Membership ↗</a>
          </article>
        </div>
      </section>
      <section className="hero glass" aria-label="Meet Jess">
        <div className="hero-copy heroTextContainer">
          <div className="heroHeader">
            <img src="/peacesymbolgold.png" className="peaceHeroLeft" alt="Peace icon" />
            <div><p className="hero-name">Rev. Dr. Jessica Simmonds</p><h1>Jess <span className="color-pop pop-cyan">Good</span><br />Vibes <span className="color-pop pop-pink">Only</span><span className="hero-period">.</span></h1></div>
          </div>
          <h2>Technology × <span className="color-pop pop-yellow">Consciousness</span> × Creativity</h2>
          <p>CEO, Aspire Agency Global Inc. | Founder | Public Speaker | Author</p>
          <p className="hero-lede">Creative <span className="color-pop pop-blue">worlds</span>, conscious exploration and meaningful human experiences.</p>
          <p className="hero-highlight">Building EARTH SCHOOL—where <span className="color-pop pop-pink">awareness</span>, simulation theory and the art of being human become part of the game.</p>


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
            <a className="my-story-link" href="/my-story">Read my full story <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="featured-credentials">
          {featuredCredentials.map((item, index) => (
            <article className="featured-credential" key={item.label}>
              <span className="featured-credential-index">0{index + 1}</span>
              <h3 className={index === 1 ? "color-pop pop-blue" : index === 2 ? "color-pop pop-pink" : index === 4 ? "color-pop pop-cyan" : undefined}>{item.label}</h3>
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
          <p className="earth-school-subtitle">A Temporary <span className="color-pop pop-blue">Human</span> Experience</p>
          <h3>What if being human is the game—and <span className="color-pop pop-yellow">remembering</span> who you are is how you learn to play it?</h3>
          <div style={{maxWidth:"850px",margin:"24px auto",padding:"24px",border:"1px solid rgba(235,195,132,.5)",borderRadius:"20px",background:"rgba(34,25,49,.60)"}}>
            <p style={{letterSpacing:"0.16em",fontWeight:700,fontSize:"0.8rem",color:"#f4d29a"}}>A FOUNDATIONAL EARTH SCHOOL TEACHING</p>
            <h3 style={{fontSize:"clamp(1.7rem,4vw,2.7rem)",margin:"10px 0"}}>RE-ENLIGHTEN <span style={{color:"#f4d29a"}}>✦</span></h3>
            <p style={{lineHeight:1.8}}>Inspired by Jess&apos;s book <em>A Spiritual Warrior&apos;s Path to Re-Enlightening</em>, Re-Enlighten is the invitation to rediscover awareness, intuition, compassion and creativity beneath the stories and conditioning we have learned. It is not about becoming someone else. It is about remembering and bringing that awareness into everyday choices.</p>
            <p style={{lineHeight:1.8}}>The Seven Hermetic Principles explore patterns. The Art of Remembering, inspired in part by <em>A Course in Miracles</em>, explores perception from fear toward love. <strong>Re-Enlighten</strong> is the lived practice: notice, question, choose, integrate, and return to the world differently.</p>
            <p style={{fontWeight:700}}>Understand the pattern. Question the story. Choose the loving action.</p>
          </div>
          <div className="earth-school-story">
            <p>
              EARTH SCHOOL is an original spiritual exploration game and immersive world set on Echo Point
              Island—a mysterious East Coast community frozen in the 1980s. I&apos;m creating a new kind
              of experience where consciousness, simulation theory, neuroscience, ancient wisdom and self-discovery become something people can play.
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
          <p className="earth-school-differentiator">The avatar evolves because the <span className="color-pop pop-cyan">player</span> does.</p>
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
              <h3 id="earth-school-gallery-title">Step inside the <span className="color-pop pop-blue">world.</span></h3>
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

      <div className="events-heading"><p className="chapter-label">02 / COME TOGETHER</p><h2>Bring the experience<br /><em>into <span className="color-pop pop-pink">real life.</span></em></h2></div>
      <div className="event-pair">
      <section className="glass section mens-day-ad" aria-labelledby="mens-day-title">
        <p className="authority">IN PERSON · CHARLOTTETOWN · SATURDAY, NOVEMBER 28, 2026</p>
        <p className="mens-day-ad-edition">THE FIRST <span className="color-pop pop-cyan">MEN’S DAY</span></p>
        <h3 id="mens-day-title"><span>EARTH SCHOOL</span>Men’s Day · The Art of Being Human</h3>
        <p><strong>WHAT IF REALITY ISN’T QUITE WHAT YOU THINK IT IS?</strong> Step inside an extraordinary exploration of simulation theory, neuroscience, consciousness, the Seven Hermetic Principles and the Art of Conscious Programming — plus PRACTICE: grounding, movement, boundaries and preparing the biological space suit for change — with Rev. Dr. Jess ☮️.</p>
        <p><strong>10 AM–7 PM · $333 CAD per person · 10 places</strong><br />Food and refreshments included. Venue details to follow.</p>
        <div className="cta-row"><a className="btn" href="/earth-school-mens-day">Discover the men’s experience ↗</a></div>
      </section>

      <section className="glass section mens-day-ad" aria-labelledby="womens-day-title">
        <p className="authority">IN PERSON · CHARLOTTETOWN · SATURDAY, DECEMBER 5, 2026</p>
        <p className="mens-day-ad-edition">THE <span className="color-pop pop-pink">WOMEN’S DAY</span></p>
        <h3 id="womens-day-title"><span>EARTH SCHOOL</span>Women’s Day · The Art of Becoming</h3>
        <p><strong>WHAT IF YOU ARE SO MUCH MORE THAN YOU’VE BEEN TAUGHT TO BE?</strong> Discover the fascinating connections between simulation theory, intuition, neuroscience, metaphysics, ancient wisdom and conscious choice — with practical activations and the 1,000-watt lesson on preparing your biological space suit to hold a new chapter — with Rev. Dr. Jess ☮️.</p>
        <p><strong>10 AM–7 PM · $333 CAD per person · 10 places</strong><br />Food and refreshments included. Venue details to follow.</p>
        <div className="cta-row"><a className="btn" href="/earth-school-womens-day">Discover the women’s experience ↗</a></div>
      </section>

      </div>
      <section id="inner-circle" className="glass section" aria-labelledby="inner-circle-title" style={{textAlign:"center",border:"1px solid rgba(226,186,144,.38)"}}>
        <p className="chapter-label">EARTH SCHOOL · MONTHLY SPIRITUAL MENTORSHIP</p>
        <h2 id="inner-circle-title">THE INNER CIRCLE</h2>
        <p style={{fontSize:"1.3rem",fontStyle:"italic"}}>The art of remembering who you are.</p>
        <p className="section-text">Join THE HIGH PRIESTjESS for monthly live group mentorship, weekly audio transmissions, guided activations, synchronicity explorations and real-world practices. All levels of awareness welcome.</p>
        <p style={{fontSize:"1.8rem",fontWeight:700,margin:"1.2rem auto"}}>$33 CAD / month</p>
        <p>Cancel anytime · Separate from private readings and one-on-one mentorship</p>
        <div className="cta-row"><a className="btn" href="/inner-circle">Explore the Inner Circle ↗</a></div>
      </section>

      <section id="art" className="art-showcase" aria-labelledby="art-showcase-title">
        <div className="art-showcase-intro">
          <div>
            <p className="art-showcase-eyebrow">ORIGINAL WORK · THE ART OF JESS</p>
            <h2 id="art-showcase-title">Art, instinct<br />&amp; <span className="color-pop pop-blue">expression.</span></h2>
          </div>
          <div>
            <p>My art is another way I explore the human experience—through images, symbols, colour, intuition and the unexpected. These are photographs of my original works, shared here just as I created them.</p>
            <p className="art-source-note">Original artwork by Rev. Dr. Jessica Simmonds · Tap any piece to enlarge.</p>
          </div>
        </div>
        <ArtworkGallery />
        <div style={{display:"flex",flexWrap:"wrap",gap:"1rem",alignItems:"center",marginTop:"1.8rem"}}>
          <a className="btn" href="/art">Explore More of My Art ↗</a>
          <span style={{opacity:0.8}}>Original art · An oracle deck is coming soon</span>
        </div>
      </section>

      <section id="talks" className="glass section speaking-topics-section"><p className="chapter-label">04 / IDEAS WORTH SHARING</p>
        <h3><span className="color-pop pop-cyan">Speaking</span> Topics</h3>
        <p>
          I speak at the intersection of technology, consciousness, storytelling and human potential—inviting audiences to rethink what games, creativity and personal growth can make possible.
        </p>
        <p>
          My talks are designed to shift perspective, spark innovation, and leave people seeing their work, their lives, and what&apos;s possible differently.
        </p>
        <div className="service-card" style={{ margin: "2rem 0", textAlign: "left" }}>
          <p className="service-label">FEATURED TALK · THE HIGH PRIESTjESS ☮️</p>
          <h4>The Art of <span className="color-pop pop-cyan">Conscious Programming</span></h4>
          <p className="service-description">Remembering who you are. A personal, practical exploration of the biological space suit, neurodivergence, nervous system awareness, compassion, boundaries, sound and meditation, the creative power of AI, and the everyday choices that reshape a life.</p>
          <p className="service-description">Drawing on her own transformation—from rediscovering her identity as an intuitive, channeler, artist and creator to building EARTH SCHOOL—Jess introduces the 33 ACTS of Becoming: simple, real-world practices for making room for love, opportunity, confidence, travel and creativity. An engaging talk for retreats, conferences and communities ready to turn reflection into action.</p>
          <a className="btn secondary" href="mailto:jessgoodvibesonly@gmail.com?subject=Book%20Jess%20%E2%80%94%20The%20Art%20of%20Conscious%20Programming">Enquire About This Talk ↗</a>
        </div>
        <p className="speaking-topics-intro">Core Topics:</p>
        <div className="topicGrid">
          {speakingTopics.map((topic) => (
            <span key={topic} className="topicPill">
              {topic}
            </span>
          ))}
        </div>
        <p className="speaking-topics-highlight">&ldquo;These are not just talks. They are <span className="color-pop pop-blue">perspective-shifting</span> experiences.&rdquo;</p>
        <p className="text-center text-sm md:text-base font-medium mt-6 opacity-90">
          Jess <img src="/peacesymbolgold.png" className="peaceSignoff" alt="Peace icon" />
        </p>
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
            <h3>The <span className="color-pop pop-cyan">Voicemail</span></h3>
            <p>A voice waiting to be heard. Players find your transmission through a retro answering machine or an island payphone, like an unexpected message from a friend.</p>
          </article>
          <article className="guest-transmissions-choice">
            <div className="guest-transmissions-choice-top"><span>02 / A BIG-SCREEN MOMENT</span><span className="guest-transmissions-symbol" aria-hidden="true">✦</span></div>
            <h3>The <span className="color-pop pop-pink">Drive-In</span></h3>
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
            <h3>Want to leave a <span className="color-pop pop-yellow">transmission?</span></h3>
            <p>Tell us a little about your work, the topic you&apos;d love to explore and whether the voicemail or drive-in speaks to you.</p>
            <a className="btn guest-transmissions-button" href={guestTransmissionInquiryUrl}>Request to Be in the Game <span aria-hidden="true">↗</span></a>
            <p className="guest-transmissions-apply-note">This opens a pre-filled email to Jess. Send it from your email app to make your enquiry.</p>
          </div>
        </div>
        <p className="guest-transmissions-permission">This is an unpaid creative collaboration. Submitting an enquiry doesn&apos;t guarantee an appearance or grant permission to use your material. Recordings, photographs, likenesses and promotional excerpts would only be used with separately agreed written permission.</p>
      </section>

      <PrivateSessions />

      <section id="spiritual-writings" className="glass section" aria-labelledby="spiritual-writings-title">
        <p className="chapter-label">GO DEEPER · THE BOOK & THE JOURNEY</p>
        <h3 id="spiritual-writings-title">A Spiritual Warrior’s <span className="color-pop pop-yellow">Path to Re-Enlightening.</span></h3>
        <p>Before EARTH SCHOOL became an interactive world, the questions were already alive in Jess’s writing: Who are we beyond our conditioning? What shapes the reality we experience? What becomes possible when we begin to see life differently?</p>
        <p>Explore the book and Jess’s wider spiritual work — including consciousness, intuition, metaphysics, simulation theory and the art of being human.</p>
        <div className="cta-row">
          <a className="btn" href="https://www.aspiritualwarriorspath.com" target="_blank" rel="noopener noreferrer">Explore the Book & Spiritual Work ↗</a>
          <a className="btn secondary" href="/my-story">Meet the Author ↗</a>
        </div>
      </section>

      <section className="glass section center manifesto">
        <h3>I create worlds that invite people to see <span className="color-pop pop-blue">differently.</span></h3>
        <p>
          My work brings together game development, immersive technology, human potential,
          consciousness, compassion, and real-world impact.
        </p>
        <p className="formula">Technology + Awareness + Compassion = A Better Future</p>
        <p>Creating with curiosity. Making room for discovery. Building what’s next.</p>
      </section>

      <section className="glass section">
        <h3><span className="color-pop pop-cyan">Neurodivergent</span>-Affirming Work</h3>
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
        <h3>Global Experience, <span className="color-pop pop-pink">Credibility</span> &amp; Human Development Work</h3>
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
        <h3>My <span className="color-pop pop-yellow">Unique</span> Edge</h3>
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
        <h3>AI + Human <span className="color-pop pop-blue">Potential</span></h3>
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
      <section id="podcast" className="private-sessions podcast-feature" aria-labelledby="podcast-title">
        <div className="podcast-wave" aria-hidden="true">{[22,45,70,35,95,55,80,40,100,62,28,73,48,90,30,65,40,85,52,25].map((height, i) => <span key={i} style={{ height: `${height}%` }} />)}</div>
        <div className="private-sessions-grid">
          <div className="private-sessions-copy">
            <p className="private-eyebrow">ON AIR · PODCASTS &amp; CONVERSATIONS</p>
            <h2 id="podcast-title" style={{ maxWidth: "15ch" }}>Let’s make it a <span className="color-pop pop-pink">conversation.</span></h2>
            <div className="private-introduction">
              <p>Consciousness. Creativity. Being human. The future of games. Invite Rev. Dr. Jess to your podcast for an open, curious conversation that connects big ideas with real life.</p>
              <p>From building EARTH SCHOOL inside Fortnite to spiritual exploration, entrepreneurship and neurodivergent creativity—there’s plenty to talk about.</p>
            </div>
            <p className="private-signature">A temporary human experience. A conversation worth having.</p>
          </div>
          <div className="service-card">
            <p className="service-label">BEHIND THE MIC · REV. DR. JESS</p>
            <h3>Invite Jess to Your <span className="color-pop pop-cyan">Podcast</span></h3>
            <p className="service-description">Creating an episode about self-awareness, consciousness, human behaviour, immersive technology or following a vision? Let’s connect.</p>
            <div className="topicGrid" style={{ margin: "1.5rem 0" }}>
              {["EARTH SCHOOL & gaming", "Consciousness & ancient wisdom", "AI & human potential", "Neurodivergent creativity"].map((topic) => <span key={topic} className="topicPill">{topic}</span>)}
            </div>
            <a className="btn service-booking-button" href={"mailto:jessgoodvibesonly@gmail.com?subject=" + encodeURIComponent("Podcast invitation for Rev. Dr. Jess") + "&body=" + encodeURIComponent("Hi Jess,\n\nI’d love to invite you onto my podcast.\n\nMy name: \nPodcast name and website: \nProposed topic: \nAudience: \nRecording format (remote / in person): \nPreferred dates and time zone: \nEpisode promotion plans: \n\nLooking forward to connecting!")}>Send a Podcast Request <span aria-hidden="true">↗</span></a>
            <p className="service-support">Opens an email draft with the details to include. Send it from your email app, and Jess will reply directly.</p>
          </div>
        </div>
      </section>

      <section className="quote">The future is <span className="color-pop pop-yellow">human.</span> Let’s build it together.</section>

      <section className="quote-section" aria-label="Frida Kahlo quote">
        <p className="quote-section-main">&ldquo;I have painted my own reality.&rdquo; — Frida Kahlo</p>
        <p className="quote-section-support">
          You can curate your experience. You can shape your reality.
        </p>
      </section>

      <section className="glass section center final-cta">
        <h3>Gaming. Human Performance. <span className="color-pop pop-pink">Consciousness.</span> Impact.</h3>
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
