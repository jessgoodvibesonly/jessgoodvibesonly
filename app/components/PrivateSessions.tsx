const bookingUrl =
  "https://calendly.com/aspiritualwarriorspath/intuitive-clarity-reading-for-entrepreneurs-creators";

const services = [
  {
    name: "Intuitive Clarity Reading for Entrepreneurs & Creators",
    description:
      "Bring one or two meaningful questions—or simply arrive open to what wants to be revealed. Together, we’ll look beneath the surface, connect the dots and explore the intuitive guidance and possibilities surrounding your path.",
    details: ["Private Zoom", "45 minutes", "$111 CAD"],
    bookingUrl,
  },
];

export function PrivateSessions() {
  return (
    <section id="private-sessions" className="private-sessions" aria-labelledby="private-sessions-title">
      <div className="vision-orbit vision-orbit-one" aria-hidden="true" />
      <div className="vision-orbit vision-orbit-two" aria-hidden="true" />
      <div className="private-sessions-grid">
        <div className="private-sessions-copy">
          <p className="private-eyebrow">PRIVATE SESSIONS · REV. DR. JESS</p>
          <h2 id="private-sessions-title">Clarity for the vision only you can see.</h2>
          <div className="private-introduction">
            <p>
              You have the idea. You can feel your next chapter forming. Sometimes one clear,
              intuitive perspective is what helps everything click.
            </p>
            <p>
              These private Intuitive Clarity Readings are created for entrepreneurs, creators and
              visionaries seeking insight around business, purpose, creative direction,
              relationships or what comes next.
            </p>
          </div>
          <p className="private-credibility">
            A lifelong entrepreneur with almost three decades of experience, Rev. Dr. Jessica
            Simmonds understands what it means to trust a vision before the evidence appears.
          </p>
          <p className="private-signature">Believe it to see it.</p>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.name}>
              <div className="service-card-marker" aria-hidden="true">
                <span>01</span>
              </div>
              <p className="service-label">A private space for what&apos;s next</p>
              <h3>{service.name}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-details" aria-label="Reading details">
                {service.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
              <a
                className="btn service-booking-button"
                href={service.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your Intuitive Clarity Reading on Calendly (opens in a new tab)"
              >
                Book Your Reading <span aria-hidden="true">↗</span>
              </a>
              <p className="service-support">
                Choose your time, complete your payment securely and receive your private Zoom
                details automatically.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export { bookingUrl };
