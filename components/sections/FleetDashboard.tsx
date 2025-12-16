"use client";

import { useState } from "react";
import {
  Truck,
  AlertCircle,
  CheckCircle,
  TrendingUp,
  Fuel,
  Shield,
  ChevronDown,
} from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function FleetDashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { primaryColor } = useTheme();

  const vehicles = [
    {
      id: "TN-42-XY-1234",
      driver: "Rajesh Kumar",
      ignition: "On",
      lastTrip: "2 hours ago",
      fuelToday: "45L",
      fuelWeek: "285L",
      safetyCheck: "Passed",
    },
    {
      id: "TN-42-AB-5678",
      driver: "Priya Singh",
      ignition: "Off",
      lastTrip: "5 hours ago",
      fuelToday: "38L",
      fuelWeek: "210L",
      safetyCheck: "Passed",
    },
    {
      id: "TN-42-CD-9012",
      driver: "Amit Patel",
      ignition: "On",
      lastTrip: "30 min ago",
      fuelToday: "52L",
      fuelWeek: "320L",
      safetyCheck: "Pending",
    },
    {
      id: "TN-42-EF-3456",
      driver: "Sunita Reddy",
      ignition: "On",
      lastTrip: "1 hour ago",
      fuelToday: "41L",
      fuelWeek: "265L",
      safetyCheck: "Passed",
    },
    {
      id: "TN-42-GH-7890",
      driver: "Vikram Rao",
      ignition: "Off",
      lastTrip: "3 hours ago",
      fuelToday: "36L",
      fuelWeek: "195L",
      safetyCheck: "Passed",
    },
  ];

  const safetyData = [
    { day: "Mon", value: 95 },
    { day: "Tue", value: 98 },
    { day: "Wed", value: 92 },
    { day: "Thu", value: 97 },
    { day: "Fri", value: 94 },
    { day: "Sat", value: 96 },
    { day: "Sun", value: 99 },
  ];

  const fuelData = [
    { day: "Day 1", value: 320 },
    { day: "Day 2", value: 285 },
    { day: "Day 3", value: 310 },
    { day: "Day 4", value: 295 },
    { day: "Day 5", value: 340 },
    { day: "Day 6", value: 275 },
    { day: "Day 7", value: 300 },
  ];

  return (
    <section
      id="fleet-dashboard"
      className="py-4 bg-white dark:bg-gray-900 relative"
    >
      <div className="absolute top-0 right-0 w-1 h-full hidden lg:block" />

      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-700 dark:text-white mb-4">
            Fleet Dashboard & Deep Insights
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive fleet management with real-time monitoring, safety
            tracking, and fuel analytics
          </p>
        </div>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-950 rounded-2xl p-8 shadow-2xl border border-gray-200/70 dark:border-gray-700/70 mb-8 relative overflow-hidden">
          {/* accent glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-400/30 via-cyan-500/20 to-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-sky-500/5 blur-3xl" />

          <div className="relative flex items-center justify-between gap-4 mb-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Fleet Overview
            </h3>
            <div
              className={`hidden sm:inline-flex px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r ${colorClasses[primaryColor].gradient} text-white shadow-md`}
            >
              Live snapshot
            </div>
          </div>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6 mb-8">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 border border-slate-200/70 dark:border-slate-700/70 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                  <Truck size={22} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Total
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                487
              </p>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Total Vehicles
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50 dark:from-emerald-900/40 dark:via-emerald-900/20 dark:to-emerald-950 border border-emerald-200/70 dark:border-emerald-700/60 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
                  <CheckCircle size={22} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-emerald-700 dark:text-emerald-200">
                  Healthy
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                451
              </p>
              <p className="mt-1 text-sm text-emerald-900/80 dark:text-emerald-100/90">
                In Service
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 dark:from-amber-900/40 dark:via-amber-900/20 dark:to-amber-950 border border-amber-200/70 dark:border-amber-700/60 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg">
                  <TrendingUp size={22} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-amber-800 dark:text-amber-200">
                  Upcoming
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                23
              </p>
              <p className="mt-1 text-sm text-amber-900/80 dark:text-amber-100/90">
                Upcoming Services
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-50 via-indigo-50 to-slate-100 dark:from-violet-900/40 dark:via-indigo-900/20 dark:to-slate-950 border border-violet-200/70 dark:border-violet-700/60 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">
                  <Shield size={22} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-violet-800 dark:text-violet-200">
                  Attention
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                13
              </p>
              <p className="mt-1 text-sm text-violet-900/80 dark:text-violet-100/90">
                Safety Checks Pending
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-br from-rose-50 via-red-50 to-amber-50 dark:from-rose-900/40 dark:via-rose-900/20 dark:to-amber-950 border border-rose-200/70 dark:border-rose-700/60 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white shadow-lg">
                  <AlertCircle size={22} />
                </div>
                <span className="text-[11px] uppercase tracking-wide text-rose-800 dark:text-rose-200">
                  Today
                </span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white leading-tight">
                12
              </p>
              <p className="mt-1 text-sm text-rose-900/80 dark:text-rose-100/90">
                Alerts Today
              </p>
            </div>
          </div>

          <div className="relative text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-white font-semibold transition-all ${colorClasses[primaryColor].bg} ${colorClasses[primaryColor].hover} shadow-lg hover:shadow-xl hover:scale-105`}
            >
              <span>
                {isExpanded ? "Hide Fleet Details" : "View Fleet Details"}
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Vehicle Status & Performance
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Vehicle
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Driver
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Ignition
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Last Trip
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Fuel (Today)
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Fuel (Week)
                      </th>
                      <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Safety Check
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vehicles.map((vehicle, index) => (
                      <tr
                        key={index}
                        className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                      >
                        <td className="py-4 px-4 text-sm font-medium text-gray-900 dark:text-white">
                          {vehicle.id}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {vehicle.driver}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              vehicle.ignition === "On"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                            }`}
                          >
                            {vehicle.ignition}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {vehicle.lastTrip}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {vehicle.fuelToday}
                        </td>
                        <td className="py-4 px-4 text-sm text-gray-700 dark:text-gray-300">
                          {vehicle.fuelWeek}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              vehicle.safetyCheck === "Passed"
                                ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                                : "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                            }`}
                          >
                            {vehicle.safetyCheck}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Shield
                    className={`${colorClasses[primaryColor].text} mr-2`}
                    size={24}
                  />
                  Safety Check Compliance
                </h4>
                <div className="space-y-4">
                  {safetyData.map((data, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-700 dark:text-gray-300">
                          {data.day}
                        </span>
                        <span className="text-sm font-bold text-gray-900 dark:text-white">
                          {data.value}%
                        </span>
                      </div>
                      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${colorClasses[primaryColor].bg} transition-all duration-500`}
                          style={{ width: `${data.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Fuel className="text-blue-600 mr-2" size={24} />
                  Fuel Consumption (Last 7 Days)
                </h4>

                <div className="relative h-72">
                  <svg viewBox="0 0 400 250" className="w-full h-full">
                    {/* Grid Lines */}
                    {[0, 50, 100, 150, 200, 250, 300, 350].map((val, i) => (
                      <line
                        key={i}
                        x1="0"
                        y1={250 - (val / 400) * 220}
                        x2="400"
                        y2={250 - (val / 400) * 220}
                        stroke="#e5e7eb"
                        strokeWidth="1"
                        className="dark:stroke-gray-700"
                      />
                    ))}

                    {/* Bars */}
                    {fuelData.map((d, index) => (
                      <g
                        key={index}
                        transform={`translate(${index * 55 + 30}, 0)`}
                      >
                        <rect
                          x="0"
                          y={250 - (d.value / 400) * 220}
                          width="35"
                          height={(d.value / 400) * 220}
                          className="transition-all duration-500"
                          fill="url(#fuelGradient)"
                          rx="6"
                        />
                        <text
                          x="18"
                          y="240"
                          textAnchor="middle"
                          className="text-[10px] fill-gray-600 dark:fill-gray-300"
                        >
                          {d.day}
                        </text>
                      </g>
                    ))}

                    {/* Gradient */}
                    <defs>
                      <linearGradient
                        id="fuelGradient"
                        x1="0"
                        y1="1"
                        x2="0"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#fbbf24" />
                        <stop offset="100%" stopColor="#f59e0b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="mt-6 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700">
                  <p className="text-sm text-amber-900 dark:text-amber-100">
                    Average daily consumption:{" "}
                    <span className="font-bold">303 L</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 shadow-xl text-white">
              <h4 className="text-2xl font-bold mb-4">Key Insights</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-blue-100 mb-2">Driver Performance</p>
                  <p className="text-sm">
                    Track driver behavior, safety compliance, and performance
                    metrics with detailed reports and real-time alerts.
                  </p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Vehicle Health</p>
                  <p className="text-sm">
                    Monitor vehicle condition, maintenance schedules, and
                    service history to maximize uptime and reduce costs.
                  </p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Ignition Alerts</p>
                  <p className="text-sm">
                    Instant notifications for ignition events, unauthorized
                    usage, and after-hours vehicle movement.
                  </p>
                </div>
                <div>
                  <p className="text-blue-100 mb-2">Push Notifications</p>
                  <p className="text-sm">
                    Real-time alerts and reports delivered to managers and
                    drivers via mobile push notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
