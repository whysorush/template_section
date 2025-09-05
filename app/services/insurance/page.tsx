import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui";

export default function Page(){
  return (<div className="bg-white">
    <Header />
    <Section>
      <h1 className="text-3xl font-bold text-primary">Insurance & Reinsurance Advisory</h1>
      <p className="mt-2 max-w-3xl">Content coming soon. Replace this with your detailed service page, matching the home layout cards.</p>
    </Section>
    <Footer />
  </div>);
}
