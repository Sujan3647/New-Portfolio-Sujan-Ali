import { useState, useEffect } from 'react';
import { ArrowDownRight, Github, Linkedin, Mail, FileText, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface HeroProps {
  onOpenResume: () => void;
}

const CODE_SNIPPETS = [
  {
    file: 'system_core.ts',
    lang: 'typescript',
    lines: [
      '// Full Stack & Cloud Architect',
      'const architect = new SystemEngineer({',
      '  name: "Sujan Ali",',
      '  skills: ["React", "Spring Boot", "Web3"],',
      '  status: "COMPILED & DEPLOYED"',
      '});',
      'await architect.execute();',
    ],
  },
  {
    file: 'SentinelRegistry.sol',
    lang: 'solidity',
    lines: [
      '// Tamper-Proof Smart Contract',
      'contract SentinelRegistry is Ownable {',
      '  mapping(bytes32 => bool) public verified;',
      '  function verifyCredential(bytes32 hash) external view returns (bool) {',
      '    return verified[hash] == true;',
      '  }',
      '}',
    ],
  },
  {
    file: 'RSACryptoVault.java',
    lang: 'java',
    lines: [
      '// Zero-Knowledge Encryption Engine',
      '@Service',
      'public class RSACryptoVault {',
      '  public EncryptedData seal(byte[] payload) {',
      '    return RSACipher.encrypt(payload, AES_256);',
      '  }',
      '}',
    ],
  },
];

function renderHighlightedCode(line: string) {
  if (line.trim().startsWith('//')) {
    return <span className="text-neutral-500 italic">{line}</span>;
  }

  const parts = line.split(
    /("(?:[^"\\]|\\.)*"|\b(?:contract|interface|class|function|const|let|await|new|return|public|external|view|returns|is)\b)/g
  );

  return (
    <>
      {parts.map((part, i) => {
        if (!part) return null;
        if (part.startsWith('"') && part.endsWith('"')) {
          return (
            <span key={i} className="text-[#D7FF36] font-semibold">
              {part}
            </span>
          );
        }
        if (
          /^(contract|interface|class|function|const|let|await|new|return|public|external|view|returns|is)$/.test(
            part
          )
        ) {
          return (
            <span key={i} className="text-[#38bdf8] font-bold">
              {part}
            </span>
          );
        }
        return (
          <span key={i} className="text-neutral-200">
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [timeString, setTimeString] = useState('');
  const [snippetIdx, setSnippetIdx] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Formatted in IST (UTC+5:30)
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setTimeString(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentSnippet = CODE_SNIPPETS[snippetIdx];
  const fullText = currentSnippet.lines.join('\n');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (charCount < fullText.length) {
      timeout = setTimeout(() => {
        setCharCount((prev) => prev + 1);
      }, 24);
    } else {
      timeout = setTimeout(() => {
        setSnippetIdx((prev) => (prev + 1) % CODE_SNIPPETS.length);
        setCharCount(0);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [charCount, fullText.length]);

  const displayedText = fullText.slice(0, charCount);
  const displayedLines = displayedText.split('\n');

  return (
    <section className="relative min-h-[calc(100vh-60px)] w-full border-b border-[#111111] overflow-hidden flex flex-col justify-between paper-grain">
      {/* Top Editorial Metadata Strip */}
      <div className="w-full border-b border-[#111111] bg-white/70 px-4 md:px-8 py-2.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono-tech text-[#111111]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-[#D7FF36] border border-[#111111] animate-pulse" />
          <span className="font-bold tracking-wider">STATUS: AVAILABLE FOR SELECT ENGAGEMENTS</span>
          <span className="text-neutral-400">/</span>
          <span className="text-neutral-600 hidden sm:inline">IST (UTC+5:30) {timeString || '12:00:00'}</span>
        </div>

        <div className="flex items-center gap-4 text-[11px] tracking-widest text-neutral-600 uppercase">
          <span className="font-semibold text-[#111111]">{PORTFOLIO_DATA.profile.identityLabel}</span>
          <span className="hidden md:inline text-neutral-400">·</span>
          <span className="hidden md:inline">OFFICIAL DIGITAL PORTFOLIO</span>
        </div>
      </div>

      {/* Main Magazine Layout Grid */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-8 md:py-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
        {/* Left Side: Massive Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 z-10">
          {/* Small Identity Lead */}
          <div className="inline-flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#304FFE] text-white text-[11px] font-mono-tech font-bold tracking-wider uppercase">
              PORTFOLIO
            </span>
            <span className="text-xs font-mono-tech tracking-wider text-neutral-600 uppercase font-semibold">
              TECHNOLOGY CONSULTANT · FULL STACK ENGINEER
            </span>
          </div>

          {/* Massive Display Headline */}
          <div className="space-y-0">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-archivo leading-[0.88] tracking-tighter text-[#111111] uppercase select-none">
              <span className="block hover:text-[#304FFE] transition-colors duration-200">SUJAN</span>
              <span className="block text-stroke hover:text-[#FF5733] transition-colors duration-200">
                ALI<span className="text-[#304FFE]">.</span>
              </span>
            </h1>
          </div>

          {/* Headline Statement */}
          <div className="border-l-2 border-[#111111] pl-4 md:pl-6 py-1">
            <p className="text-xl sm:text-2xl md:text-3xl font-archivo text-[#111111] tracking-tight uppercase">
              "{PORTFOLIO_DATA.profile.headline}"
            </p>
            <p className="mt-3 text-sm md:text-base text-neutral-700 max-w-xl font-normal leading-relaxed">
              {PORTFOLIO_DATA.profile.supportingDescription}
            </p>
          </div>

          {/* Unconventional CTAs & Social Ribbon */}
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              onClick={() => sound.playClick()}
              className="px-5 py-3.5 bg-[#111111] text-[#F2F0E8] hover:bg-[#304FFE] hover:text-white border border-[#111111] font-mono-tech text-xs font-bold tracking-widest uppercase transition-all brutalist-shadow flex items-center gap-2"
            >
              <span>EXPLORE WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => {
                sound.playPop();
                onOpenResume();
              }}
              className="px-5 py-3.5 bg-white text-[#111111] hover:bg-[#D7FF36] border border-[#111111] font-mono-tech text-xs font-bold tracking-widest uppercase transition-all brutalist-shadow flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-[#304FFE]" />
              <span>CV / RESUME</span>
            </button>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-1 border border-[#111111] p-1.5 bg-white">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                aria-label="GitHub profile"
                className="p-2 hover:bg-[#111111] hover:text-[#D7FF36] transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                aria-label="LinkedIn profile"
                className="p-2 hover:bg-[#304FFE] hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                onClick={() => sound.playClick()}
                aria-label="Send email"
                className="p-2 hover:bg-[#FF5733] hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Neo-Brutalist Technical Dossier Cockpit with Coding Animation */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          {/* Vertical Running Label (Hidden on small screens) */}
          <div className="hidden xl:flex absolute -left-10 top-0 bottom-0 items-center justify-center">
            <span
              className="text-[10px] font-mono-tech tracking-[0.3em] uppercase text-neutral-400 rotate-180 select-none"
              style={{ writingMode: 'vertical-rl' }}
            >
              VERIFIABLE CODE × SYSTEM ARCHITECTURE · TRIPURA / INDIA
            </span>
          </div>

          {/* Asymmetric Framed Cockpit Card */}
          <div className="relative w-full max-w-md">
            {/* Background Geometric Accent Blocks */}
            <div className="absolute -top-3 -right-3 w-full h-full bg-[#D7FF36] border-2 border-[#111111] -z-10" />
            <div className="absolute -bottom-3 -left-3 w-full h-full bg-[#304FFE] border-2 border-[#111111] -z-20" />

            {/* Main Terminal Dossier Container */}
            <div className="relative bg-[#111111] text-[#F2F0E8] border-2 border-[#111111] brutalist-shadow overflow-hidden flex flex-col">
              {/* Terminal Title Bar */}
              <div className="bg-[#1c1c1c] px-4 py-2.5 flex items-center justify-between border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5733] border border-black/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF36] border border-black/30" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#304FFE] border border-black/30" />
                  <span className="text-[11px] font-mono-tech font-bold text-neutral-300 ml-2 uppercase tracking-wider">
                    SPEC // SUJAN_ALI
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[10px] font-mono-tech text-[#D7FF36]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF36] animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Dossier Body Content */}
              <div className="p-4 sm:p-5 space-y-3.5 font-mono-tech">
                {/* Identification Banner */}
                <div className="border-b border-neutral-800 pb-2.5">
                  <div className="text-[10px] text-[#D7FF36] uppercase tracking-widest font-bold">
                    SYSTEM IDENTITY & PROFILE
                  </div>
                  <div className="text-2xl sm:text-3xl font-archivo font-black uppercase tracking-tight text-white mt-0.5">
                    SUJAN ALI
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                    Full Stack Developer & Technology Consultant · Scalable Systems, Cryptography & Blockchain.
                  </p>
                </div>

                {/* Live Coding Animation Sub-Window */}
                <div className="border border-neutral-800 bg-[#070707] overflow-hidden">
                  <div className="bg-[#151515] px-3 py-1.5 border-b border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono-tech">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-3.5 h-3.5 text-[#38bdf8]" />
                      <span className="text-neutral-200 font-bold">{currentSnippet.file}</span>
                      <span className="text-neutral-500 text-[9px] uppercase">[{currentSnippet.lang}]</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[9px] text-[#D7FF36]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF36] animate-ping" />
                      <span className="font-bold">COMPILING</span>
                    </div>
                  </div>

                  <div className="p-2.5 text-[11px] font-mono-tech leading-snug space-y-0.5 overflow-x-auto min-h-[120px] max-h-[145px] flex flex-col justify-start bg-black/80">
                    {displayedLines.map((line, idx) => {
                      const isLastLine = idx === displayedLines.length - 1;
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-neutral-600 select-none text-[10px] w-4 text-right shrink-0 pt-0.5">
                            {idx + 1}
                          </span>
                          <span className="flex-1 break-all">
                            {renderHighlightedCode(line)}
                            {isLastLine && (
                              <span className="inline-block w-1.5 h-3.5 bg-[#D7FF36] ml-0.5 animate-pulse align-middle" />
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Key Metrics Quad Grid (From CV) */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 border border-neutral-800 bg-neutral-900/90 hover:border-[#D7FF36] transition-colors">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">ACADEMIC STANDING</div>
                    <div className="text-base sm:text-lg font-archivo font-black text-[#D7FF36] mt-0.5">
                      8.86 CGPA
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">Integrated MCA · ICFAI</div>
                  </div>

                  <div className="p-2.5 border border-neutral-800 bg-neutral-900/90 hover:border-[#304FFE] transition-colors">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">STARTUP SEED GRANT</div>
                    <div className="text-base sm:text-lg font-archivo font-black text-[#304FFE] mt-0.5">
                      ₹1,00,000
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">NGIN Scheme · Careme</div>
                  </div>

                  <div className="p-2.5 border border-neutral-800 bg-neutral-900/90 hover:border-[#FF5733] transition-colors">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">INNOVATION COUNCIL</div>
                    <div className="text-xs sm:text-sm font-archivo font-black text-[#FF5733] mt-0.5 uppercase leading-tight">
                      IIC STUDENT CONVENOR
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">Startup & Incubation</div>
                  </div>

                  <div className="p-2.5 border border-neutral-800 bg-neutral-900/90 hover:border-[#D7FF36] transition-colors">
                    <div className="text-[10px] text-neutral-400 uppercase tracking-wider">VENTURE ACCELERATION</div>
                    <div className="text-base sm:text-lg font-archivo font-black text-[#D7FF36] mt-0.5">
                      TOP 25
                    </div>
                    <div className="text-[10px] text-neutral-400 mt-0.5">TiE U 2025 Semi-Finalist</div>
                  </div>
                </div>

                {/* Core Stack Badges */}
                <div className="space-y-1 pt-0.5">
                  <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
                    CORE PRODUCTION STACK
                  </div>
                  <div className="flex flex-wrap gap-1.5 text-[10px]">
                    {['React.js', 'Next.js', 'Spring Boot', 'Java', 'Solidity', 'IPFS', 'Node.js', 'Power BI', 'Docker', 'AWS'].map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-300 font-bold hover:border-[#D7FF36] hover:text-[#D7FF36] transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Document Status Ribbon */}
                <div className="pt-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] text-neutral-400">
                  <div className="flex items-center gap-1.5 text-neutral-300">
                    <FileText className="w-3.5 h-3.5 text-[#D7FF36]" />
                    <span>Sujan_Ali_CV.pdf [ATTACHED]</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      onOpenResume();
                    }}
                    className="text-[#D7FF36] hover:underline font-bold"
                  >
                    PREVIEW PDF →
                  </button>
                </div>
              </div>
            </div>

            {/* Rotating Stamp Seal Element */}
            <div className="absolute -top-7 -right-7 md:-top-9 md:-right-9 w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#111111] bg-[#FF5733] text-white flex items-center justify-center p-1 select-none animate-spin-slow brutalist-shadow-sm z-20 pointer-events-none">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <path
                  id="circlePathHero"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-mono-tech font-bold uppercase tracking-[2px] fill-white">
                  <textPath href="#circlePathHero">
                    SUJAN ALI · TECH CONSULTING · DEV ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center font-archivo text-xs font-black">
                ★
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Bar: Unconventional Micro-Nav & Scroll Prompt */}
      <div className="w-full border-t border-[#111111] bg-white grid grid-cols-2 sm:grid-cols-4 divide-x divide-[#111111] text-xs font-mono-tech">
        <a
          href="#journey"
          onClick={() => sound.playClick()}
          className="p-3.5 hover:bg-[#FF5733] hover:text-white transition-colors flex items-center justify-between group"
        >
          <span className="font-bold">01 / EXPERIENCE</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#stack"
          onClick={() => sound.playClick()}
          className="p-3.5 hover:bg-[#D7FF36] transition-colors flex items-center justify-between group"
        >
          <span className="font-bold">02 / TECH MAP</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#work"
          onClick={() => sound.playClick()}
          className="p-3.5 hover:bg-[#304FFE] hover:text-white transition-colors flex items-center justify-between group"
        >
          <span className="font-bold">03 / PROJECTS</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a
          href="#impact"
          onClick={() => sound.playClick()}
          className="p-3.5 hover:bg-[#111111] hover:text-[#D7FF36] transition-colors flex items-center justify-between group"
        >
          <span className="font-bold">04 / IMPACT</span>
          <span className="group-hover:translate-x-1 transition-transform">↓</span>
        </a>
      </div>
    </section>
  );
}
