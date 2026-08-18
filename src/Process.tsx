import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { processSteps } from '../data/portfolio';

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="process" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">How I Work</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            My Design <span className="text-gradient">Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            A streamlined workflow designed to deliver exceptional results efficiently.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >
              {/* Connector line */}
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-gradient-to-r from-[#5B3DF6]/30 to-[#5B3DF6]/10" />
              )}

              <div className="relative p-6 rounded-2xl bg-[#1A1A1A] border border-white/5 hover:border-[#5B3DF6]/30 transition-all duration-500 card-glow text-center h-full">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#5B3DF6] rounded-full text-xs font-bold text-white">
                  Step {step.step}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-4 mt-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>

                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white mb-2 group-hover:text-[#5B3DF6] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-[#A0A0A0] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
