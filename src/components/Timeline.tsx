import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Award, 
  BookOpen, 
  Layers, 
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, ExperienceItem, EducationItem } from '../data/portfolioData';

export default function Timeline() {
  const [activeView, setActiveView] = useState<'both' | 'experience' | 'education'>('both');

  return (
    <section id="parcours" className="py-28 px-6 bg-obsidian-950/60 border-y border-white/5 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header & Segmented Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
              Cursus & Trajectoire Professionnelle
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
              Expériences & Formation.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-light">
              Distinction nette entre l'immersion opérationnelle en entreprise et le cursus académique d'excellence à l'ENSA Fès.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center p-1.5 rounded-2xl bg-obsidian-900/90 border border-white/10 backdrop-blur-xl shrink-0 self-start md:self-auto">
            <button
              onClick={() => setActiveView('both')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeView === 'both'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Vue Complète (2 Colonnes)</span>
            </button>

            <button
              onClick={() => setActiveView('experience')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeView === 'experience'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Expériences ({EXPERIENCES.length})</span>
            </button>

            <button
              onClick={() => setActiveView('education')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                activeView === 'education'
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formation ({EDUCATION.length})</span>
            </button>
          </div>
        </div>

        {/* Content Container */}
        <div className={`grid gap-10 ${
          activeView === 'both' 
            ? 'grid-cols-1 lg:grid-cols-2' 
            : 'grid-cols-1 max-w-4xl mx-auto'
        }`}>

          {/* COLUMN 1: EXPÉRIENCES PROFESSIONNELLES */}
          {(activeView === 'both' || activeView === 'experience') && (
            <div className="space-y-6">
              
              {/* Column Title */}
              <div className="flex items-center justify-between pb-3 border-b border-blue-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Expériences Professionnelles</h3>
                    <p className="text-xs text-slate-400">Stages industriels, ingénierie applicative et projets d'entreprise</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  {EXPERIENCES.length} Postes
                </span>
              </div>

              {/* Experiences Cards Stack */}
              <div className="space-y-6">
                {EXPERIENCES.map((exp, idx) => (
                  <div 
                    key={exp.id}
                    className="p-6 sm:p-7 rounded-3xl bg-obsidian-900/80 border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
                  >
                    {/* Top Glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header Row: Company & Badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-blue-400" />
                          <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition font-display">
                            {exp.company}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{exp.companyType}</p>
                      </div>

                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {exp.badge}
                      </span>
                    </div>

                    {/* Role & Period Info */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="font-semibold text-slate-200">
                        {exp.role}
                      </span>
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="flex items-center gap-1 text-blue-400/90">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Mission Description */}
                    <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {exp.description}
                    </p>

                    {/* Highlights / Key Accomplishments */}
                    <div className="mt-4 space-y-2 pt-3 border-t border-white/5">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                        Livrables & Réalisations Clés :
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {exp.technologies.map(t => (
                        <span 
                          key={t}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* COLUMN 2: FORMATION ACADÉMIQUE */}
          {(activeView === 'both' || activeView === 'education') && (
            <div className="space-y-6">
              
              {/* Column Title */}
              <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">Formation Académique</h3>
                    <p className="text-xs text-slate-400">Parcours universitaire d'État, grandes écoles et diplômes</p>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                  {EDUCATION.length} Diplômes
                </span>
              </div>

              {/* Education Cards Stack */}
              <div className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                  <div 
                    key={edu.id}
                    className="p-6 sm:p-7 rounded-3xl bg-obsidian-900/80 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 shadow-xl relative overflow-hidden group"
                  >
                    {/* Top Glow bar on hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Header Row: Institution & Badge */}
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-indigo-400" />
                          <h4 className="text-lg font-bold text-white group-hover:text-indigo-300 transition font-display">
                            {edu.degree}
                          </h4>
                        </div>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{edu.institution}</p>
                      </div>

                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                        {edu.badge}
                      </span>
                    </div>

                    {/* Period & Location */}
                    <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <span className="font-semibold text-slate-300">
                        {edu.institution.includes('ENSA') ? "Cycle Ingénieur d'État" : "Enseignement Supérieur"}
                      </span>
                      <div className="flex items-center gap-3 text-slate-400">
                        <span className="flex items-center gap-1 text-indigo-400/90">
                          <Calendar className="w-3.5 h-3.5" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Program Description */}
                    <p className="mt-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {edu.description}
                    </p>

                    {/* Modules & Key Subject Areas */}
                    <div className="mt-4 space-y-2 pt-3 border-t border-white/5">
                      <span className="text-[11px] font-mono text-slate-400 font-semibold uppercase tracking-wider block">
                        Modules Clés & Spécialisations :
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-300">
                        {edu.modules.map((m, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <BookOpen className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{m}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Competencies Acquired */}
                    <div className="mt-5 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                      {edu.skills.map(s => (
                        <span 
                          key={s}
                          className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.03] text-slate-300 border border-white/5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                  </div>
                ))}
              </div>

            </div>
          )}

        </div>

        {/* Section Bottom Banner Summary */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 via-obsidian-900 to-indigo-900/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-white font-semibold text-sm">Diplôme d'Ingénieur d'État en Génie Informatique (2026)</div>
              <div className="text-xs text-slate-400">Éligible et immédiatement disponible pour recrutement en CDI / Missions d'Ingénierie</div>
            </div>
          </div>

          <a 
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-xs font-semibold font-mono transition flex items-center gap-2 shrink-0"
          >
            <span>Prendre Contact</span>
            <ChevronRight className="w-4 h-4 text-blue-400" />
          </a>
        </div>

      </div>
    </section>
  );
}
