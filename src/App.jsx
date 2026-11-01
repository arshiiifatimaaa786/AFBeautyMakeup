import { useEffect } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Hair from './pages/Hair.jsx';
import Makeup from './pages/Makeup.jsx';
import Bridal from './pages/Bridal.jsx';
import Contact from './pages/Contact.jsx';

const TITLES = {
  '/': 'Arshi Fatima Beauty & Makeup | Professional Cosmetologist — Makeup, Hair & Skin',
  '/about': 'About | Arshi Fatima Beauty & Makeup',
  '/services': 'Skin & Beauty Services | Arshi Fatima Beauty & Makeup',
  '/hair': 'Hair Services & Treatments | Arshi Fatima Beauty & Makeup',
  '/makeup': 'Makeup Services | Arshi Fatima Beauty & Makeup',
  '/bridal': 'Bridal Makeup & Packages | Arshi Fatima Beauty & Makeup',
  '/contact': 'Contact & Booking | Arshi Fatima Beauty & Makeup',
};

function ScrollManager() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    document.title = TITLES[pathname] || TITLES['/'];
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <section className="section container center-text">
      <p className="eyebrow">Page not found</p>
      <h1 className="h1">This page doesn’t exist.</h1>
      <p className="lead">Let’s get you back to something beautiful.</p>
      <Link className="btn btn-primary" to="/">Back to Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>
        Skip to content
      </a>
      <ScrollManager />
      <Header />
      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/hair" element={<Hair />} />
          <Route path="/makeup" element={<Makeup />} />
          <Route path="/bridal" element={<Bridal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}