"use client";

import Header from "@/components/sections/Header";
import AICloudHero from "@/components/sections/ai-cloud/AICloudHero";
import GPUBaremetals from "@/components/sections/ai-cloud/GPUBaremetals";
import GPUVirtualMachines from "@/components/sections/ai-cloud/GPUVirtualMachines";
import AIPods from "@/components/sections/ai-cloud/AIPods";
import ObjectStorage from "@/components/sections/ai-cloud/ObjectStorage";
import Footer from "@/components/sections/Footer";

export default function AICloudPage() {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <AICloudHero />

      {/* GPU Baremetals Section */}
      <GPUBaremetals />

      {/* GPU Virtual Machines Section */}
      <GPUVirtualMachines />

      {/* AI Pods Section */}
      <AIPods />

      {/* High-Speed Object Storage Section */}
      <ObjectStorage />

      {/* Footer with CTA */}
      <Footer />
    </main>
  );
}

