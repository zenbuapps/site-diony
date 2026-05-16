import Link from "next/link";
import { IconCustomize, IconDevelop, IconTune, IconGlobe2 } from "@/components/icons";

const ITEMS = [
  { icon: <IconCustomize />, zh_title: "品牌客製", en_title: "Brand Customization", zh_desc: "打造專屬品牌識別與產品線。", en_desc: "Build a unique brand identity and product line.", num: "01" },
  { icon: <IconDevelop />, zh_title: "產品開發", en_title: "Product Development", zh_desc: "從材質選擇到結構設計，全程協作。", en_desc: "Full collaboration from material selection to structural design.", num: "02" },
  { icon: <IconTune />, zh_title: "精準調音", en_title: "Precision Tuning", zh_desc: "科學調音，穩定一致的音準保證。", en_desc: "Scientific tuning with consistent, guaranteed pitch accuracy.", num: "03" },
  { icon: <IconGlobe2 />, zh_title: "全球貿易", en_title: "Global Trade", zh_desc: "彈性產能，準時交付至全球市場。", en_desc: "Flexible capacity, on-time delivery to global markets.", num: "04" },
];

export default function OEMSection() {
  return (
    <section className="oem" id="oem">
      <div className="container">
        <div className="oem__head">
          <div>
            <div className="section-eyebrow" data-anim="blur" data-delay="0">OEM / ODM</div>
            <h2 className="oem__title" data-anim="blur" data-delay="120">
              <span className="zh">從概念到成品，<br />成就您的品牌願景。</span>
              <span className="en">From Concept to Product,<br />Realizing Your Brand Vision.</span>
            </h2>
          </div>
          <div data-anim="blur" data-delay="200">
            <p className="oem__lead">
              <span className="zh">提供一站式客製化服務，結合精密製造與聲學專業，協助您打造具有市場價值的聲音療癒產品。我們也是您海外擴展時最可靠的供應與調音夥伴。</span>
              <span className="en">We offer one-stop customization services, combining precision manufacturing with acoustic expertise to help you create market-ready sound healing products — your most reliable supply and tuning partner for global expansion.</span>
            </p>
            <Link className="btn btn--primary" href="/oem">
              <span className="zh">了解 OEM / ODM 服務</span><span className="en">Explore OEM / ODM Services</span> <span className="arrow" />
            </Link>
          </div>
        </div>
        <div className="oem__grid">
          {ITEMS.map((it, i) => (
            <div className="oem-card" key={i} data-anim="blur" data-delay={i * 80}>
              <div className="oem-card__num">{it.num}</div>
              <div className="oem-card__icon">{it.icon}</div>
              <h4 className="oem-card__title">
                <span className="zh">{it.zh_title}</span>
                <span className="en">{it.en_title}</span>
              </h4>
              <p className="oem-card__desc">
                <span className="zh">{it.zh_desc}</span>
                <span className="en">{it.en_desc}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
