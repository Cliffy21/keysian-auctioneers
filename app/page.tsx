import Hero from "../components/Hero";
import Card from "../components/Card";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section">
        <h2>Who We Are</h2>
        <p className="subtitle">
          Keysian Auctioneers is a licensed auctioneering firm providing
          professional auction, debt recovery, valuation, and asset disposal
          services across Kenya.
        </p>
      </section>

      <section className="section">
        <h2>Our Services</h2>
        <div className="grid-3">
          <Card>
            <h3>Public Auctions</h3>
            <p>Transparent, well-managed public auctions with full compliance to Kenyan auctioneering laws and regulations.</p>
          </Card>
          <Card>
            <h3>Debt Recovery</h3>
            <p>Legal and ethical debt recovery services for financial institutions, landlords, and businesses.</p>
          </Card>
          <Card>
            <h3>Asset Valuation</h3>
            <p>Professional and accurate valuation of movable and immovable assets prior to auction or disposal.</p>
          </Card>
        </div>
      </section>
    </>
  );
}
