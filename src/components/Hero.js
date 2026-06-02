"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { motion } from "framer-motion";

function Particles() {
  const ref = useRef();
  const count = 1000;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Shrunk the radius and moved the center closer to the camera to bring stars nearby
      const r = 40 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi) - 5;

      // Realistic star colors
      const randCol = Math.random();
      if (randCol > 0.95) color.set("#d4af37");
      else if (randCol > 0.8) color.set("#ffffff");
      else if (randCol > 0.6) color.set("#99bbff");
      else color.set("#666666");

      col[i * 3] = color.r;
      col[i * 3 + 1] = color.g;
      col[i * 3 + 2] = color.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.01;
      ref.current.rotation.y -= delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WavyPlane() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime() * 0.5;
      const positionAttribute = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = Math.sin(x * 1.5 + time) * 0.3 + Math.cos(y * 1.5 + time) * 0.3;
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -1.5, -2]}>
      <planeGeometry args={[15, 15, 16, 16]} />
      <meshStandardMaterial
        color="#d4af37"
        wireframe={true}
        transparent={true}
        opacity={0.15}
      />
    </mesh>
  );
}

function Scene() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 20,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (-state.mouse.y * Math.PI) / 20,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Particles />
      <WavyPlane />
    </group>
  );
}

export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: "#05070B",
        overflow: "hidden",
      }}
    >
      {/* Interactive 3D Background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#d4af37" />
          <Environment preset="city" />
          <Scene />
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.5} />
          </EffectComposer>
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "radial-gradient(circle at center, transparent 0%, rgba(5,7,11,0.8) 100%)",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1rem",
              letterSpacing: "0.4em",
              color: "var(--gold)",
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
          >
            A New Era of Luxury
          </h2>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 300,
              color: "var(--white)",
              letterSpacing: "0.05em",
              lineHeight: 1.1,
              textShadow: "0px 10px 30px rgba(0,0,0,0.8)",
            }}
          >
            DROPPING SOON
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1.5 }}
            style={{
              fontFamily: "var(--font-serif)",
              color: "var(--gold)",
              marginTop: "24px",
              fontSize: "0.85rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}
          >
            The intersection of timeless craftsmanship and modern aesthetics.
          </motion.p>
          {/*
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)", borderColor: "rgba(212, 175, 55, 1)" }}
            whileTap={{ scale: 0.95 }}
            style={{
              marginTop: "50px",
              padding: "16px 48px",
              backgroundColor: "transparent",
              color: "var(--gold)",
              fontFamily: "var(--font-sans)",
              fontSize: "0.85rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              cursor: "pointer",
              transition: "var(--transition-smooth)",
              pointerEvents: "auto",
            }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            SECURE EARLY ACCESS
          </motion.button>
          */}
        </motion.div>
      </div>
    </section>
  );
}
