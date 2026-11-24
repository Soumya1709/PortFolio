import {FileText,ExternalLink} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import {social} from "@/data/social";
const topics=["Graph Neural Networks","Graph Attention Networks","Bayesian Deep Neural Networks","Aleatoric & Epistemic Uncertainty","Deep Reinforcement Learning","Risk Resilience Index"];
const Link=({href,icon:I,children})=>href?<a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><I size={16}/>{children}</a>:null;
export default function Research(){
 return(<section id="research" className="border-y border-line bg-panel/40"><div className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
  <SectionHeading index="05" label="Research" title="Comparative Study of AI Driven Risk Resilience Frameworks"/>
  <div className="grid gap-12 lg:grid-cols-12">
   <Reveal className="lg:col-span-7 space-y-6"><span className="inline-block rounded-full border border-emer/40 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-emer">Manuscript · Not yet published</span>
<p className="font-mono text-xs text-emer uppercase tracking-widest">Abstract</p>
    <p className="font-display text-xl sm:text-2xl leading-relaxed">A comparative study of AI-driven frameworks for modelling risk and resilience, examining graph-based learning, uncertainty-aware deep learning and reinforcement learning approaches.</p>
    <p className="text-mute">This work has not been published yet. Methodology and results will be shared once it is.</p>
    <div className="flex flex-wrap gap-3 pt-2"><Link href={social.paper} icon={FileText}>Download paper</Link><Link href={social.publication} icon={ExternalLink}>Publication</Link></div></Reveal>
   <Reveal delay={.1} className="lg:col-span-5"><p className="font-mono text-xs text-emer uppercase tracking-widest mb-4">Core methods</p>
    <ul className="divide-y divide-line border-y border-line">{topics.map((t,i)=><li key={t} className="flex gap-4 py-3.5"><span className="font-mono text-xs text-mute pt-1">0{i+1}</span>{t}</li>)}</ul></Reveal>
  </div></div></section>);
}
