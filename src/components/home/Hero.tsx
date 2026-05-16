import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";
import Placeholder from "@/components/Placeholder";

const ITEMS = ["Singing Bowls · 頌缽", "Wind Chimes · 風鈴", "Tuning Forks · 音叉", "Crystal Bowls · 水晶缽", "Sound Sticks · 手搖音束", "OEM / ODM Partner"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div style={{ position: "relative" }}>
          <LeafSprig style={{ position: "absolute", left: -90, top: -20, color: "var(--green-300)" }} scale={0.7} rotate={-12} />
          <div className="hero__eyebrow">Sound · Harmony · Healing</div>
          <h1 className="hero__title">
            聲音，<br />
            讓生活<br />
            重新和諧<span className="accent">.</span>
          </h1>
          <p className="hero__lead">
            以聲音藝術提升生活品質，<br />
            創造每個人都能輕易接觸的日常療癒體驗，<br />
            透過和諧的聲音讓世界更平靜、更美好。
          </p>
          <div className="hero__ctas">
            <Link className="btn btn--primary" href="/products">探索產品 <span className="arrow" /></Link>
            <Link className="btn btn--ghost" href="/oem">了解 OEM / ODM</Link>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="hero__decor hero__decor--top">EST · 2008 / TAICHUNG · TAIWAN</div>
          <div className="hero__visual">
            <Placeholder label="HERO · 頌缽 + 風鈴情境照" />
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }} viewBox="0 0 400 480" preserveAspectRatio="none">
              <g stroke="rgba(246,242,232,0.45)" strokeWidth="0.8" fill="none">
                <path d="M 0 380 Q 100 360, 200 380 T 400 380" />
                <path d="M 0 400 Q 100 388, 200 400 T 400 400" />
                <path d="M 0 420 Q 100 412, 200 420 T 400 420" />
              </g>
            </svg>
          </div>
          <div className="hero__decor hero__decor--bot">
            <span>432 Hz</span><span>±10 Hz</span><span>Psychoacoustics</span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div style={{ marginTop: 96, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", overflow: "hidden", display: "flex", gap: 64, whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", color: "var(--green-700)", textTransform: "uppercase" }}>
        <div style={{ display: "flex", gap: 64, animation: "marquee 32s linear infinite" }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ display: "flex", gap: 64 }}>
              {ITEMS.map((item) => <span key={item}>✦ {item}</span>)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
