import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageSlot from '../components/ImageSlot.jsx';
import Reveal from '../components/Reveal.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import OfferCards from '../components/OfferCards.jsx';
import { ProductsUsed, ServiceNotes, BookingBand } from '../components/Extras.jsx';
import { SITE } from '../data/site.js';

export function Hero() {
  const plx = useRef(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (window.scrollY < 900 && plx.current) plx.current.style.setProperty('--py', `${window.scrollY * 0.06}px`);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero" aria-labelledby="hero-h">
      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">Professional Cosmetologist</p>
            <h1 className="h1" id="hero-h">Beauty That <em>Celebrates</em> You.</h1>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lead">
              Discover personalised beauty, expert hair care, and professional makeup artistry designed to make you look and feel your very best.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Book Your Appointment</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
            <p className="hero-tag">{SITE.tagline}</p>
          </Reveal>
        </div>
        <Reveal className="hero-media" delay={200}>
          <div className="hero-frame">
            <div className="hero-plx" ref={plx}>
              <ImageSlot src="images/hero/main1st.jpeg" alt="Makeup portrait by Arshi Fatima" ratio="4 / 5" eager />
            </div>
          </div>
          <div className="hero-badge">{SITE.homeService}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutIntro({ showButton = true }) {
  return (
    <section className="section" aria-labelledby="about-h">
      <div className="container split">
        <Reveal className="split-media">
          <ImageSlot src="images/hero/main2nd.jpeg" alt="Portrait of Arshi Fatima, Professional Cosmetologist" ratio="4 / 5" />
        </Reveal>
        <Reveal className="split-copy" delay={120}>
          <p className="eyebrow">Professional Cosmetologist</p>
          <h2 className="h2" id="about-h">Your Beauty, <em>Our Passion.</em></h2>
          <span className="gold-rule" aria-hidden="true" />
          <p className="lead">
            At Arshi Fatima Beauty &amp; Makeup, beauty is about more than appearance. It is about confidence, care, and feeling your best. From professional makeup artistry to personalised hair and skin treatments, every service is designed with attention to detail and your individual beauty in mind.
          </p>
          {showButton && <Link to="/services" className="btn btn-primary">View Our Services</Link>}
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <section className="section alt offer-section" aria-labelledby="what-h">
        <div className="container">
          <SectionHeading eyebrow="What we offer" title="Beauty, Hair & Makeup" id="what-h" text="Choose a category to see every service and its price." />
          <OfferCards />
        </div>
      </section>
      <ProductsUsed />
      <ServiceNotes />
      <BookingBand />
    </>
  );
}