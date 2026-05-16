import type { Metadata } from "next";
import LeafSprig from "@/components/LeafSprig";
import ContactForm from "@/components/contact/ContactForm";
import { IconMail, IconPhone, IconPin, IconFB, IconIG, IconYT, IconLinkedIn } from "@/components/icons";

export const metadata: Metadata = {
  title: "聯絡我們｜麥法迪 Dionysus",
  description: "與麥法迪國際聯絡，洽詢 OEM/ODM 合作、產品詢價或其他業務。",
};

export default function ContactPage() {
  return (
    <main>
      <section style={{ padding: "100px 0 120px", position: "relative", overflow: "hidden" }}>
        <LeafSprig style={{ position: "absolute", left: -60, top: 80, color: "var(--green-300)" }} scale={1.1} rotate={-8} />
        <div className="container">
          <div className="section-eyebrow">Contact Us</div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(40px,4vw,64px)", fontWeight: 500, color: "var(--green-900)", margin: "0 0 20px", lineHeight: 1.2 }}>
            展開合作對話
          </h1>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, marginTop: 64 }}>
            {/* 聯絡資訊 */}
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--green-900)", margin: "0 0 28px" }}>聯絡資訊</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, fontSize: 15, color: "var(--ink-700)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <IconMail /><span>service@dionysus-intl.com</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <IconPhone /><span>+886 4 2337 1789</span>
                </div>
                <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ marginTop: 3, flexShrink: 0, display: "inline-flex", color: "var(--green-700)" }}><IconPin /></span>
                  <span>台灣 台中市 烏日區 中山路三段 123 號</span>
                </div>
              </div>

              <div style={{ marginTop: 40 }}>
                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--green-900)", margin: "0 0 16px" }}>社群媒體</h3>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { Icon: IconFB, label: "Facebook" },
                    { Icon: IconIG, label: "Instagram" },
                    { Icon: IconYT, label: "YouTube" },
                    { Icon: IconLinkedIn, label: "LinkedIn" },
                  ].map(({ Icon, label }) => (
                    <a key={label} href="#" aria-label={label} style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--line)", display: "grid", placeItems: "center", color: "var(--green-800)", transition: "all .25s" }}>
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>

              {/* 地圖 placeholder */}
              <div style={{ marginTop: 40, height: 200, borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <div className="ph ph--warm" style={{ height: "100%" }}>
                  <span className="ph__label">台中市 烏日區 地圖</span>
                </div>
              </div>
            </div>

            {/* 表單 */}
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--green-900)", margin: "0 0 28px" }}>傳送訊息</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
