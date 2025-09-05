'use client';
import { Section } from "./ui";
import SectionBackground, { BackgroundConfig } from "./SectionBackground";
import assets from '../assets.json';
import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin: string;
}

export default function AboutBlock(){
  const [selectedEmployee, setSelectedEmployee] = useState<TeamMember | null>(null);

  return (
    <SectionBackground 
      config={assets.backgrounds.about as BackgroundConfig}
      className="py-16 md:py-24 bg-white/95"
    >
      <Section id="about">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">We Are GrowthAlly</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-8 items-start">
            <div className="prose max-w-none text-gray-800">
              <p className="text-lg leading-relaxed mb-6">For over 15 years, we have specialized in investment banking and advisory services across industries such as Pharma, Healthcare, IT, Liability & BFSI. With in‑depth experience in Indian businesses and promoter groups, our team brings an entrepreneurial mindset and client‑first approach.</p>
              <h3 id="vision" className="text-primary text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700 mb-6">To be the most preferred financial services firm trusted for customized and structured financing solutions through innovation and integrity.</p>
              <h3 className="text-primary text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">To act as a dedicated and trusted financial advisor for strategic business needs and build enduring, successful client relationships.</p>
            </div>
            <div className="grid gap-4">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Leadership Team</h3>
              {assets.team_members.map((employee, index)=>(
                <div key={index} className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all flex items-center space-x-4">
                  <Image
                    src={employee.image}
                    alt={employee.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-primary">{employee.name}</div>
                    <div className="text-sm text-gray-600 mb-2">{employee.position}</div>
                    <button 
                      onClick={() => setSelectedEmployee(employee)}
                      className="text-sm text-secondary hover:text-secondary/80 font-semibold transition-colors"
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Employee Details Sidebar */}
      {selectedEmployee && (
        <div className="fixed inset-0 bg-black/50 z-50 flex">
          <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-2xl transform transition-transform">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-primary">Team Member</h3>
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Image
                    src={selectedEmployee.image}
                    alt={selectedEmployee.name}
                    width={80}
                    height={80}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-primary">{selectedEmployee.name}</h4>
                    <p className="text-secondary font-semibold">{selectedEmployee.position}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">Biography</h5>
                  <p className="text-gray-600 leading-relaxed">{selectedEmployee.bio}</p>
                </div>

                {selectedEmployee.linkedin && (
                  <div>
                    <h5 className="font-semibold text-gray-800 mb-2">LinkedIn</h5>
                    <a 
                      href={selectedEmployee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:underline"
                    >
                      {selectedEmployee.linkedin}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div 
            className="flex-1" 
            onClick={() => setSelectedEmployee(null)}
          ></div>
        </div>
      )}
    </SectionBackground>
  );
}
