"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const categories = [
    {
      name: "Fabric Quality",
      hueluxe: "Premium Long-Staple Cotton",
      hueluxeDesc: "Spun with ELS cotton fibers for an exceptionally smooth, silk-like feel.",
      others: "Standard Short-Staple Cotton",
      othersDesc: "Rough textures prone to piling and static charges.",
    },
    {
      name: "Fit Profile",
      hueluxe: "Precision Tailored Fit",
      hueluxeDesc: "Engineered back darts to accent chest/shoulders and slim towards the waist.",
      others: "Generic Boxy Cut",
      othersDesc: "Excess fabric that bags around the beltline.",
    },
    {
      name: "Timeless Design",
      hueluxe: "Italian-Inspired Minimalism",
      hueluxeDesc: "Clean placket and classic spread collars matching modern luxury styling.",
      others: "Fast-fashion Trends",
      othersDesc: "Loud, transient styles that look outdated within a single season.",
    },
    {
      name: "Longevity",
      hueluxe: "Anti-Shrink, Color-Lock",
      hueluxeDesc: "Retains high-contrast deep black/navy tones even after dozens of laundry cycles.",
      others: "Fades & Shrinks",
      othersDesc: "Loses color intensity and distorts shape after 3-5 standard washes.",
    },
    {
      name: "Elegant Finish",
      hueluxe: "Mother-of-Pearl Details",
      hueluxeDesc: "Natural nacre shell buttons showing iridescent tones under ambient light.",
      others: "Cheap Plastic Buttons",
      othersDesc: "Brittle standard plastic resin buttons that crack under laundry heat.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="why-hueluxe" style={{ padding: "120px 0", backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag">THE COMPARISON</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            The HUELUXE Edge
          </h2>
        </div>

        {/* Custom Comparison Table Layout */}
        <div
          className="glass-panel"
          style={{
            overflow: "hidden",
            border: "1px solid var(--border-light)",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          {/* Header Row */}
          <div
            className="comparison-row-header"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr 1.2fr",
              padding: "24px 30px",
              borderBottom: "1px solid var(--border-light)",
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              textTransform: "uppercase",
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "var(--gray-med)",
            }}
          >
            <div>Feature</div>
            <div style={{ color: "var(--gold)", fontWeight: 600 }}>HUELUXE ATELIER</div>
            <div>HIGH-STREET BRANDS</div>
          </div>

          {/* Rows */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {categories.map((row, index) => (
              <div
                key={row.name}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1.2fr 1.2fr",
                  padding: "35px 30px",
                  borderBottom: index < categories.length - 1 ? "1px solid var(--border-light)" : "none",
                  backgroundColor: hoveredIndex === index ? "rgba(212, 175, 55, 0.03)" : "transparent",
                  transition: "background-color 0.3s ease",
                  alignItems: "start",
                  gap: "20px",
                }}
              >
                {/* Feature Name */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.4rem",
                      color: hoveredIndex === index ? "var(--gold)" : "var(--white)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {row.name}
                  </span>
                </div>

                {/* Hueluxe Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--gold)", fontWeight: 500, fontSize: "0.95rem" }}>
                    <Check size={16} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span>{row.hueluxe}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "var(--gray-med)", lineHeight: 1.5, fontWeight: 300, paddingLeft: "26px" }}>
                    {row.hueluxeDesc}
                  </p>
                </div>

                {/* Others Column */}
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(255, 255, 255, 0.5)", fontWeight: 400, fontSize: "0.95rem" }}>
                    <X size={16} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    <span>{row.others}</span>
                  </div>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255, 255, 255, 0.35)", lineHeight: 1.5, fontWeight: 300, paddingLeft: "26px" }}>
                    {row.othersDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .comparison-row-header {
            display: none !important;
          }
          /* Stacked on mobile */
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
            padding: 30px 20px !important;
            gap: 15px !important;
          }
        }
      `}</style>
    </section>
  );
}
