import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projectTypes = [
  'Social Media Design',
  'Brand Identity',
  'Logo Design',
  'UI/UX Design',
  'Advertisement Design',
  'YouTube Design',
  'Print Design',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a form service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', projectType: '', budget: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute left-1/2 top-0 w-[500px] h-[500px] bg-[#5B3DF6]/5 rounded-full blur-[150px] -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">Get In Touch</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Create <span className="text-gradient">Together</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            Available for freelance projects and collaborations. Let's discuss how I can help your brand stand out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-6">
              <div>
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-1">Muhammed Fayaz</h3>
                <p className="text-[#5B3DF6] text-sm font-medium">Faizu Design Studio</p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:fayaz628176@gmail.com"
                  className="flex items-center gap-3 text-[#A0A0A0] hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#5B3DF6]/20 flex items-center justify-center transition-colors">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#666666]">Email</div>
                    <div className="text-sm font-medium">fayaz628176@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-[#A0A0A0]">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="text-lg">🌍</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#666666]">Availability</div>
                    <div className="text-sm font-medium text-emerald-400">Open for work</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-[#A0A0A0]">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <span className="text-lg">⏰</span>
                  </div>
                  <div>
                    <div className="text-xs text-[#666666]">Response Time</div>
                    <div className="text-sm font-medium">Within 24 hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5">
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: 'Instagram', icon: '📸', url: '#' },
                  { name: 'Behance', icon: '🎨', url: '#' },
                  { name: 'Dribbble', icon: '🏀', url: '#' },
                  { name: 'LinkedIn', icon: '💼', url: '#' },
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-[#5B3DF6]/10 hover:border-[#5B3DF6]/30 border border-white/5 transition-all duration-300 group"
                  >
                    <span className="text-xl">{social.icon}</span>
                    <span className="text-sm text-[#A0A0A0] group-hover:text-white transition-colors">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-[#1A1A1A] border border-white/5 space-y-5">
              {submitted && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm text-center">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-[#666666] focus:outline-none focus:border-[#5B3DF6] focus:ring-1 focus:ring-[#5B3DF6] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-[#666666] focus:outline-none focus:border-[#5B3DF6] focus:ring-1 focus:ring-[#5B3DF6] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type *</label>
                  <select
                    required
                    value={form.projectType}
                    onChange={e => setForm({ ...form, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#5B3DF6] focus:ring-1 focus:ring-[#5B3DF6] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select a service</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type} className="bg-[#1A1A1A]">{type}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#5B3DF6] focus:ring-1 focus:ring-[#5B3DF6] transition-all appearance-none"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select budget</option>
                    <option value="<$500" className="bg-[#1A1A1A]">Under $500</option>
                    <option value="$500-$1000" className="bg-[#1A1A1A]">$500 — $1,000</option>
                    <option value="$1000-$2500" className="bg-[#1A1A1A]">$1,000 — $2,500</option>
                    <option value="$2500-$5000" className="bg-[#1A1A1A]">$2,500 — $5,000</option>
                    <option value="$5000+" className="bg-[#1A1A1A]">$5,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">Message *</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-[#666666] focus:outline-none focus:border-[#5B3DF6] focus:ring-1 focus:ring-[#5B3DF6] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#5B3DF6] hover:bg-[#4A2ED4] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3DF6]/30 text-base"
              >
                Send Message
              </button>

              <p className="text-xs text-[#666666] text-center">
                Or email directly at{' '}
                <a href="mailto:fayaz628176@gmail.com" className="text-[#5B3DF6] hover:underline">
                  fayaz628176@gmail.com
                </a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
