"use client";

import { Text, Center } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

interface TextMeshProps {
  text?: string;
  color?: string;
  size?: number;
}

/**
 * 3D text component using Drei's Text helper
 * Automatically loads and renders text without requiring font files
 */
export default function TextMesh({
  text = "WebGL",
  color = "#3b82f6",
  size = 1,
}: TextMeshProps) {
  const groupRef = useRef<Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text
          fontSize={size}
          color={color}
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </Center>
    </group>
  );
}

