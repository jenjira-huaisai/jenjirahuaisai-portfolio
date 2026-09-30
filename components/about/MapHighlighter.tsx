'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';

/*
 * Small client wrapper around the server-rendered map.
 * The heavy part (177 country outlines) stays plain HTML/SVG;
 * this file only tracks which country is being pointed at.
 *
 * Any element inside with data-country="XXX" and data-name="…"
 * (a map shape or a list item) takes part. Pointing at one
 * highlights every element with the same code and shows its name.
 */
export default function MapHighlighter({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<{ id: string; name: string } | null>(null);

  // Mark all matching shapes and list items as active
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement | SVGElement>('[data-country]').forEach((el) => {
      if (active && el.dataset.country === active.id) {
        el.setAttribute('data-active', 'true');
      } else {
        el.removeAttribute('data-active');
      }
    });
  }, [active]);

  // One listener on the wrapper instead of one per country
  const handlePointerOver = (event: React.PointerEvent) => {
    const target = (event.target as Element).closest<HTMLElement | SVGElement>(
      '[data-country]',
    );
    if (target?.dataset.country && target.dataset.name) {
      setActive({ id: target.dataset.country, name: target.dataset.name });
    }
  };

  return (
    <div
      ref={rootRef}
      className={styles.mapWrap}
      onPointerOver={handlePointerOver}
      onPointerLeave={() => setActive(null)}
    >
      {/* Visual only: the country list below carries the same information */}
      <p className={styles.mapCaption} aria-hidden="true">
        {active ? active.name : '\u00a0'}
      </p>
      {children}
    </div>
  );
}