import { useState } from 'react';
import {
  Search,
  Terminal,
  Sparkles,
  Code2,
  Server,
  Database,
  Blocks,
  Wrench,
  CheckCircle2,
  Zap,
  Activity,
  ChevronRight,
} from 'lucide-react';
import { PORTFOLIO_DATA, TechItem } from '../data/portfolioData';
import { filterTechStack } from '../utils/portfolioLogic';
import { sound } from '../utils/sound';
import { TechLogo } from './TechLogos';

const CATEGORIES = [
  { id: 'ALL', label: 'All Stack', icon: Sparkles, color: '#111111' },
  { id: 'Frontend', label: 'Frontend', icon: Code2, color: '#304FFE' },
  { id: 'Backend', label: 'Backend', icon: Server, color: '#16A34A' },
  { id: 'Database', label: 'Database', icon: Database, color: '#D97706' },
  { id: 'Programming', label: 'Languages', icon: Terminal, color: '#9333EA' },
  { id: 'Tools', label: 'DevOps & Tools', icon: Wrench, color: '#FF5733' },
  { id: 'Blockchain', label: 'Web3 & Crypto', icon: Blocks, color: '#2563EB' },
];

const TECH_CODE_SNIPPETS: Record<string, string> = {
  'React': 'const [telemetry, setTelemetry] = useState<TelemetryState>();',
  'Next.js': 'export default async function Page({ params }: PageProps) { ... }',
  'TypeScript': 'type Result<T> = { success: true; data: T } | { success: false; err: Error };',
  'Tailwind CSS': 'className="bg-[#111] text-[#D7FF36] border-2 border-black brutalist-shadow"',
  'JavaScript': 'const worker = new Worker(new URL("./pipeline.worker.ts", import.meta.url));',
  'HTML5': '<section id="tech-matrix" aria-label="Production Engineering Weaponry">',
  'CSS3': '@keyframes pulseGlow { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }',
  'Node.js': 'import { pipeline } from "node:stream/promises"; await pipeline(src, dest);',
  'Express.js': 'router.post("/v1/verify", authGuard, rateLimiter, handlePayload);',
  'Java': 'public sealed class CryptVault permits RSAVault, Kyber512Engine { ... }',
  'Spring Boot': '@RestController @RequestMapping("/api/v1/vault") class VaultController { ... }',
  'REST APIs': 'GET /api/v1/telemetry/nodes HTTP/1.1 -> 200 OK [ETag: "w-39a04"]',
  'JWT': 'const token = jwt.sign({ sub: uid, role: "AUDITOR" }, SECRET, { expiresIn: "1h" });',
  'PostgreSQL': 'SELECT id, payload FROM state_records WHERE verified = true ORDER BY ts DESC;',
  'MySQL': 'CREATE INDEX idx_audit_timestamp ON bilateral_sessions(event_time, status);',
  'MongoDB': 'db.telemetry.aggregate([{ $match: { active: true } }, { $sort: { ts: -1 } }]);',
  'Firebase': 'await setDoc(doc(db, "credentials", id), { verified: true, ts: serverTimestamp() });',
  'Prisma': 'const session = await prisma.bilateralSession.findUnique({ where: { id } });',
  'C': 'int* buffer = (int*)malloc(BUFFER_SIZE * sizeof(int)); if (!buffer) return -1;',
  'C++': 'std::vector<std::unique_ptr<Node>> registry; registry.emplace_back(std::move(node));',
  'Python': 'def derive_kyber_keys(seed: bytes) -> tuple[bytes, bytes]: return crystals_kyber.keygen(seed)',
  'Solidity': 'contract SentinelRegistry is Ownable, ReentrancyGuard { mapping(address => bool) public isVerified; }',
  'Docker': 'docker compose -f docker-compose.prod.yml up -d --build --remove-orphans',
  'Git': 'git commit -m "feat(crypto): implement Kyber512 post-quantum key exchange"',
  'GitHub': 'name: CI/CD Pipeline\non: [push]\njobs:\n  audit: runs-on: ubuntu-latest',
  'Postman': 'pm.test("Status code is 200", () => { pm.response.to.have.status(200); });',
  'Vercel': 'vercel deploy --prod --token $VERCEL_TOKEN --scope sujan-portfolio',
  'Render': 'services:\n  - type: web\n    name: exam-proctor-core\n    env: docker',
  'Figma': '// Component Library: Neo-Brutalist Design Tokens v2.4 (Variables Exported)',
  'Jira': '// Sprint Backlog: ST-409 [In Progress] -> Facilitate Bilateral Session Pipeline',
  'Ethereum': 'const signer = await provider.getSigner(); await contract.connect(signer).verify();',
  'Smart Contracts': 'event CredentialRegistered(bytes32 indexed docHash, address indexed issuer, uint256 timestamp);',
  'Ganache': 'ganache --wallet.deterministic --chain.chainId 1337 --gasPrice 20000000000',
  'MetaMask': 'const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });',
  'IPFS': 'const { cid } = await ipfsClient.add(encryptedDoc, { pin: true }); return cid.toString();',
  'Pinata': 'await pinata.pinJSONToIPFS({ docHash, metadata, timestamp: Date.now() });',
};

// ── Category accent colours ────────────────────────────────────────────────
const CAT_ACCENT: Record<string, string> = {
  Frontend:    '#304FFE',
  Backend:     '#16A34A',
  Database:    '#D97706',
  Programming: '#9333EA',
  Tools:       '#FF5733',
  Blockchain:  '#2563EB',
};

// ── Compact marquee tile ───────────────────────────────────────────────────
function MarqueeTile({
  tech,
  isActive,
  onSelect,
}: {
  tech: TechItem;
  isActive: boolean;
  onSelect: (t: TechItem) => void;
}) {
  const accent = CAT_ACCENT[tech.category] ?? '#111111';
  return (
    <button
      type="button"
      onClick={() => onSelect(tech)}
      onMouseEnter={() => sound.playClick()}
      title={`${tech.name} · ${tech.category} · ${tech.level}`}
      className={`group relative flex flex-col items-center justify-center gap-1.5 w-[76px] h-[76px] shrink-0 border-2 cursor-pointer transition-all duration-200 mx-1.5 ${
        isActive
          ? 'border-[#111111] bg-[#111111] -translate-y-1 shadow-[3px_3px_0px_#D7FF36]'
          : 'border-neutral-300 bg-white hover:border-[#111111] hover:-translate-y-1 hover:shadow-[3px_3px_0px_#111111]'
      }`}
      style={isActive ? {} : { '--hover-accent': accent } as React.CSSProperties}
    >
      {/* Active left accent bar */}
      {isActive && (
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#D7FF36]" />
      )}

      {/* Logo */}
      <span className={`transition-transform duration-200 group-hover:scale-110 ${isActive ? 'opacity-100' : ''}`}>
        <TechLogo name={tech.name} size="sm" />
      </span>

      {/* Name */}
      <span
        className={`font-mono-tech text-[9px] font-bold uppercase text-center leading-none px-0.5 truncate w-full text-center ${
          isActive ? 'text-[#D7FF36]' : 'text-[#111111] group-hover:text-[#304FFE]'
        }`}
      >
        {tech.name}
      </span>

      {/* Expert dot */}
      {tech.level === 'Expert' && !isActive && (
        <span
          className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
      )}
    </button>
  );
}

// ── Single infinite-scroll row ─────────────────────────────────────────────
function MarqueeRow({
  items,
  direction,
  label,
  accent,
  activeName,
  onSelect,
}: {
  items: TechItem[];
  direction: 'left' | 'right' | 'left-slow';
  label: string;
  accent: string;
  activeName: string;
  onSelect: (t: TechItem) => void;
}) {
  // duplicate for seamless loop
  const doubled = [...items, ...items];
  const animClass =
    direction === 'left'
      ? 'animate-tech-row-left'
      : direction === 'right'
      ? 'animate-tech-row-right'
      : 'animate-tech-row-left-slow';

  return (
    <div className="flex items-center gap-0 border-b border-neutral-200 last:border-b-0">
      {/* Category label pill (fixed left) */}
      <div
        className="shrink-0 w-[108px] flex flex-col items-start justify-center px-3 py-2 border-r-2 border-[#111111] self-stretch"
        style={{ backgroundColor: accent + '18' }}
      >
        <span
          className="font-mono-tech text-[9px] font-bold uppercase tracking-widest leading-tight"
          style={{ color: accent }}
        >
          {label}
        </span>
        <span className="font-mono-tech text-[10px] font-black text-[#111111] mt-0.5">
          {items.length} tools
        </span>
        {/* Direction arrow */}
        <span
          className="mt-1 text-[9px] font-mono-tech opacity-50"
          style={{ color: accent }}
        >
          {direction === 'right' ? '←←←' : '→→→'}
        </span>
      </div>

      {/* Scrolling strip */}
      <div className="flex-1 overflow-hidden py-2">
        <div className={animClass}>
          {doubled.map((tech, idx) => (
            <MarqueeTile
              key={`${tech.name}-${idx}`}
              tech={tech}
              isActive={activeName === tech.name}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── TechMarqueeMatrix ──────────────────────────────────────────────────────
interface MarqueeMatrixProps {
  filteredTech: TechItem[];
  activeTech: TechItem;
  searchQuery: string;
  onSelectTech: (t: TechItem) => void;
  onResetFilter: () => void;
  onSetSearchQuery: (q: string) => void;
}

function TechMarqueeMatrix({
  filteredTech,
  activeTech,
  searchQuery,
  onSelectTech,
  onResetFilter,
  onSetSearchQuery,
}: MarqueeMatrixProps) {
  // Group filtered tools by category in display order
  const ORDER = ['Frontend', 'Backend', 'Database', 'Programming', 'Tools', 'Blockchain'];
  const DIRECTIONS: ('left' | 'right' | 'left-slow')[] = ['left', 'right', 'left-slow', 'right', 'left', 'right'];

  const rows = ORDER.map((cat, i) => ({
    cat,
    items: filteredTech.filter((t) => t.category === cat),
    direction: DIRECTIONS[i],
    accent: CAT_ACCENT[cat] ?? '#111111',
  })).filter((r) => r.items.length > 0);

  return (
    <div className="border-2 border-[#111111] bg-white brutalist-shadow overflow-hidden">
      {/* Matrix header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#111111] text-[#F2F0E8]">
        <div className="flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-[#D7FF36]" />
          <span className="font-mono-tech text-[11px] font-bold uppercase tracking-wider">
            ACTIVE NODE MATRIX
          </span>
          <span className="px-1.5 py-0.5 bg-[#D7FF36] text-[#111111] font-mono-tech text-[9px] font-black">
            {filteredTech.length} LIVE
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Animated scan-line indicator */}
          <span className="hidden sm:flex items-center gap-1.5 font-mono-tech text-[10px] text-neutral-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            HOVER TO PAUSE · CLICK TO INSPECT
          </span>
          {/* Stack preset pills */}
          {[
            { label: 'WEB', query: 'React' },
            { label: 'WEB3', query: 'Solidity' },
            { label: 'CLOUD', query: 'Docker' },
          ].map(({ label, query }) => (
            <button
              key={label}
              type="button"
              onClick={() => { sound.playClick(); onSetSearchQuery(query); }}
              className="hidden md:block px-2 py-0.5 border border-neutral-600 text-neutral-400 hover:border-[#D7FF36] hover:text-[#D7FF36] font-mono-tech text-[9px] font-bold uppercase transition-colors cursor-pointer"
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Marquee rows */}
      {rows.length > 0 ? (
        <div className="divide-y divide-neutral-200">
          {rows.map((row) => (
            <MarqueeRow
              key={row.cat}
              items={row.items}
              direction={row.direction}
              label={row.cat}
              accent={row.accent}
              activeName={activeTech.name}
              onSelect={onSelectTech}
            />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="py-14 text-center font-mono-tech text-sm text-neutral-500 border border-dashed border-neutral-300 m-4">
          No tools matching &ldquo;{searchQuery}&rdquo;.
          <div className="mt-3">
            <button
              type="button"
              onClick={onResetFilter}
              className="px-3 py-1.5 bg-[#111111] text-[#D7FF36] font-mono-tech text-xs uppercase font-bold cursor-pointer"
            >
              Reset Filter
            </button>
          </div>
        </div>
      )}

      {/* Footer legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 bg-neutral-50 border-t-2 border-[#111111] text-[10px] font-mono-tech text-neutral-500">
        <div className="flex flex-wrap gap-3">
          {ORDER.filter(c => filteredTech.some(t => t.category === c)).map((cat) => (
            <span key={cat} className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-none" style={{ backgroundColor: CAT_ACCENT[cat] }} />
              {cat.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <ChevronRight className="w-3 h-3 text-[#FF5733]" />
          <span>Coloured dot = Expert tier</span>
        </div>
      </div>
    </div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────
export default function TechMap() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState<TechItem>(PORTFOLIO_DATA.techStack[0]);

  const filteredTech = filterTechStack(
    PORTFOLIO_DATA.techStack,
    selectedCategory,
    searchQuery
  );

  const handleSelectTech = (tech: TechItem) => {
    sound.playPop();
    setActiveTech(tech);
  };

  const handleSelectCategory = (catId: string) => {
    sound.playClick();
    setSelectedCategory(catId);
  };

  const codeSnippet =
    TECH_CODE_SNIPPETS[activeTech.name] ||
    `// Production component: ${activeTech.name} configured for resilient architecture\nexport const ${activeTech.name.replace(/[^a-zA-Z0-9]/g, '')}Module = Object.freeze({ status: "ACTIVE", tier: "${activeTech.level}" });`;

  return (
    <section
      id="stack"
      className="w-full border-b border-[#111111] bg-[#F2F0E8] py-16 md:py-24 relative paper-grain overflow-hidden"
    >
      <span id="tech" className="absolute -top-20" />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ── Section Header ─────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#111111] pb-6 mb-10">
          <div className="space-y-2">
            {/* Header Micro-Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech tracking-widest uppercase font-bold text-[#111111]">
              <span className="flex items-end gap-0.5 h-3">
                <span className="w-0.5 h-2 bg-[#D7FF36] animate-pulse" />
                <span className="w-0.5 h-3 bg-[#304FFE] animate-pulse [animation-delay:150ms]" />
                <span className="w-0.5 h-1.5 bg-[#FF5733] animate-pulse [animation-delay:300ms]" />
              </span>

              <span className="px-1.5 py-0.5 bg-[#D7FF36] text-[#111111] font-mono-tech text-[10px] font-bold tracking-wider leading-none">
                03
              </span>

              <span className="text-[#304FFE] font-bold">//</span>

              <span className="tracking-widest font-bold flex items-center gap-1.5">
                <span>INTERACTIVE TECHNOLOGY RADAR</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF36] animate-ping" />
              </span>

              <span className="text-neutral-500 font-normal hidden sm:inline">
                // PRODUCTION_WEAPONRY
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-archivo text-[#111111] tracking-tight uppercase">
              TOOLS OF MY TRADE.
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 font-mono-tech text-xs">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#111111] text-[#F2F0E8] border border-[#111111] brutalist-shadow-sm font-bold">
              <Zap className="w-3.5 h-3.5 text-[#D7FF36]" />
              <span>{PORTFOLIO_DATA.techStack.length} PRODUCTION TOOLS</span>
            </div>
            <span className="text-neutral-600 text-[11px]">
              6 DOMAIN CLUSTERS · REAL-TIME TELEMETRY INSPECTOR
            </span>
          </div>
        </div>

        {/* ── Category Filter Pills & Search Dock ────────────────── */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1 border-2 border-[#111111] bg-white brutalist-shadow-sm">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const IconComp = cat.icon;
              const count =
                cat.id === 'ALL'
                  ? PORTFOLIO_DATA.techStack.length
                  : PORTFOLIO_DATA.techStack.filter(
                      (item) => item.category.toUpperCase() === cat.id.toUpperCase()
                    ).length;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-tech font-bold uppercase transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#111111] text-[#D7FF36] brutalist-shadow-sm -translate-y-0.5'
                      : 'text-[#111111] hover:bg-[#F2F0E8]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span
                    className={`text-[9px] px-1 py-0.2 rounded-none font-bold ${
                      isSelected
                        ? 'bg-[#D7FF36] text-[#111111]'
                        : 'bg-neutral-200 text-neutral-700'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Bar */}
          <div className="relative w-full lg:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword (e.g. Solidity, Docker, Java)..."
              className="w-full pl-9 pr-8 py-2 border-2 border-[#111111] bg-white text-xs font-mono-tech placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#304FFE] brutalist-shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-mono-tech text-neutral-400 hover:text-black cursor-pointer font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* ── Active Technology Telemetry Cockpit (Modern, Sleek, Responsive) ── */}
        <div className="mb-8 border-2 border-[#111111] bg-white brutalist-shadow p-5 sm:p-6 md:p-8 relative overflow-hidden transition-all duration-300">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#111111]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Component Identity with Logo & Mastery Gauge */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-[#304FFE] text-white font-mono-tech text-[10px] font-bold uppercase tracking-wider">
                  {activeTech.category} DOMAIN
                </span>
                <span className="px-2 py-0.5 bg-[#D7FF36] text-[#111111] border border-[#111111] font-mono-tech text-[10px] font-bold uppercase">
                  {activeTech.level}
                </span>
                <span className="text-neutral-500 text-[10px] font-mono-tech flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  ACTIVE PROD WEAPON
                </span>
              </div>

              {/* Logo + Name Header */}
              <div className="flex items-center gap-3.5 pt-1">
                <div className="p-2 border-2 border-[#111111] bg-white brutalist-shadow-sm shrink-0">
                  <TechLogo name={activeTech.name} size="lg" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-archivo text-[#111111] uppercase tracking-tight font-black">
                    {activeTech.name}
                  </h3>
                  <div className="text-[11px] font-mono-tech text-[#304FFE] font-bold">
                    PRODUCTION STACK // {activeTech.category.toUpperCase()}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-mono-tech text-neutral-700 leading-relaxed pt-1">
                "{activeTech.context}"
              </p>

              {/* Power / Mastery Level Gauge */}
              <div className="pt-2 flex items-center gap-3">
                <span className="text-[10px] font-mono-tech uppercase font-bold text-neutral-500">
                  MASTERY GAUGE:
                </span>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const isFilled =
                      activeTech.level === 'Expert' ? lvl <= 5 : lvl <= 4;
                    return (
                      <div
                        key={lvl}
                        className={`w-6 h-2 border border-[#111111] transition-all ${
                          isFilled ? 'bg-[#D7FF36]' : 'bg-neutral-200'
                        }`}
                      />
                    );
                  })}
                </div>
                <span className="text-[10px] font-mono-tech font-bold text-[#111111]">
                  {activeTech.level === 'Expert' ? '5/5 EXPERT' : '4/5 ADVANCED'}
                </span>
              </div>
            </div>

            {/* Right: Live Interactive Terminal Runner / Snippet Window */}
            <div className="lg:col-span-7 border-2 border-[#111111] bg-[#0E0E10] text-[#F2F0E8] overflow-hidden font-mono-tech shadow-md">
              {/* Terminal Title Bar */}
              <div className="bg-[#18181B] px-3.5 py-1.5 border-b border-neutral-800 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5733]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF36]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#304FFE]" />
                  <span className="text-neutral-300 font-bold ml-1 flex items-center gap-1">
                    <Terminal className="w-3.5 h-3.5 text-[#D7FF36]" />
                    <span>runtime ~ {activeTech.name.toLowerCase()}.spec</span>
                  </span>
                </div>
                <span className="text-[10px] text-[#38BDF8] uppercase font-bold">
                  VERIFIED IN ARCHITECTURE
                </span>
              </div>

              {/* Terminal Code Execution Output */}
              <div className="p-3.5 sm:p-4 text-xs leading-relaxed space-y-2 bg-[#09090B]">
                <div className="flex items-start gap-2 text-neutral-300">
                  <span className="text-[#D7FF36] font-bold select-none">$</span>
                  <span className="text-[#D7FF36] font-semibold break-all">
                    verify-stack --target="{activeTech.name}" --category="{activeTech.category}"
                  </span>
                </div>
                <div className="pl-4 border-l-2 border-[#304FFE] text-[11px] text-neutral-200 font-mono-tech overflow-x-auto whitespace-pre-wrap py-1">
                  <code>{codeSnippet}</code>
                </div>
                <div className="flex items-center justify-between pt-1 text-[10px] text-neutral-500 border-t border-neutral-800/80">
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    STATUS: READY FOR ENTERPRISE DEPLOYMENT
                  </span>
                  <span>LATENCY: 0.14ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ACTIVE NODE MATRIX — Animated Marquee Rows ── */}
        <TechMarqueeMatrix
          filteredTech={filteredTech}
          activeTech={activeTech}
          searchQuery={searchQuery}
          onSelectTech={handleSelectTech}
          onResetFilter={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
          onSetSearchQuery={setSearchQuery}
        />

      </div>
    </section>
  );
}
