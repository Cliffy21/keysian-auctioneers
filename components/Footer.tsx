"use client";

import Link from 'next/link';

const footerLinks = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Auctions', href: '/auctions' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
  resources: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', icon: 'FB' },
  { name: 'Twitter', href: 'https://twitter.com', icon: 'TW' },
  { name: 'Instagram', href: 'https://instagram.com', icon: 'IG' },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'IN' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style jsx>{`
        .footer {
          background: #2d2d2d;
          border-top: 1px solid rgba(212, 175, 55, 0.15);
          padding: 4rem 2rem 2rem;
          color: rgba(255, 254, 247, 0.7);
          margin-top: auto;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: min(200px, 80%);
          height: 1px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          opacity: 0.3;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr 2fr;
          }
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #F4E4BC;
          text-decoration: none;
          letter-spacing: 1px;
        }

        .tagline {
          font-size: 0.9rem;
          color: rgba(255, 254, 247, 0.6);
          line-height: 1.5;
          max-width: 300px;
        }

        .footer-sections {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 2rem;
        }

        .footer-section h3 {
          color: #F4E4BC;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .footer-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links-list a {
          color: rgba(255, 254, 247, 0.7);
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          font-family: 'Montserrat', sans-serif;
        }

        .footer-links-list a:hover {
          color: #F4E4BC;
          padding-left: 4px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 254, 247, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .social-link:hover {
          background: rgba(212, 175, 55, 0.1);
          border-color: #D4AF37;
          color: #F4E4BC;
          transform: translateY(-2px);
        }

        .footer-bottom {
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 254, 247, 0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          grid-column: 1 / -1;
        }

        .copyright {
          font-size: 0.85rem;
          color: rgba(255, 254, 247, 0.6);
          margin: 0;
        }

        .legal-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .legal-links a {
          color: rgba(255, 254, 247, 0.6);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .legal-links a:hover {
          color: #F4E4BC;
        }

        .disclaimer {
          font-size: 0.8rem;
          color: rgba(255, 254, 247, 0.5);
          line-height: 1.4;
          max-width: 800px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 3rem 1.5rem 1.5rem;
          }

          .footer-sections {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .social-links {
            justify-content: center;
          }

          .footer-brand {
            text-align: center;
            align-items: center;
          }

          .legal-links {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
        }
      `}</style>
      
      <footer className="footer">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <Link href="/" className="logo">
              Keysian Auctioneers
            </Link>
            <p className="tagline">
              Premier auction services with a legacy of excellence and trust since 1995.
            </p>
            
            {/* Social Links */}
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="social-link"
                  aria-label={`Visit our ${social.name} page`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="footer-sections">
            <div className="footer-section">
              <h3>Navigation</h3>
              <ul className="footer-links-list">
                {footerLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Resources</h3>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h3>Legal</h3>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Keysian Auctioneers. All rights reserved.
            </p>
            
            <div className="legal-links">
              {footerLinks.legal.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
            
            <p className="disclaimer">
              Keysian Auctioneers is a registered trademark. All auction items are subject to verification. 
              Prices may vary. By using our services, you agree to our terms and conditions.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}