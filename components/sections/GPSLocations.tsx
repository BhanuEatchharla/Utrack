/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function GPSLocations() {
  const { primaryColor } = useTheme();
  const [zoom, setZoom] = useState(1);

  return (
    <section id="locations" className="py-6 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-3">
            GPS Locations & Live Vehicle Tracking
          </h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Real-time location intelligence with live GPS signals, journey
            progression, and visual route awareness.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* LEFT — MAP */}

          <div className="space-y-3">
            {/* MAP TITLE */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Primary Operations Hub
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Central dispatch and monitoring location for live fleet
                operations
              </p>
            </div>

            {/* MAP */}
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
              {/* MAP IMAGE */}
              <img
                src="https://dr3h7ptpe31k5.cloudfront.net/Assets/images/17856/Serviced-Office-(Classic)-Telangana-Hyderabad-JNTU-Road-Manjeera-Trinity-Corporate-Kukatpally-Ranga-Red-3263232.jpg"
                alt="JNTU Hyderabad"
                className="absolute inset-0 w-full h-full object-cover
      brightness-95 dark:brightness-75
      transition-transform duration-500"
                style={{ transform: `scale(${zoom})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />

              {/* TOP LEFT — STATUS */}
              <div className="absolute top-4 left-4 flex gap-2 z-20">
                <span className="px-3 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold shadow">
                  Live Hub
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-500/80 text-white text-xs font-medium shadow">
                  GPS Active
                </span>
              </div>

              {/* TOP RIGHT — MAP CONTROLS */}
              <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
                <button
                  title="Zoom In"
                  onClick={() => setZoom((z) => Math.min(z + 0.15, 2))}
                  className="w-9 h-9 rounded-lg
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-md
        border border-white/40 dark:border-slate-700
        text-gray-800 dark:text-white
        shadow-md
        hover:scale-105 hover:bg-white
        dark:hover:bg-slate-800
        transition-all"
                >
                  +
                </button>

                <button
                  title="Zoom Out"
                  onClick={() => setZoom((z) => Math.max(z - 0.15, 1))}
                  className="w-9 h-9 rounded-lg
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-md
        border border-white/40 dark:border-slate-700
        text-gray-800 dark:text-white
        shadow-md
        hover:scale-105 hover:bg-white
        dark:hover:bg-slate-800
        transition-all"
                >
                  −
                </button>

                {/* Fullscreen button — UI only (no action) */}
                <button
                  title="Fullscreen"
                  className="w-9 h-9 rounded-lg
        bg-white/60 dark:bg-slate-900/60
        backdrop-blur-md
        border border-white/30 dark:border-slate-700
        text-gray-500 dark:text-gray-400
        shadow-md cursor-not-allowed"
                  disabled
                >
                  ⤢
                </button>
              </div>

              {/* CENTER INFO */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <div
                  className="mt-32 px-4 py-2 rounded-xl
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur-md shadow-lg text-center"
                >
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    JNTU Hyderabad Hub
                  </p>
                  <p className="text-[11px] text-gray-600 dark:text-gray-300">
                    17.4924° N, 78.3915° E
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                    Dispatch • Tracking • Alerts
                  </p>
                </div>
              </div>

              {/* ROUTE INFO */}
              <div className="absolute bottom-4 left-4 z-20">
                <div
                  className="px-4 py-2 rounded-xl
      bg-white/80 dark:bg-slate-900/80
      backdrop-blur-md shadow text-xs text-gray-700 dark:text-gray-300"
                >
                  Active Routes: Hyderabad → Secunderabad → Kukatpally
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — LIVE TRACK */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gray-700 shadow-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Live Vehicle Tracking</h3>

            {/* ROUTE */}
            <div className="relative h-20 rounded-xl bg-white/10 backdrop-blur-md overflow-hidden mb-8">
              {/* POINTS */}
              <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                {[
                  { label: "Depot", color: "bg-emerald-400" },
                  { label: "Mid-Stop", color: "bg-amber-300" },
                  { label: "Destination", color: "bg-rose-400" },
                ].map((p, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full ${p.color} flex items-center justify-center`}
                    >
                      <MapPin size={14} />
                    </div>
                    <span className="text-[11px] mt-1 text-blue-100">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* ANIMATED LINE */}
              <div className="absolute inset-0 flex items-center px-10">
                <div className="relative w-full h-1 rounded-full bg-white/20 overflow-hidden">
                  <div className="route-progress" />
                </div>
              </div>

              {/* VEHICLE */}
              <div className="vehicle-moving">
                <div className=" flex items-center justify-center">
                  <img
                    src="https://vms-admin.pragatiutrack.com/logo.svg"
                    alt="Vehicle"
                    className="w-14 h-10 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="space-y-3">
              {[
                ["Current Speed", "45 km/h"],
                ["Last Update", "12 sec ago"],
              ].map((s, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md"
                >
                  <span className="text-blue-100 text-sm">{s[0]}</span>
                  <span className="font-semibold">{s[1]}</span>
                </div>
              ))}

              <div className="flex justify-between items-center px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md">
                <span className="text-blue-100 text-sm">GPS Signal</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-xs font-semibold">
                  Strong
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .vehicle-moving {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          animation: moveVehicle 9s linear infinite;
          z-index: 20;
        }

        .route-progress {
          height: 100%;
          width: 0%;
          background: linear-gradient(90deg, #22c55e, #f59e0b, #ef4444);
          animation: routeFill 9s linear infinite;
        }

        @keyframes moveVehicle {
          0% {
            left: 8%;
          }
          45% {
            left: 45%;
          }
          55% {
            left: 45%;
          }
          100% {
            left: 88%;
          }
        }

        @keyframes routeFill {
          0% {
            width: 0%;
          }
          45% {
            width: 45%;
          }
          55% {
            width: 45%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
