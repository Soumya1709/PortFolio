"use client";
import {useEffect,useState} from "react";
import {Menu,X} from "lucide-react";
import {motion,AnimatePresence} from "framer-motion";
import {nav} from "@/data/social";
const id=n=>n.toLowerCase();
export default function Navbar(){
 const [active,setActive]=useState("home");const [open,setOpen]=useState(false);const [solid,setSolid]=useState(false);
 useEffect(()=>{
  const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:"-45% 0px -50% 0px"});
  nav.forEach(n=>{const el=document.getElementById(id(n));el&&io.observe(el)});
  const s=()=>setSolid(window.scrollY>40);s();window.addEventListener("scroll",s,{passive:true});
  return()=>{io.disconnect();window.removeEventListener("scroll",s)};},[]);
 return(<header className={`fixed inset-x-0 top-0 z-50 transition-all ${solid?"bg-ink/70 backdrop-blur-md border-b border-line":""}`}>
  <nav aria-label="Primary" className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16">
   <a href="/#home" className="font-display text-lg">Soumya<span className="text-emer">.</span></a>
   <ul className="hidden lg:flex gap-8">{nav.map(n=><li key={n}><a href={`/#${id(n)}`} className={`relative text-sm py-1 transition-colors ${active===id(n)?"text-bone":"text-mute hover:text-bone"}`}>{n}
    {active===id(n)&&<motion.span layoutId="nav-dot" className="absolute -bottom-1 left-0 right-0 h-px bg-emer"/>}</a></li>)}</ul>
   <button className="lg:hidden p-2" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </nav>
  <AnimatePresence>{open&&<motion.ul initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="lg:hidden bg-ink/95 backdrop-blur px-5 pb-6 border-b border-line">
   {nav.map(n=><li key={n}><a onClick={()=>setOpen(false)} href={`/#${id(n)}`} className="block py-3 text-2xl font-display border-b border-line">{n}</a></li>)}</motion.ul>}</AnimatePresence>
 </header>);
}
