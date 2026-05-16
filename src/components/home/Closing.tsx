import Link from "next/link";

export default function Closing() {
  return (
    <section className="closing">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="closing__eyebrow">— Our Vision —</div>
        <h2 className="closing__title">透過和諧的聲音，<br />讓世界更平靜、更美好。</h2>
        <p className="closing__sub">聲音的藝術  ·  療癒的力量  ·  世界的連結</p>
        <div className="closing__cta">
          <Link className="btn btn--warm" href="/contact">展開合作對話 <span className="arrow" /></Link>
          <Link className="btn btn--ghost" href="/products" style={{ borderColor: "rgba(246,242,232,0.4)", color: "var(--paper)" }}>瀏覽產品系列</Link>
        </div>
      </div>
    </section>
  );
}
