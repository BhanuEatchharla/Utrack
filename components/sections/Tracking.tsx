/* eslint-disable @next/next/no-img-element */
"use client";

import { MapPin, Clock, Navigation, Bell } from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function Tracking() {
  const { primaryColor } = useTheme();

  const steps = [
    {
      label: "Trip Created",
      status: "completed",
      detail: "Trip created in UTrack control room.",
    },
    {
      label: "Vehicle Assigned",
      status: "completed",
      detail: "Vehicle & driver assigned to this trip.",
    },
    {
      label: "Driver Dispatched",
      status: "completed",
      detail: "Driver started from source location.",
    },
    {
      label: "In Transit",
      status: "active",
      detail: "Vehicle is currently travelling towards destination.",
    },
    {
      label: "Arriving Soon",
      status: "pending",
      detail: "Vehicle is near destination hub.",
    },
    {
      label: "Completed",
      status: "pending",
      detail: "Trip will be closed after delivery confirmation.",
    },
  ];

  const completedCount = steps.filter((s) => s.status !== "pending").length;
  const progressHeight = (completedCount / steps.length) * 100;

  return (
    <section
      id="tracking"
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Tracking That Feels Like Consumer Apps
          </h2>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
            Advanced UTrack Journey Experience
          </p>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Monitor every journey with real-time updates, visual route tracking,
            and intelligent notifications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 mb-8">
          {/* LEFT SIDE — Live map + stats */}
          <div className="space-y-8">
            {/* Live Route Tracking */}
            <div className="bg-white/95 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.35)] border border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Live Route Tracking
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Flipkart-style journey view with live status and route path
                  </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-700 text-[11px] font-medium text-emerald-700 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Live Tracking
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">
                    Updated: 12 sec ago
                  </span>
                </div>
              </div>

              {/* small stats row */}
              <div className="grid grid-cols-3 gap-3 mb-5 text-xs sm:text-sm">
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">
                    Trip ID
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    UTR-TRP-9842
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">
                    Route
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white truncate">
                    JNTU → Hyderabad City
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 dark:bg-slate-800/80 px-3 py-2 flex flex-col">
                  <span className="text-slate-500 dark:text-slate-400">
                    ETA
                  </span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    2h 15m
                  </span>
                </div>
              </div>

              {/* Map area (UNCHANGED) */}
              <div className="relative h-72 sm:h-80 rounded-2xl bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 overflow-hidden">
                {/* GRID */}
                <div className="absolute inset-0 opacity-30 dark:opacity-40">
                  <div className="grid grid-cols-12 h-full">
                    {Array.from({ length: 60 }).map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-slate-200 dark:border-slate-600"
                      />
                    ))}
                  </div>
                </div>

                {/* route path */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="routeGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#22c55e" />
                      <stop offset="40%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 10 70 Q 25 60, 35 50 T 55 40 T 75 30 T 90 20"
                    stroke="url(#routeGradient)"
                    strokeWidth="3"
                    fill="none"
                    strokeDasharray="5,6"
                    strokeLinecap="round"
                  />
                </svg>

                {/* ORIGIN */}
                <div className="absolute top-[70%] left-[10%] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="mt-1 px-2 py-1 rounded bg-white/90 dark:bg-slate-900 text-[11px] font-medium shadow">
                    Origin
                  </span>
                </div>

                {/* WAYPOINTS */}
                <div className="absolute top-[60%] left-[24%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />
                <div className="absolute top-[50%] left-[38%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />
                <div className="absolute top-[40%] left-[55%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />
                <div className="absolute top-[30%] left-[73%] w-4 h-4 rounded-full bg-blue-500 shadow-lg animate-pulse" />

                {/* DESTINATION */}
                <div className="absolute top-[20%] left-[90%] flex flex-col items-center -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center text-white shadow-lg">
                    <MapPin size={16} />
                  </div>
                  <span className="mt-1 px-2 py-1 rounded bg-white/90 dark:bg-slate-900 text-[11px] font-medium shadow">
                    Destination
                  </span>
                </div>

                {/* TRUCK ANIMATION */}
                <div className="truck-container">
                  <div className="truck-icon rounded-full border border-slate-200/70 dark:border-slate-700 bg-white/95 dark:bg-slate-900/90 shadow-xl flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11">
                    <img
                      src="https://vms-admin.pragatiutrack.com/logo.svg"
                      alt="UTrack Logo"
                      className="w-8 h-5 sm:w-9 sm:h-6 object-contain"
                    />
                  </div>
                </div>
              </div>
              
            </div>
            

            {/* Key journey features (UNCHANGED) */}
            <div className="bg-white/95 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200/80 dark:border-slate-800">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-5">
                Key Journey Features
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={20}
                    className={colorClasses[primaryColor].text}
                  />
                  <p className="text-slate-700 dark:text-slate-200">
                    Real-time GPS updates every 10 seconds with route context.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Bell size={20} className={colorClasses[primaryColor].text} />
                  <p className="text-slate-700 dark:text-slate-200">
                    Instant alerts for ignition, overspeed & harsh driving.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation
                    size={20}
                    className={colorClasses[primaryColor].text}
                  />
                  <p className="text-slate-700 dark:text-slate-200">
                    Route deviation detection with automatic rerouting.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={20}
                    className={colorClasses[primaryColor].text}
                  />
                  <p className="text-slate-700 dark:text-slate-200">
                    ETAs, delays & arrival alerts delivered instantly.
                  </p>
                </div>
              </div>
            </div>

            <div className=" bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
  <div className="premium-card flex-grow">
    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">
      Vehicle Health
    </h3>

    <div className="space-y-4 text-sm sm:text-base">

      {/* Ignition */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">Ignition</span>
        <span className="px-3 py-1 rounded-full bg-emerald-500/80 text-white text-xs font-semibold">
          ON
        </span>
      </div>

      {/* GPS Signal */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">GPS Signal</span>
        <span className="font-semibold text-slate-800 dark:text-white">
          Strong
        </span>
      </div>

      {/* Network */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">Network</span>
        <span className="font-semibold text-slate-800 dark:text-white">
          4G / Good
        </span>
      </div>

      {/* Battery */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">Device Battery</span>
        <span className="font-semibold text-slate-800 dark:text-white">
          78%
        </span>
      </div>

      {/* Fuel */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">Fuel Level</span>
        <span className="font-semibold text-slate-800 dark:text-white">
          62%
        </span>
      </div>

      {/* Device Status */}
      <div className="flex justify-between items-center">
        <span className="text-slate-600 dark:text-slate-300">Device Status</span>
        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold">
          ONLINE
        </span>
      </div>
    </div>
  </div>
</div>
          </div>

          

          {/* RIGHT SIDE — NEW TIMELINE + SUMMARY */}
          <div className="space-y-8">
            {/* NEW REDESIGNED TIMELINE */}

            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-800">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                Trip Timeline
              </h3>

              <div className="relative pl-20">
                <div className="space-y-12">
                  {steps.map((step, index) => {
                    const isCompleted = step.status === "completed";
                    const isActive = step.status === "active";
                    const isPending = step.status === "pending";

                    return (
                      <div key={index} className="relative">
                        {/* DOT CENTERED ON LINE */}
                        <div
                          className={`
                  absolute left-[25px] top-0 w-5 h-5 rounded-full border-[3px]
                  ${
                    isCompleted
                      ? "bg-green-500 border-green-500"
                      : isActive
                      ? "bg-white border-green-500"
                      : "bg-white border-slate-400"
                  }
                `}
                        ></div>

                        {/* TEXT BLOCK */}
                        <div className="ml-16">
                          <p
                            className={`
                    text-lg font-semibold
                    ${
                      isCompleted
                        ? "text-slate-900"
                        : isActive
                        ? "text-green-600"
                        : "text-slate-500"
                    }
                  `}
                          >
                            {step.label}
                          </p>

                          <p className="text-sm text-slate-500 mt-1">
                            {step.detail}
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            09 Aug 2025, 10:00am
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>


            

            {/* Trip Summary (unchanged) */}
            <div
              className={`
                  bg-gradient-to-br ${colorClasses[primaryColor].gradient}
                  rounded-2xl p-7 sm:p-8 shadow-[0_18px_45px_rgba(15,23,42,0.75)] text-white
                `}
            >
              <h3 className="text-2xl font-bold mb-5">Trip Summary</h3>
              <div className="space-y-4 text-sm sm:text-base">
                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Vehicle ID</span>
                  <span className="font-semibold">TN-42-XY-1234</span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Driver</span>
                  <span className="font-semibold">Rajesh Kumar</span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Status</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs sm:text-sm font-semibold">
                    In Transit
                  </span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">ETA</span>
                  <span className="font-semibold">2h 15m</span>
                </div>

                <div className="flex justify-between items-center gap-4">
                  <span className="text-blue-100/90">Distance Remaining</span>
                  <span className="font-semibold">87 km</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 text-xs sm:text-sm text-blue-100/90 flex flex-wrap gap-3">
                <span>Ignition alerts</span>
                <span>Route deviation monitoring</span>
                <span>Push notifications enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .truck-container {
          position: absolute;
          transform: translate(-50%, -50%);
          animation: moveTruck 14s linear infinite;
        }

        @keyframes moveTruck {
          0% {
            top: 70%;
            left: 10%;
          }
          16% {
            top: 63%;
            left: 22%;
          }
          32% {
            top: 55%;
            left: 34%;
          }
          48% {
            top: 47%;
            left: 48%;
          }
          64% {
            top: 40%;
            left: 62%;
          }
          80% {
            top: 30%;
            left: 76%;
          }
          100% {
            top: 20%;
            left: 90%;
          }
        }
      `}</style>
    </section>
  );
}
