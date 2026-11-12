import React from 'react';
import { 
  Briefcase, 
  Award, 
  ShieldAlert, 
  Users2, 
  Sparkles, 
  Clock,
  CheckCircle,
  Zap
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Briefcase: Briefcase,
  Award: Award,
  ShieldAlert: ShieldAlert,
  Users2: Users2,
  Sparkles: Sparkles,
  Clock: Clock
};

export default function WhyChooseUsSection() {
  const { whyChooseUs } = portfolioData;

  return (
    <section id="why-us" className="deck-section section-white">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 07</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">WHY CHOOSE BLACK GRAPES</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          THE STRATEGIC ADVANTAGE
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Title */}
        <div className="max-w-3xl">
          <div className="badge-blue mb-2">
            <span>Competitive Differentiation</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
            Enterprise Rigor, Boutique Dedication & <span className="text-brand-600">Zero Compromise</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal font-sans">
            Clients trust Black Grapes because we operate not as external vendors, but as deeply committed technical co-creators accountable for real business outcomes.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = iconMap[item.icon] || Briefcase;

            return (
              <div 
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 glass-card-hover shadow-soft-sm flex flex-col justify-between group relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-right">
                      <div className="text-base font-mono font-bold text-brand-600">
                        {item.stat}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base font-display font-bold text-navy-900 mb-2 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>PILLAR 0{idx + 1}</span>
                  <span className="text-brand-600 flex items-center gap-1 font-sans font-medium">
                    <CheckCircle className="w-3.5 h-3.5 text-brand-600" />
                    Verified Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Corporate Trust Statement Strip */}
        <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-brand-600 flex-shrink-0 shadow-2xs">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-navy-900">Our Quality Guarantee to Every Partner</div>
              <div className="text-[11px] text-slate-600 font-sans">Strict adherence to code maintainability, data encryption, and guaranteed uptime SLAs.</div>
            </div>
          </div>
          <span className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-white text-brand-700 border border-blue-200 shadow-2xs font-bold whitespace-nowrap">
            100% IP & Source Code Ownership
          </span>
        </div>

      </div>

    </section>
  );
}
