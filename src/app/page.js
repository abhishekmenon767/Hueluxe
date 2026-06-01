"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import SizeFinder from "@/components/SizeFinder";
import FaqAccordion from "@/components/FaqAccordion";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", position: "relative" }}>
        <Hero />
        <ProductShowcase />
        <Features />
        <Comparison />
        <Testimonials />
        <SizeFinder />
        <FaqAccordion />
        {/* <Newsletter /> */}
      </main>
      <Footer />
    </>
  );
}
