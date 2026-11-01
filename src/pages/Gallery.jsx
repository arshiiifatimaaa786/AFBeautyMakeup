import { useCallback, useEffect, useRef, useState } from 'react';
import { PageHero, BookingBand } from '../components/Extras.jsx';
import ImageSlot from '../components/ImageSlot.jsx';
import Reveal from '../components/Reveal.jsx';
import { CloseIcon, ChevronIcon } from '../components/Icons.jsx';
import { GALLERY } from '../data/site.js';

const RATIOS = { tall: '3 / 5', wide: '2 / 1', square: '1 / 1' };
const srcOf = (g) => `images/gallery/${g.id}.jpg`;

function Lightbox({ index, onClose, onStep }) {
  const g = GALLERY[index];
  const closeRef = useRef(null);

  useEffect(() => {
    const prevFocus = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onStep(1);
      if (e.key === 'ArrowLeft') onStep(-1);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prevFocus?.focus?.();
    };
  }, [onClose, onStep]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`${g.title} — enlarged`} onClick={onClose}>
      <button ref={closeRef} className="lb-btn lb-close" aria-label="Close" onClick={onClose}><CloseIcon /></button>
      <button className="lb-btn lb-prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); onStep(-1); }}><ChevronIcon dir="left" /></button>
      <button className="lb-btn lb-next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); onStep(1); }}><ChevronIcon dir="right" /></button>
      <div className="lb-stage" onClick={(e) => e.stopPropagation()}>
        <ImageSlot key={g.id} src={srcOf(g)} alt={`${g.title} by Arshi Fatima`} ratio="4 / 3" eager />
        <p className="lb-title">{g.title}</p>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + GALLERY.length) % GALLERY.length)), []);

  return (
    <>
      <PageHero eyebrow="Portfolio" title="Gallery" text="A look at makeup, hair, skincare and nail work. Select any image to view it larger." />
      <section className="section tight" aria-label="Portfolio gallery">
        <div className="container">
          <div className="masonry">
            {GALLERY.map((g, i) => (
              <Reveal key={g.id} className={`g-item ${g.size}`} delay={(i % 4) * 70}>
                <button type="button" className="g-btn" onClick={() => setOpen(i)} aria-label={`View ${g.title}`}>
                  <ImageSlot src={srcOf(g)} alt={`${g.title} by Arshi Fatima`} ratio={RATIOS[g.size]} />
                  <span className="g-cap">{g.title}</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <BookingBand />
      {open !== null && <Lightbox index={open} onClose={close} onStep={step} />}
    </>
  );
}