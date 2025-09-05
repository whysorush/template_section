import Link from "next/link";
import { Button } from "./ui";
import SectionBackground from "./SectionBackground";
import assets from '../assets.json';

export default function Hero(){
  return (
    <SectionBackground 
      config={assets.backgrounds.hero}
      className="text-white min-h-screen flex items-center justify-center"
    >
      <div className="container-max w-full">
        <div className="flex flex-col items-center justify-center text-center py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              LEVERAGING
              <br />
              <span className="text-secondary">THE PULSE OF</span>
              <br />
              FINANCIAL
              <br />
              SERVICES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
              Founded in 2010, GrowthAlly is an innovative financial services firm focused on mid‑market advisory and long‑term value creation.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="#services" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105">
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Service Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {title:"Investment Banking Advisory", href:"/services/investment-banking"},
              {title:"Institutional Securities Trading", href:"/services/institutional-trading"},
              {title:"Portfolio Management Services", href:"/services/portfolio-management"},
              {title:"Insurance & Reinsurance Advisory", href:"/services/insurance"},
            ].map((s)=>(
              <Link key={s.href} href={s.href} className="group bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="font-semibold text-sm lg:text-base text-center leading-tight">{s.title}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
