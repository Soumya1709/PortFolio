"use client";
import {motion,useReducedMotion} from "framer-motion";
export default function Reveal({children,delay=0,className="",as="div"}){
 const r=useReducedMotion();const M=motion[as];
 return <M className={className} initial={r?false:{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:.8,delay,ease:[.22,1,.36,1]}}>{children}</M>;
}
