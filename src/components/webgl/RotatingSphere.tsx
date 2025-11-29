"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface RotatingSphereProps {
  position?: [number, number, number];
  color?: string;
  size?: number;
}

/**
 * Example WebGL component - Rotating sphere with wireframe
 */
export default function RotatingSphere({
  position = [0, 0, 0],
  color = "#8b5cf6",
  size = 1,
}: RotatingSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}





