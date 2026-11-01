import { useState, useEffect, useRef } from 'react';
import { Search, X, Layers, Code, Briefcase, Award, ArrowRight } from 'lucide-react';
import { searchAllPortfolio, SearchResultItem } from '../utils/portfolioLogic';
import { sound } from '../utils/sound';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProjectById?: (id: string) => void;
}

export default function CommandMenu({ isOpen, onClose, onSelectProjectById }: CommandMenuProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = searchAllPortfolio(query);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Global keyboard shortcut Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        sound.playPop();
        if (isOpen) {
          onClose();
        } else {
          // Trigger open via parent
          const searchBtn = document.querySelector('button[title*="Search"]') as HTMLButtonElement | null;
          searchBtn?.click();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSelect = (item: SearchResultItem) => {
    sound.playClick();
    onClose();

    if (item.type === 'project' && onSelectProjectById) {
      const projId = item.id.replace('proj-', '');
      onSelectProjectById(projId);
    } else {
      const element = document.querySelector(item.anchor);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Search portfolio"
      className="fixed inset-0 z-50 bg-[#111111]/75 backdrop-blur-sm p-4 sm:p-6 md:p-10 flex items-start justify-center pt-20 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#F2F0E8] border-2 border-[#111111] brutalist-shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b-2 border-[#111111] bg-white">
          <Search className="w-5 h-5 text-neutral-500" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleInputKeyDown}
            placeholder="Type a skill, project, achievement (e.g. Next.js, FICCI, Docker, Grant)..."
            className="flex-1 bg-transparent text-sm font-mono-tech text-[#111111] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-xs font-mono-tech text-neutral-400 hover:text-black p-1"
            >
              CLEAR
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 border border-[#111111] bg-neutral-100 text-[10px] font-mono-tech">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto divide-y divide-[#111111]">
          {results.length > 0 ? (
            results.map((item, idx) => {
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-colors ${
                    isSelected ? 'bg-[#111111] text-[#F2F0E8]' : 'hover:bg-white text-[#111111]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.type === 'project' && <Code className={`w-4 h-4 ${isSelected ? 'text-[#D7FF36]' : 'text-[#304FFE]'}`} />}
                    {item.type === 'tech' && <Layers className={`w-4 h-4 ${isSelected ? 'text-[#D7FF36]' : 'text-neutral-600'}`} />}
                    {item.type === 'experience' && <Briefcase className={`w-4 h-4 ${isSelected ? 'text-[#D7FF36]' : 'text-[#FF5733]'}`} />}
                    {item.type === 'achievement' && <Award className={`w-4 h-4 ${isSelected ? 'text-[#D7FF36]' : 'text-amber-500'}`} />}

                    <div>
                      <div className="font-archivo text-sm uppercase">{item.title}</div>
                      <div className={`text-xs font-mono-tech ${isSelected ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 ${isSelected ? 'text-[#D7FF36]' : 'text-neutral-400'}`} />
                </div>
              );
            })
          ) : query ? (
            <div className="p-8 text-center text-xs font-mono-tech text-neutral-500">
              No results found for "{query}". Try searching for "Spring", "FICCI", "React", or "Lottery".
            </div>
          ) : (
            <div className="p-6 text-xs font-mono-tech text-neutral-600 space-y-3">
              <div className="font-bold text-[#111111] uppercase">QUICK SUGGESTIONS:</div>
              <div className="flex flex-wrap gap-2">
                {['TechNOVATE', 'SIC', 'CouponPe', 'Quantum', 'FICCI', 'Docker', 'Solidity', 'Spring Boot'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 border border-[#111111] bg-white hover:bg-[#D7FF36] text-[11px] font-bold"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
