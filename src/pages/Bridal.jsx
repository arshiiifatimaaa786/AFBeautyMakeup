import { Link } from 'react-router-dom';
import { PageHero, SubPageLinks, ServiceNotes, BookingBand } from '../components/Extras.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { CardGrid } from '../components/ServiceCard.jsx';
import Reveal from '../components/Reveal.jsx';
import { CheckIcon, WhatsAppIcon } from '../components/Icons.jsx';
import { BRIDAL_PACKAGE as P, MAKEUP_GROUPS, serviceWhatsappLink } from '../data/services.js';

export default function Bridal() {
  const bridal = MAKEUP_GROUPS.find((g) => g.id === 'bridal');
  return (
    <>
      <PageHero eyebrow="Bridal" title="Bridal Makeup & Packages" text="Everything for your wedding day — the All-in-One package and bridal makeup.">
        <SubPageLinks current="/bridal" />
      </PageHero>

      <section className="section bridal" aria-labelledby="pkg-h">
        <div className="container">
          <Reveal className="pkg-wrap">
            <div className="pkg">
              <p className="pkg-kicker">Bridal Package</p>
              <h2 id="pkg-h">{P.name.replace('Bridal Package — ', '')}</h2>
              <ul className="pkg-list">
                {P.includes.map((item) => (
                  <li key={item}><CheckIcon /> {item}</li>
                ))}
              </ul>
              <div className="pkg-price"><b>{P.price}</b><span>Package price</span></div>
              <a className="btn btn-primary" href={serviceWhatsappLink(P)} target="_blank" rel="noopener noreferrer"><WhatsAppIcon width={18} height={18} /> Book Bridal Package</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bridal-makeup" aria-labelledby="bm-h">
        <div className="container">
          <SectionHeading eyebrow="Bridal artistry" title="Bridal Makeup" id="bm-h" text="Choose standard or HD bridal makeup for your wedding day." />
          <CardGrid items={bridal.items} cols="cols-2" variant="featured" />
        </div>
      </section>

      <ServiceNotes />
      <BookingBand title="Planning your wedding day?" text="Send an enquiry to check availability — appointments are confirmed once Arshi replies." />
    </>
  );
}