import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle } from 'lucide-react';
import { TIMELINE } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="parcours" className="py-24 px-6 bg-obsidian-900/40 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-indigo-400">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            Parcours & Trajectoire
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Expériences & Formation.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Un cursus d'excellence en école d'ingénieurs complété par des immersions opérationnelles en environnement industriel et technologique.
          </p>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {TIMELINE.map((item, index) => {
            const isExp = item.type === 'experience';
            return (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline Node Icon */}
                <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-xl flex items-center justify-center border shadow-lg transition-transform group-hover:scale-110 ${
                  isExp 
                    ? 'bg-blue-600 border-blue-400 text-white shadow-blue-500/20' 
                    : 'bg-indigo-600 border-indigo-400 text-white shadow-indigo-500/20'
                }`}>
                  {isExp ? <Briefcase className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                </div>

                {/* Card Container */}
                <div className="p-6 rounded-2xl bg-obsidian-900 border border-white/10 group-hover:border-white/20 transition space-y-3">
                  
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="font-mono text-blue-400 font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                      {item.year}
                    </span>
                    <div className="flex items-center gap-3 text-slate-400 font-mono text-[11px]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition">
                      {item.title}
                    </h3>
                    <div className="text-sm font-medium text-slate-300 font-sans mt-0.5">
                      {item.organization} — <span className="text-slate-400 font-normal">{item.role}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {item.technologies.map(tech => (
                      <span 
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
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
