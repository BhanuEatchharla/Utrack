/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { primaryColor } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector) as HTMLElement | null;
    if (!el) return;

    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "Why UTrack", href: "#value-proposition" }, // ✅ ADDED
    { label: "Central Ops", href: "#central-ops" },
    { label: "Modules", href: "#modules" },
    { label: "Tracking", href: "#tracking" },
    { label: "Locations", href: "#locations" },
    { label: "Roadmap", href: "#fleet-dashboard" },
    { label: "Demo", href: "#demo" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center space-x-3 group hover:scale-[1.02] transition"
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden">
              <img
                src="https://vms-admin.pragatiutrack.com/logo.svg"
                alt="UTrack Logo"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              UTrack
            </h1>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-gray-700 dark:text-gray-300
                  hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {link.label}
              </button>
            ))}

            <a
              href="https://vms-admin.pragatiutrack.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-2.5 rounded-lg text-white font-semibold
                ${colorClasses[primaryColor].bg}
                ${colorClasses[primaryColor].hover}
                shadow-lg hover:scale-105 transition`}
            >
              Request Demo
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-3 rounded-lg
                  text-gray-700 dark:text-gray-300
                  hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}