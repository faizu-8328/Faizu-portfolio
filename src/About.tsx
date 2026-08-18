import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const tools = [
  'Figma', 'Photoshop', 'Illustrator', 'After Effects', 'Canva', 'Premiere Pro',
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              {/* Background decoration */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5B3DF6]/20 to-[#7B5FFF]/5 border border-white/5" />
              
              {/* Content card */}
              <div className="absolute inset-4 rounded-2xl bg-[#1A1A1A] border border-white/5 overflow-hidden flex flex-col items-center justify-center p-8">
                {/* MF Monogram */}
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#5B3DF6] to-[#7B5FFF] flex items-center justify-center mb-6 shadow-2xl shadow-[#5B3DF6]/30">
                  <span className="font-['Space_Grotesk'] text-5xl font-bold text-white tracking-tight">MF</span>
                </div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-1">Muhammed Fayaz</h3>
                <p className="text-[#5B3DF6] font-medium text-sm mb-6">Faizu Design Studio</p>
                
                {/* Quick info */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  {[
                    { label: 'Location', value: '🌍 Remote' },
                    { label: 'Experience', value: '3+ Years' },
                    { label: 'Projects', value: '50+ Done' },
                    { label: 'Status', value: '✅ Available' },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-xl p-3 text-center">
                      <div className="text-xs text-[#666666] mb-1">{item.label}</div>
                      <div className="text-sm font-semibold text-white">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -right-4 top-8 glass rounded-xl px-4 py-2 text-sm font-medium text-white shadow-xl"
              >
                🎨 Creative
              </motion.div>
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-4 bottom-16 glass rounded-xl px-4 py-2 text-sm font-medium text-white shadow-xl"
              >
                ⚡ Fast Delivery
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">About Me</div>
            <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Crafting Visual<br />
              <span className="text-gradient">Experiences</span> That<br />
              Leave a Mark
            </h2>
            <div className="space-y-4 text-[#A0A0A0] leading-relaxed mb-8">
              <p>
                I'm Muhammed Fayaz, the creative force behind <strong className="text-white">Faizu Design Studio</strong>. 
                I specialize in transforming brand visions into stunning visual realities — from scroll-stopping 
                social media designs to complete brand identities that command attention.
              </p>
              <p>
                With over 3 years of professional experience, I've helped 30+ brands across fashion, tech, 
                food, fitness, and real estate build powerful visual presences. My design philosophy is simple: 
                <strong className="text-white"> every pixel should serve a purpose</strong>, and every design should 
                drive results.
              </p>
              <p>
                Whether you're a startup looking for your first brand identity or an established business needing 
                a social media makeover, I bring the same level of passion, precision, and professionalism to every project.
              </p>
            </div>

            {/* Tools */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Tools I Use</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-[#A0A0A0] hover:bg-[#5B3DF6]/10 hover:border-[#5B3DF6]/30 hover:text-white transition-all duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-4">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 bg-[#5B3DF6] hover:bg-[#4A2ED4] text-white font-semibold rounded-xl transition-all duration-300 text-sm hover:shadow-lg hover:shadow-[#5B3DF6]/25"
              >
                Let's Work Together
              </button>
              <a
                href="mailto:fayaz628176@gmail.com"
                className="px-6 py-3 glass glass-hover text-white font-semibold rounded-xl transition-all duration-300 text-sm"
              >
                Send Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
