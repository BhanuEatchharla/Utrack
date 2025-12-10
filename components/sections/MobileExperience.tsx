"use client";

import { Smartphone, Bell, CheckCircle, MapPin } from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function MobileExperience() {
  const { primaryColor } = useTheme();

  return (
    <section
      id="mobile-experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Mobile-first for Drivers and Managers
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Native mobile apps and PWA for seamless operations on the go
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-xl ${colorClasses[primaryColor].bg} flex items-center justify-center text-white`}
                >
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Driver App
                </h3>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white mb-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold">Active Trip</h4>
                  <span className="px-3 py-1 rounded-full bg-green-500 text-xs font-medium">
                    In Progress
                  </span>
                </div>
                <p className="text-blue-100 text-sm mb-4">
                  Hyderabad to Bengaluru
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <button className="flex-1 py-3 rounded-lg bg-white text-blue-600 font-semibold">
                    Start Break
                  </button>
                  <button className="flex-1 py-3 rounded-lg bg-red-600 text-white font-semibold">
                    End Trip
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-100">Distance</span>
                    <span className="font-semibold">345 km</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-100">ETA</span>
                    <span className="font-semibold">4h 30m</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Pre-trip safety checklist
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <MapPin size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Real-time GPS tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <Bell size={20} className="text-amber-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Instant alerts & notifications
                  </span>
                </div>
              </div>
            </div>


            {/* NEW CARD — Driver Utility Tools */}
<div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
    Driver Utility Tools
  </h3>

  <div className="space-y-3">
    <div className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-gray-700">
      <span className="text-sm text-gray-700 dark:text-gray-300">Document Upload</span>
      <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm">Enabled</span>
    </div>

    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
      <span className="text-sm text-gray-700 dark:text-gray-300">SOS Alert</span>
      <span className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-medium">
        Emergency
      </span>
    </div>

    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
      <span className="text-sm text-gray-700 dark:text-gray-300">Live Chat Support</span>
      <span className="font-semibold text-emerald-600 dark:text-emerald-400">Available</span>
    </div>

    <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
      <span className="text-sm text-gray-700 dark:text-gray-300">Trip History</span>
      <span className="font-semibold text-gray-900 dark:text-white">View →</span>
    </div>
  </div>
</div>

          </div>

          

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Manager Dashboard
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      TN-42-XY-1234
                    </span>
                    <span className="px-2 py-1 rounded-full bg-green-500 text-white text-xs">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Driver: Rajesh Kumar
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      TN-42-AB-5678
                    </span>
                    <span className="px-2 py-1 rounded-full bg-green-500 text-white text-xs">
                      Active
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Driver: Priya Singh
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      TN-42-CD-9012
                    </span>
                    <span className="px-2 py-1 rounded-full bg-gray-500 text-white text-xs">
                      Idle
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Driver: Amit Patel
                  </p>
                </div>
              </div>

              <div className="relative h-40 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 h-full">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className="border-r border-b border-gray-400 dark:border-gray-500"
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-lg" />
                <div className="absolute top-[60%] left-[45%] w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg" />
                <div className="absolute top-[40%] left-[70%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg" />
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-500 to-emerald-500 rounded-2xl p-8 shadow-xl text-white">
              <h4 className="text-2xl font-bold mb-4">Platform Features</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    React Native apps for iOS and Android with native
                    performance
                  </span>
                </div> 
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Progressive Web App (PWA) for dispatch teams and office
                    staff
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Push notifications for trip updates, alerts, and reports
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle size={20} className="mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Offline mode with automatic sync when connection is restored
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
