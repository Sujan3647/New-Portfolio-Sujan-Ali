import { Users, Award, Shield, Compass, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="w-full border-b border-[#111111] bg-white py-16 md:py-24 relative paper-grain">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111] pb-6 mb-12">
          <div>
            <div className="text-xs font-mono-tech tracking-widest text-[#304FFE] font-bold uppercase mb-2">
              06 // LEADERSHIP & ADVOCACY
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-archivo text-[#111111] tracking-tight uppercase">
              COMMUNITY STEWARDSHIP.
            </h2>
          </div>
          <div className="text-xs font-mono-tech text-neutral-600 max-w-sm md:text-right">
            INCUBATION GOVERNANCE · CODING CULTURE FOSTERING · MENTORSHIP
          </div>
        </div>

        {/* Magazine-Inspired Composition Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.leadership.map((item, index) => {
            const isFirst = index === 0;

            return (
              <div
                key={item.organization}
                className={`border-2 border-[#111111] p-6 sm:p-7 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                  isFirst
                    ? 'bg-[#304FFE] text-white brutalist-shadow md:col-span-2 lg:col-span-1'
                    : 'bg-[#F2F0E8] text-[#111111] brutalist-shadow-sm'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className={`flex items-center justify-between pb-3 mb-4 border-b text-xs font-mono-tech ${isFirst ? 'border-white/30 text-white/80' : 'border-neutral-300 text-neutral-500'}`}>
                    <span className="font-bold">ROLE 0{index + 1}</span>
                    <span>{item.period}</span>
                  </div>

                  {/* Title & Organization */}
                  <div className="space-y-1">
                    <h3 className="font-archivo text-xl sm:text-2xl uppercase tracking-tight">
                      {item.role}
                    </h3>
                    <div className={`text-xs font-mono-tech font-bold uppercase ${isFirst ? 'text-[#D7FF36]' : 'text-[#304FFE]'}`}>
                      {item.organization}
                    </div>
                  </div>

                  {/* Mandate Description */}
                  <p className={`mt-4 text-xs sm:text-sm font-normal leading-relaxed ${isFirst ? 'text-white/90' : 'text-neutral-700'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Impact Highlight Box */}
                <div className={`mt-6 pt-3 border-t text-xs font-mono-tech ${isFirst ? 'border-white/20' : 'border-neutral-300'}`}>
                  <div className={`text-[10px] uppercase font-bold mb-1 ${isFirst ? 'text-[#D7FF36]' : 'text-neutral-500'}`}>
                    DIRECT OUTCOME / IMPACT:
                  </div>
                  <div className={`font-semibold ${isFirst ? 'text-white' : 'text-[#111111]'}`}>
                    {item.impact}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
