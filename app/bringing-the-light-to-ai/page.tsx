import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bringing the Light to AI | Practical AI with Jess Simmonds",
  description: "Bring your ideas to life with practical, personal AI guidance from Rev. Dr. Jessica Simmonds—educator, artist, author and entrepreneur with 25+ years across education and creative business.",
};

function Arrow() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>;
}

const bookingUrl = "https://calendly.com/aspiritualwarriorspath/free-30-minute-1-1-with-rev-dr-jess";
const possibilities = [
  { number: "01", label: "EVERYDAY LIFE", title: "Make room for more living.", text: "Bring the emails, travel plans, applications, recipes, and scattered ideas. Learn to give AI the context to help you move something forward.", example: "Start here: a task you keep putting off.", tone: "mint" },
  { number: "02", label: "CREATIVITY & EXPRESSION", title: "Get that idea out of your head.", text: "Explore a story, an image concept, a website, or a new creative direction. Shape the possibilities with your taste, your judgment, and your voice.", example: "Start here: something you’ve been dreaming of making.", tone: "pink" },
  { number: "03", label: "BUSINESS & PROJECTS", title: "Give your next chapter a beginning.", text: "Work on your message, organize a project, draft an offer, or explore a website. Turn a big, tangled idea into a next step you can actually take.", example: "Start here: one real project that matters to you.", tone: "gold" },
];
const steps = [
  { number: "01", title: "Bring your thing.", text: "An idea. A messy draft. A business. A question. We start with something you care about." },
  { number: "02", title: "Build the conversation.", text: "Give ChatGPT useful context, ask better questions, and follow up when the first answer misses the mark." },
  { number: "03", title: "Make it yours.", text: "Review what comes back, check the facts, and refine the result until it serves your purpose and sounds like you." },
];

export default function BringingTheLightToAI() {
  return <main className={styles.page}>
    <a className={styles.skip} href="#ai-content">Skip to content</a>
    <nav className={styles.nav} aria-label="AI learning navigation">
      <Link className={styles.brand} href="/"><span aria-hidden="true">☮</span> JESS GOOD VIBES ONLY</Link>
      <div className={styles.navLinks}><a href="#possibilities">What we can make</a><a href="#meet-jess">Meet Jess</a><a className={styles.navCall} href="#free-call">Let’s talk <Arrow /></a></div>
    </nav>

    <header className={styles.hero} id="ai-content">
      <div>
        <p className={styles.eyebrow}><span className={styles.dot} /> BRINGING THE LIGHT TO AI</p>
        <h1>Bring your light.<br />Build something <em>extraordinary.</em></h1>
        <p className={styles.lead}>Your imagination has somewhere new to go.</p>
        <p className={styles.intro}>Practical AI guidance for curious humans. Bring your ideas, your business, your creative spark—or simply yourself. Let’s see what you can make possible.</p>
        <div className={styles.actions}><a className={styles.button} href={bookingUrl}>Start with a free conversation <Arrow /></a><a className={styles.textLink} href="#possibilities">Explore the possibilities</a></div>
        <p className={styles.micro}>30 minutes · One-to-one · With Jess</p>
      </div>
      <div className={styles.heroArt}>
        <div className={styles.artFrame}><Image src="/art/jess-self-portrait.webp" alt="Jess’s original mixed-media self-portrait, filled with colour, flowers and handwritten reflections" width={753} height={1000} priority sizes="(max-width: 800px) 85vw, 40vw" /><span className={styles.artCaption}>ORIGINAL ART. ORIGINAL THINKING.</span></div>
        <div className={styles.orbitLabel}><span aria-hidden="true">✦</span> HUMAN FIRST.<br />POSSIBILITY ALWAYS.</div>
        <div className={styles.artNote}>Your vision leads.<br /><strong>AI supports.</strong></div>
      </div>
    </header>

    <section className={styles.proof} aria-label="Jess’s teaching and creative background">
      <div><strong>25+</strong><span>years across education,<br />creativity & entrepreneurship</span></div>
      <div><strong>2002</strong><span>founded Paramita<br />Academy of Makeup</span></div>
      <div><strong>Hands-on</strong><span>facilitation, mentoring<br />& curriculum development</span></div>
      <div><strong>Human</strong><span>ideas, judgment<br />& connection at the centre</span></div>
    </section>

    <section className={styles.section} id="possibilities" aria-labelledby="possibilities-title">
      <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>FROM “WHAT IF” TO “LOOK WHAT I MADE”</p><h2 id="possibilities-title">Big possibilities.<br /><em>Personal starting points.</em></h2></div><p>You don’t need to arrive with the perfect prompt. Bring something real. We’ll work from there.</p></div>
      <div className={styles.cards}>{possibilities.map(item=><article className={`${styles.card} ${styles[item.tone]}`} key={item.number}><div className={styles.cardTop}><span>{item.number}</span><Arrow /></div><p className={styles.eyebrow}>{item.label}</p><h3>{item.title}</h3><p>{item.text}</p><p className={styles.example}>{item.example}</p></article>)}</div>
    </section>

    <section className={`${styles.section} ${styles.facilitator}`} id="meet-jess" aria-labelledby="jess-title">
      <div className={styles.portrait}><Image src="/Jess4Life.jpg" alt="Jessica Simmonds wearing blue headphones" fill sizes="(max-width: 800px) 90vw, 36vw" /><div className={styles.portraitTag}>EDUCATOR. ARTIST. AUTHOR.<br /><strong>ENDLESSLY CURIOUS.</strong></div></div>
      <div><p className={styles.eyebrow}>MEET YOUR FACILITATOR</p><h2 id="jess-title">New technology.<br /><em>Decades of helping<br />people grow.</em></h2><p className={styles.name}>Rev. Dr. Jessica Simmonds</p><p>I’ve spent decades teaching, facilitating, building businesses, and helping people discover what they’re capable of. My creative career began in 1999. In 2002, I founded Paramita Academy of Makeup, developing curricula, leading hands-on training, and mentoring people with different backgrounds and ways of learning.</p><p>Today, I bring that same energy to AI: curiosity, practical experience, creative freedom, and room to learn at your own pace.</p><p>I’m an artist, published author, entrepreneur, and interfaith minister based in Prince Edward Island, Canada. I use ChatGPT in everyday life and creative work, and Codex to help turn ideas into websites and prototypes.</p><div className={styles.tags}><span>FACILITATION</span><span>CREATIVITY</span><span>HUMAN POTENTIAL</span></div></div>
    </section>

    <section className={`${styles.section} ${styles.process}`} aria-labelledby="process-title"><div className={styles.sectionIntro}><div><p className={styles.eyebrow}>LEARN BY MAKING SOMETHING</p><h2 id="process-title">A little context.<br /><em>A better question.<br />Something that feels like you.</em></h2></div><p>Your voice and judgment are part of the process, from the first question to the final decision.</p></div><div className={styles.steps}>{steps.map(step=><article key={step.number}><span className={styles.stepNumber}>{step.number}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div><aside className={styles.team}><div><p className={styles.eyebrow}>COMING WITH A TEAM?</p><h3>Bring the people.<br />Bring the real work.</h3></div><div><p>Let’s talk about your group’s goals, comfort with AI, and the things you want to create. We can explore an approach that fits the people in the room.</p><a className={styles.textLink} href={bookingUrl}>Discuss a group session <Arrow /></a></div></aside></section>

    <section className={`${styles.section} ${styles.story}`} aria-labelledby="nice-story"><div><p className={styles.eyebrow}>A VERY HUMAN BEGINNING</p><h2 id="nice-story">It started with laundry.<br /><em>In Nice, France.</em></h2></div><div><p>I was doing laundry in Nice, France, when I started talking with ChatGPT about what it could mean to bring our light to AI. I love that it started there. I had a load of laundry to finish and a question I wanted to follow.</p><p>I’ve used ChatGPT for everything from recipes, travel plans, emails, and applications to shaping the stories and ideas behind EARTH SCHOOL. With help from Codex, I’ve been building the <a href="https://earth-school-the-multiverse.vercel.app/">Multiverse</a> and exploring what a companion like <a href="https://earth-school-neo-nova.jessgoodvibesonly.chatgpt.site">NEO&amp;NOVA <small>ai</small></a> could bring to it.</p><p>I used to say unused AI was like a Ferrari parked in the driveway. For me, the fun started when I took it out for an ordinary errand and discovered how far a good question could travel.</p><p className={styles.storyLine}>An ordinary moment.<br />A whole new world of possibility.</p></div></section>

    <section className={styles.call} id="free-call" aria-labelledby="call-title"><p className={styles.eyebrow}>YOUR NEXT CHAPTER CAN START WITH A CONVERSATION</p><h2 id="call-title">What would you love<br /><em>to bring to life?</em></h2><p>Book a free 30-minute one-to-one call with me on Zoom. Bring a ChatGPT question, a creative project, or something you’re working through in life. We’ll choose one focus and find a practical next step together.</p><a className={styles.button} href={bookingUrl}>Book my free 30-minute call <Arrow /></a><p className={styles.micro}>A real conversation with Jess. A place to begin.</p></section>

    <section className={styles.mentorship} aria-labelledby="mentorship-title"><div><p className={styles.eyebrow}>LOOKING FOR PERSONAL SPIRITUAL SUPPORT?</p><h2 id="mentorship-title">The Inner Circle</h2></div><div><p>My separate private spiritual mentorship is <strong>CA$33 per month</strong>: four one-on-one video calls, two-way voice messages within agreed communication hours, and personalized practices for everyday life.</p><Link className={styles.textLink} href="/inner-circle">Explore monthly spiritual mentorship <Arrow /></Link></div></section>

    <footer className={styles.footer}><div><Link className={styles.brand} href="/"><span aria-hidden="true">☮</span> JESS GOOD VIBES ONLY</Link><p>Peace, Love, Light &amp; Unity,<br /><span>Rev Dr Jess ☮️</span></p></div><nav aria-label="More from Jess"><Link href="/">Meet Jess</Link><a href="https://earth-school-the-multiverse.vercel.app/">EARTH SCHOOL Multiverse <Arrow /></a><a href="https://earth-school-neo-nova.jessgoodvibesonly.chatgpt.site">NEO&amp;NOVA ai <Arrow /></a><a href="https://earthschoolmagicshop.vercel.app/">The Magic Shop <Arrow /></a></nav></footer>
  </main>;
}
