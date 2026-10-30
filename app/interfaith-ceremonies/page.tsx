import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interfaith Ceremonies & Weddings | Rev. Dr. Jess Simmonds",
  description: "Meet Rev. Dr. Jess Simmonds and explore personalized interfaith ceremonies, intimate weddings and meaningful life celebrations in Prince Edward Island. 2027 wedding inquiries welcome.",
};

const packages = [
 { name: "Just the Two of You", price: "From $222 CAD", description: "A simple, personal ceremony for a couple seeking a heartfelt, intimate celebration.", note: "Ceremony consultation and personalized wording." },
 { name: "Intimate Wedding", price: "From $333 CAD", description: "A thoughtfully created ceremony with your closest loved ones, at a mutually agreed location.", note: "Personal vows, meaningful touches and a relaxed atmosphere." },
 { name: "Your Story, Your Ceremony", price: "From $444 CAD", description: "A more detailed bespoke ceremony that reflects your story, traditions and intentions.", note: "Planning conversation, custom ceremony and optional symbolic elements." },
];

function inquire(subject: string) {
 return "mailto:jessgoodvibesonly@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent("Hi Jess,\n\nI would love to learn more about your 2027 ceremony offerings.\n\nOur preferred date:\nCeremony location:\nEstimated number of guests:\nType of ceremony:\n\nThank you!");
}

export default function InterfaithPage() {
 return <main className="ceremony-page">
   <header className="ceremony-nav"><Link className="ceremony-mark" href="/"><img src="/peace-iridescent.svg" alt="" width="34" height="34"/><strong>Jess Good Vibes Only</strong></Link><nav><Link href="/">Home</Link><a href="#about">Meet Jess</a><a href="#offerings">Ceremonies</a><a href="#inquire">Inquire</a></nav></header>
   <section className="ceremony-hero">
     <p className="ceremony-kicker">INTERFAITH • SPIRITUAL • INCLUSIVE</p>
     <h1>Beautiful beginnings.<br/><span>Meaningful moments.</span></h1>
     <p className="ceremony-lede">Personal ceremonies with heart, intention and room for you to be fully yourselves.</p>
     <p className="ceremony-status">2027 wedding inquiries welcome • Commissioner application reopens January 2027 • Official wedding bookings subject to licensing approval</p>
     <a className="ceremony-button" href="#offerings">Explore ceremonies ↓</a>
   </section>
   <section className="ceremony-about" id="about"><div><p className="ceremony-kicker">MEET YOUR CELEBRANT</p><h2>Rev. Dr. Jess Simmonds</h2><p>Interfaith minister, spiritual guide, educator, author and creator of EARTH SCHOOL, based in Charlottetown, Prince Edward Island.</p><p>With more than 25 years of experience teaching, creating and connecting with people, Jess brings warmth, creativity, presence and an open heart to life&apos;s meaningful moments. Her background includes metaphysics, spiritual counselling, clinical hypnotherapy, meditation and holistic wellness.</p><p>Every love story is different. Ceremonies can be spiritual, secular, interfaith, traditional, imaginative or beautifully simple—always shaped around the people involved.</p></div><aside><span>☮</span><p>Love, light &amp; levity.</p><small>CHERISH THE MOMENT. CELEBRATE YOUR WAY.</small></aside></section>
   <section id="offerings" className="ceremony-offerings"><p className="ceremony-kicker">2027 • PROPOSED CEREMONY EXPERIENCES</p><h2>Make it yours.</h2><p>These are introductory planning rates, not confirmed bookings. Final quotes depend on timing, location, travel, complexity and legal authorization to officiate.</p><div className="ceremony-cards">{packages.map(p=><article key={p.name}><h3>{p.name}</h3><strong>{p.price}</strong><p>{p.description}</p><small>{p.note}</small><a href={inquire("2027 wedding ceremony inquiry — "+p.name)}>Ask about this ceremony ↗</a></article>)}</div></section>
   <section className="ceremony-gathering"><div><p className="ceremony-kicker">SMALL GATHERINGS • CHARLOTTETOWN</p><h2>A little magic, close to home.</h2><p>Dreaming of a cozy winter ceremony with just a few special people? Ask about an intimate indoor gathering in Charlottetown, or choose a setting that feels like you. Home-hosted ceremonies are possibilities to discuss—not currently confirmed venue bookings.</p><p>Guest capacity and availability must be confirmed for the particular space, along with safety, accessibility and any applicable venue requirements. No fixed guest number is advertised yet.</p></div><div><p className="ceremony-kicker">OTHER MILESTONES</p><h2>Beyond weddings.</h2><p>Interested in a vow renewal, commitment celebration, blessing, memorial, life transition ritual or a personally meaningful ceremony? Reach out to discuss what you envision. Non-legal ceremonial services can be explored separately from marriage solemnization.</p></div></section>
   <section className="ceremony-cta" id="inquire"><p className="ceremony-kicker">LET'S DREAM IT UP</p><h2>Your moment deserves to feel like you.</h2><p>Share your ideal date, location, number of guests and the kind of experience you have in mind. I&apos;d love to hear your story!</p><a className="ceremony-button" href={inquire("2027 ceremony inquiry — Rev. Dr. Jess Simmonds")}>Enquire with Jess ↗</a><p className="ceremony-legal">PEI Marriage Commissioner applications reopen in January 2027. Legal marriage ceremonies cannot be confirmed or conducted in that capacity unless and until the required appointment/licence is granted. Prices are proposed and subject to confirmation.</p></section>
   <footer className="ceremony-footer"><Link href="/">← Back to Jess Good Vibes Only</Link><span>Island Roots Homestead • Charlottetown, PEI • love, light &amp; levity ☮</span></footer>
 </main>;
}
