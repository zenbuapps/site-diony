"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { PRODUCTS } from "@/data/products";

export default function Products() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const draggingRef = useRef(false);
  const startXRef = useRef(0);
  const startScrollRef = useRef(0);
  const movedRef = useRef(false);
  const [paused, setPaused] = useState(false);

  // Duplicate the list so the marquee loops seamlessly.
  const items = [...PRODUCTS, ...PRODUCTS];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let lastTime = performance.now();
    const SPEED = 0.04; // px per ms — gentle drift

    const tick = (time: number) => {
      const dt = time - lastTime;
      lastTime = time;
      const half = el.scrollWidth / 2;
      if (!draggingRef.current && !paused && half > 0) {
        el.scrollLeft += SPEED * dt;
      }
      if (half > 0) {
        if (el.scrollLeft >= half) el.scrollLeft -= half;
        else if (el.scrollLeft < 0) el.scrollLeft += half;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [paused]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    draggingRef.current = true;
    movedRef.current = false;
    startXRef.current = e.clientX;
    startScrollRef.current = trackRef.current.scrollLeft;
    e.currentTarget.classList.add("is-dragging");
    try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current || !trackRef.current) return;
    const dx = e.clientX - startXRef.current;
    if (Math.abs(dx) > 4) movedRef.current = true;
    trackRef.current.scrollLeft = startScrollRef.current - dx;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    draggingRef.current = false;
    e.currentTarget.classList.remove("is-dragging");
    try { e.currentTarget.releasePointerCapture(e.pointerId); } catch {}
  };

  const onClickCapture = (e: React.MouseEvent) => {
    // Suppress the navigation click when the user was dragging.
    if (movedRef.current) {
      e.preventDefault();
      e.stopPropagation();
      movedRef.current = false;
    }
  };

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
          <div className="products__hint">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M9 7 4 12l5 5" /><path d="M15 7l5 5-5 5" /><path d="M4 12h16" />
            </svg>
            <span className="zh">拖曳瀏覽</span><span className="en">Drag to browse</span>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="products-marquee"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="products-marquee__inner">
          {items.map((p, i) => (
            <Link
              key={`${p.slug}-${i}`}
              href={`/products/${p.slug}`}
              className="product-card products-marquee__card"
              draggable={false}
            >
              <div className="product-card__visual">
                <img
                  src={p.image}
                  alt={p.name}
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", pointerEvents: "none" }}
                />
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
    </section>
  );
}
