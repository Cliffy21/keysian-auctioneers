"use client";

import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'secondary',
  className = '',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <>
      <style jsx>{`
        .btn-base {
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
          letter-spacing: 0.05em;
          white-space: nowrap;
        }

        .btn-base:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-primary {
          background: linear-gradient(135deg, #D4AF37 0%, #C9A227 100%);
          color: #1a1a1a;
          box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
          background: linear-gradient(135deg, #F4E4BC 0%, #D4AF37 100%);
        }

        .btn-secondary {
          background: rgba(26, 26, 26, 0.6);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          color: #FFFEF7;
        }

        .btn-secondary:hover:not(:disabled) {
          background: rgba(212, 175, 55, 0.1);
          border-color: #D4AF37;
          color: #F4E4BC;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .btn-ghost {
          background: transparent;
          border: 1px solid transparent;
          color: #FFFEF7;
        }

        .btn-ghost:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.06);
          color: #F4E4BC;
        }

        @media (max-width: 768px) {
          .btn-base {
            padding: 0.875rem 1.5rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
      {href && !disabled ? (
        <Link href={href} className={`btn-base btn-${variant} ${className}`}>
          {children}
        </Link>
      ) : (
        <button
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`btn-base btn-${variant} ${className}`}
        >
          {children}
        </button>
      )}
    </>
  );
}