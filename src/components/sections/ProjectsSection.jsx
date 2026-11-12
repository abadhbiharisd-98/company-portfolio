import React, { useState } from 'react';
import { 
  ArrowUpRight
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import ProjectDetailModal from '../ProjectDetailModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Enterprise Web', 'Mobile Apps', 'Web Apps', 'E-Commerce'];

  const filteredProjects = portfolioData.projects.filter(project => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="deck-section section-white">
      
      {/* Slide Header Tag */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 border-b border-slate-200 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-600"></span>
          <span className="tracking-widest uppercase font-bold text-brand-600 font-mono">SECTION 05</span>
          <span className="text-slate-300">|</span>
          <span className="tracking-wider uppercase text-slate-700 font-semibold">OUR PROJECTS</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] hidden sm:block">
          PROVEN ENTERPRISE DELIVERABLES
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full space-y-6">
        
        {/* Gallery Header & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="badge-blue mb-2">
              <span>Curated Portfolio Gallery</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-navy-900">
              Selected Works & <span className="text-brand-600">Production Case Studies</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:text-navy-900 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="rounded-3xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between group glass-card-hover shadow-soft-sm cursor-pointer"
            >
              {/* Visual Mockup Header with clean light window styling */}
              <div className="h-44 w-full bg-gradient-to-br from-blue-50/80 via-slate-50 to-blue-100/50 p-4 flex flex-col justify-between relative overflow-hidden border-b border-slate-200">
                
                {/* Window Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 shadow-2xs">
                    <div className="w-2 h-2 rounded-full bg-rose-400" />
                    <div className="w-2 h-2 rounded-full bg-amber-400" />
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-navy-900 font-mono ml-1 font-semibold">{project.category}</span>
                  </div>
                  <span className="text-slate-500 font-mono text-xs font-semibold">
                    {project.year}
                  </span>
                </div>

                {/* Project Identity */}
                <div className="my-auto text-center py-2">
                  <div className="font-display font-bold text-2xl text-navy-900 tracking-tight group-hover:text-brand-600 transition-colors">
                    {project.name}
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 mt-1 truncate max-w-[240px] mx-auto bg-white/90 backdrop-blur-sm px-3 py-0.5 rounded-full border border-slate-200 shadow-2xs font-medium">
                    {project.domain}
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 font-medium">
                  <span>Client: {project.client}</span>
                  <span className="flex items-center gap-1 text-brand-600 font-semibold">
                    Inspect <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-bold text-navy-900 mb-1 group-hover:text-brand-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-xs text-brand-600 font-mono font-medium mb-2.5">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4 font-sans">
                    {project.overview}
                  </p>
                </div>

                {/* Tech Stack Chips & Action */}
                <div className="pt-3 border-t border-slate-100 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md bg-slate-50 text-[10px] font-mono text-slate-700 border border-slate-200 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-[10px] font-mono text-brand-700 border border-blue-200 font-semibold">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1 font-sans">
                    <span className="text-[11px] font-mono text-slate-400">Production Verified</span>
                    <span className="text-brand-600 text-xs font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Modal View for deep inspection */}
      <ProjectDetailModal 
        project={activeModalProject} 
        onClose={() => setActiveModalProject(null)} 
      />

    </section>
  );
}
