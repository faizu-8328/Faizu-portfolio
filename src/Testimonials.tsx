import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { testimonials } from './portfolio';

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-[#5B3DF6]/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">Testimonials</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#5B3DF6]/20 transition-all duration-500 card-glow group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, si) => (
                  <span key={si} className="text-[#5B3DF6] text-sm">★</span>
                ))}
              </div>

              <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B3DF6] to-[#7B5FFF] flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-[#666666] text-xs">{t.role}, {t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl bg-[#1A1A1A] border border-white/5"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(testimonials[active].rating)].map((_, i) => (
                <span key={i} className="text-[#5B3DF6] text-sm">★</span>
              ))}
            </div>
            <p className="text-[#A0A0A0] text-sm leading-relaxed mb-6 italic">"{testimonials[active].text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#5B3DF6] to-[#7B5FFF] flex items-center justify-center text-white font-bold text-sm">
                {testimonials[active].name.charAt(0)}
              </div>
              <div>
                <div className="text-white text-sm font-semibold">{testimonials[active].name}</div>
                <div className="text-[#666666] text-xs">{testimonials[active].role}, {testimonials[active].company}</div>
              </div>
            </div>
          </motion.div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${active === i ? 'bg-[#5B3DF6] w-6' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
