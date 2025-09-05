'use client';
import { Section } from "./ui";
import SectionBackground from "./SectionBackground";
import assets from '../assets.json';
import { useState, useEffect, useRef } from 'react';

const DEALS = [
  { client: "Thomas Cook", amount: "INR 1000 Cr", type: "M&A" },
  { client: "Enzen + Greater Pacific", amount: "INR 700 Cr", type: "Private Equity" },
  { client: "Jyothy Laboratories Ltd.", amount: "INR 550 Cr", type: "Project Loan" },
  { client: "Sansera Engineering Pvt. Ltd.", amount: "INR 340 Cr", type: "Private Equity" },
  { client: "Ajax Engineering Pvt. Ltd.", amount: "INR 300 Cr", type: "Private Equity" },
  { client: "Adani", amount: "INR 252 Cr", type: "Institutional Securities Trading" },
  { client: "Ecstasy Realty", amount: "INR 235 Cr", type: "Corporate Loan" },
  { client: "Laxmi Organics", amount: "INR 157 Cr", type: "Project Finance" },
];

export default function WhyChooseUs(){
  return (
    <SectionBackground 
      config={assets.backgrounds.why_choose_us}
      className="bg-white/90"
    >
      <Section id="why-us">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We make you and your goals our priority. Trusted for professional competence and unbiased advisory, 
            with deep mid‑market research and presence across major Indian cities.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-20">
          <Stat k="15+" v="Years in Business" />
          <Stat k="50+" v="Team Members" />
          <Stat k="200+" v="Corporate Clients" />
        </div>

        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">Transactions</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself with successful deals across various sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEALS.map((d, i)=> (
            <div key={i} className="group bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="mb-4">
                <div className="font-bold text-lg text-primary group-hover:text-secondary transition-colors">{d.client}</div>
                <div className="text-sm text-gray-500 font-medium mt-1">{d.type}</div>
              </div>
              <div className="text-2xl font-bold text-secondary">{d.amount}</div>
            </div>
          ))}
        </div>
      </Section>
    </SectionBackground>
  )
}

function Stat({k, v}:{k:string, v:string}){
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);
  
  // Extract number from string (e.g., "15+" -> 15, "200+" -> 200)
  const targetNumber = parseInt(k.replace(/\D/g, '')) || 0;
  const suffix = k.replace(/\d/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (isVisible && targetNumber > 0) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = targetNumber / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, targetNumber]);

  return (
    <div ref={statRef} className="text-center group">
      <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
        <div className="text-5xl md:text-6xl font-bold text-secondary mb-3 group-hover:scale-110 transition-transform">
          {isVisible ? `${count}${suffix}` : `0${suffix}`}
        </div>
        <div className="text-lg font-semibold text-primary">{v}</div>
      </div>
    </div>
  );
}
