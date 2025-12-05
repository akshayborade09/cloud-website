"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/ai-cloud", label: "AI Cloud" },
    { href: "/general-cloud", label: "General Cloud" },
    { href: "/ai-studio", label: "AI Studio" },
    { href: "/ai-solutions", label: "AI Solutions" },
  ];

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5" 
        style={{ fontFamily: "'Open Sauce One', sans-serif" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
              <Image
                src="/krutrim-logo.svg"
                alt="Krutrim"
                width={124}
                height={40}
                className="h-[32px] sm:h-[40px] w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-[22px] text-[13px] xl:text-[14px] text-white/86 font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons (shown on large screens when nav is visible) */}
            <div className="hidden lg:flex items-center gap-3 lg:gap-[14px]">
              <button className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-gradient-to-b from-[#21CD6F] to-[#13452A] text-[13px] lg:text-[14px] text-white font-medium hover:opacity-90 transition-opacity whitespace-nowrap">
                Get Started
              </button>
              <button className="px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg bg-black border border-[#353535] text-[13px] lg:text-[14px] text-white/86 font-medium hover:border-[#454545] transition-colors whitespace-nowrap">
                Contact Sales
              </button>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/86 hover:text-white transition-colors z-50 relative"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Menu Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile/Tablet Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] md:w-[360px] bg-black border-l border-white/10 z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ fontFamily: "'Open Sauce One', sans-serif" }}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 className="text-white font-semibold text-lg">Menu</h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-white/86 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Content */}
          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-white/86 hover:text-white hover:bg-white/5 transition-all py-3 px-4 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Drawer Footer - CTA Buttons */}
          <div className="px-6 py-6 border-t border-white/10 space-y-3">
            <button 
              className="w-full px-4 py-3 rounded-xl bg-gradient-to-b from-[#21CD6F] to-[#13452A] text-[14px] text-white font-medium hover:opacity-90 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </button>
            <button 
              className="w-full px-4 py-3 rounded-xl bg-black border border-[#353535] text-[14px] text-white/86 font-medium hover:border-[#454545] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

