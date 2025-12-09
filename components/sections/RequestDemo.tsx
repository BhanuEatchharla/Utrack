'use client';

import { ArrowRight, Mail } from 'lucide-react';
import { useTheme, colorClasses } from '@/lib/theme-context';

export default function RequestDemo() {
  const { primaryColor } = useTheme();

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-delay" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-6">
          See UTrack in Action
        </h2>
        <p className="text-xl text-blue-100 mb-4">
          Experience the power of unified fleet management
        </p>
        <p className="text-blue-200 mb-12 max-w-2xl mx-auto">
          Schedule a personalized demo and discover how UTrack can transform your fleet operations with real-time tracking, smart automation, and comprehensive analytics.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://vms-admin.pragatiutrack.com/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-semibold transition-all shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <span>Request Demo</span>
            <ArrowRight size={20} />
          </a>

          <a
            href="mailto:sales@utrack.com"
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm text-white font-semibold border-2 border-white/30 hover:bg-white/20 transition-all"
          >
            <Mail size={20} />
            <span>Contact Sales</span>
          </a>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-white">
          <div>
            <p className="text-4xl font-bold mb-2">10K+</p>
            <p className="text-blue-100">Vehicles Tracked</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">50+</p>
            <p className="text-blue-100">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-4xl font-bold mb-2">99.9%</p>
            <p className="text-blue-100">Uptime Guarantee</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
