import Link from "next/link";
import LeafSprig from "@/components/LeafSprig";
import { IconLeaf, IconWave, IconHeart, IconGlobeFilled } from "@/components/icons";

const PILLARS = [
  { icon: <IconLeaf size={18} />, zh_title: "自然共鳴", en_title: "Natural Resonance", zh_desc: "取材自然原料，讓聲音回歸本真。", en_desc: "Natural materials that let sound return to its purest form." },
  { icon: <IconWave size={18} />, zh_title: "聲音療癒", en_title: "Sound Healing", zh_desc: "精密科學調音，傳遞和諧的能量。", en_desc: "Precision-tuned frequencies that transmit harmonious energy." },
  { icon: <IconHeart size={18} />, zh_title: "匠心製作", en_title: "Artisan Craft", zh_desc: "手作工藝把關，品質如一可靠。", en_desc: "Handcrafted quality control you can always rely on." },
  { icon: <IconGlobeFilled size={18} />, zh_title: "全球共享", en_title: "Global Reach", zh_desc: "讓和諧的聲音通往全世界。", en_desc: "Bringing harmonious sound to every corner of the world." },
];

export default function Story() {
  return (
    <section className="story" id="story">
      <LeafSprig style={{ position: "absolute", left: -40, top: 60, color: "var(--green-300)" }} scale={1.1} rotate={-8} />
      <LeafSprig style={{ position: "absolute", right: -40, top: 240, color: "var(--green-300)" }} scale={0.9} rotate={172} />

      <div className="container story__grid">
        <div>
          <div className="section-eyebrow" data-anim="blur" data-delay="0">Brand Story</div>
          <h2 className="story__title" data-anim="blur" data-delay="120">
            <span className="zh">從工業精度，<br />到心靈維度。</span>
            <span className="en">From Industrial Precision<br />to Spiritual Dimension.</span>
          </h2>
          <div className="story__body" data-anim="blur" data-delay="260">
            <p>
              <span className="zh">聲音，不只是聽覺的感受，更是能量的傳遞。</span>
              <span className="en">Sound is not merely an auditory experience — it is the transmission of energy itself.</span>
            </p>
            <p>
              <span className="zh">麥法迪前身為亞洲頂級風鈴製造商，我們深知「音準」是療癒的基礎。不同於一般裝飾品，我們運用心理聲學原理，將每一支金屬管、風鈴、音束與水晶缽，校準至誤差 ±10Hz 以內的精密頻率。</span>
              <span className="en">Dionysus evolved from Asia&apos;s premier wind chime manufacturer. We know that pitch accuracy is the foundation of healing. Unlike decorative products, we apply psychoacoustic principles to calibrate every metal tube, wind chime, sound stick, and crystal bowl to within ±10Hz precision.</span>
            </p>
            <p>
              <span className="zh">我們將金屬加工的「火」與「力」，昇華為撫慰人心的「聲」與「波」。這不只是製造，這是聲學的煉金術。</span>
              <span className="en">We transform the &quot;fire&quot; and &quot;force&quot; of metalworking into the &quot;sound&quot; and &quot;waves&quot; that soothe the soul. This is not just manufacturing — this is sonic alchemy.</span>
            </p>
          </div>
          <div data-anim="fade" data-delay="400">
            <Link className="btn btn--primary" href="/story" style={{ marginTop: 32, display: "inline-flex" }}>
              <span className="zh">閱讀完整故事</span><span className="en">Read Full Story</span> <span className="arrow" />
            </Link>
          </div>
        </div>
        <div className="story__visual" data-anim="img" data-delay="60">
          <img src="/images/story.png" alt="台灣手工銅器工藝" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        </div>
      </div>

      <div className="container">
        <div className="pillars">
          {PILLARS.map((p, i) => (
            <div key={i} data-anim="blur" data-delay={i * 100}>
              <div className="pillar__icon">{p.icon}</div>
              <h4 className="pillar__title">
                <span className="zh">{p.zh_title}</span>
                <span className="en">{p.en_title}</span>
              </h4>
              <p className="pillar__desc">
                <span className="zh">{p.zh_desc}</span>
                <span className="en">{p.en_desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
