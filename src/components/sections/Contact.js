"use client";

import { Mail, Linkedin, Github, Download } from "lucide-react";
import Signature from "@/components/ui/Signature";
import Reveal from "@/components/ui/Reveal";
import { social } from "@/data/social";

const links = [
  {
    l: "Email",
    h: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(social.email)}`,
    i: Mail
  },
  { l: "LinkedIn", h: social.linkedin, i: Linkedin },
  { l: "GitHub", h: social.github, i: Github }
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line grain">
      <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(46,229,157,.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 py-28 sm:py-40 text-center">

        <Reveal>
          <p className="font-mono text-xs tracking-[.25em] text-emer uppercase">
            06 — Contact
          </p>
        </Reveal>

        <Reveal delay={.1}>
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl mt-5 leading-[1.05]">
            Have an interesting idea?
            <br />
            <span className="italic text-silver">
              Let's build something meaningful.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={.2} className="mt-10 flex flex-wrap justify-center gap-3">
          {links.map(({ l, h, i: Icon }) => (
  <a
    key={l}
    href={h}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={l}
    title={l}
    className="btn btn-ghost"
  >
    <Icon size={20} />
  </a>
))}

          <a href={social.resume} download className="btn btn-primary">
            <Download size={16} />
            Resume
          </a>
        </Reveal>

        <div className="mt-16 flex justify-center">
          <Signature variant="white" width={240} />
        </div>

      </div>
    </section>
  );
}