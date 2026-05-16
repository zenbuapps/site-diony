import type { Metadata } from "next";
import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";
import StoryDetail from "@/components/story/StoryDetail";

export const metadata: Metadata = {
  title: "品牌故事｜麥法迪 Dionysus",
  description: "從亞洲頂級風鈴製造商，到聲音療癒的推廣者。麥法迪的聲學煉金術。",
};

export default function StoryPage() {
  return (
    <main>
      <section style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}>
        <LeafSprig style={{ position: "absolute", right: -60, top: 40, color: "var(--green-300)" }} scale={1.4} rotate={168} />
        <div className="container">
          <div className="section-eyebrow">Brand Story</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(32px,3.4vw,52px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 20px", lineHeight: 1.2, letterSpacing: "0.04em" }}>
            聲學煉金術
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.85, color: "var(--ink-700)", maxWidth: 560, margin: "0 0 80px" }}>
            從工業精度到心靈維度，這是麥法迪 16 年來走過的聲音之旅。
          </p>
          <StoryDetail />
          <div style={{ marginTop: 80, textAlign: "center" }}>
            <button type="button" className="btn btn--primary" data-inquiry>與我們展開合作 <span className="arrow" /></button>
          </div>
        </div>
      </section>
    </main>
  );
}
