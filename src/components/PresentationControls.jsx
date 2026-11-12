import React, { useState, useEffect } from 'react';
import { ChevronUp, ChevronDown, Play, Pause } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PresentationControls({
  currentSlideIndex,
  totalSlides,
  onPrevSlide,
  onNextSlide,
  onJumpToSlide
}) {
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        onNextSlide();
      }, 7000); // 7 seconds per slide in auto presentation mode
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, onNextSlide]);

  return (
    <aside aria-label="Deck Navigation Controls" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 no-print flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-white/95 border border-slate-200 shadow-soft-lg backdrop-blur-md">
      
      {/* Previous Slide Button */}
      <button
        onClick={onPrevSlide}
        disabled={currentSlideIndex === 0}
        className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
          currentSlideIndex === 0
            ? 'opacity-30 cursor-not-allowed text-slate-400'
            : 'hover:bg-slate-100 text-slate-700 hover:text-brand-600'
        }`}
        title="Previous Slide (Arrow Up / Left)"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Slide Dots / Counter */}
      <div className="flex items-center gap-1 sm:gap-1.5 px-2">
        {portfolioData.sections.map((sec, idx) => {
          const isActive = idx === currentSlideIndex;
          return (
            <button
              key={sec.id}
              onClick={() => onJumpToSlide(idx)}
              className="group relative py-1 focus:outline-none cursor-pointer"
              title={`Slide ${sec.num}: ${sec.title}`}
            >
              <div 
                className={`transition-all duration-300 rounded-full ${
                  isActive 
                    ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-brand-600 shadow-sm' 
                    : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-slate-200 hover:bg-slate-300 group-hover:scale-125'
                }`}
              />
              {/* Tooltip on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block whitespace-nowrap px-2.5 py-1 rounded-lg bg-navy-900 border border-navy-800 text-[11px] font-mono text-white pointer-events-none shadow-soft-lg z-50">
                <span className="text-blue-400 font-bold mr-1">{sec.num}</span> {sec.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Next Slide Button */}
      <button
        onClick={onNextSlide}
        disabled={currentSlideIndex === totalSlides - 1}
        className={`p-2 rounded-xl transition-all flex items-center justify-center cursor-pointer ${
          currentSlideIndex === totalSlides - 1
            ? 'opacity-30 cursor-not-allowed text-slate-400'
            : 'hover:bg-slate-100 text-slate-700 hover:text-brand-600'
        }`}
        title="Next Slide (Arrow Down / Right / Space)"
      >
        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Separator */}
      <div className="w-[1px] h-6 bg-slate-200 mx-0.5 sm:mx-1 hidden sm:block" />

      {/* Auto-presentation toggle */}
      <button
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className={`p-2 rounded-xl text-xs font-mono transition-colors hidden sm:flex items-center gap-1.5 cursor-pointer ${
          isAutoPlaying 
            ? 'bg-blue-50 text-brand-600 border border-blue-200 font-semibold' 
            : 'hover:bg-slate-100 text-slate-600 hover:text-brand-600'
        }`}
        title={isAutoPlaying ? "Pause Auto Deck Playback" : "Start Auto Presentation (7s per slide)"}
      >
        {isAutoPlaying ? (
          <>
            <Pause className="w-3.5 h-3.5 text-brand-600" />
            <span className="text-[10px]">Autoplay</span>
          </>
        ) : (
          <>
            <Play className="w-3.5 h-3.5" />
            <span className="text-[10px]">Autoplay</span>
          </>
        )}
      </button>

      {/* Keyboard Hint Pill */}
      <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-[10px] text-slate-600 font-mono">
        <span>Use</span>
        <kbd className="px-1 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs">↑</kbd>
        <kbd className="px-1 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs">↓</kbd>
      </div>

    </aside>
  );
}
