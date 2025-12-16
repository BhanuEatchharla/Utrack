"use client";

import { useState } from "react";
import {
  Database,
  MapPin,
  Truck,
  Navigation,
  Warehouse,
  Calculator,
} from "lucide-react";

export default function FlipCards() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const gradients: Record<string, string> = {
    blue: "from-[#5A60FF] to-[#3D38C1]",
    green: "from-[#04C697] to-[#007B5F]",
    red: "from-[#FF5D7A] to-[#C81D4A]",
    yellow: "from-[#FFB938] to-[#D98200]",
    violet: "from-[#8A4FFF] to-[#5E1EFF]",
    teal: "from-[#4FD1C5] to-[#285E61]",
  };

  const modules = [
    {
      icon: Database,
      title: "Masters",
      tagline: "Foundation Data",
      description: "Manage locations, routes, vendors and more.",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "GPS",
      tagline: "Live Tracking",
      description: "Real-time tracking with playback & alerts.",
      color: "green",
    },
    {
      icon: Truck,
      title: "Fleet",
      tagline: "Vehicle Operations",
      description: "Maintenance, fuel, insurance & drivers.",
      color: "red",
    },
    {
      icon: Navigation,
      title: "Trips",
      tagline: "Journey Management",
      description: "Trips, ETAs, POD, checkpoints.",
      color: "yellow",
    },
    {
      icon: Warehouse,
      title: "Warehouse",
      tagline: "Inventory Control",
      description: "Stock, cold-chain, transfers, alerts.",
      color: "violet",
    },
    {
      icon: Calculator,
      title: "Accounts",
      tagline: "Financial Control",
      description: "Invoices, expenses, vendor payments.",
      color: "teal",
    },
  ];

  const handleFlip = (index: number) => {
    setActiveCard((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="modules"
      className="scroll-mt-[80px] py-4 bg-gray-50 dark:bg-gray-900"
    >
      {/* HEADING — unchanged text */}
      <div className="text-center mb-6 px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-700 dark:text-white mb-3">
          Six Powerful Modules. One Seamless Logistics Platform.
        </h2>
        <p className="text-base sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
       All your fleet operations — from GPS tracking to financial control — in one system.
        </p>
      </div>

      {/* CARDS */}
      <div className="max-w-9xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, index) => {
            const Icon = m.icon;
            const flipped = activeCard === index;
            const gradient = gradients[m.color];

            return (
              <div
                key={index}
                className="relative h-60 perspective-1000 cursor-pointer group"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d
                    ${flipped ? "rotate-y-180" : ""} group-hover:rotate-y-180`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden">
                    <div
                      className={`h-full rounded-3xl border border-gray-200 dark:border-gray-700
                        shadow-md hover:shadow-lg transition-all
                        flex flex-col items-center justify-center text-center 
                        ${
                          m.color === "blue"
                            ? "bg-blue-200"
                            : m.color === "green"
                            ? "bg-green-200"
                            : m.color === "red"
                            ? "bg-red-100"
                            : m.color === "yellow"
                            ? "bg-yellow-200"
                            : m.color === "violet"
                            ? "bg-violet-200"
                            : "bg-teal-200"
                        }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient}
                          shadow-lg flex items-center justify-center`}
                      >
                        <Icon size={34} className="text-white" />
                      </div>

                      <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                        {m.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {m.tagline}
                      </p>
                    </div>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={`h-full rounded-3xl bg-gradient-to-br ${gradient}
                        shadow-xl p-4 flex flex-col items-center justify-center
                        text-center text-white`}
                    >
                      <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                        <Icon size={28} />
                      </div>

                      <h3 className="text-xl font-bold mb-2">{m.title}</h3>

                      <p className="text-white/90 text-sm leading-relaxed max-w-[230px]">
                        {m.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        /* Auto-flip ONLY on desktop */
        @media (hover: hover) {
          .group:hover .group-hover\\:rotate-y-180 {
            transform: rotateY(180deg);
          }
        }
      `}</style>
    </section>
  );
}
