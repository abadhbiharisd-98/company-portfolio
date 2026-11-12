import React from 'react';
import { 
  Sparkles, 
  ArrowUp, 
  Printer, 
  Mail, 
  Phone, 
  ChevronRight
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function ClosingSection({ onRestart, onJumpToSlide }) {
  const { company } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <section 
      id="closing" 
      className="deck-section section-alt flex flex-col justify-between pt-24 pb-16 relative overflow-hidden"
    >
      {/* Background subtle blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[450px] bg-gradient-to-b from-blue-100/60 via-blue-50/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 10</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">CLOSING PRESENTATION</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          END OF PRESENTATION DECK
        </div>
      </div>

      {/* Main Center Call to Action Card */}
      <div className="max-w-4xl mx-auto my-auto text-center relative z-10 py-6">
        
        {/* Brand Seal */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-mono uppercase tracking-widest mb-6 shadow-2xs font-bold">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          <span>Strategic Partnership & Growth</span>
        </div>

        {/* Master Closing Statement */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-navy-900 mb-6 uppercase leading-tight">
          LET'S BUILD SOMETHING <br />
          <span className="text-brand-600">GREAT TOGETHER</span>
        </h2>

        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8 font-sans">
          Turn your strategic vision into resilient, market-dominating software. From technical blueprints to global scale, Black Grapes Softech delivers with unmatched craftsmanship, speed, and integrity.
        </p>

        {/* Quick Contact & Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${company.email}?subject=Partnership%20Inquiry%20-%20Black%20Grapes`}
            className="px-7 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm tracking-wide shadow-sm hover:shadow-soft-hover transition-all flex items-center gap-2 group cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Initiate Partnership Inquiry</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={handlePrint}
            className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-navy-900 font-medium text-sm tracking-wide shadow-sm transition-all flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4 text-brand-600" />
            <span>Download Presentation (PDF)</span>
          </button>

          <button
            onClick={onRestart}
            className="px-6 py-4 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 hover:text-navy-900 font-medium text-sm tracking-wide shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            title="Return to Slide 01"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Restart Presentation</span>
          </button>
        </div>

        {/* Corporate Signature Badge */}
        <div className="inline-block p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 max-w-lg mx-auto text-center shadow-soft-sm">
          <div className="font-display font-bold text-xl text-navy-900 tracking-wider mb-1">
            {company.name}
          </div>
          <div className="text-xs font-mono text-brand-600 uppercase tracking-widest mb-3 font-semibold">
            {company.legalName} • Corporate Portfolio
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 font-mono">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-brand-600" />
              {company.email}
            </span>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              {company.phones[0]}
            </span>
          </div>
        </div>

      </div>

      {/* Slide Footer */}
      <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-3 relative z-10">
        <div>
          &copy; {company.presentationYear} {company.legalName}. All Rights Reserved.
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>PRESENTATION DECK EDITION 2026</span>
          <span className="text-brand-600 font-semibold">CONFIDENTIAL CORPORATE BRIEF</span>
        </div>
      </div>

    </section>
  );
}
