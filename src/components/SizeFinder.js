"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function SizeFinder() {
  const [unitSystem, setUnitSystem] = useState("metric"); // 'metric' or 'imperial'
  
  // Input states
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [recommendedSize, setRecommendedSize] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const sizeChart = {
    metric: [
      { size: "M", chest: "98 cm", waist: "90 cm", collar: "40 cm", sleeve: "86 cm" },
      { size: "L", chest: "104 cm", waist: "96 cm", collar: "42 cm", sleeve: "88 cm" },
      { size: "XL", chest: "110 cm", waist: "102 cm", collar: "44 cm", sleeve: "90 cm" },
    ],
    imperial: [
      { size: "M", chest: '38.5"', waist: '35.5"', collar: '15.7"', sleeve: '34"' },
      { size: "L", chest: '41"', waist: '38"', collar: '16.5"', sleeve: '34.5"' },
      { size: "XL", chest: '43.5"', waist: '40"', collar: '17.3"', sleeve: '35.5"' },
    ],
  };

  const handleUnitToggle = (system) => {
    setUnitSystem(system);
    // Convert current inputs if present
    if (height) {
      if (system === "imperial") {
        setHeight((parseFloat(height) / 2.54).toFixed(0));
      } else {
        setHeight((parseFloat(height) * 2.54).toFixed(0));
      }
    }
    if (weight) {
      if (system === "imperial") {
        setWeight((parseFloat(weight) * 2.20462).toFixed(0));
      } else {
        setWeight((parseFloat(weight) / 2.20462).toFixed(0));
      }
    }
  };

  const calculateSize = (e) => {
    e.preventDefault();
    setErrorMsg("");
    setRecommendedSize(null);

    const hVal = parseFloat(height);
    const wVal = parseFloat(weight);

    if (isNaN(hVal) || isNaN(wVal) || hVal <= 0 || wVal <= 0) {
      setErrorMsg("Please enter valid positive height and weight values.");
      return;
    }

    // Convert inputs to Metric internally for the engine if they are Imperial
    let hCm = hVal;
    let wKg = wVal;

    if (unitSystem === "imperial") {
      hCm = hVal * 2.54;
      wKg = wVal / 2.20462;
    }

    // Validation boundary check
    if (hCm < 140 || hCm > 220 || wKg < 40 || wKg > 150) {
      setErrorMsg("Measurements are outside our standard sizing curve. Please contact our bespoke support.");
      return;
    }

    let calculated = "M";
    if (hCm < 170) {
      if (wKg < 78) calculated = "M";
      else calculated = "L";
    } else if (hCm >= 170 && hCm <= 182) {
      if (wKg < 70) calculated = "M";
      else if (wKg < 85) calculated = "L";
      else calculated = "XL";
    } else {
      if (wKg < 80) calculated = "L";
      else calculated = "XL";
    }

    setRecommendedSize(calculated);
  };

  return (
    <section id="size-guide" style={{ padding: "120px 0", backgroundColor: "var(--bg-dark)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag">FIND YOUR FIT</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Interactive Size Chart
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="sizeguide-grid">
          {/* Left Side Finder Engine */}
          <div className="glass-panel" style={{ padding: "45px 35px", border: "1px solid var(--border-light)" }}>
            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.6rem",
                fontWeight: 400,
                marginBottom: "10px",
              }}
            >
              Fit Recommendation Engine
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--gray-med)", marginBottom: "30px", fontWeight: 300 }}>
              Input your physical metrics to discover your engineered HUELUXE fit profile.
            </p>

            <form onSubmit={calculateSize} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gray-med)" }}>
                    Height
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      placeholder={unitSystem === "metric" ? "180" : "71"}
                      style={{
                        width: "100%",
                        padding: "16px",
                        backgroundColor: "#05070B",
                        border: "1px solid var(--border-light)",
                        color: "var(--white)",
                        fontFamily: "var(--font-sans)",
                        outline: "none",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "0.8rem",
                        color: "var(--gray-med)",
                      }}
                    >
                      {unitSystem === "metric" ? "cm" : "in"}
                    </span>
                  </div>
                </div>

                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--gray-med)" }}>
                    Weight
                  </label>
                  <div style={{ position: "relative" }}>
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      placeholder={unitSystem === "metric" ? "75" : "165"}
                      style={{
                        width: "100%",
                        padding: "16px",
                        backgroundColor: "#05070B",
                        border: "1px solid var(--border-light)",
                        color: "var(--white)",
                        fontFamily: "var(--font-sans)",
                        outline: "none",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        right: "16px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        fontSize: "0.8rem",
                        color: "var(--gray-med)",
                      }}
                    >
                      {unitSystem === "metric" ? "kg" : "lbs"}
                    </span>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn btn-gold" style={{ width: "100%", marginTop: "10px" }}>
                Calculate Recommendation
              </button>
            </form>

            {/* Error Message */}
            {errorMsg && (
              <p style={{ color: "#F44336", fontSize: "0.85rem", marginTop: "15px", display: "flex", gap: "8px", alignItems: "center" }}>
                <Info size={14} />
                {errorMsg}
              </p>
            )}

            {/* Recommendation Result Display */}
            <div style={{ marginTop: "30px", borderTop: "1px solid var(--border-light)", paddingTop: "25px", minHeight: "100px" }}>
              <AnimatePresence mode="wait">
                {recommendedSize ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    style={{ textAlign: "center" }}
                  >
                    <span style={{ fontSize: "0.8rem", color: "var(--gray-med)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Your Engineered Fit Class
                    </span>
                    <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "3.5rem", fontWeight: 700, color: "var(--gold)", margin: "5px 0" }}>
                      {recommendedSize}
                    </h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--gray-med)", fontStyle: "italic" }}>
                      Calculated using micro-stretch garment tolerance curves.
                    </p>
                  </motion.div>
                ) : (
                  <motion.p
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    style={{ fontSize: "0.85rem", color: "var(--gray-med)", textAlign: "center", fontStyle: "italic", marginTop: "15px" }}
                  >
                    Enter height & weight metrics to reveal fit class.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Side Table Chart */}
          <div className="glass-panel" style={{ padding: "45px 35px", border: "1px solid var(--border-light)", display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "15px",
                marginBottom: "30px",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", fontWeight: 400 }}>Measurement Guide</h3>
              
              {/* Unit System Toggles */}
              <div style={{ display: "flex", border: "1px solid var(--border-light)" }}>
                <button
                  onClick={() => handleUnitToggle("metric")}
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    backgroundColor: unitSystem === "metric" ? "var(--white)" : "transparent",
                    color: unitSystem === "metric" ? "var(--bg-dark)" : "var(--white)",
                    fontWeight: 500,
                    transition: "var(--transition-fast)",
                  }}
                >
                  Metric
                </button>
                <button
                  onClick={() => handleUnitToggle("imperial")}
                  style={{
                    padding: "8px 16px",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    backgroundColor: unitSystem === "imperial" ? "var(--white)" : "transparent",
                    color: unitSystem === "imperial" ? "var(--bg-dark)" : "var(--white)",
                    fontWeight: 500,
                    transition: "var(--transition-fast)",
                  }}
                >
                  Imperial
                </button>
              </div>
            </div>

            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.9rem" }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border-light)" }}>
                    <th style={{ padding: "16px 12px", color: "var(--gold)", fontWeight: 500, letterSpacing: "0.05em" }}>Size</th>
                    <th style={{ padding: "16px 12px", color: "var(--gray-med)", fontWeight: 400 }}>Chest</th>
                    <th style={{ padding: "16px 12px", color: "var(--gray-med)", fontWeight: 400 }}>Waist</th>
                    <th style={{ padding: "16px 12px", color: "var(--gray-med)", fontWeight: 400 }}>Collar</th>
                    <th style={{ padding: "16px 12px", color: "var(--gray-med)", fontWeight: 400 }}>Sleeve</th>
                  </tr>
                </thead>
                <tbody>
                  {sizeChart[unitSystem].map((row) => {
                    const isHighlighted = recommendedSize === row.size;
                    return (
                      <tr
                        key={row.size}
                        style={{
                          borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                          backgroundColor: isHighlighted ? "rgba(212, 175, 55, 0.05)" : "transparent",
                          outline: isHighlighted ? "1px solid var(--border-gold)" : "none",
                          transition: "var(--transition-fast)",
                        }}
                      >
                        <td style={{ padding: "20px 12px", fontWeight: 700, color: isHighlighted ? "var(--gold)" : "var(--white)" }}>
                          {row.size}
                        </td>
                        <td style={{ padding: "20px 12px", color: isHighlighted ? "var(--white)" : "var(--gray-med)" }}>{row.chest}</td>
                        <td style={{ padding: "20px 12px", color: isHighlighted ? "var(--white)" : "var(--gray-med)" }}>{row.waist}</td>
                        <td style={{ padding: "20px 12px", color: isHighlighted ? "var(--white)" : "var(--gray-med)" }}>{row.collar}</td>
                        <td style={{ padding: "20px 12px", color: isHighlighted ? "var(--white)" : "var(--gray-med)" }}>{row.sleeve}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sizeguide-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .sizeguide-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }
      `}</style>
    </section>
  );
}
