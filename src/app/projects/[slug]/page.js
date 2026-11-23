import Link from "next/link";
import {notFound} from "next/navigation";
import {ArrowLeft,Github,ExternalLink} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectImage from "@/components/ui/ProjectImage";
import {projects,getProject} from "@/data/projects";
export const generateStaticParams=()=>projects.map(p=>({slug:p.slug}));
export function generateMetadata({params}){const p=getProject(params.slug);return p?{title:p.title,description:p.summary}:{};}
const Block=({t,children})=><section className="border-t border-line py-8 grid md:grid-cols-[12rem_1fr] gap-4"><h2 className="font-mono text-xs text-emer uppercase tracking-widest pt-1">{t}</h2><div>{children}</div></section>;
const Btn=({href,icon:I,children})=>href?<a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><I size={16}/>{children}</a>:<span className="btn btn-ghost opacity-50" title="Add URL in src/data/projects.js"><I size={16}/>{children} (add link)</span>;
export default function ProjectPage({params}){
 const p=getProject(params.slug);if(!p)notFound();
 return(<><Navbar/><main className="mx-auto max-w-5xl px-5 sm:px-8 pt-28 pb-24">
  <Link href="/#projects" className="inline-flex items-center gap-2 text-mute hover:text-emer text-sm"><ArrowLeft size={16}/>All projects</Link>
  <p className="font-mono text-xs text-emer uppercase tracking-widest mt-8">{p.tag}</p>
  <h1 className="font-display text-5xl sm:text-7xl mt-3">{p.title}</h1>
  <p className="text-mute text-lg mt-4 max-w-2xl">{p.summary}</p>
  <div className="flex gap-3 mt-6"><Btn href={p.github} icon={Github}>GitHub</Btn><Btn href={p.demo} icon={ExternalLink}>Live demo</Btn></div>
  <div className="my-10"><ProjectImage src={p.image} title={p.title}/></div>
  <Block t="Problem"><p>{p.problem}</p></Block>
  <Block t="Solution"><p>{p.solution}</p></Block>
  <Block t="Architecture"><ol className="space-y-2">{p.architecture.map((a,i)=><li key={a} className="flex gap-3"><span className="font-mono text-xs text-mute pt-1">0{i+1}</span>{a}</li>)}</ol></Block>
  <Block t="Features"><ul className="grid sm:grid-cols-2 gap-2">{p.features.map(f=><li key={f} className="flex gap-2"><span className="text-emer">▸</span>{f}</li>)}</ul>
   {p.planned&&<div className="mt-5 rounded-lg border border-dashed border-line p-4"><p className="font-mono text-[11px] text-silver uppercase tracking-widest mb-2">Planned — not yet implemented</p><ul className="text-mute space-y-1">{p.planned.map(f=><li key={f}>◦ {f}</li>)}</ul></div>}</Block>
  <Block t="Tech stack"><div className="flex flex-wrap gap-2">{p.stack.map(s=><span key={s} className="rounded-full border border-line px-3 py-1 text-sm">{s}</span>)}</div></Block>
  <Block t="My contribution"><p>{p.contribution}</p></Block>
 </main><Footer/></>);
}
