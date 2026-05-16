import { IconCustomize, IconDevelop, IconTune, IconGlobe2 } from "@/components/icons";
import Link from "next/link";

const SERVICES = [
  {
    num: "01", icon: <IconCustomize size={64} />, title: "品牌客製",
    desc: "從 Logo 設計、包裝規劃到產品線定位，我們與您的品牌團隊深度合作，打造完全屬於您的視覺識別與產品個性。無論是禮品市場、瑜伽品牌或療癒中心，我們都能精準對應。",
  },
  {
    num: "02", icon: <IconDevelop size={64} />, title: "產品開發",
    desc: "從材質選擇（鋁合金、黃銅、石英晶體）到結構設計、音頻工程，全程與您協作。我們的研發團隊擁有超過 15 年聲學工程經驗，確保每件新品都具備市場競爭力。",
  },
  {
    num: "03", icon: <IconTune size={64} />, title: "精準調音",
    desc: "我們使用專業頻率分析儀，對每一件產品進行個別校準，確保音準誤差控制在 ±10Hz 以內。穩定一致的音準是療癒效果的科學基礎，也是我們最核心的品質承諾。",
  },
  {
    num: "04", icon: <IconGlobe2 size={64} />, title: "全球貿易",
    desc: "彈性 MOQ 設定，支援小量試單到大批量生產。完整的出口文件、國際物流安排與進度追蹤，確保準時交付至全球市場，已服務歐美、日本、東南亞等超過 30 個國家的品牌。",
  },
];

export default function OEMDetail() {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 64 }}>
        {SERVICES.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 40, alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: "var(--font-en)", fontStyle: "italic", fontSize: 13, color: "var(--warm-600)", marginBottom: 16 }}>{s.num}</div>
              <div style={{ color: "var(--green-800)" }}>{s.icon}</div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 500, color: "var(--green-900)", margin: "0 0 16px" }}>{s.title}</h3>
              <p style={{ fontSize: 16, lineHeight: 2, color: "var(--ink-700)", margin: 0 }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 80, padding: "48px", background: "var(--green-50)", borderRadius: "var(--radius-xl)", textAlign: "center" }}>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, color: "var(--green-900)", margin: "0 0 16px" }}>準備好開始合作了嗎？</h3>
        <p style={{ fontSize: 16, color: "var(--ink-700)", margin: "0 0 28px" }}>告訴我們您的需求，我們的團隊將在 24 小時內回覆。</p>
        <Link className="btn btn--primary" href="/contact">立即聯絡我們 <span className="arrow" /></Link>
      </div>
    </div>
  );
}
