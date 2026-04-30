import {
  Globe,
  Palette,
  BarChart2,
  Share2,
  Search,
  Video,
  MapPin,
  FileText,
  Pen,
  ShoppingBag,
  Store,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Modern, fast, and conversion-optimized websites tailored to your brand and business goals.',
  },
  {
    icon: Palette,
    title: 'Graphic Designing',
    desc: 'Eye-catching visuals, banners, and marketing collaterals that make your brand unforgettable.',
  },
  {
    icon: BarChart2,
    title: 'Google Ads & Meta Ads',
    desc: 'Performance-focused paid campaigns that deliver measurable ROI across search and social platforms.',
  },
  {
    icon: Share2,
    title: 'Social Media Management',
    desc: 'Strategic content calendars, engaging posts, and community management to grow your following.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    desc: 'Rank higher on Google with technical SEO, content strategy, and authoritative link building.',
  },
  {
    icon: Video,
    title: 'AI Video Marketing',
    desc: 'Next-gen AI-powered video content that captures attention and converts viewers into customers.',
  },
  {
    icon: MapPin,
    title: 'Google Business Profile',
    desc: 'Professional GBP setup and optimization to dominate local search and attract nearby customers.',
  },
  {
    icon: FileText,
    title: 'Content Writing',
    desc: 'SEO-rich blogs, website copy, and marketing content that educates, engages, and converts.',
  },
  {
    icon: Pen,
    title: 'Logo Designing',
    desc: 'Distinctive brand identities crafted to leave a lasting impression in every market.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopify Store Setup',
    desc: 'End-to-end Shopify stores built to drive sales — from product setup to checkout optimization.',
  },
  {
    icon: Store,
    title: 'Storebase.in',
    desc: 'Complete e-commerce solutions powered by Storebase.in to launch and scale your online store.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-[#e01c6b]/10 border border-[#e01c6b]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#e01c6b] mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Services That{' '}
            <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A complete suite of digital marketing solutions to help your business grow, engage, and convert.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card reveal bg-white rounded-2xl border border-gray-200 p-6 cursor-default"
              >
                <div
                  className="service-icon w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #1e2d6b15, #e01c6b15)' }}
                >
                  <Icon size={22} style={{ color: '#1e2d6b' }} />
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
