import { useState, type FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    );
    const whatsappUrl = `https://wa.me/919567280652?text=${message}`;

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', phone: '', message: '' });
    }, 500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-[#e01c6b]/10 border border-[#e01c6b]/20 rounded-full px-4 py-1.5 text-sm font-medium text-[#e01c6b] mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contact <span className="gradient-text">Synvexa Media</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Have a project in mind? Let's talk. We're here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="reveal space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-500 leading-relaxed mb-8">
                Whether you're looking to launch a new campaign, redesign your website, or supercharge your SEO  reach out and our team will get back to you within 24 hours.
              </p>
            </div>

            {[
              {
                icon: Phone,
                label: 'Phone',
                value: '+91 9567280652',
                href: 'tel:9567280652',
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'synvexamedia@gmail.com',
                href: 'mailto:synvexamedia@gmail.com',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Oachira, Kerala & Bangalore, KA',
                href: null,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1e2d6b, #e01c6b)' }}
                >
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-0.5">{label}</div>
                  {href ? (
                    <a href={href} className="text-gray-900 font-semibold hover:text-[#e01c6b] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-900 font-semibold">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-2 bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-500">Thank you! We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 9876543210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@company.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your project or goals..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-brand w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
