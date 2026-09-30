'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './about.module.css';

type Active = {
  id: string;
  name: string;
  /** Label position, in % of the map area */
  x: number;
  y: number;
};

type Props = {
  /** Left column (1/3): heading, legend and country list */
  list: React.ReactNode;
  /** Right column (2/3): the SVG map */
  map: React.ReactNode;
};

/*
 * Small client wrapper around the server-rendered map and list.
 * The heavy part (177 country outlines) stays plain HTML/SVG;
 * this file only tracks which country is being pointed at.
 *
 * Any element with data-country="XXX" and data-name="…" takes part.
 * Pointing at a map shape or a list item highlights both,
 * turns the flag to colour and shows a name label on the map.
 */
export default function MapHighlighter({ list, map }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const areaRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Active | null>(null);

  // Mark every element for the active country (shape, dot, list item)
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

  // One listener for the whole block instead of one per country
  const handlePointerMove = (event: React.PointerEvent) => {
    const target = (event.target as Element).closest<HTMLElement | SVGElement>(
      '[data-country]',
    );
    const area = areaRef.current;
    if (!target || !area || !target.dataset.country || !target.dataset.name) {
      setActive(null);
      return;
    }

    let x: number;
    let y: number;
    if (area.contains(target)) {
      // On the map: the label follows the pointer
      const rect = area.getBoundingClientRect();
      x = ((event.clientX - rect.left) / rect.width) * 100;
      y = ((event.clientY - rect.top) / rect.height) * 100;
    } else {
      // On the list: the label sits on the country itself
      x = Number(target.dataset.x);
      y = Number(target.dataset.y);
    }

    setActive({ id: target.dataset.country, name: target.dataset.name, x, y });
  };

  return (
    <div
      ref={rootRef}
      className={styles.travelLayout}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setActive(null)}
    >
      <div>{list}</div>

      <div ref={areaRef} className={styles.mapArea}>
        {map}
        {/* Visual only: the list already names every country for screen readers */}
        {active && (
          <p
            className={styles.mapLabel}
            style={{ left: `${active.x}%`, top: `${active.y}%` }}
            aria-hidden="true"
          >
            {active.name}
          </p>
        )}
      </div>
    </div>
  );
}