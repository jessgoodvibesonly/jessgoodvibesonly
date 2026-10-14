import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Men’s EARTH SCHOOL Day — The Art of Being Human | November 28, 2026",
  description: "An extraordinary in-person EARTH SCHOOL experience exploring simulation theory, consciousness, neuroscience, the Seven Hermetic Principles and the Art of Conscious Programming with Rev. Dr. Jess. November 28, 2026 · Charlottetown · $333 CAD.",
  alternates: { canonical: "https://jessgoodvibesonly.vercel.app/earth-school-mens-day" },
  openGraph: {
    title: "Men’s EARTH SCHOOL Day — The Art of Being Human",
    description: "Charlottetown · Saturday, November 28, 2026 · 10 AM–7 PM · $333 CAD · 10 places",
    url: "https://jessgoodvibesonly.vercel.app/earth-school-mens-day",
    type: "website",
  },
};

const emailUrl = "mailto:jessgoodvibesonly@gmail.com?subject=EARTH%20SCHOOL%20Men%27s%20Day%20%E2%80%94%20November%2028&body=Hi%20Jess%2C%0A%0AI%27m%20interested%20in%20the%20Earth%20School%20men%27s%20day%20on%20November%2028.%20Please%20send%20me%20the%20venue%20and%20booking%20details.%0A%0AMy%20name%3A%20%0A";
// Verified by the site owner as the live Men’s Day Stripe checkout link.
const paymentUrl = "https://buy.stripe.com/6oU14nabaeGUaUe46t4AU09";
const experiences = [
  ["01","Reality, perception & the game","Explore simulation theory as a thought-provoking hypothesis, the mystery of consciousness, and the ways attention and perception shape our human experience."],
  ["02","The Art of Conscious Programming","Connect neuroscience, habitual patterns, beliefs and nervous-system awareness with practical exercises for making more intentional choices."],
  ["03","Ancient wisdom meets real life","Explore the Seven Hermetic Principles, metaphysics, intuition and reflective practices in a welcoming, down-to-earth setting."],
  ["04","Reflect, create & connect","Make space for grounding, creativity, personal insight, meaningful conversations and the possibility of seeing life differently."],
  ["05","PRACTICE · Prepare the vessel","Your biological space suit matters. Use movement, grounding, breathwork, boundaries and daily experiments to build the practical capacity for your next chapter."],
];

export default function MensDayPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#event">Skip to event details</a>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark}>Jess Good Vibes Only <span aria-hidden="true">☮</span></a>
        <a href={paymentUrl || "#enquire"} className={styles.headerLink}>{paymentUrl ? "Book your place ↗" : "Enquire about a place ↗"}</a>
      </header>
      <main id="event">
        <section className={styles.hero} aria-labelledby="event-title">
          <p className={styles.eyebrow}>One day. In person. Charlottetown.</p>
          <h1 id="event-title" className={styles.title}>EARTH<br />SCHOOL</h1>
          <p className={styles.subtitle}><span className="color-pop pop-cyan">Men’s Day</span> · The Art of Being Human</p>
          <p className={styles.tagline}>Being human is the game.<br />Remembering who you are is how to play.</p>
          <div className={styles.ticket}>
            <div><span>THE DATE</span><strong><time dateTime="2026-11-28">Saturday, November 28, 2026</time></strong></div>
            <div><span>THE DAY</span><strong>10 AM–7 PM</strong><small>Charlottetown, PEI</small></div>
            <div><span>YOUR PLACE</span><strong>$333 CAD per person</strong><small>10 places · Food & refreshments included</small></div>
          </div>
          <a href={paymentUrl || "#enquire"} className={styles.primary}>{paymentUrl ? "Book my place · $333 CAD" : "I’m interested"} <span aria-hidden="true">↗</span></a>
          <p className={styles.note}>Venue details to follow.</p>
        </section>
        <section className={styles.intro} aria-labelledby="intro-title">
          <p className={styles.eyebrow}>A new way to see being human</p>
          <h2 id="intro-title">What if reality is <span className="color-pop pop-yellow">more</span> than it seems?</h2>
          <p><strong>WHAT IF REALITY ISN’T QUITE WHAT YOU THINK IT IS? What if everything you’ve been taught about life, consciousness, and who you are is only part of the story?</strong></p>
          <p>This is not your typical men’s workshop. Step into a fascinating exploration where simulation theory, neuroscience, the Seven Hermetic Principles, ancient wisdom, human behaviour and consciousness intersect.</p>
          <p>Discover the unconscious programming behind your choices, the patterns shaping your experiences and the power of noticing them. No masks. No expectations. Just curiosity, connection and a new perspective on being human.</p>
          <p><strong>THE 1,000-WATT LESSON:</strong> Imagine putting a 1,000-watt bulb in a socket built for 100. Jess uses this as a metaphor for a bigger question: can your biological space suit — your body, mind, routines and support systems — sustain the new life you want to create? We explore small, real-world practices to build that capacity, not just exciting ideas.</p>
          <p>WHAT IF THE GREATEST GAME YOU’LL EVER PLAY IS THE ONE YOU’RE ALREADY LIVING?</p>
          <p><strong>Being human is the game. Remembering who you are is how to play.</strong></p>
        </section>
        <section className={styles.experiences} aria-labelledby="experiences-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>The experience</p><h2 id="experiences-title">The Art of <span className="color-pop pop-cyan">Conscious Programming.</span></h2></div>
          {experiences.map(([number, title, description]) => (
            <article className={styles.experience} key={number}><span className={styles.number}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>
          ))}
          <p className={styles.note}>These are the themes we’ll explore, not claims that simulation theory is proven. A detailed schedule will be shared separately.</p>
        </section>
        <section className={styles.host} aria-labelledby="host-title">
          <p className={styles.eyebrow}>Your guide</p>
          <h2 id="host-title">Rev. Dr. Jess <span aria-hidden="true">☮</span></h2>
          <p>Rev. Dr. Jessica Simmonds is an intuitive, author, ordained interfaith minister, hypnotherapist since 2006, and educator with more than 25 years of experience. As creator of EARTH SCHOOL, she brings together spiritual exploration, neuroscience, ancient wisdom, creativity and questions about the nature of reality.</p>
          <a href="/">Meet Jess ↗</a>
        </section>
        <section className={styles.faq} aria-labelledby="faq-title">
          <p className={styles.eyebrow}>Good to know</p><h2 id="faq-title">The details.</h2>
          <details><summary>Where is the event?</summary><p>In Charlottetown, Prince Edward Island. The exact venue is still to be announced. Contact Jess for the latest location information.</p></details>
          <details><summary>What does the price include?</summary><p>The day’s activities, food and refreshments are included in the $333 CAD price per person.</p></details>
          <details><summary>Do I need to know about simulation theory or spirituality?</summary><p>Not at all. Come curious. Simulation theory is explored as a possibility to question, not as an established scientific fact, and you are welcome to bring your own perspective.</p></details>
          <details><summary>Can I come on my own?</summary><p>Yes. You’re welcome to attend on your own and meet others during the day.</p></details>
          <details><summary>Is this the video game?</summary><p>This is a real-world, in-person Earth School experience. Jess is also developing EARTH SCHOOL, a spiritual exploration game inside Fortnite using UEFN.</p></details>
          <details><summary>What happens after I book?</summary><p>Complete the secure Stripe checkout to reserve your place. Keep your payment confirmation; venue and arrival information will follow. An email or Instagram enquiry alone does not reserve a place.</p></details>
        </section>
        <section id="enquire" className={styles.enquire} aria-labelledby="enquire-title">
          <p className={styles.eyebrow}>10 places · November 28</p><h2 id="enquire-title">Your next chapter<br />starts with <span className="color-pop pop-yellow">curiosity.</span></h2>
          <p>Reserve your place through secure Stripe checkout, or contact Jess with any questions. Exact venue and arrival details will follow.</p>
          <div className={styles.actions}>{paymentUrl && <a className={styles.primary} href={paymentUrl}>Pay $333 CAD & book ↗</a>}<a className={paymentUrl ? styles.secondary : styles.primary} href={emailUrl}>Email Jess ↗</a><a className={styles.secondary} href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Message on Instagram ↗</a></div>
          <p className={styles.note}>DM “EARTH SCHOOL” · @jessgoodvibesonly<br />Venue and booking details to follow.</p>
        </section>
      </main>
      <footer className={styles.footer}><a href="/">Jess Good Vibes Only ☮</a><span>EARTH SCHOOL · A Temporary Human Experience</span></footer>
    </div>
  );
}
