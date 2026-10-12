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
  "Long-term coaching enquiry",
  "Hi Jess,\n\nI’m interested in working with you over a longer period.\n\nMy name: \nWhat I’d like support with: \nWhat I’m ready to change: \nMy preferred availability: \n\nPlease send me the options and pricing.\n",
);

export function PrivateSessions() {
  return (
    <section id="private-sessions" className="private-sessions" aria-labelledby="private-sessions-title">
      <div className="vision-orbit vision-orbit-one" aria-hidden="true" />
      <div className="vision-orbit vision-orbit-two" aria-hidden="true" />
      <div className="private-sessions-copy" style={{ marginBottom: "2.5rem" }}>
        <p className="private-eyebrow">WORK WITH REV. DR. JESS</p>
        <h2 id="private-sessions-title" style={{ maxWidth: "18ch" }}>Three ways I can help.</h2>
        <div className="private-introduction">
          <p>Clarity for your next chapter. Space to reconnect with yourself. Support to turn awareness into everyday change.</p>
          <p>Choose an intuitive reading, explore personal coaching, or join us for an EARTH SCHOOL day in Charlottetown.</p>
        </div>
        <p className="private-credibility">A lifelong entrepreneur with almost three decades of experience, Rev. Dr. Jessica Simmonds brings together spiritual counselling, hypnotherapy, meditation and creative exploration.</p>
        <p className="private-signature">Believe it to see it.</p>
      </div>

      <div className="service-list" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))", gap: "1.25rem", alignItems: "start" }}>
        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>01</span></div>
          <p className="service-label">A private space for what&apos;s next</p>
          <h3>Intuitive Clarity Reading for Entrepreneurs &amp; Creators</h3>
          <p className="service-description">Bring one or two meaningful questions—or simply arrive open. Together, we’ll connect the dots and explore the intuitive guidance and possibilities surrounding business, purpose, relationships or your next chapter.</p>
          <ul className="service-details" aria-label="Reading details"><li>Private Zoom</li><li>45 minutes</li><li>$111 CAD</li></ul>
          <a className="btn service-booking-button" href={bookingUrl} target="_blank" rel="noopener noreferrer" aria-label="Book your Intuitive Clarity Reading on Calendly (opens in a new tab)">Book Your Reading <span aria-hidden="true">↗</span></a>
          <p className="service-support">View available times and booking details on Calendly.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>02</span></div>
          <p className="service-label">Personal support · meaningful change</p>
          <h3>1:1 Spiritual Coaching</h3>
          <p className="service-description">A private space to explore the patterns, beliefs and choices shaping your experience. Through spiritual counselling, meditation, hypnotherapy and intuitive exploration, we’ll focus on what matters to you and the changes you’re ready to make.</p>
          <p className="service-description">Enquire about a single session or longer-term support. Jess will share the options, pricing and availability before you book.</p>
          <div style={{ display: "grid", gap: ".75rem", marginTop: "1.4rem" }}>
            <a className="btn service-booking-button" href={singleSessionUrl}>Enquire About a Session <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href={longTermUrl}>Enquire About Long-Term Support <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">These buttons open an email draft to Jess. Send your enquiry from your email app.</p>
        </article>

        <article className="service-card">
          <div className="service-card-marker" aria-hidden="true"><span>03</span></div>
          <p className="service-label">In person · Charlottetown</p>
          <h3>EARTH SCHOOL Days</h3>
          <p className="service-description">Step out of your everyday routine for a day of meditation, hypnotherapy, grounding, intuitive exploration, art and connection.</p>
          <ul className="service-details" aria-label="Event details"><li>10 AM–7 PM</li><li>10 places</li><li>$333 CAD</li></ul>
          <div style={{ display: "grid", gap: ".75rem" }}>
            <a className="btn service-booking-button" href="/earth-school-mens-day">Men’s Day · November 28 <span aria-hidden="true">↗</span></a>
            <a className="btn service-booking-button" href="/earth-school-womens-day">Women’s Day · December 5 <span aria-hidden="true">↗</span></a>
          </div>
          <p className="service-support">Food and refreshments included. View each event for details and enquiries.</p>
        </article>
      </div>
    </section>
  );
}

export { bookingUrl };
