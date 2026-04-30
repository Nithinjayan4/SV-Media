import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="reveal relative rounded-3xl overflow-hidden p-14 text-center"
          style={{ background: 'linear-gradient(135deg, #1e2d6b 0%, #3a1a60 50%, #e01c6b 100%)' }}
        >
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-8 left-8 w-32 h-32 rounded-full border border-white/40" />
            <div className="absolute bottom-8 right-8 w-48 h-48 rounded-full border border-white/30" />
            <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full border border-white/20" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium text-white mb-6">
              <Sparkles size={14} />
              Ready to Scale?
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Let's Grow Your Business{' '}
              <span className="text-[#fca5c3]">Together</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Book a free consultation today and discover how Synvexa Media can transform your digital presence into a revenue-generating powerhouse.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white text-[#1e2d6b] font-bold px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors text-base"
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="tel:9567280652"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/20 transition-colors text-base"
              >
                Call Us: 9567280652
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
