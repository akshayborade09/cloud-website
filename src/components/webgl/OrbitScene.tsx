"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ReactNode } from "react";

interface OrbitSceneProps {
  children: ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  className?: string;
}

/**
 * WebGL Scene with OrbitControls for camera manipulation
 * Users can click and drag to rotate, scroll to zoom
 */
export default function OrbitScene({
  children,
  camera = { position: [0, 0, 5], fov: 75 },
  className = "w-full h-full",
}: OrbitSceneProps) {
  return (
    <Canvas
      camera={camera}
      className={className}
      gl={{ antialias: true, alpha: true }}
    >
      <OrbitControls enableDamping dampingFactor={0.05} />
      {children}
    </Canvas>
  );
}




