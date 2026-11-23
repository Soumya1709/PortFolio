"use client";
import Image from "next/image";
import {motion,useReducedMotion} from "framer-motion";
// Uses the REAL supplied artwork. variant: "white" for dark sections, "black" for light ones.
export default function Signature({variant="white",width=220,delay=0,className=""}){
 const r=useReducedMotion();
 return(<motion.div className={className} style={{width,maxWidth:"100%"}}
  initial={r?{opacity:0}:{clipPath:"inset(0 100% 0 0)",opacity:.4}}
  whileInView={r?{opacity:1}:{clipPath:"inset(0 0% 0 0)",opacity:1}} viewport={{once:true}}
  transition={{duration:r?.6:2.2,delay,ease:[.65,0,.35,1]}}>
  <Image src={`/images/signature-${variant}.png`} alt="Handwritten signature of Soumya Sinha" width={1024} height={372} className="w-full h-auto"/>
 </motion.div>);
}
