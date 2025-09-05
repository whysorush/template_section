import Link from "next/link";
import { Section } from "./ui";
import SectionBackground, { BackgroundConfig } from "./SectionBackground";
import assets from '../assets.json';

const SERVICES = [
  {
    key: "ib",
    title: "Investment Banking Advisory",
    desc: "Mid‑market focused advisory built on relationships and structuring expertise.",
    bullets: ["Private equity advisory", "Merchant Banking", "Corporate finance advisory", "Debt syndication", "M&A"],
    href: "/services/investment-banking"
  },
  {
    key: "ist",
    title: "Institutional Securities Trading",
    desc: "Leading arranger & underwriter in non‑institutional fixed income.",
    bullets: ["G‑Secs", "SDLs", "Non‑SLR Bonds", "Corporate Bonds", "Money market"],
    href: "/services/institutional-trading"
  },
  {
    key: "pms",
    title: "Portfolio Management Services",
    desc: "Meticulously customized portfolios aligned to client goals and risk appetite.",
    bullets: ["Discretionary equity PMS", "Long‑term wealth creation", "Structured products"],
    href: "/services/portfolio-management"
  },
  {
    key: "ins",
    title: "Insurance & Reinsurance Advisory",
    desc: "Lloyd’s accredited broker across direct, retail & reinsurance verticals.",
    bullets: ["Direct Insurance", "Retail Insurance", "Reinsurance"],
    href: "/services/insurance"
  }
];

export default function Services(){
  return (
    <SectionBackground 
      config={assets.backgrounds.services as BackgroundConfig}
      className="py-20 md:py-32"
    >
      <Section id="services" className="">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to drive your business forward with expertise and innovation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {SERVICES.map(s => (
            <div key={s.key} className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{s.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                </div>
                <Link href={s.href} className="bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-secondary/90 transition-colors">
                  Learn More
                </Link>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-3">
                {s.bullets.map(b => (
                  <div key={b} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm font-medium">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </SectionBackground>
  );
}
