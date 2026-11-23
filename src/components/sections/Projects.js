import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import {projects} from "@/data/projects";
export default function Projects(){
 return(<section id="projects" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
  <SectionHeading index="03" label="Projects" title="Selected work."/>
  <div className="grid gap-6 lg:grid-cols-2">{projects.map((p,i)=><ProjectCard key={p.slug} p={p} i={i} featured={i===0}/>)}</div></section>);
}
