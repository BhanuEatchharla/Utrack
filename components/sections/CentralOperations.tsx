"use client";

import { useState } from "react";
import {
  Building2,
  Users,
  Truck,
  UserCircle,
  Smartphone,
  CreditCard,
  FileText,
  AlertTriangle,
  ChevronDown,
  Shield,
  FileCheck,
} from "lucide-react";
import { useTheme, colorClasses } from "@/lib/theme-context";

export default function CentralOperations() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { primaryColor } = useTheme();

  const operations = [
    {
      icon: Building2,
      title: "Organisations",
      description:
        "Multi-tenant architecture supporting multiple organisations with independent data and configurations.",
    },
    {
      icon: Users,
      title: "Users",
      description:
        "Role-based access control with granular permissions across departments and locations.",
    },
    {
      icon: Truck,
      title: "Vehicles",
      description:
        "Complete vehicle registry with documents, insurance, service history, and live status.",
    },
    {
      icon: UserCircle,
      title: "Drivers",
      description:
        "Driver profiles with licenses, certifications, performance metrics, and safety records.",
    },
    {
      icon: Smartphone,
      title: "Devices",
      description:
        "GPS device management with connectivity status, diagnostics, and firmware updates.",
    },
    {
      icon: CreditCard,
      title: "Sims",
      description:
        "SIM inventory and data usage tracking to control connectivity costs.",
    },
    {
      icon: FileText,
      title: "Invoices",
      description:
        "Automated billing, expense tracking, and financial reporting.",
    },
    {
      icon: AlertTriangle,
      title: "Tickets",
      description:
        "Issue tracking and resolution workflows for maintenance and support.",
    },
  ];

  return (
    <section
      id="central-ops"
      className="scroll-mt-[80px] py-2 bg-gradient-to-br
        from-gray-50 to-blue-50
        dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2
            className="text-3xl sm:text-4xl lg:text-4xl font-bold
            text-gray-800 dark:text-white mb-3"
          >
            Central Operations
          </h2>
          <p className="text-base sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A unified command center to manage fleet, users, devices, billing,
            and operations at scale.
          </p>
        </div>

        {/* Core grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {operations.map((op, index) => {
            const Icon = op.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl
          bg-gradient-to-br from-gray-50 to-gray-100
          dark:from-gray-800 dark:to-gray-700
          border border-gray-200 dark:border-gray-600
          hover:shadow-2xl hover:scale-[1.04]
          transition-all duration-300 cursor-pointer"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl
            bg-gradient-to-br from-blue-500/0 to-emerald-500/0
            group-hover:from-blue-500/10 group-hover:to-emerald-500/10
            transition-all duration-300"
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
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {op.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {op.description}
                  </p>
                </div>

                {/* Bottom animated bar */}
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

        {/* Expand button */}
        <div className="text-center mb-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`inline-flex items-center gap-2 px-7 py-3 rounded-lg
              text-white font-semibold transition-all
              ${colorClasses[primaryColor].bg}
              ${colorClasses[primaryColor].hover}
              shadow-md hover:shadow-lg`}
          >
            <span>{isExpanded ? "Show Less" : "Load More"}</span>
            <ChevronDown
              size={18}
              className={`transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Expanded section */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? "max-h-[1600px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {/* User Management */}
            <FeatureCard
              color="blue"
              icon={<Users size={30} />}
              title="Advanced User Management"
              points={[
                "Multi-level role-based permissions",
                "Audit logs and activity tracking",
              ]}
            />

            {/* Vehicle Registry */}
            <FeatureCard
              color="emerald"
              icon={<Truck size={30} />}
              title="Complete Vehicle Registry"
              points={[
                "Document expiry alerts",
                "Maintenance scheduling & reminders",
              ]}
            />

            {/* Device Management */}
            <FeatureCard
              color="violet"
              icon={<Smartphone size={30} />}
              title="Smart Device Management"
              points={[
                "SIM data usage monitoring",
                "Connectivity & health alerts",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Feature Card ---------------- */

function FeatureCard({
  color,
  icon,
  title,
  points,
}: {
  color: "blue" | "emerald" | "violet";
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  const colors = {
    blue: "from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700",
    emerald:
      "from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 border-emerald-200 dark:border-emerald-700",
    violet:
      "from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20 border-violet-200 dark:border-violet-700",
  };

  return (
    <div
      className={`relative p-7 rounded-xl border bg-gradient-to-br
        ${colors[color]}`}
    >
      <div
        className="w-14 h-14 rounded-xl bg-white dark:bg-gray-900
        flex items-center justify-center mb-4 shadow"
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      {points.map((p, i) => (
        <div key={i} className="flex items-center gap-3 mb-2">
          <Shield size={18} className="text-gray-600 dark:text-gray-300" />
          <span className="text-sm text-gray-700 dark:text-gray-300">{p}</span>
        </div>
      ))}
    </div>
  );
}
