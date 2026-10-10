import React, { useState, useEffect } from 'react';
import { FileText, Github, Mail, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-obsidian-950/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Monogram / Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition">
            <span className="font-mono text-base tracking-tighter font-extrabold">AK</span>
          </div>
          <div>
            <div className="font-bold text-white tracking-tight text-sm group-hover:text-blue-400 transition">
              ANASS EL KHARBAOUI
            </div>
            <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>ENSA FÈS • GÉNIE INFORMATIQUE</span>
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#projets" className="hover:text-white transition">Projets & Réalisations</a>
          <a href="#parcours" className="hover:text-white transition">Parcours & Expériences</a>
          <a href="#competences" className="hover:text-white transition">Compétences</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 transition"
            title="Profil GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={PERSONAL_INFO.cvDownload}
            download="CV_El_KHARBAOUI_ANASS.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/25 transition active:scale-95"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Télécharger le CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-obsidian-900 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <a 
            href="#projets" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 text-sm font-medium py-2"
          >
            Projets & Réalisations
          </a>
          <a 
            href="#parcours" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 text-sm font-medium py-2"
          >
            Parcours & Expériences
          </a>
          <a 
            href="#competences" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 text-sm font-medium py-2"
          >
            Compétences Techniques
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 text-sm font-medium py-2"
          >
            Contact
          </a>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a 
              href={PERSONAL_INFO.cvDownload}
              download
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Télécharger le CV</span>
            </a>
            <a 
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-300"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
