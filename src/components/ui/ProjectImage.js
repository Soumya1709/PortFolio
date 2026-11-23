"use client";
import {useState} from "react";
import Image from "next/image";
import {ImageIcon} from "lucide-react";
// Shows the screenshot if the file exists, else an honest placeholder.
export default function ProjectImage({src,title,className=""}){
 const [bad,setBad]=useState(false);
 return(<div className={`relative aspect-[16/10] overflow-hidden rounded-xl border border-line bg-panel ${className}`}>
  {!bad&&<Image src={src} alt={`${title} screenshot`} fill sizes="(max-width:1024px) 100vw,50vw" className="object-cover" onError={()=>setBad(true)}/>}
  {bad&&<div className="grain absolute inset-0 flex flex-col items-center justify-center gap-2 text-mute">
   <ImageIcon size={28} className="text-emer/70"/><p className="font-mono text-[11px] tracking-widest uppercase">Screenshot placeholder</p>
   <p className="font-mono text-[10px] opacity-60">{src}</p></div>}
 </div>);
}
