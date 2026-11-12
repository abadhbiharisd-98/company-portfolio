import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Activity,
  Code2,
  Lock
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function CoverSection({ onNext, onJumpToSlide }) {
  const { company } = portfolioData;

  return (
    <section 
      id="cover" 
      className="deck-section section-white presentation-grid overflow-hidden flex flex-col justify-between pt-28 pb-16 relative"
    >
      {/* Subtle blue light accent in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-b from-blue-100/60 via-blue-50/30 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 -left-20 w-80 h-80 bg-blue-50/50 blur-[100px] pointer-events-none rounded-full" />

      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
          </span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 01</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold hidden sm:inline">
            EXECUTIVE COVER & CORPORATE IDENTITY
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500 text-[11px] font-mono hidden sm:inline">PRESENTATION YEAR</span>
          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-700 border border-blue-200 font-mono font-bold text-xs shadow-2xs">
            {company.presentationYear}
          </span>
        </div>
      </div>

      {/* Main Hero Split Presentation */}
      <div className="max-w-7xl mx-auto w-full my-auto relative z-10 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column (Col 7): Brand Identity & Powerful Corporate Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-brand-700 text-xs font-mono tracking-wider uppercase font-semibold shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Innovate • Integrate • Elevate</span>
            </div>

            {/* Brand Title */}
            <div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-navy-900 leading-none mb-2">
                BLACK <span className="text-brand-600">GRAPES</span>
              </h1>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-slate-500 uppercase font-semibold">
                <span>{company.legalName}</span>
                <span className="text-slate-300">•</span>
                <span>IT & Software Development</span>
              </div>
            </div>

            {/* Powerful Professional Headline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-semibold text-navy-900 leading-snug">
              Engineering Enterprise Software, Intelligent Platforms & <span className="text-brand-600 underline decoration-blue-200 underline-offset-8">Scalable Digital Realities</span>.
            </h2>

            {/* Crisp Corporate Introduction */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl font-sans">
              With over a decade of proven technical excellence, Black Grapes Softech delivers mission-critical software, high-performance mobile applications, and resilient cloud architectures tailored for high-growth enterprises and industry leaders.
            </p>

            {/* Interactive Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onNext}
                className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-medium text-sm tracking-wide shadow-sm hover:shadow-soft-hover transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Explore Capabilities Deck</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onJumpToSlide(4)} // Jump to Projects
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-brand-300 text-slate-700 hover:text-brand-600 font-medium text-sm tracking-wide shadow-sm transition-all flex items-center gap-2 group cursor-pointer"
              >
                <Layers className="w-4 h-4 text-brand-600 group-hover:scale-110 transition-transform" />
                <span>Review Projects</span>
              </button>
            </div>

            {/* Corporate Assurance Badges */}
            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                <span>100% IP Ownership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>Enterprise NDA Protected</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-600" />
                <span>Agile Delivery Governance</span>
              </div>
            </div>

          </div>

          {/* Right Column (Col 5): Clean Corporate Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-soft-lg hover:border-brand-300 transition-all">
              
              {/* Subtle top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-600 to-blue-400 rounded-t-3xl" />

              {/* Card Header (Console style) */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="ml-2 font-mono text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
                    BLACK_GRAPES_CORE_SYS
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE • 99.9%</span>
                </div>
              </div>

              {/* Central Logo & Visual Crest */}
              <div className="text-center py-4 relative">
                <div className="relative inline-block mb-3">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 border border-slate-200 p-3 flex items-center justify-center shadow-soft-sm mx-auto">
                    <img 
                      src="/logo.png" 
                      alt="Black Grapes Softech" 
                      className="w-full h-full object-contain drop-shadow-sm"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = '<span class="text-3xl font-display font-extrabold text-brand-600">BG</span>';
                      }}
                    />
                  </div>
                </div>

                <h3 className="font-display font-bold text-lg text-navy-900">
                  Black Grapes Softech
                </h3>
                <p className="text-xs font-mono text-brand-600 font-semibold">
                  Enterprise Software • Web • Mobile • Cloud
                </p>
              </div>

              {/* Capabilities Telemetry Strip */}
              <div className="space-y-2.5 my-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Code2 className="w-3.5 h-3.5 text-brand-600" />
                    <span>Custom Enterprise Solutions</span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                    ERP / API
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Globe className="w-3.5 h-3.5 text-brand-600" />
                    <span>Web & Cross-Platform Mobile</span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                    iOS / Android
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <Lock className="w-3.5 h-3.5 text-brand-600" />
                    <span>Secured High-Throughput Engines</span>
                  </div>
                  <span className="font-mono text-[10px] text-brand-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-semibold">
                    CRM / MLM
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 font-medium">
                <span>HEADQUARTERS: INDORE, INDIA</span>
                <span className="text-brand-600 font-bold">2026 DECK</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Corporate Metrics Strip (Bottom of Cover) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-slate-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {company.metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-center text-center group"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-brand-600 mb-1 group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-slate-600 uppercase tracking-wider font-semibold">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
