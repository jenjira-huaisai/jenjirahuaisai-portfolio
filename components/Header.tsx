import Link from "next/link";
import Container from "./Container";

export default function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="header-inner">
          <Link href="/" className="site-logo">
            <span className="site-logo-primary">JENJIRA</span>{" "}
            <span>HUAISAI</span>
          </Link>

          <nav className="main-nav" aria-label="Main navigation">
            <Link href="/work">Work</Link>
            <Link href="/capabilities">Capabilities</Link>
            <Link href="/about">About</Link>
            <a
              href="https://academic.jenjirahuaisai.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academic Portfolio ↗
            </a>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}