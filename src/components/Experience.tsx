import { useState, useRef } from 'react';
import {
  MapPin,
  Calendar,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Layers,
  Sparkles,
  ExternalLink,
  ArrowUpRight,
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';
import { CompanyLogo } from './CompanyLogos';

interface CompanyConfig {
  shortName: string;
  category: string;
  accentBg: string;
  accentText: string;
  chipBg: string;
  chipText: string;
  partnerInfo?: string;
  stat1: { label: string; value: string };
  stat2: { label: string; value: string };
  yearTag: string;
  typeTag: string;
}

const CONFIGS: Record<string, CompanyConfig> = {
  ficci: {
    shortName: 'FICCI',
    category: 'Government & Strategic Advisory',
    accentBg: 'bg-[#D7FF36]',
    accentText: 'text-[#111111]',
    chipBg: 'bg-[#D7FF36]',
    chipText: 'text-[#111111]',
    partnerInfo: 'Ernst & Young (EY) · Department of Industries & Commerce · Government of Tripura',
    stat1: { label: 'Investment Commitments', value: '₹95,286 Cr' },
    stat2: { label: 'Bilateral Sessions', value: '347' },
    yearTag: '2026',
    typeTag: 'GOV · ADVISORY',
  },
  beetlex: {
    shortName: 'BeetleX LLP',
    category: 'Program Mgmt & Tech Hiring',
    accentBg: 'bg-[#304FFE]',
    accentText: 'text-white',
    chipBg: 'bg-[#304FFE]',
    chipText: 'text-white',
    partnerInfo: 'Regional Hack-to-Hire collegiate tech talent pipelines across East India',
    stat1: { label: 'Initiative Type', value: 'Hack-to-Hire' },
    stat2: { label: 'Reach Zone', value: 'East India' },
    yearTag: '2025–26',
    typeTag: 'PROGRAM · MGMT',
  },
  nfsu: {
    shortName: 'NFSU',
    category: 'Forensic Blockchain & Web3',
    accentBg: 'bg-[#0E1A2E]',
    accentText: 'text-[#38BDF8]',
    chipBg: 'bg-[#0E1A2E]',
    chipText: 'text-[#38BDF8]',
    partnerInfo: 'National Forensic Sciences University · Ministry of Home Affairs · Govt of India',
    stat1: { label: 'Architecture Stack', value: 'Solidity + IPFS' },
    stat2: { label: 'Verification Mode', value: 'Tamper-Proof' },
    yearTag: '2025',
    typeTag: 'CYBER · WEB3',
  },
  nic: {
    shortName: 'NIC',
    category: 'Applied Cryptography & E-Gov',
    accentBg: 'bg-[#005A9C]',
    accentText: 'text-white',
    chipBg: 'bg-[#005A9C]',
    chipText: 'text-white',
    partnerInfo: 'National Informatics Centre · Ministry of Electronics & IT · Govt of India',
    stat1: { label: 'Cryptography', value: 'RSA 2048-Bit' },
    stat2: { label: 'Backend Stack', value: 'Spring Boot' },
    yearTag: '2024',
    typeTag: 'JAVA · E-GOV',
  },
  'assam-university': {
    shortName: 'Assam University',
    category: 'Summer Research Internship',
    accentBg: 'bg-[#7C1D1D]',
    accentText: 'text-white',
    chipBg: 'bg-[#7C1D1D]',
    chipText: 'text-white',
    partnerInfo: 'Project: Blockchain-based Quantum-Resistant Key Exchange for AWS IoT — CRYSTALS-Kyber512 + Solidity + AWS IoT Core + Next.js 15',
    stat1: { label: 'Post-Quantum Crypto', value: 'Kyber512' },
    stat2: { label: 'Cloud Platform', value: 'AWS IoT Core' },
    yearTag: 'May–Jun 2026',
    typeTag: 'SUMMER · RESEARCH',
  },
};

export default function Experience() {
  const experiences = PORTFOLIO_DATA.experience;
  const [selectedId, setSelectedId] = useState<string>(experiences[0].id);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeExp = experiences.find((e) => e.id === selectedId) || experiences[0];
  const activeConfig = CONFIGS[activeExp.id] || CONFIGS.ficci;

  const handleSelect = (id: string) => {
    sound.playClick();
    setSelectedId(id);
  };

  return (
    <section
      id="journey"
      className="w-full bg-[#F2F0E8] py-14 md:py-20 relative paper-grain border-b border-[#111111]"
    >
      <span id="experience" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ── Section Header ───────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#111111] pb-5 mb-8">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono-tech tracking-widest uppercase font-bold text-[#111111]">
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#D7FF36] animate-pulse" />
                <span className="w-0.5 h-3 bg-[#304FFE] animate-pulse [animation-delay:150ms]" />
                <span className="w-0.5 h-1.5 bg-[#FF5733] animate-pulse [animation-delay:300ms]" />
              </span>
              <span className="px-1.5 py-0.5 bg-[#304FFE] text-white text-[10px] font-bold leading-none">02</span>
              <span className="text-[#304FFE]">//</span>
              <span className="flex items-center gap-1.5">
                PROFESSIONAL TRAJECTORY
                <span className="w-1.5 h-1.5 rounded-full bg-[#304FFE] animate-ping" />
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-archivo text-[#111111] tracking-tight uppercase">
              EXPERIENCE & IMPACT.
            </h2>
          </div>
          <div className="text-[11px] font-mono-tech text-neutral-600 md:text-right space-y-0.5">
            <div className="text-[#111111] font-bold">₹95,286+ CR · 347 BILATERAL SESSIONS</div>
            <div>GOV · CYBER/WEB3 · PROGRAM MGMT · FULL STACK · ACADEMIA</div>
          </div>
        </div>

        {/* ── 1. Org Selector: Horizontal pill-tabs with real logos ── */}
        <div className="mb-6">
          <div
            ref={scrollRef}
            className="flex gap-2.5 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap"
          >
            {experiences.map((exp, idx) => {
              const isCurrent = exp.id === selectedId;
              const cfg = CONFIGS[exp.id] || CONFIGS.ficci;

              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => handleSelect(exp.id)}
                  className={`group flex items-center gap-2.5 px-3 py-2 border-2 transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? 'border-[#111111] bg-white brutalist-shadow-sm -translate-y-0.5'
                      : 'border-neutral-300 bg-white/60 hover:border-[#111111] hover:bg-white'
                  }`}
                >
                  {/* Index dot */}
                  <span className={`text-[9px] font-mono-tech font-bold w-4 h-4 flex items-center justify-center border ${isCurrent ? 'bg-[#304FFE] text-white border-[#304FFE]' : 'border-neutral-300 text-neutral-500'}`}>
                    {idx + 1}
                  </span>

                  {/* Logo */}
                  <CompanyLogo id={exp.id} size="sm" className="!w-7 !h-7 border-0" />

                  {/* Name */}
                  <span className={`font-archivo text-xs font-black uppercase tracking-tight ${isCurrent ? 'text-[#111111]' : 'text-neutral-600 group-hover:text-[#111111]'}`}>
                    {cfg.shortName}
                  </span>

                  {/* Year chip */}
                  <span className={`text-[9px] font-mono-tech px-1.5 py-0.5 font-bold ${isCurrent ? `${cfg.chipBg} ${cfg.chipText}` : 'bg-neutral-100 text-neutral-500'}`}>
                    {cfg.yearTag}
                  </span>

                  {/* Active underline */}
                  {isCurrent && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#304FFE] animate-pulse ml-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── 2. Compact Dossier Card ────────────────────────────── */}
        <div className="mb-6 border-2 border-[#111111] bg-white brutalist-shadow relative overflow-hidden transition-all duration-300">

          {/* Top accent bar */}
          <div className={`h-1 w-full ${activeConfig.accentBg}`} />

          <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left: Identity block */}
            <div className="flex gap-4 items-start">
              <CompanyLogo id={activeExp.id} size="lg" className="shrink-0 mt-0.5" />

              <div className="space-y-2 min-w-0">
                {/* Type chip + category */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className={`px-2 py-0.5 text-[9px] font-mono-tech font-black uppercase border border-[#111111] ${activeConfig.chipBg} ${activeConfig.chipText}`}>
                    {activeConfig.typeTag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-archivo text-[#111111] uppercase tracking-tight font-black leading-tight">
                  {activeExp.role}
                </h3>
                <p className="text-xs font-mono-tech text-neutral-700 font-medium">{activeExp.organization}</p>

                {/* Tenure + Location inline */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono-tech text-neutral-600">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#304FFE]" />
                    <span className="font-bold text-[#111111]">{activeExp.period}</span>
                  </span>
                  <span className="text-neutral-400">·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#FF5733]" />
                    {activeExp.location}
                  </span>
                </div>

                {/* Partner note */}
                {activeConfig.partnerInfo && (
                  <div className="flex items-start gap-1.5 text-[11px] font-mono-tech text-neutral-600 border-l-2 border-[#304FFE] pl-2">
                    <Sparkles className="w-3 h-3 text-[#304FFE] shrink-0 mt-0.5" />
                    <span>{activeConfig.partnerInfo}</span>
                  </div>
                )}

                {/* 2 compact stat pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="px-2.5 py-1.5 bg-[#111111] text-[#F2F0E8] border border-[#111111]">
                    <div className="text-[9px] font-mono-tech text-[#D7FF36] uppercase tracking-wider font-bold">{activeConfig.stat1.label}</div>
                    <div className="text-sm font-archivo font-black text-white">{activeConfig.stat1.value}</div>
                  </div>
                  <div className="px-2.5 py-1.5 bg-[#F2F0E8] border border-[#111111]">
                    <div className="text-[9px] font-mono-tech text-neutral-500 uppercase tracking-wider font-bold">{activeConfig.stat2.label}</div>
                    <div className="text-sm font-archivo font-black text-[#304FFE]">{activeConfig.stat2.value}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Deliverables as compact numbered list */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200">
                <span className="text-[10px] font-mono-tech font-bold uppercase tracking-widest text-[#111111] flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#304FFE]" />
                  KEY DELIVERABLES
                </span>
                <span className="text-[9px] font-mono-tech bg-[#D7FF36] px-1.5 py-0.5 border border-[#111111] font-bold">VERIFIED CV</span>
              </div>

              {activeExp.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-[11px] font-mono-tech text-neutral-800 py-1.5 border-b border-neutral-100 last:border-0">
                  <span className="w-4 h-4 flex items-center justify-center bg-[#304FFE] text-white text-[9px] font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{h}</span>
                </div>
              ))}

              {/* Tags row */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {activeExp.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-mono-tech bg-neutral-100 border border-neutral-300 text-neutral-700 hover:bg-[#D7FF36] hover:border-[#111111] transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. Career Timeline: Compact horizontal scroll ─────── */}
        <div className="border-2 border-[#111111] bg-white brutalist-shadow overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-[#111111] bg-[#111111] text-[#F2F0E8]">
            <div className="flex items-center gap-2 text-xs font-mono-tech font-bold uppercase tracking-widest">
              <TrendingUp className="w-3.5 h-3.5 text-[#D7FF36]" />
              <span>CAREER CONTINUUM // 2022 — PRESENT</span>
            </div>
            <span className="text-[10px] font-mono-tech text-neutral-400 hidden sm:inline">
              {experiences.length} NODES · CLICK TO LOAD
            </span>
          </div>

          {/* Compact node grid */}
          <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200">
            {experiences.map((exp, idx) => {
              const cfg = CONFIGS[exp.id] || CONFIGS.ficci;
              const isSelected = exp.id === selectedId;

              return (
                <div
                  key={exp.id}
                  onClick={() => handleSelect(exp.id)}
                  className={`p-4 cursor-pointer transition-all duration-150 group relative flex sm:flex-col gap-3 sm:gap-2 items-center sm:items-start ${
                    isSelected ? 'bg-[#F2F0E8]' : 'bg-white hover:bg-neutral-50'
                  }`}
                >
                  {/* Active left / top bar */}
                  <div className={`absolute left-0 top-0 sm:top-0 sm:left-0 sm:right-0 sm:h-0.5 h-full w-0.5 sm:w-auto transition-all ${isSelected ? `${cfg.chipBg}` : 'bg-transparent'}`} />

                  {/* Logo + year row */}
                  <div className="flex sm:flex-row items-center gap-2 shrink-0">
                    <CompanyLogo id={exp.id} size="sm" className="!w-8 !h-8 shrink-0" />
                    <div>
                      <div className={`text-[10px] font-mono-tech font-bold ${isSelected ? 'text-[#304FFE]' : 'text-neutral-500'}`}>
                        {cfg.yearTag}
                      </div>
                      <span className={`text-[9px] font-mono-tech px-1 font-bold border ${isSelected ? `${cfg.chipBg} ${cfg.chipText} border-transparent` : 'bg-neutral-100 text-neutral-500 border-neutral-200'}`}>
                        {cfg.typeTag}
                      </span>
                    </div>
                  </div>

                  {/* Name & stat */}
                  <div className="min-w-0">
                    <div className="font-archivo text-xs font-black uppercase text-[#111111] truncate">{cfg.shortName}</div>
                    <div className="text-[10px] font-mono-tech text-neutral-600 truncate">{exp.role}</div>
                    <div className="mt-1 text-[10px] font-mono-tech font-bold text-[#304FFE] flex items-center gap-1">
                      {cfg.stat1.value}
                      <ArrowUpRight className={`w-3 h-3 transition-all ${isSelected ? 'text-[#304FFE]' : 'text-neutral-400 group-hover:text-[#304FFE]'}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
