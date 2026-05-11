import { Target, Lightbulb, HeartHandshake, LineChart, Clock, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Goal-Oriented Strategy',
    desc: 'Every campaign is engineered around your specific business objectives and KPIs.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Innovation',
    desc: 'Fresh ideas and cutting-edge tactics that keep your brand ahead of the competition.',
  },
  {
    icon: HeartHandshake,
    title: 'Client-First Approach',
    desc: 'We treat your brand as our own your growth is our motivation.',
  },
  {
    icon: LineChart,
    title: 'Measurable ROI',
    desc: 'Transparent analytics and reporting so you always know where your money goes.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    desc: 'We respect deadlines. Projects are delivered on schedule, every time.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted & Reliable',
    desc: 'Hundreds of satisfied clients trust us to manage their digital marketing needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-[#1e2d6b]/10 border border-[#1e2d6b]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#1e2d6b] mb-4">
            Why Synvexa Media
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            The <span className="gradient-text">Synvexa Advantage</span>
          </h2>
          <p className="text-gray-500 text-lg">
            We don't just run campaigns. We build growth engines for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 6)} group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#e01c6b]/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'linear-gradient(135deg, #1e2d6b, #e01c6b)' }}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
