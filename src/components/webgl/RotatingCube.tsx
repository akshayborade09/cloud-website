"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingCubeProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

/**
 * Example WebGL component - Rotating cube
 */
export default function RotatingCube({
  position = [0, 0, 0],
  color = "#6366f1",
  size = 1,
}: RotatingCubeProps) {
  const meshRef = useRef<Mesh>(null);

  // Rotate the cube every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}





