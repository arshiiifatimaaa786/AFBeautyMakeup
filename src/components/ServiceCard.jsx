import { useEffect, useRef, useState } from 'react';
import { serviceWhatsappLink } from '../data/services.js';
import Reveal from './Reveal.jsx';

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Animated price: counts up from 0 to the real value the first time it scrolls into view.
 * Works with any price text ("₹30", "₹1,500", "₹500–₹800"): every number inside is animated,
 * everything else (currency symbol, dashes, words) is kept exactly as written.
 */
function AnimatedPrice({ text, as: Tag = 'span', className = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    setDisplay(text);
    const el = ref.current;
    if (!el || !/\d/.test(text) || prefersReducedMotion() || !('IntersectionObserver' in window)) return undefined;

    const parts = text.split(/(\d[\d,]*)/); // odd indexes are the numbers
    const render = (p) =>
      parts
        .map((part, i) => {
          if (i % 2 === 0) return part;
          const target = Number(part.replace(/,/g, ''));
          const val = Math.round(target * p);
          return part.includes(',') ? val.toLocaleString('en-IN') : String(val);
        })
        .join('');

    let raf = 0;
    let started = false;
    setDisplay(render(0));

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started) return;
        started = true;
        io.disconnect();
        const t0 = performance.now();
        const dur = 1100;
        const tick = (now) => {
          const k = Math.min((now - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - k, 3);
          setDisplay(render(eased));
          if (k < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [text]);

  return <Tag ref={ref} className={className} aria-label={text}>{display}</Tag>;
}

/** Reusable service card (image-free): number, name, description, price(s), Book Now. */
export default function ServiceCard({ service, index, delay = 0, variant = '' }) {
  const { id, name, description, price, priceNote, tiers } = service;
  const num = index != null ? String(index).padStart(2, '0') : null;

  // Soft spotlight that follows the cursor
  const onMove = (e) => {
    if (e.pointerType === 'touch') return;
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <Reveal className="svc-cell" delay={delay}>
      <article className={`svc ${variant}`} onPointerMove={onMove}>
        <span className="svc-spot" aria-hidden="true" />
        {num && <span className="svc-mark" aria-hidden="true">{num}</span>}

        <div className="svc-top svc-rise" style={{ '--k': 0 }} aria-hidden="true">
          <span className="svc-orn" />
          {num && <span className="svc-no">No. {num}</span>}
        </div>

        <h3 className="svc-title svc-rise" style={{ '--k': 1 }}>{name}</h3>
        <p className="svc-desc svc-rise" style={{ '--k': 2 }}>{description}</p>

        {tiers ? (
          <ul className="svc-tiers svc-rise" style={{ '--k': 3 }} aria-label={`${name} prices`}>
            {tiers.map((t) => (
              <li key={t.label}>
                <span className="svc-label">{t.label}</span>
                <i className="svc-leader" aria-hidden="true" />
                <AnimatedPrice as="b" text={t.price} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="svc-price svc-rise" style={{ '--k': 3 }}>
            <span className="svc-label">{priceNote || 'Price'}</span>
            <i className="svc-leader" aria-hidden="true" />
            <AnimatedPrice as="strong" text={price} />
          </div>
        )}

        <a
          className="svc-btn svc-rise"
          style={{ '--k': 4 }}
          href={serviceWhatsappLink(service)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Book ${name} on WhatsApp`}
        >
          <span>Book Now</span>
          <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 6h21M17 1l5 5-5 5" />
          </svg>
        </a>
      </article>
    </Reveal>
  );
}

export function CardGrid({ items, cols = '', variant }) {
  return (
    <div className={`grid svc-grid ${cols}`}>
      {items.map((it, i) => (
        <ServiceCard key={it.id} service={it} index={i + 1} variant={variant} delay={(i % 3) * 90} />
      ))}
    </div>
  );
}