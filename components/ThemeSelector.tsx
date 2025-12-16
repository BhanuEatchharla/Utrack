'use client';

import { useState, useEffect, useRef } from 'react';
import { Palette, Sun, Moon } from 'lucide-react';
import { useTheme, colorClasses, ColorOption } from '@/lib/theme-context';

export default function ThemeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const { primaryColor, mode, setPrimaryColor, toggleMode } = useTheme();
  const menuRef = useRef<HTMLDivElement>(null);

  const colors = Object.keys(colorClasses) as ColorOption[];

  // close when clicking outside
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

  return (
    <div className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 z-50">

      {/* Panel */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute bottom-16 right-0 w-72 rounded-2xl shadow-xl 
          bg-white dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-6 space-y-6"
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
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colorClasses[color].gradient}
                  transition-all shadow-lg
                  ${primaryColor === color ? "ring-4 ring-white scale-110" : "hover:scale-105"}
                  `}
                />
              ))}
            </div>
          </div>

          {/* MODE SWITCH */}
          <button
            onClick={toggleMode}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg 
            bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700"
          >
            <span className="text-sm text-gray-900 dark:text-gray-200">
              {mode === "light" ? "Light Mode" : "Dark Mode"}
            </span>

            {mode === "light" ? (
              <Sun size={20} className="text-amber-600" />
            ) : (
              <Moon size={20} className="text-blue-300" />
            )}
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-2xl text-white flex items-center justify-center
        bg-gradient-to-br ${colorClasses[primaryColor].gradient}`}
      >
        <Palette size={24} />
      </button>
    </div>
  );
}
