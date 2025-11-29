"use client";

import Image from "next/image";
import { BlurredInfiniteSlider } from "@/components/ui/infinite-slider";

const LOGOS = [
  { src: "/cloud-brands/ola.png", alt: "OLA", height: 60 },
  { src: "/cloud-brands/vionix.png", alt: "Vionix", height: 60 },
  { src: "/cloud-brands/dashverse.png", alt: "Dashverse", height: 60 },
  { src: "/cloud-brands/zupaloop.png", alt: "Zupaloop", height: 60 },
  { src: "/cloud-brands/vcti.png", alt: "VCTI", height: 60 },
  { src: "/cloud-brands/prameya.png", alt: "Prameya", height: 60 },
  { src: "/cloud-brands/telecmi.png", alt: "TeleCMI", height: 60 },
];

export default function TrustedByLogos() {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full px-4 sm:px-6 lg:px-6">
        <div className="max-w-[1280px] mx-auto">
          {/* Mobile - Smaller Gap */}
          <div className="block sm:hidden">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={32}
              fadeWidth={40}
            >
              {LOGOS.map((logo, index) => (
                <div 
                  key={`${logo.alt}-mobile-${index}`} 
                  className="flex items-center justify-center min-w-[80px]"
                >
                  <Image
                    className="transition-opacity duration-300 h-[40px] w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={logo.height}
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>

          {/* Tablet & Desktop - Larger Gap */}
          <div className="hidden sm:block">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={72}
              fadeWidth={60}
            >
              {LOGOS.map((logo, index) => (
                <div 
                  key={`${logo.alt}-desktop-${index}`} 
                  className="flex items-center justify-center min-w-[120px] md:min-w-[150px]"
                >
                  <Image
                    className="transition-opacity duration-300 h-[50px] md:h-[60px] w-auto"
                    src={logo.src}
                    alt={logo.alt}
                    width={150}
                    height={logo.height}
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
