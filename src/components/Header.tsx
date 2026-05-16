"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IconGlobe } from "@/components/icons";

const BrandMark = () => (
  <div className="brand__mark">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="9" />
      <path d="M7 14 Q 12 7 17 14" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </svg>
  </div>
);

const NAV_LINKS = [
  { href: "/story",    zh: "品牌故事", en: "Brand Story" },
  { href: "/products", zh: "產品系列", en: "Products" },
  { href: "/oem",      zh: "OEM / ODM", en: "OEM / ODM" },
  { href: "/#science", zh: "聲音療癒", en: "Sound Healing" },
  { href: "/contact",  zh: "聯絡我們", en: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState<"zh" | "en">("zh");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as "zh" | "en") || "zh";
    setLang(saved);
    document.documentElement.dataset.lang = saved;
  }, []);

  const toggleLang = () => {
    const next = lang === "zh" ? "en" : "zh";
    setLang(next);
    document.documentElement.dataset.lang = next;
    localStorage.setItem("lang", next);
  };

  const label = (zh: string, en: string) => lang === "en" ? en : zh;

  return (
    <>
      <header className="site-header">
        <div className="container site-header__inner">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <BrandMark />
            <div className="brand__name">麥法迪<em>Dionysus</em></div>
          </Link>

          <nav className="nav">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} className="nav__item" href={l.href}>
                {label(l.zh, l.en)}
              </Link>
            ))}
          </nav>

          <div className="header__right">
            <button className="lang-btn" onClick={toggleLang} aria-label="切換語言">
              <IconGlobe size={14} />
              {lang === "zh" ? "EN" : "中文"}
            </button>
            <button type="button" className="btn btn--primary" data-inquiry>
              {label("產品詢價", "Product Inquiry")} <span className="arrow" />
            </button>
          </div>

          {/* Mobile: inquiry btn + hamburger */}
          <div style={{ marginLeft: "auto", alignItems: "center", gap: 10 }} className="mobile-actions">
            <button type="button" className="btn btn--primary" data-inquiry style={{ fontSize: 13, padding: "9px 16px" }}>
              {label("產品詢價", "Inquiry")}
            </button>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="開啟選單"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        <div className="mobile-menu__head">
          <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
            <BrandMark />
            <div className="brand__name">麥法迪<em>Dionysus</em></div>
          </Link>
          <button className="mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label="關閉選單">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              className="mobile-menu__link"
              href={l.href}
              onClick={() => setMenuOpen(false)}
            >
              {label(l.zh, l.en)}
            </Link>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <button className="lang-btn" onClick={toggleLang}>
            <IconGlobe size={14} />
            {lang === "zh" ? "Switch to English" : "切換中文"}
          </button>
          <button type="button" className="btn btn--primary" data-inquiry onClick={() => setMenuOpen(false)}>
            {label("產品詢價", "Inquiry")} <span className="arrow" />
          </button>
        </div>
      </div>

      {/* Overlay backdrop */}
      {menuOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 199, background: "rgba(0,0,0,0.3)", backdropFilter: "blur(4px)" }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
