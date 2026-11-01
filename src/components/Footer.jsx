import { Link } from 'react-router-dom';
import { SITE, NAV, whatsappLink, mailtoLink } from '../data/site.js';
import { Wordmark, LogoMark } from './Header.jsx';
import { WhatsAppIcon, InstagramIcon, PhoneIcon, HomeIcon, MailIcon } from './Icons.jsx';

export default function Footer() {
  const links = [
    ...NAV.filter((n) => !n.children),
    { label: 'Skin & Beauty', to: '/services' },
    { label: 'Hair Treatments', to: '/hair' },
    { label: 'Makeup Services', to: '/makeup' },
  ];
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label={`${SITE.name} — Home`}>
            <LogoMark size="lg" />
            <Wordmark light />
          </Link>
          <p className="footer-tag">“{SITE.footerTagline}”</p>
          <a className="btn btn-gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={18} height={18} /> Book on WhatsApp
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="footer-h">Explore</h3>
          <ul>
            {links.map((l) => (<li key={l.to + l.label}><Link to={l.to}>{l.label}</Link></li>))}
          </ul>
        </nav>

        <div>
          <h3 className="footer-h">Contact</h3>
          <ul>
            <li><a href={whatsappLink()} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={16} height={16} /> WhatsApp {SITE.phoneDisplay}</a></li>
            <li><a href={`tel:+${SITE.whatsappNumber}`}><PhoneIcon width={16} height={16} /> {SITE.phoneDisplay}</a></li>
            <li><a href={mailtoLink()}><MailIcon width={16} height={16} /> {SITE.email}</a></li>
            <li><a href={SITE.instagramUrl} target="_blank" rel="noopener noreferrer"><InstagramIcon width={16} height={16} /> {SITE.instagramHandle}</a></li>
            <li><span><HomeIcon width={16} height={16} /> {SITE.homeService}</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {SITE.name} · {SITE.title}</span>
        <span>{SITE.tagline}</span>
      </div>
    </footer>
  );
}