import { useEffect } from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
import { sound } from '../utils/sound';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae for Sujan Ali"
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm p-2 sm:p-4 md:p-6 flex items-center justify-center animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl h-[94vh] bg-[#111111] border-2 border-[#111111] brutalist-shadow-lg flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-[#111111] text-[#F2F0E8] px-4 py-3 flex items-center justify-between border-b border-neutral-800 shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF36] animate-pulse"></span>
            <span className="font-archivo text-sm sm:text-base text-[#D7FF36] uppercase font-bold tracking-tight">
              SUJAN ALI // CURRICULUM VITAE
            </span>
            <span className="text-neutral-400 font-mono-tech text-xs hidden md:inline">
              · Sujan_Ali_CV.pdf
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Sujan_Ali_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => sound.playClick()}
              className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white font-mono-tech text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
              title="Open in new window"
            >
              <ExternalLink className="w-3.5 h-3.5 text-[#D7FF36]" />
              <span className="hidden sm:inline">OPEN IN NEW TAB</span>
            </a>

            <a
              href="/Sujan_Ali_CV.pdf"
              download="Sujan_Ali_CV.pdf"
              onClick={() => sound.playPop()}
              className="px-3 py-1.5 bg-[#D7FF36] hover:bg-[#c4ec27] text-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center gap-1.5 font-bold"
              title="Download Sujan_Ali_CV.pdf"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              type="button"
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-1.5 border border-neutral-700 hover:bg-[#FF5733] hover:text-white text-neutral-300 transition-colors ml-1"
              aria-label="Close CV modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dedicated Full-Frame PDF Viewer */}
        <div className="flex-1 w-full h-full relative bg-neutral-900">
          <object
            data="/Sujan_Ali_CV.pdf#toolbar=1&navpanes=0&view=FitH"
            type="application/pdf"
            className="w-full h-full block"
          >
            <iframe
              src="/Sujan_Ali_CV.pdf#toolbar=1&navpanes=0&view=FitH"
              title="Sujan Ali Curriculum Vitae (PDF)"
              className="w-full h-full border-0 block"
            >
              <div className="h-full flex flex-col items-center justify-center p-6 text-center text-[#F2F0E8] font-mono-tech">
                <p className="text-sm mb-4">Your device does not support embedded PDF preview.</p>
                <a
                  href="/Sujan_Ali_CV.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-[#D7FF36] text-[#111111] font-bold uppercase"
                >
                  Open Sujan_Ali_CV.pdf directly
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
