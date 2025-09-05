'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export interface BackgroundConfig {
  image?: string;
  images?: string[];
  effect: string;
  parallax_speed?: number;
  zoom_range?: [number, number];
  blur_range?: [number, number];
  opacity_range?: [number, number];
  translate_y_range?: number[];
  clip_path_range?: [string, string];
  sticky?: boolean;
  sticky_height?: string;
  spotlight?: boolean;
  speed?: number;
  overlay?: {
    color: string;
    end_opacity?: number;
  };
  default_image?: string;
}

interface SectionBackgroundProps {
  config: BackgroundConfig;
  children: React.ReactNode;
  activeIndex?: number; // For testimonials cross-fade
  className?: string;
}

const SectionBackground: React.FC<SectionBackgroundProps> = ({
  config,
  children,
  activeIndex = 0,
  className = ''
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [progress, setProgress] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || prefersReducedMotion) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;
      
      setScrollY(scrollTop);
      
      // Check if section is in view
      const inView = rect.top < windowHeight && rect.bottom > 0;
      setIsInView(inView);
      
      // Calculate progress through the section
      const sectionTop = scrollTop - (sectionRef.current.offsetTop - windowHeight);
      const sectionHeight = sectionRef.current.offsetHeight + windowHeight;
      const sectionProgress = Math.max(0, Math.min(1, sectionTop / sectionHeight));
      setProgress(sectionProgress);
    };

    handleScroll(); // Initial call
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReducedMotion]);

  const getBackgroundStyles = (): React.CSSProperties => {
    if (prefersReducedMotion) {
      return {
        transform: 'none',
        filter: 'none',
        clipPath: 'none',
        opacity: 1
      };
    }

    const styles: React.CSSProperties = {};

    switch (config.effect) {
      case 'parallax_zoom_overlay':
        if (config.parallax_speed) {
          styles.transform = `translateY(${scrollY * (config.parallax_speed / 100)}px)`;
        }
        if (config.zoom_range) {
          const zoomProgress = Math.min(progress * 1.25, 1); // Zoom in first 80% of scroll
          const scale = config.zoom_range[0] + (config.zoom_range[1] - config.zoom_range[0]) * zoomProgress;
          styles.transform = `${styles.transform || ''} scale(${scale})`;
        }
        break;

      case 'parallax_fade_unblur':
        if (config.parallax_speed) {
          styles.transform = `translateY(${scrollY * (config.parallax_speed / 100)}px)`;
        }
        if (config.blur_range && isInView) {
          const blur = config.blur_range[0] + (config.blur_range[1] - config.blur_range[0]) * progress;
          styles.filter = `blur(${Math.max(0, blur)}px)`;
        }
        if (config.opacity_range && isInView) {
          const opacity = config.opacity_range[0] + (config.opacity_range[1] - config.opacity_range[0]) * progress;
          styles.opacity = Math.max(0, Math.min(1, opacity));
        }
        break;

      case 'sticky_slide':
        if (config.translate_y_range) {
          const translateY = config.translate_y_range[0] + (config.translate_y_range[1] - config.translate_y_range[0]) * progress;
          styles.transform = `translateY(${translateY}px)`;
        }
        break;

      case 'parallax_spotlight':
      case 'parallax_overlay':
        if (config.parallax_speed) {
          styles.transform = `translateY(${scrollY * (config.parallax_speed / 100)}px)`;
        }
        break;

      case 'clip_path_reveal':
        if (config.clip_path_range && isInView) {
          // Simple interpolation for clip-path (this is a simplified version)
          const clipProgress = Math.min(progress * 1.5, 1);
          if (clipProgress < 1) {
            styles.clipPath = config.clip_path_range[0];
          } else {
            styles.clipPath = config.clip_path_range[1];
          }
        }
        if (config.translate_y_range && isInView) {
          const translateY = config.translate_y_range[0] + (config.translate_y_range[1] - config.translate_y_range[0]) * progress;
          styles.transform = `translateY(${translateY}px)`;
        }
        if (config.opacity_range && isInView) {
          const opacity = config.opacity_range[0] + (config.opacity_range[1] - config.opacity_range[0]) * progress;
          styles.opacity = Math.max(0, Math.min(1, opacity));
        }
        break;

      case 'marquee':
        // The marquee effect is handled by CSS animation on the container and duplicated images
        break;
    }

    return styles;
  };

  const getOverlayStyles = (): React.CSSProperties => {
    if (prefersReducedMotion || !config.overlay) return {};

    const baseOpacity = config.overlay.color.includes('rgba') 
      ? parseFloat(config.overlay.color.split(',')[3].replace(')', '').trim())
      : 1;

    if (config.effect === 'parallax_zoom_overlay' && config.overlay.end_opacity !== undefined) {
      const opacity = baseOpacity + (config.overlay.end_opacity - baseOpacity) * progress;
      return {
        backgroundColor: config.overlay.color.replace(/rgba?\([^)]+\)/, `rgba(30, 58, 138, ${opacity})`),
      };
    }

    return {
      backgroundColor: config.overlay.color,
    };
  };

  const getCurrentImage = () => {
    if (config.effect === 'cross_fade' && config.images) {
      return config.images[activeIndex] || config.default_image || config.images[0];
    }
    return config.image || config.default_image;
  };

  const sectionClasses = `relative overflow-hidden ${className}`;
  const backgroundClasses = `absolute inset-0 w-full h-full ${config.sticky ? 'sticky top-0' : ''} ${config.effect === 'marquee' ? 'flex' : ''}`;

  return (
    <div 
      ref={sectionRef} 
      className={sectionClasses}
      style={{
        minHeight: config.sticky ? config.sticky_height : 'auto'
      }}
    >
      <div 
        ref={backgroundRef}
        className={backgroundClasses}
        style={getBackgroundStyles()}
      >
        {config.effect === 'marquee' && config.images && config.images.length > 0 ? (
          <div className="w-full h-full flex animate-marquee" style={{ animationDuration: `${config.speed || 30}s` }}>
            {config.images.concat(config.images).map((src, index) => (
              <div key={index} className="relative flex-shrink-0 w-full h-full">
                <Image
                  src={src}
                  alt={`Background ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={true}
                />
              </div>
            ))}
          </div>
        ) : (
          getCurrentImage() && (
            <Image
              src={getCurrentImage()!}
              alt="Section background"
              fill
              style={{ objectFit: 'cover' }}
              priority={config.effect === 'parallax_zoom_overlay'} // Prioritize hero image
            />
          )
        )}
        {config.overlay && (
          <div 
            className="absolute inset-0"
            style={getOverlayStyles()}
          />
        )}
      </div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default SectionBackground;
