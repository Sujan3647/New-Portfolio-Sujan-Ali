import { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code2 } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { sound } from '../utils/sound';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<string>('ALL');

  const filteredProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (filter === 'ALL') return true;
    return p.category.toLowerCase().includes(filter.toLowerCase()) || p.techStack.includes(filter);
  });

  return (
    <section id="work" className="w-full border-b border-[#111111] bg-[#F2F0E8] py-16 md:py-24 relative paper-grain">
      <span id="projects" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111] pb-6 mb-12">
          <div>
            <div className="text-xs font-mono-tech tracking-widest text-[#304FFE] font-bold uppercase mb-2">
              04 // SELECTED WORK ARCHIVE
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-archivo text-[#111111] tracking-tight uppercase">
              THINGS I'VE BUILT.
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1 p-1 border border-[#111111] bg-white">
            {['ALL', 'Healthcare', 'Cybersecurity', 'Web3', 'Real-Time'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  sound.playClick();
                  setFilter(cat);
                }}
                className={`px-3 py-1.5 text-xs font-mono-tech font-bold uppercase transition-all ${
                  filter === cat
                    ? 'bg-[#111111] text-[#D7FF36] brutalist-shadow-sm'
                    : 'text-[#111111] hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Unconventional Projects List */}
        <div className="space-y-16 md:space-y-24">
          {filteredProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={project.id}
                className="relative border-2 border-[#111111] bg-white brutalist-shadow-lg overflow-hidden group transition-all"
              >
                {/* Top Number Header Bar */}
                <div className="border-b border-[#111111] bg-[#111111] text-white px-6 py-2.5 flex items-center justify-between text-xs font-mono-tech">
                  <div className="flex items-center gap-3">
                    <span className="font-archivo text-xl text-[#D7FF36] font-bold">
                      PROJECT // {project.number}
                    </span>
                    <span className="text-neutral-400 hidden sm:inline">·</span>
                    <span className="text-neutral-300 uppercase hidden sm:inline">
                      {project.category}
                    </span>
                  </div>
                  <span className="text-neutral-400 font-mono-tech">
                    YEAR: {project.year}
                  </span>
                </div>

                {/* Split Editorial Showcase Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Visual Preview Half */}
                  <div
                    className={`lg:col-span-7 relative bg-neutral-900 overflow-hidden cursor-pointer border-b lg:border-b-0 ${
                      isEven ? 'lg:border-r border-[#111111]' : 'lg:order-2 lg:border-l border-[#111111]'
                    }`}
                    onClick={() => {
                      sound.playPop();
                      onSelectProject(project);
                    }}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.tagline}`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Click overlay hint */}
                      <div className="absolute inset-0 bg-[#111111]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="px-4 py-2 bg-[#D7FF36] text-[#111111] font-archivo text-xs uppercase tracking-wider border border-[#111111] brutalist-shadow-sm flex items-center gap-2">
                          <span>INSPECT ARCHITECTURE SPEC</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Giant subtle project number in watermark position without breaking zero-slop rules */}
                      <div className="absolute top-4 left-4 bg-black/80 text-white font-mono-tech text-xs px-2 py-1 border border-white/20">
                        SPEC: SA-PROJ-{project.number}
                      </div>
                    </div>
                  </div>

                  {/* Copy & Architecture Highlights Half */}
                  <div
                    className={`lg:col-span-5 p-6 md:p-8 flex flex-col justify-between space-y-6 ${
                      isEven ? '' : 'lg:order-1'
                    }`}
                  >
                    <div>
                      {/* Title & Tagline */}
                      <div className="space-y-1">
                        <h3
                          onClick={() => {
                            sound.playPop();
                            onSelectProject(project);
                          }}
                          className="text-2xl sm:text-3xl md:text-4xl font-archivo text-[#111111] uppercase tracking-tight hover:text-[#304FFE] transition-colors cursor-pointer"
                        >
                          {project.title}
                        </h3>
                        <p className="text-sm font-bold text-[#304FFE] font-mono-tech uppercase">
                          {project.tagline}
                        </p>
                      </div>

                      {/* Core Summary */}
                      <p className="mt-4 text-sm md:text-base text-neutral-700 leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="mt-5 space-y-2 text-xs font-mono-tech text-neutral-800">
                        {project.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-[#304FFE] font-bold">▶</span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* Zero-Pill Tech Stack Metadata */}
                      <div className="mt-6 pt-4 border-t border-neutral-200">
                        <div className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-neutral-500 mb-2">
                          ENGINEERED WITH
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#111111]">
                          {project.techStack.map((tech, i) => (
                            <span key={tech} className="font-semibold">
                              {tech}
                              {i < project.techStack.length - 1 && (
                                <span className="mx-1.5 text-neutral-400">·</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-[#111111] flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          sound.playPop();
                          onSelectProject(project);
                        }}
                        className="flex-1 py-3 px-4 bg-[#111111] text-white hover:bg-[#304FFE] border border-[#111111] font-mono-tech text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2 brutalist-shadow-sm"
                      >
                        <Code2 className="w-3.5 h-3.5 text-[#D7FF36]" />
                        <span>VIEW SPEC & CODE</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => sound.playClick()}
                        aria-label={`GitHub repo for ${project.title}`}
                        className="p-3 bg-white text-[#111111] hover:bg-[#D7FF36] border border-[#111111] transition-colors brutalist-shadow-sm"
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => sound.playClick()}
                          aria-label={`Live demo for ${project.title}`}
                          className="p-3 bg-white text-[#111111] hover:bg-[#304FFE] hover:text-white border border-[#111111] transition-colors brutalist-shadow-sm"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
