import { Link } from 'react-router-dom';
import { BRANDS, NOTES, SITE, whatsappLink, mailtoLink } from '../data/site.js';
import { NOTE_ICONS } from './Icons.jsx';
import Reveal from './Reveal.jsx';
import SectionHeading from './SectionHeading.jsx';

export function ServiceNotes() {
  return (
    <section className="section alt" aria-labelledby="notes-h">
      <div className="container">
        <SectionHeading eyebrow="Good to know" title="Service Notes" id="notes-h" />
        <div className="notes">
          {NOTES.map((n, i) => {
            const Icon = NOTE_ICONS[n.icon];
            return (
              <Reveal key={n.title} className="note" delay={i * 80}>
                <span className="note-icon"><Icon width={26} height={26} /></span>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProductsUsed() {
  return (
    <section className="section" aria-labelledby="prod-h">
      <div className="container">
        <SectionHeading
          eyebrow="Professional products"
          title="Products We Use"
          text="Professional-grade products are used across beauty and hair treatments."
          id="prod-h"
        />
        <ul className="brands">
          {BRANDS.map((b, i) => {
            const main = b.name.replace(/\s*Professional$/i, '');
            return (
              <Reveal as="li" key={b.id} className="brand-card" delay={i * 80}>
                <span className="brand-orn" aria-hidden="true" />
                <span className="brand-name">{main}</span>
                <span className="brand-tag">Professional</span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export function BookingBand({ title = 'Ready to look and feel your best?', text = 'Send an enquiry or message on WhatsApp to arrange your appointment.' }) {
  // Last three words of the title are set in gold italics
  const words = title.split(' ');
  const head = words.slice(0, -3).join(' ');
  const tail = words.slice(-3).join(' ');
  return (
    <section className="band" aria-labelledby="band-h">
      <div className="container">
        <Reveal className="band-panel">
          <span className="band-glow g1" aria-hidden="true" />
          <span className="band-glow g2" aria-hidden="true" />
          <span className="band-frame" aria-hidden="true" />
          <svg className="band-star s1" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" /></svg>
          <svg className="band-star s2" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" /></svg>
          <svg className="band-star s3" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" /></svg>

          <div className="band-content">
            <p className="band-eyebrow">Your Appointment</p>
            <h2 className="band-title" id="band-h">{head} <em>{tail}</em></h2>
            <span className="band-rule" aria-hidden="true" />
            <p className="band-text">{text}</p>
            <div className="band-actions">
              <Link to="/contact" className="band-btn band-btn-gold">
                <span>Book Your Appointment</span>
                <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M1 6h21M17 1l5 5-5 5" /></svg>
              </Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="band-btn band-btn-ghost">
                <span>WhatsApp Us</span>
              </a>
              <a href={mailtoLink()} className="band-btn band-btn-ghost">
                <span>Email Us</span>
              </a>
            </div>
            <p className="band-note">{SITE.homeService}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          <span className="gold-rule" aria-hidden="true" />
          {text && <p className="lead">{text}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionNav({ items }) {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  return (
    <nav className="chips" aria-label="Jump to section">
      {items.map((i) => (
        <button key={i.id} type="button" className="chip" onClick={() => go(i.id)}>{i.label}</button>
      ))}
    </nav>
  );
}

export function SubPageLinks({ current }) {
  const pages = [
    { to: '/services', label: 'Skin & Beauty' },
    { to: '/hair', label: 'Hair Treatments' },
    { to: '/makeup', label: 'Makeup Services' },
    { to: '/bridal', label: 'Bridal' },
  ].filter((p) => p.to !== current);
  return (
    <div className="sublinks">
      {pages.map((p) => (<Link key={p.to} to={p.to} className="btn btn-outline btn-sm">{p.label}</Link>))}
    </div>
  );
}