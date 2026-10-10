import React from 'react';
import { Code2, Globe, Database, BarChart4, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export default function SkillsMatrix() {
  const icons = [Code2, Globe, Database, BarChart4, Wrench];

  return (
    <section id="competences" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Stack & Compétences
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Compétences Techniques.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Maîtrise approfondie des langages orientés objet, du développement web moderne, des architectures de données et de la rigueur Lean.
          </p>
        </div>

        {/* Skills Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={category.name}
                className="p-6 rounded-2xl bg-obsidian-900 border border-white/10 hover:border-blue-500/30 transition shadow-sm space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-white text-base font-sans">
                    {category.name}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {category.skills.map(skill => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] text-slate-200 border border-white/5 hover:border-blue-400/40 hover:text-white transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
