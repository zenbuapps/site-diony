type PlaceholderProps = {
  label: string;
  variant?: "default" | "warm" | "dark";
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function Placeholder({ label, variant = "default", style, children }: PlaceholderProps) {
  const cls = "ph" + (variant === "warm" ? " ph--warm" : variant === "dark" ? " ph--dark" : "");
  return (
    <div className={cls} style={style}>
      {children}
      <span className="ph__label">{label}</span>
    </div>
  );
}
