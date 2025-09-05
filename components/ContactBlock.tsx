import { Section, Button } from "./ui";
import SectionBackground from "./SectionBackground";
import assets from '../assets.json';

const OFFICES = [
  { city: "Mumbai", lines: ["1218, 12th Floor, Maker Chamber V, Nariman Point,", "Mumbai - 400 021"], phone: "+91 022 6618 6400", email: "hello@growthally.org" },
  { city: "Delhi", lines: ["812, 8th Floor, Kailash Building, 26, Kasturba Gandhi Marg,", "Connaught Place, New Delhi – 110 001"], phone: "+91 11 4516 6705", email: "hello@growthally.org" },
  { city: "Bengaluru", lines: ["No.105 – 105A, Prestige Terminus – 1,", "1st Floor, Old Airport Exit Road, Bengaluru – 560 017"], phone: "+91 80 2522 4422", email: "hello@growthally.org" },
  { city: "Kolkata", lines: ["Flat No. GF‑1, Ground Floor, Block B, Tivoli Court,", "1C, Ballygunge, Circular Road, Kolkata – 700 019"], phone: "+91 33 4064 7970", email: "hello@growthally.org" },
];

export default function ContactBlock(){
  return (
    <SectionBackground 
      config={assets.backgrounds.contact}
      className="py-16 md:py-24"
    >
      <Section id="contact" className="">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Get In Touch With Us</h2>
        <p className="mt-2 text-white/90">Drop your message along with contact details and we'll get back to you.</p>

        <div className="mt-6 grid lg:grid-cols-2 gap-8">
          <form className="rounded-xl2 border p-6 bg-white/95 backdrop-blur-sm grid gap-4">
            <input required placeholder="Your Name*" className="border rounded-lg px-4 py-2.5" />
            <input required placeholder="Your Mobile Number*" className="border rounded-lg px-4 py-2.5" />
            <input required placeholder="Your Email ID*" type="email" className="border rounded-lg px-4 py-2.5" />
            <textarea required placeholder="Type your message here" rows={5} className="border rounded-lg px-4 py-2.5" />
            <Button>Submit</Button>
          </form>

          <ul className="grid sm:grid-cols-2 gap-4">
            {OFFICES.map(o=> (
              <li key={o.city} className="rounded-xl2 border p-5 bg-white/95 backdrop-blur-sm">
                <div className="text-lg font-semibold">{o.city}</div>
                <div className="mt-2 text-sm text-neutralgray/80">{o.lines[0]}<br/>{o.lines[1]}</div>
                <div className="mt-2 text-sm">📞 {o.phone}</div>
                <div className="text-sm">✉️ {o.email}</div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </SectionBackground>
  );
}
