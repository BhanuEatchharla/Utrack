'use client';

import {
  ArrowRight,
  Play,
  TrendingUp,
  AlertCircle,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function Hero() {
  const { primaryColor } = useTheme();

  const scrollToModules = () => {
    const el = document.querySelector('#modules') as HTMLElement | null;
    if (!el) return;

    const offset = 70;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-24 lg:pt-28 pb-16 overflow-hidden
      bg-gradient-to-br from-slate-50 via-white to-blue-50
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      {/* Premium background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full blur-[120px] opacity-30
          bg-gradient-to-br ${colorClasses[primaryColor].gradient}`}
        />
        <div className="absolute bottom-[-6rem] right-[-6rem] w-[480px] h-[480px] bg-emerald-500/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* trust badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-blue-50 dark:bg-blue-900/20
              border border-blue-200/70 dark:border-blue-800/50
              text-xs sm:text-sm font-medium text-blue-700 dark:text-blue-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Trusted Fleet Intelligence Platform
            </div>

            {/* headline */}
            <div className="space-y-5">
              <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem]
                font-extrabold tracking-tight leading-tight
                text-slate-900 dark:text-white">
                Smart Fleet & Logistics
                <span className="block text-transparent bg-clip-text
                  bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500">
                  Command Platform
                </span>
              </h1>

              <p className="text-base sm:text-base text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
                Gain complete visibility and operational control across vehicles,
                drivers, routes, warehouses, billing, and real-time GPS insights —
                all from one unified system.
              </p>

              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-lg">
                Designed for logistics, transport, and enterprise operations that
                demand accuracy, scale, and automation.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://vms-admin.pragatiutrack.com/home"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2
                  px-8 py-4 rounded-xl text-white font-semibold
                  transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03]
                  bg-gradient-to-r ${colorClasses[primaryColor].gradient}`}
              >
                Request Live Demo
                <ArrowRight size={18} />
              </a>

              <button
                onClick={scrollToModules}
                className="inline-flex items-center justify-center gap-2
                  px-8 py-4 rounded-xl
                  bg-white/90 dark:bg-slate-900
                  text-slate-900 dark:text-white font-semibold
                  border border-slate-200 dark:border-slate-700
                  hover:border-blue-500 dark:hover:border-blue-400
                  transition-all hover:shadow-md"
              >
                <Play size={18} />
                Explore Modules
              </button>
            </div>

            {/* trust metrics */}
            <div className="flex flex-wrap gap-3 pt-4 text-xs sm:text-sm">
              <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white dark:bg-slate-800">
                500+ Active Vehicles
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                24/7 Live GPS
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                Multi-Language Support
              </span>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/15 rounded-full blur-3xl" />
            <div className="absolute bottom-[-2.5rem] left-[-2.5rem] w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl" />

            <div className="relative rounded-2xl border border-slate-200/70 dark:border-slate-700/70
              bg-white/95 dark:bg-slate-900 shadow-[0_5px_20px_rgba(15,23,42,0.45)]
              p-5 sm:p-6 space-y-5 animate-float-slow">

              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                    Fleet Command Center
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Live operations overview
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium
                  bg-emerald-50 dark:bg-emerald-900/30
                  text-emerald-700 dark:text-emerald-300 border border-emerald-200/60">
                  ● Live
                </span>
              </div>

              {/* KPI GRID */}
              <div className="grid grid-cols-2 gap-3">
                <Stat icon={<TrendingUp size={18} />} label="Active Vehicles" value="487" color="blue" />
                <Stat icon={<MapPin size={18} />} label="Running Trips" value="142" color="emerald" />
                <Stat icon={<CheckCircle size={18} />} label="Open Tickets" value="23" color="amber" />
                <Stat icon={<AlertCircle size={18} />} label="Alerts Today" value="12" color="rose" />
              </div>

              {/* chart */}
              <div className="relative h-40 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                  <path
                    d="M 8 78 Q 28 42, 50 52 T 92 20"
                    stroke="#3b82f6"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

/* KPI card */
function Stat({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: 'blue' | 'emerald' | 'amber' | 'rose';
}) {
  const colors: Record<string, string> = {
    blue: 'from-blue-500 to-indigo-500',
    emerald: 'from-emerald-500 to-teal-500',
    amber: 'from-amber-500 to-orange-500',
    rose: 'from-rose-500 to-red-500',
  };

  return (
    <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700
      bg-white/90 dark:bg-slate-900">
      <div className={`w-9 h-9 mb-2 rounded-lg bg-gradient-to-br ${colors[color]}
        flex items-center justify-center text-white shadow`}>
        {icon}
      </div>
      <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
      <p className="text-xs text-slate-600 dark:text-slate-400">{label}</p>
    </div>
  );
}
