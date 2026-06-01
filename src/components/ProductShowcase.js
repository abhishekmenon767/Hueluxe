"use client";

import React, { useState, useRef } from "react";
import { Bell, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductShowcase() {
  const colors = [
    { name: "Black", hex: "#000000", image: "/images/shirt_black.png" },
    { name: "Navy Blue", hex: "#0A1931", image: "/images/shirt_navy.png" },
    { name: "Dark Green", hex: "#1B4332", image: "/images/shirt_green.png" },
  ];

  const sizes = ["M", "L", "XL"];

  const hotspots = [
    {
      id: "collar",
      top: "16%",
      left: "49.5%",
      title: "Semi-Spread Collar",
      desc: "Designed with removable collar stays for a crisp, professional posture.",
    },
    {
      id: "buttons",
      top: "40%",
      left: "50%",
      title: "Mother-of-Pearl Buttons",
      desc: "Individually selected authentic pearl buttons secured with lock stitching.",
    },
    {
      id: "silhouette",
      top: "60%",
      left: "38%",
      title: "Premium Silhouette",
      desc: "Engineered back darts that taper toward the waist, eliminating generic boxy bulges.",
    },
    {
      id: "cuffs",
      top: "80%",
      left: "22%",
      title: "Mitered Double Cuffs",
      desc: "Angled cuffs providing structural integrity when rolled or buttoned.",
    },
  ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [hoveredHotspot, setHoveredHotspot] = useState(null);
  const [toast, setToast] = useState(null);

  // Zoom logic
  const imageRef = useRef(null);
  const [zoomStyle, setZoomStyle] = useState({ transformOrigin: "center center" });

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%` });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ transformOrigin: "center center" });
  };

  // Add to cart trigger
  const handleAddToBag = (e) => {
    e.preventDefault();

    // Trigger toast
    const id = Date.now();
    setToast({
      id,
      message: `Notification active. We will email you when the ${selectedColor.name} shirt in Size ${selectedSize} is released.`,
    });

    // Auto dismiss
    setTimeout(() => {
      setToast((prev) => (prev && prev.id === id ? null : prev));
    }, 3500);
  };

  return (
    <section id="color-showcase" style={{ padding: "120px 0", backgroundColor: "var(--bg-dark)", position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">THE ART OF FIT</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Solid Premium Fit Shirt
          </h2>
        </div>

        {/* Showcase Layout Grid */}
        <div className="showcase-grid">
          {/* Left Gallery View */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              className="product-main-view"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={imageRef}
              style={{
                position: "relative",
                backgroundColor: "#0B0F19",
                width: "100%",
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                border: "1px solid var(--border-light)",
                cursor: "crosshair",
              }}
            >
              <img
                src={selectedColor.image}
                alt={`HUELUXE Premium Fit Shirt - ${selectedColor.name}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.4s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  ...zoomStyle,
                }}
                className="zoom-image"
              />

              {/* Hotspots Overlay */}
              {hotspots.map((spot) => (
                <div
                  key={spot.id}
                  style={{
                    position: "absolute",
                    top: spot.top,
                    left: spot.left,
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                  onMouseEnter={() => setHoveredHotspot(spot.id)}
                  onMouseLeave={() => setHoveredHotspot(null)}
                >
                  {/* Pulsing ring */}
                  <div className="hotspot-pulse" />
                  <button
                    className="hotspot-dot"
                    aria-label={`Hotspot for ${spot.title}`}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: "var(--gold)",
                      border: "2px solid var(--white)",
                      boxShadow: "0 0 10px rgba(212, 175, 55, 0.8)",
                      cursor: "pointer",
                      position: "relative",
                      zIndex: 11,
                    }}
                  />

                  {/* Hotspot details card */}
                  <AnimatePresence>
                    {hoveredHotspot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        transition={{ duration: 0.2 }}
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "240px",
                          padding: "16px",
                          backgroundColor: "#0F131C",
                          border: "1px solid var(--border-gold)",
                          borderRadius: "4px",
                          color: "var(--white)",
                          fontSize: "0.8rem",
                          zIndex: 100,
                          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                        }}
                      >
                        <h4 style={{ color: "var(--gold)", marginBottom: "4px", fontFamily: "var(--font-sans)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                          {spot.title}
                        </h4>
                        <p style={{ color: "var(--gray-med)", lineHeight: 1.5, fontWeight: 300 }}>{spot.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Thumbnails list */}
            <div style={{ display: "flex", gap: "15px" }}>
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  style={{
                    width: "80px",
                    height: "80px",
                    border: `1px solid ${selectedColor.name === color.name ? "var(--gold)" : "var(--border-light)"}`,
                    backgroundColor: "#0B0F19",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    transition: "var(--transition-fast)",
                  }}
                >
                  <img src={color.image} alt={color.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right Product Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
            <div>
              <span style={{ fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", display: "block", marginBottom: "8px" }}>
                ESSENTIAL COLLECTION
              </span>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", fontWeight: 300, lineHeight: 1.2, marginBottom: "16px" }}>
                HUELUXE Solid Premium Fit
              </h3>
              
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "8px 16px",
                  border: "1px solid var(--border-gold)",
                  backgroundColor: "rgba(212, 175, 55, 0.05)",
                  color: "var(--gold)",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "24px",
                }}
              >
                <Bell size={14} />
                <span>Dropping Soon</span>
              </div>
              
              <p style={{ color: "var(--gray-med)", fontSize: "0.95rem", lineHeight: 1.7, fontWeight: 300 }}>
                An exquisite blend of extra-long-staple premium cotton, tailored to define your silhouette while providing maximum stretch and comfort. Designed to transition seamlessly from a corporate boardroom to an upscale evening event.
              </p>
            </div>

            {/* Colors Selectors */}
            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-med)" }}>
                Color: <strong style={{ color: "var(--white)" }}>{selectedColor.name}</strong>
              </span>
              <div style={{ display: "flex", gap: "15px" }}>
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      border: `2px solid ${selectedColor.name === color.name ? "var(--gold)" : "transparent"}`,
                      backgroundColor: color.hex,
                      padding: "2px",
                      backgroundClip: "content-box",
                      transition: "var(--transition-fast)",
                      transform: selectedColor.name === color.name ? "scale(1.1)" : "scale(1)",
                    }}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>

            {/* Sizes Selectors */}
            <div style={{ borderTop: "1px solid var(--border-light)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-med)" }}>
                  Select Size
                </span>
                <a
                  href="#size-guide"
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    borderBottom: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => (e.target.style.borderBottomColor = "var(--gold)")}
                  onMouseLeave={(e) => (e.target.style.borderBottomColor = "transparent")}
                >
                  Size Guide
                </a>
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    style={{
                      width: "50px",
                      height: "50px",
                      border: `1px solid ${selectedSize === size ? "var(--white)" : "rgba(255,255,255,0.15)"}`,
                      backgroundColor: selectedSize === size ? "var(--white)" : "transparent",
                      color: selectedSize === size ? "var(--bg-dark)" : "var(--white)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      fontWeight: 500,
                      transition: "var(--transition-fast)",
                    }}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div style={{ display: "flex", gap: "15px", marginTop: "10px" }}>
              <button
                onClick={handleAddToBag}
                className="btn btn-primary"
                style={{ flexGrow: 1, gap: "10px", padding: "18px 36px" }}
              >
                <Bell size={16} />
                <span>Notify Me on Drop</span>
              </button>
            </div>




          </div>
        </div>
      </div>

      {/* Toast Feedback */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: "fixed",
              bottom: "30px",
              right: "30px",
              padding: "16px 28px",
              border: "1px solid var(--gold)",
              color: "#FFFFFF",
              zIndex: 2000,
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              letterSpacing: "0.05em",
              boxShadow: "0 15px 40px rgba(0,0,0,0.7)",
              backgroundColor: "rgba(12, 16, 26, 0.9)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Check size={16} style={{ color: "var(--gold)" }} />
            <span>{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .product-main-view:hover .zoom-image {
          transform: scale(1.15);
        }
        .showcase-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 991px) {
          .showcase-grid {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
        /* Hotspot pulsation animation */
        @keyframes pulse {
          0% {
            transform: translate(-50%, -50%) scale(0.6);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
        .hotspot-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--gold);
          animation: pulse 2.2s cubic-bezier(0.25, 0, 0, 1) infinite;
          pointer-events: none;
          z-index: 9;
        }
      `}</style>
    </section>
  );
}
