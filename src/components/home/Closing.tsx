import Link from "next/link";

export default function Closing() {
  return (
    <section className="closing">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="closing__eyebrow" data-anim="blur" data-delay="0">— Our Vision —</div>
        <h2 className="closing__title" data-anim="blur" data-delay="140">
          <span className="zh">透過和諧的聲音，<br />讓世界更平靜、更美好。</span>
          <span className="en">Through Harmonious Sound,<br />Making the World More Peaceful.</span>
        </h2>
        <p className="closing__sub" data-anim="blur" data-delay="280">
          <span className="zh">聲音的藝術  ·  療癒的力量  ·  世界的連結</span>
          <span className="en">The Art of Sound  ·  The Power of Healing  ·  A Connected World</span>
        </p>
        <div className="closing__cta" data-anim="fade" data-delay="420">
          <button type="button" className="btn btn--warm" data-inquiry>
            <span className="zh">展開合作對話</span><span className="en">Start a Conversation</span> <span className="arrow" />
          </button>
          <Link className="btn btn--ghost" href="/products" style={{ borderColor: "rgba(246,242,232,0.4)", color: "var(--paper)" }}>
            <span className="zh">瀏覽產品系列</span><span className="en">Browse Products</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
