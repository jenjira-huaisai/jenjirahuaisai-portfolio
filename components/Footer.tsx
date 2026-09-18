import Image from 'next/image';
import Container from './Container';

/*
 * Link data kept as an array so the markup stays one block
 * instead of four near-identical copies.
 */
const SOCIAL = [
  {
    href: 'mailto:info@jenjirahuaisai.com',
    icon: '/icons/mail.svg',
    label: 'info@jenjirahuaisai.com',
    external: false,
  },
  {
    href: 'https://www.linkedin.com/in/jenjira-huaisai',
    icon: '/icons/linkedin.svg',
    label: 'LinkedIn',
    external: true,
  },
  {
    href: 'https://github.com/jenjira-huaisai',
    icon: '/icons/github.svg',
    label: 'GitHub',
    external: true,
  },
  {
    href: 'https://www.instagram.com/',
    icon: '/icons/instagram.svg',
    label: 'Instagram',
    external: true,
  },
];

export default function Footer() {
  // Read from the clock so the year never goes stale.
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-top">
          <div>
            <p className="site-logo">
              <span className="site-logo-primary">JENJIRA</span> HUAISAI
            </p>
            <p className="footer-identity">IT Student · NHL Stenden</p>
          </div>

          <nav className="footer-social" aria-label="Elsewhere">
            {SOCIAL.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {/* alt="" because the text label beside it already names
                    the link — otherwise a screen reader says it twice. */}
                <Image src={item.icon} alt="" width={16} height={16} />
                {item.label}
                {item.external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} Jenjira Huaisai. All rights reserved.</p>
          <p>Designed and built by Jenjira Huaisai.</p>
        </div>
      </Container>
    </footer>
  );
}
