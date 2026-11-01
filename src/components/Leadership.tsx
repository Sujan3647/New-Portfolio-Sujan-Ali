import { useState, useEffect, useRef } from 'react';
import {
  Users,
  Award,
  Shield,
  Sparkles,
  Check,
  Copy,
  Radio,
  Flame,
  Globe,
  Terminal,
  Zap,
  Crown,
  LayoutGrid,
  Laptop,
  Play,
  Pause,
  RotateCw
} from 'lucide-react';
import { PORTFOLIO_DATA, LeadershipRole } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Leadership() {
  const [copiedRole, setCopiedRole] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'3d-grid' | '3d-cockpit'>('3d-grid');
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [autoMotion, setAutoMotion] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Preferred display order highlighting GDGoC & GFG
  const sortedRoles = [...PORTFOLIO_DATA.leadership].sort((a, b) => {
    const priority = (org: string) => {
      if (org.includes('GDG') || org.includes('Google')) return 1;
      if (org.includes('GeeksforGeeks')) return 2;
      if (org.includes('Innovation Council') || org.includes('Startup')) return 3;
      if (org.includes('TechNOVATE')) return 4;
      return 5;
    };
    return priority(a.organization) - priority(b.organization);
  });

  // Auto-Motion timer for 3D Cockpit mode
  useEffect(() => {
    if (!autoMotion || isHovered) return;

    const interval = setInterval(() => {
      setSelectedIdx((prev) => (prev + 1) % sortedRoles.length);
    }, 4200);

    return () => clearInterval(interval);
  }, [autoMotion, isHovered, sortedRoles.length]);

  const toggleAutoMotion = () => {
    sound.playClick();
    setAutoMotion((prev) => !prev);
  };

  const handleCopy = (item: LeadershipRole, e?: React.MouseEvent) => {
    e?.stopPropagation();
    sound.playClick();
    const text = `${item.role} @ ${item.organization} (${item.period}) — Impact: ${item.impact}`;
    navigator.clipboard.writeText(text);
    setCopiedRole(item.organization);
    setTimeout(() => setCopiedRole(null), 1800);
  };

  const getTheme = (org: string) => {
    if (org.includes('Google') || org.includes('GDG')) {
      return {
        tag: 'GOOGLE ECOSYSTEM',
        color: '#38bdf8',
        topLine: 'bg-[#4285F4]',
        borderGlow: 'hover:border-[#4285F4] hover:shadow-[0_0_30px_rgba(66,133,244,0.35)]',
        badgeColor: 'bg-blue-950/80 text-blue-300 border-blue-500/40',
        icon: (
          <div className="flex items-center gap-1 p-1 bg-white/10 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#EA4335]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBC05]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#34A853]" />
          </div>
        ),
      };
    }
    if (org.includes('GeeksforGeeks')) {
      return {
        tag: 'CAMPUS AMBASSADOR #01',
        color: '#00E676',
        topLine: 'bg-emerald-400',
        borderGlow: 'hover:border-emerald-500 hover:shadow-[0_0_30px_rgba(0,230,118,0.35)]',
        badgeColor: 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40',
        icon: (
          <div className="p-1 bg-emerald-950/80 rounded-full border border-emerald-500/40">
            <Flame className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        ),
      };
    }
    if (org.includes('Innovation Council') || org.includes('Startup')) {
      return {
        tag: 'INCUBATION GOVERNANCE',
        color: '#FFD700',
        topLine: 'bg-amber-400',
        borderGlow: 'hover:border-amber-400 hover:shadow-[0_0_30px_rgba(255,215,0,0.35)]',
        badgeColor: 'bg-amber-950/80 text-amber-300 border-amber-500/40',
        icon: (
          <div className="p-1 bg-amber-950/80 rounded-full border border-amber-400/40">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
          </div>
        ),
      };
    }
    if (org.includes('TechNOVATE')) {
      return {
        tag: 'FLAGSHIP SYMPOSIUM',
        color: '#D7FF36',
        topLine: 'bg-[#D7FF36]',
        borderGlow: 'hover:border-[#D7FF36] hover:shadow-[0_0_30px_rgba(215,255,54,0.35)]',
        badgeColor: 'bg-lime-950/80 text-[#D7FF36] border-[#D7FF36]/40',
        icon: (
          <div className="p-1 bg-lime-950/80 rounded-full border border-[#D7FF36]/40">
            <Zap className="w-3.5 h-3.5 text-[#D7FF36]" />
          </div>
        ),
      };
    }
    return {
      tag: 'COMPETITIVE DSA GUILD',
      color: '#C084FC',
      topLine: 'bg-purple-400',
      borderGlow: 'hover:border-purple-400 hover:shadow-[0_0_30px_rgba(192,132,252,0.35)]',
      badgeColor: 'bg-purple-950/80 text-purple-300 border-purple-500/40',
      icon: (
        <div className="p-1 bg-purple-950/80 rounded-full border border-purple-400/40">
          <Terminal className="w-3.5 h-3.5 text-purple-400" />
        </div>
      ),
    };
  };

  const selectedItem = sortedRoles[selectedIdx] || sortedRoles[0];
  const selectedTheme = getTheme(selectedItem.organization);

  return (
    <section
      id="leadership"
      className="w-full border-b-2 border-[#111111] bg-[#0A0A0C] text-white py-10 md:py-14 relative overflow-hidden selection:bg-[#D7FF36] selection:text-black"
    >
      {/* 3D Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#151518_1px,transparent_1px),linear-gradient(to_bottom,#151518_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[250px] bg-[#304FFE]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-6">
        {/* ========================================================= */}
        {/* COMPACT SECTION HEADER & 3D CONTROLS */}
        {/* ========================================================= */}
        <div className="border border-neutral-800 bg-[#121215]/90 backdrop-blur-md p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono-tech">
              <span className="px-2 py-0.5 bg-[#D7FF36] text-black font-bold">
                06
              </span>
              <span className="text-[#D7FF36] font-bold tracking-widest uppercase">
                // 3D LEADERSHIP MATRIX
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-neutral-900 border border-neutral-700 text-neutral-300 text-[10px]">
                <Radio className="w-2.5 h-2.5 text-emerald-400 animate-pulse" />
                <span>5 MANDATES · 600+ ENGINEERS</span>
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-archivo text-white uppercase tracking-tight">
              STEWARDSHIP & GOVERNANCE.
            </h2>
          </div>

          {/* Controls: Auto-Motion Toggle + View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto">
            {/* Auto Motion Pulse Button */}
            <button
              type="button"
              onClick={toggleAutoMotion}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 text-[11px] sm:text-xs font-mono-tech font-bold uppercase transition-all border ${
                autoMotion
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.2)]'
                  : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
              }`}
              title="Toggle continuous 3D ambient auto-motion"
            >
              <RotateCw className={`w-3.5 h-3.5 ${autoMotion ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              <span>{autoMotion ? 'AUTO-MOTION: ON' : 'AUTO-MOTION: PAUSED'}</span>
            </button>

            {/* Mode Switcher: 3D Grid vs 3D Cockpit */}
            <div className="grid grid-cols-2 sm:flex items-center gap-1 bg-neutral-900 p-1 border border-neutral-800 text-xs font-mono-tech">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setViewMode('3d-grid');
                }}
                className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] font-bold uppercase transition-all ${
                  viewMode === '3d-grid'
                    ? 'bg-white text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>3D TILES</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setViewMode('3d-cockpit');
                }}
                className={`flex items-center justify-center gap-1.5 px-2.5 sm:px-3 py-1 text-[11px] font-bold uppercase transition-all ${
                  viewMode === '3d-cockpit'
                    ? 'bg-white text-black'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>3D COCKPIT</span>
              </button>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MODE 1: COMPACT 3D HOLOGRAPHIC TILES WITH AUTO-MOTION */}
        {/* ========================================================= */}
        {viewMode === '3d-grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {sortedRoles.map((item, idx) => {
              const theme = getTheme(item.organization);

              return (
                <AutoMotionCard3D
                  key={item.organization}
                  item={item}
                  theme={theme}
                  onCopy={(e) => handleCopy(item, e)}
                  isCopied={copiedRole === item.organization}
                  staggerIndex={idx}
                  autoMotionEnabled={autoMotion}
                />
              );
            })}
          </div>
        )}

        {/* ========================================================= */}
        {/* MODE 2: COMPACT 3D COCKPIT (AUTO-CYCLING IN HIGH-TECH HUD) */}
        {/* ========================================================= */}
        {viewMode === '3d-cockpit' && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch"
          >
            {/* Left Interactive 3D Holographic Card with active auto motion */}
            <div className="lg:col-span-7">
              <AutoMotionCard3D
                item={selectedItem}
                theme={selectedTheme}
                onCopy={(e) => handleCopy(selectedItem, e)}
                isCopied={copiedRole === selectedItem.organization}
                staggerIndex={0}
                autoMotionEnabled={autoMotion}
                expanded={true}
              />
            </div>

            {/* Right Mini Rail: Click to Inspect in 3D + Auto Timer Bar */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
              <div className="text-[11px] font-mono-tech font-bold text-neutral-400 px-1 uppercase flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>3D STAGE TARGET: {selectedIdx + 1}/5</span>
                </span>
                <span className="text-[#D7FF36]">
                  {autoMotion ? (isHovered ? 'PAUSED ON HOVER' : 'AUTO-GLIDING') : 'MANUAL'}
                </span>
              </div>

              {/* Roles Rail */}
              <div className="space-y-2 flex-1">
                {sortedRoles.map((item, idx) => {
                  const theme = getTheme(item.organization);
                  const isSelected = selectedIdx === idx;

                  return (
                    <div
                      key={item.organization}
                      onClick={() => {
                        sound.playPop();
                        setSelectedIdx(idx);
                      }}
                      className={`cursor-pointer p-3 border transition-all duration-300 flex items-center justify-between gap-3 text-xs font-mono-tech relative overflow-hidden ${
                        isSelected
                          ? 'bg-neutral-900 border-white text-white shadow-[0_0_20px_rgba(255,255,255,0.2)] translate-x-1.5'
                          : 'bg-[#121215] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
                      }`}
                    >
                      {/* Active slide progress indicator */}
                      {isSelected && autoMotion && !isHovered && (
                        <div
                          className="absolute bottom-0 left-0 h-[2px] bg-[#D7FF36] animate-tech-row-left"
                          style={{ width: '100%', animationDuration: '4.2s' }}
                        />
                      )}

                      <div className="flex items-center gap-2.5 min-w-0">
                        {theme.icon}
                        <div className="truncate">
                          <h4 className="font-archivo text-xs uppercase tracking-tight text-white truncate">
                            {item.role}
                          </h4>
                          <p className="text-[10px] text-neutral-400 truncate">
                            {item.organization}
                          </p>
                        </div>
                      </div>

                      <span className="text-[10px] text-neutral-500 font-semibold shrink-0">
                        {item.period}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Compact Footer Strip */}
        <div className="border border-neutral-800 bg-[#121215] p-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono-tech text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF36] animate-pulse" />
            <span>
              <strong className="text-white">3D AUTO-MOTION ACTIVE:</strong> Continuous ambient gyroscopic floating with real-time cursor tilt response.
            </span>
          </div>

          <span className="text-[#D7FF36] font-bold text-[11px] uppercase">
            // READY FOR STRATEGIC & ADVISORY ROLES
          </span>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SUBCOMPONENT: 3D CARD WITH AMBIENT AUTO-FLOAT + POINTER TILT
// =========================================================
interface AutoMotionCard3DProps {
  item: LeadershipRole;
  theme: {
    tag: string;
    color: string;
    topLine: string;
    borderGlow: string;
    badgeColor: string;
    icon: React.ReactNode;
  };
  onCopy: (e: React.MouseEvent) => void;
  isCopied: boolean;
  staggerIndex: number;
  autoMotionEnabled: boolean;
  expanded?: boolean;
}

function AutoMotionCard3D({
  item,
  theme,
  onCopy,
  isCopied,
  staggerIndex,
  autoMotionEnabled,
  expanded = false,
}: AutoMotionCard3DProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12;
    const rotateY = ((x - centerX) / centerX) * 14;

    setTilt({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.28,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  // If hovered, use direct mouse tilt; if not hovered and auto-motion enabled, use animated floating keyframes
  const applyAutoMotionClass = autoMotionEnabled && !isHovered ? 'animate-auto-float' : '';

  return (
    <article
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative border border-neutral-800 bg-[#121215] p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${theme.borderGlow} ${applyAutoMotionClass} group overflow-hidden ${
        expanded ? 'min-h-[290px]' : 'min-h-[210px]'
      }`}
      style={{
        animationDelay: `${staggerIndex * 1.3}s`,
        transform: isHovered
          ? `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(8px)`
          : undefined,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Specular Dynamic Glass Glare following cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-200"
        style={{
          opacity: glare.opacity,
          background: `radial-gradient(circle 260px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35), transparent 80%)`,
        }}
      />

      {/* Top Laser Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] ${theme.topLine}`} />

      {/* Content */}
      <div className="relative z-10 space-y-2.5 [transform:translateZ(15px)]">
        {/* Top Metadata Row */}
        <div className="flex items-center justify-between pb-2 border-b border-neutral-800 text-[10px] font-mono-tech">
          <div className="flex items-center gap-1.5">
            {theme.icon}
            <span className={`px-2 py-0.5 border font-bold uppercase tracking-wider ${theme.badgeColor}`}>
              {theme.tag}
            </span>
          </div>

          <span className="text-neutral-400 font-semibold">{item.period}</span>
        </div>

        {/* Role & Org */}
        <div>
          <h3 className="text-base sm:text-lg font-archivo uppercase text-white tracking-tight leading-tight group-hover:text-[#D7FF36] transition-colors">
            {item.role}
          </h3>
          <div
            className="text-[11px] font-mono-tech font-bold uppercase tracking-wider mt-0.5"
            style={{ color: theme.color }}
          >
            {item.organization}
          </div>
        </div>

        {/* Narrative Description */}
        <p className="text-xs text-neutral-400 font-mono-tech leading-relaxed line-clamp-2">
          {item.description}
        </p>
      </div>

      {/* Bottom Impact Box */}
      <div className="relative z-10 mt-3 pt-2.5 border-t border-neutral-800/80 [transform:translateZ(12px)] flex items-center justify-between gap-2 text-[10px] font-mono-tech">
        <div className="flex items-center gap-1.5 truncate">
          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="text-neutral-300 font-semibold truncate">
            {item.impact}
          </span>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className="hover:text-white text-neutral-400 shrink-0 p-1 flex items-center gap-1 transition-colors"
          title="Copy Mandate"
        >
          {isCopied ? (
            <span className="text-emerald-400 font-bold">COPIED</span>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span className="hidden sm:inline text-[9px]">COPY</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}
