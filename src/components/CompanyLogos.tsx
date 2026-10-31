/**
 * Company Logos
 * Uses real logo files from /public/logos/ where available,
 * and custom SVG illustrations for any without an asset.
 */

interface CompanyLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZE_MAP = {
  sm: 'w-8 h-8',
  md: 'w-12 h-12',
  lg: 'w-16 h-16',
  xl: 'w-20 h-20',
};

/** Shared wrapper for real image logos */
function ImgLogo({
  src,
  alt,
  size = 'md',
  className = '',
  bgClass = 'bg-white',
  padClass = 'p-1.5',
  objectFit = 'object-contain',
}: CompanyLogoProps & {
  src: string;
  alt: string;
  bgClass?: string;
  padClass?: string;
  objectFit?: string;
}) {
  const sizeClasses = SIZE_MAP[size];
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 overflow-hidden border border-neutral-200 ${bgClass} ${padClass} ${sizeClasses} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className={`w-full h-full ${objectFit}`}
        loading="lazy"
      />
    </div>
  );
}

/** 1. FICCI — Real SVG logo from /public/logos/FICCI_logo.svg */
export function CompanyLogoFicci({ size = 'md', className = '' }: CompanyLogoProps) {
  return (
    <ImgLogo
      src="/logos/FICCI_logo.svg"
      alt="FICCI logo"
      size={size}
      className={className}
      bgClass="bg-white"
      padClass="p-1"
    />
  );
}

/** 2. BeetleX LLP — Real JPG logo from /public/logos/beetlex_logo.jpg */
export function CompanyLogoBeetleX({ size = 'md', className = '' }: CompanyLogoProps) {
  return (
    <ImgLogo
      src="/logos/beetlex_logo.jpg"
      alt="BeetleX LLP logo"
      size={size}
      className={className}
      bgClass="bg-white"
      padClass="p-1"
      objectFit="object-contain"
    />
  );
}

/** 3. NFSU — Real PNG logo from /public/logos/National_Forensic_Sciences_University_Logo.png */
export function CompanyLogoNFSU({ size = 'md', className = '' }: CompanyLogoProps) {
  return (
    <ImgLogo
      src="/logos/National_Forensic_Sciences_University_Logo.png"
      alt="National Forensic Sciences University logo"
      size={size}
      className={className}
      bgClass="bg-white"
      padClass="p-0.5"
      objectFit="object-contain"
    />
  );
}

/** 4. NIC — Real PNG logo from /public/logos/NIC_Preview-1.png */
export function CompanyLogoNIC({ size = 'md', className = '' }: CompanyLogoProps) {
  return (
    <ImgLogo
      src="/logos/NIC_Preview-1.png"
      alt="National Informatics Centre logo"
      size={size}
      className={className}
      bgClass="bg-white"
      padClass="p-1"
      objectFit="object-contain"
    />
  );
}

/** 5. Assam University — Real WEBP logo from /public/logos/assam_university.webp */
export function CompanyLogoAssamUniversity({ size = 'md', className = '' }: CompanyLogoProps) {
  return (
    <ImgLogo
      src="/logos/assam_university.webp"
      alt="Assam University logo"
      size={size}
      className={className}
      bgClass="bg-white"
      padClass="p-0.5"
      objectFit="object-contain"
    />
  );
}

/** Helper dispatcher: maps company id → logo component */
export function CompanyLogo({
  id,
  size = 'md',
  className = '',
}: {
  id: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}) {
  switch (id.toLowerCase()) {
    case 'ficci':
      return <CompanyLogoFicci size={size} className={className} />;
    case 'beetlex':
      return <CompanyLogoBeetleX size={size} className={className} />;
    case 'nfsu':
      return <CompanyLogoNFSU size={size} className={className} />;
    case 'nic':
      return <CompanyLogoNIC size={size} className={className} />;
    case 'assam-university':
      return <CompanyLogoAssamUniversity size={size} className={className} />;
    default:
      return <CompanyLogoFicci size={size} className={className} />;
  }
}
