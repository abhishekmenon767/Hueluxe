"use client";

import React, { useState } from "react";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [promoCode, setPromoCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    setStatus("loading");

    // Mock network request
    setTimeout(() => {
      setStatus("success");
      setPromoCode("HUELUXECLUB15");
    }, 1500);
  };

  return (
    <section id="newsletter" style={{ padding: "120px 0", backgroundColor: "#0C101A", borderTop: "1px solid var(--border-light)" }}>
      <div className="container" style={{ maxWidth: "700px" }}>
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.div
              key="newsletter-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-panel"
              style={{
                padding: "60px 45px",
                border: "1px solid var(--border-gold)",
                textAlign: "center",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
              }}
            >
              <span className="section-tag" style={{ marginBottom: "16px" }}>
                THE HUELUXE CLUB
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 300,
                  marginBottom: "16px",
                  color: "var(--white)",
                }}
              >
                Join the Inner Circle
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--gray-med)",
                  lineHeight: 1.7,
                  marginBottom: "40px",
                  fontWeight: 300,
                }}
              >
                Subscribe to receive exclusive access to digital capsule drops, private seasonal sales, and member-only ateliers.
              </p>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    required
                    placeholder="YOUR NAME"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === "loading"}
                    style={{
                      flex: 1,
                      minWidth: "240px",
                      padding: "16px",
                      backgroundColor: "#05070B",
                      border: "1px solid var(--border-light)",
                      color: "var(--white)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                      outline: "none",
                    }}
                  />
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "loading"}
                    style={{
                      flex: 1,
                      minWidth: "240px",
                      padding: "16px",
                      backgroundColor: "#05070B",
                      border: "1px solid var(--border-light)",
                      color: "var(--white)",
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.85rem",
                      letterSpacing: "0.1em",
                      outline: "none",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn btn-primary"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    padding: "18px 0",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Authenticating...</span>
                    </>
                  ) : (
                    <>
                      <span>Secure Invitation</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="newsletter-success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              className="glass-panel"
              style={{
                padding: "60px 45px",
                border: "1px solid var(--gold)",
                textAlign: "center",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.4)",
              }}
            >
              <CheckCircle2 size={56} style={{ color: "var(--gold)", margin: "0 auto 24px auto" }} />
              
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.2rem",
                  fontWeight: 300,
                  marginBottom: "8px",
                  color: "var(--gold)",
                  letterSpacing: "0.05em",
                }}
              >
                WELCOME TO THE CLUB
              </h3>
              
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.95rem",
                  color: "var(--white)",
                  marginBottom: "24px",
                  fontWeight: 300,
                }}
              >
                Thank you, <strong style={{ color: "var(--gold-hover)" }}>{name}</strong>. Your digital membership is now active.
              </p>

              <div
                style={{
                  backgroundColor: "#05070B",
                  border: "1px dashed var(--gold)",
                  padding: "24px",
                  maxWidth: "360px",
                  margin: "0 auto",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--gray-med)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Your Private Access Key
                </span>
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    letterSpacing: "0.15em",
                  }}
                >
                  {promoCode}
                </span>
                <span style={{ fontSize: "0.7rem", color: "var(--gold)" }}>
                  Enter this key at checkout for a 15% premier discount.
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </section>
  );
}
