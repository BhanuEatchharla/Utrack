'use client';

import { useState, useEffect, useRef } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme-context';

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryColor, mode, setPrimaryColor, toggleMode } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  // ✨ Close when clicking outside
  useEffect(() => {
    if (!isOpen) return;

    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('mousedown', handler);
    return () => window.removeEventListener('mousedown', handler);
  }, [isOpen]);

  // 🎨 Rich gradients matching your app
  const gradients: Record<string, string> = {
    blue: "from-blue-600 via-blue-700 to-blue-800",
    emerald: "from-emerald-600 via-emerald-700 to-emerald-800",
    violet: "from-violet-600 via-violet-700 to-violet-900",
    teal: "from-teal-600 via-teal-700 to-teal-800",
    amber: "from-amber-500 via-amber-600 to-amber-700",
    rose: "from-rose-600 via-rose-700 to-rose-800",
  };

  const colors = Object.keys(gradients) as (keyof typeof gradients)[];

  return (   
    <div className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-40">
      
      {/* PANEL */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-16 right-0 w-72 rounded-2xl shadow-2xl border border-gray-200 
          dark:border-gray-800 backdrop-blur-xl overflow-hidden animate-fadeIn"
        >
          <div
            className={`p-6 space-y-6 bg-gradient-to-br 
              ${mode === "dark"
                ? "from-slate-900 via-slate-800 to-slate-900"
                : "from-white via-gray-50 to-gray-100"
              }`}
          >
            {/* PRIMARY COLOR */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Primary Color
              </h4>

              <div className="grid grid-cols-6 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setPrimaryColor(color)}
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradients[color]}
                      transition-all shadow-lg 
                      ${primaryColor === color
                        ? "ring-4 ring-white dark:ring-slate-700 scale-110"
                        : "hover:scale-105"
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* THEME MODE */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Theme Mode
              </h4>

              <button
                onClick={toggleMode}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg 
                bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl
                hover:bg-white/20 dark:hover:bg-slate-700/50
                transition-all border border-white/20 dark:border-slate-700"
              >
                <span className="text-sm text-gray-800 dark:text-gray-200">
                  {mode === 'light' ? 'Light Mode' : 'Dark Mode'}
                </span>

                {mode === 'light' ? (
                  <Sun size={20} className="text-amber-600" />
                ) : (
                  <Moon size={20} className="text-blue-300" />
                )}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* MAIN FLOAT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 
        transition-all flex items-center justify-center text-white
        bg-gradient-to-br ${gradients[primaryColor]}`}
      >
        <Palette size={24} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
      `}</style>

    </div>
  );
}
