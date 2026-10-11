import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "EARTH SCHOOL — A Spiritual Warrior’s Day for Men | November 28, 2026",
  description: "A day of meditation, hypnotherapy, grounding, art and connection with Rev. Dr. Jess in Charlottetown. November 28, 2026, 10 AM–7 PM. $333 CAD; 10 places. Food and refreshments included.",
  alternates: { canonical: "https://jessgoodvibesonly.vercel.app/earth-school-mens-day" },
  openGraph: {
    title: "EARTH SCHOOL — A Spiritual Warrior’s Day for Men",
    description: "Charlottetown · Saturday, November 28, 2026 · 10 AM–7 PM · $333 CAD · 10 places",
    url: "https://jessgoodvibesonly.vercel.app/earth-school-mens-day",
    type: "website",
  },
};

const emailUrl = "mailto:jessgoodvibesonly@gmail.com?subject=EARTH%20SCHOOL%20Men%27s%20Day%20%E2%80%94%20November%2028&body=Hi%20Jess%2C%0A%0AI%27m%20interested%20in%20the%20Earth%20School%20men%27s%20day%20on%20November%2028.%20Please%20send%20me%20the%20venue%20and%20booking%20details.%0A%0AMy%20name%3A%20%0A";
const paymentUrl = process.env.NEXT_PUBLIC_MENS_DAY_PAYMENT_URL;
const experiences = [
  ["01", "Pause & reconnect", "Guided meditation, grounding and hypnotherapy: space to slow down and turn your attention inward."],
  ["02", "Explore your inner world", "Numerology, astrology and intuitive exploration as invitations to reflect on your patterns, purpose and possibilities."],
  ["03", "Create & connect", "Art, Earth School activations and connection with a small group of men sharing the day."],
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
          <p className={styles.subtitle}>A Spiritual Warrior’s Day for Men</p>
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
          <p className={styles.eyebrow}>Step out of the everyday</p>
          <h2 id="intro-title">A day to come back to yourself.</h2>
          <p>A small, in-person gathering for men to explore spirituality, creativity and connection. Take time for reflection, try something new and share the experience with others.</p>
          <p>Come with curiosity. You don’t need to have it all figured out.</p>
        </section>
        <section className={styles.experiences} aria-labelledby="experiences-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>The experience</p><h2 id="experiences-title">Space to explore.</h2></div>
          {experiences.map(([number, title, description]) => (
            <article className={styles.experience} key={number}><span className={styles.number}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></article>
          ))}
          <p className={styles.note}>These are the themes of the day; the detailed schedule will be shared separately.</p>
        </section>
        <section className={styles.host} aria-labelledby="host-title">
          <p className={styles.eyebrow}>Your guide</p>
          <h2 id="host-title">Rev. Dr. Jess <span aria-hidden="true">☮</span></h2>
          <p>Jessica Simmonds is an interfaith minister, hypnotherapist since 2006, artist and teacher with over 25 years of teaching experience. She is the creator of Earth School.</p>
          <a href="/">Meet Jess ↗</a>
        </section>
        <section className={styles.faq} aria-labelledby="faq-title">
          <p className={styles.eyebrow}>Good to know</p><h2 id="faq-title">The details.</h2>
          <details><summary>Where is the event?</summary><p>In Charlottetown, Prince Edward Island. The exact venue is still to be announced. Contact Jess for the latest location information.</p></details>
          <details><summary>What does the price include?</summary><p>The day’s activities, food and refreshments are included in the $333 CAD price per person.</p></details>
          <details><summary>Can I come on my own?</summary><p>Yes. You’re welcome to attend on your own and meet others during the day.</p></details>
          <details><summary>Is this the video game?</summary><p>This is a real-world, in-person Earth School experience. Jess is also developing EARTH SCHOOL, a spiritual exploration game inside Fortnite using UEFN.</p></details>
          <details><summary>What happens after I enquire?</summary><p>Contact Jess by email or Instagram for availability, venue and booking details. An enquiry does not reserve or pay for a place.</p></details>
        </section>
        <section id="enquire" className={styles.enquire} aria-labelledby="enquire-title">
          <p className={styles.eyebrow}>10 places · November 28</p><h2 id="enquire-title">Your next chapter<br />starts with curiosity.</h2>
          <p>{paymentUrl ? "Book your place through secure checkout, or contact Jess with any questions." : "Interested in joining us? Ask Jess about a place."}</p>
          <div className={styles.actions}>{paymentUrl && <a className={styles.primary} href={paymentUrl}>Pay $333 CAD & book ↗</a>}<a className={paymentUrl ? styles.secondary : styles.primary} href={emailUrl}>Email Jess ↗</a><a className={styles.secondary} href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Message on Instagram ↗</a></div>
          <p className={styles.note}>DM “EARTH SCHOOL” · @jessgoodvibesonly<br />Venue and booking details to follow.</p>
        </section>
      </main>
      <footer className={styles.footer}><a href="/">Jess Good Vibes Only ☮</a><span>EARTH SCHOOL · A Temporary Human Experience</span></footer>
    </div>
  );
}
