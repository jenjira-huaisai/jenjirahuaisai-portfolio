'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from './Container';
import { ArrowUpRight } from './Arrows';

const NAV = [
  { href: '/work', label: 'Work' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  // Escape closes the menu, which keyboard users expect.
  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <span className="site-logo-primary">JENJIRA</span> HUAISAI
            <span className="sr-only"> — home</span>
          </Link>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? 'Close' : 'Menu'}
          </button>

          <nav
            id="primary-navigation"
            className="main-nav"
            data-open={open}
            aria-label="Primary"
          >
            <ul>
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://academic.jenjirahuaisai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Academic Portfolio
                  <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
