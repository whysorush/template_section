'use client';

import { Section } from "./ui";
import SectionBackground from "./SectionBackground";
import assets from '../assets.json';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Testimonials(){
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-rotate background images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % assets.backgrounds.testimonials.images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % assets.testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to current testimonial
  useEffect(() => {
    if (scrollRef.current) {
      const cardWidth = 400; // Approximate card width
      const gap = 24; // Gap between cards
      const scrollPosition = currentTestimonial * (cardWidth + gap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [currentTestimonial]);

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? assets.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % assets.testimonials.length);
  };

  return (
    <SectionBackground 
      config={assets.backgrounds.testimonials}
      activeIndex={activeIndex}
      className="py-16 md:py-24"
    >
      <Section id="testimonials">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </div>

        {/* 3D Card Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-8 py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {assets.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-96 h-80 perspective-1000 transition-all duration-500 ${
                  index === currentTestimonial ? 'scale-105' : 'scale-90 opacity-50'
                }`}
                style={{ scrollSnapAlign: 'center' }}
              >
                <div className="relative w-full h-full transform-gpu transition-transform duration-700 hover:rotateY-12 preserve-3d">
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 flex flex-col">
                    {testimonial.type === 'video' ? (
                      <div className="flex-1 flex flex-col">
                        {/* Video Thumbnail */}
                        <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={testimonial.thumbnail || '/placeholder-video.jpg'}
                            alt={testimonial.title || 'Video testimonial'}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                              <svg className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-primary mb-2">
                          {testimonial.title}
                        </h3>
                        
                        <div className="mt-auto">
                          <div className="flex items-center gap-3">
                            {testimonial.company_logo && (
                              <Image
                                src={testimonial.company_logo}
                                alt="Company logo"
                                width={40}
                                height={40}
                                className="rounded"
                              />
                            )}
                            <div>
                              <div className="font-semibold text-gray-800">
                                {testimonial.client_name}
                              </div>
                              <div className="text-sm text-gray-600">
                                {testimonial.position}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex-1 flex flex-col">
                        {/* Text Testimonial */}
                        <div className="flex-1 mb-4">
                          <blockquote className="text-gray-800 leading-relaxed text-lg italic">
                            "{testimonial.content}"
                          </blockquote>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          {testimonial.image && (
                            <Image
                              src={testimonial.image}
                              alt={testimonial.client_name}
                              width={50}
                              height={50}
                              className="rounded-full"
                            />
                          )}
                          {testimonial.company_logo && (
                            <Image
                              src={testimonial.company_logo}
                              alt="Company logo"
                              width={40}
                              height={40}
                              className="rounded"
                            />
                          )}
                          <div>
                            <div className="font-semibold text-gray-800">
                              {testimonial.client_name}
                            </div>
                            <div className="text-sm text-gray-600">
                              {testimonial.position}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {assets.testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </Section>
    </SectionBackground>
  );
}
