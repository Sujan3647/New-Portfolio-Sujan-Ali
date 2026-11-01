import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, ArrowUpRight, Zap, Globe, Terminal, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { validateContactForm } from '../utils/portfolioLogic';
import { sound } from '../utils/sound';

interface ContactProps {
  onOpenResume?: () => void;
}

const ENGAGEMENT_PRESETS = [
  { label: 'Full Stack Sprint', tag: 'SPRINT', desc: 'React, Node, Distributed APIs' },
  { label: 'System Architecture', tag: 'ARCH', desc: 'High-Concurrency & Cloud Infra' },
  { label: 'Startup Advisory', tag: 'ADVISE', desc: 'Tech Audits, MVP & Strategy' },
  { label: 'Cyber / Cryptography', tag: 'CRYPTO', desc: 'Post-Quantum & Security R&D' }
];

export default function Contact({ onOpenResume }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isHoveredSubmit, setIsHoveredSubmit] = useState(false);

  const handleCopyEmail = () => {
    sound.playPop();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePresetClick = (presetLabel: string) => {
    sound.playClick();
    setFormData((prev) => ({
      ...prev,
      subject: `[${presetLabel}] Inquiry`,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playPop();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      sound.playBeep(320, 0.08, 0.08);
      return;
    }

    setFormErrors({});
    setSubmitted(true);
    sound.playBeep(880, 0.1, 0.08);

    try {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#D7FF36', '#304FFE', '#ffffff', '#FF5733']
      });
    } catch {
      // safe fallback
    }

    // Save in local storage inquiry log
    try {
      const existingInquiries = JSON.parse(localStorage.getItem('sujan_inquiries') || '[]');
      existingInquiries.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('sujan_inquiries', JSON.stringify(existingInquiries));
    } catch {
      // safe fallback
    }
  };

  return (
    <section id="contact" className="w-full bg-[#09090C] text-[#F2F0E8] py-12 md:py-16 relative paper-grain border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Compact Terminal Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800 pb-3 mb-8 text-xs font-mono-tech">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 bg-[#D7FF36] inline-block animate-pulse" />
            <span className="text-white font-black tracking-wider uppercase">
              SECTION 07 // TRANSMISSION INITIATION
            </span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-emerald-400 font-semibold text-[11px]">
              ● ENCRYPTION: TLS 1.3 / VERIFIED
            </span>
          </div>

          <div className="flex items-center gap-3 text-neutral-400 text-[11px]">
            <span className="flex items-center gap-1">
              <Globe className="w-3 h-3 text-[#D7FF36]" />
              <span>{PORTFOLIO_DATA.profile.timezone}</span>
            </span>
            <span className="text-neutral-700">·</span>
            <span className="text-neutral-300">SLA: &lt; 24H</span>
          </div>
        </div>

        {/* Compact Two-Column Uplink Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Direct Coordinates, Presets & Profiles (Compact Card) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Header Micro-Banner */}
            <div className="bg-[#101014] border border-neutral-800 p-4 brutalist-shadow-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono-tech text-[#D7FF36] font-bold tracking-widest uppercase">
                  DIRECT TRANSMISSION CHANNEL
                </span>
                <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[9px] font-mono-tech uppercase font-bold border border-emerald-500/30">
                  AVAILABLE
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-archivo text-white leading-tight uppercase tracking-tight">
                LET'S BUILD <span className="text-[#D7FF36]">WHAT'S NEXT</span>.
              </h2>

              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                Open for high-impact software architecture, full-stack sprints, and startup advisory.
              </p>

              {/* Direct Email Pill Box */}
              <div className="pt-2">
                <div className="flex items-center justify-between gap-2 p-2 bg-[#0A0A0C] border border-neutral-700 text-xs font-mono-tech">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                    onClick={() => sound.playClick()}
                    className="font-bold text-neutral-200 hover:text-[#D7FF36] transition-colors truncate flex items-center gap-1.5"
                    title={PORTFOLIO_DATA.profile.email}
                  >
                    <Mail className="w-3.5 h-3.5 text-[#304FFE] shrink-0" />
                    <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="shrink-0 px-2.5 py-1 bg-neutral-800 hover:bg-[#304FFE] text-[10px] font-bold uppercase transition-colors flex items-center gap-1 border border-neutral-700 text-white"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-[#D7FF36]" />
                        <span className="text-[#D7FF36]">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Engagement Topic Chips */}
            <div className="bg-[#101014] border border-neutral-800 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-[10px] font-mono-tech text-neutral-400 uppercase tracking-wider">
                <span className="flex items-center gap-1 text-[#D7FF36] font-bold">
                  <Zap className="w-3 h-3" />
                  <span>ONE-CLICK ENGAGEMENT TOPICS</span>
                </span>
                <span className="text-neutral-500 text-[9px]">CLICK TO POPULATE</span>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                {ENGAGEMENT_PRESETS.map((preset) => (
                  <button
                    key={preset.tag}
                    type="button"
                    onClick={() => handlePresetClick(preset.label)}
                    className="p-2 text-left bg-[#0A0A0C] border border-neutral-800 hover:border-[#D7FF36] transition-colors group"
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-mono-tech font-bold text-white group-hover:text-[#D7FF36] transition-colors">
                        {preset.label}
                      </span>
                      <span className="text-[8px] font-mono-tech text-neutral-500 group-hover:text-[#38BDF8]">
                        [{preset.tag}]
                      </span>
                    </div>
                    <p className="text-[9px] text-neutral-400 font-mono-tech truncate">
                      {preset.desc}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Compact Social Channels Link Row */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-3 py-2 border border-neutral-800 bg-[#101014] hover:border-[#D7FF36] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <span className="font-mono-tech text-[10px] font-bold uppercase">GITHUB</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#D7FF36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="px-3 py-2 border border-neutral-800 bg-[#101014] hover:border-[#304FFE] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4 text-neutral-400 group-hover:text-[#38bdf8]" />
                  <span className="font-mono-tech text-[10px] font-bold uppercase">LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-[#38bdf8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Compact High-Tech Dispatch Console Form */}
          <div className="lg:col-span-7 bg-[#101014] border border-neutral-800 p-4 sm:p-5 brutalist-shadow-lime">
            
            {/* Terminal Title Bar */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 text-[10px] font-mono-tech">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-white font-bold ml-1.5 uppercase flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-[#D7FF36]" />
                  <span>TRANSMISSION_TERMINAL // DISPATCH</span>
                </span>
              </div>
              <span className="text-neutral-500 uppercase tracking-widest hidden sm:inline">
                STATUS: IDLE_LISTENING
              </span>
            </div>

            {submitted ? (
              <div className="py-8 space-y-4 text-center">
                <div className="w-12 h-12 border-2 border-[#D7FF36] bg-[#D7FF36]/10 text-[#D7FF36] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-archivo uppercase text-white">
                    TRANSMISSION DISPATCHED.
                  </h3>
                  <p className="text-xs font-mono-tech text-neutral-300 max-w-sm mx-auto">
                    Payload received, {formData.name}. Logged into queue. Direct inquiries can also be routed to <span className="text-[#D7FF36]">{PORTFOLIO_DATA.profile.email}</span>.
                  </p>
                </div>
                <div className="pt-2 flex flex-wrap justify-center gap-2">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                    className="px-4 py-2 bg-[#D7FF36] text-black hover:bg-white font-mono-tech text-[10px] font-black uppercase transition-colors flex items-center gap-1.5"
                  >
                    <span>OPEN IN CLIENT →</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-3.5 py-2 border border-neutral-700 hover:border-white text-neutral-300 hover:text-white font-mono-tech text-[10px] font-bold uppercase flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>NEW PAYLOAD</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                
                {/* 2-Column Compact Grid for Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="contact-name" className="block text-[10px] font-mono-tech text-neutral-400 uppercase mb-1 font-bold">
                      NAME / ENTITY *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3 py-2 bg-[#08080B] border text-white text-xs font-mono-tech focus:outline-none transition-colors ${
                        formErrors.name ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-800 focus:border-[#D7FF36]'
                      }`}
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-[9px] font-mono-tech text-[#FF5733]">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="contact-email" className="block text-[10px] font-mono-tech text-neutral-400 uppercase mb-1 font-bold">
                      ELECTRONIC MAIL *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@enterprise.com"
                      className={`w-full px-3 py-2 bg-[#08080B] border text-white text-xs font-mono-tech focus:outline-none transition-colors ${
                        formErrors.email ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-800 focus:border-[#D7FF36]'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-[9px] font-mono-tech text-[#FF5733]">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-[10px] font-mono-tech text-neutral-400 uppercase mb-1 font-bold">
                    SUBJECT / ENGAGEMENT TYPE
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. [System Architecture] High-Concurrency Infrastructure"
                    className="w-full px-3 py-2 bg-[#08080B] border border-neutral-800 text-white text-xs font-mono-tech focus:outline-none focus:border-[#D7FF36] transition-colors"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="contact-message" className="text-[10px] font-mono-tech text-neutral-400 uppercase font-bold">
                      TRANSMISSION PAYLOAD *
                    </label>
                    <span className="text-[9px] font-mono-tech text-neutral-500">
                      {formData.message.length} CHARS
                    </span>
                  </div>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide scope, architectural requirements, expected timeline, or advisory goals..."
                    className={`w-full px-3 py-2 bg-[#08080B] border text-white text-xs font-mono-tech focus:outline-none transition-colors resize-none ${
                      formErrors.message ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-800 focus:border-[#D7FF36]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-[9px] font-mono-tech text-[#FF5733]">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  onMouseEnter={() => setIsHoveredSubmit(true)}
                  onMouseLeave={() => setIsHoveredSubmit(false)}
                  className="w-full py-2.5 px-4 bg-[#D7FF36] text-black hover:bg-white font-archivo text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 brutalist-shadow-sm font-black active:translate-x-0.5 active:translate-y-0.5"
                >
                  <Send className={`w-3.5 h-3.5 transition-transform ${isHoveredSubmit ? 'translate-x-1 -translate-y-0.5' : ''}`} />
                  <span>DISPATCH TRANSMISSION</span>
                  <Sparkles className="w-3.5 h-3.5 text-black" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Compact Footer Editorial Sign-off */}
        <div className="mt-10 pt-4 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono-tech text-neutral-400">
          <div>
            © {new Date().getFullYear()} SUJAN ALI · ALL TRANSMISSIONS LOGGED
          </div>
          <div className="flex items-center gap-3">
            <span>NEO-BRUTALIST ARCHITECTURE</span>
            <span className="text-neutral-700">·</span>
            <span>23.83° N, 91.28° E</span>
            <span className="text-neutral-700">·</span>
            <span className="text-[#D7FF36] font-bold">TRIPURA, INDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
