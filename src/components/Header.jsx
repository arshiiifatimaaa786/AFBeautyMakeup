import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, SITE, LOGO } from '../data/site.js';
import { MenuIcon, CloseIcon, ChevronIcon } from './Icons.jsx';

export function LogoMark({ size = 'md' }) {
  return (
    <span className={`logo-mark ${size}`}>
      <img src={LOGO.small} alt="" width="600" height="400" decoding="async" />
    </span>
  );
}

export function Wordmark({ light = false }) {
  return (
    <span className={`wordmark ${light ? 'light' : ''}`}>
      <span className="wm-name">{SITE.name}</span>
      <span className="wm-sub">{SITE.title}</span>
    </span>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.body.style.overflow = open ? 'hidden' : '';
    window.addEventListener('keydown', onKey);
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  const servicesActive = ['/services', '/hair', '/makeup'].includes(pathname);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} — Home`}>
          <LogoMark />
          <Wordmark />
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {NAV.map((item) =>
            item.children ? (
              <div className="has-sub" key={item.label}>
                <NavLink to={item.to} className={`nav-link ${servicesActive ? 'active' : ''}`}>
                  {item.label} <ChevronIcon width={14} height={14} />
                </NavLink>
                <div className="subnav">
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="subnav-link">{c.label}</NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className="nav-link">{item.label}</NavLink>
            ),
          )}
        </nav>

        <Link to="/contact" className="btn btn-primary btn-sm header-cta">Book Appointment</Link>

        <button
          className="menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div id="mobile-nav" className={`nav-mobile ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          {NAV.map((item) => (
            <div key={item.label}>
              <NavLink to={item.to} end={item.to === '/'} className="m-link" tabIndex={open ? 0 : -1}>{item.label}</NavLink>
              {item.children && (
                <div className="m-sub">
                  {item.children.map((c) => (
                    <NavLink key={c.to} to={c.to} className="m-sublink" tabIndex={open ? 0 : -1}>{c.label}</NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="btn btn-primary" tabIndex={open ? 0 : -1}>Book Appointment</Link>
        </nav>
      </div>
    </header>
  );
}