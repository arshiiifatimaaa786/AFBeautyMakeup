import { Link } from 'react-router-dom';
import { PageHero, SectionNav, SubPageLinks, ServiceNotes, BookingBand } from '../components/Extras.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import ServiceCard, { CardGrid } from '../components/ServiceCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { SKIN, WAXING, CLEANUP, BODY_POLISHING, NAILS, BRIDAL_PACKAGE, serviceWhatsappLink } from '../data/services.js';
import { WhatsAppIcon } from '../components/Icons.jsx';

const SECTIONS = [
  { id: 'skin', label: 'Skin Services' },
  { id: 'cleanup', label: 'Cleanup & Facials' },
  { id: 'waxing', label: 'Waxing' },
  { id: 'polishing', label: 'Body Polishing' },
  { id: 'nails', label: 'Manicure & Pedicure' },
  { id: 'bridal-package', label: 'Bridal Package' },
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Skin & Beauty Care" text="Professional skin, waxing, facial, body and nail care — every service priced clearly.">
        <SectionNav items={SECTIONS} />
        <SubPageLinks current="/services" />
      </PageHero>

      <section className="section tight" id="skin" aria-labelledby="skin-h">
        <div className="container">
          <SectionHeading eyebrow="Threading" title="Skin Services" id="skin-h" text="Precise, tidy threading for a clean and defined finish." />
          <CardGrid items={SKIN} />
        </div>
      </section>

      <section className="section alt" id="cleanup" aria-labelledby="cleanup-h">
        <div className="container">
          <SectionHeading eyebrow="Skincare" title="Cleanup & Facials" id="cleanup-h" text="Professional cleanup and facial treatments for your skin." />
          <CardGrid items={CLEANUP} />
        </div>
      </section>

      <section className="section" id="waxing" aria-labelledby="wax-h">
        <div className="container">
          <SectionHeading eyebrow="Smooth finish" title="Waxing Services" id="wax-h" text="Normal and flavoured wax options for hands, legs and full body." />
          <CardGrid items={WAXING} />
        </div>
      </section>

      <section className="section polish" id="polishing" aria-labelledby="polish-h">
        <div className="container">
          <Reveal className="pkg polish-card">
            <p className="pkg-kicker">Signature care</p>
            <h2 id="polish-h">Body Polishing</h2>
            <span className="gold-rule" aria-hidden="true" />
            <p className="lead">{BODY_POLISHING.description}</p>
            <p className="polish-price">{BODY_POLISHING.price}</p>
            <a className="btn btn-primary" href={serviceWhatsappLink(BODY_POLISHING)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> Book Body Polishing</a>
          </Reveal>
        </div>
      </section>

      <section className="section" id="nails" aria-labelledby="nails-h">
        <div className="container">
          <SectionHeading eyebrow="Nail & beauty care" title="Manicure & Pedicure" id="nails-h" text="Six ways to pamper your hands and feet." />
          <CardGrid items={NAILS} />
        </div>
      </section>

      <section className="section alt" id="bridal-package" aria-labelledby="bp-h">
        <div className="container">
          <SectionHeading eyebrow="Bridal" title="Bridal Package" id="bp-h" />
          <Reveal className="center-text">
            <p className="lead" style={{ margin: '0 auto 26px' }}>
              {BRIDAL_PACKAGE.name} — {BRIDAL_PACKAGE.price}
            </p>
            <Link to="/bridal" className="btn btn-primary">View Bridal Package</Link>
          </Reveal>
        </div>
      </section>

      <ServiceNotes />
      <BookingBand />
    </>
  );
}