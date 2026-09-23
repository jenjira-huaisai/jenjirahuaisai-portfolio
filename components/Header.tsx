'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLink = {
  href: string;
  label: string;
};

// Change these to your real pages / sections
const NAV_LINKS: NavLink[] = [
  { href: '/#work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close the menu when the page changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isOpen);
    if (!isOpen) return;

    // Escape closes the menu and returns focus to the button
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    // Resizing to desktop closes the menu
    const desktop = window.matchMedia('(min-width: 64.0625rem)');
    const handleResize = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    window.addEventListener('keydown', handleKey);
    desktop.addEventListener('change', handleResize);

    return () => {
      document.body.classList.remove('nav-open');
      window.removeEventListener('keydown', handleKey);
      desktop.removeEventListener('change', handleResize);
    };
  }, [isOpen]);

  return (
    <header className={`site-header${isOpen ? ' is-menu-open' : ''}`}>
      <div className="container header-inner">
        <Link href="/" className="site-logo">
          <span className="site-logo-primary">JENJIRA</span> HUAISAI
        </Link>

        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? 'Close' : 'Menu'}
          <span className="nav-toggle-icon" aria-hidden="true" />
        </button>

        <nav id="main-nav" className="main-nav" aria-label="Main">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
