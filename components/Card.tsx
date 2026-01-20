"use client";

import { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
}

export default function Card({ children, href, className = '' }: CardProps) {
  return (
    <>
      <style jsx>{`
        .card-base {
          background: rgba(26, 26, 26, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 16px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          display: block;
        }

        .card-base::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .card-base:hover {
          transform: translateY(-8px);
          border-color: rgba(212, 175, 55, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }

        .card-base:hover::before {
          opacity: 1;
        }

        .card-content {
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .card-base {
            padding: 2rem;
          }
        }

        @media (max-width: 768px) {
          .card-base {
            padding: 1.75rem;
          }
        }
      `}</style>
      {href ? (
        <Link href={href} className={`card-base ${className}`}>
          <div className="card-content">{children}</div>
        </Link>
      ) : (
        <div className={`card-base ${className}`}>
          <div className="card-content">{children}</div>
        </div>
      )}
    </>
  );
}