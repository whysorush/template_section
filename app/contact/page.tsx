import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Section } from "@/components/ui";

export default function Page(){
  return (<div className="bg-white">
    <Header />
    <Section>
      <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
      <p className="mt-2 max-w-3xl">Use the form on the home page or add CRM integration here.</p>
    </Section>
    <Footer />
  </div>);
}
