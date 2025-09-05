import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import AboutBlock from "@/components/AboutBlock";
import BlogNews from "@/components/BlogNews";
import ContactBlock from "@/components/ContactBlock";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import assets from '../assets.json';

export default function Page(){
  return (
    <div className="bg-white relative">
      <Header />
      <main>
        <Hero />
        <Marquee transactions={assets.active_transaction} />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <AboutBlock />
        <BlogNews />
        <ContactBlock />
      </main>
      <Footer />
    </div>
  );
}
