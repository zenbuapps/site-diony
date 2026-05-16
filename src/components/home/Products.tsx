"use client";
import { useState } from "react";
import Link from "next/link";
import { IconArrowLeft, IconArrowRight } from "@/components/icons";
import { PRODUCTS } from "@/data/products";

const VISIBLE = 4;

export default function Products() {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, PRODUCTS.length - VISIBLE);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__head">
          <div>
            <div className="section-eyebrow" data-anim="blur" data-delay="0">Product Series</div>
            <h2 className="products__title" data-anim="blur" data-delay="120">
              產品系列 <span style={{ fontFamily: "var(--font-en)", fontStyle: "italic", color: "var(--ink-400)", fontSize: "0.7em" }}>· Collection</span>
            </h2>
          </div>
          <div className="products__nav">
            <button onClick={() => setIndex(Math.max(0, index - 1))} disabled={index === 0} aria-label="prev">
              <IconArrowLeft />
            </button>
            <button onClick={() => setIndex(Math.min(max, index + 1))} disabled={index >= max} aria-label="next">
              <IconArrowRight />
            </button>
          </div>
        </div>

        <div className="products__track-wrap">
          <div
            className="products__track"
            style={{ transform: `translateX(calc((-100% / ${VISIBLE}) * ${index} - ${(index * 28) / VISIBLE}px))` }}
          >
            {PRODUCTS.map((p, i) => (
              <Link className="product-card" key={i} href="/products" data-anim="blur" data-delay={`${200 + i * 80}`}>
                <div className="product-card__visual">
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
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Link className="btn btn--ghost" href="/products">查看全部產品 <span className="arrow" /></Link>
        </div>
      </div>
    </section>
  );
}
