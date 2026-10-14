import Link from "next/link";

export const metadata = {
  title: "The Inner Circle | EARTH SCHOOL",
  description: "Private monthly consciousness mentorship with THE HIGH PRIESTjESS. Individual calls, voice transmissions and real-world practice.",
};

const benefits = [
  ["FOUR PRIVATE CALLS", "Four individual video calls each month for guidance, reflection and conscious action."],
  ["PERSONAL VOICE TRANSMISSIONS", "Two-way voice messages and ongoing guidance between calls, within agreed communication hours."],
  ["REAL-WORLD PRACTICES", "Personalized grounding, breathwork, movement, reflection, boundaries and conscious choices."],
  ["EXPLORE THE TEACHINGS", "Intuition, the Seven Hermetic Principles, A Course in Miracles-inspired perception work, neuroscience, and simulation theory as an exploratory lens."],
  ["THE JOURNEY", "Make these insights part of your everyday human experience, with meaningful practices and integration."],
];

export default function InnerCircle() {
  return <main style={{minHeight:"100vh",background:"radial-gradient(circle at 80% 0%, #49315c 0, transparent 35%), radial-gradient(circle at 10% 30%, #233f48 0, transparent 35%), #11121b",color:"#f6ebdd",fontFamily:"Georgia, serif",padding:"24px 20px 90px"}}>
    <div style={{maxWidth:940,margin:"0 auto"}}>
      <nav style={{padding:"18px 0 55px",display:"flex",justifyContent:"space-between",gap:20,flexWrap:"wrap"}}>
        <Link href="/" style={{color:"#e8cd9c",textDecoration:"none",letterSpacing:2,fontFamily:"sans-serif",fontSize:13}}>← JESS GOOD VIBES ONLY</Link>
        <span style={{color:"#e8cd9c",letterSpacing:2,fontFamily:"sans-serif",fontSize:12}}>EARTH SCHOOL · A TEMPORARY HUMAN EXPERIENCE</span>
      </nav>
      <section style={{textAlign:"center",padding:"20px 0 45px"}}>
        <p style={{letterSpacing:5,color:"#ddba89",fontSize:13,fontFamily:"sans-serif"}}>PRIVATE MONTHLY MENTORSHIP</p>
        <h1 style={{fontSize:"clamp(3.1rem,9vw,6.3rem)",lineHeight:1.08,margin:"18px 0",fontWeight:400}}>THE INNER CIRCLE</h1>
        <p style={{fontStyle:"italic",fontSize:"clamp(1.2rem,3vw,1.65rem)",color:"#e9d1de"}}>The art of remembering who you are.</p>
        <p style={{maxWidth:690,margin:"28px auto",lineHeight:1.85,fontSize:18}}>A private one-to-one mentorship with Rev. Dr. Jess Simmonds — THE HIGH PRIESTjESS — bringing together four video calls each month, personal two-way voice transmissions, ongoing messages and grounded practices that you can carry into everyday life.</p>
        <div style={{border:"1px solid #be9876",borderRadius:20,background:"#ffffff0b",maxWidth:445,margin:"35px auto 0",padding:"30px 25px"}}>
          <p style={{fontFamily:"sans-serif",fontSize:12,letterSpacing:3,color:"#e8cd9c"}}>THE INNER CIRCLE · PRIVATE MEMBERSHIP</p>
          <div style={{fontSize:34,margin:"12px 0"}}>One membership. Personal guidance.</div>
          <p style={{fontFamily:"sans-serif",fontSize:14}}>Monthly subscription · Check price and billing terms in Stripe</p>
          <p style={{fontSize:14,lineHeight:1.7,opacity:.85,marginTop:18}}>Explore the mentorship details below, then subscribe securely. After payment, contact Jess to arrange your first session.</p>
          <a href="https://buy.stripe.com/28EcN51EEdCQe6q7iF4AU08" target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:"#e9c28e",color:"#1b1720",padding:"14px 22px",borderRadius:40,textDecoration:"none",fontFamily:"sans-serif",fontWeight:700,marginTop:10}}>JOIN THE INNER CIRCLE · SECURE CHECKOUT ↗</a>
        </div>
      </section>
      <section style={{margin:"45px 0 55px"}}>
        <h2 style={{textAlign:"center",fontSize:"clamp(2rem,5vw,3rem)",fontWeight:400}}>Inside the Circle</h2>
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(245px,1fr))",gap:18,marginTop:30}}>
          {benefits.map(([heading,copy])=><article key={heading} style={{padding:26,borderRadius:18,background:"#ffffff0b",border:"1px solid #ffffff25"}}>
            <h3 style={{fontFamily:"sans-serif",fontSize:13,letterSpacing:2,color:"#e8cd9c"}}>{heading}</h3>
            <p style={{lineHeight:1.75,fontSize:16}}>{copy}</p>
          </article>)}
        </div>
      </section>
      <section style={{maxWidth:700,margin:"0 auto",textAlign:"center",borderTop:"1px solid #ffffff35",paddingTop:45}}>
        <h2 style={{fontSize:"clamp(1.7rem,4vw,2.6rem)",fontWeight:400}}>Understand the pattern.<br/>Question the story.<br/>Choose the loving action.</h2>
        <p style={{lineHeight:1.8,marginTop:24}}>All levels of awareness welcome. The Inner Circle is the private monthly mentorship offering; it is separate from the standalone 45-minute intuitive reading. No particular spiritual belief is required.</p>
        <p style={{fontSize:13,opacity:.72,lineHeight:1.6,marginTop:26}}>EARTH SCHOOL is an independent teaching experience inspired by multiple traditions and is not affiliated with or endorsed by the publishers of A Course in Miracles. Review the subscription price, payment frequency and terms in Stripe before completing checkout.</p>
        <Link href="/" style={{color:"#e8cd9c",display:"inline-block",marginTop:26}}>← Return to the website</Link>
      </section>
    </div>
  </main>;
}
