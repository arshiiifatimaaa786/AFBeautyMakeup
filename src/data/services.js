import { whatsappLink } from './site.js';

// All services live here. Edit prices/descriptions in this file only.
// Each service's image is loaded from /public/images/<folder>/<id>.jpg
// If that file is missing, a tasteful "Add Service Image" placeholder is shown.

const LEN3 = (a, b, c) => [
  { label: 'Normal Length', price: a },
  { label: 'Medium Length', price: b },
  { label: 'Long Length', price: c },
];

const s = (folder, id, name, description, price, extra = {}) => ({
  id, folder, name, description, price, ...extra,
});

/* ---------- Skin & beauty care ---------- */
export const SKIN = [
  s('services', 'threading', 'Threading', 'Precise facial hair removal for clean, defined shaping.', '₹30'),
  s('services', 'upper-lips', 'Upper Lips', 'Quick, careful upper-lip hair removal.', '₹20'),
  s('services', 'full-face', 'Full Face', 'Full-face threading for a tidy, even finish.', '₹100'),
];

export const WAXING = [
  s('services', 'wax-half-hand-normal', 'Half Hand (Normal)', 'Normal wax for the lower or upper half of the arm.', '₹200'),
  s('services', 'wax-full-hand-normal', 'Full Hand (Normal)', 'Normal wax for the full arm, shoulder to wrist.', '₹300'),
  s('services', 'wax-half-hand-flavoured', 'Half Hand (Flavoured)', 'Flavoured wax option for the half arm.', '₹300'),
  s('services', 'wax-full-hand-flavoured', 'Full Hand (Flavoured)', 'Flavoured wax option for the full arm.', '₹400'),
  s('services', 'wax-half-leg-normal', 'Half Leg (Normal)', 'Normal wax for the lower or upper half of the leg.', '₹200'),
  s('services', 'wax-full-leg-normal', 'Full Leg (Normal)', 'Normal wax for the full leg.', '₹350'),
  s('services', 'wax-half-leg-flavoured', 'Half Leg (Flavoured)', 'Flavoured wax option for the half leg.', '₹350'),
  s('services', 'wax-full-leg-flavoured', 'Full Leg (Flavoured)', 'Flavoured wax option for the full leg.', '₹450'),
  s('services', 'wax-full-body-normal', 'Full Body Wax (Normal)', 'Complete head-to-toe waxing with normal wax.', '₹1,500'),
  s('services', 'wax-full-body-flavoured', 'Full Body Wax (Flavoured)', 'Complete head-to-toe waxing with flavoured wax.', '₹2,200'),
];

export const CLEANUP = [
  s('services', 'normal-cleanup', 'Normal Cleanup', 'A cleansing treatment to refresh and tidy the skin.', '₹500'),
  s('services', 'luxury-cleanup', 'Luxury Cleanup', 'An elevated cleanup experience with premium care.', '₹700'),
  s('services', 'fruit-cleanup', 'Fruit Cleanup', 'A fruit-based cleanup treatment for a refreshed look.', '₹800'),
  s('services', 'normal-facial', 'Normal Facial', 'A professional facial tailored to your skin.', '₹800–₹1,200'),
  s('services', 'luxury-facial', 'Luxury Facial', 'A premium facial experience tailored to your skin.', '₹1,500–₹2,000'),
];

export const BODY_POLISHING = s(
  'services', 'body-polishing', 'Body Polishing',
  'A full-body polishing treatment for smooth, refreshed-feeling skin.', '₹1,500',
);

export const NAILS = [
  s('services', 'normal-manicure', 'Normal Manicure', 'Classic hand and nail care.', '₹1,000'),
  s('services', 'luxury-manicure', 'Luxury Manicure', 'An indulgent, extended hand and nail treatment.', '₹1,500'),
  s('services', 'normal-pedicure', 'Normal Pedicure', 'Classic foot and nail care.', '₹1,500'),
  s('services', 'luxury-pedicure', 'Luxury Pedicure', 'An indulgent, extended foot and nail treatment.', '₹1,800'),
  s('services', 'manicure-pedicure-normal', 'Manicure + Pedicure (Normal)', 'Classic hand and foot care, together.', '₹1,800'),
  s('services', 'manicure-pedicure-luxury', 'Manicure + Pedicure (Luxury)', 'The full luxury hand and foot experience.', '₹3,000'),
];

/* ---------- Bridal ---------- */
export const BRIDAL_PACKAGE = {
  id: 'bridal-package-all-in-one',
  folder: 'services',
  name: 'Bridal Package — All in One',
  price: '₹3,599',
  description: 'Everything you need to feel ready, bundled in one package.',
  includes: [
    'Facial', 'Threading', 'Upper Lips', 'Full Hand Waxing',
    'Full Leg Waxing', 'Full Hand D-Tan', 'Full Leg D-Tan', 'Pack / Mask',
  ],
};

/* ---------- Makeup ---------- */
export const MAKEUP_GROUPS = [
  {
    id: 'party',
    title: 'Party Makeup',
    items: [
      s('makeup', 'party-makeup', 'Party Makeup', 'A polished look for parties and special evenings.', '₹2,500'),
      s('makeup', 'hd-party-makeup', 'HD Party Makeup', 'A high-definition finish for photos and video.', '₹4,000'),
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional Makeup',
    items: [
      s('makeup', 'haldi-makeup', 'Haldi Makeup', 'A fresh, radiant look for your haldi ceremony.', '₹4,000'),
      s('makeup', 'mehndi-makeup', 'Mehndi Makeup', 'A festive look for your mehndi celebration.', '₹4,000'),
      s('makeup', 'sangeet-makeup', 'Sangeet Makeup', 'A glamorous look made for the dance floor.', '₹4,000'),
    ],
  },
  {
    id: 'engagement',
    title: 'Engagement Makeup',
    items: [
      s('makeup', 'engagement-makeup', 'Engagement Makeup', 'An elegant look for your engagement day.', '₹6,500'),
      s('makeup', 'hd-engagement-makeup', 'HD Engagement Makeup', 'A high-definition finish for engagement photography.', '₹8,500'),
    ],
  },
  {
    id: 'bridal',
    title: 'Bridal Makeup',
    featured: true,
    items: [
      s('makeup', 'bridal-makeup', 'Bridal Makeup', 'Timeless bridal artistry for your wedding day.', '₹10,000'),
      s('makeup', 'hd-bridal-makeup', 'HD Bridal Makeup', 'High-definition bridal artistry for photos and video.', '₹15,000'),
    ],
  },
];

/* ---------- Hair ---------- */
const SPA_DESC = 'Deep nourishment, softness, shine, and frizz control.';

export const HAIRCUT = [
  s('hair', 'basic-haircut', 'Basic Haircut', 'A clean, classic cut.', '₹250'),
  s('hair', 'advanced-haircut', 'Advanced Haircut', 'A styled, layered or shaped cut.', '₹400'),
];

export const HAIR_SPA = [
  s('hair', 'normal-hair-spa', 'Normal Hair Spa', SPA_DESC, '₹600'),
  s('hair', 'streax-hair-spa', 'Streax Hair Spa', SPA_DESC, '₹800'),
  s('hair', 'loreal-hair-spa', "L'Oréal Hair Spa", SPA_DESC, '₹1,000'),
];

export const HAIR_COLOUR = [
  s('hair', 'global-colour', 'Global Colour', 'Rich colour, even coverage, and a beautiful finish.', null, { tiers: LEN3('₹2,500', '₹3,500', '₹4,500') }),
  s('hair', 'balayage', 'Balayage', 'Soft blended highlights and natural dimension.', null, { tiers: LEN3('₹2,000', '₹2,500', '₹3,000') }),
  s('hair', 'highlights', 'Highlights', 'Adds brightness, depth, and dimension.', null, {
    tiers: [
      { label: 'Per Streak / Foil', price: '₹300' },
      { label: 'Medium Length', price: '₹450' },
      { label: 'Long Length', price: '₹550' },
    ],
  }),
  s('hair', 'root-touch-up', 'Root Touch-Up', 'Root regrowth coverage and a fresh colour look.', '₹800', { priceNote: 'Starting from' }),
];

export const HAIR_TREATMENTS = [
  s('hair', 'rebonding-smoothening', 'Rebonding & Smoothening', 'Straight, sleek, smooth, and frizz-controlled hair.', null, { tiers: LEN3('₹3,000', '₹4,500', '₹6,000') }),
  s('hair', 'keratin', 'Keratin', 'Softness, shine, nourishment, and frizz control.', null, { tiers: LEN3('₹2,500', '₹3,000', '₹3,500') }),
  s('hair', 'nanoplastia', 'Nanoplastia', 'Smooth, manageable, shiny, frizz-controlled hair.', null, { tiers: LEN3('₹2,500', '₹3,000', '₹3,500') }),
  s('hair', 'hair-botox', 'Hair Botox', 'Deep conditioning, softness, shine, and improved hair texture.', null, { tiers: LEN3('₹3,000', '₹4,000', '₹5,000') }),
];

/* ---------- Dropdown options for the booking form ---------- */
export const BOOKING_OPTIONS = [
  { group: 'Skin & Beauty Care', items: [...SKIN, ...CLEANUP, ...WAXING, BODY_POLISHING, ...NAILS] },
  { group: 'Bridal', items: [BRIDAL_PACKAGE] },
  { group: 'Makeup', items: MAKEUP_GROUPS.flatMap((g) => g.items) },
  { group: 'Hair', items: [...HAIRCUT, ...HAIR_SPA, ...HAIR_COLOUR, ...HAIR_TREATMENTS] },
];

export const ALL_SERVICES = BOOKING_OPTIONS.flatMap((g) => g.items);
export const findService = (id) => ALL_SERVICES.find((x) => x.id === id);


/* ---------- WhatsApp booking messages (one tailored message per service) ---------- */
const kindOf = (svc) => {
  if (svc.id === BRIDAL_PACKAGE.id) return 'package';
  if (svc.folder === 'makeup') return 'makeup';
  if (svc.folder === 'hair') return 'hair';
  if (svc.id.startsWith('wax-')) return 'wax';
  if (svc.id.includes('cleanup') || svc.id.includes('facial')) return 'facial';
  if (svc.id.includes('manicure') || svc.id.includes('pedicure')) return 'nails';
  return 'beauty';
};

const FOLLOW_UP = {
  package: 'My wedding date is ____. Please confirm availability.',
  makeup: 'My event date is ____. Please confirm availability.',
  hair: 'My hair length is ____. Please confirm availability.',
  wax: 'Please share your available slots.',
  facial: 'Please share your available slots.',
  nails: 'Please share your available slots.',
  beauty: 'Please share your available slots.',
};

export const serviceMessage = (svc) => {
  const kind = kindOf(svc);
  const priceLine = svc.tiers
    ? svc.tiers.map((t) => `${t.label} ${t.price}`).join(' | ')
    : `${svc.priceNote ? `${svc.priceNote} ` : ''}${svc.price}`;
  return [
    'Hello Arshi Fatima,',
    '',
    `I would like to book ${svc.name} (${priceLine}).`,
    FOLLOW_UP[kind],
    '',
    'Thank you.',
  ].join('\n');
};

export const serviceWhatsappLink = (svc) => whatsappLink(serviceMessage(svc));