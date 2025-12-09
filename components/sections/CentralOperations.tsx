'use client';

import { useState } from 'react';
import { Building2, Users, Truck, UserCircle, Smartphone, CreditCard, FileText, AlertTriangle, ChevronDown, Shield, FileCheck } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function CentralOperations() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { primaryColor } = useTheme();

  const operations = [
    {
      icon: Building2,
      title: 'Organisations',
      description: 'Multi-tenant architecture supporting multiple organisations with independent data and configurations.',
    },
    {
      icon: Users,
      title: 'Users',
      description: 'Role-based access control with granular permissions. Manage staff across departments and locations.',
    },
    {
      icon: Truck,
      title: 'Vehicles',
      description: 'Complete vehicle registry with documents, insurance, service history, and real-time status tracking.',
    },
    {
      icon: UserCircle,
      title: 'Drivers',
      description: 'Driver profiles with licenses, certifications, performance metrics, and safety records.',
    },
    {
      icon: Smartphone,
      title: 'Devices',
      description: 'GPS device management with connectivity status, firmware updates, and diagnostic tools.',
    },
    {
      icon: CreditCard,
      title: 'Sims',
      description: 'SIM card inventory and data usage monitoring. Track connectivity costs and optimize plans.',
    },
    {
      icon: FileText,
      title: 'Invoices',
      description: 'Automated billing, expense tracking, and financial reporting. Generate invoices in seconds.',
    },
    {
      icon: AlertTriangle,
      title: 'Tickets',
      description: 'Issue tracking and resolution workflow. Monitor complaints, maintenance, and support requests.',
    },
  ];

  return (
    <section id="central-ops" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Central Operations – Your Unified Control Room
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Manage every aspect of your fleet and logistics from a single, powerful command center
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {operations.map((op, index) => {
            const Icon = op.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[primaryColor].bg} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {op.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {op.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-white font-semibold transition-all ${colorClasses[primaryColor].bg} ${colorClasses[primaryColor].hover} shadow-lg hover:shadow-xl hover:scale-105`}
          >
            <span>{isExpanded ? 'Show Less' : 'Load More'}</span>
            <ChevronDown
              size={20}
              className={`transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-4 shadow-lg">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Advanced User Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Sophisticated role-based access control with granular permissions. Define custom roles for managers, dispatchers, drivers, and administrators.
                </p>
                <div className="flex items-center space-x-3 mb-2">
                  <Shield size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Multi-level security permissions
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileCheck size={20} className="text-blue-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Audit logs and activity tracking
                  </span>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-emerald-600 flex items-center justify-center text-white mb-4 shadow-lg">
                  <Truck size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Complete Vehicle Registry
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Maintain comprehensive vehicle records including registration, insurance, permits, and service schedules with automated renewal reminders.
                </p>
                <div className="flex items-center space-x-3 mb-2">
                  <FileText size={20} className="text-emerald-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Document expiry alerts
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle size={20} className="text-emerald-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Maintenance scheduling
                  </span>
                </div>
              </div>
            </div>

            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border border-violet-200 dark:border-violet-700 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-violet-600 flex items-center justify-center text-white mb-4 shadow-lg">
                  <Smartphone size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Smart Device Management
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Monitor GPS device health, connectivity status, and battery levels. Remote diagnostics and over-the-air updates keep your fleet connected.
                </p>
                <div className="flex items-center space-x-3 mb-2">
                  <CreditCard size={20} className="text-violet-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    SIM data usage tracking
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <AlertTriangle size={20} className="text-violet-600" />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Connectivity alerts
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
