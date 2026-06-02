"use client";
import React from "react";
import { motion } from "framer-motion";

export default function PreviewTeaser() {
  return (
    <section style={{ backgroundColor: "#020305", color: "var(--white)", padding: "120px 20px" }}>
      <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)" }} 
          whileInView={{ opacity: 1, filter: "blur(0px)" }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 1 }}
          style={{ height: "550px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img src="/logonew.png" alt="Hueluxe Official Logo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} style={{ padding: "20px 0" }}>
          <p style={{ color: "var(--gold)", fontSize: "0.85rem", letterSpacing: "0.25em", marginBottom: "30px", textTransform: "uppercase" }}>
            "01 / The First Drop"
          </p>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2.8rem", marginBottom: "40px", lineHeight: 1.2, fontWeight: 300 }}>
            A refined perspective on the classic button-down shirt.
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", color: "#a0aab2", fontSize: "1.05rem", lineHeight: 1.8, marginBottom: "40px", fontWeight: 300 }}>
            Featuring our signature structured collar, clean minimalist buttoning, and an initial palette engineered for composed confidence.
          </p>
        </motion.div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 900px) {
          .container { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}} />
    </section>
  );
}
