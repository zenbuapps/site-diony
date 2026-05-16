"use client";
import { useState } from "react";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { IconArrowLeft, IconArrowRight } from "@/components/icons";

export const PRODUCTS = [
  { name: "頌缽", en: "Singing Bowls", tag: "Tibetan · Hand-hammered", note: "手工敲製 · 銅合金" },
  { name: "風鈴", en: "Wind Chimes", tag: "Asia's #1 Manufacturer", note: "精準調音 · 鋁合金" },
  { name: "手搖音束", en: "Sound Sticks", tag: "Pure Tone · Resonance", note: "便攜療癒 · 黃銅" },
  { name: "水晶缽", en: "Crystal Bowls", tag: "Quartz · Pure Frequency", note: "石英晶體 · 純音" },
  { name: "音叉", en: "Tuning Forks", tag: "Therapy Grade · 128–4096Hz", note: "音叉療法級" },
  { name: "頌缽棒組", en: "Mallets & Strikers", tag: "Wood · Felt · Suede", note: "搭配各類缽具" },
];

const VISIBLE = 4;

export default function Products() {
  const [index, setIndex] = useState(0);
  const max = Math.max(0, PRODUCTS.length - VISIBLE);

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__head">
          <div>
            <div className="section-eyebrow">Product Series</div>
            <h2 className="products__title">
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
              <Link className="product-card" key={i} href="/products">
                <div className="product-card__visual">
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
