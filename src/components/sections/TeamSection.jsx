import React from 'react';
import { Sparkles, Cpu } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function TeamSection() {
  const { team } = portfolioData;

  return (
    <section id="team" className="deck-section section-alt">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 08</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">OUR TEAM</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          LEADERSHIP & ENGINEERING TALENT
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Title */}
        <div className="max-w-3xl">
          <div className="badge-blue mb-2">
            <span>The Minds Behind Black Grapes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
            Visionary Leadership & <span className="text-brand-600">Elite Technical Pods</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal font-sans">
            Behind every enterprise deliverable is our interdisciplinary team of seasoned software architects, design thinkers, and engineering strategists.
          </p>
        </div>

        {/* Executive Founders Spotlight (Top 2 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.slice(0, 2).map((member, idx) => (
            <div 
              key={idx}
              className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 transition-all relative overflow-hidden shadow-soft-sm hover:shadow-soft-md group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-4">
                {/* Monogram / Avatar with soft blue styling */}
                <div className="relative w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex-shrink-0 shadow-2xs flex items-center justify-center">
                  <span className="font-display font-black text-xl text-brand-600">
                    {member.initials}
                  </span>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-600 border-2 border-white flex items-center justify-center shadow-xs">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                </div>

                <div>
                  <div className="badge-blue text-[10px] mb-1 font-mono">
                    FOUNDING LEADERSHIP
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900 group-hover:text-brand-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs font-mono text-brand-600 font-semibold">
                    {member.designation}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 font-sans">
                {member.bio}
              </p>

              {/* Core focus pills */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {member.expertise.map((exp, eIdx) => (
                  <span key={eIdx} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">
                    {exp}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Leadership & Core Pod Roles (Bottom 4 cards) */}
        <div>
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4 flex items-center gap-2 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-brand-600" />
            <span>Core Engineering Pods & Domain Leads</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(2).map((member, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-300 glass-card-hover shadow-soft-sm flex flex-col justify-between"
              >
                <div>
                  {/* Monogram placeholder */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center font-display font-bold text-sm text-brand-600 mb-3 shadow-2xs">
                    {member.initials}
                  </div>

                  <h4 className="text-sm font-display font-bold text-navy-900 mb-0.5">
                    {member.name}
                  </h4>
                  <div className="text-xs font-mono text-brand-600 font-medium mb-2">
                    {member.designation}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3 font-sans">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {member.expertise.map((exp, eIdx) => (
                    <span key={eIdx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[9px] font-mono text-slate-600 font-medium">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
