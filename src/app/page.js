"use client";

import React from "react";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import PreviewTeaser from "@/components/PreviewTeaser";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main style={{ minHeight: "100vh", position: "relative" }}>
        <Hero />
        <Philosophy />
        <PreviewTeaser />
      </main>
      <Footer />
    </>
  );
}
