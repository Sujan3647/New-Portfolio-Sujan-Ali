import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import CrossMarquee from './components/CrossMarquee';
import About from './components/About';
import TechMap from './components/TechMap';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import CommandMenu from './components/CommandMenu';
import CustomCursor from './components/CustomCursor';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';

export default function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSelectProjectById = (id: string) => {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    if (proj) {
      setActiveProject(proj);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0E8] text-[#111111] flex flex-col relative selection:bg-[#D7FF36] selection:text-[#111111]">
      {/* Custom Precision Cursor */}
      <CustomCursor />

      {/* Top Navigation */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full flex flex-col">
        {/* 1. Hero: Experimental Magazine Cover */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Dynamic Running Ticker */}
        <MarqueeBanner
          items={[
            'FULL STACK DEVELOPER',
            'TECHNOLOGY CONSULTANT',
            'ENTREPRENEURSHIP',
            'BUSINESS RESEARCH',
            'GTM',
            'PROGRAM MANAGEMENT',
            'STARTUP GRANT RECIPIENT',
            'CLOUD COMPUTING',
            'BLOCKCHAIN',
            'PRODUCT MANAGEMENT',
          ]}
          theme="black"
          direction="left"
        />

        {/* 2. About: The Person Behind The Code */}
        <About onOpenResume={() => setIsResumeOpen(true)} />

        {/* Dynamic Dual Cross Marquee: 2 intersecting animated scrolls with 2 distinct colors */}
        <CrossMarquee
          items1={[
            'NATIONAL INFORMATICS CENTRE',
            'ASSAM UNIVERSITY',
            'NATIONAL FORENSIC SCIENCES UNIVERSITY',
            'FICCI',
            'NEXUSLOGIC TECHNOLOGIES',
            'GEEKSFORGEEKS',
            'GOOGLE DEVELOPER GROUP ON CAMPUS',
          ]}
          items2={[
            'GOOGLE DEVELOPER GROUP ON CAMPUS',
            'GEEKSFORGEEKS',
            'NEXUSLOGIC TECHNOLOGIES',
            'FICCI',
            'NATIONAL FORENSIC SCIENCES UNIVERSITY',
            'ASSAM UNIVERSITY',
            'NATIONAL INFORMATICS CENTRE',
          ]}
          theme1="lime"
          theme2="blue"
        />

        {/* 3. Experience: Professional Journey (First Experience) */}
        <Experience />

        {/* Accent Ticker */}
        <MarqueeBanner
          items={[
            'FULL STACK SYSTEMS',
            'JAVA & SPRING BOOT',
            'REACT & NEXT.JS',
            'DOCKER & DEVOPS',
            'SOLIDITY & WEB3',
            'POSTGRESQL & MONGODB',
          ]}
          theme="black"
          direction="left"
        />

        {/* 4. Tech Stack: Tools of My Trade (Then Tech) */}
        <TechMap />

        {/* Inverted Accent Ticker */}
        <MarqueeBanner
          items={[
            'CAREPULSE HEALTHCARE',
            'AES-256 ENCRYPTION PLATFORM',
            'SOLIDITY LOTTERY PROTOCOL',
            'REAL-TIME ANTI-CHEATING SENTINEL',
            'PROVABLY SECURE',
            'HIGH CONCURRENCY ARCHITECTURE',
          ]}
          theme="lime"
          direction="right"
        />

        {/* 5. Selected Work: Project Archive (Then Projects) */}
        <Projects onSelectProject={(project) => setActiveProject(project)} />

        {/* 6. Achievements: Proof of Impact (Then Impact) */}
        <Achievements />

        {/* 7. Leadership & Community */}
        <Leadership />

        {/* Blue Accent Ticker */}
        <MarqueeBanner
          items={[
            'OPEN FOR ARCHITECTURAL CONSULTING',
            'FULL STACK ENGINEERING SPRINT',
            'STARTUP TECHNOLOGY ADVISORY',
            'TRIPURA / INDIA · AVAILABLE GLOBALLY',
          ]}
          theme="blue"
          direction="left"
        />

        {/* 8. Contact: The Next Collaboration */}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Modals & Command Palettes */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <CommandMenu
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProjectById={handleSelectProjectById}
      />
    </div>
  );
}
