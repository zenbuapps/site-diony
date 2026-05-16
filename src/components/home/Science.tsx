import { IconBrain, IconFrequency, IconCrystal } from "@/components/icons";

const FEATURES = [
  {
    num: "01 / Theory",
    icon: <IconBrain />,
    zh_title: "運用心理聲學\n(Psychoacoustics)",
    en_title: "Applied Psychoacoustics",
    zh_desc: "研究人耳對頻率、共鳴與和諧的感知，創造舒適共鳴。",
    en_desc: "Studying how human ears perceive frequency, resonance, and harmony to create comfortable resonance.",
  },
  {
    num: "02 / Precision",
    icon: <IconFrequency />,
    zh_title: "頻率校準至\n誤差 ±10Hz 以內",
    en_title: "Frequency Calibrated\nto ±10Hz Tolerance",
    zh_desc: "每一件產品都通過儀器校正，穩定一致，精準可靠。",
    en_desc: "Every product undergoes instrument calibration for consistent, reliable, precision performance.",
  },
  {
    num: "03 / Craft",
    icon: <IconCrystal />,
    zh_title: "這不只是製造，\n是聲學的煉金術。",
    en_title: "Not Just Manufacturing —\nSonic Alchemy.",
    zh_desc: "每一次敲擊都蘊含科學與匠心的結晶，能量純粹。",
    en_desc: "Every strike embodies the crystallization of science and craftsmanship — pure energy.",
  },
];

export default function Science() {
  return (
    <section className="science" id="science">
      <div className="container">
        <div className="science__panel">
          <div className="science__inner">
            <div>
              <div className="section-eyebrow section-eyebrow--light" data-anim="blur" data-delay="0">The Science</div>
              <h2 className="science__title" data-anim="blur" data-delay="120">
                <span className="zh">聲學精準，<br />療癒的科學基礎。</span>
                <span className="en">Acoustic Precision:<br />The Science of Healing.</span>
              </h2>
              <p className="science__lead" data-anim="blur" data-delay="240">
                <span className="zh">我們將科學與藝術結合，確保每一個聲音都能帶來穩定、深層的療癒體驗。</span>
                <span className="en">We unite science and art to ensure every sound delivers a stable, deeply healing experience.</span>
              </p>
              <div data-anim="fade" data-delay="360">
                <a className="btn btn--warm" href="#">
                  <span className="zh">了解更多</span><span className="en">Learn More</span> <span className="arrow" />
                </a>
              </div>
            </div>
            <div className="science__features">
              {FEATURES.map((f, i) => (
                <div key={i} className="feature" data-anim="blur" data-delay={120 + i * 120}>
                  <div className="feature__num">{f.num}</div>
                  <div className="feature__icon">{f.icon}</div>
                  <h4 className="feature__title" style={{ whiteSpace: "pre-line" }}>
                    <span className="zh">{f.zh_title}</span>
                    <span className="en">{f.en_title}</span>
                  </h4>
                  <p className="feature__desc">
                    <span className="zh">{f.zh_desc}</span>
                    <span className="en">{f.en_desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
