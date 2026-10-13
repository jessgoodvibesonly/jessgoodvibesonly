import type { Metadata } from "next";
import Image from "next/image";
import jessPortrait from "../../public/earth-school-jess.webp";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "My Story — Rev. Dr. Jess | Jess Good Vibes Only",
  description: "A life that never followed a script: 24 countries, creativity, spiritual exploration, finding peace, and the extraordinary journey of channeling EARTH SCHOOL.",
  alternates: { canonical: "https://jessgoodvibesonly.vercel.app/my-story" },
  openGraph: {
    type: "article",
    title: "My Story — Some Lives Don't Follow a Script | Rev. Dr. Jess",
    description: "From a psychic childhood and 24 countries to channeling EARTH SCHOOL, this is the story behind Jess Good Vibes Only.",
    url: "https://jessgoodvibesonly.vercel.app/my-story",
    images: [{ url: "/earth-school-jess.webp", alt: "Rev. Dr. Jessica Simmonds" }],
  },
};

export default function MyStoryPage() {
  return (
    <div className={styles.page}>
      <a className={styles.skip} href="#story">Skip to the story</a>
      <header className={styles.header}>
        <a className={styles.brand} href="/" aria-label="Jess Good Vibes Only — homepage">
          JESS GOOD VIBES <span>ONLY</span> ☮
        </a>
        <nav className={styles.headerLinks} aria-label="Page navigation">
          <a href="/">Home</a>
          <a href="/#credentials">Credentials</a>
          <a href="/#art">My Art</a>
          <a href="/#earth-school">EARTH SCHOOL</a>
        </nav>
      </header>

      <main id="story">
        <div className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>THE HUMAN BEHIND THE GAME · REV. DR. JESS</p>
            <h1 className={styles.title}>MY<br /><span className={styles.titleAccent}>STORY.</span></h1>
            <p className={styles.dek}>Some lives don&apos;t follow a script.</p>
            <div className={styles.intro}>
              <p>I&apos;ve often thought that if someone made a movie about my life, people would probably think the writers had gone a little too far.</p>
              <p>But here we are.</p>
            </div>
          </div>
          <figure className={styles.portrait}>
            <Image src={jessPortrait} alt="Rev. Dr. Jess surrounded by vibrant artwork" sizes="(max-width: 850px) 100vw, 43vw" priority />
            <figcaption><span>Rev. Dr. Jessica Simmonds</span><span>Jess Good Vibes Only ☮</span></figcaption>
          </figure>
        </div>
        <div className={styles.rule} />

        <article className={styles.article} aria-label="My Story, written by Rev. Dr. Jess">
          <section className={styles.chapter} aria-labelledby="psychic-childhood">
            <p className={styles.kicker}>01 / THE BEGINNING</p>
            <h2 id="psychic-childhood">The <span className={styles.cyan}>unexplainable.</span></h2>
            <p>I&apos;ve been psychic for as long as I can remember.</p>
            <p>Even as a child, I experienced things I couldn&apos;t explain. Premonitions, unusual connections, and moments of knowing things before they happened. Some were beautiful. Others were frightening. And they left me with a lifelong fascination with the mysteries of being human.</p>
            <p>While other children were figuring out what they wanted to be when they grew up, I was already wondering what we were doing here in the first place.</p>
            <p>And that question would follow me around the world.</p>
          </section>

          <section className={styles.chapter} aria-labelledby="searching-world">
            <p className={styles.kicker}>02 / THE SEARCH</p>
            <h2 id="searching-world">The world was calling.</h2>
            <p>I grew up on the East Coast of Canada, an identical twin, and later lived in Toronto, Montreal, and Mexico.</p>
            <p>At 19, I travelled alone to London, England, to study makeup artistry. I was young, independent, wildly curious, and had no idea where life was about to take me.</p>
            <p>What followed was anything but ordinary.</p>
            <div className={styles.statement}>
              <span className={styles.pink}>24 countries.</span> Countless adventures. An extraordinary collection of life experiences.
            </div>
            <p>I travelled searching for myself, exploring different cultures and spiritual traditions, and meeting people whose perspectives would change the way I understood the world.</p>
            <p>I studied with teachers, explored ancient wisdom, meditated, questioned everything, and kept searching.</p>
            <p>And no matter where I went, there I was.</p>
          </section>

          <section className={styles.chapter} aria-labelledby="creative-life">
            <p className={styles.kicker}>03 / MANY LIVES IN ONE</p>
            <h2 id="creative-life">Art. Curiosity. <span className={styles.blue}>Becoming.</span></h2>
            <p>My creative journey began in the world of makeup artistry. In 1999, I began my professional career, eventually founding Paramita Academy of Makeup and building businesses dedicated to creativity and education. I&apos;ve spent more than 25 years teaching, training, and certifying artists internationally, with experience spanning film, television, editorial, and the beauty industry.</p>
            <div className={[styles.statement, styles.statementCyan].join(" ")}>But my curiosity was never limited to the world I could see.</div>
            <p>I became a mother of four, an artist, an entrepreneur, a spiritual teacher, a clinical hypnotherapist, and an ordained spiritual-interfaith minister.</p>
            <p>My background includes <strong>22 qualifications, certifications, and courses of study</strong>, including doctorates in metaphysics and spiritual counselling, along with extensive exploration of psychology, neuroscience, meditation, consciousness, and the human mind.</p>
            <p>I also wrote <cite>A Spiritual Warrior&apos;s Path to Re-Enlightening</cite>, sharing the wisdom and experiences that have shaped my spiritual journey.</p>
            <figure className={styles.artFigure}>
              <Image
                src="/art/jess-original-vision-art.jpg"
                alt="Original expressive artwork by Jess with vivid colours and handwritten symbolic elements"
                width={2629}
                height={3896}
                sizes="(max-width: 550px) 100vw, 730px"
              />
              <figcaption>Original artwork by Jess · Art has always been part of the story</figcaption>
            </figure>
            <p>But behind the accomplishments was a much bigger story.</p>
          </section>

          <section className={styles.chapter} aria-labelledby="plot-twists">
            <p className={styles.kicker}>04 / THE PLOT TWISTS</p>
            <h2 id="plot-twists">A life in <span className={styles.pink}>chapters.</span></h2>
            <p><strong>There were extraordinary highs. Devastating lows. Loss, upheaval, unexpected turns, and chapters I never could have predicted.</strong></p>
            <p>I&apos;ve survived a near-death experience. I&apos;ve experienced things that challenged everything I thought I knew about life and death.</p>
            <p>I&apos;ve had to begin again more than once.</p>
            <p>And through it all, I kept coming back to the same questions.</p>
            <p>Who are we, really?</p>
            <p>Why do we repeat the same patterns?</p>
            <p>What shapes our experience of reality?</p>
            <p>And what if life is very different from what we&apos;ve been taught to believe?</p>
          </section>

          <section className={styles.chapter} aria-labelledby="question-perception">
            <p className={styles.kicker}>05 / THE QUESTION</p>
            <h2 id="question-perception">Can you see your own <span className={styles.cyan}>face?</span></h2>
            <p>I&apos;ve long been fascinated by <strong>simulation theory</strong>—the possibility that what we experience as reality may not be quite what it appears.</p>
            <p>And for years, I&apos;ve loved asking people one deceptively simple question:</p>
            <span className={styles.question}>&ldquo;Can you see your own face right now?&rdquo;</span>
            <p>Not in a mirror. Not in a photograph.</p>
            <p>Right now.</p>
            <p>It&apos;s such a simple question, but it opens the door to something extraordinary: perspective, perception, consciousness, and the mystery of experiencing life from inside a human body.</p>
            <p>The more I explored neuroscience, ancient wisdom, metaphysics, and simulation theory, the more fascinated I became by the relationship between our attention, our beliefs, our choices, and the reality we experience.</p>
          </section>

          <section className={styles.chapter} aria-labelledby="found-peace">
            <p className={styles.kicker}>06 / THE REVELATION</p>
            <h2 id="found-peace">And I found <span className={styles.yellow}>peace.</span></h2>
            <p>Then, at 46 years old, another extraordinary piece of the puzzle arrived.</p>
            <div className={[styles.statement, styles.statementBlue].join(" ")}>I discovered I was neurodivergent.</div>
            <p>After spending a lifetime trying to understand the human mind, I was suddenly learning to understand my own in an entirely new way.</p>
            <p><strong>And I found peace.</strong></p>
            <p>Talk about a plot twist.</p>
            <p>So many pieces of my life began fitting together differently. My sensitivity. My curiosity. My creativity. The way my attention moves between seemingly unrelated subjects and somehow finds connections.</p>
            <p>And then came something I never expected.</p>
          </section>

          <div className={styles.interlude} aria-label="The turning point">
            <p className={styles.kicker}>07 / THE TRANSMISSION</p>
            <h2>I <span className={styles.pink}>CHANNELED</span><br />A VIDEO GAME.</h2>
            <p>Not a new book. Not another spiritual course. <strong>A video game.</strong></p>
          </div>

          <section className={styles.chapter} aria-labelledby="earth-school-creation">
            <h2 id="earth-school-creation">EARTH <span className={styles.cyan}>SCHOOL.</span></h2>
            <p><strong>A Temporary Human Experience.</strong></p>
            <p>An entire world began taking shape around the ideas I&apos;d spent my life exploring.</p>
            <p>A mysterious 1980s coastal island. Strange synchronicities. Hidden discoveries. Characters with wisdom to share. Retro answering machines carrying transmissions. A Sanctuary Vehicle. A diner where conversations can change everything.</p>
            <p>And at the heart of it all, one extraordinary idea:</p>
            <span className={styles.question}>What if being human is <span className={styles.blue}>the game?</span></span>
            <p>I had never developed a video game before.</p>
            <p>But I had spent my entire life studying the very things I wanted people to experience through it.</p>
            <p>Consciousness. Human behaviour. Ancient wisdom. Neuroscience. Simulation theory. The seven Hermetic Principles. Attention, perception, manifestation, choice, and the stories we tell ourselves.</p>
            <p>So I began learning to build it using Unreal Editor for Fortnite, AI, and every bit of creative determination I could find.</p>
            <p>Today, EARTH SCHOOL is becoming an interactive world where players can explore these ideas through experiences rather than simply listening to someone explain them.</p>
            <div className={[styles.statement, styles.statementCyan].join(" ")}>A <span className={styles.cyan}>NEW GENRE</span> IN GAMING.</div>
          </section>

          <div className={styles.sceneBreak} aria-hidden="true">✦ ✦ ✦</div>

          <section className={styles.outro} aria-labelledby="next-chapter">
            <p className={styles.kicker}>08 / TO BE CONTINUED</p>
            <h2 id="next-chapter">The best chapters may still be <span className={styles.pink}>ahead.</span></h2>
            <p>And perhaps the most remarkable part of my story is that, after 24 countries, decades of searching, countless adventures, and more life lessons than I could possibly count, I&apos;m still discovering who I am.</p>
            <p>I&apos;m still curious.</p>
            <p>I&apos;m still creating.</p>
            <p><strong>And I have a feeling the most interesting chapters haven&apos;t happened yet.</strong></p>
            <p>Because if there&apos;s one thing this extraordinary life has taught me, it&apos;s that reality can be much stranger, funnier, more mysterious, and more beautiful than we ever imagined.</p>
            <p className={styles.lastLine}>Being human is the <span className={styles.cyan}>game.</span><br />Remembering who you are is <span className={styles.pink}>how you play.</span></p>
            <p className={styles.signature}>Rev. Dr. Jess ☮️</p>
          </section>
        </article>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCopy}>
            <strong>JESS GOOD VIBES ONLY ☮</strong>
            A temporary human experience. A story still being written.
          </div>
          <nav className={styles.footerLinks} aria-label="Explore more">
            <a href="/">Back to homepage ↗</a>
            <a href="/#credentials">Credentials ↗</a>
            <a href="/#art">Original art ↗</a>
            <a href="/#earth-school">Discover EARTH SCHOOL ↗</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
