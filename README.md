<div align="center">

# SUJAN ALI

### Experimental Digital Portfolio

<a href="https://sujan.talkcare.in">
  <img src="https://readme-typing-svg.demolab.com?font=IBM+Plex+Mono&size=16&duration=2800&pause=900&color=304FFE&center=true&vCenter=true&width=720&lines=SOFTWARE+ENGINEER+%2F+CONSULTANT;FULL+STACK+SYSTEMS+%2B+STRATEGIC+ADVISORY;I+DESIGN.+I+DEVELOP.+I+BUILD+WHAT'S+NEXT." alt="Animated introduction" />
</a>

<p>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=111111" alt="React 19" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-7-3178C6?style=flat-square&logo=typescript&logoColor=ffffff" alt="TypeScript" /></a>
  <a href="https://vite.dev/"><img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=ffffff" alt="Vite" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=ffffff" alt="Tailwind CSS" /></a>
</p>

<p>
  <strong>A neo-brutalist, editorial portfolio for engineering, consulting, cybersecurity, blockchain, and startup leadership.</strong>
</p>

</div>

## What this project is

This is not a static résumé page. It is an interactive portfolio designed to make Sujan Ali's cross-disciplinary work easy to scan, explore, and remember.

The interface combines:

- **Editorial storytelling** — bold typography, paper-grain texture, high-contrast color blocks, and Swiss/neo-brutalist layouts.
- **Technical proof** — project case studies, architecture highlights, technology context, experience metrics, and achievements.
- **Motion as navigation** — running marquees, auto-cycling capability panels, command-line typing, hover transitions, and a precision cursor.
- **Fast exploration** — keyboard-friendly command search, project modals, resume modal, downloadable vCard, and direct contact links.

## Portfolio at a glance

```mermaid
mindmap
  root((SUJAN ALI))
    Strategy
      Business research
      Investment promotion
      Program management
      Stakeholder & MoU coordination
    Engineering
      React / Next.js
      TypeScript
      Java / Spring Boot
      Node.js / Express
      SQL & NoSQL data
    Trust & Scale
      Cybersecurity
      RSA & AES-256
      Blockchain & Solidity
      IPFS & Web3
      Docker & microservices
    Impact
      CarePulse
      Crypto Vault
      Smart Lottery
      Exam Sentinel
      Startup incubation
```

## How the experience flows

```mermaid
flowchart LR
  A[Hero<br/>identity + CTA] --> B[About<br/>animated capability system]
  B --> C[Experience<br/>impact metrics]
  C --> D[Tech Map<br/>filterable tools]
  D --> E[Projects<br/>case-study archive]
  E --> F[Achievements<br/>proof of work]
  F --> G[Leadership<br/>community impact]
  G --> H[Contact<br/>next collaboration]

  E -. "Open details" .-> I[Project modal]
  A -. "Open résumé" .-> J[Resume modal]
  A -. "⌘ / Ctrl + K" .-> K[Command menu]
```

## Motion & interaction infographic

The animation system is intentional: it turns dense résumé information into a guided visual scan. Hovering pauses continuous motion so the content remains readable.

| Surface | Motion | Why it exists |
| --- | --- | --- |
| Hero and section banners | Infinite marquee loops | Creates rhythm and separates editorial sections |
| About capability panel | 5-second auto-cycle with pause control | Shows seven professional pillars without a long wall of text |
| About developer console | Command typing + output reveal | Connects each capability to a concrete delivery signal |
| Tech map | Multi-speed technology rows | Makes the stack feel active while keeping filters usable |
| Cursor and cards | Pointer-following cursor, hover lifts, color transitions | Adds tactile feedback without changing the information architecture |
| Modals and navigation | Focused overlays and smooth scroll | Keeps project details and résumé access in the current flow |

```mermaid
sequenceDiagram
  participant V as Visitor
  participant UI as Portfolio UI
  participant D as Portfolio data

  V->>UI: Opens portfolio
  UI->>D: Loads profile, projects, experience, and tech stack
  UI-->>V: Renders animated editorial layout
  loop Every 5 seconds
    UI->>UI: Advance active capability
    UI-->>V: Type command and reveal result
  end
  V->>UI: Filters tech or selects project
  UI-->>V: Updates view or opens modal
  V->>UI: Sends contact form
  UI-->>V: Returns mailto handoff confirmation
```

## Featured work

| Project | Focus | Stack |
| --- | --- | --- |
| **CarePulse** | Healthcare appointments, notifications, and admin audits | Next.js, TypeScript, Node.js, Appwrite |
| **Personal Data Encryption Service** | AES-256-GCM, PBKDF2, and secure microservices | Spring Boot, React, MongoDB, Docker |
| **Smart Contract Lottery** | Trustless Ethereum raffle with transparent payouts | Solidity, Ganache, Web3.js, React |
| **Anti-Cheating Examination Platform** | Live proctor telemetry and anomaly alerts | React, Spring Boot, PostgreSQL, WebSocket/STOMP |

## Tech stack

```text
Frontend      React · Next.js · TypeScript · Tailwind CSS
Backend       Node.js · Express · Java · Spring Boot · REST APIs
Data          MySQL · PostgreSQL · MongoDB · Appwrite
Trust         RSA · AES-256 · Spring Security · RBAC
Web3          Solidity · Hardhat · Web3.js · Web3.py · IPFS · MetaMask
Delivery      Docker · Vite · Git · Power BI · Microsoft Excel
```

## Run locally

### Prerequisites

- Node.js 18 or newer
- npm (or Bun, using the included `bun.lock`)

### Start the development server

```bash
git clone https://github.com/Sujan3647/New-Portfolio-Sujan-Ali.git
cd New-Portfolio-Sujan-Ali
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite in development mode on port `3000` |
| `npm run build` | Create the production bundle in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript compiler without emitting files |

## Project structure

```text
.
├── public/                 # résumé PDF and public logos
├── src/
│   ├── assets/images/      # portrait and project artwork
│   ├── components/         # portfolio sections and interactive UI
│   ├── data/               # profile, experience, project, and tech content
│   ├── utils/              # portfolio helpers and tests
│   ├── App.tsx             # page composition and modal state
│   └── index.css           # design tokens and keyframe animations
├── index.html              # metadata and font loading
├── package.json            # scripts and dependencies
└── vite.config.ts          # Vite configuration
```

## Design language

| Token | Value | Role |
| --- | --- | --- |
| Ivory | `#F2F0E8` | Paper-like canvas |
| Ink | `#111111` | Type, borders, and structure |
| Electric blue | `#304FFE` | Interactive and technical accents |
| Acid lime | `#D7FF36` | Calls to action and active states |
| Signal orange | `#FF5733` | Emphasis and status moments |

## Connect

- **Portfolio:** [sujan.talkcare.in](https://sujan.talkcare.in)
- **GitHub:** [Sujan3647](https://github.com/Sujan3647)
- **LinkedIn:** [sujan3647](https://linkedin.com/in/sujan3647)
- **Email:** [sujanali9812@gmail.com](mailto:sujanali9812@gmail.com)

---

<div align="center">
  <sub>Built with React, TypeScript, Tailwind CSS, Vite, and a little controlled motion.</sub>
</div>
