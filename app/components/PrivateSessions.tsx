const bookingUrl =
  "https://calendly.com/aspiritualwarriorspath/intuitive-clarity-reading-for-entrepreneurs-creators";

function enquiryUrl(subject: string, body: string) {
  return `mailto:jessgoodvibesonly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const singleSessionUrl = enquiryUrl(
  "Private coaching — single session",
  "Hi Jess,\n\nI’m interested in a private coaching session. Please send me the session options, price and availability.\n\nMy name: \nWhat I’d like support with: \n",
);
const longTermUrl = enquiryUrl(
  "EARTH SCHOOL private consciousness mentorship enquiry",
  "Hi Jess,\n\nI’m interested in your EARTH SCHOOL monthly mentorship with four video calls, two-way voice transmissions and ongoing guidance.\n\nMy name: \nWhat I’d like to explore: \nMy preferred availability: \n\nPlease send me the mentorship details and pricing.\n",
);

export function PrivateSessions() {
  return (
    <section id="private-sessions" className="private-sessions" aria-labelledby="private-sessions-title">
      <div className="vision-orbit vision-orbit-one" aria-hidden="true" />
      <div className="vision-orbit vision-orbit-two" aria-hidden="true" />
      <div className="private-sessions-copy" style={{ marginBottom: "2.5rem" }}>
        <p className="private-eyebrow">WORK WITH REV. DR. JESS</p>
        <h2 id="private-sessions-title" style={{ maxWidth: "18ch" }}>Three ways to explore <span className="color-pop pop-yellow">the extraordinary.</span></h2>
        <div className="private-introduction">
          <p>What if one conversation, one new perspective, or one extraordinary day could change the way you see everything?</p>
          <p>Private intuitive readings, one-to-one spiritual mentorship and in-person EARTH SCHOOL days — exploring consciousness, simulation theory, neuroscience, ancient wisdom and the Art of Conscious Programming.</p>
        </div>
        <p className="private-credibility">Rev. Dr. Jess ☮️ brings decades of spiritual teaching, intuitive exploration, hypnotherapy and creative education into meaningful, open-minded experiences.</p>
        <p className="private-signature">Believe it to see it.</p>
      </div>

      <div className="service-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem", alignItems: "start" }}>
        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>01</span></div>
          <p className="service-label">A private space for what&apos;s next</p>
          <h3>Intuitive <span className="color-pop pop-pink">Clarity</span> Reading</h3>
          <p className="service-description"><strong>What if one conversation could change the way you see everything?</strong> Step beyond the ordinary with Rev. Dr. Jess ☮️. Explore relationships, life transitions, personal growth, spiritual questions, purpose or whatever is calling for clarity. Come curious. Leave with fresh perspectives.</p>
          <ul className="service-details" aria-label="Reading details"><li>Private Zoom</li><li>45 minutes</li><li>$111 CAD</li></ul>
          <a className="btn service-booking-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Book your Intuitive Clarity Reading on Calendly (opens in a new tab)">Book Your Reading <span aria-hidden="true">↗</span></a>
          <p className="service-support">View available times and booking details on Calendly.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>02</span></div>
          <p className="service-label">Personal support · meaningful change</p>
          <h3>EARTH SCHOOL | Private <span className="color-pop pop-cyan">Consciousness</span> Mentorship</h3>
          <p className="service-description"><strong>What if you had a guide in your corner as you practice seeing life differently?</strong> Go beyond the occasional conversation: explore simulation theory, consciousness, neuroscience, ancient wisdom, intuition and the Art of Conscious Programming — then apply it to real life through personalized reflection, habits and action.</p>
          <p className="service-description"><strong>Monthly mentorship:</strong> four private video calls, frequent two-way voice transmissions and messages between sessions, plus personalized practices — from grounding and nervous-system awareness to movement, creative exercises and conscious choices, adapted to your needs and abilities.</p>
          <p className="service-description">This is ongoing, individualized guidance with clear communication hours, not 24/7 availability. Enquire for current pricing, scheduling and fit.</p>
          <div style={{ display: "grid", gap: ".75rem", marginTop: "1.4rem" }}>
            <a className="btn service-booking-button" href={singleSessionUrl}>Enquire About a Session <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href={longTermUrl}>Enquire About Monthly Mentorship <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">These buttons open an email draft to Jess. Send your enquiry from your email app.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>03</span></div>
          <p className="service-label">In person · Charlottetown</p>
          <h3><span className="color-pop pop-blue">EARTH SCHOOL</span> Days</h3>
          <p className="service-description"><strong>What if reality isn’t quite what you think it is?</strong> Join Rev. Dr. Jess for an unforgettable day exploring simulation theory, consciousness, the Seven Hermetic Principles, neuroscience and conscious programming — in person, with room for curiosity and connection.</p>
          <ul className="service-details" aria-label="Event details"><li>10 AM–7 PM</li><li>10 places</li><li>$333 CAD</li></ul>
          <div style={{ display: "grid", gap: ".75rem" }}>
            <a className="btn service-booking-button" href="/earth-school-mens-day">Men’s Day · November 28 <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href="/earth-school-womens-day">Women’s Day · December 5 <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">Food and refreshments included. Explore each retreat page; secure Stripe registration will appear once payment links are connected.</p>
        </article>
      </div>
    </section>
  );
}

export { bookingUrl };
