import React, { useState } from 'react';
import { 
  Code2, 
  Smartphone, 
  Globe, 
  UserCheck, 
  GitFork, 
  Gamepad2, 
  TrendingUp, 
  Palette, 
  Briefcase,
  ChevronRight,
  Check
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Smartphone: Smartphone,
  Globe: Globe,
  UserCheck: UserCheck,
  GitFork: GitFork,
  Gamepad2: Gamepad2,
  TrendingUp: TrendingUp,
  Palette: Palette,
  Briefcase: Briefcase
};

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Services (9)' },
    { id: 'engineering', label: 'Software & Mobile' },
    { id: 'specialized', label: 'CRM & MLM' },
    { id: 'creative', label: 'Design & Marketing' },
    { id: 'enterprise', label: 'Staffing & Tenders' }
  ];

  const filteredServices = portfolioData.services.filter(s => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'engineering') return ['software-dev', 'mobile-dev', 'web-dev'].includes(s.id);
    if (activeCategory === 'specialized') return ['crm-dev', 'mlm-dev', 'game-dev'].includes(s.id);
    if (activeCategory === 'creative') return ['digital-marketing', 'ui-ux'].includes(s.id);
    if (activeCategory === 'enterprise') return ['tendering-staffing'].includes(s.id);
    return true;
  });

  return (
    <section id="services" className="deck-section section-white">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 03</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">OUR SERVICES</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          END-TO-END TECHNICAL CAPABILITIES
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* Title & Filter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="badge-blue mb-2">
              <span>Full-Spectrum Solutions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
              Enterprise Technology <span className="text-brand-600">Engineered for Impact</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:text-navy-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = iconMap[service.icon] || Code2;

            return (
              <div 
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200 p-6 flex flex-col justify-between group glass-card-hover shadow-soft-sm relative overflow-hidden"
              >
                {/* Subtle corner gradient */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full pointer-events-none group-hover:from-blue-100/60 transition-all" />

                <div>
                  {/* Top card bar: Number + Icon + Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                        {service.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-lg font-display font-bold text-navy-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-600 font-medium mb-3">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-sans">
                    {service.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Key Deliverables
                    </span>
                    {service.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                        <span className="font-medium">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-medium">
                    Category: {service.category}
                  </span>
                  <div className="flex items-center gap-1 text-brand-600 group-hover:translate-x-1 transition-transform font-semibold">
                    <span className="text-[11px]">SLA Backed</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
