export const SITE = {
  name: 'Arshi Fatima Beauty & Makeup',
  shortName: 'Arshi Fatima',
  title: 'Professional Cosmetologist',
  tagline: 'Look Good. Feel Good.',
  footerTagline: 'Because You Deserve the Best.',
  phoneDisplay: '8429511570',
  // Country code 91 (India) is assumed from the ₹ prices — change here if needed.
  whatsappNumber: '918429511570',
  email: 'arshiiifatimaaa786@gmail.com',
  instagramHandle: '@arshimakeupartist22',
  instagramUrl: 'https://www.instagram.com/arshimakeupartist22',
  homeService: 'Home services available.',
};

// Brand logo files live in /public. Replace the files (keep the names) to change the logo.
export const LOGO = {
  small: 'logo.png', // used in the navbar and footer (/public/logo.png)
  full: 'logo.png',  // full-size master logo
};

// Every image on the site falls back to this photo until a real image is added.
// To change the placeholder everywhere: replace /public/sample.jpeg (or change the name here).
export const SAMPLE_IMAGE = 'sample.jpeg';

export const whatsappLink = (text = 'Hello Arshi, I would like to book an appointment.') =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;

export const mailtoLink = (subject = 'Appointment enquiry — Arshi Fatima Beauty & Makeup', body = 'Hello Arshi,\n\nI would like to enquire about an appointment.\n\nThank you.') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const NAV = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Skin & Beauty Care', to: '/services' },
      { label: 'Hair Treatments', to: '/hair' },
      { label: 'Makeup Services', to: '/makeup' },
    ],
  },
  { label: 'Bridal Makeup', to: '/bridal' },
  { label: 'Contact', to: '/contact' },
];

export const BRANDS = [
  { id: 'loreal-professional', name: "L'Oréal Professional" },
  { id: 'streax-professional', name: 'Streax Professional' },
  { id: 'schwarzkopf-professional', name: 'Schwarzkopf Professional' },
];

export const NOTES = [
  { icon: 'ruler', title: 'Length & thickness', text: 'Prices depend on hair length and thickness.' },
  { icon: 'chat', title: 'Consult first', text: 'Hair consultation is recommended before chemical services.' },
  { icon: 'sparkle', title: 'Professional care', text: 'Professional products and techniques are used.' },
];