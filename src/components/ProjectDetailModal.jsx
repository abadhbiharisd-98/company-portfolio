import React from 'react';
import { X, ExternalLink, Check, Code, Layers, Calendar, User, Globe } from 'lucide-react';

export default function ProjectDetailModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in no-print">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-soft-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-navy-900 transition-colors border border-slate-200 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="badge-blue font-mono">
            {project.category}
          </span>
          <span className="badge-gray font-mono">
            DELIVERED {project.year}
          </span>
          {project.domain && (
            <span className="inline-flex items-center gap-1 text-xs text-brand-600 font-mono font-medium">
              <Globe className="w-3.5 h-3.5" />
              {project.domain}
            </span>
          )}
        </div>

        {/* Title & Tagline */}
        <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy-900 mb-2">
          {project.name}
        </h2>
        <p className="text-sm font-mono text-brand-600 font-semibold mb-6">
          {project.tagline}
        </p>

        {/* Visual Mockup Preview Area */}
        <div className="w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100 border border-slate-200 p-6 flex flex-col justify-between mb-6 relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-mono text-slate-600">
            <span>ENTERPRISE ARCHITECTURE SHOWCASE</span>
            <span className="text-emerald-700 font-semibold">PRODUCTION VERIFIED</span>
          </div>
          
          <div className="text-center my-auto">
            <div className="text-3xl sm:text-4xl font-display font-black text-navy-900 tracking-wider">
              {project.name.toUpperCase()}
            </div>
            <div className="text-xs font-mono text-slate-600 mt-1 font-medium">
              Client: {project.client}
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Stack: {project.technologies.slice(0, 3).join(', ')}</span>
            <span className="text-brand-600 font-semibold">Status: LIVE IN PRODUCTION</span>
          </div>
        </div>

        {/* Project Overview */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Executive Summary & Architecture
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed font-sans">
            {project.overview}
          </p>
        </div>

        {/* Deliverables */}
        <div className="space-y-3 mb-6">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Key Engineering Deliverables
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800">
                <Check className="w-4 h-4 text-brand-600 flex-shrink-0" />
                <span className="font-medium">{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3 mb-8">
          <h3 className="text-xs font-mono uppercase tracking-widest text-slate-500 font-semibold">
            Technology Stack Deployed
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="px-3 py-1 rounded-lg bg-blue-50 border border-blue-200 text-xs font-mono font-medium text-brand-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
          <div className="text-xs font-mono text-slate-500">
            BLACK GRAPES SOFTECH • PORTFOLIO 2026
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-navy-900 text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
