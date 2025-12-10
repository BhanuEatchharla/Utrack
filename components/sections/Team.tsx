/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function Team() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const { primaryColor } = useTheme();

  const colorMap: any = {
    blue: 'from-blue-600 to-blue-800',
    emerald: 'from-emerald-600 to-emerald-800',
    violet: 'from-violet-600 to-violet-800',
    teal: 'from-teal-600 to-teal-800',
    amber: 'from-amber-500 to-amber-700',
    rose: 'from-rose-500 to-rose-700',
  };

  const bgSoft: any = {
    blue: 'from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20',
    emerald:
      'from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20',
    violet:
      'from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-800/20',
    teal: 'from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20',
    amber:
      'from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20',
    rose: 'from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-800/20',
  };

  const team = [
    {
      name: 'Rajesh Kumar',
      role: 'Product Lead',
      employeeId: 'EMP-001',
      email: 'rajesh.kumar@utrack.com',
      phone: '+91 98765 43210',
      initials: 'RK',
      color: 'blue',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Priya Singh',
      role: 'Frontend Engineer',
      employeeId: 'EMP-002',
      email: 'priya.singh@utrack.com',
      phone: '+91 98765 43211',
      initials: 'PS',
      color: 'emerald',
      img: 'https://randomuser.me/api/portraits/women/62.jpg',
    },
    {
      name: 'Amit Patel',
      role: 'Backend Engineer',
      employeeId: 'EMP-003',
      email: 'amit.patel@utrack.com',
      phone: '+91 98765 43212',
      initials: 'AP',
      color: 'violet',
      img: 'https://randomuser.me/api/portraits/men/64.jpg',
    },
    {
      name: 'Sunita Reddy',
      role: 'UX Designer',
      employeeId: 'EMP-004',
      email: 'sunita.reddy@utrack.com',
      phone: '+91 98765 43213',
      initials: 'SR',
      color: 'teal',
      img: 'https://randomuser.me/api/portraits/women/54.jpg',
    },
    {
      name: 'Vikram Rao',
      role: 'DevOps Engineer',
      employeeId: 'EMP-005',
      email: 'vikram.rao@utrack.com',
      phone: '+91 98765 43214',
      initials: 'VR',
      color: 'amber',
      img: 'https://randomuser.me/api/portraits/men/71.jpg',
    },
    {
      name: 'Neha Sharma',
      role: 'QA Engineer',
      employeeId: 'EMP-006',
      email: 'neha.sharma@utrack.com',
      phone: '+91 98765 43215',
      initials: 'NS',
      color: 'rose',
      img: 'https://randomuser.me/api/portraits/women/68.jpg',
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Meet the talented individuals building the future of fleet management
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
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 backface-hidden">
                    <div
                      className={`
                        h-full rounded-2xl border dark:border-gray-600 hover:shadow-2xl transition-shadow overflow-hidden
                        bg-gradient-to-br ${bgSoft[member.color]}
                      `}
                    >
                      <div
                        className={`h-32 bg-gradient-to-r ${colorMap[member.color]}`}
                      />

                      <div className="px-8 pb-8 -mt-16 flex flex-col items-center text-center">
                        <img
                          src={member.img}
                          className="w-32 h-32 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-800 mb-4"
                          alt={member.name}
                        />

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {member.name}
                        </h3>
                        <p
                          className={`text-sm font-medium text-${member.color}-600 dark:text-${member.color}-400`}
                        >
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div
                      className={`
                        h-full p-8 rounded-2xl text-white shadow-2xl flex flex-col justify-center space-y-4
                        bg-gradient-to-br ${colorMap[member.color]}
                      `}
                    >
                      <div className="flex items-center justify-center mb-4">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
                          {member.initials}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-center">{member.name}</h3>
                      <p className="text-blue-100 text-center">{member.role}</p>

                      <div className="space-y-3 pt-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                          <User size={18} />
                          <span className="text-sm">{member.employeeId}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                          <Mail size={18} />
                          <span className="text-sm truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm">
                          <Phone size={18} />
                          <span className="text-sm">{member.phone}</span>
                        </div>
                      </div>

                      <div className="pt-4 text-center">
                        <span className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium">
                          Tap to flip back
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

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
      `}</style>
    </section>
  );
}
