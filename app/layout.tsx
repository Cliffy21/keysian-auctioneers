import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StickyBar from "../components/StickyBar";

export const metadata = {
  title: "Keysian Auctioneers",
  description: "Professional Auctioneers & Debt Recovery Services in Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
      </body>
    </html>
  );
}
