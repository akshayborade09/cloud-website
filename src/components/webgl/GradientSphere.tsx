"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Mesh } from "three";

interface GradientSphereProps {
  position?: [number, number, number];
}

/**
 * Sphere with gradient material and distortion effect
 */
export default function GradientSphere({
  position = [0, 0, 0],
}: GradientSphereProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        speed={2}
        distort={0.3}
        radius={1}
      />
    </mesh>
  );
}








