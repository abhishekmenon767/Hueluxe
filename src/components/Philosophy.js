"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section style={{ backgroundColor: "#05070B", color: "var(--white)", padding: "120px 20px" }}>
      <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gap: "80px", gridTemplateColumns: "1fr" }}>
        
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "var(--gold)", marginBottom: "30px", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            The Philosophy of Tone
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "1.1rem", lineHeight: 1.8, color: "#a0aab2", maxWidth: "800px", margin: "0 auto", fontWeight: 300 }}>
            We don’t just make apparel; we curate identity. HUELUXE is built for the modern minimalist who understands that true luxury doesn’t shout—it resonates. Every thread is selected with conscious intent, and every shade is mixed to define a mood.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" }}>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} style={{ padding: "40px", border: "1px solid rgba(212, 175, 55, 0.15)", background: "rgba(255,255,255,0.01)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--gold)", marginBottom: "20px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Curated Shades</h3>
            <p style={{ color: "#8a949e", lineHeight: 1.7, fontSize: "0.95rem", fontWeight: 300 }}>Moving past basic colors to bring you depth, texture, and character in every piece.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.15 }} style={{ padding: "40px", border: "1px solid rgba(212, 175, 55, 0.15)", background: "rgba(255,255,255,0.01)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--gold)", marginBottom: "20px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Uncompromised Comfort</h3>
            <p style={{ color: "#8a949e", lineHeight: 1.7, fontSize: "0.95rem", fontWeight: 300 }}>Tailored from premium long-staple cotton designed to structure perfectly to your lifestyle.</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ delay: 0.3 }} style={{ padding: "40px", border: "1px solid rgba(212, 175, 55, 0.15)", background: "rgba(255,255,255,0.01)" }}>
            <h3 style={{ fontFamily: "var(--font-serif)", color: "var(--gold)", marginBottom: "20px", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>Conscious Tailoring</h3>
            <p style={{ color: "#8a949e", lineHeight: 1.7, fontSize: "0.95rem", fontWeight: 300 }}>Every detail, from the signature collar button to the low-impact presentation, is intentionally designed.</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
