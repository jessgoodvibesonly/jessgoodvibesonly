import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Bringing the Light to AI | Jess Good Vibes Only",
  description:
    "The Nice laundromat story, practical ChatGPT coaching, and a free 30-minute conversation with Rev. Dr. Jess Simmonds.",
};

const requestCallUrl =
  "mailto:jessgoodvibesonly@gmail.com?subject=" +
  encodeURIComponent("Free 30-minute call with Jess") +
  "&body=" +
  encodeURIComponent(
    "Hi Jess,\n\nI’d like to request a free 30-minute call. I’m interested in:\n\nA few times that work for me (with time zone):\n\nThank you!",
  );

export default function BringingTheLightToAI() {
  const bookingUrl = process.env.FREE_DISCOVERY_CALL_URL?.trim();

  return (
    <main className={styles.page}>
      <nav className={styles.nav} aria-label="Explore Jess’s work">
        <Link href="/">← Jess Good Vibes Only</Link>
        <a href="https://earth-school-the-multiverse.vercel.app/">EARTH SCHOOL Multiverse ↗</a>
      </nav>

      <header className={styles.hero}>
        <p className={styles.eyebrow}>Rev. Dr. Jess Simmonds</p>
        <h1>Bringing the <em>Light</em> to AI</h1>
        <p>Learn to use ChatGPT to make something that sounds, feels, and works like you.</p>
        <a className={styles.button} href="#free-call">Free 30-minute call</a>
      </header>

      <section className={styles.story} aria-labelledby="nice-story">
        <h2 id="nice-story">It started at a laundromat in Nice.</h2>
        <p>I was doing laundry in Nice, France, when I started talking with ChatGPT about what it could mean to bring our light to AI. I love that it started there. I had a load of laundry to finish and a question I wanted to follow.</p>
        <p>For about two years and two months, I’ve used ChatGPT for everything from recipes, travel plans, emails, and applications to shaping the stories and ideas behind EARTH SCHOOL. With help from Codex, I’ve been building the Multiverse and exploring what a companion like NEO &amp; NOVA could bring to it.</p>
        <p>I used to say unused AI was like a Ferrari parked in the driveway. For me, the fun started when I took it out for an ordinary errand and discovered how far a good question could travel.</p>
      </section>

      <section className={styles.learn} aria-labelledby="learn">
        <h2 id="learn">Bring one thing you want to make.</h2>
        <p>I can show you how I use ChatGPT to get an idea out of my head, give it enough context to work with, and keep shaping the result until it feels like mine. Bring a project, a messy draft, or the question you keep coming back to.</p>
        <ul>
          <li>Give ChatGPT the goal, examples, and context it needs.</li>
          <li>Use follow-up questions to get a result you can work with.</li>
          <li>Revise it in your own voice and choose one practical next step.</li>
        </ul>
        <a href="https://chatgpt.com/">Try ChatGPT ↗</a>
      </section>

      <section className={styles.offer} id="free-call" aria-labelledby="call-title">
        <h2 id="call-title">Spend 30 minutes with me, one-on-one.</h2>
        <p>Bring a ChatGPT question, a creative project, or something you’re working through in life. We’ll choose one focus, spend time on it together, and end with a next step you can take. The call is free. If you’d like ongoing spiritual support, we can talk about The Inner Circle.</p>
        <a className={styles.button} href={bookingUrl || requestCallUrl}>
          {bookingUrl ? "Book a free 30-minute call" : "Request a free 30-minute call by email"}
        </a>
      </section>

      <section className={styles.offer} aria-labelledby="mentorship">
        <h2 id="mentorship">The Inner Circle</h2>
        <p>My private monthly spiritual mentorship includes four one-on-one video calls, two-way voice messages between sessions within agreed hours, and personalized practices you can bring into everyday life.</p>
        <Link className={styles.textLink} href="/inner-circle">Explore monthly spiritual mentorship ↗</Link>
      </section>

      <footer className={styles.signoff}>
        Peace, Love, Light &amp; Unity,<br />Rev Dr Jess ☮️
      </footer>
    </main>
  );
}
