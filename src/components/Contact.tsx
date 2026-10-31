import { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, Download, FileText, ArrowUpRight, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { validateContactForm, generateVCardString } from '../utils/portfolioLogic';
import { sound } from '../utils/sound';

interface ContactProps {
  onOpenResume: () => void;
}

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

  const handleCopyEmail = () => {
    sound.playPop();
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleDownloadVCard = () => {
    sound.playPop();
    const vCardContent = generateVCardString(PORTFOLIO_DATA.profile);
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Sujan_Ali.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playPop();

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    setFormErrors({});
    setSubmitted(true);

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
    <section id="contact" className="w-full bg-[#111111] text-[#F2F0E8] py-20 md:py-32 relative paper-grain border-b border-[#111111]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Editorial Ribbon */}
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-12 text-xs font-mono-tech text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D7FF36] inline-block animate-pulse" />
            <span className="uppercase text-white font-bold tracking-wider">
              SECTION 07 // TRANSMISSION INITIATION
            </span>
          </div>
          <div className="text-[11px] uppercase tracking-widest hidden sm:block">
            {PORTFOLIO_DATA.profile.timezone}
          </div>
        </div>

        {/* Dramatic Headline & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Dramatic Typography & Coordinates */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-archivo text-white leading-[0.9] tracking-tighter uppercase select-none">
                <span className="block">LET'S MAKE</span>
                <span className="block text-[#D7FF36]">SOMETHING</span>
                <span className="block">THAT MATTERS<span className="text-[#304FFE]">.</span></span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed max-w-xl">
              Whether you are architecting a high-concurrency software product, seeking strategic advisory for state-scale technological initiatives, or launching a Web3 protocol — my inbox is open.
            </p>

            {/* Direct Coordinates Box */}
            <div className="border border-neutral-800 bg-neutral-900/90 p-6 space-y-4">
              <div className="text-xs font-mono-tech text-neutral-400 uppercase tracking-widest pb-2 border-b border-neutral-800">
                DIRECT ELECTRONIC MAIL
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  onClick={() => sound.playClick()}
                  className="text-lg sm:text-xl font-mono-tech font-bold text-white hover:text-[#D7FF36] transition-colors break-all"
                >
                  {PORTFOLIO_DATA.profile.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 border border-neutral-700 bg-neutral-800 hover:bg-[#304FFE] text-xs font-mono-tech font-bold uppercase transition-colors flex items-center gap-1.5 self-start sm:self-center"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D7FF36]" />
                      <span className="text-[#D7FF36]">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY</span>
                    </>
                  )}
                </button>
              </div>

              {/* Utility Badges */}
              <div className="pt-3 border-t border-neutral-800 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={handleDownloadVCard}
                  className="text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
                >
                  <Download className="w-3.5 h-3.5 text-[#D7FF36]" />
                  <span>DOWNLOAD VCARD</span>
                </button>

                <a
                  href="/Sujan_Ali_CV.pdf"
                  download="Sujan_Ali_CV.pdf"
                  onClick={() => sound.playPop()}
                  className="text-xs font-mono-tech text-[#D7FF36] hover:underline flex items-center gap-1.5 font-bold"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>DOWNLOAD RESUME (PDF)</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    sound.playPop();
                    onOpenResume();
                  }}
                  className="text-xs font-mono-tech text-neutral-300 hover:text-white flex items-center gap-1.5 underline underline-offset-4"
                >
                  <FileText className="w-3.5 h-3.5 text-[#304FFE]" />
                  <span>VIEW CV MODAL</span>
                </button>
              </div>
            </div>

            {/* Social Channels Link Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-4 border border-neutral-800 bg-neutral-900 hover:border-[#D7FF36] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-5 h-5 text-neutral-400 group-hover:text-white" />
                  <span className="font-mono-tech text-xs font-bold uppercase">GITHUB</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#D7FF36] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={() => sound.playClick()}
                className="p-4 border border-neutral-800 bg-neutral-900 hover:border-[#304FFE] transition-colors flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-[#304FFE]" />
                  <span className="font-mono-tech text-xs font-bold uppercase">LINKEDIN</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#304FFE] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: High-Impact Direct Inquiry Form */}
          <div className="lg:col-span-6 border-2 border-neutral-800 bg-[#161616] p-6 sm:p-8 md:p-10 brutalist-shadow-lime">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800 text-xs font-mono-tech">
              <span className="text-[#D7FF36] font-bold uppercase">
                DIRECT INQUIRY DISPATCH
              </span>
              <span className="text-neutral-400">ENCRYPTION: VERIFIED</span>
            </div>

            {submitted ? (
              <div className="py-12 space-y-6 text-center">
                <div className="w-16 h-16 border-2 border-[#D7FF36] bg-[#D7FF36]/10 text-[#D7FF36] mx-auto flex items-center justify-center">
                  <Check className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-archivo uppercase text-white">
                    TRANSMISSION LOGGED.
                  </h3>
                  <p className="text-sm font-mono-tech text-neutral-300 max-w-sm mx-auto">
                    Thank you, {formData.name}. Your inquiry has been cached and queued. You can also reach me directly at <span className="text-[#D7FF36]">{PORTFOLIO_DATA.profile.email}</span>.
                  </p>
                </div>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message)}`}
                    className="px-5 py-2.5 bg-[#D7FF36] text-[#111111] hover:bg-white font-mono-tech text-xs font-bold uppercase transition-colors"
                  >
                    DISPATCH VIA DEFAULT EMAIL CLIENT →
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 border border-neutral-700 text-neutral-300 hover:text-white font-mono-tech text-xs font-bold uppercase"
                  >
                    NEW MESSAGE
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono-tech text-neutral-400 uppercase mb-1.5 font-bold">
                    YOUR NAME / ORGANIZATION *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Elena Rostova"
                    className={`w-full px-4 py-3 bg-neutral-900 border text-white text-sm font-mono-tech focus:outline-none ${
                      formErrors.name ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-700 focus:border-[#D7FF36]'
                    }`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-xs font-mono-tech text-[#FF5733]">
                      {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono-tech text-neutral-400 uppercase mb-1.5 font-bold">
                    ELECTRONIC MAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. elena@venture.com"
                    className={`w-full px-4 py-3 bg-neutral-900 border text-white text-sm font-mono-tech focus:outline-none ${
                      formErrors.email ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-700 focus:border-[#D7FF36]'
                    }`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-xs font-mono-tech text-[#FF5733]">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono-tech text-neutral-400 uppercase mb-1.5 font-bold">
                    SUBJECT / ENGAGEMENT TYPE
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Enterprise Full Stack Contract / Advisory"
                    className="w-full px-4 py-3 bg-neutral-900 border border-neutral-700 text-white text-sm font-mono-tech focus:outline-none focus:border-[#D7FF36]"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono-tech text-neutral-400 uppercase mb-1.5 font-bold">
                    TRANSMISSION MESSAGE *
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your initiative, architectural requirements, or timeline..."
                    className={`w-full px-4 py-3 bg-neutral-900 border text-white text-sm font-mono-tech focus:outline-none ${
                      formErrors.message ? 'border-[#FF5733] ring-1 ring-[#FF5733]' : 'border-neutral-700 focus:border-[#D7FF36]'
                    }`}
                  />
                  {formErrors.message && (
                    <p className="mt-1 text-xs font-mono-tech text-[#FF5733]">
                      {formErrors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#D7FF36] text-[#111111] hover:bg-white hover:text-black font-archivo text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 brutalist-shadow-orange font-black"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT INQUIRY NOW</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Editorial Sign-off */}
        <div className="mt-20 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono-tech text-neutral-500">
          <div>
            © {new Date().getFullYear()} SUJAN ALI. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>NEO-BRUTALIST ARCHITECTURE</span>
            <span>·</span>
            <span>SWISS EDITORIAL GRID</span>
            <span>·</span>
            <span>TRIPURA, INDIA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
