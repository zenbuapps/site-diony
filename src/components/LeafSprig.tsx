type LeafSprigProps = {
  style?: React.CSSProperties;
  scale?: number;
  rotate?: number;
};

export default function LeafSprig({ style, scale = 1, rotate = 0 }: LeafSprigProps) {
  return (
    <svg
      className="deco-leaf"
      width={120 * scale}
      height={180 * scale}
      viewBox="0 0 120 180"
      style={{ ...style, transform: `rotate(${rotate}deg)` }}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      <path d="M60 10 Q 60 80 60 170" />
      <path d="M60 30 Q 38 36 30 56 Q 50 52 60 40 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 50 Q 82 58 92 80 Q 70 76 60 62 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 75 Q 36 82 28 104 Q 50 100 60 86 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 100 Q 84 108 94 130 Q 70 126 60 112 Z" fill="currentColor" fillOpacity="0.18" />
      <path d="M60 125 Q 38 132 32 152 Q 52 148 60 136 Z" fill="currentColor" fillOpacity="0.18" />
    </svg>
  );
}
