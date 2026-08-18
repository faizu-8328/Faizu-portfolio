import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from './portfolio';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">Expertise</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="text-gradient">Tools</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            Years of practice and passion refined into professional-grade design capabilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-['Space_Grotesk'] text-sm font-semibold text-white">{skill.name}</span>
                <span className="text-sm font-semibold text-[#5B3DF6]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-[#5B3DF6] to-[#7B5FFF]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
