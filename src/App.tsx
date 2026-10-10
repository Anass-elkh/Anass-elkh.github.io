import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import Timeline from './components/Timeline';
import SkillsMatrix from './components/SkillsMatrix';
import ContactStation from './components/ContactStation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col relative bg-grid-pattern selection:bg-blue-600">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProjectShowcase />
        <Timeline />
        <SkillsMatrix />
        <ContactStation />
      </main>
      <Footer />
    </div>
  );
}
