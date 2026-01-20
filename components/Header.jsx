"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Elegant SVG Logo Component
const KeysianLogo = ({ scrolled }) => (
  <svg
    width={scrolled ? "42" : "48"}
    height={scrolled ? "42" : "48"}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo-icon"
    style={{
      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    }}
  >
    {/* Outer ring with gradient */}
    <defs>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#D4AF37" />
        <stop offset="50%" stopColor="#F4E4BC" />
        <stop offset="100%" stopColor="#C4A030" />
      </linearGradient>
      <linearGradient id="darkGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B7023" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
    </defs>
    
    {/* Decorative outer circle */}
    <circle
      cx="32"
      cy="32"
      r="30"
      stroke="url(#goldGradient)"
      strokeWidth="1.5"
      fill="none"
    />
    
    {/* Inner decorative ring */}
    <circle
      cx="32"
      cy="32"
      r="26"
      stroke="url(#goldGradient)"
      strokeWidth="0.5"
      fill="none"
      opacity="0.6"
    />
    
    {/* Stylized "K" monogram */}
    <path
      d="M24 18V46M24 32L40 18M24 32L40 46"
      stroke="url(#goldGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    
    {/* Gavel accent */}
    <path
      d="M44 24L48 20M46 22L42 26"
      stroke="url(#darkGold)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    
    {/* Small diamond accents */}
    <path
      d="M32 12L33.5 14.5L32 17L30.5 14.5Z"
      fill="url(#goldGradient)"
    />
    <path
      d="M32 47L33.5 49.5L32 52L30.5 49.5Z"
      fill="url(#goldGradient)"
    />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/auctions", label: "Auctions" },
    { href: "/downloads", label: "Downloads" },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        :root {
          --gold-primary: #D4AF37;
          --gold-light: #F4E4BC;
          --gold-dark: #8B7023;
          --charcoal: #1a1a1a;
          --charcoal-light: #2d2d2d;
          --ivory: #FFFEF7;
          --glass-bg: rgba(26, 26, 26, 0.75);
          --glass-border: rgba(212, 175, 55, 0.15);
          --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          background: var(--charcoal);
        }

        .header-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1rem 2rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-wrapper.scrolled {
          padding: 0.5rem 2rem;
        }

        .header {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 2rem;
          border-radius: 16px;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          box-shadow: var(--glass-shadow);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-wrapper.scrolled .header {
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          background: rgba(26, 26, 26, 0.9);
          border-color: rgba(212, 175, 55, 0.25);
        }

        .logo-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          cursor: pointer;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .logo-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 600;
          color: var(--gold-primary);
          letter-spacing: 0.05em;
          transition: all 0.4s ease;
        }

        .header-wrapper.scrolled .logo-name {
          font-size: 1.5rem;
        }

        .logo-tagline {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.65rem;
          font-weight: 400;
          color: var(--gold-light);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          opacity: 0.8;
          transition: all 0.4s ease;
        }

        .header-wrapper.scrolled .logo-tagline {
          font-size: 0.55rem;
        }

        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link {
          position: relative;
          padding: 0.75rem 1.25rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 400;
          color: var(--ivory);
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: all 0.3s ease;
          border-radius: 8px;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0.5rem;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 20px;
          height: 1px;
          background: var(--gold-primary);
          transition: transform 0.3s ease;
        }

        .nav-link:hover {
          color: var(--gold-light);
        }

        .nav-link:hover::before {
          transform: translateX(-50%) scaleX(1);
        }

        .nav-link.active {
          color: var(--gold-primary);
        }

        .nav-link.active::before {
          transform: translateX(-50%) scaleX(1);
        }

        .cta-button {
          position: relative;
          padding: 0.875rem 1.75rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--charcoal);
          text-decoration: none;
          letter-spacing: 0.1em;
          background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 50%, var(--gold-primary) 100%);
          background-size: 200% 200%;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
          transition: all 0.4s ease;
          margin-left: 1rem;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold-primary) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(212, 175, 55, 0.4);
          background-position: 100% 100%;
        }

        .cta-button:hover::before {
          opacity: 1;
        }

        .cta-button span {
          position: relative;
          z-index: 1;
        }

        /* Mobile Menu Button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 44px;
          height: 44px;
          background: transparent;
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          border-color: var(--gold-primary);
        }

        .menu-line {
          width: 20px;
          height: 2px;
          background: var(--gold-primary);
          transition: all 0.3s ease;
          margin: 2px 0;
        }

        .mobile-menu-btn.open .menu-line:nth-child(1) {
          transform: rotate(45deg) translate(4px, 4px);
        }

        .mobile-menu-btn.open .menu-line:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-btn.open .menu-line:nth-child(3) {
          transform: rotate(-45deg) translate(4px, -4px);
        }

        /* Mobile Navigation */
        .nav-mobile {
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(26, 26, 26, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 999;
        }

        .nav-mobile.open {
          opacity: 1;
          visibility: visible;
        }

        .nav-mobile .nav-link {
          font-size: 1.5rem;
          padding: 1rem 2rem;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 500;
          letter-spacing: 0.1em;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .nav-mobile.open .nav-link {
          transform: translateY(0);
          opacity: 1;
        }

        .nav-mobile.open .nav-link:nth-child(1) { transition-delay: 0.1s; }
        .nav-mobile.open .nav-link:nth-child(2) { transition-delay: 0.15s; }
        .nav-mobile.open .nav-link:nth-child(3) { transition-delay: 0.2s; }
        .nav-mobile.open .nav-link:nth-child(4) { transition-delay: 0.25s; }
        .nav-mobile.open .nav-link:nth-child(5) { transition-delay: 0.3s; }

        .nav-mobile .cta-button {
          margin-left: 0;
          margin-top: 1rem;
          font-size: 1rem;
          padding: 1rem 2.5rem;
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
          transition-delay: 0.35s;
        }

        .nav-mobile.open .cta-button {
          transform: translateY(0);
          opacity: 1;
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: fixed;
          top: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold-primary), var(--gold-light));
          z-index: 1001;
          transition: width 0.1s ease-out;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .nav-desktop {
            display: none;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .nav-mobile {
            display: flex;
          }

          .header-wrapper {
            padding: 0.75rem 1rem;
          }

          .header {
            padding: 0.75rem 1rem;
          }

          .logo-name {
            font-size: 1.25rem;
          }

          .logo-tagline {
            font-size: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .logo-text {
            display: none;
          }
        }

        /* Animation keyframes */
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .cta-button:hover {
          animation: shimmer 2s infinite linear;
        }
      `}</style>

      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      <div className={`header-wrapper ${scrolled ? "scrolled" : ""}`}>
        <header className="header">
          <Link href="/" className="logo-container">
            <KeysianLogo scrolled={scrolled} />
            <div className="logo-text">
              <span className="logo-name">Keysian</span>
              <span className="logo-tagline">Auctioneers</span>
            </div>
          </Link>

          <nav className="nav-desktop">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${activeLink === link.href ? "active" : ""}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="cta-button">
              <span>Contact Us</span>
            </Link>
          </nav>

          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="menu-line"></span>
            <span className="menu-line"></span>
            <span className="menu-line"></span>
          </button>
        </header>
      </div>

      {/* Mobile Navigation Overlay */}
      <nav className={`nav-mobile ${mobileMenuOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${activeLink === link.href ? "active" : ""}`}
            onClick={() => {
              setActiveLink(link.href);
              setMobileMenuOpen(false);
            }}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="cta-button"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Contact Us</span>
        </Link>
      </nav>
    </>
  );
}

// Scroll Progress Component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return <div className="scroll-indicator" style={{ width: `${progress}%` }} />;
}