"use client";

import { Canvas } from "@react-three/fiber";
import { ReactNode } from "react";

interface SceneProps {
  children: ReactNode;
  camera?: {
    position?: [number, number, number];
    fov?: number;
  };
  className?: string;
}

/**
 * WebGL Scene wrapper component
 * Wraps React Three Fiber Canvas with sensible defaults
 */
export default function Scene({
  children,
  camera = { position: [0, 0, 5], fov: 75 },
  className = "w-full h-full",
}: SceneProps) {
  return (
    <Canvas
      camera={camera}
      className={className}
      gl={{ antialias: true, alpha: true }}
    >
      {children}
    </Canvas>
  );
}










