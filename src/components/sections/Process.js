import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const steps = [
  { t: "Understand the problem first", d: "I start by getting clear on who the tool is for and what hurts today, before choosing any technology.", e: "Findora: lost items on campus are usually handled through scattered messages and notice boards." },
  { t: "Design the data and API early", d: "A clean data model and well-defined endpoints make everything built on top easier to change.", e: "AtlasML: FastAPI endpoints with PostgreSQL and SQLAlchemy behind them." },
  { t: "Build in modular pieces", d: "Small, single-purpose components are easier to test, swap and explain.", e: "AtlasML pipeline agents; Research Assistant's plan, search, extract, write and critique steps." },
  { t: "Use AI where it earns its place", d: "I add LLMs and retrieval where they solve a real problem, and ground answers in the data.", e: "DataLens AI's Gemini analyst; the Video Assistant's retrieval-based answers." },
  { t: "Be honest about what's done", d: "I separate what is built from what is planned, in my code and on this site.", e: "Chit-Chat: AI chat features and sentiment analysis are listed as planned, not shipped." },
];
const exploring = ["AI agents", "RAG systems", "LLM engineering", "Backend architecture"];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading index="04" label="Process" title="How I build." />
      <ol className="grid gap-5 md:grid-cols-2">
        {steps.map((s, i) => (
          <Reveal as="li" key={s.t} delay={(i % 2) * 0.1}
            className={`rounded-2xl border border-line bg-panel/60 p-6 transition-colors hover:border-emer/40 ${i === 4 ? "md:col-span-2" : ""}`}>
            <p className="font-mono text-xs text-emer">0{i + 1}</p>
            <h3 className="font-display text-2xl mt-2">{s.t}</h3>
            <p className="text-mute mt-2">{s.d}</p>
            <p className="mt-4 border-t border-line pt-4 text-sm text-silver">{s.e}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-10 flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-mute">Currently exploring</span>
        {exploring.map((x) => (
          <span key={x} className="rounded-full border border-line px-4 py-1.5 text-sm">{x}</span>
        ))}
      </Reveal>
    </section>
  );
}