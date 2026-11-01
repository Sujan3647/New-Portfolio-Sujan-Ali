import { useState, useEffect, useRef } from 'react';
import { Radio, Zap, Activity, Waves, Crosshair, ArrowDownRight, ShieldCheck, Terminal, Disc } from 'lucide-react';
import { sound } from '../utils/sound';

interface ChannelPreset {
  id: string;
  name: string;
  freq: string;
  band: string;
  color: string;
  textColor: string;
  glowColor: string;
  description: string;
}

const CHANNELS: ChannelPreset[] = [
  {
    id: 'ch-arch',
    name: 'SYS ARCHITECTURE',
    freq: '433.92 MHz',
    band: 'UHF // ISM BAND',
    color: 'bg-[#304FFE]',
    textColor: 'text-cyan-400',
    glowColor: 'rgba(48, 79, 254, 0.4)',
    description: 'Scalable Microservices, Distributed Systems & Cloud Infrastructure'
  },
  {
    id: 'ch-sprint',
    name: 'FULL STACK SPRINT',
    freq: '868.00 MHz',
    band: 'SRD // HIGH-BAND',
    color: 'bg-[#D7FF36]',
    textColor: 'text-[#D7FF36]',
    glowColor: 'rgba(215, 255, 54, 0.4)',
    description: 'Rapid Product Execution, React 19, Node.js & Micro-Frontends'
  },
  {
    id: 'ch-advisory',
    name: 'STARTUP ADVISORY',
    freq: '915.20 MHz',
    band: 'RF // CARRIER ACTIVE',
    color: 'bg-[#FF5733]',
    textColor: 'text-amber-400',
    glowColor: 'rgba(255, 87, 51, 0.4)',
    description: 'Incubation Strategy, Tech Audits, Roadmap & Investor Pitches'
  },
  {
    id: 'ch-direct',
    name: 'DIRECT DISPATCH',
    freq: '1420.40 MHz',
    band: 'HYDROGEN // SECURE',
    color: 'bg-emerald-400',
    textColor: 'text-emerald-400',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    description: 'Instant Priority Inquiries & Strategic Partnerships'
  }
];

// Tape increments for the calibrated radio frequency scale
const FREQ_TICKS = [
  { freq: '108.40', label: 'FM AIRBAND' },
  { freq: '144.10', label: 'VHF BEACON' },
  { freq: '220.50', label: 'DATA TELEMETRY' },
  { freq: '315.00', label: 'ASK KEYING' },
  { freq: '433.92', label: 'SYS ARCHITECTURE [LOCKED]' },
  { freq: '512.00', label: 'BROADCAST L-BAND' },
  { freq: '868.00', label: 'FULL STACK SPRINT [CARRIER]' },
  { freq: '915.20', label: 'STARTUP ADVISORY [STABLE]' },
  { freq: '1090.0', label: 'ADS-B TRANSPONDER' },
  { freq: '1420.4', label: 'DIRECT DISPATCH [PRIORITY]' },
  { freq: '2400.0', label: 'ISM 2.4 GHz HOPPING' },
  { freq: '5800.0', label: 'UWB LOW-LATENCY' }
];

export default function TransmissionScrollBanner() {
  const [activeChannel, setActiveChannel] = useState<ChannelPreset>(CHANNELS[1]);
  const [hexBitstream, setHexBitstream] = useState('0x7F · 0x3A · 0x89 · 0xEF · 0x12');
  const [scrollProgress, setScrollProgress] = useState(50);
  const [packetCount, setPacketCount] = useState(4820);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Dynamic hex stream generator
  useEffect(() => {
    const interval = setInterval(() => {
      const bytes = Array.from({ length: 6 }, () => 
        '0x' + Math.floor(Math.random() * 255).toString(16).toUpperCase().padStart(2, '0')
      ).join(' · ');
      setHexBitstream(bytes);
      setPacketCount((prev) => prev + Math.floor(Math.random() * 4) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Track position between Leadership and Contact for dynamic scrubber needle
  useEffect(() => {
    const handleScroll = () => {
      if (!bannerRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate how far through the banner viewport we are
      const progress = Math.min(
        100,
        Math.max(0, Math.round(((windowHeight - rect.top) / (windowHeight + rect.height)) * 100))
      );
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectChannel = (ch: ChannelPreset) => {
    sound.playBeep(640, 0.04, 0.06);
    setTimeout(() => sound.playBeep(880, 0.05, 0.06), 50);
    setActiveChannel(ch);
  };

  const handleInitiateTransmission = () => {
    sound.playPop();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      // Pre-focus the subject input with the chosen topic if available
      setTimeout(() => {
        const subjectInput = contactEl.querySelector<HTMLInputElement>('input[name="subject"], input#subject');
        if (subjectInput && !subjectInput.value) {
          subjectInput.value = `[${activeChannel.name}] Project Inquiry`;
          subjectInput.focus();
        }
      }, 500);
    }
  };

  // 30 equalizer bars with varied pseudo-random heights & animation speeds
  const eqBars = [
    35, 60, 85, 45, 95, 30, 75, 90, 50, 40,
    80, 100, 65, 45, 85, 95, 70, 30, 60, 85,
    55, 90, 40, 75, 95, 60, 80, 35, 70, 90
  ];

  return (
    <div
      ref={bannerRef}
      className="relative w-full bg-[#08080A] text-white border-y-2 border-[#111111] overflow-hidden select-none"
      style={{
        boxShadow: `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 25px ${activeChannel.glowColor}`
      }}
    >
      {/* 1. TOP AVIONICS STATUS & FREQUENCY BRIDGE STRIP */}
      <div className="bg-[#0D0D11] border-b border-neutral-800/80 px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[10px] font-mono-tech">
          {/* Left: Inter-Section Gateway Coordinate */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-neutral-400 font-bold tracking-wider uppercase">
              BRIDGE // 06 LEADERSHIP
            </span>
            <span className="text-neutral-600">➔</span>
            <span className="text-[#D7FF36] font-bold tracking-wider uppercase">
              07 TRANSMISSION
            </span>
          </div>

          {/* Center: Live Carrier Telemetry & Bitstream */}
          <div className="hidden md:flex items-center gap-4 text-neutral-400">
            <div className="flex items-center gap-1.5">
              <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>CARRIER: <strong className="text-white">{activeChannel.freq}</strong></span>
            </div>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5">
              <Activity className="w-3 h-3 text-emerald-400" />
              <span>SIG: <strong className="text-emerald-300">-38 dBm</strong></span>
            </div>
            <span className="text-neutral-700">|</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-purple-400" />
              <span>CIPHER: <strong className="text-neutral-200">TLS 1.3 / AES-256</strong></span>
            </div>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-500 font-mono-tech">
              RX PKTS: <span className="text-[#D7FF36]">{packetCount}</span>
            </span>
          </div>

          {/* Right: Direct Transmission Action Pill */}
          <button
            onClick={handleInitiateTransmission}
            className="flex items-center gap-1.5 px-3 py-1 bg-[#D7FF36] text-black font-mono-tech font-black text-[11px] uppercase tracking-wider hover:bg-white transition-colors brutalist-shadow-sm active:translate-x-0.5 active:translate-y-0.5"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>INITIATE UPLINK</span>
            <ArrowDownRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 2. THE HIGH-PRECISION CALIBRATED RADIO FREQUENCY TAPE (Continuous Vernier Scale) */}
      <div className="relative py-3.5 bg-[#050507] overflow-hidden border-b border-neutral-800">
        {/* Center Reticle Sight / Vernier Indicator Gauge */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center justify-between">
          <div className="flex items-center gap-1 bg-[#D7FF36] text-black px-2 py-0.5 text-[9px] font-mono-tech font-black tracking-widest uppercase brutalist-shadow-sm">
            <Crosshair className="w-2.5 h-2.5" />
            <span>FREQUENCY LOCK</span>
          </div>
          <div className="w-[2px] h-full bg-[#D7FF36] shadow-[0_0_12px_#D7FF36]" />
          <div className="w-2 h-2 bg-[#D7FF36] rotate-45 mb-0.5" />
        </div>

        {/* Scrolling Vernier Dial Scale */}
        <div className="animate-tape-scroll flex items-center">
          {/* Double repeat for endless loop */}
          {[...FREQ_TICKS, ...FREQ_TICKS, ...FREQ_TICKS].map((item, idx) => (
            <div
              key={`tape-${idx}`}
              className="flex items-end shrink-0 mx-6 group cursor-pointer"
              onClick={() => {
                sound.playPop();
                const matched = CHANNELS.find(c => item.freq.includes(c.freq.split(' ')[0]));
                if (matched) setActiveChannel(matched);
              }}
            >
              {/* Millimeter Graduation Ticks */}
              <div className="flex items-end gap-1.5 mr-3">
                <span className="w-[1px] h-2 bg-neutral-700" />
                <span className="w-[1px] h-3.5 bg-neutral-600" />
                <span className="w-[1px] h-2 bg-neutral-700" />
                <span className="w-[1px] h-5 bg-neutral-500" />
                <span className="w-[1px] h-2 bg-neutral-700" />
                <span className="w-[1px] h-3.5 bg-neutral-600" />
                <span className="w-[1px] h-2 bg-neutral-700" />
                <span className="w-[2px] h-7 bg-cyan-400 group-hover:bg-[#D7FF36] transition-colors" />
              </div>

              {/* Station Tag & Metric */}
              <div className="flex flex-col">
                <span className="font-mono-tech text-[13px] font-black tracking-tight text-white group-hover:text-[#D7FF36] transition-colors">
                  {item.freq} <span className="text-[10px] text-neutral-400 font-normal">MHz</span>
                </span>
                <span className="font-mono-tech text-[9px] uppercase tracking-wider text-neutral-400 group-hover:text-cyan-300 transition-colors">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. INTERACTIVE HUD CONSOLE: TACTICAL CHANNELS + WAVEFORM SPECTRUM */}
      <div className="max-w-7xl mx-auto px-4 py-3.5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-center">
          
          {/* Left Column: 4 Clickable Tactical Frequency Presets */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono-tech font-bold uppercase tracking-widest text-neutral-400 flex items-center gap-1.5">
                <Terminal className="w-3 h-3 text-[#D7FF36]" />
                <span>SELECT TRANSMISSION BAND // DIRECT ROUTE</span>
              </span>
              <span className="text-[9px] font-mono-tech text-neutral-500 hidden sm:inline">
                CLICK TO TUNE PRESET
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {CHANNELS.map((ch) => {
                const isSelected = activeChannel.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => handleSelectChannel(ch)}
                    className={`relative p-2 text-left transition-all border font-mono-tech group ${
                      isSelected
                        ? 'bg-neutral-900 border-[#D7FF36] shadow-[0_0_15px_rgba(215,255,54,0.15)] translate-y-[-1px]'
                        : 'bg-[#0E0E12] border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    {/* Active Corner Notch */}
                    {isSelected && (
                      <span className="absolute top-0 right-0 w-2 h-2 bg-[#D7FF36]" />
                    )}

                    <div className="flex items-center justify-between mb-1">
                      <span className={`text-[9px] font-black uppercase ${isSelected ? 'text-[#D7FF36]' : 'text-neutral-400'}`}>
                        {ch.freq}
                      </span>
                      <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-emerald-400 animate-pulse' : 'bg-neutral-700'}`} />
                    </div>

                    <div className="text-[11px] font-bold text-white tracking-tight truncate group-hover:text-[#D7FF36] transition-colors">
                      {ch.name}
                    </div>

                    <div className="text-[8px] text-neutral-400 uppercase tracking-wide truncate mt-0.5">
                      {ch.band}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Audio Equalizer Spectrum + Live Bitstream */}
          <div className="lg:col-span-4 bg-[#0D0D11] border border-neutral-800 p-2.5 space-y-2">
            <div className="flex items-center justify-between text-[9px] font-mono-tech text-neutral-400">
              <span className="flex items-center gap-1 text-white font-bold">
                <Waves className="w-3 h-3 text-cyan-400" />
                <span>SPECTRUM ANALYZER</span>
              </span>
              <span className="text-[#D7FF36] font-bold">99.4% SNR</span>
            </div>

            {/* 30-Band Equalizer Waves */}
            <div className="flex items-end justify-between h-9 gap-[2px] px-1 bg-black/60 border border-neutral-900 overflow-hidden">
              {eqBars.map((baseHeight, i) => (
                <div
                  key={`eq-${i}`}
                  className="w-full rounded-t-xs transition-all duration-300"
                  style={{
                    height: `${baseHeight}%`,
                    backgroundColor: i % 3 === 0 ? '#D7FF36' : i % 2 === 0 ? '#304FFE' : '#38BDF8',
                    opacity: 0.85
                  }}
                />
              ))}
            </div>

            {/* Live Cryptographic Hex Stream */}
            <div className="flex items-center justify-between text-[9px] font-mono-tech text-neutral-400 pt-1 border-t border-neutral-800/60">
              <span className="text-neutral-500">HEX:</span>
              <span className="text-neutral-300 tracking-wider font-semibold truncate ml-2">
                {hexBitstream}
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM INTERACTIVE PROGRESS SCRUBBER RAIL */}
      <div className="bg-[#050507] border-t border-neutral-800/90 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <span className="text-[9px] font-mono-tech font-bold text-neutral-400 shrink-0">
            SECTION 06
          </span>

          {/* Interactive Scrub Rail */}
          <div
            onClick={handleInitiateTransmission}
            className="relative flex-1 h-3 bg-neutral-900 border border-neutral-700/80 cursor-pointer overflow-hidden group"
            title="Click to advance to Transmission Initiation"
          >
            {/* Filled progress bar track */}
            <div
              className="h-full bg-linear-to-r from-[#304FFE] via-[#D7FF36] to-emerald-400 transition-all duration-150"
              style={{ width: `${Math.max(12, scrollProgress)}%` }}
            />

            {/* Glowing needle indicator */}
            <div
              className="absolute top-0 bottom-0 w-2.5 bg-white border border-black shadow-[0_0_8px_#ffffff] transition-all duration-150"
              style={{ left: `calc(${Math.max(5, Math.min(95, scrollProgress))}% - 5px)` }}
            />

            {/* Label inside track */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-2 overflow-hidden">
              <span className="text-[8px] font-mono-tech font-black text-black/90 uppercase tracking-widest drop-shadow-sm group-hover:text-white transition-colors truncate">
                <span className="hidden sm:inline">SCRUB TO TRANSMISSION // </span>
                <span>CARRIER ACTIVE: {activeChannel.name}</span>
              </span>
            </div>
          </div>

          <span className="text-[9px] font-mono-tech font-bold text-[#D7FF36] shrink-0 flex items-center gap-1">
            <span>SECTION 07</span>
            <Disc className="w-2.5 h-2.5 animate-spin-slow text-[#D7FF36]" />
          </span>
        </div>
      </div>
    </div>
  );
}
