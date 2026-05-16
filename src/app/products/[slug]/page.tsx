import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = PRODUCTS.find((p) => p.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name} ${p.en} ｜麥法迪 Dionysus`,
    description: p.description[0],
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PRODUCTS.find((p) => p.slug === slug);
  if (!p) notFound();

  const others = PRODUCTS.filter((o) => o.slug !== slug).slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden", background: "var(--green-900)" }}>
        <img
          src={p.image}
          alt={p.name}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.45 }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "120px 0 100px" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 28 }}>
              <Link href="/products" style={{ fontSize: 13, color: "rgba(246,242,232,.6)", fontFamily: "var(--font-mono)", letterSpacing: ".12em", textTransform: "uppercase" }}>Products</Link>
              <span style={{ color: "rgba(246,242,232,.3)", fontSize: 12 }}>›</span>
              <span style={{ fontSize: 13, color: "rgba(246,242,232,.6)", fontFamily: "var(--font-mono)", letterSpacing: ".12em", textTransform: "uppercase" }}>{p.en}</span>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--warm-300)", marginBottom: 20 }}>{p.tag}</div>
            <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 500, color: "var(--paper)", margin: "0 0 12px", lineHeight: 1.1, letterSpacing: ".01em" }}>
              <span className="zh">{p.name}</span>
              <span className="en">{p.en}</span>
            </h1>
            <p style={{ fontFamily: "var(--font-en)", fontStyle: "italic", fontSize: "clamp(18px,2.2vw,28px)", color: "var(--warm-300)", margin: "0 0 32px" }}>
              <span className="zh">{p.subtitle}</span>
              <span className="en">{p.en_subtitle}</span>
            </p>
            <button type="button" className="btn btn--warm" data-inquiry data-inquiry-product={p.slug}>
              <span className="zh">產品詢價</span><span className="en">Product Inquiry</span> <span className="arrow" />
            </button>
          </div>
        </div>
      </section>

      {/* Description + Image */}
      <section style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="product-detail__grid">
            <div>
              <div className="section-eyebrow" data-anim="blur" data-delay="0">
                <span className="zh">產品介紹</span><span className="en">About This Product</span>
              </div>
              {p.description.map((para, i) => (
                <p key={i} className="zh" style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-700)", marginBottom: 20 }} data-anim="blur" data-delay={i * 120}>{para}</p>
              ))}
              {p.en_description.map((para, i) => (
                <p key={i} className="en" style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-700)", marginBottom: 20 }} data-anim="blur" data-delay={i * 120}>{para}</p>
              ))}
            </div>
            <div data-anim="img" data-delay="80" style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/3" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "0 0 100px" }}>
        <div className="container">
          <div className="section-eyebrow" data-anim="blur" data-delay="0">
            <span className="zh">產品規格</span><span className="en">Specifications</span>
          </div>
          <div className="product-specs" data-anim="fade" data-delay="120">
            {p.specs.map((s, i) => (
              <div key={i} className="spec-row">
                <div className="spec-label">
                  <span className="zh">{s.label}</span><span className="en">{s.en_label}</span>
                </div>
                <div className="spec-value">
                  <span className="zh">{s.value}</span><span className="en">{s.en_value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: "80px 0 100px", background: "var(--green-50)" }}>
        <div className="container">
          <div className="section-eyebrow" data-anim="blur" data-delay="0">
            <span className="zh">產品特點</span><span className="en">Key Features</span>
          </div>
          <div className="product-features">
            {p.features.map((f, i) => (
              <div key={i} className="product-feature" data-anim="blur" data-delay={i * 100}>
                <div className="product-feature__num">0{i + 1}</div>
                <h3 className="product-feature__title">
                  <span className="zh">{f.title}</span><span className="en">{f.en_title}</span>
                </h3>
                <p className="product-feature__desc">
                  <span className="zh">{f.desc}</span><span className="en">{f.en_desc}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section style={{ padding: "80px 0 100px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div data-anim="blur" data-delay="0">
              <div className="section-eyebrow">
                <span className="zh">適用場景</span><span className="en">Applications</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,3vw,42px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 32px", lineHeight: 1.3 }}>
                <span className="zh">適合用於</span><span className="en">Perfect for</span>
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {p.applications.map((app, i) => (
                  <span key={i} className="zh app-tag">{app}</span>
                ))}
                {p.en_applications.map((app, i) => (
                  <span key={i} className="en app-tag">{app}</span>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <button type="button" className="btn btn--primary" data-inquiry data-inquiry-product={p.slug}>
                  <span className="zh">洽詢合作</span><span className="en">Get in Touch</span> <span className="arrow" />
                </button>
              </div>
            </div>
            <div data-anim="img" data-delay="80" style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "1/1" }}>
              <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section style={{ padding: "80px 0 120px", background: "var(--green-50)" }}>
        <div className="container">
          <div className="section-eyebrow" data-anim="blur" data-delay="0">
            <span className="zh">其他產品系列</span><span className="en">Other Products</span>
          </div>
          <div className="product-grid" style={{ marginTop: 40 }}>
            {others.map((o, i) => (
              <Link key={o.slug} href={`/products/${o.slug}`} className="product-card" data-anim="blur" data-delay={i * 80} style={{ flex: "none" }}>
                <div className="product-card__visual" style={{ aspectRatio: "1/1", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 20 }}>
                  <img src={o.image} alt={o.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div className="product-card__row">
                  <div>
                    <div className="product-card__name">
                      <span className="zh">{o.name}</span><span className="en">{o.en}</span>
                    </div>
                    <div className="product-card__en">
                      <span className="zh">{o.en}</span><span className="en">{o.tag}</span>
                    </div>
                  </div>
                  <div className="product-card__arrow">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </div>
                </div>
                <div className="product-card__tag">{o.tag}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
