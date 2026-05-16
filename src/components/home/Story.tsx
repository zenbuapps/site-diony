import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";
import Placeholder from "@/components/Placeholder";
import { IconLeaf, IconWave, IconHeart, IconGlobeFilled } from "@/components/icons";

const PILLARS = [
  { icon: <IconLeaf size={18} />, title: "自然共鳴", desc: "取材自然原料，讓聲音回歸本真。" },
  { icon: <IconWave size={18} />, title: "聲音療癒", desc: "精密科學調音，傳遞和諧的能量。" },
  { icon: <IconHeart size={18} />, title: "匠心製作", desc: "手作工藝把關，品質如一可靠。" },
  { icon: <IconGlobeFilled size={18} />, title: "全球共享", desc: "讓和諧的聲音通往全世界。" },
];

export default function Story() {
  return (
    <section className="story" id="story">
      <LeafSprig style={{ position: "absolute", left: -40, top: 60, color: "var(--green-300)" }} scale={1.1} rotate={-8} />
      <LeafSprig style={{ position: "absolute", right: -40, top: 240, color: "var(--green-300)" }} scale={0.9} rotate={172} />

      <div className="container story__grid">
        <div>
          <div className="section-eyebrow">Brand Story</div>
          <h2 className="story__title">從工業精度，<br />到心靈維度。</h2>
          <div className="story__body">
            <p>聲音，不只是聽覺的感受，更是能量的傳遞。</p>
            <p>麥法迪前身為亞洲頂級風鈴製造商，我們深知「音準」是療癒的基礎。不同於一般裝飾品，我們運用心理聲學原理，將每一支金屬管、風鈴、音束與水晶缽，校準至誤差 ±10Hz 以內的精密頻率。</p>
            <p>我們將金屬加工的「火」與「力」，昇華為撫慰人心的「聲」與「波」。這不只是製造，這是聲學的煉金術。</p>
          </div>
          <Link className="btn btn--primary" href="/story" style={{ marginTop: 32, display: "inline-flex" }}>
            閱讀完整故事 <span className="arrow" />
          </Link>
        </div>
        <div className="story__visual">
          <Placeholder label="品牌情境照 · 工藝與療癒" variant="warm" />
        </div>
      </div>

      <div className="container">
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
    </section>
  );
}
