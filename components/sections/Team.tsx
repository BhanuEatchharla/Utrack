/* eslint-disable @next/next/no-img-element */
"use client";

import { Mail, Phone, User } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

/* =======================
   COLOR MAP (SAME AS MODULES)
======================== */
type CardColor = "blue" | "green" | "red" | "yellow" | "violet" | "teal";

const cardBg: Record<CardColor, string> = {
  blue: "bg-blue-200",
  green: "bg-green-200",
  red: "bg-red-100",
  yellow: "bg-yellow-200",
  violet: "bg-violet-200",
  teal: "bg-teal-200",
};

export default function Team() {
  const { primaryColor } = useTheme();

  /* =======================
     MANAGEMENT TEAM
  ======================== */
  const management: {
    name: string;
    role: string;
    employeeId: string;
    email: string;
    phone: string;
    img: string;
    color: CardColor;
  }[] = [
    {
      name: "SRIRAMAKRISHNA DENDUKURI",
      role: "Chairman & Managing Director, Ramki Group",
      employeeId: "EMP-001",
      email: "ramki@ramkigroup.com",
      phone: "+91 99590 45474",
      img: "/team/ramkisir.jpg",
      color: "blue",
    },
    {
      name: "Anil Kumar",
      role: "Product Manager",
      employeeId: "EMP-002",
      email: "anilkumar@gmail.com",
      phone: "+91 98765 43211",
      img: "/team/Anil Kumar.jpg",
      color: "green",
    },
    {
      name: "Srikanth",
      role: "HR",
      employeeId: "EMP-003",
      email: "srikanth@gmail.com",
      phone: "+91 98765 43212",
      img: "/team/srikanth.jpg",
      color: "violet",
    },
    {
      name: "Gayatri",
      role: "Marketing Head",
      employeeId: "EMP-004",
      email: "gayatri@gmail.com",
      phone: "+91 98765 43213",
      img: "/team/Gayetri.jpg",
      color: "yellow",
    },
  ];

  /* =======================
     EMPLOYEES
  ======================== */
  const employees = [
    { name: "Vamsi", role: "Back-End Developer", img: "/team/vamsi.jpg" },
    { name: "Bhanu", role: "Front-End Developer", img: "/team/bhanu.jpg" },
    { name: "Surya", role: "Back-End Developer", img: "/team/surya.jpg" },
    { name: "Vivek", role: "Full-Stack Developer", img: "/team/vivek.jpg" },
    { name: "Pramod", role: "Back-End Developer", img: "/team/pramod.jpg" },
    { name: "Amith", role: "Full-Stack Developer", img: "/team/amith.jpg" },
    { name: "Praveen", role: "Front-End Developer", img: "/team/praveen.jpg" },
    { name: "Krishna Sai", role: "Front-End Developer", img: "/team/krishnaSai.jpg" },
    { name: "Rakesh", role: "Native Developer", img: "/team/rakesh.jpg" },
    { name: "Pradeep", role: "Full-Stack Developer", img: "/team/pradeep.jpg" },
  ];

  return (
    <section id="team" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ===== MANAGEMENT ===== */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Leadership & Core Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The people shaping UTrack’s vision
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {management.map((m, index) => (
            <div key={index} className="relative h-80 perspective-1000 group">

              {/* ROTATING WRAPPER */}
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">

                {/* FRONT (MODULE STYLE) */}
                <div className="absolute inset-0 backface-hidden">
                  <div
                    className={`h-full rounded-3xl
                      ${cardBg[m.color]}
                      border border-gray-200 dark:border-gray-700
                      shadow-md hover:shadow-lg
                      transition-all duration-300
                      flex flex-col items-center justify-center text-center`}
                  >
                    <img
                      src={m.img}
                      alt={m.name}
                      className="w-24 h-24 rounded-full object-cover shadow-md mb-4"
                    />

                    <h3 className="text-lg font-semibold text-gray-900 dark:text-black px-3">
                      {m.name}
                    </h3>

                    <p className="text-sm text-gray-700 dark:text-gray-700 mt-1 px-4">
                      {m.role}
                    </p>
                  </div>
                </div>

                {/* BACK (CLEAN & LIGHT) */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div
                    className="h-full rounded-3xl
                      bg-red-400 dark:bg-red-300
                      border border-gray-200 dark:border-gray-700
                      shadow-xl p-6
                      flex flex-col justify-center text-center"
                  >
                    <div className="space-y-3 text-sm text-gray-700 dark:text-black">
                      <div className="flex justify-center gap-2">
                        <User size={16} /> {m.employeeId}
                      </div>
                      <div className="flex justify-center gap-2">
                        <Mail size={16} /> {m.email}
                      </div>
                      <div className="flex justify-center gap-2">
                        <Phone size={16} /> {m.phone}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ===== EMPLOYEE MARQUEE ===== */}
        <div className="text-center mt-16 mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Our Operations Team
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The people who keep UTrack running 24×7
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {[...employees, ...employees].map((m, i) => (
              <div key={i} className="flex flex-col items-center min-w-[160px] text-center">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-lg mb-3"
                />
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  {m.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
