"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "var(--bg-dark)",
        paddingTop: "var(--nav-height)",
      }}
    >
      {/* Background Parallax & Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          src="/images/hero_banner.png"
          alt="HUELUXE Gentleman"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, rgba(5, 7, 11, 0.95) 0%, rgba(5, 7, 11, 0.75) 45%, rgba(5, 7, 11, 0.2) 100%)",
          }}
        />
        {/* Subtle Bottom Vignette */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "150px",
            background: "linear-gradient(to top, var(--bg-dark), transparent)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            maxWidth: "640px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <motion.span
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            ATELIER OF DISTINCTION
          </motion.span>
          
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3.5rem, 8vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: "12px",
              color: "var(--white)",
            }}
          >
            HUELUXE SOLID
          </motion.h1>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--gold-hover)",
              marginBottom: "24px",
            }}
          >
            Premium Fit. Timeless Italian Style.
          </motion.p>

          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 300,
              color: "var(--gray-med)",
              lineHeight: 1.7,
              marginBottom: "40px",
              maxWidth: "500px",
            }}
          >
            Crafted for the modern gentleman who commands respect and appreciates tailored elegance. Spun from long-staple cotton for unmatched comfort.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <a href="#color-showcase" className="btn btn-primary">
              Preview Collection
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Scroll Mouse */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
        }}
        className="hidden-mobile"
        onClick={() => {
          document.getElementById("color-showcase")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div
          style={{
            width: "22px",
            height: "36px",
            border: "1px solid rgba(255, 255, 255, 0.4)",
            borderRadius: "11px",
            position: "relative",
          }}
        >
          <motion.div
            animate={{
              y: [0, 14, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              width: "4px",
              height: "6px",
              backgroundColor: "var(--gold)",
              borderRadius: "2px",
              position: "absolute",
              top: "6px",
              left: "50%",
              marginLeft: "-2px",
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.6rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.5)",
          }}
        >
          Scroll
        </span>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
