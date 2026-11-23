"use client";
import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import {skills} from "@/data/skills";
export default function Skills(){
 const cats=Object.keys(skills);const [c,setC]=useState(cats[0]);
 return(<section id="skills" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
  <SectionHeading index="02" label="Skills" title="The tools I build with."/>
  <div className="grid gap-10 lg:grid-cols-[16rem_1fr]">
   <div role="tablist" className="flex lg:flex-col gap-2 overflow-x-auto pb-2">{cats.map(k=>
    <button key={k} role="tab" aria-selected={c===k} onClick={()=>setC(k)} className={`whitespace-nowrap text-left rounded-full lg:rounded-lg px-4 py-2.5 border transition-colors ${c===k?"border-emer text-emer bg-emer/5":"border-line text-mute hover:text-bone"}`}>{k}</button>)}</div>
   <AnimatePresence mode="wait"><motion.ul key={c} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0}} transition={{duration:.3}} className="flex flex-wrap content-start gap-3 min-h-[180px]">
    {skills[c].map((s,i)=><motion.li key={s} initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:i*.04}} whileHover={{y:-3}}
     className="rounded-full border border-line bg-panel px-5 py-3 text-lg hover:border-emer/50 transition-colors">{s}</motion.li>)}</motion.ul></AnimatePresence>
  </div></section>);
}
