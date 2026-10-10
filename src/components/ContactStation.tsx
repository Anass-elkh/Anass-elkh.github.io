import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, FileText, Github, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function ContactStation() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Entrer en Relation
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            Prêt pour de Nouveaux Défis.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl">
            Disponible pour des opportunités en ingénierie logicielle, intégration de systèmes et data intelligence au Maroc et à l'international.
          </p>
        </div>

        {/* Contact Bento Box */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Main Direct Action Card */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-900 to-obsidian-850 border border-white/10 space-y-8 relative overflow-hidden">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Ligne Directe
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Échangeons sur vos Projets & Opportunités
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Que ce soit pour un poste d'ingénieur d'études et développement, un projet industriel ou une collaboration technique.
              </p>
            </div>

            {/* Email Copy Pill */}
            <div className="flex flex-col sm:flex-row items-center gap-3 p-2 bg-obsidian-950/80 rounded-2xl border border-white/10">
              <div className="flex items-center gap-3 px-4 py-2 flex-1 w-full text-slate-200 font-mono text-sm">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition active:scale-95 shadow-lg shadow-blue-600/25"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-white" />
                      <span>Copié dans le presse-papier !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copier l'Email</span>
                    </>
                  )}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition"
                  title="Ouvrir dans l'application email"
                >
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Quick Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Téléphone / WhatsApp</div>
                  <div className="text-xs font-semibold text-white font-mono">{PERSONAL_INFO.phone}</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Localisation</div>
                  <div className="text-xs font-semibold text-white">{PERSONAL_INFO.location}</div>
                </div>
              </div>
            </div>

          </div>

          {/* Side Resume & Links Card */}
          <div className="p-8 rounded-3xl bg-obsidian-900 border border-white/10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="font-bold text-white text-lg">Documents & Liens</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consultez mon profil GitHub officiel ou téléchargez directement mon CV officiel au format PDF.
              </p>

              <div className="space-y-3 pt-2">
                <a
                  href={PERSONAL_INFO.cvDownload}
                  download="CV_El_KHARBAOUI_ANASS.pdf"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-xs font-bold font-sans">Curriculum Vitae (PDF)</div>
                      <div className="text-[10px] text-slate-500 font-mono">Mis à jour 2026 • Format A4</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition">
                    ↓
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white transition group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-slate-300" />
                    <div>
                      <div className="text-xs font-bold font-sans">Profil GitHub</div>
                      <div className="text-[10px] text-slate-500 font-mono">github.com/Anass-elkh</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-slate-400 group-hover:translate-x-1 transition">
                    ↗
                  </span>
                </a>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Recherche Active
              </div>
              <div>Ingénieur Full Stack / Data & Systèmes d'Information.</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
