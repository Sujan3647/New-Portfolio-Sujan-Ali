import { useState, useEffect } from 'react';
import {
  GraduationCap,
  CheckCircle2,
  FileText,
  Download,
  Briefcase,
  BarChart3,
  Target,
  Workflow,
  Layers,
  ShieldCheck,
  Cpu,
  Rocket,
  Play,
  Pause,
  Sparkles,
  Terminal,
  GitBranch,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface AboutProps {
  onOpenResume: () => void;
}

const PILLAR_ICONS = [
  BarChart3,   // Consulting & Business Analysis
  Target,      // Project & Program Management
  Workflow,    // Stakeholder & MoU Management
  Layers,      // Full Stack Software Development
  ShieldCheck, // Cyber Security & Cryptography
  Cpu,         // Blockchain & Web3 Architectures
  Rocket,      // Startup Incubation & Leadership
];

const PILLAR_TAGS = [
  'BIZ & ADVISORY',
  'PROGRAM OPS',
  'STAKEHOLDER',
  'FULL STACK',
  'CYBER DEFENSE',
  'BLOCKCHAIN',
  'STARTUP & IIC',
];

const DOMAIN_DEV_SCRIPTS = [
  {
    cmd: 'pbi run-analytics --dataset="TripuraConclave" --sessions=347',
    output: '✓ Investment data reconciled: ₹95,286.45 Cr [STATUS: VERIFIED]',
    lang: 'bash',
  },
  {
    cmd: 'beetlex orchestrate --track="Hack-to-Hire" --mode=colleges',
    output: '✓ End-to-end hackathon deployed. 250+ coders matched [STATUS: OK]',
    lang: 'node',
  },
  {
    cmd: 'bilateral-mesh sync --parties="Govt_Tripura, EY, FICCI"',
    output: '✓ 347 B2G/B2B agendas synchronized & MoUs mapped [STATUS: LINKED]',
    lang: 'sh',
  },
  {
    cmd: 'pnpm dev:fullstack --turbo (React 19 + SpringBoot 3.4)',
    output: '✓ API endpoints healthy: 42 routes compiled in 380ms [STATUS: READY]',
    lang: 'ts',
  },
  {
    cmd: 'openssl rsa -check -in cert.pem && verify --zero-knowledge',
    output: '✓ RSA-256 cipher integrity validated. State Hackathon Rank 4 [OK]',
    lang: 'java',
  },
  {
    cmd: 'hardhat run deploy/SentinelRegistry.ts --network evm',
    output: '✓ Tamper-proof academic records deployed to IPFS [BLOCK: #492810]',
    lang: 'sol',
  },
  {
    cmd: 'iic.accelerate({ grant: "NGIN_1LAKH", forum: "TiE_U_TOP25" })',
    output: '✓ Careme venture funded under NGIN Scheme [STATUS: ACCELERATED]',
    lang: 'ts',
  },
];

export default function About({ onOpenResume }: AboutProps) {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Live Developer command typing animation state
  const [typedCmd, setTypedCmd] = useState('');
  const [showOutput, setShowOutput] = useState(false);

  const activePillar = PORTFOLIO_DATA.about.pillars[activePillarIndex];

  // Smooth Auto-Cycle Timer
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }

    const intervalTime = 50; // update progress every 50ms
    const totalDuration = 5000; // 5.0 seconds per capability
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePillarIndex((current) => (current + 1) % PORTFOLIO_DATA.about.pillars.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlaying, activePillarIndex]);

  // Command typewriter effect triggered on domain change
  useEffect(() => {
    setTypedCmd('');
    setShowOutput(false);
    const activeScript = DOMAIN_DEV_SCRIPTS[activePillarIndex];
    let charIdx = 0;

    const timer = setInterval(() => {
      if (charIdx <= activeScript.cmd.length) {
        setTypedCmd(activeScript.cmd.slice(0, charIdx));
        charIdx++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowOutput(true), 150);
      }
    }, 18);

    return () => clearInterval(timer);
  }, [activePillarIndex]);

  const handleSelectPillar = (idx: number) => {
    sound.playClick();
    setActivePillarIndex(idx);
    setProgress(0);
  };

  return (
    <section id="about" className="w-full bg-[#F2F0E8] py-16 md:py-24 relative paper-grain">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header: Unique, Compact, Animated Neo-Brutalist Micro-Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#111111] pb-5 mb-8">
          <div className="space-y-2">
            {/* Unique Animated Micro-Bar (No black box) */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase font-bold text-[#111111] mb-1">
              {/* Animated Equalizer Waveform Indicator */}
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#D7FF36] animate-pulse" />
                <span className="w-0.5 h-3 bg-[#304FFE] animate-pulse [animation-delay:150ms]" />
                <span className="w-0.5 h-1.5 bg-[#FF5733] animate-pulse [animation-delay:300ms]" />
              </span>

              {/* Unique Number Tag */}
              <span className="px-1.5 py-0.5 bg-[#304FFE] text-white font-mono-tech text-[10px] font-bold tracking-wider leading-none">
                01
              </span>

              <span className="text-[#304FFE] font-bold">//</span>

              {/* Title with Radar Ping */}
              <span className="tracking-widest font-bold flex items-center gap-1.5">
                <span>BIOGRAPHY & CAPABILITIES</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#304FFE] animate-ping" />
              </span>

              {/* Mini Terminal Bracket */}
              <span className="text-[10px] font-mono-tech text-neutral-500 font-normal hidden sm:inline">
                // SYSTEM_SPEC
              </span>
            </div>

            {/* Smaller, Refined Display Headline */}
            <h2 className="text-xl sm:text-2xl md:text-3xl font-archivo text-[#111111] tracking-tight uppercase">
              {PORTFOLIO_DATA.about.heroQuote}
            </h2>
          </div>

          {/* Subtitle with Animated Ping Pill */}
          <div className="flex flex-col md:items-end gap-1.5">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono-tech bg-white border border-[#111111] px-2.5 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-[#111111]">STATUS: VERIFIED DOSSIER</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-600">7 DOMAINS</span>
            </div>
            <div className="text-[11px] font-mono-tech text-neutral-600 max-w-sm md:text-right uppercase leading-snug">
              {PORTFOLIO_DATA.about.subHeadline}
            </div>
          </div>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Education Card */}
          <div className="lg:col-span-6 space-y-6">
            {/* Compact Narrative */}
            <div className="space-y-3 text-neutral-800 text-xs sm:text-sm leading-relaxed">
              {PORTFOLIO_DATA.about.narrative.map((paragraph, index) => (
                <p key={index} className="font-normal border-l-2 border-[#111111] pl-3.5 py-0.5">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Academic Dossier Box */}
            <div className="border-2 border-[#111111] bg-white p-5 brutalist-shadow">
              <div className="flex items-center justify-between border-b border-[#111111] pb-2.5 mb-3.5">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#304FFE]" />
                  <span className="font-archivo text-xs sm:text-sm uppercase tracking-wide font-bold">
                    ACADEMIC CREDENTIALS // EDUCATION
                  </span>
                </div>
                <span className="text-[10px] font-mono-tech bg-[#D7FF36] px-2 py-0.5 border border-[#111111] font-bold uppercase">
                  VERIFIED FROM CV
                </span>
              </div>

              {/* Higher Education */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech pb-3.5 border-b border-neutral-200">
                <div>
                  <div className="text-neutral-500 uppercase text-[10px]">Primary Degree</div>
                  <div className="text-sm font-archivo font-bold text-[#111111]">
                    {PORTFOLIO_DATA.about.education.degree}
                  </div>
                  <div className="text-neutral-700 font-medium text-[11px]">
                    {PORTFOLIO_DATA.about.education.institution}
                  </div>
                </div>

                <div>
                  <div className="text-neutral-500 uppercase text-[10px]">Standing & Performance</div>
                  <div className="text-xs font-bold text-[#304FFE]">
                    {PORTFOLIO_DATA.about.education.status}
                  </div>
                  <div className="text-lg font-archivo font-black text-[#FF5733] mt-0.5">
                    CGPA: {PORTFOLIO_DATA.about.education.cgpa} <span className="text-[11px] font-normal text-neutral-500">/ 10.0</span>
                  </div>
                </div>
              </div>

              {/* Secondary Education */}
              <div className="py-2.5 border-b border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-tech">
                <div>
                  <div className="text-neutral-500 uppercase text-[10px]">Higher Secondary (12th)</div>
                  <div className="font-bold text-[#111111]">
                    {PORTFOLIO_DATA.about.education.secondarySchool}
                  </div>
                </div>
                <div>
                  <div className="text-neutral-500 uppercase text-[10px]">Board & Score</div>
                  <div className="font-bold text-[#111111]">
                    {PORTFOLIO_DATA.about.education.secondaryBoard} ·{' '}
                    <span className="text-[#304FFE]">{PORTFOLIO_DATA.about.education.secondaryScore}</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas */}
              <div className="mt-3 text-xs text-neutral-700 font-mono-tech leading-relaxed">
                <span className="font-bold text-[#111111]">Core Profile Focus: </span>
                {PORTFOLIO_DATA.about.education.highlights}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex flex-col sm:flex-row gap-2">
                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    onOpenResume();
                  }}
                  className="flex-1 py-2 px-3 bg-[#111111] text-[#F2F0E8] hover:bg-[#304FFE] hover:text-white border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>VIEW CV MODAL (PDF)</span>
                </button>
                <a
                  href="/Sujan_Ali_CV.pdf"
                  download="Sujan_Ali_CV.pdf"
                  onClick={() => sound.playPop()}
                  className="py-2 px-3 bg-[#D7FF36] hover:bg-[#c4ec27] text-[#111111] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                  title="Download Sujan_Ali_CV.pdf"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Interactive Capabilities Command Deck */}
          <div className="lg:col-span-6 space-y-3.5">
            {/* Header Control Ribbon with Live Auto-Cycle */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#111111] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#304FFE] animate-pulse" />
                <span className="font-mono-tech text-xs uppercase tracking-wider text-[#111111] font-bold">
                  CORE CAPABILITIES // SELECT FROM CV
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                {/* Auto Play / Pause Toggle Button */}
                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    setIsAutoPlaying(!isAutoPlaying);
                  }}
                  className={`px-2 py-0.5 border border-[#111111] font-mono-tech text-[10px] font-bold uppercase transition-colors flex items-center gap-1 brutalist-shadow-sm ${
                    isAutoPlaying ? 'bg-[#D7FF36] text-[#111111]' : 'bg-white text-neutral-700'
                  }`}
                  title={isAutoPlaying ? 'Pause Auto-cycle' : 'Resume Auto-cycle'}
                >
                  {isAutoPlaying ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  <span>{isAutoPlaying ? 'AUTO' : 'PAUSED'}</span>
                </button>

                {/* Progress Counter Pill */}
                <div className="flex items-center gap-1 font-mono-tech text-xs font-bold text-[#304FFE] bg-white border border-[#111111] px-2 py-0.5">
                  <span>0{activePillarIndex + 1}</span>
                  <span className="text-neutral-400">/</span>
                  <span className="text-neutral-600">0{PORTFOLIO_DATA.about.pillars.length}</span>
                </div>
              </div>
            </div>

            {/* Linear Animated Progress Bar Indicator */}
            <div className="w-full h-1 bg-neutral-300 overflow-hidden border border-[#111111]">
              <div
                className="h-full bg-[#304FFE] transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Interactive Capability Selector Bento Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
              {PORTFOLIO_DATA.about.pillars.map((pillar, idx) => {
                const isActive = activePillarIndex === idx;
                const IconComponent = PILLAR_ICONS[idx] || Briefcase;
                const tag = PILLAR_TAGS[idx] || 'DOMAIN';

                return (
                  <button
                    key={pillar.title}
                    type="button"
                    onClick={() => handleSelectPillar(idx)}
                    className={`p-2.5 border text-left transition-all duration-200 relative group overflow-hidden flex flex-col justify-between min-h-[72px] ${
                      isActive
                        ? 'bg-[#111111] text-[#F2F0E8] border-[#111111] brutalist-shadow-sm -translate-y-0.5'
                        : 'bg-white hover:bg-[#D7FF36]/30 text-[#111111] border-[#111111]'
                    }`}
                  >
                    {/* Top Micro Tag & Icon */}
                    <div className="flex items-center justify-between w-full mb-1">
                      <span
                        className={`text-[9px] font-mono-tech font-bold uppercase tracking-wider ${
                          isActive ? 'text-[#D7FF36]' : 'text-neutral-500'
                        }`}
                      >
                        0{idx + 1} // {tag}
                      </span>
                      <IconComponent
                        className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                          isActive ? 'text-[#D7FF36]' : 'text-[#304FFE]'
                        }`}
                      />
                    </div>

                    {/* Short Title */}
                    <div className="font-archivo text-[11px] uppercase font-bold leading-tight line-clamp-2">
                      {pillar.title}
                    </div>

                    {/* Active Bottom Glow Line */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D7FF36]" />
                    )}
                  </button>
                );
              })}

              {/* 8th Slot: Fast Link to Official PDF Resume */}
              <a
                href="/Sujan_Ali_CV.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-2.5 border border-[#111111] bg-[#D7FF36] hover:bg-[#c6ef28] text-[#111111] text-left transition-all flex flex-col justify-between group brutalist-shadow-sm min-h-[72px]"
                title="Open official CV in new tab"
              >
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-[9px] font-mono-tech font-bold uppercase tracking-wider text-[#111111]">
                    DOCS
                  </span>
                  <FileText className="w-3.5 h-3.5 text-[#111111]" />
                </div>
                <div className="font-archivo text-[11px] uppercase font-black leading-tight">
                  OFFICIAL CV →
                </div>
              </a>
            </div>

            {/* Dynamic Active Capability Showcase Deck with Dev Telemetry & Terminal */}
            <div
              className="border-2 border-[#111111] bg-[#111111] text-[#F2F0E8] p-5 sm:p-6 brutalist-shadow relative overflow-hidden transition-all duration-300"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {/* Subtle Animated Background Radar Grid */}
              <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full border border-neutral-800 pointer-events-none opacity-40 animate-spin-slow" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 rounded-full border border-neutral-800 pointer-events-none opacity-20" />

              {/* Header Status Bar with Dev Telemetry & Git Branch */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech pb-3 border-b border-neutral-800 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D7FF36] animate-pulse" />
                  <span className="text-[#D7FF36] font-bold uppercase tracking-wider text-xs sm:text-sm">
                    OPERATIONAL DOMAIN 0{activePillarIndex + 1}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-[10px] text-[#38bdf8]">
                    <GitBranch className="w-2.5 h-2.5 text-[#D7FF36]" />
                    <span>branch: main/0{activePillarIndex + 1}</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Real-time Equalizer Wave Activity */}
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#D7FF36] animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#38bdf8] animate-pulse [animation-delay:150ms]" />
                    <span className="w-0.5 h-1.5 bg-[#FF5733] animate-pulse [animation-delay:300ms]" />
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono-tech">
                    [LIVE COMPILED]
                  </span>
                </div>
              </div>

              {/* Title & Subtitle with Animation Flare */}
              <div className="mt-3.5 relative z-10 space-y-1">
                <h3 className="font-archivo text-xl sm:text-2xl uppercase tracking-tight text-white flex items-center gap-2">
                  <span>{activePillar.title}</span>
                </h3>
                <div className="text-xs font-mono-tech text-[#38bdf8] font-semibold">
                  // {activePillar.subtitle}
                </div>
                <p className="mt-2 text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                  {activePillar.desc}
                </p>
              </div>

              {/* Dev Terminal Command Runner Window with Live Typewriter */}
              <div className="mt-3.5 border border-neutral-800 bg-[#080808] rounded-none overflow-hidden relative z-10 font-mono-tech">
                <div className="bg-[#141414] px-3 py-1 border-b border-neutral-800 flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF5733]" />
                    <span className="w-2 h-2 rounded-full bg-[#D7FF36]" />
                    <span className="w-2 h-2 rounded-full bg-[#304FFE]" />
                    <span className="text-neutral-300 ml-1.5 font-bold">
                      terminal ~ dev@sujan-ali: {DOMAIN_DEV_SCRIPTS[activePillarIndex].lang}
                    </span>
                  </div>
                  <span className="text-[9px] text-[#D7FF36] uppercase font-bold">
                    PID: 409{activePillarIndex + 1}
                  </span>
                </div>

                <div className="p-2.5 text-[11px] leading-relaxed space-y-1 bg-black/70 overflow-x-auto">
                  <div className="flex items-start gap-2 text-neutral-200">
                    <span className="text-[#D7FF36] font-bold select-none shrink-0">$</span>
                    <span className="text-neutral-100 break-all">
                      {typedCmd}
                      <span className="inline-block w-1.5 h-3.5 bg-[#D7FF36] ml-0.5 animate-pulse align-middle" />
                    </span>
                  </div>
                  {showOutput && (
                    <div className="text-[10px] text-emerald-400 pl-4 animate-fadeIn break-words">
                      {DOMAIN_DEV_SCRIPTS[activePillarIndex].output}
                    </div>
                  )}
                </div>
              </div>

              {/* 4 Animated Key Competency Interactive Tiles */}
              <div className="mt-4 relative z-10">
                <div className="text-[10px] font-mono-tech uppercase tracking-widest text-[#D7FF36] mb-2 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-[#D7FF36]" />
                  <span>CORE DELIVERABLES & IMPACT FROM CV:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activePillar.competencies?.map((comp, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2.5 border border-neutral-800 bg-neutral-900/90 hover:border-[#D7FF36] hover:bg-neutral-800/80 transition-all duration-200 group text-xs font-mono-tech flex items-start gap-2.5"
                    >
                      <span className="text-[10px] font-bold text-[#D7FF36] shrink-0 pt-0.5">
                        0{cIdx + 1}.
                      </span>
                      <span className="text-neutral-200 group-hover:text-white leading-snug">
                        {comp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Telemetry / Proof Verification Footer */}
              <div className="mt-4 pt-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono-tech text-neutral-400 relative z-10">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Terminal className="w-3.5 h-3.5 text-[#38bdf8]" />
                  <span>DOC: Sujan_Ali_CV.pdf</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#D7FF36] font-bold">● ACTIVE AUDIT</span>
                  <span className="text-neutral-600">|</span>
                  <a
                    href="/Sujan_Ali_CV.pdf"
                    download="Sujan_Ali_CV.pdf"
                    className="text-white hover:text-[#D7FF36] underline font-bold"
                  >
                    DOWNLOAD DOSSIER
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
