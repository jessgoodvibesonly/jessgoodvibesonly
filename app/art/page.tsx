import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Art by Jess | Original Artwork & Oracle Cards",
  description: "Explore original artwork by Jessica Simmonds and the upcoming oracle deck from THE HIGH PRIESTjESS.",
};

const art = [
  {src:"/art/jess-original-earth-school-art.jpg",title:"EARTH SCHOOL",alt:"Original expressive EARTH SCHOOL art by Jessica Simmonds",w:2072,h:3720},
  {src:"/art/jess-original-mona-art.jpg",title:"Portrait Study",alt:"Original red-background portrait artwork by Jessica Simmonds",w:3072,h:4080},
  {src:"/art/jess-original-vision-art.jpg",title:"Symbolic Expression",alt:"Original symbolic portrait artwork by Jessica Simmonds",w:2629,h:3896},
  {src:"/art/jess-pop-art-portrait.jpg",title:"Colour & Character",alt:"Jess original multicoloured pop-art female portrait with vivid blue and pink tones",w:1024,h:1536},
  {src:"/art/jess-flamingo-collage.jpg",title:"Worthy · Powerful",alt:"Jess original pink flamingo mixed-media artwork with cut-out words",w:1024,h:1536},
];

export default function ArtPage() {
  return <main style={{minHeight:"100vh",padding:"clamp(24px,5vw,76px)",background:"radial-gradient(circle at 90% 5%, #29244c 0, #121322 52%, #0c1019 100%)",color:"#f9f4ea"}}>
    <div style={{maxWidth:1200,margin:"0 auto"}}>
      <Link href="/#art" style={{color:"#c9e7ea",textDecoration:"none"}}>← Back to Jess Good Vibes Only</Link>
      <header style={{margin:"65px 0 45px"}}>
        <p style={{letterSpacing:"0.25em",fontSize:12,textTransform:"uppercase",color:"#e9c2ba"}}>THE ART OF JESS · ORIGINAL WORK</p>
        <h1 style={{fontSize:"clamp(3.3rem,9vw,7rem)",lineHeight:1,letterSpacing:"-.06em",margin:"20px 0"}}>Art, instinct<br/><em style={{color:"#a6dbe1"}}>& expression.</em></h1>
        <p style={{fontSize:"clamp(1rem,2vw,1.35rem)",lineHeight:1.7,maxWidth:720,color:"#e0d9d5"}}>These are pieces of my inner world — symbols, stories, colours and intuitive expression. Each artwork is a little window into the mystery of being human.</p>
      </header>
      <section aria-label="Original artwork" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,280px),1fr))",gap:24}}>
        {art.map((work,i)=><figure key={work.src} style={{margin:0,background:"#ffffff0e",border:"1px solid #ffffff29",borderRadius:18,overflow:"hidden"}}>
          <a href={work.src} target="_blank" rel="noopener noreferrer" aria-label={`View ${work.title} at full size`} style={{display:"block"}}>
            <Image src={work.src} alt={work.alt} width={work.w} height={work.h} sizes="(max-width: 680px) 100vw, 33vw" style={{width:"100%",height:"auto",display:"block"}}/>
          </a>
          <figcaption style={{padding:20,fontSize:16}}>{work.title}<span style={{float:"right",opacity:.6,fontSize:13}}>0{i+1} / 05</span></figcaption>
        </figure>)}
      </section>
      <section style={{marginTop:85,padding:"clamp(26px,5vw,62px)",borderRadius:22,border:"1px solid #d8b8a36b",background:"linear-gradient(130deg,#583a5544,#cba78319)"}}>
        <p style={{letterSpacing:".22em",fontSize:12,color:"#f2c7b1"}}>THE HIGH PRIESTjESS · COMING SOON</p>
        <h2 style={{fontSize:"clamp(2.2rem,5vw,4rem)",lineHeight:1.1,margin:"18px 0"}}>An oracle deck,<br/><em>born from my art.</em></h2>
        <p style={{maxWidth:720,lineHeight:1.8,fontSize:18,color:"#f1e7e0"}}>I’m bringing my original artwork into a collection of oracle cards for intuition, reflection and remembering who you are. Each card will invite a moment of discovery — an opportunity to notice, feel and listen within.</p>
        <p style={{fontWeight:600,marginTop:24}}>Oracle Cards — Coming Soon</p>
        <p style={{color:"#dacdc6",marginTop:12}}>Future home: THE HIGH PRIESTjESS Apothecary, featuring the oracle deck, Egyptian Magic-inspired offerings and other creations. Products and checkout are not yet available.</p>
      </section>
    </div>
  </main>;
}
