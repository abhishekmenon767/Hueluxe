import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata = {
  title: "HUELUXE | Luxury Men's Premium Fit Shirts",
  description: "Explore HUELUXE Solid Premium Fit Shirts. Crafted for the modern gentleman who values elegance, comfort, and timeless style. Tailored with extra-long-staple cotton and Italian design principles.",
  keywords: "luxury clothing, premium fit shirts, men's fashion, tailored shirts, hueluxe, organic cotton, designer wear",
  authors: [{ name: "HUELUXE Atelier" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`} style={{ scrollBehavior: "smooth" }}>
      <body>
        {children}
      </body>
    </html>
  );
}
