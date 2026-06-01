"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "h-16 bg-[#05070b]/90 backdrop-blur-md border-b border-[#d4af37]/20"
            : "h-20 bg-transparent border-b border-white/5"
        }`}
        style={{
          display: "flex",
          alignItems: "center",
          transition: "var(--transition-smooth)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
          <a
            href="#"
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.8rem",
              fontWeight: 400,
              letterSpacing: "0.15em",
              color: "var(--white)",
            }}
          >
            HUELUXE
          </a>
        </div>
      </header>
    </>
  );
}

