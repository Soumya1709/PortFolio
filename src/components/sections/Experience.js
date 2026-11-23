"use client";
import {useState} from "react";
import {motion,AnimatePresence} from "framer-motion";
import {Plus} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import {experience} from "@/data/experience";
export default function Experience(){
 const [o,setO]=useState(0);
 return(<section id="experience" className="mx-auto max-w-4xl px-5 sm:px-8 py-24 sm:py-32">
  <SectionHeading index="05" label="Experience" title="Leadership & activities."/>
  <ol className="relative border-l border-line ml-2">{experience.map((e,i)=>(<li key={e.title} className="pl-8 pb-10 relative">
   <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full transition-colors ${o===i?"bg-emer":"bg-mute"}`}/>
   <button onClick={()=>setO(o===i?-1:i)} aria-expanded={o===i} className="w-full text-left group">
    <p className="font-mono text-[11px] text-emer uppercase tracking-widest">{e.type} · {e.date}</p>
    <div className="flex justify-between items-center gap-4"><h3 className="font-display text-2xl sm:text-3xl mt-1 group-hover:text-emer transition-colors">{e.title}</h3><Plus size={18} className={`shrink-0 transition-transform ${o===i?"rotate-45":""}`}/></div>
    <p className="text-mute">{e.org}</p></button>
   <AnimatePresence>{o===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} className="overflow-hidden text-silver mt-3 max-w-xl">{e.body}</motion.p>}</AnimatePresence>
  </li>))}</ol></section>);
}
