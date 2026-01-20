import Card from "../../components/Card";

export default function ServicesPage() {
  return (
    <section className="section">
      <h1>Our Services</h1>
      <p className="subtitle">
        Professional, ethical, and legally compliant auctioneering services delivered with integrity and transparency.
      </p>

      <div className="grid-3">
        <Card>
          <h3>Public Auctions</h3>
          <p>
            Conducting transparent public auctions for movable and immovable
            assets in full compliance with Kenyan auctioneering laws and regulations.
          </p>
        </Card>

        <Card>
          <h3>Debt Recovery</h3>
          <p>
            Professional debt recovery services on behalf of financial
            institutions, landlords, and businesses. Legal and ethical practices throughout.
          </p>
        </Card>

        <Card>
          <h3>Asset Valuation</h3>
          <p>
            Accurate and professional valuation of assets prior to auction or disposal.
            Comprehensive assessment reports provided.
          </p>
        </Card>

        <Card>
          <h3>Distress for Rent</h3>
          <p>
            Lawful distress execution services in accordance with court orders.
            Fully compliant with legal requirements.
          </p>
        </Card>

        <Card>
          <h3>Private Treaty Sales</h3>
          <p>
            Negotiated asset sales outside public auctions where applicable.
            Flexible solutions tailored to your needs.
          </p>
        </Card>

        <Card>
          <h3>Asset Disposal</h3>
          <p>
            Organized and efficient disposal of obsolete or repossessed assets.
            Maximizing value through strategic planning.
          </p>
        </Card>
      </div>
    </section>
  );
}
