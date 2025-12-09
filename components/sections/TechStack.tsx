'use client';

import { Code, Smartphone, Globe, Shield, Layout, Database } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function TechStack() {
  const { primaryColor } = useTheme();

  const technologies = [
    {
      icon: Code,
      title: 'Next.js, TypeScript & Tailwind CSS',
      description:
        'Built with modern web technologies for blazing-fast performance and developer experience.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Web + PWA + React Native',
      description:
        'Progressive Web App capabilities with native mobile apps for iOS and Android.',
    },
    {
      icon: Globe,
      title: 'Multi-tenant Architecture',
      description:
        'Scalable infrastructure supporting multiple organizations with isolated data.',
    },
    {
      icon: Database,
      title: '37+ Languages & Global Timezone Support',
      description:
        'Truly global platform with multi-language support and timezone handling.',
    },
    {
      icon: Shield,
      title: 'Role-based Access Control (RBAC)',
      description:
        'Enterprise-grade security with granular permissions and audit trails.',
    },
    {
      icon: Layout,
      title: 'Reusable UI Components',
      description:
        'Component library with tables, charts, cards, and forms for consistent UX.',
    },
  ];

  const gradients = [
    'from-blue-500/10 via-indigo-500/10 to-purple-500/10',
    'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
    'from-sky-500/10 via-blue-500/10 to-indigo-500/10',
    'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
    'from-amber-500/10 via-orange-500/10 to-red-500/10',
    'from-rose-500/10 via-pink-500/10 to-purple-500/10',
  ];

  return (
    <section
      id="tech-stack"
      className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-950 dark:to-slate-950"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Built on Modern Technology
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Enterprise-grade platform powered by cutting-edge technologies and best practices
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            const gradient = gradients[index % gradients.length];

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-slate-200/80 dark:border-slate-700/70 bg-white/90 dark:bg-slate-900/80 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
              >
                {/* soft background tint */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 w-40 h-40 bg-gradient-to-br ${gradient} blur-3xl opacity-70 dark:opacity-80`}
                />
                <div className="pointer-events-none absolute -bottom-20 -left-10 w-44 h-44 bg-slate-100 dark:bg-slate-900 blur-3xl opacity-70" />

                <div className="relative p-7 sm:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl ${colorClasses[primaryColor].bg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                  >
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {tech.title}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="mt-5">
                    <span className="inline-flex items-center text-[11px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                      Technology pillar
                    </span>
                  </div>
                </div>

                {/* thin gradient strip at bottom */}
                <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />
              </div>
            );
          })}
        </div>

        <div
          className={`
            mt-16 p-8 sm:p-10 rounded-2xl shadow-xl
            bg-gradient-to-r ${colorClasses[primaryColor].gradient}
          `}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Performance &amp; Reliability
            </h3>
            <div className="grid sm:grid-cols-4 gap-8 text-center text-white">
              <div>
                <p className="text-4xl font-extrabold mb-1">99.9%</p>
                <p className="text-sm text-blue-50/90">Uptime SLA</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-1">&lt;100ms</p>
                <p className="text-sm text-blue-50/90">API Response</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-1">10s</p>
                <p className="text-sm text-blue-50/90">GPS Updates</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold mb-1">1M+</p>
                <p className="text-sm text-blue-50/90">Daily Events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}