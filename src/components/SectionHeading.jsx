import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, align = 'center', as: Tag = 'h2', id }) {
  return (
    <Reveal className={`sec-head ${align === 'left' ? 'left' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag className="h2" id={id}>{title}</Tag>
      <span className="gold-rule" aria-hidden="true" />
      {text && <p className="lead">{text}</p>}
    </Reveal>
  );
}
