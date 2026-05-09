import { ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Subtle background shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #e01c6b, transparent 70%)' }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #1e2d6b, transparent 70%)' }}
        />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#e01c6b] opacity-40 float-badge" />
        <div
          className="absolute top-1/2 right-1/3 w-3 h-3 rounded-full opacity-30 float-badge"
          style={{ animationDelay: '1s', background: '#1e2d6b' }}
        />
        <div
          className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 rounded-full bg-[#e01c6b] opacity-50 float-badge"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 bg-gradient-to-r from-[#1e2d6b]/10 to-[#e01c6b]/10 border border-[#e01c6b]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#1e2d6b] mb-6">
              <TrendingUp size={14} className="text-[#e01c6b]" />
              Digital Growth Partner
            </div>

            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Amplify Your{' '}
              <span className="gradient-text">Brand's Digital</span>{' '}
              Presence
            </h1>

            <p className="hero-animate hero-animate-3 text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Synvexa Media crafts data-driven marketing strategies that turn clicks into customers. From Website to Digital Marketing.  We grow businesses that grow.
            </p>

            <div className="hero-animate hero-animate-4 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-brand inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-base border-2 border-[#1e2d6b]/20 text-[#1e2d6b] hover:border-[#1e2d6b] transition-colors"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="hero-animate hero-animate-4 flex flex-wrap gap-8 mt-14 pt-10 border-t border-gray-100">
              {[
                { value: '50+', label: 'Happy Clients' },
                { value: '100+', label: 'Projects Delivered' },
                { value: '5+', label: 'Years of Excellence' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual panel */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: 'linear-gradient(135deg, #1e2d6b, #e01c6b)' }}
                >
                  <TrendingUp size={28} className="text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">Growth Analytics</div>
                <div className="text-gray-500 text-sm mb-6">Real-time performance insights for your campaigns</div>

                {/* Mock chart bars */}
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 60, 90, 75, 95].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md"
                      style={{
                        height: `${h}%`,
                        background: i === 7
                          ? 'linear-gradient(180deg, #e01c6b, #1e2d6b)'
                          : i % 2 === 0
                          ? '#e2e8f0'
                          : '#cbd5e1',
                      }}
                    />
                  ))}
                </div>

                <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span>
                </div>
              </div>

              {/* Floating stat badges */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 float-badge">
                <div className="w-9 h-9 rounded-xl bg-green-50 flex items-center justify-center">
                  <Award size={16} className="text-green-500" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">ROI Growth</div>
                  <div className="text-sm font-bold text-gray-900">+340%</div>
                </div>
              </div>

              <div
                className="absolute -bottom-4 -right-6 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3 float-badge"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#1e2d6b,#e01c6b)' }}>
                  <Users size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-400">Reach</div>
                  <div className="text-sm font-bold text-gray-900">1.2M+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
