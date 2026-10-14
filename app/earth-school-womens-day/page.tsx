import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Women’s EARTH SCHOOL Day — The Art of Becoming | December 5, 2026",
  description: "An extraordinary in-person EARTH SCHOOL experience exploring simulation theory, consciousness, neuroscience, the Seven Hermetic Principles and the Art of Conscious Programming with Rev. Dr. Jess. December 5, 2026 · Charlottetown · $333 CAD.",
  alternates: { canonical: "https://jessgoodvibesonly.vercel.app/earth-school-womens-day" },
  openGraph: {
    title: "Women’s EARTH SCHOOL Day — The Art of Becoming",
    description: "Charlottetown · Saturday, December 5, 2026 · 10 AM–7 PM · $333 CAD · 10 places",
    url: "https://jessgoodvibesonly.vercel.app/earth-school-womens-day",
    type: "website",
  },
};

const emailUrl = "mailto:jessgoodvibesonly@gmail.com?subject=EARTH%20SCHOOL%20Women%27s%20Day%20%E2%80%94%20December%205&body=Hi%20Jess%2C%0A%0AI%27m%20interested%20in%20the%20Earth%20School%20women%27s%20day%20on%20December%205.%20Please%20send%20me%20the%20venue%20and%20booking%20details.%0A%0AMy%20name%3A%20%0A";
const paymentUrl = "https://buy.stripe.com/00w4gzgzycyM1jEgTf4AU0a";
const experiences = [
  ["01","Question the nature of reality","Explore simulation theory as an intriguing possibility, alongside perception, intuition, consciousness and the stories we tell ourselves."],
  ["02","The Art of Conscious Programming","Look at neuroscience, subconscious patterns, nervous-system awareness and the possibility of choosing a new response to familiar experiences."],
  ["03","Ancient wisdom & intuition","Explore metaphysics, the Seven Hermetic Principles and spiritual ideas as invitations to reflection and self-discovery."],
  ["04","Remember, reconnect, become","Make room for conversation, creativity, reflection, laughter and connection in a supportive in-person setting."],
  ["05","PRACTICE · Prepare the vessel","Connect awareness with everyday action. Explore grounding, movement, guided reflection, nervous-system awareness and healthy boundaries as ways to grow your capacity."],
];

export default function WomensDayPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#event">Skip to event details</a>
      <header className={styles.header}>
        <a href="/" className={styles.wordmark}>Jess Good Vibes Only <span aria-hidden="true">☮</span></a>
        <a href={paymentUrl} className={styles.headerLink}>Book your place ↗</a>
      </header>
      <main id="event">
        <section className={styles.hero} aria-labelledby="event-title">
          <p className={styles.eyebrow}>One day. In person. Charlottetown.</p>
          <h1 id="event-title" className={styles.title}>EARTH<br />SCHOOL</h1>
          <p className={styles.subtitle}><span className="color-pop pop-pink">Women’s Day</span> · The Art of Becoming</p>
          <p className={styles.tagline}>Being human is the game.<br />Remembering who you are is how to play.</p>
          <div className={styles.ticket}>
            <div><span>THE DATE</span><strong><time dateTime="2026-12-05">Saturday, December 5, 2026</time></strong></div>
            <div><span>THE DAY</span><strong>10 AM–7 PM</strong><small>Charlottetown, PEI</small></div>
            <div><span>YOUR PLACE</span><strong>$333 CAD per person</strong><small>10 places · Food & refreshments included</small></div>
          </div>
          <a href={paymentUrl} className={styles.primary}>Book my place · $333 CAD <span aria-hidden="true">↗</span></a>
          <p className={styles.note}>Venue details to follow.</p>
        </section>
        <section className={styles.intro} aria-labelledby="intro-title">
          <p className={styles.eyebrow}>A new way to see being human</p>
          <h2 id="intro-title">What if you’re so much <span className="color-pop pop-blue">more?</span></h2>
          <p><strong>WHAT IF YOU ARE FAR MORE POWERFUL THAN YOU’VE EVER IMAGINED? What if the person you’ve spent your life becoming isn’t the whole story of who you really are?</strong></p>
          <p>Welcome to EARTH SCHOOL — where simulation theory meets neuroscience, metaphysics, the Seven Hermetic Principles, intuition and the extraordinary mystery of consciousness.</p>
          <p>Explore the stories, expectations and unconscious patterns you’ve collected along the way. Through curiosity, conversation and the Art of Conscious Programming, discover new ways to reconnect with your own perspective and possibilities.</p>
          <p>This isn’t about fixing yourself. It’s about remembering who you are beneath the programming.</p>
          <p><strong>THE 1,000-WATT LESSON:</strong> Imagine a 1,000-watt bulb in a socket designed for 100. Jess calls the body your biological space suit: as your sense of possibility expands, can your nervous system, habits, boundaries and support structures hold the changes you want to make? This is a metaphor for capacity — and the day includes grounded, real-world practices to help you build it.</p>
          <p><strong>Being human is the game. Remembering who you are is how to play.</strong></p>
        </section>
        <section className={styles.experiences} aria-labelledby="experiences-title">
          <div className={styles.sectionHeading}><p className={styles.eyebrow}>The experience</p><h2 id="experiences-title">The Art of <span className="color-pop pop-pink">Conscious Programming.</span></h2></div>
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
          <details><summary>What happens after I book?</summary><p>Complete the secure Stripe checkout to reserve your place. Keep your payment confirmation; venue and arrival details will follow. An email or Instagram enquiry alone does not reserve a place.</p></details>
        </section>
        <section id="enquire" className={styles.enquire} aria-labelledby="enquire-title">
          <p className={styles.eyebrow}>10 places · December 5</p><h2 id="enquire-title">Your next chapter<br />starts with <span className="color-pop pop-blue">curiosity.</span></h2>
          <p>Reserve your place through secure Stripe checkout, or contact Jess with any questions. Venue and arrival details will follow.</p>
          <div className={styles.actions}><a className={styles.primary} href={paymentUrl}>Pay $333 CAD & book ↗</a><a className={styles.secondary} href={emailUrl}>Email Jess ↗</a><a className={styles.secondary} href="https://www.instagram.com/jessgoodvibesonly/" target="_blank" rel="noopener noreferrer">Message on Instagram ↗</a></div>
          <p className={styles.note}>DM “WOMEN’S DAY” · @jessgoodvibesonly<br />Venue and booking details to follow.</p>
        </section>
      </main>
      <footer className={styles.footer}><a href="/">Jess Good Vibes Only ☮</a><span>EARTH SCHOOL · A Temporary Human Experience</span></footer>
    </div>
  );
}
