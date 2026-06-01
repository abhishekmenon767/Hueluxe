"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      stars: 5,
      quote:
        "The perfect shirt for work and international travel. The drape remains incredibly clean and doesn't gather wrinkles easily even after an 8-hour flight. HUELUXE has won a lifelong customer.",
      author: "Alexander V.",
      title: "Founder, Capital Tech",
    },
    {
      stars: 5,
      quote:
        "Excellent fitting and premium feel. It hugs the chest and arms perfectly while leaving enough room around the waist for comfort. Looks custom-tailored right out of the packaging.",
      author: "Marcus D.",
      title: "Investment Analyst",
    },
    {
      stars: 5,
      quote:
        "Looks expensive and feels incredibly soft. The texture of the extra-long staple cotton blend is clear and commands respect. Easily compares to my bespoke shirts that cost double the price.",
      author: "Jonathan K.",
      title: "Creative Director",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const selectSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    }),
  };

  return (
    <section id="testimonials" style={{ padding: "120px 0", backgroundColor: "#0C101A", overflow: "hidden" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        {/* Header */}
        <div style={{ marginBottom: "50px" }}>
          <span className="section-tag">CLIENT VOICES</span>
          <h2 className="section-title" style={{ color: "var(--white)" }}>
            The HUELUXE Experience
          </h2>
        </div>

        {/* Carousel Slider */}
        <div style={{ position: "relative", minHeight: "300px" }}>
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "24px",
              }}
            >
              {/* Rating stars */}
              <div style={{ display: "flex", gap: "6px", color: "var(--gold)" }}>
                {[...Array(reviews[activeIndex].stars)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
              </div>

              {/* Quote */}
              <blockquote
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.5rem, 3.5vw, 2.1rem)",
                  fontWeight: 300,
                  lineHeight: 1.45,
                  color: "var(--white)",
                  fontStyle: "italic",
                  maxWidth: "700px",
                }}
              >
                "{reviews[activeIndex].quote}"
              </blockquote>

              {/* Author info */}
              <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.95rem", fontWeight: 600, color: "var(--gold)" }}>
                  {reviews[activeIndex].author}
                </span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", color: "var(--gray-med)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {reviews[activeIndex].title}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "30px",
            marginTop: "60px",
          }}
        >
          <button
            onClick={prevSlide}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--white)",
              transition: "var(--transition-fast)",
            }}
            className="carousel-nav-btn"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: "10px" }}>
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => selectSlide(index)}
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: activeIndex === index ? "var(--gold)" : "rgba(255, 255, 255, 0.15)",
                  transition: "var(--transition-fast)",
                }}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid var(--border-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--white)",
              transition: "var(--transition-fast)",
            }}
            className="carousel-nav-btn"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .carousel-nav-btn:hover {
          border-color: var(--gold) !important;
          color: var(--gold) !important;
        }
      `}</style>
    </section>
  );
}
