import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui";
import Link from "next/link";
import { A } from "@/lib/data";

export default function Page(){
  return (<div className="bg-white">
    <Header />
    <Section>
      <h1 className="text-3xl font-bold text-primary">Important Notifications</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {/* Placeholder list; wire to your real files or CMS later. */}
        {A.completed_transactions?.slice(0,6).map((d, i)=> (
          <article key={i} className="rounded-xl2 border p-5 bg-white shadow-soft">
            <div className="font-semibold">Important Notifications — {d.company_name}</div>
            <div className="text-sm text-neutralgray/80">{d.deal_type} • {d.completed_date}</div>
            <p className="mt-1 text-sm">{d.description}</p>
            <Link className="text-secondary text-sm" href="#">
              Know More →
            </Link>
          </article>
        ))}
      </div>
    </Section>
    <Footer />
  </div>);
}
