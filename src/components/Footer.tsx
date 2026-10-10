import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-obsidian-950 py-12 px-6 text-xs text-slate-500">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="space-y-1 text-center md:text-left">
          <div className="font-bold text-white tracking-tight">
            EL KHARBAOUI ANASS • Ingénieur d'État en Génie Informatique
          </div>
          <div className="text-[11px] text-slate-500">
            Diplômé de l'École Nationale des Sciences Appliquées de Fès (ENSA Fès)
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a href="#projets" className="hover:text-slate-300 transition">Projets</a>
          <a href="#parcours" className="hover:text-slate-300 transition">Parcours</a>
          <a href="#competences" className="hover:text-slate-300 transition">Compétences</a>
          <a href="#contact" className="hover:text-slate-300 transition">Contact</a>
          <button 
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition border border-white/5"
            title="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
