import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";

const ITEMS = ["Singing Bowls · 頌缽", "Wind Chimes · 風鈴", "Tuning Forks · 音叉", "Crystal Bowls · 水晶缽", "Sound Sticks · 手搖音束", "OEM / ODM Partner"];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div style={{ position: "relative" }}>
          <LeafSprig style={{ position: "absolute", left: -90, top: -20, color: "var(--green-300)" }} scale={0.7} rotate={-12} />
          <div className="hero__eyebrow" data-anim="blur" data-delay="0">Sound · Harmony · Healing</div>
          <h1 className="hero__title" data-anim="blur" data-delay="140">
            <span className="zh">聲音，<br />讓生活<br />重新和諧<span className="accent">.</span></span>
            <span className="en">Sound,<br />Restoring Life&apos;s<br />Harmony<span className="accent">.</span></span>
          </h1>
          <p className="hero__lead" data-anim="blur" data-delay="300">
            <span className="zh">以聲音藝術提升生活品質，<br />創造每個人都能輕易接觸的日常療癒體驗，<br />透過和諧的聲音讓世界更平靜、更美好。</span>
            <span className="en">Elevating quality of life through sonic art,<br />creating accessible daily healing experiences,<br />and making the world more peaceful through harmony.</span>
          </p>
          <div className="hero__ctas" data-anim="fade" data-delay="480">
            <Link className="btn btn--primary" href="/products">
              <span className="zh">探索產品</span><span className="en">Explore Products</span> <span className="arrow" />
            </Link>
            <Link className="btn btn--ghost" href="/oem">
              <span className="zh">了解 OEM / ODM</span><span className="en">Learn OEM / ODM</span>
            </Link>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div className="hero__decor hero__decor--top" data-anim="blur" data-delay="200">EST · 2008 / TAICHUNG · TAIWAN</div>
          <div className="hero__visual" data-anim="img" data-delay="80">
            <img src="/images/hero.png" alt="頌缽與風鈴情境" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none", opacity: 0.5 }} viewBox="0 0 400 480" preserveAspectRatio="none">
              <g stroke="rgba(246,242,232,0.45)" strokeWidth="0.8" fill="none">
                <path d="M 0 380 Q 100 360, 200 380 T 400 380" />
                <path d="M 0 400 Q 100 388, 200 400 T 400 400" />
                <path d="M 0 420 Q 100 412, 200 420 T 400 420" />
              </g>
            </svg>
          </div>
          <div className="hero__decor hero__decor--bot" data-anim="blur" data-delay="400">
            <span>432 Hz</span><span>±10 Hz</span><span>Psychoacoustics</span>
          </div>
        </div>
      </div>

      <div data-anim="fade" data-delay="600" style={{ marginTop: 96, borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "22px 0", overflow: "hidden", display: "flex", gap: 64, whiteSpace: "nowrap", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: "0.22em", color: "var(--green-700)", textTransform: "uppercase" }}>
        <div style={{ display: "flex", gap: 64, animation: "marquee 64s linear infinite" }}>
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
