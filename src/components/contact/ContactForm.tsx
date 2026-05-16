"use client";

export default function ContactForm() {
  return (
    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <input type="text" placeholder="您的姓名 *" required />
        <input type="email" placeholder="Email *" required />
      </div>
      <input type="text" placeholder="公司 / 品牌名稱" />
      <input type="text" placeholder="詢問主題（OEM 合作 / 產品詢價 / 其他）" />
      <textarea placeholder="請描述您的需求或問題..." rows={5} />
      <button type="submit" className="btn btn--primary" style={{ alignSelf: "flex-start" }}>
        送出訊息 <span className="arrow" />
      </button>
    </form>
  );
}
