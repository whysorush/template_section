import Link from "next/link";

export default function Footer(){
  return (
    <footer className="bg-[#f7f9fc] border-t">
      <div className="container-max py-10 grid md:grid-cols-4 gap-10">
        <div>
          <div className="text-2xl font-bold text-primary">GrowthAlly</div>
          <p className="mt-3 text-sm text-neutralgray/80">Pursuing growth with trust. Template inspired by PINC layout, with original design tokens.</p>
        </div>
        <div>
          <div className="font-semibold text-brown mb-3">About</div>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-primary">Overview</Link></li>
            <li><Link href="/about#vision" className="hover:text-primary">Vision & Mission</Link></li>
            <li><Link href="/about#leadership" className="hover:text-primary">Leadership</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-brown mb-3">Services</div>
          <ul className="space-y-2">
            <li><Link href="/services/investment-banking" className="hover:text-primary">Investment Banking</Link></li>
            <li><Link href="/services/institutional-trading" className="hover:text-primary">Institutional Trading</Link></li>
            <li><Link href="/services/portfolio-management" className="hover:text-primary">Portfolio Management</Link></li>
            <li><Link href="/services/insurance" className="hover:text-primary">Insurance & Reinsurance</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-brown mb-3">Investors</div>
          <ul className="space-y-2">
            <li><Link href="/investors/important-updates" className="hover:text-primary">Important Updates</Link></li>
            <li><Link href="/investors/important-notifications" className="hover:text-primary">Important Notifications</Link></li>
            <li><Link href="/investors/financial-results" className="hover:text-primary">Financial Results</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container-max py-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} GrowthAlly. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/sitemap">Site Map</Link>
            <Link href="/legal/disclaimer">Disclaimer</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
