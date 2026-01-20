"use client";

import Card from "../../components/Card";

export default function DownloadsPage() {
  return (
    <>
      <style jsx>{`
        .download-card-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .download-card-description {
          margin-bottom: 1.5rem;
          flex: 1;
        }

        .download-button {
          margin-top: auto;
        }
      `}</style>
      <section className="section">
        <h1>Downloads</h1>
        <p className="subtitle">
          Access auction notices, catalogs, and official documents. All documents are in PDF format.
        </p>

        <div className="grid-3">
          <Card>
            <div className="download-card-content">
              <h3>Motor Vehicle Auction Notice</h3>
              <p className="download-card-description">
                Official notice for upcoming motor vehicle auction in Nairobi.
              </p>
              <a href="#" className="btn primary download-button">
                Download PDF
              </a>
            </div>
          </Card>

          <Card>
            <div className="download-card-content">
              <h3>Household Goods Auction Notice</h3>
              <p className="download-card-description">
                Official notice for household goods auction in Nakuru.
              </p>
              <a href="#" className="btn primary download-button">
                Download PDF
              </a>
            </div>
          </Card>

          <Card>
            <div className="download-card-content">
              <h3>General Auction Terms</h3>
              <p className="download-card-description">
                Standard terms and conditions for all public auctions.
              </p>
              <a href="#" className="btn primary download-button">
                Download PDF
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
  