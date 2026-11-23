import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
const facts=[["Studying","B.Tech, Computer Science & Engineering — KIIT"],["Focus","AI/ML, GenAI & LLM engineering, RAG systems and agents"],["Also into","Backend engineering, data science and analytics"]];
export default function About(){
 return(<section id="about" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
  <SectionHeading index="01" label="About" title="Curious by default, practical by habit."/>
  <div className="grid gap-12 lg:grid-cols-12 items-center">
   <Reveal className="lg:col-span-5 order-2 lg:order-1"><div className="relative mx-auto max-w-sm">
    <div className="absolute -inset-3 rounded-[2rem] border border-line"/><div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-panel to-ink border border-line aspect-[4/5]">
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(46,229,157,.18),transparent_65%)]"/>
     <Image src="/images/soumya-profile.png" alt="Soumya Sinha, B.Tech CSE student at KIIT" width={1280} height={1228} sizes="400px" className="absolute left-1/2 top-[6%] w-[170%] max-w-none -translate-x-[48%]"/></div></div></Reveal>
   <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
    <Reveal><p className="font-display text-2xl sm:text-3xl leading-snug">I'm Soumya — a computer science student at KIIT who enjoys turning ideas into working products.</p></Reveal>
    <Reveal delay={.1}><p className="text-mute text-lg max-w-xl">I like experimenting with emerging AI technology, solving engineering problems, and building things people can actually use. My work sits between AI, data and backend systems.</p></Reveal>
    <div className="divide-y divide-line border-y border-line">{facts.map(([k,v],i)=><Reveal key={k} delay={i*.08} className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-4"><span className="font-mono text-xs text-emer uppercase tracking-widest pt-1">{k}</span><span>{v}</span></Reveal>)}</div>
    <Reveal><p className="text-mute max-w-xl"><span className="text-bone">Philosophy:</span> build practical things, learn by shipping, and keep what you build understandable.</p></Reveal>
   </div></div></section>);
}
