import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function TechLogo({ name, className = '', size = 'md' }: TechLogoProps) {
  const sizeMap = {
    sm: 'w-5 h-5',
    md: 'w-7 h-7',
    lg: 'w-9 h-9',
  };
  const sizeClass = sizeMap[size];

  switch (name.toLowerCase()) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className={`${sizeClass} ${className}`}>
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      );

    case 'next.js':
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" className={`${sizeClass} ${className}`}>
          <circle cx="90" cy="90" r="85" fill="#000000" stroke="#333" strokeWidth="6" />
          <path
            d="M149.508 157.438L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
            fill="url(#paint0_linear_next)"
          />
          <rect x="115" y="54" width="12" height="72" fill="#FFFFFF" />
          <defs>
            <linearGradient id="paint0_linear_next" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      );

    case 'typescript':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#3178C6" />
          <path d="M70.9 97.4c1.8 1.1 4 2 6.5 2.7 2.5.7 5.1 1.1 7.8 1.1 3.2 0 5.8-.5 7.8-1.5 2-.9 3.6-2.2 4.7-3.8 1.1-1.6 1.7-3.4 1.7-5.5 0-2.1-.5-3.9-1.5-5.4-1-1.5-2.5-2.9-4.3-4.1-1.9-1.2-4.1-2.4-6.8-3.6-3.8-1.7-6.9-3.4-9.3-5.1-2.4-1.7-4.1-3.6-5.3-5.8-1.1-2.2-1.7-4.8-1.7-7.9 0-3.7 1-6.9 2.9-9.6 1.9-2.7 4.7-4.8 8.1-6.3 3.5-1.5 7.6-2.3 12.3-2.3 3.5 0 6.9.5 10 1.5s5.8 2.3 8.3 4.1l-6.2 11.2c-2.3-1.5-4.7-2.6-7.2-3.4-2.5-.8-5.1-1.2-7.8-1.2-2.7 0-4.9.4-6.6 1.3-1.7.9-3 2.1-3.9 3.5-.9 1.4-1.4 3.1-1.4 5 0 1.9.5 3.5 1.4 4.8.9 1.3 2.3 2.5 4.1 3.6 1.8 1.1 4 2.2 6.6 3.4 4 1.8 7.2 3.6 9.8 5.4s4.4 3.9 5.7 6.3 1.9 5.3 1.9 8.7c0 4-1.1 7.6-3.2 10.6-2.1 3-5.1 5.4-9 6.9-3.9 1.6-8.5 2.4-13.8 2.4-4.5 0-8.8-.7-12.8-2-4-1.4-7.4-3.3-10.3-5.8l6.8-10.9zm-54-36.9h16.2v49.8h14.7V60.5H64V48.1H16.9v12.4z" fill="#FFFFFF" />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#F7DF1E" />
          <path d="M72.2 99.7c2.4 3.8 5.7 6.8 10.3 8.6 4.7 1.9 9.9 2.5 15.3 1.8 5.1-.7 9.4-2.7 12.8-6.1 3.4-3.4 5.1-7.8 5.1-13.2V32h12.3v58.8c0 9-3.2 16.3-9.5 21.8-6.4 5.5-14.5 8.2-24.3 8.2-9.1 0-16.7-2.6-22.9-7.8-6.2-5.2-9.6-12.2-10.2-20.9l11.1-2.4zm-47.5-1.5c1.8 3.3 4.3 5.8 7.5 7.6 3.2 1.8 6.9 2.7 11.2 2.7 4.2 0 7.8-.8 10.7-2.4 2.9-1.6 5.1-3.8 6.6-6.6 1.5-2.8 2.3-6.1 2.3-9.9 0-3.9-.9-7.1-2.6-9.8-1.8-2.6-4.5-5.1-8.2-7.3-3.7-2.2-8.5-4.6-14.3-7.2-6.5-2.9-11.7-6.1-15.5-9.6-3.8-3.5-5.7-8.1-5.7-13.7 0-4.6 1.3-8.8 3.9-12.5s6.2-6.6 10.8-8.7c4.6-2.1 10-3.1 16.2-3.1 7.2 0 13.4 1.5 18.6 4.5 5.2 3 8.9 7.3 11.1 12.9l-10.4 6.1c-1.6-3.8-4-6.6-7.3-8.4-3.3-1.8-7.3-2.7-12-2.7-4.1 0-7.5.8-10.3 2.3-2.8 1.5-4.8 3.6-6.1 6.1-1.3 2.6-1.9 5.5-1.9 8.8 0 3.3.8 6.1 2.5 8.4 1.7 2.3 4.2 4.4 7.6 6.4 3.4 2 7.9 4.2 13.5 6.7 6.8 3 12.2 6.4 16.2 10.2s6 8.7 6 14.8c0 5-1.4 9.6-4.1 13.6-2.8 4-6.7 7.2-11.8 9.4-5.1 2.2-11.2 3.4-18.3 3.4-9.3 0-17-2.2-23.1-6.7-6.1-4.5-9.8-10.6-11.2-18.4l11.6-2.1z" fill="#000000" />
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#0B1120" />
          <path d="M64 40.5c-15.3 0-24.8 7.7-28.7 23 5.7-7.7 12.4-10.5 20.1-8.6 4.4 1.1 7.5 4.3 11 7.8 5.7 5.8 12.2 12.4 26.3 12.4 15.3 0 24.8-7.7 28.7-23-5.7 7.7-12.4 10.5-20.1 8.6-4.4-1.1-7.5-4.3-11-7.8-5.7-5.8-12.2-12.4-26.3-12.4zm-28.7 27c-15.3 0-24.8 7.7-28.7 23 5.7-7.7 12.4-10.5 20.1-8.6 4.4 1.1 7.5 4.3 11 7.8 5.7 5.8 12.2 12.4 26.3 12.4 15.3 0 24.8-7.7 28.7-23-5.7 7.7-12.4 10.5-20.1 8.6-4.4-1.1-7.5-4.3-11-7.8-5.7-5.8-12.2-12.4-26.3-12.4z" fill="#38BDF8" />
        </svg>
      );

    case 'html5':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <path fill="#E34F26" d="M19.3 116.8L9.9 11.2h108.2l-9.4 105.6L63.9 128z" />
          <path fill="#EF652A" d="M64 118.9l36.9-10.2 8-89.8H64z" />
          <path fill="#ECECEC" d="M64 54.4H47.1l-1.2-13.1H64V28.9H32.2l3.4 38H64zM64 88.5l-.2.1-15.5-4.2-1-11.2H34.8l2 22.3 27 7.5.2-.1z" />
          <path fill="#FFFFFF" d="M63.9 54.4h17l-1.6 17.8-15.4 4.2V89l27.1-7.5 3.8-42.3H63.9zm0-25.5h32.2l-1.1 12.5H63.9z" />
        </svg>
      );

    case 'css3':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <path fill="#1572B6" d="M19.3 116.8L9.9 11.2h108.2l-9.4 105.6L63.9 128z" />
          <path fill="#33A9DC" d="M64 118.9l36.9-10.2 8-89.8H64z" />
          <path fill="#ECECEC" d="M64 54.4H47.1l-1.2-13.1H64V28.9H32.2l3.4 38H64zM64 88.5l-.2.1-15.5-4.2-1-11.2H34.8l2 22.3 27 7.5.2-.1z" />
          <path fill="#FFFFFF" d="M63.9 54.4h17l-1.6 17.8-15.4 4.2V89l27.1-7.5 3.8-42.3H63.9zm0-25.5h32.2l-1.1 12.5H63.9z" />
        </svg>
      );

    case 'node.js':
    case 'nodejs':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <path d="M64 14l45 26v52l-45 26-45-26V40l45-26z" fill="#339933" />
          <path d="M64 22l38 22v44l-38 22-38-22V44l38-22z" fill="#026E00" />
          <path d="M64 45c-10 0-18 6-18 14 0 7 6 11 14 13l4 1c5 1 7 3 7 5 0 3-3 5-7 5-5 0-8-2-9-6h-7c1 8 7 12 16 12s16-5 16-13c0-7-5-11-13-13l-4-1c-5-1-8-3-8-5 0-3 3-5 7-5 4 0 7 2 8 5h7c-1-7-6-12-14-12z" fill="#FFFFFF" />
        </svg>
      );

    case 'express.js':
    case 'express':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#111111" />
          <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="36" fontFamily="Space Grotesk, monospace" fontWeight="900" letterSpacing="1">
            EX
          </text>
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#1A202C" />
          <path d="M46 84c0 0-7 4 5 6 15 2 24 2 41-2 0 0-5 3-14 5-18 3-40 2-46-3-5-3 5-5 14-6zm-4-15c0 0-8 5 4 7 14 2 29 2 48-3 0 0-6 4-17 5-21 3-47 3-53-3-5-5 8-5 18-6zm24-32c5 6 7 11-3 23-8 10-5 15 0 21-12-8-14-17-7-25 9-11 5-15 10-19zm14 11c3 4 5 8-2 16-6 7-3 11 1 15-9-6-10-12-5-18 6-7 3-10 6-13z" fill="#E76F00" />
          <path d="M48 98c19 2 39-1 47-7 0 0-4 3-14 5-17 3-38 2-44-3-4-3 3-4 11-5z" fill="#5382A1" />
        </svg>
      );

    case 'spring boot':
    case 'spring':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <circle cx="64" cy="64" r="56" fill="#6DB33F" />
          <path d="M64 26C43 26 26 43 26 64c0 14 8 27 20 33l22-44 14 14-8 16 18-12c4-2 7-6 7-11 0-19-16-34-35-34zm-8 48l-8 16c6 2 12 2 18 0l-10-16z" fill="#FFFFFF" />
        </svg>
      );

    case 'postgresql':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#336791" />
          <path d="M64 24c-18 0-32 14-32 32 0 12 6 22 15 27l2 19h10l-1-14h12l-1 14h10l2-19c9-5 15-15 15-27 0-18-14-32-32-32zm-12 36c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zm24 0c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5z" fill="#FFFFFF" />
        </svg>
      );

    case 'mysql':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#00758F" />
          <path d="M38 78c6-20 22-38 42-44-12 8-18 22-18 36 0 10 4 18 10 24-12 0-24-6-34-16z" fill="#F29111" />
          <circle cx="86" cy="46" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#13AA52" />
          <path d="M64 20c-1 0-2 1-3 2C52 35 38 56 38 73c0 18 11 31 26 35v-88zm0 0c1 0 2 1 3 2 9 13 23 34 23 51 0 18-11 31-26 35v-88z" fill="#FFFFFF" />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <path d="M28 88L44 26l18 34-34 28z" fill="#FFA000" />
          <path d="M28 88l54-46 18 46-72 0z" fill="#F57C00" />
          <path d="M64 108l36-20-18-46-18 66z" fill="#FFCA28" />
          <path d="M28 88l36 20 36-20-72 0z" fill="#FF8F00" />
        </svg>
      );

    case 'prisma':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#2D3748" />
          <path d="M34 94l26-68 34 46-60 22z" fill="#5A67D8" />
          <path d="M60 26l34 46-34 22V26z" fill="#CBD5E0" />
        </svg>
      );

    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <path d="M63 16c-17 0-25 7-25 18v12h32v4H32C20 50 14 58 14 70c0 14 9 20 23 20h6v-9c0-11 8-17 19-17h28c8 0 14-6 14-14V34c0-12-8-18-25-18h-12zm-8 8c3 0 5 2 5 5s-2 5-5 5-5-2-5-5 2-5 5-5z" fill="#3776AB" />
          <path d="M65 112c17 0 25-7 25-18V82H58v-4h38c12 0 18-8 18-20 0-14-9-20-23-20h-6v9c0 11-8 17-19 17H38c-8 0-14 6-14 14v16c0 12 8 18 25 18h16zm8-8c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5z" fill="#FFD438" />
        </svg>
      );

    case 'solidity':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#1E293B" />
          <path d="M64 20L44 54h40L64 20z" fill="#94A3B8" />
          <path d="M44 54l20 34 20-34H44z" fill="#64748B" />
          <path d="M64 88l-20-34H24l30 52 10-18z" fill="#475569" />
          <path d="M64 88l20-34h20l-30 52-10-18z" fill="#CBD5E1" />
        </svg>
      );

    case 'docker':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#0db7ed" />
          <path d="M34 50h12v12H34zm16 0h12v12H50zm16 0h12v12H66zm16 0h12v12H82zm-32 16h12v12H50zm16 0h12v12H66zm16 0h12v12H82zm16 0h12v12H98zm-64 16c2 18 16 28 36 28 22 0 40-12 46-28H34z" fill="#FFFFFF" />
        </svg>
      );

    case 'git':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#F05032" />
          <path d="M84 46a7 7 0 10-10-6l-14 14a7 7 0 00-6 2l-10-10a7 7 0 10-6 6l10 10a7 7 0 002 6l-6 10a7 7 0 106 6l8-12a7 7 0 0012-6l14-14a7 7 0 000-6z" fill="#FFFFFF" />
        </svg>
      );

    case 'github':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#181717" />
          <path fill="#FFFFFF" d="M64 24c-22 0-40 18-40 40 0 18 11 33 27 38 2 0 3-1 3-2v-7c-11 2-14-5-14-5-2-4-4-6-4-6-4-2 0-2 0-2 4 0 6 4 6 4 3 6 9 4 11 3 0-3 1-5 2-6-9-1-18-5-18-20 0-4 2-8 4-11-1-1-2-5 0-11 0 0 3-1 11 4 3-1 7-2 11-2s8 1 11 2c8-5 11-4 11-4 2 6 1 10 0 11 3 3 4 7 4 11 0 15-9 19-18 20 1 1 3 4 3 8v12c0 1 1 2 3 2 16-5 27-20 27-38 0-22-18-40-40-40z" />
        </svg>
      );

    case 'postman':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#FF6C37" />
          <circle cx="64" cy="50" r="16" fill="#FFFFFF" />
          <path d="M44 76c0-11 9-20 20-20s20 9 20 20v22H44V76z" fill="#FFFFFF" />
        </svg>
      );

    case 'vercel':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#000000" />
          <polygon points="64,28 104,98 24,98" fill="#FFFFFF" />
        </svg>
      );

    case 'figma':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#1E1E1E" />
          <circle cx="84" cy="64" r="14" fill="#1ABCFE" />
          <path d="M42 22h28v28H42a14 14 0 010-28z" fill="#F24E1E" />
          <path d="M70 22h14a14 14 0 010 28H70V22z" fill="#FF7262" />
          <path d="M42 50h28v28H42a14 14 0 010-28z" fill="#A259FF" />
          <path d="M42 78h28v14a14 14 0 01-28 0v-14z" fill="#0ACF83" />
        </svg>
      );

    case 'jira':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#0052CC" />
          <path d="M64 26l24 24-24 24-24-24 24-24zm0 28l12 12-12 12-12-12 12-12zm0 26l24 24-24 24-24-24 24-24z" fill="#FFFFFF" />
        </svg>
      );

    case 'ethereum':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#3C3C3D" />
          <polygon points="64,20 64,58 38,70" fill="#8A92B2" />
          <polygon points="64,20 90,70 64,58" fill="#62688F" />
          <polygon points="64,80 64,108 38,72" fill="#8A92B2" />
          <polygon points="64,80 90,72 64,108" fill="#62688F" />
        </svg>
      );

    case 'ipfs':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#041E2B" />
          <polygon points="64,20 98,40 98,80 64,100 30,80 30,40" stroke="#69C4CD" strokeWidth="4" fill="#083C5A" />
          <circle cx="64" cy="60" r="10" fill="#69C4CD" />
        </svg>
      );

    case 'metamask':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#E2761B" />
          <polygon points="64,30 84,60 64,80 44,60" fill="#FFFFFF" />
          <polygon points="34,44 44,60 28,68" fill="#D7C1B3" />
          <polygon points="94,44 100,68 84,60" fill="#D7C1B3" />
        </svg>
      );

    case 'c':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#00599C" />
          <text x="64" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="48" fontFamily="Archivo Black, sans-serif" fontWeight="900">
            C
          </text>
        </svg>
      );

    case 'c++':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#004482" />
          <text x="50" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontFamily="Archivo Black, sans-serif" fontWeight="900">
            C++
          </text>
        </svg>
      );

    case 'jwt':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#000000" />
          <circle cx="64" cy="64" r="38" stroke="#D63AFF" strokeWidth="4" fill="none" />
          <text x="64" y="72" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontFamily="Space Grotesk, monospace" fontWeight="900">
            JWT
          </text>
        </svg>
      );

    case 'rest apis':
    case 'rest':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#059669" />
          <text x="64" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontFamily="Archivo Black, sans-serif" fontWeight="900">
            REST
          </text>
        </svg>
      );

    case 'smart contracts':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#4338CA" />
          <rect x="36" y="28" width="56" height="72" rx="4" fill="#FFFFFF" />
          <line x1="46" y1="44" x2="82" y2="44" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" />
          <line x1="46" y1="56" x2="74" y2="56" stroke="#4338CA" strokeWidth="4" strokeLinecap="round" />
          <circle cx="64" cy="80" r="8" fill="#F59E0B" />
        </svg>
      );

    case 'render':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#000000" />
          <path d="M44 34h20c12 0 20 8 20 18 0 8-5 15-13 17l15 25H72l-12-22h-4v22H44V34zm12 12v14h8c5 0 8-3 8-7s-3-7-8-7h-8z" fill="#46E3B7" />
        </svg>
      );

    case 'ganache':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#E4A564" />
          <circle cx="64" cy="64" r="26" fill="#754728" />
          <circle cx="64" cy="54" r="6" fill="#FCE9C8" />
        </svg>
      );

    case 'pinata':
      return (
        <svg viewBox="0 0 128 128" className={`${sizeClass} ${className}`}>
          <rect width="128" height="128" rx="16" fill="#00B4B6" />
          <polygon points="64,28 86,54 42,54" fill="#FF4F99" />
          <polygon points="42,54 86,54 64,88" fill="#FCD34D" />
        </svg>
      );

    default:
      return (
        <div className={`flex items-center justify-center font-archivo font-black text-xs uppercase bg-neutral-900 text-[#D7FF36] border border-neutral-700 ${sizeClass} ${className}`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}

