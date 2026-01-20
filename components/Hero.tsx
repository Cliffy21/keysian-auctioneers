"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// Types
interface StatItemProps {
  value: string;
  label: string;
  delay: number;
}

interface FloatingImageProps {
  src: string;
  alt: string;
  className: string;
  style?: React.CSSProperties;
}

// Floating Image Component
const FloatingImage: React.FC<FloatingImageProps> = ({ src, alt, className, style }) => (
  <div className={`floating-image ${className}`} style={style}>
    <Image
      src={src}
      alt={alt}
      fill
      style={{ objectFit: "cover" }}
      sizes="(max-width: 768px) 150px, 250px"
    />
  </div>
);

// Stat Counter Component
const StatItem: React.FC<StatItemProps> = ({ value, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={`stat-item ${isVisible ? "visible" : ""}`}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

// WhatsApp Icon
const WhatsAppIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Arrow Icon
const ArrowIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// Gavel Icon
const GavelIcon: React.FC = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2.5L21.5 9.5" />
    <path d="M12 5L19 12" />
    <rect x="2" y="14" width="6" height="8" rx="1" />
    <path d="M5 14V10L12 5" />
  </svg>
);

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const stats = [
    { value: "15+", label: "Years Experience", delay: 800 },
    { value: "2,500+", label: "Successful Auctions", delay: 1000 },
    { value: "98%", label: "Client Satisfaction", delay: 1200 },
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        :root {
          --gold-primary: #D4AF37;
          --gold-light: #F4E4BC;
          --gold-dark: #8B7023;
          --gold-muted: #C9A227;
          --charcoal: #1a1a1a;
          --charcoal-light: #2d2d2d;
          --charcoal-medium: #242424;
          --ivory: #FFFEF7;
          --ivory-muted: rgba(255, 254, 247, 0.7);
          --glass-bg: rgba(26, 26, 26, 0.6);
          --glass-border: rgba(212, 175, 55, 0.15);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Montserrat', sans-serif;
          background: var(--charcoal);
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 8rem 2rem 4rem;
          overflow: hidden;
          background: var(--charcoal);
        }

        /* Background Effects */
        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: pulse 8s ease-in-out infinite;
        }

        .gradient-orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 70%);
          top: -200px;
          right: -100px;
          animation-delay: 0s;
        }

        .gradient-orb-2 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.2) 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
          animation-delay: 4s;
        }

        .gradient-orb-3 {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(244, 228, 188, 0.15) 0%, transparent 70%);
          top: 40%;
          left: 30%;
          animation-delay: 2s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }

        /* Grid Pattern Overlay */
        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
        }

        /* Noise Texture */
        .noise-overlay {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        /* Hero Container */
        .hero-container {
          position: relative;
          z-index: 10;
          max-width: 1400px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        /* Content Side */
        .hero-content {
          position: relative;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.625rem 1.25rem;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--glass-border);
          border-radius: 50px;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.8s ease forwards 0.2s;
        }

        .hero-badge svg {
          color: var(--gold-primary);
        }

        .hero-badge span {
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--gold-light);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.75rem, 5vw, 4.5rem);
          font-weight: 600;
          color: var(--ivory);
          line-height: 1.1;
          margin-bottom: 1.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease forwards 0.4s;
        }

        .hero-title .highlight {
          color: var(--gold-primary);
          position: relative;
          display: inline-block;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 0.1em;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--gold-primary), var(--gold-light));
          transform: scaleX(0);
          transform-origin: left;
          animation: lineGrow 0.8s ease forwards 1.2s;
        }

        @keyframes lineGrow {
          to { transform: scaleX(1); }
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--ivory-muted);
          line-height: 1.8;
          max-width: 520px;
          margin-bottom: 2.5rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease forwards 0.6s;
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* CTA Buttons */
        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeUp 0.8s ease forwards 0.8s;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          border: none;
        }

        .btn.primary {
          background: linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-muted) 100%);
          color: var(--charcoal);
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .btn.primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }

        .btn.primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-arrow {
          transition: transform 0.3s ease;
        }

        .btn.secondary {
          background: transparent;
          color: var(--ivory);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        .btn.secondary:hover {
          background: rgba(37, 211, 102, 0.1);
          border-color: #25D366;
          color: #25D366;
        }

        .btn.secondary svg {
          transition: transform 0.3s ease;
        }

        .btn.secondary:hover svg {
          transform: scale(1.1);
        }

        /* Stats Row */
        .hero-stats {
          display: flex;
          gap: 3rem;
          margin-top: 4rem;
          padding-top: 2.5rem;
          border-top: 1px solid var(--glass-border);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .stat-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--gold-primary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--ivory-muted);
          letter-spacing: 0.05em;
        }

        /* Visual Side - Image Composition */
        .hero-visual {
          position: relative;
          height: 600px;
          perspective: 1000px;
        }

        /* Main Featured Image */
        .main-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 380px;
          height: 480px;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 0 1px var(--glass-border);
          opacity: 0;
          animation: mainImageIn 1s ease forwards 0.5s;
        }

        .main-image::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(26, 26, 26, 0.8) 100%
          );
          z-index: 1;
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes mainImageIn {
          from { opacity: 0; transform: translate(-50%, -45%) scale(0.9); }
          to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }

        /* Floating Images */
        .floating-image {
          position: absolute;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 
            0 15px 40px rgba(0, 0, 0, 0.4),
            0 0 0 1px var(--glass-border);
          transition: transform 0.3s ease;
        }

        .floating-image:hover {
          transform: scale(1.05) !important;
          z-index: 20;
        }

        .float-1 {
          width: 180px;
          height: 130px;
          top: 5%;
          left: 0;
          opacity: 0;
          animation: floatIn 0.8s ease forwards 0.8s;
        }

        .float-2 {
          width: 160px;
          height: 200px;
          bottom: 10%;
          left: -5%;
          opacity: 0;
          animation: floatIn 0.8s ease forwards 1s;
        }

        .float-3 {
          width: 200px;
          height: 140px;
          top: 15%;
          right: -5%;
          opacity: 0;
          animation: floatIn 0.8s ease forwards 1.2s;
        }

        .float-4 {
          width: 150px;
          height: 110px;
          bottom: 5%;
          right: 5%;
          opacity: 0;
          animation: floatIn 0.8s ease forwards 1.4s;
        }

        @keyframes floatIn {
          from { opacity: 0; transform: translateY(30px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Decorative Elements */
        .decorative-ring {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          border: 1px solid var(--glass-border);
          border-radius: 50%;
          opacity: 0;
          animation: ringFade 1s ease forwards 0.3s;
        }

        .decorative-ring-2 {
          width: 420px;
          height: 420px;
          animation-delay: 0.5s;
        }

        @keyframes ringFade {
          to { opacity: 0.5; }
        }

        /* Glass Card Overlay */
        .glass-card {
          position: absolute;
          bottom: 15%;
          left: 50%;
          transform: translateX(-50%);
          padding: 1.25rem 2rem;
          background: var(--glass-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          z-index: 15;
          opacity: 0;
          animation: cardSlide 0.8s ease forwards 1.5s;
        }

        @keyframes cardSlide {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .glass-card-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .live-indicator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #22c55e;
          border-radius: 50%;
          animation: livePulse 2s ease-in-out infinite;
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }

        .live-text {
          font-size: 0.7rem;
          font-weight: 600;
          color: #22c55e;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .glass-card-divider {
          width: 1px;
          height: 30px;
          background: var(--glass-border);
        }

        .auction-count {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          color: var(--gold-primary);
        }

        .auction-count span {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          color: var(--ivory-muted);
          margin-left: 0.5rem;
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          opacity: 0;
          animation: fadeUp 0.8s ease forwards 1.8s;
        }

        .scroll-text {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--gold-light);
          opacity: 0.6;
        }

        .scroll-line {
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, var(--gold-primary), transparent);
          position: relative;
        }

        .scroll-line::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 20px;
          background: var(--gold-light);
          animation: scrollDown 2s ease-in-out infinite;
        }

        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(50px); opacity: 0; }
        }

        /* Responsive Design */
        @media (max-width: 1100px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-description {
            max-width: 600px;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-visual {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 7rem 1.5rem 3rem;
          }

          .hero-stats {
            gap: 2rem;
            flex-wrap: wrap;
          }

          .stat-value {
            font-size: 2rem;
          }

          .btn {
            padding: 0.875rem 1.5rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            justify-content: center;
            width: 100%;
          }

          .hero-stats {
            gap: 1.5rem;
          }
        }
      `}</style>

      <section className="hero" ref={heroRef}>
        {/* Background Effects */}
        <div className="hero-background">
          <div className="gradient-orb gradient-orb-1" />
          <div className="gradient-orb gradient-orb-2" />
          <div className="gradient-orb gradient-orb-3" />
          <div className="grid-pattern" />
          <div className="noise-overlay" />
        </div>

        <div className="hero-container">
          {/* Content Side */}
          <div className="hero-content">
            <div className="hero-badge">
              <GavelIcon />
              <span>Licensed Auctioneers Since 2009</span>
            </div>

            <h1 className="hero-title">
              Professional <span className="highlight">Auctioneers</span> You Can Trust
            </h1>

            <p className="hero-description">
              Kenya&apos;s leading auction house delivering transparent auctions, 
              expert asset valuation, and reliable debt recovery services. 
              Your trusted partner in maximizing asset value.
            </p>

            <div className="hero-actions">
              <Link href="/auctions" className="btn primary">
                View Auctions
                <span className="btn-arrow">
                  <ArrowIcon />
                </span>
              </Link>
              <a
                href="https://wa.me/254723937043"
                target="_blank"
                rel="noopener noreferrer"
                className="btn secondary"
              >
                <WhatsAppIcon />
                WhatsApp Us
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <StatItem
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  delay={stat.delay}
                />
              ))}
            </div>
          </div>

          {/* Visual Side */}
          <div className="hero-visual">
            {/* Decorative Rings */}
            <div className="decorative-ring" />
            <div className="decorative-ring decorative-ring-2" />

            {/* Main Image */}
            <div
              className="main-image"
              style={{
                transform: `translate(calc(-50% + ${mousePosition.x * 2}px), calc(-50% + ${mousePosition.y * 2}px))`,
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973"
                alt="Professional auction house"
                fill
                style={{ objectFit: "cover" }}
                priority
                sizes="380px"
              />
            </div>

            {/* Floating Images with Parallax */}
            <FloatingImage
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1296"
              alt="Property auction"
              className="float-1"
              style={{
                transform: `translate(${mousePosition.x * -3}px, ${mousePosition.y * -3}px)`,
              }}
            />
            <FloatingImage
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1740"
              alt="Business meeting"
              className="float-2"
              style={{
                transform: `translate(${mousePosition.x * 4}px, ${mousePosition.y * 4}px)`,
              }}
            />
            <FloatingImage
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1740"
              alt="Luxury property"
              className="float-3"
              style={{
                transform: `translate(${mousePosition.x * -2}px, ${mousePosition.y * -2}px)`,
              }}
            />
            <FloatingImage
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1973"
              alt="Gavel"
              className="float-4"
              style={{
                transform: `translate(${mousePosition.x * 3}px, ${mousePosition.y * 3}px)`,
              }}
            />

            {/* Glass Card */}
            <div className="glass-card">
              <div className="glass-card-content">
                <div className="live-indicator">
                  <div className="live-dot" />
                  <span className="live-text">Live</span>
                </div>
                <div className="glass-card-divider" />
                <div className="auction-count">
                  12 <span>Active Auctions</span>
                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}