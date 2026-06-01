"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FaqAccordion() {
  const faqs = [
    {
      q: "What fabric is used in the HUELUXE Solid Shirt?",
      a: "We use a premium extra-long-staple cotton blend (95% ELS cotton, 5% elasthane). This composition gives the shirt a rich, smooth finish with the ideal amount of micro-stretch for natural body motion, preventing restricting tension.",
    },
    {
      q: "Is it suitable for daily office wear?",
      a: "Yes, absolutely. The shirt is tailored specifically for versatile wear. Its high-thread-count construction ensures a sharp profile for corporate boardroom meetings, while remaining breathable and comfortable for post-work socials.",
    },
    {
      q: "How should I wash and care for this shirt?",
      a: "For best results and to preserve the organic cotton structure, we recommend professional dry cleaning. Alternatively, machine wash cold on a delicate cycle with like colors, shape immediately while damp, and hang to dry. Warm iron only.",
    },
    {
      q: "What sizes are available, and is there a custom tailoring option?",
      a: "Our standard sizes range from Medium (M) to Extra Large (XL). You can use our Fit Recommendation Engine above to calculate your sizing class. Currently, we do not offer custom tailoring, though our templates closely match bespoke contours.",
    },
    {
      q: "Is cash on delivery available?",
      a: "Yes, we offer Cash on Delivery (COD) in select metropolitan regions across the globe. You can check eligibility during checkout after typing in your delivery postal address. All COD transactions are secure.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" style={{ padding: "120px 0", backgroundColor: "#05070B", borderTop: "1px solid var(--border-light)" }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <span className="section-tag">COMMON QUESTIONS</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={faq.q}
                className="glass-panel"
                style={{
                  border: "1px solid var(--border-light)",
                  borderColor: isOpen ? "var(--border-gold)" : "var(--border-light)",
                  transition: "border-color 0.3s ease",
                }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "24px 30px",
                    textAlign: "left",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "0.95rem",
                      fontWeight: 500,
                      color: isOpen ? "var(--gold)" : "var(--white)",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {faq.q}
                  </span>
                  <div style={{ color: isOpen ? "var(--gold)" : "var(--gray-med)", flexShrink: 0 }}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div
                        style={{
                          padding: "0 30px 30px 30px",
                          fontSize: "0.88rem",
                          color: "var(--gray-med)",
                          lineHeight: 1.6,
                          fontWeight: 300,
                        }}
                      >
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
