"use client";

import Card from "../../components/Card";

export default function ContactPage() {
  return (
    <>
      <style jsx>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          margin-top: 3rem;
        }

        .contact-info-item {
          margin-bottom: 1.5rem;
        }

        .contact-info-label {
          margin-bottom: 0.5rem;
          color: #F4E4BC;
          font-weight: 500;
        }

        .contact-info-value {
          color: #FFFEF7;
        }

        .contact-info-value a {
          color: #FFFEF7;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info-value a:hover {
          color: #F4E4BC;
        }

        @media (max-width: 968px) {
          .contact-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
      <section className="section">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Get in touch for auction services, inquiries, or consultations. We're here to help.
        </p>

        <div className="contact-wrapper">
          <div>
            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Your Message" rows={5} required />

              <button type="submit" className="btn primary">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <Card>
              <h3>Contact Information</h3>
              <div style={{ marginTop: "2rem" }}>
                <div className="contact-info-item">
                  <p className="contact-info-label">
                    <strong>Phone</strong>
                  </p>
                  <p className="contact-info-value">
                    <a href="tel:+254723937043">+254 723 937 043</a>
                  </p>
                </div>
                <div className="contact-info-item">
                  <p className="contact-info-label">
                    <strong>Email</strong>
                  </p>
                  <p className="contact-info-value">
                    <a href="mailto:info@keysianauctioneers.co.ke">info@keysianauctioneers.co.ke</a>
                  </p>
                </div>
                <div className="contact-info-item">
                  <p className="contact-info-label">
                    <strong>WhatsApp</strong>
                  </p>
                  <p className="contact-info-value">
                    <a href="https://wa.me/254723937043" target="_blank" rel="noopener noreferrer">
                      Chat with us on WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
  