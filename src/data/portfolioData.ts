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
    {
      id: 'carepulse',
      number: '01',
      title: 'CAREPULSE',
      category: 'Healthcare Engineering',
      tagline: 'Doctor Appointment Management System',
      description: 'Comprehensive patient scheduling and healthcare management system streamlining appointments, doctor rosters, and administrative audits.',
      longDescription: 'CarePulse was engineered to tackle administrative overhead in healthcare clinics. The application features a streamlined patient registration funnel, appointment booking engine, integrated SMS and email notifications, and an intuitive administrative audit dashboard that tracks doctor availability in real time.',
      features: [
        'Streamlined multi-step patient onboarding with medical history capture',
        'Real-time doctor appointment booking and conflict resolution algorithm',
        'Secure administrative dashboard with passkey-protected scheduling audit',
        'Automated patient notification pipelines and status transitions'
      ],
      techStack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Appwrite', 'TypeScript'],
      image: '/src/assets/images/project_carepulse_1793450005869.jpg',
      githubUrl: 'https://github.com/sujanali9812/carepulse-healthcare',
      liveUrl: 'https://carepulse-health.demo.app',
      architectureHighlights: [
        'Server Actions with Appwrite backend-as-a-service storage',
        'Optimistic UI state updates for immediate booking confirmation',
        'Role-based access control protecting confidential patient health records'
      ],
      role: 'Lead Architect & Full Stack Developer',
      year: '2024'
    },
    {
      id: 'data-encryption',
      number: '02',
      title: 'PERSONAL DATA ENCRYPTION SERVICE',
      category: 'Cybersecurity & Cryptography',
      tagline: 'Secure Data Encryption & Decryption Platform',
      description: 'Zero-knowledge enterprise cryptographic engine delivering AES-256 cipher operations, key derivation, and tamper-evident storage.',
      longDescription: 'A hardened data privacy platform built to safeguard sensitive personal data and documents. Features zero-knowledge client-side and server-side symmetric encryption using AES-256 with PBKDF2 key derivation, complete with access audit trails and containerized microservices.',
      features: [
        'AES-256-GCM symmetric cryptographic pipeline with initialization vector integrity',
        'PBKDF2 with HMAC-SHA512 password-based key derivation function',
        'Decoupled Spring Boot cryptographic microservice with containerized MongoDB',
        'Interactive real-time cipher breakdown and payload visualizer'
      ],
      techStack: ['Java Spring Boot', 'React', 'MongoDB', 'Docker', 'REST APIs'],
      image: '/src/assets/images/project_encryption_1793450006733.jpg',
      githubUrl: 'https://github.com/sujanali9812/crypto-vault-service',
      liveUrl: 'https://crypto-vault.demo.app',
      architectureHighlights: [
        'Multi-stage Docker containerization isolating cryptographic execution',
        'Spring Security filter chains with non-persistent memory scrubbing',
        'Encrypted payload storage with cryptographic checksum validation'
      ],
      role: 'Security Engineer & Backend Architect',
      year: '2024'
    },
    {
      id: 'smart-lottery',
      number: '03',
      title: 'SMART CONTRACT LOTTERY',
      category: 'Web3 & Decentralized Protocols',
      tagline: 'Decentralized Ethereum Lottery Application',
      description: 'Provably fair decentralized raffle protocol operating autonomously on the Ethereum network with cryptographically verifiable randomness.',
      longDescription: 'An autonomous, trustless lottery protocol deployed on Ethereum. Eliminates centralized house advantages by deriving winner selections through deterministic verifiable on-chain oracle conditions. Users participate seamlessly via MetaMask with instant automated prize pool payouts.',
      features: [
        'Autonomous smart contract with reentrancy protection and zero-owner tampering',
        'MetaMask Web3 provider integration with gas estimation and transaction tracking',
        'Transparent verifiable prize pool aggregation and automated winner dispersal',
        'Comprehensive Ganache test suite covering edge conditions and gas profiling'
      ],
      techStack: ['Solidity', 'Ganache', 'MetaMask', 'Web3.js', 'React'],
      image: '/src/assets/images/project_smartlottery_1793450006952.jpg',
      githubUrl: 'https://github.com/sujanali9812/eth-smart-lottery',
      liveUrl: 'https://eth-lottery.demo.app',
      architectureHighlights: [
        'Gas-optimized Solidity contract with constant state variable packing',
        'SafeMath arithmetic invariants and checks-effects-interactions pattern',
        'Decentralized IPFS deployment for censorship-resistant access'
      ],
      role: 'Smart Contract Developer',
      year: '2023'
    },
    {
      id: 'anti-cheating',
      number: '04',
      title: 'ANTI-CHEATING EXAMINATION PLATFORM',
      category: 'Real-Time Systems & Proctoring',
      tagline: 'Automated Examination Monitoring System',
      description: 'Distributed online proctoring platform delivering real-time candidate telemetry, behavioral anomaly detection, and low-latency WebSocket alerting.',
      longDescription: 'Engineered for high-stakes collegiate and institutional assessments. The platform streams multi-candidate video telemetry, detects focus deviations, tab changes, and audio disturbances, instantly flagging suspicious anomalies to proctors over high-performance STOMP WebSockets.',
      features: [
        'Real-time WebSocket/STOMP bidirectional telemetry pipeline',
        'Client-side gaze orientation detection and peripheral motion alerts',
        'Proctor command center with multi-stream grid inspection and candidate freeze',
        'Immutable event logging with timestamped forensic audit records in PostgreSQL'
      ],
      techStack: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket/STOMP', 'Docker'],
      image: '/src/assets/images/project_anticheat_1793450006684.jpg',
      githubUrl: 'https://github.com/sujanali9812/exam-telemetry-platform',
      liveUrl: 'https://exam-sentinel.demo.app',
      architectureHighlights: [
        'STOMP over WebSocket broker handling hundreds of concurrent telemetry streams',
        'PostgreSQL schema optimized for high-write timestamped anomaly logs',
        'Modular proctor cockpit with low-latency candidate grid rendering'
      ],
      role: 'Full Stack Systems Engineer',
      year: '2024'
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
      badge: 'GOVERNMENT GRANT'
    },
    {
      id: 'tie-u',
      headlineNumber: 'TOP 25',
      title: 'TiE U 2025 East Zone Semi-finalist',
      organization: 'TiE University Global Pitch',
      year: '2025',
      description: 'Selected among top 25 high-potential collegiate startup ventures across the East Zone region for venture viability, technology, and execution model.',
      badge: 'INTERNATIONAL FORUM'
    },
    {
      id: 'cyber-hackathon',
      headlineNumber: '4TH POSITION',
      title: 'State Level Cyber Security Hackathon',
      organization: 'Cyber Crime Police & IT Dept',
      year: '2023',
      description: 'Secured 4th position competing against elite developers statewide, delivering live digital forensics and cryptographic defense mechanisms.',
      badge: 'DEFENSE & SECURITY'
    },
    {
      id: 'meity-tide',
      headlineNumber: '4TH RANK',
      title: 'MeitY TIDE 2.0 Northeast Techathon X-5',
      organization: 'Ministry of Electronics and Information Technology (MeitY)',
      year: '2024',
      description: 'Recognized for technological ingenuity in the Northeast regional edition of the prestigious MeitY Technology Incubation and Development of Entrepreneurs (TIDE 2.0) scheme.',
      badge: 'MINISTRY OF ELECTRONICS & IT'
    },
    {
      id: 'technovate',
      headlineNumber: '256 PARTICIPANTS',
      title: 'TechNOVATE 2K26 Convened & Organised',
      organization: 'ICFAI University Tripura',
      year: '2026',
      description: 'Successfully organized and directed flagship annual state technology hackathon and symposium, mobilizing 256 developers, researchers, and venture judges.',
      badge: 'LEADERSHIP & SCALE'
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
      role: 'Co-organiser',
      organization: 'Google Developer Group on Campus (GDG)',
      period: '2024 — Present',
      description: 'Co-organizing developer summits, hands-on workshops on Google technologies, cloud architectures, and Android ecosystem.',
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
      role: 'Campus Mantri',
      organization: 'GeeksforGeeks',
      period: '2023 — 2024',
      description: 'Official collegiate brand ambassador and liaison for GeeksforGeeks, facilitating programming webinars and access to core tech curricula.',
      impact: 'Empowered 300+ students with competitive programming resources and contest access.'
    }
  ] as LeadershipRole[]
};
