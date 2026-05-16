type IconProps = { size?: number };

export const IconChevron = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const IconArrowRight = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </svg>
);

export const IconArrowLeft = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <line x1="20" y1="12" x2="4" y2="12" />
    <polyline points="10 6 4 12 10 18" />
  </svg>
);

export const IconGlobe = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><line x1="3" y1="12" x2="21" y2="12" />
  </svg>
);

export const IconLeaf = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M20 4 C 12 4 4 10 4 18 C 4 19 4 20 4 20 C 4 20 5 20 6 20 C 14 20 20 12 20 4 Z" />
    <line x1="4" y1="20" x2="14" y2="10" />
  </svg>
);

export const IconWave = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M2 9 Q 6 5 10 9 T 18 9 T 26 9" /><path d="M2 15 Q 6 11 10 15 T 18 15 T 26 15" />
  </svg>
);

export const IconHeart = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M12 20 C 5 15 2 11 2 8 A 4 4 0 0 1 10 6 A 4 4 0 0 1 22 8 C 22 11 19 15 12 20 Z" />
  </svg>
);

export const IconGlobeFilled = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12 H 21" /><path d="M12 3 C 8 7 8 17 12 21" /><path d="M12 3 C 16 7 16 17 12 21" />
  </svg>
);

export const IconBrain = ({ size = 36 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M18 10 C 12 10 8 14 8 20 C 8 22 9 24 10 25 C 9 26 8 28 8 30 C 8 35 12 39 18 38 L 18 10 Z" />
    <path d="M18 14 H 14" /><path d="M18 22 H 12" /><path d="M18 30 H 14" />
    <circle cx="30" cy="20" r="2" /><path d="M22 18 H 28" /><path d="M22 24 H 32" /><path d="M22 30 H 28" />
    <circle cx="34" cy="28" r="1.5" fill="currentColor" />
  </svg>
);

export const IconFrequency = ({ size = 36 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 60 36" fill="none" stroke="currentColor" strokeWidth="1.4">
    <line x1="2" y1="18" x2="6" y2="18" /><line x1="8" y1="14" x2="8" y2="22" /><line x1="10" y1="10" x2="10" y2="26" />
    <line x1="12" y1="6" x2="12" y2="30" /><line x1="14" y1="10" x2="14" y2="26" /><line x1="16" y1="14" x2="16" y2="22" />
    <line x1="18" y1="8" x2="18" y2="28" /><line x1="20" y1="3" x2="20" y2="33" /><line x1="22" y1="10" x2="22" y2="26" />
    <line x1="24" y1="14" x2="24" y2="22" /><line x1="26" y1="6" x2="26" y2="30" /><line x1="28" y1="2" x2="28" y2="34" />
    <line x1="30" y1="8" x2="30" y2="28" /><line x1="32" y1="12" x2="32" y2="24" /><line x1="34" y1="14" x2="34" y2="22" />
    <line x1="36" y1="10" x2="36" y2="26" /><line x1="38" y1="6" x2="38" y2="30" /><line x1="40" y1="12" x2="40" y2="24" />
    <line x1="42" y1="14" x2="42" y2="22" /><line x1="44" y1="10" x2="44" y2="26" /><line x1="46" y1="14" x2="46" y2="22" />
    <line x1="48" y1="16" x2="48" y2="20" /><line x1="50" y1="18" x2="54" y2="18" />
  </svg>
);

export const IconCrystal = ({ size = 36 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
    <polygon points="24 6 38 18 30 40 18 40 10 18" />
    <line x1="10" y1="18" x2="38" y2="18" /><line x1="24" y1="6" x2="24" y2="40" />
    <line x1="18" y1="40" x2="24" y2="18" /><line x1="30" y1="40" x2="24" y2="18" />
  </svg>
);

export const IconCustomize = ({ size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1">
    <rect x="8" y="12" width="40" height="32" rx="2" />
    <circle cx="20" cy="24" r="4" />
    <path d="M16 36 L 22 30 L 30 36 L 38 28 L 46 36" />
    <line x1="34" y1="20" x2="44" y2="20" />
  </svg>
);

export const IconDevelop = ({ size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1">
    <circle cx="28" cy="28" r="20" /><circle cx="28" cy="28" r="12" /><circle cx="28" cy="28" r="4" />
    <line x1="28" y1="2" x2="28" y2="12" /><line x1="28" y1="44" x2="28" y2="54" />
    <line x1="2" y1="28" x2="12" y2="28" /><line x1="44" y1="28" x2="54" y2="28" />
  </svg>
);

export const IconTune = ({ size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1">
    <rect x="6" y="12" width="44" height="32" rx="3" />
    <path d="M14 28 L 18 24 L 22 32 L 26 20 L 30 36 L 34 24 L 38 30 L 42 28" />
    <circle cx="42" cy="28" r="1.5" fill="currentColor" />
  </svg>
);

export const IconGlobe2 = ({ size = 48 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1.1">
    <circle cx="28" cy="28" r="22" /><ellipse cx="28" cy="28" rx="10" ry="22" />
    <line x1="6" y1="28" x2="50" y2="28" /><path d="M9 17 H 47" /><path d="M9 39 H 47" />
  </svg>
);

export const IconMail = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="5" width="18" height="14" rx="1" /><polyline points="3 7 12 13 21 7" />
  </svg>
);

export const IconPhone = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M5 4 H 9 L 11 9 L 8.5 10.5 C 9.5 13 11 14.5 13.5 15.5 L 15 13 L 20 15 V 19 C 20 19.5 19.5 20 19 20 C 11 20 4 13 4 5 C 4 4.5 4.5 4 5 4 Z" />
  </svg>
);

export const IconPin = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M12 22 C 7 16 4 12 4 9 A 8 8 0 0 1 20 9 C 20 12 17 16 12 22 Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconIG = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
  </svg>
);

export const IconFB = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M15 3 H 12 C 10 3 9 4 9 6 V 9 H 7 V 12 H 9 V 21 H 12 V 12 H 15 L 16 9 H 12 V 7 C 12 6.5 12.5 6 13 6 H 16 V 3 Z" />
  </svg>
);

export const IconYT = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="2" y="6" width="20" height="12" rx="3" />
    <polygon points="10 9 16 12 10 15" fill="currentColor" stroke="none" />
  </svg>
);

export const IconLinkedIn = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="8" y1="10" x2="8" y2="17" /><circle cx="8" cy="7" r="0.8" fill="currentColor" />
    <path d="M12 17 V 12 M 12 13.5 C 13 12 16 11.5 16 14 V 17" />
  </svg>
);
