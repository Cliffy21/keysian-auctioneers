"use client";

export default function StickyBar() {
  return (
    <>
      <style jsx>{`
        .sticky-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          background: rgba(26, 26, 26, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(212, 175, 55, 0.15);
          z-index: 999;
          padding: 0;
        }

        .sticky-bar a {
          flex: 1;
          text-align: center;
          padding: 1.25rem 1rem;
          color: #FFFEF7;
          text-decoration: none;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          letter-spacing: 0.05em;
        }

        .sticky-bar a::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .sticky-bar a:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #F4E4BC;
        }

        .sticky-bar a:hover::before {
          opacity: 1;
        }

        .sticky-bar a:not(:last-child) {
          border-right: 1px solid rgba(212, 175, 55, 0.15);
        }

        @media (max-width: 480px) {
          .sticky-bar a {
            padding: 1rem 0.75rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
      <div className="sticky-bar">
        <a href="tel:+254723937043">Call</a>
        <a
          href="https://wa.me/254723937043"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </>
  );
}
  