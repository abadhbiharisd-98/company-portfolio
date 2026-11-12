import React from 'react';
import { 
  Compass, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Lock, 
  Handshake, 
  TrendingUp, 
  CheckCircle,
  Quote
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Lightbulb: Lightbulb,
  ShieldCheck: ShieldCheck,
  Lock: Lock,
  Handshake: Handshake,
  TrendingUp: TrendingUp
};

export default function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="deck-section section-alt">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 02</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">ABOUT OUR COMPANY</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          ORGANIZATIONAL IDENTITY & PURPOSE
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-10">
        
        {/* Top: Who We Are & Founders Inspiration */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="badge-blue">
              <span>Company Introduction</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-navy-900 leading-tight">
              A Decade of Engineering Mastery, Built on <span className="text-brand-600">Unwavering Innovation</span>.
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
              {about.whoWeAre.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {about.whoWeAre.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Inspirational Quote Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 relative overflow-hidden shadow-soft-md">
              <Quote className="w-9 h-9 text-brand-500/30 mb-3" />
              <p className="text-base sm:text-lg text-navy-900 font-medium italic leading-relaxed mb-5">
                "At Black Grapes Softech, we don't just write code; we build the foundation for a better, smarter, and more connected world."
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-bold text-xs text-brand-600 font-mono shadow-2xs">
                  BG
                </div>
                <div>
                  <div className="text-xs font-semibold text-navy-900">Founding Philosophy</div>
                  <div className="text-[11px] text-brand-600 font-mono font-medium">Black Grapes Softech</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Middle: Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Vision */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-bold">Direction & Horizon</span>
                <h3 className="text-xl font-display font-bold text-navy-900">{about.vision.title}</h3>
              </div>
            </div>
            <div className="text-sm font-semibold text-brand-700 italic mb-3">
              "{about.vision.quote}"
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {about.vision.description}
            </p>
          </div>

          {/* Mission */}
          <div className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 shadow-2xs">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-600 font-bold">Action & Commitment</span>
                <h3 className="text-xl font-display font-bold text-navy-900">{about.mission.title}</h3>
              </div>
            </div>
            <div className="text-sm font-semibold text-brand-700 italic mb-3">
              "{about.mission.quote}"
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              {about.mission.description}
            </p>
          </div>

        </div>

        {/* Bottom: Core Values */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-600 font-bold">Core Pillars</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500 font-medium">Guiding Every Line of Code</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {about.coreValues.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Lightbulb;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-600 mb-3">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-semibold text-navy-900 mb-1.5 font-display">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400 font-medium">
                    <span>PILLAR</span>
                    <span className="text-brand-600 font-bold">0{idx + 1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

    </section>
  );
}
