import { PageHero } from '../components/Extras.jsx';
import BookingForm from '../components/BookingForm.jsx';
import Reveal from '../components/Reveal.jsx';
import { WhatsAppIcon, InstagramIcon, PhoneIcon, HomeIcon, MailIcon, ArrowIcon } from '../components/Icons.jsx';
import { SITE, whatsappLink, mailtoLink } from '../data/site.js';

const CHANNELS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: SITE.phoneDisplay,
    hint: 'Fastest way to book',
    href: whatsappLink(),
    Icon: WhatsAppIcon,
    external: true,
  },
  {
    id: 'call',
    label: 'Call',
    value: SITE.phoneDisplay,
    hint: 'Speak to Arshi directly',
    href: `tel:+${SITE.whatsappNumber}`,
    Icon: PhoneIcon,
  },
  {
    id: 'email',
    label: 'Email',
    value: SITE.email,
    hint: 'For detailed enquiries',
    href: mailtoLink(),
    Icon: MailIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: SITE.instagramHandle,
    hint: 'See recent work',
    href: SITE.instagramUrl,
    Icon: InstagramIcon,
    external: true,
  },
];

const STEPS = [
  { n: '01', title: 'Choose your service', text: 'Pick a service from the form or tap Book Now on any service card.' },
  { n: '02', title: 'Send your enquiry', text: 'Your details open in WhatsApp, ready to send to Arshi.' },
  { n: '03', title: 'Get confirmation', text: 'Your appointment is confirmed once Arshi replies with a time.' },
];

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Booking"
        title="Book Your Appointment"
        text="Message on WhatsApp, send an email, or fill in the enquiry form. Appointments are confirmed once Arshi replies."
      />

      <section className="section tight" aria-label="Booking and contact">
        <div className="container contact-grid">
          <Reveal className="reach">
            <span className="reach-frame" aria-hidden="true" />
            <span className="reach-glow" aria-hidden="true" />

            <p className="reach-eyebrow">Get in touch</p>
            <h2 className="reach-title">Let’s plan your <em>perfect look</em></h2>
            <span className="reach-rule" aria-hidden="true" />
            <p className="reach-text">
              Reach out through whichever way suits you best — Arshi personally replies to every enquiry.
            </p>

            <ul className="reach-list">
              {CHANNELS.map(({ id, label, value, hint, href, Icon, external }) => (
                <li key={id}>
                  <a
                    className={`reach-item reach-${id}`}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <span className="reach-icon"><Icon width={22} height={22} /></span>
                    <span className="reach-copy">
                      <small>{label} · {hint}</small>
                      <b>{value}</b>
                    </span>
                    <ArrowIcon className="reach-arrow" />
                  </a>
                </li>
              ))}
            </ul>

            <p className="reach-home"><HomeIcon width={18} height={18} /> {SITE.homeService}</p>

            <a className="reach-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon width={20} height={20} />
              <span>Book on WhatsApp</span>
            </a>
          </Reveal>

          <Reveal delay={120}><BookingForm /></Reveal>
        </div>
      </section>

      <section className="section steps-section" aria-labelledby="steps-h">
        <div className="container">
          <Reveal className="center-text">
            <p className="eyebrow">How it works</p>
            <h2 className="h2" id="steps-h">Booking in three simple steps</h2>
            <span className="gold-rule" aria-hidden="true" />
          </Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.n} className="step" delay={i * 90}>
                <span className="step-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}