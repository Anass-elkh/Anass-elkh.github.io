import React from 'react';
import { ArrowDown, FileText, Sparkles, Terminal, CheckCircle2, MapPin, Layers, Cpu, Award, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 overflow-hidden">
      {/* Subtle radial ambient gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase font-mono">
                Disponible pour Recrutement & Projets Stratégiques • 2026
              </span>
            </div>

            {/* Main Title & Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-[1.08]">
                Ingénieur d'État en <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                  Génie Informatique.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-normal">
                Diplômé de l'<strong className="text-white font-semibold">ENSA Fès</strong>. Je conçois des écosystèmes logiciels résilients combinant <strong className="text-blue-400 font-medium">architectures Full Stack modernes</strong>, <strong className="text-blue-400 font-medium">digitalisation industrielle (Lean Manufacturing)</strong> et <strong className="text-blue-400 font-medium">Business Intelligence décisionnelle</strong>.
              </p>
            </div>

            {/* Key Engineering Credentials */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                <Cpu className="w-3.5 h-3.5 text-blue-400" />
                Lear Corporation (PFE Cutting)
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                <Layers className="w-3.5 h-3.5 text-indigo-400" />
                Al Omrane & INFODIX
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                Fès, Maroc
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#projets"
                className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/25 transition active:scale-95 flex items-center gap-2 group"
              >
                <span>Explorer les Réalisations</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
              </a>

              <a 
                href={PERSONAL_INFO.cvDownload}
                download="CV_El_KHARBAOUI_ANASS.pdf"
                className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-semibold text-sm transition active:scale-95 flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-blue-400" />
                <span>Consulter le Curriculum Vitae</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-End Engineer Portrait Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Backlight Ambient Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600/30 via-indigo-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000"></div>

              {/* Card Container */}
              <div className="relative rounded-3xl bg-obsidian-900/90 border border-white/10 p-5 shadow-2xl backdrop-blur-xl">
                
                {/* Card Header Status */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 font-semibold">
                      Ingénieur Certifié
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-[11px] font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    ENSA Fès 2026
                  </div>
                </div>

                {/* Photo Frame */}
                <div className="relative mt-4 rounded-2xl overflow-hidden border border-white/10 bg-obsidian-950 aspect-[4/4.8] shadow-inner group">
                  <img 
                    src="anass_profile.png" 
                    alt="EL KHARBAOUI ANASS - Ingénieur d'État" 
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Gradient Scrim & Nameplate on Bottom */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/70 to-transparent p-4 pt-12 flex flex-col justify-end">
                    <div className="text-white font-bold text-lg font-display tracking-wide">
                      EL KHARBAOUI ANASS
                    </div>
                    <div className="text-blue-400 text-xs font-mono font-medium flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                      Ingénieur d'État en Informatique
                    </div>
                  </div>
                </div>

                {/* Micro Badges / Specialties */}
                <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/5 text-xs font-mono">
                  <div className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 text-[10px] block uppercase font-medium">Spécialité</span>
                    <span className="text-slate-200 font-semibold">Systèmes & Data</span>
                  </div>
                  <div className="px-3 py-2 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-slate-400 text-[10px] block uppercase font-medium">PFE Industriel</span>
                    <span className="text-slate-200 font-semibold">Lear Corporation</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Live Metrics Ticker Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-extrabold text-white font-mono tracking-tight">07+</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">Projets Livrés & Publiés</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-extrabold text-blue-400 font-mono tracking-tight">02</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">Stages Entreprises & Industrie</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-extrabold text-indigo-400 font-mono tracking-tight">5 Ans</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">Formation d'Ingénieur d'État</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-3xl font-extrabold text-emerald-400 font-mono tracking-tight">100%</div>
            <div className="text-xs text-slate-400 mt-1 uppercase font-semibold tracking-wider">Code Open Source & Démos</div>
          </div>
        </div>

      </div>
    </section>
  );
}
