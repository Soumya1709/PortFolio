import Reveal from "./Reveal";
export default function SectionHeading({index,label,title}){
 return(<Reveal className="mb-14"><p className="font-mono text-xs tracking-[.25em] text-emer uppercase">{index} — {label}</p>
 <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 leading-[1.05] max-w-3xl">{title}</h2></Reveal>);
}
