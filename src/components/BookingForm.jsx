import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BOOKING_OPTIONS, findService } from '../data/services.js';
import { whatsappLink, mailtoLink, SITE } from '../data/site.js';
import { WhatsAppIcon, CheckIcon } from './Icons.jsx';

const todayStr = () => {
  const d = new Date();
  const p = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
};

const formatDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
};

const formatTime = (t) => {
  const [h, m] = t.split(':').map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${h >= 12 ? 'PM' : 'AM'}`;
};

// Defined outside the form so inputs keep focus while typing.
function Field({ id, label, error, children }) {
  return (
    <div className={`field ${error ? 'has-error' : ''}`}>
      <label htmlFor={`f-${id}`}>{label}</label>
      {children}
      {error && <p className="err" id={`e-${id}`} role="alert">{error}</p>}
    </div>
  );
}

export default function BookingForm() {
  const [params] = useSearchParams();
  const preset = params.get('service');
  const initialService = preset && findService(preset) ? preset : '';

  const [values, setValues] = useState({ name: '', phone: '', service: initialService, date: '', time: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(null); // holds the WhatsApp link once prepared

  const min = useMemo(todayStr, []);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (values.name.trim().length < 2) er.name = 'Please enter your name.';
    const digits = values.phone.replace(/[\s()+-]/g, '');
    if (!/^\d{10,13}$/.test(digits)) er.phone = 'Please enter a valid phone number (10 digits).';
    if (!values.service) er.service = 'Please choose a service.';
    if (!values.date) er.date = 'Please choose your preferred date.';
    else if (values.date < min) er.date = 'Please choose today or a future date.';
    if (!values.time) er.time = 'Please choose your preferred time.';
    return er;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    const svc = findService(values.service);
    const msg = [
      'Hello Arshi, I would like to enquire about an appointment.',
      `Name: ${values.name.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Service: ${svc.name}`,
      `Preferred date: ${formatDate(values.date)}`,
      `Preferred time: ${formatTime(values.time)}`,
      values.notes.trim() && `Notes: ${values.notes.trim()}`,
    ].filter(Boolean).join('\n');
    const link = whatsappLink(msg);
    setSent(link);
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  if (sent) {
    return (
      <div className="form-done" role="status" aria-live="polite">
        <span className="done-icon"><CheckIcon width={26} height={26} /></span>
        <h3>Your enquiry is ready to send</h3>
        <p>
          We’ve opened WhatsApp with your details filled in. <strong>Please press send there to deliver your enquiry.</strong>{' '}
          This is an enquiry only — your appointment is not confirmed until Arshi replies and agrees a time with you.
        </p>
        <div className="row">
          <a className="btn btn-primary" href={sent} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width={18} height={18} /> Open WhatsApp again
          </a>
          <button type="button" className="btn btn-outline" onClick={() => setSent(null)}>Edit enquiry</button>
        </div>
      </div>
    );
  }

  const aria = (k) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `e-${k}` : undefined });

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <h3 className="form-title">Appointment Enquiry</h3>
      <div className="form-grid">
        <Field id="name" label="Your name *" error={errors.name}>
          <input id="f-name" type="text" autoComplete="name" value={values.name} onChange={set('name')} {...aria('name')} />
        </Field>
        <Field id="phone" label="Phone number *" error={errors.phone}>
          <input id="f-phone" type="tel" inputMode="tel" autoComplete="tel" value={values.phone} onChange={set('phone')} {...aria('phone')} />
        </Field>
        <div className="span-2">
          <Field id="service" label="Service *" error={errors.service}>
            <select id="f-service" value={values.service} onChange={set('service')} {...aria('service')}>
              <option value="">Select a service…</option>
              {BOOKING_OPTIONS.map((g) => (
                <optgroup key={g.group} label={g.group}>
                  {g.items.map((it) => (<option key={it.id} value={it.id}>{it.name}</option>))}
                </optgroup>
              ))}
            </select>
          </Field>
        </div>
        <Field id="date" label="Preferred date *" error={errors.date}>
          <input id="f-date" type="date" min={min} value={values.date} onChange={set('date')} {...aria('date')} />
        </Field>
        <Field id="time" label="Preferred time *" error={errors.time}>
          <input id="f-time" type="time" value={values.time} onChange={set('time')} {...aria('time')} />
        </Field>
        <div className="span-2">
          <Field id="notes" label="Notes (optional)">
            <textarea id="f-notes" rows={3} value={values.notes} onChange={set('notes')} placeholder="Occasion, hair length, home service request…" />
          </Field>
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        <WhatsAppIcon width={18} height={18} /> Send Enquiry via WhatsApp
      </button>
      <p className="form-note">
        Your enquiry is sent through WhatsApp. Appointments are confirmed only after Arshi replies.
        {' '}Prefer email? <a className="form-mail" href={mailtoLink()}>{SITE.email}</a>
      </p>
    </form>
  );
}