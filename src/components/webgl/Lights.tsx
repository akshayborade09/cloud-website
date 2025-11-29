"use client";

/**
 * Standard lighting setup for WebGL scenes
 */
export default function Lights() {
  return (
    <>
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} />
      
      {/* Main directional light */}
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Fill light from the side */}
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
    </>
  );
}





