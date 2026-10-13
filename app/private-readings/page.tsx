import type { Metadata } from "next";
import Link from "next/link";

const bookingUrl = "https://calendly.com/aspiritualwarriorspath/intuitive-clarity-reading-for-entrepreneurs-creators";

export const metadata: Metadata = {
  title: "Intuitive Clarity Reading | Rev. Dr. Jess ☮️",
  description: "What if one conversation could change the way you see everything? Book a 45-minute $111 CAD Intuitive Clarity Reading with Rev. Dr. Jess ☮️.",
};

export default function ReadingsPage() {
  return (
    <main style={{minHeight:"100vh", background:"linear-gradient(155deg,#0b1019,#1a2231 57%,#23192c)", color:"#f7ecdb", padding:"clamp(24px,5vw,76px) 24px"}}>
      <div style={{maxWidth:1000,margin:"0 auto"}}>
        <nav style={{display:"flex",gap:24,flexWrap:"wrap",alignItems:"center",fontSize:14,marginBottom:72}}>
          <Link href="/" style={{textDecoration:"none",fontWeight:800}}>☮ JESS GOOD VIBES ONLY</Link>
          <Link href="/my-story">My Story</Link>
          <Link href="/#earth-school">EARTH SCHOOL</Link>
        </nav>
        <p style={{color:"#dfb982",fontSize:13,letterSpacing:3,fontWeight:800}}>PRIVATE READINGS · WORLDWIDE</p>
        <h1 style={{fontFamily:"Georgia,serif",fontSize:"clamp(3.4rem,9vw,7rem)",letterSpacing:"-.055em",lineHeight:1.04,margin:"18px 0"}}>THE HIGH<br/><span style={{color:"#e8ba88"}}>PRIESTjESS</span></h1>
        <p style={{fontSize:"clamp(1.1rem,2vw,1.5rem)",maxWidth:720,lineHeight:1.65}}><strong>What if one conversation could change the way you see everything?</strong> A private intuitive reading for anyone with questions about life, relationships, consciousness and what comes next.</p>
        <div style={{maxWidth:720,marginTop:38,fontSize:17,lineHeight:1.85,color:"#e7dfd7"}}>
          <p>I’ve explored intuitive and psychic experiences since childhood. Across 24 countries, decades of spiritual study and teaching, and a lifetime of asking big questions, one fascination has always stayed with me: what does it mean to be human?</p>
          <p>I’m an ordained interfaith minister, author of <em>A Spiritual Warrior’s Path to Re-Enlightening</em>, and creator of <strong>EARTH SCHOOL</strong>—an interactive world built around awareness, choice and the mystery of consciousness.</p>
          <p>Whether you’re navigating relationships, a major transition, personal growth, spiritual questions or simply the mystery of being human, come as you are. We can explore intuition, metaphysics, simulation theory and consciousness as thought-provoking lenses — always with room for your own perspective. You remain the author of your own choices.</p>
        </div>
        <section style={{marginTop:44,padding:"clamp(24px,4vw,42px)",border:"1px solid #8f785b",background:"rgba(255,255,255,.05)",borderRadius:18,maxWidth:740}}>
          <p style={{letterSpacing:2,fontSize:12,color:"#dfb982",fontWeight:800}}>BOOK YOUR PRIVATE SESSION</p>
          <h2 style={{fontFamily:"Georgia,serif",fontSize:"clamp(2rem,4vw,3rem)",margin:"12px 0"}}>Step beyond the ordinary.</h2>
          <p style={{fontSize:23,fontWeight:700,margin:"18px 0"}}>$111 CAD</p>
          <p>45-minute private Zoom reading · worldwide</p>
          <p style={{fontSize:14,color:"#e0d4c8"}}>Select a time on Calendly and review the $111 CAD payment details before confirming. In-person appointments in Charlottetown can be requested separately.</p>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",marginTop:16,background:"#e6bf89",color:"#111820",fontWeight:800,textDecoration:"none",padding:"15px 24px",borderRadius:5}}>BOOK MY INTUITIVE READING ↗</a>
          <p style={{marginTop:22,fontSize:14}}>Prefer an in-person session? <a href="mailto:jessgoodvibesonly@gmail.com?subject=Charlottetown%20private%20reading">Email Jess to enquire</a>.</p>
        </section>
        <div style={{marginTop:60,paddingTop:30,borderTop:"1px solid #7d7064",lineHeight:1.75}}>
          <p style={{fontFamily:"Georgia,serif",fontSize:28}}>From private readings to EARTH SCHOOL.</p>
          <p style={{maxWidth:660}}>EARTH SCHOOL is my larger creative vision: an immersive experience exploring simulation theory, consciousness, ancient wisdom, neuroscience, patterns and the choices that shape our lives.</p>
          <Link href="/#earth-school" style={{color:"#e8ba88",fontWeight:800}}>Explore EARTH SCHOOL ↗</Link><p style={{marginTop:18}}>Explore my book, <em>A Spiritual Warrior’s Path to Re-Enlightening</em>, and more spiritual teachings at <a href="https://www.aspiritualwarriorspath.com" target="_blank" rel="noopener noreferrer" style={{color:"#e8ba88"}}>A Spiritual Warrior’s Path ↗</a>.</p>
        </div>
        <footer style={{marginTop:72,fontSize:13,color:"#cfc2b4"}}>☮ Jess Good Vibes Only · Spiritual insight is reflective guidance, not medical, legal or financial advice.</footer>
      </div>
    </main>
  );
}
