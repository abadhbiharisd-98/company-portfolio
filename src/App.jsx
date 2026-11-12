import React, { useState, useEffect, useRef, useCallback } from 'react';
import HeaderNav from './components/HeaderNav';
import PresentationControls from './components/PresentationControls';
import CoverSection from './components/sections/CoverSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ExpertiseSection from './components/sections/ExpertiseSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ProcessSection from './components/sections/ProcessSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';
import ClosingSection from './components/sections/ClosingSection';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const isProgrammaticScroll = useRef(false);
  const audioContextRef = useRef(null);

  const sections = portfolioData.sections;
  const totalSlides = sections.length;

  // Web Audio subtle presentation click sound
  const playClickSound = useCallback(() => {
    if (!soundEnabled) return;
    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      const ctx = audioContextRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5 note
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08); // A5 note
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.09);
    } catch (e) {
      // Audio not supported or blocked
    }
  }, [soundEnabled]);

  // Jump to specific slide
  const jumpToSlide = useCallback((index) => {
    if (index < 0 || index >= totalSlides) return;
    setCurrentSlideIndex(index);
    playClickSound();

    const targetSection = sections[index];
    const elem = document.getElementById(targetSection.id);
    if (elem) {
      isProgrammaticScroll.current = true;
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);
    }
  }, [sections, totalSlides, playClickSound]);

  const nextSlide = useCallback(() => {
    if (currentSlideIndex < totalSlides - 1) {
      jumpToSlide(currentSlideIndex + 1);
    }
  }, [currentSlideIndex, totalSlides, jumpToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlideIndex > 0) {
      jumpToSlide(currentSlideIndex - 1);
    }
  }, [currentSlideIndex, jumpToSlide]);

  // Keyboard navigation for presentation deck experience
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in form inputs
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        jumpToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        jumpToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, jumpToSlide, totalSlides]);

  // Track active section via IntersectionObserver on continuous scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersect = (entries) => {
      if (isProgrammaticScroll.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const matchingIndex = sections.findIndex(sec => sec.id === entry.target.id);
          if (matchingIndex !== -1) {
            setCurrentSlideIndex(matchingIndex);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col relative selection:bg-brand-600 selection:text-white font-sans">
      
      {/* Top Header Navigation */}
      <HeaderNav 
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onJumpToSlide={jumpToSlide}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Main Presentation Deck Content */}
      <main className="flex-1">
        {/* Section 01: Cover / Introduction (Clean White) */}
        <CoverSection 
          onNext={nextSlide} 
          onJumpToSlide={jumpToSlide} 
        />

        {/* Section 02: About Our Company (Light Grey #F5F7FA) */}
        <AboutSection />

        {/* Section 03: Our Services (Clean White) */}
        <ServicesSection 
          onSelectService={() => jumpToSlide(8)} 
        />

        {/* Section 04: Our Expertise (Light Grey #F5F7FA) */}
        <ExpertiseSection />

        {/* Section 05: Our Projects (Clean White) */}
        <ProjectsSection />

        {/* Section 06: Our Work Process (Light Grey #F5F7FA) */}
        <ProcessSection />

        {/* Section 07: Why Choose Black Grapes? (Clean White) */}
        <WhyChooseUsSection />

        {/* Section 08: Our Team (Light Grey #F5F7FA) */}
        <TeamSection />

        {/* Section 09: Contact & Company Information (Clean White) */}
        <ContactSection />

        {/* Section 10: Closing Presentation (Light Grey #F5F7FA) */}
        <ClosingSection 
          onRestart={() => jumpToSlide(0)} 
          onJumpToSlide={jumpToSlide}
        />
      </main>

      {/* Floating Presentation Controls */}
      <PresentationControls
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onJumpToSlide={jumpToSlide}
      />

    </div>
  );
}
