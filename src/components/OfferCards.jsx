import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

/* Line-art icons. Strokes "draw" themselves when the card is revealed / hovered. */
const svgProps = {
  viewBox: '0 0 64 64',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.4,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  className: 'offer-icon-svg',
};

const MakeupIcon = () => (
  <svg {...svgProps}>
    <path pathLength="1" d="M26 30h12v22a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
    <path pathLength="1" d="M28 30v-8h8v8" />
    <path pathLength="1" d="M29 22c0-6 1-10 3-14 2 4 3 8 3 14" />
    <path pathLength="1" d="M44 12l1.6 4.4L50 18l-4.4 1.6L44 24l-1.6-4.4L38 18l4.4-1.6z" />
    <path pathLength="1" d="M16 40l.9 2.4L19.3 43l-2.4.9L16 46.3l-.9-2.4L12.7 43l2.4-.6z" />
  </svg>
);

const HairIcon = () => (
  <svg {...svgProps}>
    <circle pathLength="1" cx="18" cy="46" r="7" />
    <circle pathLength="1" cx="18" cy="18" r="7" />
    <path pathLength="1" d="M23 23l30 24" />
    <path pathLength="1" d="M23 41l30-24" />
    <circle pathLength="1" cx="31.5" cy="32" r="1.2" />
  </svg>
);

const SkinIcon = () => (
  <svg {...svgProps}>
    <path pathLength="1" d="M32 8c-9 11-14 18-14 26a14 14 0 0 0 28 0c0-8-5-15-14-26z" />
    <path pathLength="1" d="M24 36a8 8 0 0 0 8 8" />
    <path pathLength="1" d="M50 10l1.2 3.3L54.5 14.5l-3.3 1.2L50 19l-1.2-3.3L45.5 14.5l3.3-1.2z" />
  </svg>
);

const BridalIcon = () => (
  <svg {...svgProps}>
    <path pathLength="1" d="M20 28h24l4-10-9 5-7-11-7 11-9-5z" />
    <path pathLength="1" d="M20 28v6h24v-6" />
    <circle pathLength="1" cx="32" cy="46" r="8" />
    <path pathLength="1" d="M28.5 40.5L32 36l3.5 4.5" />
  </svg>
);

const CARDS = [
  {
    to: '/makeup',
    id: 'makeup',
    title: 'Makeup Artistry',
    text: 'Party, traditional, engagement and bridal looks.',
    tags: ['Party', 'Engagement', 'Traditional'],
    Icon: MakeupIcon,
  },
  {
    to: '/hair',
    id: 'hair',
    title: 'Hair Care',
    text: 'Cuts, colour, spa and smoothing treatments.',
    tags: ['Cuts', 'Colour', 'Spa'],
    Icon: HairIcon,
  },
  {
    to: '/services',
    id: 'skin',
    title: 'Skin & Beauty',
    text: 'Facials, cleanups, waxing, threading and polishing.',
    tags: ['Cleanups', 'Waxing', 'Polishing'],
    Icon: SkinIcon,
  },
  {
    to: '/bridal',
    id: 'bridal',
    title: 'Bridal',
    text: 'The All-in-One bridal package and bridal makeup.',
    tags: ['All-in-One', 'Bridal Makeup'],
    Icon: BridalIcon,
  },
];

export default function OfferCards() {
  return (
    <div className="offer-grid">
      {CARDS.map(({ to, id, title, text, tags, Icon }, i) => (
        <Reveal key={id} delay={i * 110} className="offer-cell">
          <Link to={to} className={`offer-card offer-${id}`} aria-label={`${title} — explore services and prices`}>
            <span className="offer-glow" aria-hidden="true" />
            <span className="offer-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>

            <span className="offer-icon" aria-hidden="true">
              <span className="offer-ring" />
              <Icon />
            </span>

            <h3>{title}</h3>
            <span className="offer-rule" aria-hidden="true" />
            <p>{text}</p>

            <ul className="offer-tags" aria-hidden="true">
              {tags.map((t) => <li key={t}>{t}</li>)}
            </ul>

            <span className="offer-more">
              Explore
              <span className="offer-arrow" aria-hidden="true">
                <svg viewBox="0 0 24 12" width="22" height="11" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 6h21M17 1l5 5-5 5" />
                </svg>
              </span>
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}