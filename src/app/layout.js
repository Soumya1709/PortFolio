import "./globals.css";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
const display=Fraunces({subsets:["latin"],variable:"--font-display",axes:["opsz"]});
const sans=Inter({subsets:["latin"],variable:"--font-sans"});
const mono=JetBrains_Mono({subsets:["latin"],variable:"--font-mono"});
const desc="Soumya Sinha — AI/ML Engineer, GenAI Developer and Software Engineer. Building intelligent applications and scalable software systems.";
export const metadata={metadataBase:new URL(process.env.NEXT_PUBLIC_SITE_URL||"http://localhost:3000"),
title:{default:"Soumya Sinha — AI/ML Engineer | GenAI Developer",template:"%s — Soumya Sinha"},description:desc,
openGraph:{title:"Soumya Sinha — AI/ML Engineer | GenAI Developer",description:desc,type:"website",images:["/images/soumya-profile.png"]},
twitter:{card:"summary_large_image"}};
export const viewport={themeColor:"#0a0c0b"};
export default function RootLayout({children}){return(<html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}><body>{children}</body></html>);}
