import { useEffect, useState } from 'react';
import { SAMPLE_IMAGE } from '../data/site.js';

/**
 * Reusable image slot.
 *
 * Shows the real photo at `src` when it exists in /public. Until then it shows the
 * shared sample photo (see SAMPLE_IMAGE in src/data/site.js), so every image on the
 * site looks finished and can be swapped later just by adding a file with the right name.
 *
 * Props
 *  - src:      path under /public, e.g. "images/hair/keratin.jpg"
 *  - alt:      descriptive alt text
 *  - ratio:    CSS aspect-ratio, e.g. "4 / 5" (keeps layout identical for any photo)
 *  - position: CSS object-position for cropping (default keeps faces in frame)
 */
export default function ImageSlot({
  src,
  alt,
  ratio = '4 / 3',
  position = 'center 22%',
  className = '',
  eager = false,
  children,
}) {
  const [useSample, setUseSample] = useState(!src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setUseSample(!src);
    setLoaded(false);
  }, [src]);

  const current = useSample ? SAMPLE_IMAGE : src;

  return (
    <div
      className={`imgslot ${loaded ? 'is-loaded' : ''} ${useSample ? 'is-sample' : ''} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        key={current}
        src={current}
        alt={alt}
        style={{ objectPosition: position }}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => (useSample ? setLoaded(true) : setUseSample(true))}
      />
      {children}
    </div>
  );
}

export const imgPath = (folder, id) => `images/${folder}/${id}.jpg`;