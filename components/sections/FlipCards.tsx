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
    <section id="modules" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
          {" "}
          Six Powerful Modules. One Seamless Logistics Platform.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          From real-time GPS intelligence to financial control, explore the
          modules built to streamline every process in your logistics and fleet
          management operations.{" "}
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, index) => {
            const Icon = m.icon;
            const flipped = activeCard === index;
            const gradient = gradients[m.color];

            return (
              <div
                key={index}
                className="relative h-72 perspective-1000 cursor-pointer"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                    flipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT SIDE — White clean UI */}
                  <div className="absolute inset-0 backface-hidden">
                    <div
                      className={`h-full rounded-3xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all flex flex-col items-center justify-center text-center p-6
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
        : m.color === "teal"
        ? "bg-teal-200"
        : "bg-gray-150"
    }
  `}
                    >
                      <div
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg flex items-center justify-center`}
                      >
                        <Icon size={40} className="text-white" />
                      </div>

                      <h3 className="mt-5 text-2xl font-semibold text-gray-900 dark:text-white">
                        {m.title}
                      </h3>

                      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                        {m.tagline}
                      </p>
                    </div>
                  </div>

                  {/* BACK SIDE — Full gradient */}
                  {/* BACK SIDE — Fully centered clean gradient UI */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={`h-full rounded-3xl bg-gradient-to-br ${gradient} shadow-xl p-6 flex flex-col items-center justify-center text-center text-white`}
                    >
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                        <Icon size={32} className="text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2">{m.title}</h3>

                      {/* Main Description */}
                      <p className="text-white/90 text-sm max-w-[240px] leading-relaxed mb-3">
                        {m.description}
                      </p>

                      {/* Additional meaningful content */}
                      <p className="text-white/80 text-xs max-w-[230px] leading-relaxed mb-6">
                        {m.title === "Masters" &&
                          "Centralize your operational data to create consistency, reduce errors, and empower all modules across the platform."}
                        {m.title === "GPS" &&
                          "Gain real-time movement intelligence to improve fleet visibility, utilization, and safety across all operations."}
                        {m.title === "Fleet" &&
                          "Extend vehicle life, reduce downtimes, and ensure compliance through structured maintenance and tracking."}
                        {m.title === "Trips" &&
                          "Optimize delivery performance with precise trip monitoring, checkpoints, and accurate ETA forecasting."}
                        {m.title === "Warehouse" &&
                          "Maintain clear warehouse operations with stock intelligence, temperature logs, and automated alerts."}
                        {m.title === "Accounts" &&
                          "Integrate expenses and billing for complete financial clarity and deep operational profitability insights."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
      `}</style>
    </section>
  );
}
