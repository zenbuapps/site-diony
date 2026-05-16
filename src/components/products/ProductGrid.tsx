import Placeholder from "@/components/Placeholder";
import { IconArrowRight } from "@/components/icons";
import { PRODUCTS } from "@/components/home/Products";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((p, i) => (
        <div key={i} className="product-card" style={{ flex: "none" }}>
          <div className="product-card__visual" style={{ aspectRatio: "1/1", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 20 }}>
            <Placeholder label={p.en.toUpperCase()} variant={i % 2 === 1 ? "warm" : "default"} />
          </div>
          <div className="product-card__row">
            <div>
              <div className="product-card__name">{p.name}</div>
              <div className="product-card__en">{p.en}</div>
            </div>
            <div className="product-card__arrow"><IconArrowRight size={14} /></div>
          </div>
          <div className="product-card__tag">{p.tag}</div>
          <div style={{ marginTop: 10, fontSize: 13, color: "var(--ink-500)" }}>{p.note}</div>
        </div>
      ))}
    </div>
  );
}
