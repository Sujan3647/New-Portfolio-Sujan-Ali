import { useState, useMemo, useRef } from 'react';
import {
  ExternalLink,
  Github,
  Code2,
  Terminal,
  Copy,
  Check,
  Search,
  ArrowRight,
  LayoutGrid,
  ListFilter,
  Radio,
  Layers,
  Shield,
  ChevronRight,
  Globe,
  SlidersHorizontal,
  FolderGit2,
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  // Page 1: Main 4 Production Platforms
  // Page 2: After "View More" (5 Research Labs & GitHub Repos)
  const [activePage, setActivePage] = useState<1 | 2>(1);
  const [viewMode, setViewMode] = useState<'cards' | 'console'>('cards');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['ALL', 'Production', 'Cybersecurity', 'Web3 & Quantum'];

  // Filter projects by page, category and search
  const filteredProjects = useMemo(() => {
    return PORTFOLIO_DATA.projects.filter((p) => {
      const matchesPage = searchQuery.trim() ? true : p.page === activePage;

      const matchesCat =
        selectedCategory === 'ALL' ||
        (selectedCategory === 'Production' && p.page === 1) ||
        (selectedCategory === 'Cybersecurity' && (p.category.includes('Cyber') || p.category.includes('Crypto') || p.category.includes('Proctoring'))) ||
        (selectedCategory === 'Web3 & Quantum' && (p.category.includes('Web3') || p.category.includes('Quantum') || p.category.includes('Blockchain') || p.category.includes('Bio-Inspired')));

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.domain.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));

      return matchesPage && matchesCat && matchesSearch;
    });
  }, [activePage, selectedCategory, searchQuery]);

  const handleCopy = (text: string) => {
    sound.playPop();
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const switchPage = (page: 1 | 2) => {
    sound.playPop();
    setActivePage(page);
    setSearchQuery('');
    setSelectedCategory('ALL');
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="w-full border-b border-[#111111] bg-[#F2F0E8] py-10 md:py-14 relative paper-grain selection:bg-[#D7FF36]"
    >
      <span id="projects" className="absolute -top-16" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
        {/* ========================================================= */}
        {/* COMPACT DEV CONTROL BAR / HEADER */}
        {/* ========================================================= */}
        <div className="border-2 border-[#111111] bg-white brutalist-shadow p-4 sm:p-5 space-y-4">
          {/* Top Line: Section Tag + Telemetry + View Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#111111] pb-3">
            <div className="flex items-center gap-2.5">
              <span className="px-2 py-0.5 bg-[#111111] text-[#D7FF36] font-mono-tech text-xs font-bold">
                04
              </span>
              <span className="text-xs font-mono-tech tracking-wider text-[#304FFE] font-bold uppercase">
                SELECTED WORK ARCHIVE
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono-tech font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                9 DEPLOYMENTS ONLINE
              </span>
            </div>

            {/* View Mode Toggle: Compact Cards vs High-Density Console */}
            <div className="flex items-center gap-1 border border-[#111111] bg-[#F2F0E8] p-0.5 text-xs font-mono-tech">
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setViewMode('cards');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold uppercase transition-all ${
                  viewMode === 'cards'
                    ? 'bg-[#111111] text-[#D7FF36]'
                    : 'text-[#111111] hover:bg-neutral-200'
                }`}
                title="Compact Card Grid"
              >
                <LayoutGrid className="w-3 h-3" />
                <span>GRID</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  sound.playClick();
                  setViewMode('console');
                }}
                className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold uppercase transition-all ${
                  viewMode === 'console'
                    ? 'bg-[#111111] text-[#D7FF36]'
                    : 'text-[#111111] hover:bg-neutral-200'
                }`}
                title="Linear Console List"
              >
                <ListFilter className="w-3 h-3" />
                <span>CONSOLE</span>
              </button>
            </div>
          </div>

          {/* Middle Line: Compact Title & Primary Two-Page Switcher */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-archivo text-[#111111] uppercase tracking-tight">
                ENGINEERED BUILDS.
              </h2>
              <p className="text-xs font-mono-tech text-neutral-600">
                {activePage === 1
                  ? 'PAGE 01 // PRODUCTION WEB PLATFORMS (4 SITES)'
                  : 'PAGE 02 // RESEARCH LABS, PROTOCOLS & GITHUB REPOS (5 LABS)'}
              </p>
            </div>

            {/* Compact Segmented Switcher for Page 1 vs Page 2 */}
            <div className="flex items-center border-2 border-[#111111] bg-[#F2F0E8] p-1 gap-1 self-start md:self-auto">
              <button
                type="button"
                onClick={() => switchPage(1)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono-tech font-bold uppercase transition-all ${
                  activePage === 1
                    ? 'bg-[#111111] text-[#D7FF36] brutalist-shadow-sm'
                    : 'text-[#111111] hover:bg-neutral-200'
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>PAGE 01: PROD APPS (4)</span>
              </button>

              <button
                type="button"
                onClick={() => switchPage(2)}
                className={`flex items-center gap-2 px-3 py-1.5 text-xs font-mono-tech font-bold uppercase transition-all ${
                  activePage === 2
                    ? 'bg-[#111111] text-[#D7FF36] brutalist-shadow-sm'
                    : 'text-[#111111] hover:bg-neutral-200'
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>PAGE 02: RESEARCH (5)</span>
              </button>
            </div>
          </div>

          {/* Bottom Filter & Search Strip */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-neutral-200 text-xs font-mono-tech">
            {/* Compact Search Box */}
            <div className="relative flex-1 max-w-sm">
              <Search className="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search specs, tech, or domains..."
                className="w-full pl-8 pr-7 py-1.5 bg-neutral-50 border border-[#111111] text-xs font-mono-tech focus:outline-none focus:bg-white"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-black text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    setSelectedCategory(cat);
                  }}
                  className={`px-2 py-1 text-[11px] font-mono-tech font-bold uppercase border transition-colors ${
                    selectedCategory === cat
                      ? 'bg-[#304FFE] text-white border-[#304FFE]'
                      : 'bg-white text-neutral-700 border-neutral-300 hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* VIEW 1: COMPACT CARD GRID (TIGHT 2-COLUMN MODERN DEV CARDS) */}
        {/* ========================================================= */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProjects.map((project) => (
              <CompactProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
                onCopy={handleCopy}
                copiedText={copiedText}
              />
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* VIEW 2: HIGH-DENSITY DEV CONSOLE (LINEAR / RAYCAST STYLE) */}
        {/* ========================================================= */}
        {viewMode === 'console' && (
          <div className="border-2 border-[#111111] bg-white brutalist-shadow divide-y divide-[#111111] overflow-hidden">
            {/* Header row */}
            <div className="bg-[#111111] text-[#D7FF36] px-4 py-2 text-[11px] font-mono-tech font-bold uppercase flex items-center justify-between">
              <span>DEPLOYMENT SPEC & TELEMETRY REGISTRY</span>
              <span>{filteredProjects.length} TARGETS</span>
            </div>

            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="p-3 sm:p-4 hover:bg-[#F2F0E8] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono-tech"
              >
                {/* Left: Indicator + Number + Title */}
                <div className="space-y-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#304FFE]">{project.number}</span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.page === 1 ? 'bg-emerald-500' : 'bg-cyan-500'
                      }`}
                    />
                    <h4
                      onClick={() => {
                        sound.playPop();
                        onSelectProject(project);
                      }}
                      className="font-archivo text-sm uppercase text-[#111111] hover:text-[#304FFE] cursor-pointer truncate"
                    >
                      {project.title}
                    </h4>
                    <span className="px-1.5 py-0.2 bg-neutral-100 border border-neutral-300 text-[10px] text-neutral-600 hidden md:inline">
                      {project.badge}
                    </span>
                  </div>

                  <p className="text-neutral-600 line-clamp-1 text-[11px]">
                    {project.tagline}
                  </p>

                  {/* Domain / Link */}
                  <div className="flex items-center gap-2 text-[11px] text-neutral-500">
                    <Globe className="w-3 h-3 text-[#304FFE]" />
                    <span className="text-neutral-800 font-semibold truncate">
                      {project.domain}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleCopy(project.liveUrl || project.githubUrl)}
                      className="hover:text-black"
                      title="Copy URL"
                    >
                      {copiedText === (project.liveUrl || project.githubUrl) ? (
                        <Check className="w-3 h-3 text-emerald-600" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    type="button"
                    onClick={() => {
                      sound.playPop();
                      onSelectProject(project);
                    }}
                    className="py-1.5 px-3 bg-white text-[#111111] hover:bg-[#D7FF36] border border-[#111111] font-bold text-[11px] uppercase transition-colors"
                  >
                    SPEC
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="py-1.5 px-3 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-bold text-[11px] uppercase transition-colors flex items-center gap-1"
                    >
                      <span>VISIT</span>
                      <ExternalLink className="w-3 h-3 text-[#D7FF36]" />
                    </a>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="py-1.5 px-3 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-bold text-[11px] uppercase transition-colors flex items-center gap-1"
                    >
                      <Github className="w-3 h-3" />
                      <span>CODE</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty Search Fallback */}
        {filteredProjects.length === 0 && (
          <div className="p-8 border-2 border-dashed border-[#111111] bg-white text-center font-mono-tech text-xs text-neutral-500">
            No projects found matching "{searchQuery}".
          </div>
        )}

        {/* ========================================================= */}
        {/* COMPACT "VIEW MORE" FOOTER BAR (QUICK TOGGLE) */}
        {/* ========================================================= */}
        {activePage === 1 ? (
          <div className="border-2 border-[#111111] bg-[#111111] text-white p-3.5 sm:p-4 brutalist-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs font-mono-tech">
              <span className="text-[#D7FF36] font-bold">$ sujan --archive</span>
              <span className="text-neutral-400">·</span>
              <span className="text-neutral-200">5 Deep-Tech & Research Repos Available (Page 02)</span>
            </div>

            <button
              type="button"
              onClick={() => switchPage(2)}
              className="py-2 px-4 bg-[#D7FF36] text-[#111111] hover:bg-white border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-all flex items-center justify-center gap-1.5 whitespace-nowrap self-stretch sm:self-auto"
            >
              <span>VIEW MORE PROJECTS (PAGE 02)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="border-2 border-[#111111] bg-white p-3.5 brutalist-shadow-sm flex items-center justify-between gap-3">
            <div className="text-xs font-mono-tech text-neutral-700">
              <span className="font-bold text-[#111111]">PAGE 02:</span> Research Labs & Repositories Active
            </div>

            <button
              type="button"
              onClick={() => switchPage(1)}
              className="py-1.5 px-3 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center gap-1.5"
            >
              <span>← BACK TO PROD SITES (PAGE 01)</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// =========================================================
// SUBCOMPONENT: COMPACT MODERN PROJECT CARD
// Sleek, high-density, low-height card with crisp styling
// =========================================================
interface CompactCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  onCopy: (text: string) => void;
  copiedText: string | null;
}

function CompactProjectCard({
  project,
  onSelectProject,
  onCopy,
  copiedText,
}: CompactCardProps) {
  const [showSpec, setShowSpec] = useState(false);
  const gitClone = `git clone ${project.githubUrl}.git`;

  return (
    <article className="border-2 border-[#111111] bg-white brutalist-shadow transition-all hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
      {/* 1. Sleek Window Header Strip */}
      <div className="border-b border-[#111111] bg-[#111111] text-white px-3 py-2 flex items-center justify-between text-xs font-mono-tech">
        {/* Terminal Window Dots + Spec Number */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
            <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
            <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
          </div>
          <span className="font-bold text-[#D7FF36] ml-1">
            SPEC//{project.number}
          </span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-1.5">
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              project.page === 1 ? 'bg-emerald-400 animate-pulse' : 'bg-cyan-400'
            }`}
          />
          <span className="text-[10px] text-neutral-300 font-bold uppercase tracking-wider">
            {project.status}
          </span>
        </div>
      </div>

      {/* 2. Main Card Body (Compact Height) */}
      <div className="p-4 space-y-3">
        {/* Title & Category Line */}
        <div>
          <div className="flex items-center justify-between gap-2 text-[10px] font-mono-tech font-bold uppercase text-[#304FFE] mb-1">
            <span>{project.category}</span>
            <span className="text-neutral-500">YR: {project.year}</span>
          </div>

          <h3
            onClick={() => {
              sound.playPop();
              onSelectProject(project);
            }}
            className="text-base sm:text-lg font-archivo text-[#111111] uppercase tracking-tight hover:text-[#304FFE] cursor-pointer transition-colors line-clamp-1"
          >
            {project.title}
          </h3>

          <p className="text-xs font-medium text-neutral-700 mt-1 line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Interactive URL Chip with 1-Click Copy */}
        <div className="flex items-center justify-between bg-[#F2F0E8] border border-neutral-300 px-2.5 py-1 text-[11px] font-mono-tech">
          <div className="flex items-center gap-1.5 truncate text-neutral-800">
            <Globe className="w-3 h-3 text-[#304FFE] shrink-0" />
            <span className="truncate select-all">{project.domain}</span>
          </div>
          <button
            type="button"
            onClick={() => onCopy(project.liveUrl || project.githubUrl)}
            className="text-neutral-500 hover:text-black shrink-0 ml-1.5"
            title="Copy URL"
          >
            {copiedText === (project.liveUrl || project.githubUrl) ? (
              <Check className="w-3 h-3 text-emerald-600" />
            ) : (
              <Copy className="w-3 h-3" />
            )}
          </button>
        </div>

        {/* Key Metrics Chips (Side by side) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-2 text-[10px] font-mono-tech">
            {project.metrics.slice(0, 2).map((m, i) => (
              <div key={i} className="p-1.5 border border-neutral-200 bg-neutral-50/70">
                <span className="text-neutral-500 block truncate">{m.label}</span>
                <span className="font-bold text-[#111111] truncate block">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Expandable Architecture Notes */}
        {showSpec && (
          <div className="p-2.5 border border-neutral-300 bg-neutral-50 space-y-2 text-[11px] font-mono-tech animate-fadeIn">
            <div className="font-bold text-[#FF5733] uppercase text-[10px] flex items-center gap-1">
              <Shield className="w-3 h-3" />
              <span>CORE ARCHITECTURE SPEC</span>
            </div>
            <ul className="space-y-1 text-neutral-800">
              {project.architectureHighlights.slice(0, 2).map((h, i) => (
                <li key={i} className="flex items-start gap-1">
                  <span className="text-[#304FFE]">▶</span>
                  <span className="line-clamp-2">{h}</span>
                </li>
              ))}
            </ul>
            <div className="pt-1 border-t border-neutral-200 text-neutral-500 text-[10px] flex items-center justify-between">
              <span>GIT: {project.branch || 'main'}</span>
              <button
                type="button"
                onClick={() => onCopy(gitClone)}
                className="hover:text-black font-bold text-[#304FFE]"
              >
                {copiedText === gitClone ? 'CLONE COPIED' : 'COPY GIT CLONE'}
              </button>
            </div>
          </div>
        )}

        {/* Compact Tech Stack Pills */}
        <div className="pt-1 flex flex-wrap gap-1">
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-[10px] font-mono-tech text-neutral-700"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="text-[10px] font-mono-tech text-neutral-500 self-center">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* 3. Bottom Action Bar */}
      <div className="border-t border-[#111111] bg-[#F2F0E8]/50 p-2.5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => {
            sound.playClick();
            setShowSpec(!showSpec);
          }}
          className="py-1.5 px-2.5 bg-white text-[#111111] hover:bg-neutral-200 border border-[#111111] font-mono-tech text-[11px] font-bold uppercase transition-colors"
        >
          {showSpec ? 'HIDE' : 'SPEC'}
        </button>

        <button
          type="button"
          onClick={() => {
            sound.playPop();
            onSelectProject(project);
          }}
          className="flex-1 py-1.5 px-2.5 bg-white text-[#111111] hover:bg-[#D7FF36] border border-[#111111] font-mono-tech text-[11px] font-bold uppercase transition-colors flex items-center justify-center gap-1"
        >
          <Code2 className="w-3 h-3 text-[#304FFE]" />
          <span>INSPECT MODAL</span>
        </button>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="py-1.5 px-3 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-[11px] font-bold uppercase transition-colors flex items-center gap-1"
          >
            <span>LIVE</span>
            <ExternalLink className="w-3 h-3 text-[#D7FF36]" />
          </a>
        ) : (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => sound.playClick()}
            className="py-1.5 px-3 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-[11px] font-bold uppercase transition-colors flex items-center gap-1"
          >
            <Github className="w-3 h-3 text-white" />
            <span>CODE</span>
          </a>
        )}
      </div>
    </article>
  );
}
