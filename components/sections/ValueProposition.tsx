"use client";

import { Cpu, MapPin, Warehouse, TrendingUp } from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function ValueProposition() {
  const { primaryColor } = useTheme();

  const features = [
    {
      icon: Cpu,
      title: "Centralised Fleet Command",
      description:
        "Manage your entire fleet from one unified dashboard. Real-time visibility into every vehicle, driver, and trip across all locations.",
    },
    {
      icon: MapPin,
      title: "Real-time GPS & Trip Tracking",
      description:
        "Live GPS tracking with route optimization, geofencing, and instant alerts. Monitor trips end-to-end with precision.",
    },
    {
      icon: Warehouse,
      title: "Warehouse & Cold Chain Control",
      description:
        "Complete warehouse management with cold chain monitoring, inventory tracking, and automated alerts for temperature deviations.",
    },
    {
      icon: TrendingUp,
      title: "Invoices, Accounts & Analytics",
      description:
        "Integrated billing, expense tracking, and powerful analytics. Make data-driven decisions with real-time insights.",
    },
  ];

  return (
    <section
      id="value-proposition"
      className="
        relative
        min-h-[70vh] lg:min-h-[75vh]
        flex items-center
        bg-white dark:bg-gray-900
        py-10 sm:py-12 lg:py-4
      "
    >
      <div className="w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- Heading ---------------- */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Why UTrack?
          </h2>

          {/* DECISION TIMELINE — WHY UTRACK */}
          <div className="relative my-8">
            <div className="max-w-9xl mx-auto px-6">
              {/* Timeline header */}
              <div className="text-center mb-10">
                <h3 className="text-3xl sm:text-4xl lg:text-xl font-bold text-gray-500 dark:text-white mb-4">
                  Decisions Happen in Time. UTrack Owns That Time.
                </h3>
              </div>

              {/* Timeline */}
              <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* LINE */}
                <div
                  className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px]
        bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 opacity-40"
                />

                {/* PAST */}
                <div
                  className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
  border border-slate-200 dark:border-slate-700
  rounded-3xl p-5 shadow-md"
                >
                  <p className="text-xs uppercase tracking-wide text-rose-500 mb-2">
                    Before UTrack
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                    <li>• Delayed GPS updates</li>
                    <li>• Manual coordination</li>
                    <li>• Scattered tools</li>
                    <li>• Reactive decisions</li>
                  </ul>
                </div>

                {/* NOW */}
                <div
                  className="relative bg-white dark:bg-slate-900 border-2
  border-emerald-500 rounded-3xl p-6
  shadow-[0_30px_80px_rgba(16,185,129,0.35)]
  scale-[1.05]"
                >
                  <div
                    className={`absolute -top-6 left-1/2 -translate-x-1/2
    w-14 h-14 rounded-2xl ${colorClasses[primaryColor].bg}
    flex items-center justify-center text-white shadow-2xl`}
                  >
                    <Cpu size={28} />
                  </div>

                  <p className="text-xs uppercase tracking-wide text-emerald-500 mt-6 mb-2 text-center">
                    UTrack Live Intelligence
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-700 dark:text-slate-200 leading-snug">
                    <li>• Unified fleet & GPS view</li>
                    <li>• Live alerts & signals</li>
                    <li>• Automated workflows</li>
                    <li>• Decisions in real time</li>
                  </ul>
                </div>

                {/* NEXT */}
                <div
                  className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md
  border border-slate-200 dark:border-slate-700
  rounded-3xl p-5 shadow-md"
                >
                  <p className="text-xs uppercase tracking-wide text-emerald-600 mb-2">
                    With UTrack
                  </p>

                  <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-300 leading-snug">
                    <li>• Faster deliveries</li>
                    <li>• Lower operational cost</li>
                    <li>• Predictive insights</li>
                    <li>• Confident decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------- Cards ---------------- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="
                  group relative
                  p-6
                  rounded-2xl
                  bg-gradient-to-br from-gray-50 to-gray-100
                  dark:from-gray-800 dark:to-gray-700
                  border border-gray-200 dark:border-gray-600
                  hover:shadow-2xl hover:scale-[1.04]
                  transition-all duration-300
                  cursor-pointer
                "
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Hover glow */}
                <div
                  className="
                    absolute inset-0 rounded-2xl
                    bg-gradient-to-br from-blue-500/0 to-emerald-500/0
                    group-hover:from-blue-500/10 group-hover:to-emerald-500/10
                    transition-all duration-300
                  "
                />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${colorClasses[primaryColor].bg}
                      flex items-center justify-center text-white mb-4
                      group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom gradient bar */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                    bg-gradient-to-r ${colorClasses[primaryColor].gradient}
                    transform scale-x-0 group-hover:scale-x-100
                    transition-transform duration-300`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
