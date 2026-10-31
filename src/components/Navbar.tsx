import { useState, useEffect } from 'react';
import { Volume2, VolumeX, Search, Menu, X, FileText } from 'lucide-react';
import { sound } from '../utils/sound';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenSearch, onOpenResume }: NavbarProps) {
  const [soundActive, setSoundActive] = useState(sound.enabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSoundToggle = () => {
    const newState = sound.toggle();
    setSoundActive(newState);
  };

  const navLinks = [
    { label: 'ABOUT', href: '#about' },
    { label: 'EXPERIENCE', href: '#journey' },
    { label: 'TECH', href: '#stack' },
    { label: 'PROJECTS', href: '#work' },
    { label: 'IMPACT', href: '#impact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-colors duration-200 brutalist-border-b bg-[#F2F0E8]/95 backdrop-blur-md ${
          scrolled ? 'border-b border-[#111111] shadow-sm' : 'border-b border-[#111111]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3.5 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            onClick={() => sound.playClick()}
            className="text-lg md:text-xl font-archivo tracking-tighter text-[#111111] hover:text-[#304FFE] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>SUJAN ALI</span>
            <span className="text-[10px] font-mono-tech px-1.5 py-0.5 bg-[#111111] text-[#D7FF36] font-normal tracking-normal hidden sm:inline-block">
              PORTFOLIO
            </span>
          </a>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono-tech font-medium tracking-wider text-[#111111]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => sound.playClick()}
                className="hover:text-[#304FFE] transition-colors whitespace-nowrap shrink-0 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#304FFE] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Functional utility actions */}
          <div className="flex items-center gap-2 md:gap-3 shrink-0">
            {/* Sound Toggle */}
            <button
              type="button"
              onClick={handleSoundToggle}
              title={soundActive ? 'Mute audio feedback' : 'Unmute audio feedback'}
              aria-label={soundActive ? 'Audio feedback enabled. Click to mute.' : 'Audio feedback muted. Click to enable.'}
              className={`p-2 border border-[#111111] text-xs font-mono-tech transition-all flex items-center gap-1.5 ${
                soundActive
                  ? 'bg-[#D7FF36] text-[#111111] brutalist-shadow-sm'
                  : 'bg-transparent text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {soundActive ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span className="hidden xl:inline text-[11px] font-bold">
                {soundActive ? 'AUDIO ON' : 'MUTED'}
              </span>
            </button>

            {/* Quick Command / Search Palette Trigger */}
            <button
              type="button"
              onClick={() => {
                sound.playPop();
                onOpenSearch();
              }}
              title="Search portfolio (Cmd+K)"
              aria-label="Search portfolio"
              className="p-2 border border-[#111111] text-xs font-mono-tech hover:bg-[#111111] hover:text-[#F2F0E8] transition-colors flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px] font-mono-tech">
                <kbd className="font-sans">⌘</kbd>K
              </span>
            </button>

            {/* View Resume Button */}
            <button
              type="button"
              onClick={() => {
                sound.playPop();
                onOpenResume();
              }}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 border border-[#111111] bg-white hover:bg-[#111111] hover:text-white text-xs font-mono-tech font-bold transition-all whitespace-nowrap brutalist-shadow-sm"
            >
              <FileText className="w-3.5 h-3.5 text-[#304FFE]" />
              <span>RESUME</span>
            </button>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={() => sound.playClick()}
              className="px-4 py-2 border border-[#111111] bg-[#111111] text-[#F2F0E8] hover:bg-[#304FFE] hover:text-white text-xs font-mono-tech font-bold tracking-wider transition-all whitespace-nowrap shrink-0 brutalist-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px]"
            >
              LET'S TALK
            </a>

            {/* Mobile Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 border border-[#111111] bg-white text-[#111111]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-[#111111]/70 backdrop-blur-sm flex justify-end">
          <div className="w-4/5 max-w-sm h-full bg-[#F2F0E8] border-l-2 border-[#111111] p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#111111]">
                <span className="font-archivo text-lg">INDEX // MENU</span>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 border border-[#111111] hover:bg-[#111111] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      sound.playClick();
                      setMobileMenuOpen(false);
                    }}
                    className="text-2xl font-archivo hover:text-[#304FFE] transition-colors py-1 flex items-center justify-between border-b border-neutral-300"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono-tech text-neutral-500">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#111111] space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-2.5 px-4 border border-[#111111] bg-white font-mono-tech text-xs font-bold flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-[#304FFE]" />
                VIEW CURRICULUM VITAE
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-4 border border-[#111111] bg-[#111111] text-[#D7FF36] font-mono-tech text-xs font-bold text-center block brutalist-shadow-sm"
              >
                INITIATE CONTACT →
              </a>
              <div className="text-[10px] font-mono-tech text-neutral-500 text-center pt-2">
                SUJAN ALI · SOFTWARE ENGINEER / CONSULTING / GRAPHICS DESIGNER
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
