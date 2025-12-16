/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function Team() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const { primaryColor } = useTheme();

  /* =======================
     MANAGEMENT TEAM (EXISTING)
  ======================== */

  const team = [
    {
      name: "Rajesh Kumar",
      role: "Product Lead",
      employeeId: "EMP-001",
      email: "rajesh.kumar@utrack.com",
      phone: "+91 98765 43210",
      initials: "RK",
      color: "blue",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Priya Singh",
      role: "Frontend Engineer",
      employeeId: "EMP-002",
      email: "priya.singh@utrack.com",
      phone: "+91 98765 43211",
      initials: "PS",
      color: "emerald",
      img: "https://randomuser.me/api/portraits/women/62.jpg",
    },
    {
      name: "Amit Patel",
      role: "Backend Engineer",
      employeeId: "EMP-003",
      email: "amit.patel@utrack.com",
      phone: "+91 98765 43212",
      initials: "AP",
      color: "violet",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  /* =======================
     EMPLOYEES (NEW ORBIT)
  ======================== */

  const members = [
    {
      name: "vamsi",
      role: "Back-End-Developer",
      img: "/team/vamsi.jpg",
    },
    {
      name: "Bhanu",
      role: "Front-End-Developer",
      img: "/team/bhanu.jpg",
    },
    {
      name: "Surya",
      role: "backend-Developer",
      img: "/team/surya.jpg",
    },
    {
      name: "Vivek",
      role: "Full-Stack Developer",
      img: "/team/vivek.jpg",
    },

    {
      name: "pramod",
      role: "backend-developer",
      img: "/team/pramod.jpg",
    },
    {
      name: "amith",
      role: "Full-Stack Developer",
      img: "/team/amith.jpg",
    },
    {
      name: "praveen",
      role: "Front-End-Developer",
      img: "/team/praveen.jpg",
    },
    {
      name: "krishnasai",
      role: "Front-End-Developer",
      img: "/team/krishnaSai.jpg",
    },
    {
      name: "rakesh",
      role: "Native Developer",
      img: "/team/rakesh.jpg",
    },
    {
      name: "pradeep",
      role: "Full-Stack Developer",
      img: "/team/pradeep.jpg",
    },
  ];

  return (
    <section id="team" className="py-10 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ===== MANAGEMENT ===== */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Leadership & Core Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The people shaping UTrack’s vision
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => {
            const isFlipped = flippedIndex === index;

            return (
              <div
                key={index}
                className="relative h-80 perspective-1000"
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden bg-gray-500 dark:bg-gray-800 rounded-2xl flex flex-col items-center justify-center shadow-xl">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-28 h-28 rounded-full object-cover shadow-lg mb-4"
                    />
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500">{member.role}</p>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 flex flex-col justify-center">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <User size={16} />
                        <span className="text-sm">{member.employeeId}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="text-sm">{member.email}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span className="text-sm">{member.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== EMPLOYEE ORBIT ===== */}
        {/* ================= EMPLOYEE SCROLL ================= */}
        <div className="text-center mb-10 py-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Our Operations Team
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            The people who keep UTrack running 24×7
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee gap-12">
            {/* Duplicate list for seamless loop */}
            {[...members, ...members].map((m, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center min-w-[160px]"
              >
                <img
                  src={m.img}
                  alt={m.name}
                  className="
                  w-20 h-20 sm:w-24 sm:h-24
                  rounded-full object-cover
                  shadow-lg
                  mb-3
                "
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

        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        //       .animate-orbit {
        //         animation: orbit 45s linear infinite;
        //       }
        //          @keyframes employeeScroll {
        //   0% {
        //     transform: translateX(0);
        //   }
        //   100% {
        //     transform: translateX(-50%);
        //   }
        // }

        .animate-employee-scroll {
          animation: employeeScroll 35s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
