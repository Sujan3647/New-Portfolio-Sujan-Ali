import { ExternalLink, Github, Globe, Radio, Shield, Zap, Sparkles, Terminal, Check } from 'lucide-react';
import { sound } from '../utils/sound';

interface ProjectTickerItem {
  id: string;
  name: string;
  domain: string;
  metric: string;
  badge: string;
  status: 'live' | 'repo';
  categoryColor: string;
}

const PROJECT_TICKER_ITEMS: ProjectTickerItem[] = [
  {
    id: 'sic-portal',
    name: 'STARTUP & INCUBATION CENTRE (SIC)',
    domain: 'sic.iutripura.in',
    metric: '28+ Startups · ₹15.4L Grants',
    badge: 'LIVE PRODUCTION',
    status: 'live',
    categoryColor: 'bg-emerald-400 text-black',
  },
  {
    id: 'technovate',
    name: 'TECHNOVATE 2K26 PLATFORM',
    domain: 'technovate.iutripura.in',
    metric: '1,500+ Coders · 12 Arenas',
    badge: 'FLAGSHIP FEST',
    status: 'live',
    categoryColor: 'bg-[#D7FF36] text-black',
  },
  {
    id: 'couponpe',
    name: 'COUPONPE FINTECH ENGINE',
    domain: 'couponpe.vercel.app',
    metric: '<50ms Search · 500+ Deals',
    badge: 'VERCEL EDGE',
    status: 'live',
    categoryColor: 'bg-cyan-400 text-black',
  },
  {
    id: 'destination-tripura',
    name: 'DESTINATION TRIPURA CONCLAVE',
    domain: 'destination-tripura-business-concla.vercel.app',
    metric: '₹95,286+ Cr · 347 B2G Meetings',
    badge: 'STATE SUMMIT',
    status: 'live',
    categoryColor: 'bg-amber-400 text-black',
  },
  {
    id: 'quantum-aws-iot',
    name: 'QUANTUM-RESISTANT AWS IOT',
    domain: 'github.com/Sujan3647/...',
    metric: 'NIST ML-KEM Kyber · AWS IoT',
    badge: 'POST-QUANTUM',
    status: 'repo',
    categoryColor: 'bg-purple-400 text-black',
  },
  {
    id: 'bio-cyber-defense',
    name: 'BIO-INSPIRED CYBER DEFENSE',
    domain: 'github.com/Sujan3647/...',
    metric: 'Artificial Immune System · Quantum AIS',
    badge: 'AUTONOMOUS AI',
    status: 'repo',
    categoryColor: 'bg-emerald-300 text-black',
  },
  {
    id: 'anti-cheating',
    name: 'ANTI-CHEATING SENTINEL',
    domain: 'github.com/Sujan3647/...',
    metric: 'Rank 4 State Cyber Hackathon',
    badge: 'STOMP <80MS',
    status: 'repo',
    categoryColor: 'bg-rose-400 text-black',
  },
  {
    id: 'student-docs-mis',
    name: 'DECENTRALISED STUDENT MIS',
    domain: 'github.com/Sujan3647/...',
    metric: 'Ethereum Soulbound & IPFS Registry',
    badge: 'NFSU RESEARCH',
    status: 'repo',
    categoryColor: 'bg-blue-400 text-black',
  },
  {
    id: 'data-encryption',
    name: 'PERSONAL DATA ENCRYPTION',
    domain: 'github.com/Sujan3647/...',
    metric: 'Dual-Layer RSA-2048 + AES-256',
    badge: 'NIC ENGINE',
    status: 'repo',
    categoryColor: 'bg-teal-400 text-black',
  },
];

const ARCHITECTURE_SIGNATURES = [
  'SUB-80MS STOMP WEBSOCKET STREAMING',
  'POST-QUANTUM LATTICE CRYPTOGRAPHY (ML-KEM)',
  '₹95,286.45 CR INVESTMENT CONCLAVE',
  'RANK 4 STATE CYBER SECURITY HACKATHON',
  'SOLIDITY SOULBOUND TOKENS & IPFS',
  'CLOUDFLARE EDGE & VERCEL CDN PROPAGATION',
  'AES-256-GCM ZERO PLAINTEXT RESIDUE',
  '1,500+ HACKATHON PARTICIPANTS CONCURRENCY',
  'SPRING BOOT DOCKER MICROSERVICES',
  'POWER BI STATE INDUSTRIAL INTELLIGENCE',
];

export default function ProjectsScrollBanner() {
  const scrollToProjects = () => {
    sound.playPop();
    const el = document.getElementById('work');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Duplicate for seamless loop
  const repeatedProjects = [
    ...PROJECT_TICKER_ITEMS,
    ...PROJECT_TICKER_ITEMS,
    ...PROJECT_TICKER_ITEMS,
  ];

  const repeatedSignatures = [
    ...ARCHITECTURE_SIGNATURES,
    ...ARCHITECTURE_SIGNATURES,
    ...ARCHITECTURE_SIGNATURES,
  ];

  return (
    <div className="relative w-full overflow-hidden select-none border-y-2 border-[#111111] bg-[#111111] py-3 space-y-2.5">
      {/* 1. Subtle Mini Telemetry Header */}
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 pb-1">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF36] animate-ping" />
          <span className="text-white font-bold tracking-wider uppercase">
            LIVE SYSTEM STREAM // ALL DEPLOYED TARGETS
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-400">
            <Radio className="w-3 h-3 animate-pulse" />
            <span>9/9 SERVICES HEALTHY</span>
          </span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-300">HOVER TO PAUSE STREAM</span>
        </div>
      </div>

      {/* 2. Ribbon 1: Interactive Project Micro-Cards (Scrolling Left) */}
      <div className="overflow-hidden whitespace-nowrap py-1">
        <div className="animate-marquee-left flex items-center gap-3">
          {repeatedProjects.map((item, idx) => (
            <div
              key={`proj-${idx}`}
              onClick={scrollToProjects}
              className="group cursor-pointer inline-flex items-center gap-2.5 px-3.5 py-2 bg-neutral-900 hover:bg-[#111111] border border-neutral-700 hover:border-[#D7FF36] text-white transition-all brutalist-shadow-sm shrink-0"
              title="Click to view in archive"
            >
              {/* Status Dot */}
              <span
                className={`w-2 h-2 rounded-full ${
                  item.status === 'live' ? 'bg-emerald-400' : 'bg-cyan-400'
                } group-hover:scale-125 transition-transform`}
              />

              {/* Title & Domain */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5">
                  <span className="font-archivo text-xs uppercase tracking-tight text-white group-hover:text-[#D7FF36] transition-colors">
                    {item.name}
                  </span>
                  <span
                    className={`text-[9px] font-mono-tech font-bold px-1.5 py-0.2 rounded-none uppercase ${item.categoryColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] font-mono-tech text-neutral-400">
                  <span className="text-neutral-300">{item.domain}</span>
                  <span>·</span>
                  <span className="text-neutral-400">{item.metric}</span>
                </div>
              </div>

              {/* Action indicator */}
              <div className="pl-1 text-neutral-500 group-hover:text-[#D7FF36] transition-colors">
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Ribbon 2: High-Voltage Acid Lime Engineering Strip (Scrolling Right) */}
      <div className="overflow-hidden whitespace-nowrap py-1.5 bg-[#D7FF36] text-[#111111] border-y border-[#111111]">
        <div className="animate-marquee-right flex items-center">
          {repeatedSignatures.map((sig, idx) => (
            <div
              key={`sig-${idx}`}
              className="flex items-center mx-3 font-mono-tech text-xs font-bold uppercase tracking-wider text-[#111111]"
            >
              <Zap className="w-3 h-3 text-[#111111] mr-1.5 shrink-0" />
              <span>{sig}</span>
              <span className="mx-3 text-[#304FFE] font-black">✦</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

