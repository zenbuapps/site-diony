import type { Metadata } from "next";
import LeafSprig from "@/components/LeafSprig";
import OEMDetail from "@/components/oem/OEMDetail";

export const metadata: Metadata = {
  title: "OEM / ODM 服務｜麥法迪 Dionysus",
  description: "一站式聲音療癒器具客製化服務，品牌客製、產品開發、精準調音、全球貿易。",
};

export default function OEMPage() {
  return (
    <main>
      <section style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden", background: "var(--green-50)" }}>
        <LeafSprig style={{ position: "absolute", left: -60, top: 60, color: "var(--green-300)" }} scale={1.3} rotate={-10} />
        <div className="container">
          <div className="section-eyebrow">OEM / ODM</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,3.4vw,52px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 20px", lineHeight: 1.25, letterSpacing: "0.04em" }}>
            從概念到成品，<br />成就您的品牌願景。
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink-700)", maxWidth: 560, margin: "0 0 80px" }}>
            提供一站式客製化服務，結合精密製造與聲學專業，協助您打造具有市場價值的聲音療癒產品。
          </p>
          <OEMDetail />
        </div>
      </section>
    </main>
  );
}
