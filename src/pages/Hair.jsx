import { PageHero, SectionNav, SubPageLinks, ServiceNotes, ProductsUsed, BookingBand } from '../components/Extras.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { CardGrid } from '../components/ServiceCard.jsx';
import { HAIRCUT, HAIR_SPA, HAIR_COLOUR, HAIR_TREATMENTS } from '../data/services.js';

const SECTIONS = [
  { id: 'haircut', label: 'Haircut' },
  { id: 'spa', label: 'Hair Spa' },
  { id: 'colour', label: 'Hair Colour' },
  { id: 'treatments', label: 'Smoothing & Treatments' },
];

export default function Hair() {
  return (
    <>
      <PageHero eyebrow="Hair" title="Hair Services & Treatments" text="From a fresh cut to colour, spa and smoothing treatments — prices are shown by hair length.">
        <SectionNav items={SECTIONS} />
        <SubPageLinks current="/hair" />
      </PageHero>

      <section className="section tight" id="haircut" aria-labelledby="cut-h">
        <div className="container">
          <SectionHeading eyebrow="Styling" title="Haircut" id="cut-h" />
          <CardGrid items={HAIRCUT} cols="cols-2" />
        </div>
      </section>

      <section className="section alt" id="spa" aria-labelledby="spa-h">
        <div className="container">
          <SectionHeading eyebrow="Nourish" title="Hair Spa" id="spa-h" text="Deep nourishment, softness, shine, and frizz control." />
          <CardGrid items={HAIR_SPA} />
        </div>
      </section>

      <section className="section" id="colour" aria-labelledby="col-h">
        <div className="container">
          <SectionHeading eyebrow="Colour" title="Hair Colour" id="col-h" text="Global colour, balayage, highlights and root touch-ups." />
          <CardGrid items={HAIR_COLOUR} cols="cols-4" />
        </div>
      </section>

      <section className="section alt" id="treatments" aria-labelledby="tr-h">
        <div className="container">
          <SectionHeading eyebrow="Smoothing & advanced" title="Hair Smoothing & Treatments" id="tr-h" text="Professional treatments for smooth, manageable hair. A consultation is recommended before chemical services." />
          <CardGrid items={HAIR_TREATMENTS} cols="cols-2" />
        </div>
      </section>

      <ProductsUsed />
      <ServiceNotes />
      <BookingBand />
    </>
  );
}