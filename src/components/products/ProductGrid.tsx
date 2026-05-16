import { IconArrowRight } from "@/components/icons";
import { PRODUCTS } from "@/data/products";

export default function ProductGrid() {
  return (
    <div className="product-grid">
      {PRODUCTS.map((p, i) => (
        <div key={i} className="product-card" style={{ flex: "none" }}>
          <div className="product-card__visual" style={{ aspectRatio: "1/1", borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: 20 }}>
            <img src={p.image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
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
