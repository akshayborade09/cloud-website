"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface AnimatedTorusProps {
  position?: [number, number, number];
  color?: string;
}

/**
 * Example WebGL component - Animated torus
 */
export default function AnimatedTorus({
  position = [0, 0, 0],
  color = "#ec4899",
}: AnimatedTorusProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}








