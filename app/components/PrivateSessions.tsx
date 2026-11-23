// Clients select a time and complete payment together in Calendly.
const bookingUrl =
  "https://calendly.com/aspiritualwarriorspath/intuitive-clarity-reading-for-entrepreneurs-creators";
const monthlyMentorshipPaymentUrl =
  "https://buy.stripe.com/28EcN51EEdCQe6q7iF4AU08";

function enquiryUrl(subject: string, body: string) {
  return `mailto:jessgoodvibesonly@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const membershipEnquiryUrl = enquiryUrl(
  "EARTH SCHOOL Inner Circle membership question",
  "Hi Jess,\n\nI have a question about the EARTH SCHOOL Inner Circle private monthly mentorship.\n\nMy name: \nMy question: \n",
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
          <p className="service-description"><strong>Let’s get creative.</strong> Readings are $111 CAD, and creative exchanges are welcome: art, handmade goods, products, skills, or something thoughtful of your own. If money is a barrier, reach out. No one is turned away for lack of funds.</p>
          <a className="service-support" href="mailto:jessgoodvibesonly@gmail.com?subject=Creative%20exchange%20for%20a%20reading">Talk to Jess about a creative exchange</a>
          <a className="btn service-booking-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Choose a time for your 45-minute Intuitive Clarity Reading on Calendly (opens in a new tab)">Book Your Reading <span aria-hidden="true">↗</span></a>
          <p className="service-support">Choose your date and time on Calendly, then enter your details and complete the $111 CAD payment to confirm your reading. For an in-person appointment in Charlottetown or booking help, email jessgoodvibesonly@gmail.com.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>02</span></div>
          <p className="service-label">Personal support · meaningful change</p>
          <h3>EARTH SCHOOL | <span className="color-pop pop-cyan">THE INNER CIRCLE</span></h3>
          <p className="service-description"><strong>What if you had a guide in your corner as you practice seeing life differently?</strong> Go beyond the occasional conversation: explore simulation theory, consciousness, neuroscience, ancient wisdom, intuition and the Art of Conscious Programming — then apply it to real life through personalized reflection, habits and action.</p>
          <p className="service-description"><strong>Private monthly Inner Circle membership:</strong> four private video calls, frequent two-way voice transmissions and messages between sessions, plus personalized real-life practices — grounding, breathwork, movement, reflective audio, healthy boundaries and conscious choices adapted to your needs and abilities.</p>
          <p className="service-description"><strong>Prepare the biological space suit.</strong> Jess uses the image of a 1,000-watt bulb in a 100-watt socket to explore a powerful question: as your vision grows, are your habits, nervous system and support structures ready to hold it? It’s a metaphor for building capacity through practice, not a scientific measurement of energy or frequency.</p>
          <p className="service-description">This is ongoing, individualized guidance with clear communication hours, not 24/7 availability. Contact Jess with questions about scheduling, availability and fit before subscribing.</p>
          <div style={{ display: "grid", gap: ".75rem", marginTop: "1.4rem" }}>
            <a className="btn service-booking-button" href="/inner-circle">Explore The Inner Circle <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href={monthlyMentorshipPaymentUrl} target="_blank" rel="noopener noreferrer" aria-label="Subscribe to the Inner Circle private monthly mentorship through secure Stripe checkout (opens in a new tab)">Join The Inner Circle · Stripe <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href={membershipEnquiryUrl}>Questions About Membership? <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">This is the same private monthly membership described on The Inner Circle page, not a second subscription. Stripe shows the billing price and terms before payment; questions open an email draft.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>03</span></div>
          <p className="service-label">In person · Charlottetown</p>
          <h3><span className="color-pop pop-blue">EARTH SCHOOL</span> Days</h3>
          <p className="service-description"><strong>What if reality isn’t quite what you think it is?</strong> Join Rev. Dr. Jess for a remarkable day exploring simulation theory, consciousness, ancient wisdom, neuroscience and conscious programming — plus real-world EARTH SCHOOL practices to help prepare your biological space suit for the changes you want to make.</p>
          <ul className="service-details" aria-label="Event details"><li>10 AM–7 PM</li><li>10 places</li><li>$333 CAD</li></ul>
          <div style={{ display: "grid", gap: ".75rem" }}>
            <a className="btn service-booking-button" href="/earth-school-mens-day">Men’s Day · November 28 <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href="/earth-school-womens-day">Women’s Day · December 5 <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">Food and refreshments included. Explore either retreat page and book your place through secure Stripe checkout.</p>
        </article>
      </div>
    </section>
  );
}

export { bookingUrl };
