import { Link } from 'react-router-dom';
import { PageHero, SectionNav, SubPageLinks, BookingBand } from '../components/Extras.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import { CardGrid } from '../components/ServiceCard.jsx';
import { MAKEUP_GROUPS } from '../data/services.js';

export default function Makeup() {
  const nav = MAKEUP_GROUPS.map((g) => ({ id: g.id, label: g.title }));
  return (
    <>
      <PageHero eyebrow="Makeup artistry" title="Professional Makeup Services" text="Looks for parties, traditional ceremonies, engagements and your bridal day.">
        <SectionNav items={nav} />
        <SubPageLinks current="/makeup" />
      </PageHero>

      {MAKEUP_GROUPS.map((g, i) => (
        <section
          key={g.id}
          id={g.id}
          aria-labelledby={`${g.id}-h`}
          className={`section ${g.featured ? 'bridal-makeup' : i % 2 === 0 ? 'tight' : 'alt'}`}
        >
          <div className="container">
            <SectionHeading
              eyebrow={g.featured ? 'Our signature' : 'Makeup'}
              title={g.title}
              id={`${g.id}-h`}
              text={g.featured ? 'Bridal artistry deserves special attention — available standard or HD.' : undefined}
            />
            <CardGrid
              items={g.items}
              cols={g.items.length === 3 ? '' : 'cols-2'}
             
              variant={g.featured ? 'featured' : ''}
            />
            {g.featured && (
              <p className="center-text" style={{ marginTop: 36 }}>
                <Link to="/bridal" className="btn btn-gold">See the Bridal Package</Link>
              </p>
            )}
          </div>
        </section>
      ))}
      <BookingBand />
    </>
  );
}