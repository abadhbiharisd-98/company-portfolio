import React, { useState } from 'react';
import { 
  Layout, 
  Server, 
  Smartphone, 
  Database, 
  Cloud, 
  Cpu, 
  Activity, 
  ShoppingBag, 
  Truck, 
  Navigation, 
  GraduationCap, 
  Building2,
  CheckCircle2,
  Shield,
  Layers
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const techIconMap = {
  Layout: Layout,
  Server: Server,
  Smartphone: Smartphone,
  Database: Database,
  Cloud: Cloud,
  Cpu: Cpu
};

const industryIconMap = {
  Activity: Activity,
  ShoppingBag: ShoppingBag,
  Truck: Truck,
  Navigation: Navigation,
  GraduationCap: GraduationCap,
  Building2: Building2
};

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState('technical');
  const { expertise } = portfolioData;

  return (
    <section id="expertise" className="deck-section section-alt">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 04</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">OUR EXPERTISE</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          TECHNICAL • ARCHITECTURAL • DOMAIN
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Header & Interactive Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="badge-blue mb-2">
              <span>Deep Technical Depth</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
              Multi-Disciplinary <span className="text-brand-600">Engineering Proficiency</span>
            </h2>
          </div>

          {/* View Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white border border-slate-200 shadow-soft-sm">
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'technical'
                  ? 'bg-brand-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Tech Stack</span>
            </button>

            <button
              onClick={() => setActiveTab('business')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-brand-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>Business & Process</span>
            </button>

            <button
              onClick={() => setActiveTab('industries')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                activeTab === 'industries'
                  ? 'bg-brand-600 text-white font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Industries</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Technical Stack & Capabilities */}
        {activeTab === 'technical' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.technical.map((tech, idx) => {
                const Icon = techIconMap[tech.icon] || Cpu;
                return (
                  <div 
                    key={idx}
                    className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-display font-bold text-navy-900 text-base">
                          {tech.category}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {tech.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 hover:border-brand-300 text-xs text-slate-700 font-mono transition-colors font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500 font-medium">
                      <span>ENTERPRISE GRADE</span>
                      <span className="text-brand-600 font-bold">2026 READY</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Tech Logo Badges Bar */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-soft-sm flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-600">
              <span className="text-brand-600 font-bold">INTEGRATED ECOSYSTEM:</span>
              <span>React • Next.js • Flutter • Node.js • Python • PostgreSQL • AWS • Docker • GraphQL • Redis</span>
            </div>
          </div>
        )}

        {/* Tab 2: Business Capabilities */}
        {activeTab === 'business' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.business.map((biz, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 font-mono font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-display font-bold text-navy-900">
                    {biz.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                  {biz.desc}
                </p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-brand-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-brand-600" />
                  <span>Guaranteed Corporate SLA & Milestone Tracking</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Industries */}
        {activeTab === 'industries' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.industries.map((ind, idx) => {
              const Icon = industryIconMap[ind.icon] || Building2;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-brand-300 shadow-soft-sm hover:shadow-soft-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 mb-4 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-navy-900 text-lg mb-1.5">
                      {ind.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500 font-medium">
                    <span>SECTOR</span>
                    <span className="text-brand-600 font-bold">ACTIVE DEPLOYMENT</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

    </section>
  );
}
