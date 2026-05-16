import Link from "next/link";
import { IconGlobe, IconChevron } from "@/components/icons";

const BrandMark = () => (
  <div className="brand__mark">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 14 Q 12 7 17 14" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  </div>
);

export default function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand">
          <BrandMark />
          <div className="brand__name">麥法迪<em>Dionysus</em></div>
        </Link>

        <nav className="nav">
          <Link className="nav__item" href="/story">品牌故事</Link>
          <Link className="nav__item" href="/products">
            產品系列 <IconChevron size={12} />
          </Link>
          <Link className="nav__item" href="/oem">OEM / ODM</Link>
          <Link className="nav__item" href="/#science">聲音療癒</Link>
          <Link className="nav__item" href="/contact">聯絡我們</Link>
        </nav>

        <div className="header__right">
          <span className="lang">
            <IconGlobe size={14} /> 繁中 <IconChevron size={12} />
          </span>
          <Link className="btn btn--primary" href="/contact">
            聯絡我們 <span className="arrow" />
          </Link>
        </div>
      </div>
    </header>
  );
}
