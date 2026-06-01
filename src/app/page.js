"use client";

import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh", position: "relative" }}>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
