interface MarqueeBannerProps {
  items: string[];
  direction?: 'left' | 'right';
  theme?: 'black' | 'lime' | 'blue' | 'orange';
  speed?: 'normal' | 'fast';
}

export default function MarqueeBanner({
  items,
  direction = 'left',
  theme = 'black',
}: MarqueeBannerProps) {
  const themeClasses = {
    black: 'bg-[#111111] text-[#F2F0E8] border-y border-[#111111]',
    lime: 'bg-[#D7FF36] text-[#111111] border-y border-[#111111]',
    blue: 'bg-[#304FFE] text-white border-y border-[#111111]',
    orange: 'bg-[#FF5733] text-white border-y border-[#111111]',
  }[theme];

  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

  // Duplicate items for continuous seamless loop
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-3 whitespace-nowrap select-none ${themeClasses}`}>
      <div className={animationClass}>
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center mx-4 text-xs md:text-sm font-mono uppercase tracking-widest">
            <span className="font-bold">{item}</span>
            <span className="mx-4 text-xs opacity-60">■</span>
          </div>
        ))}
      </div>
    </div>
  );
}
