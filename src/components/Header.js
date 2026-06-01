"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Collection", href: "#color-showcase" },
    { label: "Features", href: "#features" },
    { label: "Exclusivity", href: "#why-hueluxe" },
    { label: "Size Guide", href: "#size-guide" },
    { label: "FAQ", href: "#faq" },
  ];

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
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
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

          {/* Desktop Nav */}
          <nav
            style={{
              display: "flex",
              gap: "40px",
              alignItems: "center",
            }}
            className="hidden-mobile"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gray-med)",
                  position: "relative",
                  padding: "8px 0",
                  transition: "var(--transition-fast)",
                }}
                className="nav-hover-link"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Utilities (Cart + Mobile Toggle) */}
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>


            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="visible-mobile-btn"
              style={{ display: "none" }}
            >
              {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: "64px",
              left: 0,
              width: "100%",
              height: "calc(100vh - 64px)",
              backgroundColor: "var(--bg-dark)",
              zIndex: 49,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: "60px",
              gap: "30px",
              borderTop: "1px solid var(--border-light)",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "1.1rem",
                  fontWeight: 300,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .nav-hover-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--gold);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-hover-link:hover {
          color: var(--white) !important;
        }
        .nav-hover-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
          .visible-mobile-btn {
            display: block !important;
          }
        }
      `}</style>
    </>
  );
}
