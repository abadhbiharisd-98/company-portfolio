import React, { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Printer, 
  ChevronDown, 
  Volume2, 
  VolumeX, 
  Sparkles,
  Layers
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function HeaderNav({ 
  currentSlideIndex, 
  totalSlides, 
  onJumpToSlide, 
  soundEnabled, 
  setSoundEnabled 
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentSection = portfolioData.sections[currentSlideIndex] || portfolioData.sections[0];
  const progressPercent = ((currentSlideIndex + 1) / totalSlides) * 100;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Top glowing blue progress line */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-slate-100 no-print">
        <div 
          className="h-full bg-brand-600 transition-all duration-300 shadow-[0_0_10px_rgba(23,105,255,0.7)]"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <header 
        className={`fixed top-[3px] left-0 right-0 z-40 transition-all duration-300 no-print ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-soft-sm' 
            : 'bg-white/80 backdrop-blur-md py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <button 
            onClick={() => onJumpToSlide(0)}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
            title="Black Grapes Softech - Slide 01"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 p-1 border border-slate-200 shadow-sm group-hover:border-brand-500 transition-colors flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Black Grapes Logo" 
                className="w-7 h-7 object-contain drop-shadow-sm"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '<span class="text-brand-600 font-display font-extrabold text-xs">BG</span>';
                }}
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-bold tracking-tight text-base sm:text-lg text-navy-900 group-hover:text-brand-600 transition-colors">
                  BLACK GRAPES
                </span>
                <span className="hidden md:inline-block text-[10px] uppercase font-mono tracking-widest px-2 py-0.5 rounded-full bg-blue-50 text-brand-600 border border-blue-200 font-semibold">
                  DECK 2026
                </span>
              </div>
              <span className="text-[11px] text-slate-500 tracking-wide font-sans hidden sm:block">
                Corporate Portfolio & Capabilities
              </span>
            </div>
          </button>

          {/* Center: Slide Index indicator & quick picker */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200 hover:border-brand-500 shadow-sm transition-all text-xs font-mono text-slate-700 cursor-pointer"
              title="Jump to Section"
            >
              <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse"></span>
              <span className="text-brand-600 font-bold">{currentSection.num}</span>
              <span className="text-slate-300">/</span>
              <span className="text-slate-500">10</span>
              <span className="hidden md:inline text-navy-900 font-sans font-medium pl-1.5 border-l border-slate-200">
                {currentSection.title}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 sm:w-80 rounded-2xl bg-white border border-slate-200 shadow-soft-lg p-2 z-50"
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="px-3 py-2 text-[10px] uppercase tracking-wider text-slate-500 border-b border-slate-100 font-mono flex items-center justify-between">
                  <span>Table of Contents</span>
                  <span className="text-brand-600 font-bold">10 Sections</span>
                </div>
                <div className="max-h-80 overflow-y-auto py-1 space-y-1">
                  {portfolioData.sections.map((sec, idx) => {
                    const isActive = idx === currentSlideIndex;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => {
                          onJumpToSlide(idx);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs transition-colors cursor-pointer ${
                          isActive 
                            ? 'bg-blue-50 text-brand-600 font-semibold border border-blue-200' 
                            : 'hover:bg-slate-50 text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`font-mono text-[11px] font-bold ${isActive ? 'text-brand-600' : 'text-slate-400'}`}>
                            {sec.num}
                          </span>
                          <span className="font-medium font-sans">
                            {sec.title}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                          {sec.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Action Tools: Fullscreen, Print Deck, Contact Quick link */}
          <div className="flex items-center gap-2">
            
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:border-brand-300 text-slate-500 hover:text-brand-600 shadow-sm transition-colors hidden sm:flex items-center justify-center cursor-pointer"
              title={soundEnabled ? "Mute Navigation Sound" : "Enable Subtle UI Audio"}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-brand-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {/* Print Deck Button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:border-brand-300 text-slate-500 hover:text-brand-600 shadow-sm transition-colors flex items-center justify-center cursor-pointer"
              title="Print / Save Deck as PDF"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:border-brand-300 text-slate-500 hover:text-brand-600 shadow-sm transition-colors hidden sm:flex items-center justify-center cursor-pointer"
              title={isFullscreen ? "Exit Fullscreen" : "Presentation Fullscreen Mode"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4 text-brand-600" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>

            {/* Quick Contact CTA */}
            <button
              onClick={() => onJumpToSlide(8)} // Jump to Contact Section
              className="ml-1 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-xs tracking-wide shadow-sm hover:shadow-soft-hover transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get in Touch</span>
            </button>
          </div>

        </div>
      </header>
    </>
  );
}
