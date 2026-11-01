import { AboutIntro } from './Home.jsx';
import { PageHero, BookingBand, ProductsUsed, ServiceNotes } from '../components/Extras.jsx';
import { SITE } from '../data/site.js';

export default function About() {
  return (
    <>
      <PageHero eyebrow="About" title="Arshi Fatima" text={`${SITE.title} — ${SITE.tagline}`} />
      <AboutIntro />
      <ProductsUsed />
      <ServiceNotes />
      <BookingBand />
    </>
  );
}
