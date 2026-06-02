"use client";

import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#05070B",
        borderTop: "1px solid var(--border-light)",
        color: "var(--white)",
        padding: "80px 0 40px 0",
        fontFamily: "var(--font-sans)",
      }}
    >
      <div className="container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand Column */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "20px", margin: "0 auto" }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.8rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
              }}
            >
              HUELUXE
            </span>
            <p
              style={{
                color: "var(--gray-med)",
                fontSize: "0.85rem",
                lineHeight: 1.7,
                fontWeight: 300,
                maxWidth: "320px",
              }}
            >
              Crafting premium garments for the discerning gentleman. Sophisticated tailoring meets performance, comfort, and timeless minimalist aesthetics.
            </p>
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <a href="https://instagram.com/wearhueluxe" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="mailto:hueluxeclothing@gmail.com" aria-label="Gmail" className="social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.04)",
            marginTop: "60px",
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            fontSize: "0.75rem",
            color: "var(--gray-med)",
            fontWeight: 300,
          }}
        >
          <p>&copy; {new Date().getFullYear()} HUELUXE Clothing. All rights reserved.</p>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" className="footer-hover-link">Privacy Policy</a>
            <a href="#" className="footer-hover-link">Terms & Conditions</a>
            <a href="#" className="footer-hover-link">Cookie Settings</a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }
        @media (max-width: 991px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border: 1px solid var(--border-light);
          color: var(--white);
          transition: var(--transition-fast);
        }
        .social-link:hover {
          color: var(--gold) !important;
          border-color: var(--gold) !important;
          transform: translateY(-2px);
        }
        .footer-hover-link {
          transition: var(--transition-fast);
        }
        .footer-hover-link:hover {
          color: var(--white) !important;
        }
      `}</style>
    </footer>
  );
}
