import { IconBrain, IconFrequency, IconCrystal } from "@/components/icons";

const FEATURES = [
  { num: "01 / Theory", icon: <IconBrain />, title: "運用心理聲學\n(Psychoacoustics)", desc: "研究人耳對頻率、共鳴與和諧的感知，創造舒適共鳴。" },
  { num: "02 / Precision", icon: <IconFrequency />, title: "頻率校準至\n誤差 ±10Hz 以內", desc: "每一件產品都通過儀器校正，穩定一致，精準可靠。" },
  { num: "03 / Craft", icon: <IconCrystal />, title: "這不只是製造，\n是聲學的煉金術。", desc: "每一次敲擊都蘊含科學與匠心的結晶，能量純粹。" },
];

export default function Science() {
  return (
    <section className="science" id="science">
      <div className="container">
        <div className="science__panel">
          <div className="science__inner">
            <div>
              <div className="section-eyebrow section-eyebrow--light">The Science</div>
              <h2 className="science__title">聲學精準，<br />療癒的科學基礎。</h2>
              <p className="science__lead">我們將科學與藝術結合，確保每一個聲音都能帶來穩定、深層的療癒體驗。</p>
              <a className="btn btn--warm" href="#">了解更多 <span className="arrow" /></a>
            </div>
            <div className="science__features">
              {FEATURES.map((f, i) => (
                <div key={i} className="feature">
                  <div className="feature__num">{f.num}</div>
                  <div className="feature__icon">{f.icon}</div>
                  <h4 className="feature__title" style={{ whiteSpace: "pre-line" }}>{f.title}</h4>
                  <p className="feature__desc">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
