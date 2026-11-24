"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import {motion,useMotionValue,useSpring,useTransform,useReducedMotion} from "framer-motion";
import {ArrowDown,Download} from "lucide-react";
import Signature from "@/components/ui/Signature";
import {social} from "@/data/social";
const HeroScene=dynamic(()=>import("@/components/three/HeroScene"),{ssr:false,loading:()=>null});
export default function Hero(){
 const r=useReducedMotion();const mx=useMotionValue(0);
 const x=useSpring(useTransform(mx,[-1,1],[-14,14]),{stiffness:60,damping:20});
 const up=(d)=>r?{}:{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.9,delay:d,ease:[.22,1,.36,1]}};
 return(<section id="home" onMouseMove={e=>mx.set((e.clientX/window.innerWidth)*2-1)} className="relative min-h-screen overflow-hidden pt-24 pb-16 grain">
  <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_55%,rgba(46,229,157,.14),transparent_70%)]"/>
  <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-8 lg:grid-cols-2 min-h-[calc(100vh-8rem)]">
   <div className="order-2 lg:order-1 z-10">
    <motion.p {...up(.1)} className="font-mono text-xs tracking-[.3em] text-emer">SOUMYA SINHA</motion.p>
    <motion.h1 {...up(.2)} className="font-display text-[2.8rem] sm:text-6xl xl:text-7xl leading-[.98] mt-5">Building Intelligence.<br/><span className="italic text-silver">Engineering Possibilities.</span></motion.h1>
    <motion.p {...up(.35)} className="font-mono text-xs sm:text-sm text-emer mt-6">AI/ML Engineer <span className="text-mute">|</span> GenAI Developer <span className="text-mute">|</span> Software Engineer</motion.p>
    <motion.p {...up(.45)} className="text-mute mt-5 max-w-md text-base sm:text-lg">I build intelligent applications and scalable software systems, exploring the intersection of AI, data and engineering.</motion.p>
    <motion.div {...up(.55)} className="flex flex-wrap gap-3 mt-8">
     <a href="#projects" className="btn btn-primary">Explore My Work <ArrowDown size={16}/></a>
     <a href={social.resume} download className="btn btn-ghost"><Download size={16}/> Download Resume</a></motion.div>
    <Signature variant="white" width={170} delay={1} className="mt-10 opacity-90"/>
   </div>
   <div className="order-1 lg:order-2 relative h-[420px] sm:h-[560px] lg:h-[720px]">
    <div className="absolute inset-0 opacity-80" aria-hidden="true"><HeroScene/></div>
    <motion.div style={{x}} initial={r?false:{opacity:0,y:40,scale:.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:1.2,delay:.3,ease:[.22,1,.36,1]}}
     className="absolute inset-x-0 bottom-0 mx-auto w-[88%] sm:w-[75%] lg:w-[105%] pointer-events-none">
     <div className="absolute inset-x-[10%] bottom-0 h-3/4 rounded-full bg-emer/20 blur-[90px]" aria-hidden="true"/>
     <Image src="/images/soumya-profile.png" alt="Portrait of Soumya Sinha" width={1280} height={1228} priority sizes="(max-width:1024px) 90vw,45vw" className="relative w-full h-auto drop-shadow-[0_20px_60px_rgba(0,0,0,.6)]"/>
     <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent"/>
    </motion.div>
   </div>
  </div>
  <a href="#about" aria-label="Scroll to About" className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-mute font-mono text-[10px] tracking-widest">SCROLL<span className="h-10 w-px bg-gradient-to-b from-emer to-transparent animate-pulse"/></a>
 </section>);
}
