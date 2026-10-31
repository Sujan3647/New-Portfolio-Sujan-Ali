interface CrossMarqueeProps {
  items1?: string[];
  items2?: string[];
  theme1?: 'lime' | 'blue' | 'orange' | 'cyan' | 'black';
  theme2?: 'lime' | 'blue' | 'orange' | 'cyan' | 'black';
  className?: string;
}

const DEFAULT_ITEMS_1 = [
  'NATIONAL INFORMATICS CENTRE',
  'ASSAM UNIVERSITY',
  'NATIONAL FORENSIC SCIENCES UNIVERSITY',
  'FICCI',
  'NEXUSLOGIC TECHNOLOGIES',
  'GEEKSFORGEEKS',
  'GOOGLE DEVELOPER GROUP ON CAMPUS',
];

const DEFAULT_ITEMS_2 = [
  'GOOGLE DEVELOPER GROUP ON CAMPUS',
  'GEEKSFORGEEKS',
  'NEXUSLOGIC TECHNOLOGIES',
  'FICCI',
  'NATIONAL FORENSIC SCIENCES UNIVERSITY',
  'ASSAM UNIVERSITY',
  'NATIONAL INFORMATICS CENTRE',
];

const THEME_STYLES: Record<string, string> = {
  lime: 'bg-[#D7FF36] text-[#111111] border-y-2 border-[#111111]',
  blue: 'bg-[#304FFE] text-white border-y-2 border-[#111111]',
  orange: 'bg-[#FF5733] text-white border-y-2 border-[#111111]',
  cyan: 'bg-[#00F0FF] text-[#111111] border-y-2 border-[#111111]',
  black: 'bg-[#111111] text-[#F2F0E8] border-y-2 border-[#111111]',
};

export default function CrossMarquee({
  items1 = DEFAULT_ITEMS_1,
  items2 = DEFAULT_ITEMS_2,
  theme1 = 'lime',
  theme2 = 'blue',
  className = '',
}: CrossMarqueeProps) {
  // 4x duplication ensures seamless, gapless infinite animation loop across wide monitors
  const repeatedItems1 = [...items1, ...items1, ...items1, ...items1];
  const repeatedItems2 = [...items2, ...items2, ...items2, ...items2];

  return (
    <div
      className={`relative w-full overflow-hidden select-none -my-7 md:-my-10 z-20 pointer-events-none py-8 md:py-12 bg-transparent ${className}`}
      aria-label="Partner institutions cross-scrolling marquee"
    >
      {/* Ribbon 1: Neon Acid Lime / Yellow (Tilted -2.5°, Scrolling Left) */}
      <div className="w-[140vw] -ml-[20vw] max-w-none origin-center pointer-events-auto transform -rotate-2 md:-rotate-3 z-10">
        <div
          className={`overflow-hidden py-2.5 md:py-3 whitespace-nowrap shadow-sm ${
            THEME_STYLES[theme1] || THEME_STYLES.lime
          }`}
        >
          <div className="animate-marquee-left">
            {repeatedItems1.map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="flex items-center mx-4 md:mx-6 text-xs md:text-sm font-mono uppercase tracking-widest"
              >
                <span className="font-black">{item}</span>
                <span className="mx-4 md:mx-6 text-xs opacity-70">★</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ribbon 2: Electric Cobalt Blue (Tilted +2.5°, Scrolling Right, Crossing Over Ribbon 1) */}
      <div className="w-[140vw] -ml-[20vw] max-w-none origin-center pointer-events-auto transform rotate-2 md:rotate-3 z-20 -mt-7 md:-mt-9">
        <div
          className={`overflow-hidden py-2.5 md:py-3 whitespace-nowrap shadow-md ${
            THEME_STYLES[theme2] || THEME_STYLES.blue
          }`}
        >
          <div className="animate-marquee-right">
            {repeatedItems2.map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="flex items-center mx-4 md:mx-6 text-xs md:text-sm font-mono uppercase tracking-widest"
              >
                <span className="font-black">{item}</span>
                <span className="mx-4 md:mx-6 text-xs opacity-70">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
