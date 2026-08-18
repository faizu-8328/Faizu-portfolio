import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/portfolio';

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const study = caseStudies[activeStudy];

  return (
    <section id="casestudies" className="py-24 md:py-32 relative" ref={ref}>
      <div className="absolute left-0 top-1/2 w-[400px] h-[400px] bg-[#5B3DF6]/5 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">Case Studies</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            Behind the <span className="text-gradient">Design</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            A deeper look at the strategy, process, and solutions behind selected projects.
          </p>
        </motion.div>

        {/* Study Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {caseStudies.map((cs, i) => (
            <button
              key={cs.id}
              onClick={() => setActiveStudy(i)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeStudy === i
                  ? 'bg-[#5B3DF6] text-white shadow-lg shadow-[#5B3DF6]/25'
                  : 'bg-white/5 text-[#A0A0A0] hover:bg-white/10 hover:text-white'
              }`}
            >
              {cs.brand}
            </button>
          ))}
        </motion.div>

        {/* Active Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-10 items-start"
          >
            {/* Visual */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/5">
                {study.projects[0]?.image && (
                  <img
                    src={study.projects[0].image}
                    alt={study.brand}
                    className="w-full aspect-square object-cover"
                  />
                )}
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-[#5B3DF6] flex items-center justify-center">
                <span className="font-['Space_Grotesk'] text-2xl font-bold text-white">0{activeStudy + 1}</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
                <span className="text-xs text-[#5B3DF6] font-semibold">{study.projectType}</span>
              </div>
              
              <h3 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold text-white mb-6">{study.brand}</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-[#5B3DF6] uppercase tracking-wider mb-2">
                    <span className="w-6 h-0.5 bg-[#5B3DF6]" />
                    Objective
                  </h4>
                  <p className="text-[#A0A0A0] leading-relaxed">{study.objective}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-[#5B3DF6] uppercase tracking-wider mb-2">
                    <span className="w-6 h-0.5 bg-[#5B3DF6]" />
                    Solution
                  </h4>
                  <p className="text-[#A0A0A0] leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-sm font-semibold text-[#5B3DF6] uppercase tracking-wider mb-3">
                    <span className="w-6 h-0.5 bg-[#5B3DF6]" />
                    Results
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: '+280%', label: 'Engagement' },
                      { value: '+150%', label: 'Brand Reach' },
                      { value: '4.9★', label: 'Client Rating' },
                    ].map(r => (
                      <div key={r.label} className="bg-white/5 rounded-xl p-3 text-center border border-white/5">
                        <div className="font-['Space_Grotesk'] text-xl font-bold text-white">{r.value}</div>
                        <div className="text-[10px] text-[#666666] mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
