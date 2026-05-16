import { IconCustomize, IconDevelop, IconTune, IconGlobe2 } from "@/components/icons";

const STEPS = [
  {
    num: "01",
    icon: <IconCustomize size={32} />,
    label: "Phase · Branding",
    title: "品牌客製",
    en_title: "Brand Customization",
    duration: "1 – 2 週",
    en_duration: "1 – 2 weeks",
    desc: "從 Logo 設計、包裝規劃到產品線定位，我們與您的品牌團隊深度合作，打造完全屬於您的視覺識別與產品個性。無論是禮品市場、瑜伽品牌或療癒中心，我們都能精準對應。",
    en_desc: "From logo design to packaging and product line positioning, we collaborate deeply with your brand team to craft a visual identity and personality entirely your own.",
    deliverables: ["Logo 系統 & 視覺識別", "包裝結構與印刷規範", "產品線命名與定位"],
    en_deliverables: ["Logo & visual identity", "Packaging structure + print spec", "Product line naming & positioning"],
  },
  {
    num: "02",
    icon: <IconDevelop size={32} />,
    label: "Phase · R&D",
    title: "產品開發",
    en_title: "Product Development",
    duration: "3 – 6 週",
    en_duration: "3 – 6 weeks",
    desc: "從材質選擇（鋁合金、黃銅、石英晶體）到結構設計、音頻工程，全程與您協作。我們的研發團隊擁有超過 15 年聲學工程經驗，確保每件新品都具備市場競爭力。",
    en_desc: "Material selection (aluminum, brass, quartz), structural design, audio engineering — every step alongside you. Our R&D team has 15+ years of acoustic engineering experience.",
    deliverables: ["3D 結構圖 + 工程藍圖", "材質樣品（鋁合金 / 黃銅 / 石英）", "聲學頻譜模擬報告"],
    en_deliverables: ["3D structural drawings", "Material samples", "Acoustic spectrum simulation"],
  },
  {
    num: "03",
    icon: <IconTune size={32} />,
    label: "Phase · Tuning",
    title: "精準調音",
    en_title: "Precision Tuning",
    duration: "2 – 3 週",
    en_duration: "2 – 3 weeks",
    desc: "我們使用專業頻率分析儀，對每一件產品進行個別校準，確保音準誤差控制在 ±10Hz 以內。穩定一致的音準是療癒效果的科學基礎，也是我們最核心的品質承諾。",
    en_desc: "Each product is calibrated individually with professional frequency analyzers, holding tolerance within ±10 Hz — the scientific foundation of consistent healing.",
    deliverables: ["±10Hz 校準報告", "PP Sample 量產試樣", "品管 SOP 文件"],
    en_deliverables: ["±10Hz calibration report", "PP samples (pre-production)", "QC standard operating procedures"],
  },
  {
    num: "04",
    icon: <IconGlobe2 size={32} />,
    label: "Phase · Delivery",
    title: "全球貿易",
    en_title: "Global Trade",
    duration: "依量級",
    en_duration: "Scale-dependent",
    desc: "彈性 MOQ 設定，支援小量試單到大批量生產。完整的出口文件、國際物流安排與進度追蹤，確保準時交付至全球市場，已服務歐美、日本、東南亞等超過 30 個國家的品牌。",
    en_desc: "Flexible MOQ from pilot batches to mass production. Complete export documentation, international logistics and progress tracking — delivered on time to 30+ countries.",
    deliverables: ["量產 + 包裝出貨", "出口文件 + 國際物流", "1 年品質保固"],
    en_deliverables: ["Mass production + packaging", "Export docs + global logistics", "1-year quality warranty"],
  },
];

export default function OEMDetail() {
  return (
    <div>
      {/* 主視覺 */}
      <div data-anim="img" data-delay="80" style={{ position: "relative", aspectRatio: "16/7", borderRadius: "var(--radius-xl)", overflow: "hidden", marginBottom: 80, background: "var(--green-100)" }}>
        <img src="/images/oem.png" alt="麥法迪 OEM 客製化工坊" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      </div>

      {/* Stepper Overview */}
      <div className="oem-stepper" data-anim="fade" data-delay="0">
        <div className="oem-stepper__rail" aria-hidden />
        {STEPS.map((s, i) => (
          <div key={i} className="oem-stepper__node">
            <div className="oem-stepper__dot">{s.num}</div>
            <div className="oem-stepper__label">
              <span className="zh">{s.title}</span>
              <span className="en">{s.en_title}</span>
            </div>
            <div className="oem-stepper__sub">
              <span className="zh">{s.duration}</span>
              <span className="en">{s.en_duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="section-eyebrow" data-anim="blur" data-delay="0" style={{ marginTop: 100 }}>
        <span className="zh">流程細節</span><span className="en">Process Detail</span>
      </div>
      <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px,2.8vw,38px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 56px", lineHeight: 1.3, letterSpacing: ".03em" }} data-anim="blur" data-delay="120">
        <span className="zh">四個階段，一條完整路徑</span>
        <span className="en">Four phases, one complete path</span>
      </h2>

      {/* Detailed Timeline */}
      <div className="oem-timeline">
        {STEPS.map((s, i) => (
          <div key={i} className="oem-step" data-anim="blur" data-delay={i * 80}>
            <div className="oem-step__rail" aria-hidden>
              <div className="oem-step__bullet">{s.num}</div>
              {i < STEPS.length - 1 ? <div className="oem-step__line" /> : null}
            </div>
            <div className="oem-step__body">
              <div className="oem-step__header">
                <div className="oem-step__phase">{s.label}</div>
                <div className="oem-step__duration">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15 14" />
                  </svg>
                  <span className="zh">{s.duration}</span>
                  <span className="en">{s.en_duration}</span>
                </div>
              </div>
              <div className="oem-step__title-row">
                <div className="oem-step__icon">{s.icon}</div>
                <h3 className="oem-step__title">
                  <span className="zh">{s.title}</span>
                  <span className="en">{s.en_title}</span>
                </h3>
              </div>
              <p className="oem-step__desc">
                <span className="zh">{s.desc}</span>
                <span className="en">{s.en_desc}</span>
              </p>
              <div className="oem-step__deliverables">
                <div className="oem-step__deliverables-label">
                  <span className="zh">階段交付</span><span className="en">Deliverables</span>
                </div>
                <ul>
                  {s.deliverables.map((d, di) => (
                    <li key={di} className="zh">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 12 10 17 19 7" /></svg>
                      <span>{d}</span>
                    </li>
                  ))}
                  {s.en_deliverables.map((d, di) => (
                    <li key={`en-${di}`} className="en">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="5 12 10 17 19 7" /></svg>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="oem-cta" data-anim="blur" data-delay="0">
        <h3 className="oem-cta__title">
          <span className="zh">準備好開始合作了嗎？</span>
          <span className="en">Ready to start the journey?</span>
        </h3>
        <p className="oem-cta__lead">
          <span className="zh">告訴我們您的需求，我們的團隊將在 24 小時內回覆。</span>
          <span className="en">Tell us your needs — our team will respond within 24 hours.</span>
        </p>
        <button type="button" className="btn btn--primary" data-inquiry>
          <span className="zh">立即詢價洽談</span><span className="en">Start Inquiry</span> <span className="arrow" />
        </button>
      </div>
    </div>
  );
}
