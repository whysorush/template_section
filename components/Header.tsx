'use client';
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Investment Banking", href: "/services/investment-banking" },
  { label: "Institutional Trading", href: "/services/institutional-trading" },
  { label: "Portfolio Management", href: "/services/portfolio-management" },
  { label: "Insurance & Reinsurance", href: "/services/insurance" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/#blog" },
  { label: "Contact", href: "/contact" }
];

export default function Header(){
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container-max flex items-center h-20">
        <button onClick={() => setOpen(!open)} className="p-2 hover:bg-white/10 rounded-lg transition-colors mr-4">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://www.growthally.org/wp-content/uploads/2022/01/cropped-cropped-Untitled-design-21.png"
            alt="GrowthAlly"
            width={80} height={60}
            className="rounded"
          />
          <span className="font-bold text-xl tracking-wide">GrowthAlly</span>
        </Link>
        
        {/* Remove the spacer div */}
      </div>
      
      {/* Mobile Menu */}
      <div className={`absolute top-full left-0 w-full bg-primary/95 backdrop-blur-sm border-t border-white/10 transition-all duration-300 ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav className="container-max py-6">
          <div className="grid gap-4">
            {NAV.map(n => (
              <Link 
                key={n.href} 
                href={n.href} 
                className="py-3 px-4 text-lg font-medium hover:text-secondary hover:bg-white/5 rounded-lg transition-all" 
                onClick={()=>setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link 
              href="/contact" 
              className="mt-4 bg-secondary px-6 py-3 rounded-full font-semibold text-center hover:bg-secondary/90 transition-colors" 
              onClick={()=>setOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
