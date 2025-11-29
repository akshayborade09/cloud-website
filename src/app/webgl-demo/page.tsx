"use client";

import {
  Scene,
  OrbitScene,
  Lights,
  RotatingCube,
  RotatingSphere,
  AnimatedTorus,
  InteractiveSphere,
  FloatingShapes,
  ParticleField,
  GradientSphere,
} from "@/components/webgl";

export default function WebGLDemo() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <div className="relative z-10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            WebGL Components Demo
          </h1>
          <p className="mt-2 text-zinc-400">
            Interactive 3D examples using React Three Fiber
          </p>
        </div>
      </div>

      {/* Demo Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Demo 1: Rotating Cube */}
          <DemoCard title="Rotating Cube" description="Basic animated cube">
            <Scene camera={{ position: [0, 0, 4] }}>
              <Lights />
              <RotatingCube color="#6366f1" />
            </Scene>
          </DemoCard>

          {/* Demo 2: Rotating Sphere */}
          <DemoCard
            title="Rotating Sphere"
            description="Wireframe sphere animation"
          >
            <Scene camera={{ position: [0, 0, 4] }}>
              <Lights />
              <RotatingSphere color="#8b5cf6" />
            </Scene>
          </DemoCard>

          {/* Demo 3: Animated Torus */}
          <DemoCard
            title="Animated Torus"
            description="Floating torus with sine wave"
          >
            <Scene camera={{ position: [0, 0, 4] }}>
              <Lights />
              <AnimatedTorus color="#ec4899" />
            </Scene>
          </DemoCard>

          {/* Demo 4: Interactive Sphere */}
          <DemoCard
            title="Interactive Sphere"
            description="Click and drag to rotate, hover to scale"
          >
            <OrbitScene camera={{ position: [0, 0, 4] }}>
              <Lights />
              <InteractiveSphere />
            </OrbitScene>
          </DemoCard>

          {/* Demo 5: Floating Shapes */}
          <DemoCard
            title="Floating Shapes"
            description="Multiple shapes with Float animation"
          >
            <OrbitScene camera={{ position: [0, 0, 8] }}>
              <Lights />
              <FloatingShapes />
            </OrbitScene>
          </DemoCard>

          {/* Demo 6: Particle Field */}
          <DemoCard
            title="Particle Field"
            description="5000 animated particles"
          >
            <Scene camera={{ position: [0, 0, 8] }}>
              <Lights />
              <ParticleField count={5000} size={0.02} color="#60a5fa" />
            </Scene>
          </DemoCard>

          {/* Demo 7: Gradient Sphere */}
          <DemoCard
            title="Gradient Sphere"
            description="Distortion material effect"
          >
            <OrbitScene camera={{ position: [0, 0, 5] }}>
              <Lights />
              <GradientSphere />
            </OrbitScene>
          </DemoCard>

          {/* Demo 8: Multiple Objects */}
          <DemoCard
            title="Combined Scene"
            description="Multiple objects together"
          >
            <OrbitScene camera={{ position: [0, 0, 8] }}>
              <Lights />
              <RotatingCube position={[-2, 0, 0]} size={0.8} />
              <RotatingSphere position={[0, 0, 0]} size={0.8} />
              <AnimatedTorus position={[2, 0, 0]} />
            </OrbitScene>
          </DemoCard>

          {/* Demo 9: Particles + Shapes */}
          <DemoCard
            title="Particles + Objects"
            description="Combining different elements"
          >
            <OrbitScene camera={{ position: [0, 0, 8] }}>
              <Lights />
              <ParticleField count={3000} size={0.015} color="#60a5fa" />
              <FloatingShapes />
            </OrbitScene>
          </DemoCard>
        </div>
      </div>

      {/* Instructions */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-zinc-900 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">💡 Tips</h2>
          <ul className="space-y-2 text-zinc-300">
            <li>
              • <strong>Orbit scenes:</strong> Click and drag to rotate, scroll
              to zoom
            </li>
            <li>
              • <strong>Interactive sphere:</strong> Hover to scale, click to
              toggle lock
            </li>
            <li>
              • <strong>Performance:</strong> All demos run at 60fps with
              hardware acceleration
            </li>
            <li>
              • <strong>Check WEBGL_GUIDE.md</strong> for usage examples and
              documentation
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

interface DemoCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function DemoCard({ title, description, children }: DemoCardProps) {
  return (
    <div className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="h-64 bg-zinc-950">{children}</div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-zinc-400 mt-1">{description}</p>
      </div>
    </div>
  );
}




