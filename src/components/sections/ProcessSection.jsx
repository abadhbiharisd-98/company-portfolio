import React, { useState } from 'react';
import { 
  Search, 
  FileSpreadsheet, 
  Code, 
  CheckCircle2, 
  Rocket, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

const stepIconMap = {
  Search: Search,
  FileSpreadsheet: FileSpreadsheet,
  Code: Code,
  CheckCircle2: CheckCircle2,
  Rocket: Rocket
};

export default function ProcessSection() {
  const [selectedStep, setSelectedStep] = useState(0);
  const { workProcess } = portfolioData;
  const currentProcess = workProcess[selectedStep];
  const StepIcon = stepIconMap[currentProcess.icon] || Code;

  return (
    <section id="process" className="deck-section section-alt">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 06</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">OUR WORK PROCESS</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          5-STAGE AGILE DELIVERY FRAMEWORK
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-8">
        
        {/* Title */}
        <div>
          <div className="badge-blue mb-2">
            <span>Rigorous Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
            From Blueprint to Reality: <span className="text-brand-600">How Black Grapes Delivers</span>
          </h2>
        </div>

        {/* 5-Step Process Timeline Selector Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {workProcess.map((proc, idx) => {
            const isSelected = selectedStep === idx;
            const Icon = stepIconMap[proc.icon] || Code;

            return (
              <button
                key={proc.step}
                onClick={() => setSelectedStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all border relative overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? 'bg-white border-brand-500 shadow-soft-md' 
                    : 'bg-white/70 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600'
                }`}
              >
                {/* Active indicator top bar */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-brand-600" />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold ${isSelected ? 'text-brand-600' : 'text-slate-400'}`}>
                    STAGE {proc.step}
                  </span>
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isSelected ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className={`text-xs font-display font-bold leading-snug line-clamp-2 ${isSelected ? 'text-navy-900' : 'text-slate-700'}`}>
                  {proc.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Inspector Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-soft-md relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Stage Information */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-600 shadow-2xs">
                  <StepIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-600 font-bold uppercase tracking-wider">
                    Stage {currentProcess.step} of 05
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-navy-900">
                    {currentProcess.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-mono text-brand-700 font-medium">
                {currentProcess.shortDesc}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                {currentProcess.description}
              </p>

              {/* Navigation within stages */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  disabled={selectedStep === 0}
                  onClick={() => setSelectedStep(s => Math.max(0, s - 1))}
                  className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 text-slate-700 font-medium cursor-pointer shadow-2xs"
                >
                  ← Previous Stage
                </button>
                <button
                  disabled={selectedStep === workProcess.length - 1}
                  onClick={() => setSelectedStep(s => Math.min(workProcess.length - 1, s + 1))}
                  className="px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-mono font-medium disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 cursor-pointer shadow-sm"
                >
                  <span>Next Stage</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Key Deliverables for this stage */}
            <div className="lg:col-span-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-600 font-bold mb-2 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                <span>Stage Milestone Deliverables</span>
              </div>

              {currentProcess.keyActivities.map((act, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 shadow-2xs">
                  <span className="w-5 h-5 rounded-md bg-blue-50 text-brand-600 border border-blue-200 flex items-center justify-center font-mono text-[10px] font-bold flex-shrink-0 mt-0.5">
                    {aIdx + 1}
                  </span>
                  <span className="font-medium">{act}</span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
