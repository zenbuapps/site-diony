import type { Metadata } from "next";
import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";
import ProductGrid from "@/components/products/ProductGrid";

export const metadata: Metadata = {
  title: "產品系列｜麥法迪 Dionysus",
  description: "頌缽、風鈴、水晶缽、音叉、手搖音束 — 每一件都校準至 ±10Hz 精密頻率。",
};

export default function ProductsPage() {
  return (
    <main>
      <section style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}>
        <LeafSprig style={{ position: "absolute", right: -40, top: 80, color: "var(--green-300)" }} scale={1.2} rotate={170} />
        <div className="container">
          <div className="section-eyebrow">Product Series</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px,4vw,64px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 20px", lineHeight: 1.2, letterSpacing: ".01em" }}>
            產品系列
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink-700)", maxWidth: 560, margin: "0 0 64px" }}>
            每一件產品都通過儀器校正，精準調音至誤差 ±10Hz 以內。聲音的療癒從精準開始。
          </p>
          <ProductGrid />
          <div style={{ marginTop: 80, textAlign: "center" }}>
            <button type="button" className="btn btn--primary" data-inquiry>洽詢 OEM / ODM 合作 <span className="arrow" /></button>
          </div>
        </div>
      </section>
    </main>
  );
}
