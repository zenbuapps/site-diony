import Placeholder from "@/components/Placeholder";
import { IconLeaf, IconWave, IconHeart, IconGlobeFilled } from "@/components/icons";

const PILLARS = [
  { icon: <IconLeaf size={18} />, title: "自然共鳴", desc: "取材自然原料，讓聲音回歸本真。銅、黃銅、石英晶體——每一種材質都有其獨特的聲學特性，我們精心挑選，讓聲音與自然共鳴。" },
  { icon: <IconWave size={18} />, title: "聲音療癒", desc: "精密科學調音，傳遞和諧的能量。基於心理聲學研究，特定頻率能有效降低壓力、改善專注力，並引導身心進入深度放鬆狀態。" },
  { icon: <IconHeart size={18} />, title: "匠心製作", desc: "手作工藝把關，品質如一可靠。每一支風鈴、每一個缽，都經過工匠親手校準與測試，確保到達您手中時仍保有最純淨的音色。" },
  { icon: <IconGlobeFilled size={18} />, title: "全球共享", desc: "讓和諧的聲音通往全世界。我們已將產品送達超過 30 個國家，相信每一個人都值得擁有療癒聲音帶來的平靜與美好。" },
];

const TIMELINE = [
  { year: "2008", event: "在台中創立，專注金屬風鈴 OEM 製造" },
  { year: "2012", event: "引進心理聲學調音技術，精度達 ±10Hz" },
  { year: "2016", event: "擴展產品線至頌缽、音叉、水晶缽" },
  { year: "2020", event: "品牌重塑，正式以「聲音療癒」為核心定位" },
  { year: "2024", event: "服務全球 30+ 國家品牌，年產能突破 50 萬件" },
];

export default function StoryDetail() {
  return (
    <div>
      {/* 主視覺 */}
      <div style={{ position: "relative", aspectRatio: "16/7", borderRadius: "var(--radius-xl)", overflow: "hidden", marginBottom: 80 }}>
        <Placeholder label="品牌情境照 · 工藝與療癒" variant="warm" />
      </div>

      {/* 故事文案 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, marginBottom: 100 }}>
        <div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(28px,2.8vw,42px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 32px", lineHeight: 1.3 }}>
            從工業精度，<br />到心靈維度。
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 16, lineHeight: 2, color: "var(--ink-700)" }}>
            <p style={{ margin: 0 }}>聲音，不只是聽覺的感受，更是能量的傳遞。</p>
            <p style={{ margin: 0 }}>麥法迪前身為亞洲頂級風鈴製造商，我們深知「音準」是療癒的基礎。不同於一般裝飾品，我們運用心理聲學原理，將每一支金屬管、風鈴、音束與水晶缽，校準至誤差 ±10Hz 以內的精密頻率。</p>
            <p style={{ margin: 0 }}>我們將金屬加工的「火」與「力」，昇華為撫慰人心的「聲」與「波」。這不只是製造，這是聲學的煉金術。</p>
          </div>
        </div>

        {/* 時間軸 */}
        <div>
          <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--green-700)", margin: "0 0 32px" }}>品牌里程碑</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {TIMELINE.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 24, paddingBottom: 28, borderLeft: "1px solid var(--line)", paddingLeft: 24, position: "relative", marginLeft: 40 }}>
                <div style={{ position: "absolute", left: -6, top: 4, width: 11, height: 11, borderRadius: "50%", background: "var(--green-700)", border: "2px solid var(--paper)" }} />
                <div style={{ fontFamily: "var(--font-en)", fontStyle: "italic", fontSize: 18, color: "var(--warm-600)", fontWeight: 500 }}>{t.year}</div>
                <div style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-700)", paddingTop: 2 }}>{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 四根柱 */}
      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 64 }}>
        <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 500, color: "var(--green-900)", margin: "0 0 48px", textAlign: "center" }}>我們的核心價值</h3>
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <div key={i}>
              <div className="pillar__icon">{p.icon}</div>
              <h4 className="pillar__title">{p.title}</h4>
              <p className="pillar__desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
