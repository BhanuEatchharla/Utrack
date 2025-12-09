'use client';

import { Cpu, MapPin, Warehouse, TrendingUp } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function ValueProposition() {
  const { primaryColor, accentColor } = useTheme();

  const features = [
    {
      icon: Cpu,
      title: 'Centralised Fleet Command',
      description: 'Manage your entire fleet from one unified dashboard. Real-time visibility into every vehicle, driver, and trip across all locations.',
      color: 'blue',
    },
    {
      icon: MapPin,
      title: 'Real-time GPS & Trip Tracking',
      description: 'Live GPS tracking with route optimization, geofencing, and instant alerts. Monitor trips end-to-end with precision.',
      color: 'emerald',
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Cold Chain Control',
      description: 'Complete warehouse management with cold chain monitoring, inventory tracking, and automated alerts for temperature deviations.',
      color: 'violet',
    },
    {
      icon: TrendingUp,
      title: 'Invoices, Accounts & Analytics',
      description: 'Integrated billing, expense tracking, and powerful analytics. Make data-driven decisions with real-time insights.',
      color: 'teal',
    },
  ];

  return (
    <section id="value-proposition" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Why UTrack?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive platform built for modern fleet and logistics operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-emerald-500/0 group-hover:from-blue-500/10 group-hover:to-emerald-500/10 transition-all duration-300" />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-xl ${colorClasses[primaryColor].bg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon size={28} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl bg-gradient-to-r ${colorClasses[primaryColor].gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
