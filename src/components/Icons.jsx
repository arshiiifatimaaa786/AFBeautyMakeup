const base = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };

export const ImageIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="m21 16-5-5-8 9" /></svg>
);
export const WhatsAppIcon = (p) => (
  <svg {...base} {...p}><path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.6L3 21z" /><path d="M9 8.5c0 3 2.5 5.5 5.5 5.5l1-1.3-1.8-1-.8.6c-.9-.4-1.6-1.1-2-2l.6-.8-1-1.8L9 8.5z" /></svg>
);
export const InstagramIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r=".6" fill="currentColor" /></svg>
);
export const PhoneIcon = (p) => (
  <svg {...base} {...p}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" /></svg>
);
export const HomeIcon = (p) => (
  <svg {...base} {...p}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" /></svg>
);
export const CheckIcon = (p) => (
  <svg {...base} {...p}><path d="m5 12 5 5 9-10" /></svg>
);
export const CloseIcon = (p) => (
  <svg {...base} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const MenuIcon = (p) => (
  <svg {...base} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const ChevronIcon = ({ dir = 'down', ...p }) => (
  <svg {...base} {...p} style={{ transform: `rotate(${{ down: 0, up: 180, left: 90, right: -90 }[dir]}deg)` }}><path d="m6 9 6 6 6-6" /></svg>
);
export const RulerIcon = (p) => (
  <svg {...base} {...p}><path d="M3 17 17 3l4 4L7 21z" /><path d="M7 13l2 2M10 10l2 2M13 7l2 2" /></svg>
);
export const ChatIcon = (p) => (
  <svg {...base} {...p}><path d="M4 5h16v11H9l-5 4z" /></svg>
);
export const SparkleIcon = (p) => (
  <svg {...base} {...p}><path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" /></svg>
);

export const MailIcon = (p) => (
  <svg {...base} {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3.5 7 8.5 6.5L20.5 7" /></svg>
);
export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 12" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}><path d="M1 6h21M17 1l5 5-5 5" /></svg>
);

export const NOTE_ICONS = { ruler: RulerIcon, chat: ChatIcon, sparkle: SparkleIcon };