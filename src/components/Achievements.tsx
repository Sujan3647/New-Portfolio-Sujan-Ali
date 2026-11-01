import { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  Trophy,
  Award,
  Sparkles,
  ShieldCheck,
  Zap,
  Star,
  Check,
  Copy,
  Crown,
  Radio,
  ExternalLink,
  ChevronRight,
  Flame,
  Globe
} from 'lucide-react';
import { PORTFOLIO_DATA, AchievementItem } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Achievements() {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [celebrating, setCelebrating] = useState(false);

  // Trigger celebration confetti
  const launchCelebration = (source: 'global' | 'card' = 'global') => {
    sound.playPop();
    setCelebrating(true);

    if (source === 'global') {
      // Dual-angle multi-color burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00E676', '#304FFE', '#D7FF36', '#FF5733', '#FFD700'],
      });
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#00E676', '#D7FF36'],
        });
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#304FFE', '#FF5733'],
        });
      }, 200);
    } else {
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#D7FF36', '#00E676', '#304FFE'],
      });
    }

    setTimeout(() => setCelebrating(false), 2000);
  };

  const copyCitation = (item: AchievementItem, e: React.MouseEvent) => {
    e.stopPropagation();
    sound.playClick();
    const citation = `${item.headlineNumber}: ${item.title} — ${item.organization} (${item.year})`;
    navigator.clipboard.writeText(citation);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const categories = ['ALL', 'Leadership & Google', 'Grants & Govt', 'Hackathons & Global'];

  const filteredItems = useMemo(() => {
    return PORTFOLIO_DATA.achievements.filter((item) => {
      if (activeFilter === 'ALL') return true;
      if (activeFilter === 'Leadership & Google') {
        return item.id === 'gfg-mantri' || item.id === 'gdgoc-vp' || item.id === 'technovate';
      }
      if (activeFilter === 'Grants & Govt') {
        return item.id === 'ngin-grant' || item.id === 'meity-tide';
      }
      if (activeFilter === 'Hackathons & Global') {
        return item.id === 'cyber-hackathon' || item.id === 'tie-u';
      }
      return true;
    });
  }, [activeFilter]);

  // Accent metadata configuration per item
  const getItemConfig = (id: string) => {
    switch (id) {
      case 'gfg-mantri':
        return {
          glowColor: 'hover:border-emerald-500/80 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)]',
          topLine: 'bg-emerald-400',
          numberColor: 'text-emerald-400',
          badgeBg: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
          beaconColor: 'bg-emerald-400',
          label: 'CAMPUS AMBASSADOR #01',
          icon: <Flame className="w-3.5 h-3.5 text-emerald-400" />
        };
      case 'gdgoc-vp':
        return {
          glowColor: 'hover:border-blue-500/80 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]',
          topLine: 'bg-[#304FFE]',
          numberColor: 'text-[#38bdf8]',
          badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
          beaconColor: 'bg-blue-400',
          label: 'GOOGLE EXECUTIVE LEAD',
          icon: (
            <div className="flex items-center gap-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
            </div>
          )
        };
      case 'ngin-grant':
        return {
          glowColor: 'hover:border-amber-500/80 hover:shadow-[0_0_25px_rgba(245,158,11,0.25)]',
          topLine: 'bg-amber-400',
          numberColor: 'text-amber-300',
          badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
          beaconColor: 'bg-amber-400',
          label: 'GOVT SEED CAPITAL',
          icon: <Crown className="w-3.5 h-3.5 text-amber-400" />
        };
      case 'cyber-hackathon':
        return {
          glowColor: 'hover:border-rose-500/80 hover:shadow-[0_0_25px_rgba(244,63,94,0.25)]',
          topLine: 'bg-rose-500',
          numberColor: 'text-rose-400',
          badgeBg: 'bg-rose-950/80 text-rose-300 border-rose-500/40',
          beaconColor: 'bg-rose-400',
          label: 'DEFENSE HACKATHON',
          icon: <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
        };
      case 'tie-u':
        return {
          glowColor: 'hover:border-purple-500/80 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]',
          topLine: 'bg-purple-500',
          numberColor: 'text-purple-300',
          badgeBg: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
          badge: 'INTERNATIONAL PITCH',
          beaconColor: 'bg-purple-400',
          label: 'GLOBAL STARTUP FORUM',
          icon: <Globe className="w-3.5 h-3.5 text-purple-400" />
        };
      case 'meity-tide':
        return {
          glowColor: 'hover:border-cyan-500/80 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]',
          topLine: 'bg-cyan-400',
          numberColor: 'text-cyan-300',
          badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40',
          beaconColor: 'bg-cyan-400',
          label: 'CENTRAL MINISTRY RECOGNITION',
          icon: <Award className="w-3.5 h-3.5 text-cyan-400" />
        };
      case 'technovate':
      default:
        return {
          glowColor: 'hover:border-[#D7FF36]/80 hover:shadow-[0_0_25px_rgba(215,255,54,0.25)]',
          topLine: 'bg-[#D7FF36]',
          numberColor: 'text-[#D7FF36]',
          badgeBg: 'bg-neutral-900 text-neutral-300 border-neutral-700',
          beaconColor: 'bg-[#D7FF36]',
          label: 'LEADERSHIP AT SCALE',
          icon: <Zap className="w-3.5 h-3.5 text-[#D7FF36]" />
        };
    }
  };

  return (
    <section
      id="impact"
      className="w-full border-b-2 border-[#111111] bg-[#0E0E10] text-white py-12 md:py-16 relative overflow-hidden selection:bg-[#D7FF36] selection:text-black"
    >
      <span id="achievements" className="absolute -top-16" />

      {/* Futuristic background grid mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b1b1f_1px,transparent_1px),linear-gradient(to_bottom,#1b1b1f_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      {/* Subtle top ambient light glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#304FFE]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-6">
        {/* ========================================================= */}
        {/* SECTION HEADER BAR (HOLOGRAPHIC COCKPIT) */}
        {/* ========================================================= */}
        <div className="border border-neutral-800 bg-[#141416]/90 backdrop-blur-md p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-tech">
              <span className="px-2 py-0.5 bg-[#D7FF36] text-black font-bold">
                05
              </span>
              <span className="text-[#D7FF36] font-bold tracking-widest uppercase">
                // HONORS & CITATION VAULT
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px]">
                <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                <span>7 CITATIONS VERIFIED</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-archivo text-white uppercase tracking-tight">
              HONORS & PROOF OF IMPACT.
            </h2>
          </div>

          {/* Right Action: Category Filter + Confetti Cannon */}
          <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 w-full md:w-auto">
            {/* Filter Pills */}
            <div className="flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-800 overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setActiveFilter(cat);
                  }}
                  className={`px-2 py-1 text-[10px] sm:text-[11px] font-mono-tech font-bold uppercase transition-all whitespace-nowrap shrink-0 ${
                    activeFilter === cat
                      ? 'bg-white text-black'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Celebrate Wins Button */}
            <button
              type="button"
              onClick={() => launchCelebration('global')}
              className={`px-2.5 sm:px-3 py-1.5 border font-mono-tech text-[11px] sm:text-xs font-bold uppercase transition-all flex items-center gap-1.5 shrink-0 ${
                celebrating
                  ? 'bg-[#D7FF36] text-black border-[#D7FF36] scale-105'
                  : 'bg-neutral-900 text-white border-neutral-700 hover:border-[#D7FF36] hover:text-[#D7FF36]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D7FF36]" />
              <span>{celebrating ? '🎉 WIN!' : 'CELEBRATE'}</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* COMPACT HOLOGRAPHIC CITATION CARDS (7 ITEMS) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {filteredItems.map((item) => {
            const config = getItemConfig(item.id);

            return (
              <div
                key={item.id}
                onClick={() => launchCelebration('card')}
                className={`group cursor-pointer border border-neutral-800 bg-[#141416] p-4 flex flex-col justify-between transition-all duration-300 ${config.glowColor} relative overflow-hidden`}
              >
                {/* Glowing top line border */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${config.topLine}`} />

                <div>
                  {/* Card Top Metadata */}
                  <div className="flex items-center justify-between pb-2 mb-2 border-b border-neutral-800 text-[10px] font-mono-tech">
                    <div className="flex items-center gap-1.5">
                      {config.icon}
                      <span className="font-bold text-neutral-300 uppercase tracking-wider">
                        {config.label}
                      </span>
                    </div>
                    <span className="text-neutral-400 font-semibold">{item.year}</span>
                  </div>

                  {/* Giant Headline Metric */}
                  <div className="my-1.5">
                    <div className={`text-xl sm:text-2xl font-archivo uppercase tracking-tight leading-none ${config.numberColor}`}>
                      {item.headlineNumber}
                    </div>

                    <h3 className="font-archivo text-xs sm:text-sm uppercase text-white mt-1.5 line-clamp-1 group-hover:text-[#D7FF36] transition-colors">
                      {item.title}
                    </h3>

                    <div className="text-[11px] font-mono-tech text-neutral-400 uppercase mt-0.5 line-clamp-1 font-semibold">
                      {item.organization}
                    </div>
                  </div>

                  {/* Narrative Body */}
                  <p className="mt-2 text-xs font-mono-tech text-neutral-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Verified Citation Pill + Copy Action */}
                <div className="mt-4 pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono-tech">
                  <span className="inline-flex items-center gap-1 text-emerald-400 font-bold">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>VERIFIED RECORD</span>
                  </span>

                  <button
                    type="button"
                    onClick={(e) => copyCitation(item, e)}
                    className="text-neutral-400 hover:text-white p-1 transition-colors flex items-center gap-1"
                    title="Copy Citation"
                  >
                    {copiedId === item.id ? (
                      <span className="text-emerald-400 font-bold">COPIED</span>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="text-[9px]">COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================= */}
        {/* COMPACT CHRONOLOGICAL MILESTONE HORIZON (2023 - 2026) */}
        {/* ========================================================= */}
        <div className="border border-neutral-800 bg-[#141416] p-3.5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono-tech">
          <div className="flex items-center gap-2 truncate">
            <span className="px-2 py-0.5 bg-neutral-800 text-[#D7FF36] font-bold text-[10px] shrink-0">
              MILESTONE TRAIL
            </span>
            <div className="truncate text-neutral-300 text-[11px]">
              <span className="text-white font-bold">2023:</span> 1st GFG Campus Mantri ·{' '}
              <span className="text-white font-bold">2024:</span> ₹1L NGIN Startup Grant ·{' '}
              <span className="text-white font-bold">2025:</span> TiE U Top 25 ·{' '}
              <span className="text-white font-bold">2026:</span> GDGoC Vice President & ₹95,286 Cr Conclave
            </div>
          </div>

          <a
            href="#journey"
            onClick={() => sound.playClick()}
            className="py-1.5 px-3 bg-[#D7FF36] text-black hover:bg-white font-bold text-[11px] uppercase transition-colors shrink-0 flex items-center gap-1"
          >
            <span>FULL JOURNEY TIMELINE</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
