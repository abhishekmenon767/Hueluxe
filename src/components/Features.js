"use client";

import React from "react";
import { motion } from "framer-motion";
import { Feather, Wind, Scissors, UserCheck, ShieldCheck, Smile } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Feather size={28} strokeWidth={1.2} />,
      title: "Premium Cotton",
      desc: "Spun from carefully selected extra-long staple cotton for an exceptionally soft, clean, and smooth feel against the skin.",
    },
    {
      icon: <Wind size={28} strokeWidth={1.2} />,
      title: "Breathable Fabric",
      desc: "Air-permeable weave structure optimizes thermal comfort, keeping you dry, cool, and comfortable throughout the day.",
    },
    {
      icon: <Scissors size={28} strokeWidth={1.2} />,
      title: "Tailored Premium Fit",
      desc: "An engineered drape that accentuates the chest and shoulders while slimming down naturally towards the waist profile.",
    },
    {
      icon: <UserCheck size={28} strokeWidth={1.2} />,
      title: "Full Sleeve Design",
      desc: "Elegantly designed sleeves and cuffs that hold their structure, allowing you to wear them buttoned or casually rolled.",
    },
    {
      icon: <ShieldCheck size={28} strokeWidth={1.2} />,
      title: "Durable Buttons",
      desc: "Secured with high-strength cross-lock stitching, designed to withstand frequent wear and professional dry cleaning.",
    },
    {
      icon: <Smile size={28} strokeWidth={1.2} />,
      title: "All-Day Comfort",
      desc: "Incorporates micro-stretch fibers to allow absolute freedom of movement without losing the shirt's crisp shape.",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
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
      id="features"
      style={{
        padding: "120px 0",
        backgroundColor: "#05070B",
        borderTop: "1px solid var(--border-light)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag">UNCOMPROMISING QUALITY</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Tailored For Distinction
          </h2>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glass-panel glass-panel-hover"
              style={{
                padding: "45px 35px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "56px",
                  height: "56px",
                  border: "1px solid var(--border-gold)",
                  backgroundColor: "rgba(212, 175, 55, 0.04)",
                  color: "var(--gold)",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.45rem",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "var(--white)",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.88rem",
                  fontWeight: 300,
                  color: "var(--gray-med)",
                  lineHeight: 1.7,
                }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
