"use client";
import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowUpRight} from "lucide-react";
import ProjectImage from "./ProjectImage";
export default function ProjectCard({p,i,featured}){
 return(<motion.article initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-60px"}} transition={{duration:.8,delay:(i%2)*.12}}
  className={`group ${featured?"lg:col-span-2":""}`}>
  <Link href={`/projects/${p.slug}`} className="block rounded-2xl border border-line bg-panel/60 p-4 sm:p-5 transition-colors hover:border-emer/40">
   <div className="transition-transform duration-500 group-hover:scale-[1.01]"><ProjectImage src={p.image} title={p.title}/></div>
   <div className="flex items-start justify-between gap-4 mt-5">
    <div><p className="font-mono text-[11px] text-emer uppercase tracking-widest">0{i+1} · {p.tag}</p>
     <h3 className="font-display text-3xl mt-1">{p.title}</h3></div>
    <ArrowUpRight className="shrink-0 text-mute transition-all group-hover:text-emer group-hover:translate-x-1 group-hover:-translate-y-1"/></div>
   <p className="text-mute mt-2 max-w-xl">{p.summary}</p>
   <div className="flex flex-wrap gap-2 mt-4">{p.stack.map(s=><span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-silver">{s}</span>)}</div>
  </Link></motion.article>);
}
