"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface InteractiveSphereProps {
  position?: [number, number, number];
}

/**
 * Interactive WebGL sphere that responds to hover and click
 */
export default function InteractiveSphere({
  position = [0, 0, 0],
}: InteractiveSphereProps) {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      
      // Scale based on interaction
      const targetScale = clicked ? 1.5 : hovered ? 1.2 : 1;
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as any, 0.1);
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setClicked(!clicked)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color={clicked ? "#10b981" : hovered ? "#f59e0b" : "#3b82f6"}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}










