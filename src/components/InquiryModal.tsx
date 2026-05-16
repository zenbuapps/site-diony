"use client";
import { useEffect, useState, useCallback } from "react";
import { PRODUCTS } from "@/data/products";

type Lang = "zh" | "en";

export default function InquiryModal() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("zh");
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string[]>([]);
  const [seedProduct, setSeedProduct] = useState<string | null>(null);

  const openModal = useCallback((seed?: string | null) => {
    setSubmitted(false);
    if (seed) {
      setSelected((prev) => (prev.includes(seed) ? prev : [...prev, seed]));
      setSeedProduct(seed);
    }
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const detectLang = () => {
      const v = (document.documentElement.dataset.lang as Lang) || "zh";
      setLang(v);
    };
    detectLang();

    const onOpen = (e: Event) => {
      const ce = e as CustomEvent<{ product?: string }>;
      openModal(ce.detail?.product ?? null);
      detectLang();
    };
    window.addEventListener("inquiry:open", onOpen as EventListener);

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const trigger = target.closest<HTMLElement>("[data-inquiry]");
      if (!trigger) return;
      e.preventDefault();
      const product = trigger.dataset.inquiryProduct || null;
      openModal(product);
      detectLang();
    };
    document.addEventListener("click", onClick);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const obs = new MutationObserver(detectLang);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });

    return () => {
      window.removeEventListener("inquiry:open", onOpen as EventListener);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
      obs.disconnect();
    };
  }, [openModal]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggleProduct = (slug: string) => {
    setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
  };

  const t = (zh: string, en: string) => (lang === "en" ? en : zh);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productNames = selected
      .map((slug) => PRODUCTS.find((p) => p.slug === slug))
      .filter(Boolean)
      .map((p) => `${p!.name} (${p!.en})`)
      .join(", ");

    const subject = encodeURIComponent(`[麥法迪詢價] ${name || "新詢價"}${productNames ? " — " + productNames : ""}`);
    const bodyLines = [
      `姓名 / Name: ${name}`,
      `Email: ${email}`,
      `公司 / Company: ${company}`,
      `國家 / Country: ${country}`,
      `預估數量 / Quantity: ${quantity}`,
      `感興趣產品 / Products of interest: ${productNames || "(未選擇)"}`,
      "",
      "訊息 / Message:",
      message,
    ].join("\n");
    const body = encodeURIComponent(bodyLines);
    window.location.href = `mailto:contact@dionysus.com.tw?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  if (!open) return null;

  return (
    <div className="inquiry-overlay" role="dialog" aria-modal="true" aria-labelledby="inquiry-title" onClick={closeModal}>
      <div className="inquiry-modal" onClick={(e) => e.stopPropagation()}>
        <button className="inquiry-modal__close" onClick={closeModal} aria-label={t("關閉", "Close")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="inquiry-modal__head">
              <div className="section-eyebrow">{t("產品詢價", "Product Inquiry")}</div>
              <h2 id="inquiry-title" className="inquiry-modal__title">
                {t("告訴我們您的需求", "Tell us about your needs")}
              </h2>
              <p className="inquiry-modal__lead">
                {t(
                  "填寫以下表單，我們將在 24 小時內回覆，協助您打造專屬的聲音療癒產品。",
                  "Fill out the form below and our team will respond within 24 hours."
                )}
              </p>
            </div>

            <form className="inquiry-form" onSubmit={handleSubmit}>
              <div className="inquiry-form__section">
                <div className="inquiry-form__section-label">{t("感興趣的產品系列", "Products of interest")}</div>
                <div className="inquiry-products">
                  {PRODUCTS.map((p) => {
                    const checked = selected.includes(p.slug);
                    return (
                      <label key={p.slug} className={`inquiry-product${checked ? " is-selected" : ""}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleProduct(p.slug)}
                        />
                        <span className="inquiry-product__thumb">
                          <img src={p.image} alt={p.name} />
                        </span>
                        <span className="inquiry-product__meta">
                          <span className="inquiry-product__name">{p.name}</span>
                          <span className="inquiry-product__en">{p.en}</span>
                        </span>
                        <span className="inquiry-product__check" aria-hidden>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="5 12 10 17 19 7" />
                          </svg>
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="inquiry-form__grid">
                <label className="inquiry-field">
                  <span>{t("姓名", "Name")} *</span>
                  <input required value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label className="inquiry-field">
                  <span>Email *</span>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label className="inquiry-field">
                  <span>{t("公司", "Company")}</span>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} />
                </label>
                <label className="inquiry-field">
                  <span>{t("國家 / 地區", "Country / Region")}</span>
                  <input value={country} onChange={(e) => setCountry(e.target.value)} />
                </label>
                <label className="inquiry-field inquiry-field--full">
                  <span>{t("預估數量 (MOQ)", "Estimated quantity (MOQ)")}</span>
                  <input value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder={t("例：100 件、500 件起", "e.g. 100 pcs, 500+ pcs")} />
                </label>
                <label className="inquiry-field inquiry-field--full">
                  <span>{t("詳細需求", "Details")}</span>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t("品牌定位、客製需求、目標市場…", "Brand positioning, customization, target market…")} />
                </label>
              </div>

              <div className="inquiry-form__actions">
                <button type="button" className="btn btn--ghost" onClick={closeModal}>
                  {t("取消", "Cancel")}
                </button>
                <button type="submit" className="btn btn--primary">
                  {t("送出詢價", "Send Inquiry")} <span className="arrow" />
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="inquiry-success">
            <div className="inquiry-success__icon" aria-hidden>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                <circle cx="12" cy="12" r="10" />
                <polyline points="7 13 10 16 17 9" />
              </svg>
            </div>
            <h3 className="inquiry-success__title">{t("詢價已寄出", "Inquiry sent")}</h3>
            <p className="inquiry-success__lead">
              {t(
                "感謝您的來信，我們已開啟您的郵件程式。如未自動開啟，請直接寄到 contact@dionysus.com.tw。",
                "Thanks for reaching out. Your email client should have opened — if not, please write to contact@dionysus.com.tw."
              )}
            </p>
            <button className="btn btn--primary" onClick={closeModal}>
              {t("關閉視窗", "Close")} <span className="arrow" />
            </button>
          </div>
        )}
      </div>
      {seedProduct ? <input type="hidden" value={seedProduct} readOnly /> : null}
    </div>
  );
}
