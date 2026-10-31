import { useState, useEffect } from 'react';
import { X, ExternalLink, Github, Copy, Check, Terminal, Shield, Layers, Calendar } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copiedClone, setCopiedClone] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const cloneCommand = `git clone ${project.githubUrl}.git`;

  const handleCopy = () => {
    sound.playPop();
    navigator.clipboard.writeText(cloneCommand);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project details for ${project.title}`}
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/80 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#F2F0E8] border-2 border-[#111111] brutalist-shadow-lg overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-[#111111] text-[#F2F0E8] px-6 py-4 flex items-center justify-between border-b border-[#111111]">
          <div className="flex items-center gap-3">
            <span className="font-archivo text-[#D7FF36] text-xl font-bold">
              PROJECT {project.number}
            </span>
            <span className="text-neutral-400 font-mono-tech text-xs hidden sm:inline">
              // ARCHITECTURAL SPECIFICATION
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              sound.playClick();
              onClose();
            }}
            aria-label="Close project details"
            className="p-1.5 border border-neutral-600 hover:bg-[#FF5733] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 md:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Hero Section of the Modal */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-2">
              <span className="text-xs font-mono-tech font-bold uppercase tracking-wider text-[#304FFE]">
                {project.category} · {project.year}
              </span>
              <h3 className="text-3xl sm:text-4xl font-archivo text-[#111111] uppercase tracking-tight">
                {project.title}
              </h3>
              <p className="text-base font-medium text-neutral-800">
                {project.tagline}
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-2.5">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="w-full py-2.5 px-4 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 brutalist-shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GITHUB REPO</span>
              </a>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => sound.playClick()}
                  className="w-full py-2.5 px-4 bg-white text-[#111111] hover:bg-[#D7FF36] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 brutalist-shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[#304FFE]" />
                  <span>VIEW LIVE ARCHIVE</span>
                </a>
              )}
            </div>
          </div>

          {/* Project High-Res Preview */}
          <div className="border-2 border-[#111111] overflow-hidden bg-[#111111] relative group">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[420px] object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-[#111111]/90 text-white text-[11px] font-mono-tech px-2.5 py-1 border border-white/20">
              ROLE: {project.role.toUpperCase()}
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono-tech font-bold uppercase tracking-wider text-[#111111] border-b border-[#111111] pb-2">
              EXECUTIVE SUMMARY & ENGINEERING PROBLEM
            </h4>
            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
              {project.longDescription}
            </p>
          </div>

          {/* Architecture Highlights & Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-[#111111] bg-white p-5 brutalist-shadow-sm">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase text-[#111111] mb-3 pb-2 border-b border-neutral-200">
                <Layers className="w-4 h-4 text-[#304FFE]" />
                <span>CORE DELIVERABLES & FEATURES</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-800 font-mono-tech">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#304FFE] font-bold">▶</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#111111] bg-white p-5 brutalist-shadow-sm">
              <div className="flex items-center gap-2 font-mono-tech text-xs font-bold uppercase text-[#111111] mb-3 pb-2 border-b border-neutral-200">
                <Shield className="w-4 h-4 text-[#FF5733]" />
                <span>SYSTEM & ARCHITECTURAL HIGHLIGHTS</span>
              </div>
              <ul className="space-y-2.5 text-xs text-neutral-800 font-mono-tech">
                {project.architectureHighlights.map((arch, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF5733] font-bold">■</span>
                    <span>{arch}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack Unboxed Metadata */}
          <div>
            <div className="text-xs font-mono-tech font-bold uppercase tracking-wider text-neutral-500 mb-2">
              TECHNOLOGY SIGNATURE
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#111111] border-t border-b border-[#111111] py-3 bg-white px-4">
              {project.techStack.map((tech, i) => (
                <span key={tech} className="font-semibold">
                  {tech}
                  {i < project.techStack.length - 1 && (
                    <span className="mx-2 text-neutral-400">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Terminal Clone Command Snippet */}
          <div className="border border-[#111111] bg-[#111111] text-[#F2F0E8] p-4 font-mono-tech text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800">
              <span className="text-neutral-400 text-[11px] flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-[#D7FF36]" />
                REPOSITORY ACCESS
              </span>
              <button
                type="button"
                onClick={handleCopy}
                className="hover:text-[#D7FF36] transition-colors flex items-center gap-1 text-[11px]"
              >
                {copiedClone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D7FF36]" />
                    <span className="text-[#D7FF36]">COPIED</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>COPY COMMAND</span>
                  </>
                )}
              </button>
            </div>
            <code className="text-[#D7FF36] select-all break-all">
              $ {cloneCommand}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
