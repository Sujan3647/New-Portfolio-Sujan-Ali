import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Award, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sound } from '../utils/sound';

export default function Achievements() {
  const [celebrated, setCelebrated] = useState(false);

  const handleConfetti = () => {
    sound.playPop();
    setCelebrated(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#304FFE', '#D7FF36', '#FF5733', '#111111'],
    });

    setTimeout(() => setCelebrated(false), 2500);
  };

  return (
    <section id="impact" className="w-full border-b border-[#111111] bg-[#F2F0E8] py-16 md:py-24 relative paper-grain">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111] pb-6 mb-12">
          <div>
            <div className="text-xs font-mono-tech tracking-widest text-[#304FFE] font-bold uppercase mb-2">
              05 // HONORS & RECOGNITION
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-archivo text-[#111111] tracking-tight uppercase">
              PROOF OF IMPACT.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleConfetti}
              className="px-4 py-2.5 bg-[#D7FF36] text-[#111111] hover:bg-[#111111] hover:text-[#D7FF36] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-all brutalist-shadow-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#304FFE]" />
              <span>{celebrated ? 'CELEBRATING!' : 'BURST CONFETTI'}</span>
            </button>
          </div>
        </div>

        {/* Hero Impact Numbers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PORTFOLIO_DATA.achievements.map((item, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={item.id}
                className={`border-2 border-[#111111] p-6 sm:p-8 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 ${
                  isFeatured
                    ? 'bg-[#111111] text-[#F2F0E8] brutalist-shadow-lime md:col-span-2 lg:col-span-1'
                    : 'bg-white text-[#111111] brutalist-shadow'
                }`}
              >
                <div>
                  {/* Top Badge & Year */}
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-300 dark:border-neutral-700 text-xs font-mono-tech">
                    <span className={`font-bold uppercase ${isFeatured ? 'text-[#D7FF36]' : 'text-[#304FFE]'}`}>
                      {item.badge}
                    </span>
                    <span className={isFeatured ? 'text-neutral-400' : 'text-neutral-500'}>
                      {item.year}
                    </span>
                  </div>

                  {/* Giant Headline Number */}
                  <div className="py-2">
                    <div
                      className={`text-3xl sm:text-4xl md:text-5xl font-archivo tracking-tighter uppercase leading-none ${
                        isFeatured ? 'text-[#D7FF36]' : 'text-[#111111]'
                      }`}
                    >
                      {item.headlineNumber}
                    </div>
                  </div>

                  {/* Title & Organization */}
                  <div className="mt-4 space-y-1">
                    <h3 className="font-archivo text-base sm:text-lg uppercase">
                      {item.title}
                    </h3>
                    <div className={`text-xs font-mono-tech uppercase font-semibold ${isFeatured ? 'text-neutral-300' : 'text-neutral-600'}`}>
                      {item.organization}
                    </div>
                  </div>

                  {/* Narrative Description */}
                  <p className={`mt-4 text-xs sm:text-sm font-normal leading-relaxed ${isFeatured ? 'text-neutral-300' : 'text-neutral-700'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Verification Label */}
                <div className={`mt-6 pt-3 border-t text-[11px] font-mono-tech flex items-center justify-between ${isFeatured ? 'border-neutral-800 text-neutral-400' : 'border-neutral-200 text-neutral-500'}`}>
                  <span>STATUS: OFFICIAL CITATION</span>
                  <ShieldCheck className={`w-4 h-4 ${isFeatured ? 'text-[#D7FF36]' : 'text-[#304FFE]'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner on State Investment Conclave */}
        <div className="border border-[#111111] bg-white p-6 md:p-8 brutalist-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-xs font-mono-tech text-[#304FFE] font-bold uppercase">
              STATE-WIDE SCALE RECOGNITION
            </span>
            <h4 className="text-xl md:text-2xl font-archivo text-[#111111] uppercase">
              DELIVERED ₹95,286+ CR BUSINESS CONCLAVE OUTCOMES
            </h4>
            <p className="text-xs md:text-sm text-neutral-600 font-normal">
              Direct technical and operational contribution toward the Government of Tripura & FICCI industrial commitments.
            </p>
          </div>

          <a
            href="#journey"
            onClick={() => sound.playClick()}
            className="px-5 py-3 bg-[#111111] text-[#F2F0E8] hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-all whitespace-nowrap brutalist-shadow-sm"
          >
            INSPECT EXPERIENCE TIMELINE →
          </a>
        </div>
      </div>
    </section>
  );
}
