import Link from "next/link";
import { IconMail, IconPhone, IconPin, IconFB, IconIG, IconYT, IconLinkedIn, IconArrowRight } from "@/components/icons";

const BrandMark = () => (
  <div className="brand__mark">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 14 Q 12 7 17 14" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  </div>
);

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="brand">
              <BrandMark />
              <div className="brand__name">麥法迪<em>Dionysus</em></div>
            </Link>
            <p className="footer__about">
              麥法迪國際有限公司<br />
              Dionysus International Co., Ltd.<br />
              聲學煉金術 · 和諧的傳遞者
            </p>
            <div className="footer__social">
              <a href="#" aria-label="Facebook"><IconFB /></a>
              <a href="#" aria-label="Instagram"><IconIG /></a>
              <a href="#" aria-label="YouTube"><IconYT /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
            </div>
          </div>

          <div>
            <h5 className="footer__heading">Navigation</h5>
            <ul className="footer__list">
              <li><Link href="/story">品牌故事</Link></li>
              <li><Link href="/products">產品系列</Link></li>
              <li><Link href="/oem">OEM / ODM</Link></li>
              <li><Link href="/#science">聲音療癒</Link></li>
              <li><Link href="/contact">聯絡我們</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="footer__heading">Contact</h5>
            <div className="footer__contact">
              <div className="row"><IconMail /><span>service@dionysus-intl.com</span></div>
              <div className="row"><IconPhone /><span>+886 4 2337 1789</span></div>
              <div className="row"><IconPin /><span>台灣 台中市 烏日區 中山路三段 123 號</span></div>
            </div>
          </div>

          <div>
            <h5 className="footer__heading">Newsletter</h5>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(246,242,232,0.55)", margin: "0 0 14px" }}>
              訂閱我們，獲得新品、療癒指南與品牌動態。
            </p>
            <div style={{ display: "flex", border: "1px solid rgba(246,242,232,0.18)", borderRadius: 999, overflow: "hidden" }}>
              <input
                placeholder="your@email.com"
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", padding: "12px 16px", color: "var(--paper)", fontSize: 13, fontFamily: "inherit" }}
              />
              <button style={{ background: "var(--warm-600)", color: "var(--paper)", padding: "0 16px" }}>
                <IconArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <span>© 2026 Dionysus International Co., Ltd. · All Rights Reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="#">隱私政策</a>
            <a href="#">使用條款</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
