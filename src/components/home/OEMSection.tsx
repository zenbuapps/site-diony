import Link from "next/link";
import { IconCustomize, IconDevelop, IconTune, IconGlobe2 } from "@/components/icons";

const ITEMS = [
  { icon: <IconCustomize />, title: "品牌客製", desc: "打造專屬品牌識別與產品線。", num: "01" },
  { icon: <IconDevelop />, title: "產品開發", desc: "從材質選擇到結構設計，全程協作。", num: "02" },
  { icon: <IconTune />, title: "精準調音", desc: "科學調音，穩定一致的音準保證。", num: "03" },
  { icon: <IconGlobe2 />, title: "全球貿易", desc: "彈性產能，準時交付至全球市場。", num: "04" },
];

export default function OEMSection() {
  return (
    <section className="oem" id="oem">
      <div className="container">
        <div className="oem__head">
          <div>
            <div className="section-eyebrow">OEM / ODM</div>
            <h2 className="oem__title">從概念到成品，<br />成就您的品牌願景。</h2>
          </div>
          <div>
            <p className="oem__lead">提供一站式客製化服務，結合精密製造與聲學專業，協助您打造具有市場價值的聲音療癒產品。我們也是您海外擴展時最可靠的供應與調音夥伴。</p>
            <Link className="btn btn--primary" href="/oem">了解 OEM / ODM 服務 <span className="arrow" /></Link>
          </div>
        </div>
        <div className="oem__grid">
          {ITEMS.map((it, i) => (
            <div className="oem-card" key={i}>
              <div className="oem-card__num">{it.num}</div>
              <div className="oem-card__icon">{it.icon}</div>
              <h4 className="oem-card__title">{it.title}</h4>
              <p className="oem-card__desc">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
