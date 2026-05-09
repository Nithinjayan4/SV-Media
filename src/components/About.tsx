import { CheckCircle2 } from 'lucide-react';

const highlights = [
  'Full-service digital marketing agency',
  'Data-driven, results-focused approach',
  'Dedicated team of creative specialists',
  'Transparent reporting & communication',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <div className="reveal relative">
            <div
              className="absolute inset-0 rounded-3xl opacity-10 -rotate-3"
              style={{ background: 'linear-gradient(135deg, #1e2d6b, #e01c6b)' }}
            />
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e2d6b] to-[#e01c6b] p-1">
              <div className="bg-white rounded-[20px] p-10">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: '50+', label: 'Clients Served' },
                    { number: '200+', label: 'Projects Done' },
                    { number: '5+', label: 'Years Active' },
                    { number: '10+', label: 'Team Members' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-gray-50 p-6 text-center"
                    >
                      <div className="text-3xl font-extrabold gradient-text mb-1">{item.number}</div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl overflow-hidden border border-gray-100">
                  <img
                    src="/DP-01.jpg.jpeg"
                    alt="Synvexa Media"
                    className="w-full object-contain bg-white p-4 h-32"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="reveal reveal-delay-2">
            <div className="inline-flex items-center gap-2 bg-[#1e2d6b]/10 border border-[#1e2d6b]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#1e2d6b] mb-5">
              About Us
            </div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              We Are <span className="gradient-text">Synvexa Media</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Synvexa Media is a full-spectrum digital marketing agency dedicated to helping businesses grow their online presence, attract the right audience, and generate consistent revenue.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From startups to established enterprises, we craft customized digital strategies that align with your goals. Our team of designers, developers, ad specialists, and content creators work in sync to deliver exceptional results.
            </p>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#e01c6b] flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="btn-brand inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold mt-10"
            >
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
