"use client";

import Card from "../../components/Card";

export default function AuctionsPage() {
  return (
    <>
      <style jsx>{`
        .auction-label {
          color: #F4E4BC;
          font-weight: 500;
        }

        .auction-footer {
          margin-top: 3rem;
          text-align: center;
          color: rgba(255, 254, 247, 0.7);
        }
      `}</style>
      <section className="section">
        <h1>Public Auctions</h1>
        <p className="subtitle">
          View upcoming and ongoing public auctions. All auctions are conducted in compliance with Kenyan law.
        </p>

        <div className="grid-3">
          <Card>
            <h3>Motor Vehicle Auction</h3>
            <p>
              <strong className="auction-label">Date:</strong> 15th March 2026<br />
              <strong className="auction-label">Location:</strong> Nairobi<br />
              <strong className="auction-label">Time:</strong> 10:00 AM
            </p>
          </Card>

          <Card>
            <h3>Household Goods Auction</h3>
            <p>
              <strong className="auction-label">Date:</strong> 22nd March 2026<br />
              <strong className="auction-label">Location:</strong> Nakuru<br />
              <strong className="auction-label">Time:</strong> 9:00 AM
            </p>
          </Card>

          <Card>
            <h3>Office Equipment Auction</h3>
            <p>
              <strong className="auction-label">Date:</strong> 29th March 2026<br />
              <strong className="auction-label">Location:</strong> Mombasa<br />
              <strong className="auction-label">Time:</strong> 11:00 AM
            </p>
          </Card>
        </div>

        <p className="auction-footer">
          For full auction details and catalogs, contact us or download the notices below.
        </p>
      </section>
    </>
  );
}
  