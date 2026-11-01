export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  architectureHighlights: string[];
  role: string;
  year: string;
  page: 1 | 2;
  domain: string;
  status: string;
  badge: string;
  metrics: { label: string; value: string }[];
  branch?: string;
  commitHash?: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  tags: string[];
}

export interface AchievementItem {
  id: string;
  headlineNumber: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  badge: string;
  category?: 'grant' | 'leadership' | 'hackathon' | 'national';
}

export interface LeadershipRole {
  role: string;
  organization: string;
  period: string;
  description: string;
  impact: string;
}

export interface TechItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Programming' | 'Tools' | 'Blockchain';
  level: 'Expert' | 'Advanced' | 'Proficient';
  context: string;
  featured?: boolean;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Sujan Ali',
    headline: 'I DESIGN. I DEVELOP. I BUILD WHAT\'S NEXT.',
    supportingDescription:
      'Experienced in technology consulting, program management, investment promotion, software development, and blockchain, with skills in stakeholder coordination and project execution.',
    identityLabel: 'SOFTWARE ENGINEER / CONSULTING / GRAPHICS DESIGNER',
    email: 'sujanali9812@gmail.com',
    phone: '+91 8798634773',
    location: 'Tripura, India',
    timezone: 'Asia/Kolkata (IST · UTC+5:30)',
    availability: 'Available for Select Engineering & Advisory Roles',
    github: 'https://github.com/Sujan3647',
    linkedin: 'https://linkedin.com/in/sujan3647',
    portfolioUrl: 'https://sujan.talkcare.in',
    resumePdf: '/Sujan_Ali_CV.pdf',
    portrait: '/src/assets/images/sujan_ali_portrait_1793450004972.jpg',
  },

  about: {
    heroQuote: 'STRATEGIC CONSULTING & FULL STACK SYSTEMS.',
    subHeadline: 'CROSS-DISCIPLINARY ARCHITECTURE · HIGH STAKES ECONOMIC ADVISORY · PROGRAM OPS',
    narrative: [
      'Experienced in technology consulting, program management, software development, and blockchain, specializing in stakeholder coordination, business research, and end-to-end execution.',
      'Consultant Intern with FICCI alongside EY and Govt of Tripura for Destination Tripura Business Conclave — tracked analytics across 347 B2G/B2B meetings facilitating ₹95,286+ Cr in state investment commitments.',
      'Engineered decentralized blockchain record verification at NFSU and RSA encryption services at NIC. As BeetleX Program Manager Intern and IIC Student Convenor, I direct regional hackathons and incubation pipelines.'
    ],
    pillars: [
      {
        title: 'Consulting & Business Analysis',
        subtitle: 'Strategic Research & Economic Intelligence',
        desc: 'Conducting in-depth business research, market assessments, and data-driven insights. Built Power BI & Excel analytical models for tracking investment metrics across 347 B2G/B2B bilateral sessions driving ₹95,286+ Cr in commitments.',
        competencies: [
          'Business Research & Strategic Analysis',
          'Market Assessment & Data-Driven Insights',
          'Power BI & Microsoft Excel KPI Dashboards',
          'State-Scale Investment Data Reconciliation'
        ]
      },
      {
        title: 'Project & Program Management',
        subtitle: 'End-to-End Execution & Tech Hiring',
        desc: 'Orchestrating end-to-end program lifecycles, process improvements, and milestone tracking. As Program Manager Intern at BeetleX LLP, organized regional Hack-to-Hire programmes connecting top collegiate developers with hiring partners.',
        competencies: [
          'Hack-to-Hire Collegiate Hiring Programmes',
          'End-to-End Hackathon Architecture & Operations',
          'Project Execution & Agile Process Improvement',
          'Structured Documentation & Stakeholder Reporting'
        ]
      },
      {
        title: 'Stakeholder & MoU Management',
        subtitle: 'B2G / B2B Bilateral Relations',
        desc: 'Coordinating high-stakes bilateral engagements between state government departments (Govt of Tripura), global consultancies (EY, FICCI), and corporate delegates, overseeing MoU lifecycles and institutional consensus.',
        competencies: [
          '347 B2G and B2B Bilateral Meetings Coordinated',
          'Stakeholder Engagement & Multi-Agency Coordination',
          'MoU Lifecycle Management & Follow-ups',
          'Public-Private Enterprise Liaison'
        ]
      },
      {
        title: 'Full Stack Software Development',
        subtitle: 'Modern Web Frontends & Scalable Backends',
        desc: 'Building responsive user interfaces with React.js, Next.js, TypeScript, and Tailwind CSS, backed by resilient microservices and APIs engineered with Node.js, Express.js, Java, and Spring Boot.',
        competencies: [
          'Frontend: React.js, Next.js, TypeScript, Tailwind CSS',
          'Backend: Node.js, Express.js, Java, Spring Boot',
          'Databases: MySQL, PostgreSQL, MongoDB',
          'Architectures: RESTful APIs, Containerized Microservices'
        ]
      },
      {
        title: 'Cyber Security & Cryptography',
        subtitle: 'Data Privacy & Automated Defense',
        desc: 'Hardening enterprise applications through RSA asymmetric cryptography, Spring Security, and multilayer authentication (NIC Software Developer). Placed 4th in the State-Level Cyber Security Hackathon for automated examination defense systems.',
        competencies: [
          'RSA Data Encryption & Decryption Services',
          'Spring Security & Role-Based Access Control (RBAC)',
          'Anti-Cheating Proctoring & Real-Time Alert Telemetry',
          'Rank 4 State-Level Cyber Security Hackathon'
        ]
      },
      {
        title: 'Blockchain & Web3 Architectures',
        subtitle: 'Decentralized Protocols & Verifiable Proofs',
        desc: 'Architecting trustless applications using Solidity smart contracts, Hardhat test suites, Web3.js, Web3.py, and IPFS decentralized storage. Engineered decentralized student credential management at NFSU.',
        competencies: [
          'Solidity Smart Contracts & EVM Logic',
          'Decentralized Peer-to-Peer Storage with IPFS',
          'Web3.js, Web3.py & MetaMask Provider Integration',
          'Hardhat Testing, Security Guards & Gas Optimization'
        ]
      },
      {
        title: 'Startup Incubation & Leadership',
        subtitle: 'Venture Incubation & Developer Community',
        desc: 'Leading collegiate innovation as Student Convenor of the Institution\'s Innovation Council (IIC) and Startup & Incubation Centre. Recipient of ₹1,00,000 NGIN Startup Grant for Careme, TiE U Top 25 East Zone Semi-Finalist, and TechNOVATE Organizer.',
        competencies: [
          '₹1,00,000 NGIN Scheme Startup Grant Recipient (Careme)',
          'Student Convenor: IIC & Startup Incubation Centre',
          'TiE U 2025 Top 25 East Zone Semi-Finalist',
          'Event Organizer: TechNOVATE 2024, 2025 & 2K26'
        ]
      }
    ],
    education: {
      degree: 'Integrated MCA',
      institution: 'ICFAI University Tripura',
      status: '5th Year',
      cgpa: '8.86',
      secondarySchool: 'KGEMHSS',
      secondaryBoard: 'TBSE Board',
      secondaryScore: '67%',
      highlights: 'Core Competencies: Consulting & Business Analysis, Project Management, Full Stack Engineering (React, Spring Boot), Blockchain (Solidity, IPFS), Cyber Security, Cloud (AWS, Docker).'
    }
  },

  techStack: [
    // Frontend
    { name: 'React', category: 'Frontend', level: 'Expert', context: 'Production component systems, hooks, virtualized lists', featured: true },
    { name: 'Next.js', category: 'Frontend', level: 'Expert', context: 'App router, server components, edge streaming', featured: true },
    { name: 'TypeScript', category: 'Frontend', level: 'Expert', context: 'Strict typing, generic abstractions, robust API contracts', featured: true },
    { name: 'Tailwind CSS', category: 'Frontend', level: 'Expert', context: 'Design tokens, custom utility architectures, fluid typography', featured: true },
    { name: 'JavaScript', category: 'Frontend', level: 'Expert', context: 'Modern ESNext, asynchronous concurrency, DOM mastery' },
    { name: 'HTML5', category: 'Frontend', level: 'Expert', context: 'Semantic layout structures, WCAG accessibility, SEO' },
    { name: 'CSS3', category: 'Frontend', level: 'Expert', context: 'Complex layouts, CSS variables, transitions & keyframes' },

    // Backend
    { name: 'Node.js', category: 'Backend', level: 'Expert', context: 'High-throughput event loops, streams, worker threads', featured: true },
    { name: 'Express.js', category: 'Backend', level: 'Expert', context: 'RESTful architectures, rate limiting, secure middleware' },
    { name: 'Java', category: 'Backend', level: 'Expert', context: 'Enterprise multithreading, OOP, memory management', featured: true },
    { name: 'Spring Boot', category: 'Backend', level: 'Expert', context: 'Spring Security, JPA/Hibernate, Actuator, STOMP sockets', featured: true },
    { name: 'REST APIs', category: 'Backend', level: 'Expert', context: 'Idempotent endpoint design, OpenAPI specs, caching' },
    { name: 'JWT', category: 'Backend', level: 'Advanced', context: 'Stateless session authentication, token rotation, claims' },

    // Database
    { name: 'PostgreSQL', category: 'Database', level: 'Expert', context: 'ACID indexing, complex joins, JSONB queries, connection pools', featured: true },
    { name: 'MySQL', category: 'Database', level: 'Advanced', context: 'Relational modeling, query optimization, foreign keys' },
    { name: 'MongoDB', category: 'Database', level: 'Expert', context: 'Aggregation pipelines, document sharding, flexible schemas', featured: true },
    { name: 'Firebase', category: 'Database', level: 'Advanced', context: 'Realtime databases, Firestore collections, authentication rules' },
    { name: 'Prisma', category: 'Database', level: 'Advanced', context: 'Type-safe queries, migration pipelines, relation queries' },

    // Programming
    { name: 'Java', category: 'Programming', level: 'Expert', context: 'Core Java, Collections, Multithreading, Enterprise patterns' },
    { name: 'C', category: 'Programming', level: 'Advanced', context: 'Memory allocation, pointers, low-level algorithmic mastery' },
    { name: 'C++', category: 'Programming', level: 'Advanced', context: 'STL containers, algorithms, competitive programming' },
    { name: 'Python', category: 'Programming', level: 'Advanced', context: 'Automation scripting, data processing, backend microservices' },
    { name: 'Solidity', category: 'Programming', level: 'Advanced', context: 'EVM smart contract mechanics, gas optimization, reentrancy guards', featured: true },

    // Tools
    { name: 'Docker', category: 'Tools', level: 'Expert', context: 'Multi-stage container builds, docker-compose orchestration', featured: true },
    { name: 'Git', category: 'Tools', level: 'Expert', context: 'Interactive rebasing, bisect, branching workflows, hooks' },
    { name: 'GitHub', category: 'Tools', level: 'Expert', context: 'GitHub Actions CI/CD workflows, pull requests, issue tracking' },
    { name: 'Postman', category: 'Tools', level: 'Expert', context: 'API collection tests, mock servers, automated test runners' },
    { name: 'Vercel', category: 'Tools', level: 'Expert', context: 'Edge deployments, preview branch environments, DNS' },
    { name: 'Render', category: 'Tools', level: 'Advanced', context: 'Automated backend container hosting, managed databases' },
    { name: 'Figma', category: 'Tools', level: 'Advanced', context: 'Wireframing, interactive UI prototypes, design systems' },
    { name: 'Jira', category: 'Tools', level: 'Advanced', context: 'Agile sprint boards, backlog management, burndown charts' },

    // Blockchain
    { name: 'Ethereum', category: 'Blockchain', level: 'Advanced', context: 'EVM execution layer, consensus, RPC nodes', featured: true },
    { name: 'Smart Contracts', category: 'Blockchain', level: 'Advanced', context: 'ERC standards, access control, state verification' },
    { name: 'Ganache', category: 'Blockchain', level: 'Advanced', context: 'Local blockchain sandboxing, test accounts, gas profiling' },
    { name: 'MetaMask', category: 'Blockchain', level: 'Advanced', context: 'EIP-1193 provider injection, transaction signing, network switching' },
    { name: 'IPFS', category: 'Blockchain', level: 'Advanced', context: 'Decentralized peer-to-peer content-addressed file storage' },
    { name: 'Pinata', category: 'Blockchain', level: 'Advanced', context: 'IPFS pinning gateway integration and metadata preservation' },
  ] as TechItem[],

  projects: [
    // ---------------------------------------------------------
    // PAGE 01: MAIN PRODUCTION DEPLOYMENTS (FEATURED WEB APPS)
    // ---------------------------------------------------------
    {
      id: 'sic-portal',
      number: '01',
      page: 1,
      title: 'STARTUP & INCUBATION CENTRE (SIC)',
      category: 'Enterprise Web Platform',
      tagline: 'Official Innovation & Incubation Management Portal for ICFAI University Tripura',
      domain: 'sic.iutripura.in',
      description: 'Centralized institutional incubation platform streamlining student startup onboarding, mentor allocation, MSME scheme tracking, and cohort milestones.',
      longDescription: 'Engineered as the digital backbone for the Startup & Incubation Centre at The ICFAI University, Tripura. The platform manages founder applications, mentor allocations, startup acceleration milestones, MSME grant verifications, and state-wide innovation hackathons. Built for institutional reliability with sub-80ms edge caching and auditability.',
      features: [
        'Automated student startup venture onboarding and multi-stage evaluation pipeline',
        'Mentor-startup matchmaking dashboard with session scheduling & feedback logs',
        'MSME & state government seed grant compliance and milestone reporting tracker',
        'Live event broadcast arena for regional hackathons and founder incubation bootcamps'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Cloudflare'],
      image: '/src/assets/images/project_carepulse_1793450005869.jpg',
      githubUrl: 'https://github.com/Sujan3647',
      liveUrl: 'https://sic.iutripura.in',
      architectureHighlights: [
        'Modular React architecture with strict TypeScript data contracts',
        'Role-based access control protecting sensitive startup IP and grant data',
        'Edge-cached API endpoints behind Cloudflare with sub-80ms latency'
      ],
      role: 'Lead Web Architect & IIC Student Convenor',
      year: '2024 - 2025',
      status: 'LIVE PRODUCTION',
      badge: 'INSTITUTIONAL HUB',
      metrics: [
        { label: 'Platform Status', value: 'LIVE 200 OK' },
        { label: 'Ecosystem', value: 'IIC & MSME' },
        { label: 'Role', value: 'Lead Architect' }
      ],
      branch: 'main',
      commitHash: '7c8a41e'
    },
    {
      id: 'technovate',
      number: '02',
      page: 1,
      title: 'TECHNOVATE 2K25 / 2K26',
      category: 'Event & Competition Engine',
      tagline: 'State-Wide Flagship Technical Fest & Hackathon Orchestration System',
      domain: 'technovate.iutripura.in',
      description: 'High-throughput festival and competition engine powering hackathons, drone sky battles, live leaderboards, and automated credential passes.',
      longDescription: 'The official digital platform powering TechNOVATE — Northeast India’s premier collegiate technical symposium. Designed to handle intense traffic spikes during festival rollouts, the portal features frictionless participant registration, multi-track coding arena brackets (Bug Hunting, Code Clash), drone battle schedules, automated QR badge generation, and real-time live stage announcements.',
      features: [
        'High-concurrency registration engine handling 1,500+ simultaneous participants',
        'Dynamic multi-track competition scheduler with live stage synchronization',
        'Automated cryptographic QR entry badge generation and gate verification',
        'Interactive modern cyber visual identity with mobile-first motion design'
      ],
      techStack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Vercel'],
      image: '/src/assets/images/project_smartlottery_1793450006952.jpg',
      githubUrl: 'https://github.com/Sujan3647',
      liveUrl: 'https://technovate.iutripura.in/',
      architectureHighlights: [
        'Server-side rendered dynamic routes with Next.js edge caching',
        'Optimistic registration form state management with zero layout shift',
        'Automated SVG pass generation with embedded verification tokens'
      ],
      role: 'Chief Tech Lead & Festival Organizer',
      year: '2024 - 2026',
      status: 'LIVE PRODUCTION',
      badge: 'FLAGSHIP EVENT',
      metrics: [
        { label: 'Participants', value: '1,500+ Coders' },
        { label: 'Event Tracks', value: '12+ Arenas' },
        { label: 'SLA Uptime', value: '99.98%' }
      ],
      branch: 'production',
      commitHash: 'e3f1902'
    },
    {
      id: 'couponpe',
      number: '03',
      page: 1,
      title: 'COUPONPE',
      category: 'FinTech & E-Commerce Web App',
      tagline: 'High-Performance Deal Discovery, Voucher Trading & Cashback Engine',
      domain: 'couponpe.vercel.app',
      description: 'Consumer deals and cashback discovery platform featuring sub-50ms fuzzy search, voucher verification algorithms, and affiliate reward routing.',
      longDescription: 'CouponPe is a high-speed consumer deals aggregator designed to eliminate broken coupons and expired discount codes. Engineered with client-side indexing and instant fuzzy search, users can browse verified retail vouchers, store gift cards, and cashback opportunities with one-click clipboard copying and redemption tracking.',
      features: [
        'Sub-50ms instant client-side fuzzy coupon search across 500+ merchants',
        'Automated coupon validity and community verification scoring algorithm',
        'Seamless one-click code copy with tactile telemetry and toast feedback',
        'Optimized mobile PWA layout with zero third-party tracking bloat'
      ],
      techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Vercel Edge'],
      image: '/src/assets/images/project_carepulse_1793450005869.jpg',
      githubUrl: 'https://github.com/Sujan3647',
      liveUrl: 'https://couponpe.vercel.app/',
      architectureHighlights: [
        'Client-side trie search structure for zero-latency filter queries',
        'Vercel Edge Network deployment ensuring global CDN propagation',
        'Lightweight state persistence with local storage bookmarking'
      ],
      role: 'Full Stack Engineer & UI Designer',
      year: '2025',
      status: 'DEPLOYED ON VERCEL',
      badge: 'CONSUMER FINTECH',
      metrics: [
        { label: 'Search Latency', value: '<50ms' },
        { label: 'Merchant Deals', value: '500+ Vouchers' },
        { label: 'CDN Deployment', value: 'Vercel Edge' }
      ],
      branch: 'release-v1',
      commitHash: '8b22a91'
    },
    {
      id: 'destination-tripura',
      number: '04',
      page: 1,
      title: 'DESTINATION TRIPURA BUSINESS CONCLAVE',
      category: 'Govt & Economic Infrastructure',
      tagline: 'State Economic Summit Portal & Bilateral Investment Intelligence Showcase',
      domain: 'destination-tripura-business-concla.vercel.app',
      description: 'Digital portal for the landmark state business summit co-hosted by FICCI, EY & Govt of Tripura, facilitating ₹95,286+ Cr in investments.',
      longDescription: 'Developed to showcase economic opportunities, industrial sectors, and summit agendas for the landmark Destination Tripura Business Conclave. The portal served global and domestic industrial delegates, providing interactive sectoral profiles (IT/ITeS, Rubber, Agro, Tourism), summit schedules, and executive briefings that catalyzed ₹95,286.45 Cr in state investment commitments across 347 bilateral sessions.',
      features: [
        'Interactive sectoral opportunity explorer covering state economic corridors',
        'Dynamic summit schedule viewer with VIP and bilateral delegation tracks',
        'Embedded Power BI business analytics and investment intelligence dashboard',
        'Responsive government-grade visual identity adhering to strict branding specs'
      ],
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Power BI Embeds', 'Vercel'],
      image: '/src/assets/images/project_smartlottery_1793450006952.jpg',
      githubUrl: 'https://github.com/Sujan3647',
      liveUrl: 'https://destination-tripura-business-concla.vercel.app/',
      architectureHighlights: [
        'Static generation with high availability on edge nodes during peak media traffic',
        'Optimized imagery and accessibility compliance for international enterprise delegates',
        'Data reconciliation interface coordinating with FICCI and EY analysts'
      ],
      role: 'Consultant Intern & Frontend Developer',
      year: '2026',
      status: 'SUMMIT SHOWCASE',
      badge: '₹95,286+ CR SUMMIT',
      metrics: [
        { label: 'Investment', value: '₹95,286+ Cr' },
        { label: 'B2G Meetings', value: '347 Sessions' },
        { label: 'Stakeholders', value: 'FICCI · EY · Govt' }
      ],
      branch: 'main',
      commitHash: '4f901c2'
    },

    // ---------------------------------------------------------
    // PAGE 02: RESEARCH LABS, QUANTUM DEFENSE & OPEN SOURCE (VIEW MORE)
    // ---------------------------------------------------------
    {
      id: 'student-docs-mis',
      number: '05',
      page: 2,
      title: 'DECENTRALISED STUDENT DOCS & CREDITS MIS',
      category: 'Web3 & Decentralized Protocols',
      tagline: 'Blockchain-Verified Academic Credential & Credit Transfer Registry',
      domain: 'github.com/Sujan3647/Decentralised-Student-Docs-Credits-MIS',
      description: 'Tamper-proof collegiate document registry utilizing Ethereum smart contracts and IPFS to guarantee immutable academic credentials and credit transfers.',
      longDescription: 'Researched and prototyped at the National Forensic Sciences University (NFSU). This decentralized system resolves academic document fraud by anchoring hashed credentials onto an immutable blockchain ledger. Universities issue tamper-proof certificates, students own verifiable soulbound transcripts, and employers verify credentials in seconds without intermediary back-channels.',
      features: [
        'Immutable Ethereum smart contract registry with cryptographic issuer signatures',
        'IPFS content-addressed decentralized storage for high-resolution document storage',
        'Instant public verification widget requiring only document hash or student ID',
        'Automated credit transfer ledger conforming to collegiate credit framework policies'
      ],
      techStack: ['Solidity', 'Ethereum', 'IPFS', 'Web3.js', 'React', 'Hardhat'],
      image: '/src/assets/images/project_smartlottery_1793450006952.jpg',
      githubUrl: 'https://github.com/Sujan3647/Decentralised-Student-Docs-Credits-MIS',
      architectureHighlights: [
        'Gas-optimized ERC-721 soulbound token contract with reentrancy protection',
        'Pinata IPFS gateway cluster for persistent decentralized file distribution',
        'Web3.js provider abstraction supporting MetaMask and institutional signers'
      ],
      role: 'Blockchain Researcher & Smart Contract Engineer',
      year: '2024',
      status: 'OPEN SOURCE LAB',
      badge: 'NFSU RESEARCH',
      metrics: [
        { label: 'Ledger', value: 'Ethereum EVM' },
        { label: 'Storage', value: 'IPFS / Pinata' },
        { label: 'Protocol', value: 'Soulbound MIS' }
      ],
      branch: 'main',
      commitHash: '9a31bc0'
    },
    {
      id: 'data-encryption-model',
      number: '06',
      page: 2,
      title: 'PERSONAL DATA ENCRYPTION MODEL',
      category: 'Cybersecurity & Cryptography',
      tagline: 'Zero-Knowledge Asymmetric & Symmetric Cryptographic Pipeline',
      domain: 'github.com/Sujan3647/Data-Encryption-Model',
      description: 'Hardened cryptographic privacy engine combining 2048-bit RSA and AES-256-GCM with PBKDF2 key derivation for confidential data protection.',
      longDescription: 'Originating from cryptographic engineering work at National Informatics Centre (NIC), this data security framework provides end-to-end payload encryption for sensitive records. Employs hybrid cryptography — generating ephemeral AES-256-GCM symmetric keys for data payloads while wrapping keys with 2048-bit RSA asymmetric cryptography, backed by a containerized Java Spring Boot microservice.',
      features: [
        'Dual-layer hybrid cipher operations combining AES-256-GCM and RSA-2048',
        'PBKDF2 key derivation with HMAC-SHA512 and salted random initialization vectors',
        'Zero plaintext memory retention with automated byte-buffer wiping after execution',
        'Containerized Spring Boot microservice exposing hardened REST cryptographic endpoints'
      ],
      techStack: ['Java', 'Spring Boot', 'AES-256', 'RSA', 'Docker', 'MongoDB', 'React'],
      image: '/src/assets/images/project_encryption_1793450006733.jpg',
      githubUrl: 'https://github.com/Sujan3647/Data-Encryption-Model',
      architectureHighlights: [
        'Strict memory scrubbing preventing cold-boot and heap dump leakage',
        'Multi-stage Docker container build ensuring lean and isolated cryptographic execution',
        'Tamper-evident HMAC authentication tags verifying payload integrity'
      ],
      role: 'Security Engineer & Cryptography Developer',
      year: '2024',
      status: 'NIC ENGINE',
      badge: 'ENTERPRISE CRYPTO',
      metrics: [
        { label: 'Cipher', value: 'AES-256-GCM + RSA' },
        { label: 'Key Derivation', value: 'PBKDF2 HMAC-512' },
        { label: 'Architecture', value: 'Spring Boot Docker' }
      ],
      branch: 'main',
      commitHash: '2c6d48e'
    },
    {
      id: 'anti-cheating-platform',
      number: '07',
      page: 2,
      title: 'AUTOMATED ANTI-CHEATING EXAMINATION PLATFORM',
      category: 'Real-Time Systems & AI Proctoring',
      tagline: 'Real-Time Candidate Telemetry, Anomaly Detection & Proctor HUD',
      domain: 'github.com/Sujan3647/Automated-Anti-Cheating-Examination-Platform',
      description: 'State Cyber Security Hackathon Rank 4 award winner: Distributed online assessment platform delivering sub-80ms WebSocket STOMP proctor telemetry.',
      longDescription: 'Recognized with 4th rank in the State-Level Cyber Security Hackathon. Built for uncompromising integrity in remote collegiate examinations, the sentinel architecture captures client-side computer vision telemetry (gaze orientation, multi-face presence, background audio disturbances, and window tab focus loss) and streams real-time incident warnings to proctor consoles via low-latency STOMP over WebSockets.',
      features: [
        'Low-latency bidirectional WebSocket/STOMP streaming pipeline under 80ms',
        'Real-time behavioral telemetry: tab-blur detection, audio alerts & gaze anomalies',
        'Proctor Command Cockpit featuring multi-candidate matrix monitoring & instant session freeze',
        'Forensic immutable audit log persisting timestamped violation telemetry in PostgreSQL'
      ],
      techStack: ['React', 'Spring Boot', 'WebSocket / STOMP', 'PostgreSQL', 'Docker'],
      image: '/src/assets/images/project_anticheat_1793450006684.jpg',
      githubUrl: 'https://github.com/Sujan3647/Automated-Anti-Cheating-Examination-Platform',
      architectureHighlights: [
        'High-throughput message broker handling simultaneous candidate streams',
        'Indexed PostgreSQL telemetry schema optimized for burst writes during exams',
        'Client-side lightweight heuristic analysis minimizing candidate bandwidth draw'
      ],
      role: 'Lead Systems Architect',
      year: '2024',
      status: 'HACKATHON WINNER',
      badge: 'RANK 4 STATE HACKATHON',
      metrics: [
        { label: 'Hackathon Award', value: 'Rank 4 State Level' },
        { label: 'Telemetry Stream', value: 'STOMP / <80ms' },
        { label: 'Backend Stack', value: 'Spring Boot + PG' }
      ],
      branch: 'main',
      commitHash: '1e459a8'
    },
    {
      id: 'quantum-aws-iot',
      number: '08',
      page: 2,
      title: 'QUANTUM-RESISTANT KEY EXCHANGE FOR AWS IOT',
      category: 'Post-Quantum Cryptography & Cloud IoT',
      tagline: 'Lattice-Based Post-Quantum Key Encapsulation on AWS IoT via Blockchain Ledger',
      domain: 'github.com/Sujan3647/Blockchain-Based-Quantum-Resistant-Key-Exchange-for-AWS-IoT',
      description: 'Pioneering security framework shielding edge IoT fleets from quantum cryptanalysis (Shor\'s algorithm) through ML-KEM lattice cryptography and blockchain verification.',
      longDescription: 'Designed to neutralize "Harvest Now, Decrypt Later" espionage threats facing cloud-connected IoT devices. As quantum computing nears cryptographically relevant capabilities, traditional ECC and RSA key exchanges will crumble. This architecture integrates NIST-standardized lattice-based key encapsulation mechanisms (ML-KEM / Kyber) with AWS IoT Core message brokers, using an immutable blockchain ledger to authenticate device identities and record non-repudiable key agreement handshakes.',
      features: [
        'NIST FIPS 203 post-quantum standard lattice-based Key Encapsulation Mechanism (ML-KEM/Kyber)',
        'Seamless integration with AWS IoT Core MQTT message broker and AWS KMS',
        'Decentralized blockchain handshake audit registry preventing Man-in-the-Middle spoofing',
        'Lightweight C/Python edge cryptographic runner optimized for memory-constrained microcontrollers'
      ],
      techStack: ['Python', 'AWS IoT Core', 'Post-Quantum Crypto (ML-KEM/Kyber)', 'Solidity', 'Docker'],
      image: '/src/assets/images/project_encryption_1793450006733.jpg',
      githubUrl: 'https://github.com/Sujan3647/Blockchain-Based-Quantum-Resistant-Key-Exchange-for-AWS-IoT',
      architectureHighlights: [
        'Post-quantum KEM negotiation executed within strict IoT resource constraints (<4KB RAM overhead)',
        'Asynchronous handshake verification anchored to smart contract state on EVM testnet',
        'End-to-end encrypted MQTT pub/sub channels impervious to Shor\'s and Grover\'s algorithms'
      ],
      role: 'Research Engineer & Security Architect',
      year: '2025',
      status: 'ADVANCED R&D',
      badge: 'POST-QUANTUM IOT',
      metrics: [
        { label: 'Threat Mitigated', value: 'Shor\'s Algorithm' },
        { label: 'Algorithm', value: 'NIST ML-KEM (Kyber)' },
        { label: 'Cloud Broker', value: 'AWS IoT Core' }
      ],
      branch: 'main',
      commitHash: '6d12f45'
    },
    {
      id: 'bio-cyber-defense',
      number: '09',
      page: 2,
      title: 'BIO-INSPIRED SELF-EVOLVING CYBER DEFENSE',
      category: 'Autonomous Cyber Defense & Quantum AI',
      tagline: 'Artificial Immune Systems & Quantum Algorithms for Smart City IoT Protection',
      domain: 'github.com/Sujan3647/A-Bio-Inspired-Self-Evolving-Cyber-Defense-Framework-for-Smart-City-IoT-Infrastructure-Using-Quantum',
      description: 'Self-mutating decentralized defense framework mirroring biological immune responses to autonomously isolate and neutralize zero-day exploits in smart urban grids.',
      longDescription: 'Smart city infrastructures (traffic control, energy micro-grids, environmental sensor arrays) present sprawling, asymmetric attack surfaces. This pioneering framework draws inspiration from human biological immunology — utilizing Clonal Selection Theory, Negative Selection, and Dendritic Cell Danger Algorithms — enhanced by quantum-inspired optimization to autonomously generate targeted digital "antibodies" that isolate zero-day anomalies in real time without human intervention.',
      features: [
        'Artificial Immune System (AIS) danger-theory anomaly detection with self/non-self discrimination',
        'Self-evolving heuristic engine mutating defensive countermeasures in real-time response to threats',
        'Quantum-inspired probabilistic optimization for ultra-fast multi-dimensional attack pattern recognition',
        'Automated network micro-segmentation quarantining compromised edge nodes within milliseconds'
      ],
      techStack: ['Python', 'Qiskit Quantum Sim', 'Genetic & AIS Algorithms', 'Kafka', 'FastAPI', 'Docker'],
      image: '/src/assets/images/project_anticheat_1793450006684.jpg',
      githubUrl: 'https://github.com/Sujan3647/A-Bio-Inspired-Self-Evolving-Cyber-Defense-Framework-for-Smart-City-IoT-Infrastructure-Using-Quantum',
      architectureHighlights: [
        'Decentralized autonomous agents acting as synthetic leukocytes across IoT broker nodes',
        'Kafka event stream processing ingesting tens of thousands of sensor telemetry packets per second',
        'Quantum annealing simulation accelerating high-dimensional feature clustering'
      ],
      role: 'Principal AI & Cyber Defense Researcher',
      year: '2025',
      status: 'DEEP TECH RESEARCH',
      badge: 'BIO-IMMUNE + QUANTUM',
      metrics: [
        { label: 'Biological Model', value: 'Clonal Selection AIS' },
        { label: 'Optimization', value: 'Quantum-Inspired' },
        { label: 'Target Grid', value: 'Smart City IoT' }
      ],
      branch: 'main',
      commitHash: '3a88c71'
    }
  ] as Project[],

  experience: [
    {
      id: 'ficci',
      organization: 'FICCI (Federation of Indian Chambers of Commerce & Industry)',
      role: 'Consultant Intern',
      period: 'June 2026 — October 2026',
      location: 'Agartala, Tripura',
      highlights: [
        'Supported EY (Ernst & Young), FICCI and the Department of Industries & Commerce, Government of Tripura in business analysis, investment promotion, and stakeholder coordination for the Destination Tripura Business Conclave.',
        'Utilized Microsoft Excel and Power BI for investment data analysis, KPI tracking, and reporting.',
        'Facilitated and coordinated 347 strategic B2G (Business-to-Government) and B2B bilateral meetings.',
        'Contributed directly to securing historic investment commitments of approximately INR 95,286.45 crore for the State of Tripura.'
      ],
      metrics: [
        { label: 'Investment Commitments', value: '₹95,286.45 Cr' },
        { label: 'B2G / B2B Meetings', value: '347' },
        { label: 'Key Partners', value: 'EY & Govt of Tripura' }
      ],
      tags: ['Strategic Consulting', 'EY Partnership', 'Tripura Govt', 'Investment Promotion', 'Power BI']
    },
    {
      id: 'beetlex',
      organization: 'BeetleX LLP',
      role: 'Program Manager Intern',
      period: 'Nov 2025 — May 2026',
      location: 'Whitefield, Bengaluru',
      highlights: [
        'Collaborated with engineering colleges and universities across the region to organize flagship Hack-to-Hire programmes.',
        'Managed end-to-end hackathon execution, mentorship tracks, and evaluation criteria.',
        'Supported skill-based hiring pipelines by connecting high-performing student coders directly with hiring partners.'
      ],
      metrics: [
        { label: 'Role', value: 'Program Manager' },
        { label: 'Initiatives', value: 'Hack-to-Hire' },
        { label: 'Talent Ecosystem', value: 'Collegiate Hiring' }
      ],
      tags: ['Program Management', 'Hack-to-Hire', 'Hackathons', 'Tech Hiring', 'Operations']
    },
    {
      id: 'nfsu',
      organization: 'National Forensic Science University (NFSU)',
      role: 'Cyber Security Intern',
      period: 'June 2025 — July 2025',
      location: 'Agartala, Tripura',
      highlights: [
        'Built "Decentralized Student Document & Credit Management System" using role-based access control and blockchain-based document verification.',
        'Engineered tamper-resistant credential management leveraging Solidity smart contracts, Hardhat, IPFS decentralized storage, and Web3.js.',
        'Developed interactive frontend in React and Tailwind CSS backed by Express.js and MongoDB.'
      ],
      metrics: [
        { label: 'Domain', value: 'Cyber Security & Web3' },
        { label: 'Key Tech', value: 'Solidity, Hardhat, IPFS' },
        { label: 'Storage', value: 'Decentralized IPFS' }
      ],
      tags: ['Cyber Security', 'Solidity', 'Hardhat', 'IPFS', 'Web3.js', 'React', 'MongoDB']
    },
    {
      id: 'nic',
      organization: 'National Informatics Centre (NIC)',
      role: 'Software Developer Intern',
      period: 'May 2024 — Aug 2024',
      location: 'Agartala, Tripura',
      highlights: [
        'Developed "Data Encryption Decryption Service" implementing RSA asymmetric cryptography and multilayer authentication.',
        'Engineered secure storage pipelines and sensitive payload protection using Java, Spring Boot, Spring Security, and MongoDB.',
        'Built responsive security configuration console in React and Tailwind CSS.'
      ],
      metrics: [
        { label: 'Core Cryptography', value: 'RSA Encryption' },
        { label: 'Backend Stack', value: 'Spring Boot + Java' },
        { label: 'Database', value: 'MongoDB' }
      ],
      tags: ['Java', 'Spring Boot', 'Spring Security', 'RSA Encryption', 'MongoDB', 'React']
    },
    {
      id: 'assam-university',
      organization: 'Assam University, Silchar',
      role: 'Summer Research Intern',
      period: 'May 2026 — June 2026',
      location: 'Silchar, Assam',
      highlights: [
        'Built a blockchain-based, quantum-resistant IoT security platform combining CRYSTALS-Kyber512 post-quantum cryptography, Solidity smart contracts, AWS IoT Core, and a Next.js 15 dashboard.',
        'Engineered secure device registration, key exchange, rotation, and revocation workflows with immutable audit logging on-chain via ethers.js v6 and Hardhat-deployed contracts.',
        'Integrated AWS Lambda, DynamoDB, and AWS KMS for serverless key management and encrypted payload storage, achieving end-to-end quantum-resistant IoT data security.',
      ],
      metrics: [
        { label: 'Cryptography Standard', value: 'CRYSTALS-Kyber512' },
        { label: 'Cloud Integration', value: 'AWS IoT Core' },
        { label: 'Smart Contract Stack', value: 'Solidity + Hardhat' },
      ],
      tags: ['Next.js 15', 'Tailwind CSS', 'Python', 'Web3.py', 'AWS IoT Core', 'AWS Lambda', 'DynamoDB', 'AWS KMS', 'Solidity', 'Hardhat', 'ethers.js v6', 'CRYSTALS-Kyber512'],
    }
  ] as ExperienceItem[],

  achievements: [
    {
      id: 'ngin-grant',
      headlineNumber: '₹1,00,000',
      title: 'Startup Grant Recipient — Careme',
      organization: 'NGIN Scheme, Startup Tripura',
      year: '2024',
      description: 'Awarded state innovation seed grant funding for Careme healthcare venture under the prestigious Next Generation Incubation Network (NGIN) initiative.',
      badge: 'GOVERNMENT GRANT',
      category: 'grant'
    },
    {
      id: 'gfg-mantri',
      headlineNumber: '1ST EVER',
      title: 'First Campus Mantri of GeeksforGeeks',
      organization: 'GeeksforGeeks Collegiate Chapter',
      year: '2023 — 2024',
      description: 'Honored as the first-ever collegiate Campus Mantri for GeeksforGeeks at ICFAI University, establishing regional coding chapters and DSA bootcamps for 300+ engineers.',
      badge: 'GEEKSFORGEEKS HONORS',
      category: 'leadership'
    },
    {
      id: 'gdgoc-vp',
      headlineNumber: 'VICE PRESIDENT',
      title: 'GDGoC Vice President',
      organization: 'Google Developer Groups on Campus',
      year: '2026',
      description: 'Elected Vice President of GDGoC, orchestrating Google Cloud study jams, Android development summits, and Google Solution Challenge tracks across Tripura.',
      badge: 'GOOGLE ECOSYSTEM',
      category: 'leadership'
    },
    {
      id: 'tie-u',
      headlineNumber: 'TOP 25',
      title: 'TiE U 2025 East Zone Semi-finalist',
      organization: 'TiE University Global Pitch',
      year: '2025',
      description: 'Selected among top 25 high-potential collegiate startup ventures across the East Zone region for venture viability, technology, and execution model.',
      badge: 'INTERNATIONAL FORUM',
      category: 'national'
    },
    {
      id: 'cyber-hackathon',
      headlineNumber: '4TH POSITION',
      title: 'State Level Cyber Security Hackathon',
      organization: 'Cyber Crime Police & IT Dept',
      year: '2023',
      description: 'Secured 4th position competing against elite developers statewide, delivering live digital forensics and cryptographic defense mechanisms.',
      badge: 'DEFENSE & SECURITY',
      category: 'hackathon'
    },
    {
      id: 'meity-tide',
      headlineNumber: '4TH RANK',
      title: 'MeitY TIDE 2.0 Northeast Techathon X-5',
      organization: 'Ministry of Electronics and Information Technology (MeitY)',
      year: '2024',
      description: 'Recognized for technological ingenuity in the Northeast regional edition of the prestigious MeitY Technology Incubation and Development of Entrepreneurs (TIDE 2.0) scheme.',
      badge: 'MINISTRY OF ELECTRONICS & IT',
      category: 'national'
    },
    {
      id: 'technovate',
      headlineNumber: '256 PARTICIPANTS',
      title: 'TechNOVATE 2K26 Convened & Organised',
      organization: 'ICFAI University Tripura',
      year: '2026',
      description: 'Successfully organized and directed flagship annual state technology hackathon and symposium, mobilizing 256 developers, researchers, and venture judges.',
      badge: 'LEADERSHIP & SCALE',
      category: 'leadership'
    }
  ] as AchievementItem[],

  leadership: [
    {
      role: 'Student Convenor',
      organization: 'Institution\'s Innovation Council (IIC) & Startup Incubation Centre',
      period: '2023 — Present',
      description: 'Directing collegiate incubation programs, IIC initiatives, pitch deck clinics, and mentorship pipelines for emerging student entrepreneurs.',
      impact: 'Mentored 10+ student startup teams with recipients securing state government seed grants.'
    },
    {
      role: 'Vice President',
      organization: 'Google Developer Group on Campus (GDGoC)',
      period: '2026',
      description: 'Vice President directing developer summits, hands-on workshops on Google Cloud, AI architectures, Android ecosystem, and Google Solution Challenge.',
      impact: 'Built developer networks across institutions in Tripura, connecting student engineers with industry experts.'
    },
    {
      role: 'President',
      organization: 'Algoric CSE Coding Club',
      period: '2023 — 2025',
      description: 'Headed the premier competitive programming club, designing algorithmic challenges, peer code reviews, and DSA workshops.',
      impact: 'Conducted weekly algorithm bootcamps for 120+ active student coders.'
    },
    {
      role: 'Event Organizer',
      organization: 'TechNOVATE 2024, 2025 & 2K26',
      period: '2024 — 2026',
      description: 'Flagship annual state technology hackathon and symposium, directing multi-track hackathons, CTFs, and tech conventions.',
      impact: 'Successfully mobilized 250+ participants across academia and industry.'
    },
    {
      role: 'First Campus Mantri',
      organization: 'GeeksforGeeks (GFG)',
      period: '2023 — 2024',
      description: 'First official collegiate brand ambassador and liaison for GeeksforGeeks on campus, facilitating programming webinars and access to core tech curricula.',
      impact: 'Empowered 300+ students with competitive programming resources and contest access.'
    }
  ] as LeadershipRole[]
};
