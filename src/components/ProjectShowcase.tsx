import React, { useState, useMemo } from 'react';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Cpu, 
  BarChart3, 
  Server, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';

export default function ProjectShowcase() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'industrial' | 'fullstack' | 'bi' | 'systems'>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return PROJECTS;
    return PROJECTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  const categories = [
    { id: 'all', label: 'Tous les Projets', icon: Layers },
    { id: 'industrial', label: 'Industrie & Lean (PFE)', icon: Cpu },
    { id: 'fullstack', label: 'Applications Web Full Stack', icon: Sparkles },
    { id: 'bi', label: 'Business Intelligence & Data', icon: BarChart3 },
    { id: 'systems', label: 'Systèmes & Services Web', icon: Server },
  ];

  return (
    <section id="projets" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Ingénierie & Réalisations
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Projets Sélectionnés.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
              Solutions concrètes développées pour des contextes industriels automobiles, des entreprises de distribution IT et des plateformes analytiques avancées.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => {
              const Icon = cat.icon;
              const isActive = activeFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id as any)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition active:scale-95 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                      : 'bg-obsidian-900 border border-white/5 text-slate-400 hover:text-white hover:bg-obsidian-850'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative group overflow-hidden ${
                project.featured 
                  ? 'bg-gradient-to-b from-obsidian-900 via-obsidian-900 to-obsidian-850 border border-blue-500/30 hover:border-blue-500/60 shadow-xl shadow-blue-950/20' 
                  : 'bg-obsidian-900/80 border border-white/10 hover:border-white/20'
              }`}
            >
              {/* Featured Badge Glow */}
              {project.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-600/20 transition" />
              )}

              <div className="space-y-4 relative z-10">
                {/* Header Metadata */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-blue-400 font-semibold px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20">
                    {project.organization}
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">
                    {project.period}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-normal line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Impact / Metrics Bullet Points */}
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-400 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between gap-3 relative z-10">
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition group/btn"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                  <span>Dépôt GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition" />
                </a>

                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold border border-emerald-500/30 transition shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>Démo Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
