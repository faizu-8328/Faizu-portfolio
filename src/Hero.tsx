import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#5B3DF6]/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#7B5FFF]/15 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5B3DF6]/10 rounded-full blur-[150px]" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Floating geometric elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-20 w-20 h-20 border border-[#5B3DF6]/20 rounded-lg hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-32 left-20 w-16 h-16 border border-[#7B5FFF]/15 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#5B3DF6]/40 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ y: [15, -15, 15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#7B5FFF]/30 rounded-full hidden lg:block"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-sm text-[#A0A0A0] font-medium">Available for freelance projects</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-['Space_Grotesk'] text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="text-white">Graphic Designer</span>
          <br />
          <span className="text-gradient">&amp; Social Media</span>
          <br />
          <span className="text-white">Designer</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-[#A0A0A0] text-lg md:text-xl leading-relaxed mb-10"
        >
          Creating bold visual identities, social media experiences and marketing 
          designs that help brands stand out and convert audiences into customers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollTo('#portfolio')}
            className="px-8 py-4 bg-[#5B3DF6] hover:bg-[#4A2ED4] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#5B3DF6]/30 hover:-translate-y-0.5 text-base"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 glass glass-hover text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 text-base"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: '50+', label: 'Projects Completed' },
            { value: '30+', label: 'Happy Clients' },
            { value: '3+', label: 'Years Experience' },
            { value: '15+', label: 'Services Offered' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-[#666666] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2.5 bg-[#5B3DF6] rounded-full" />
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 py-4 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex items-center gap-8 mr-8">
              {['Social Media Design', 'Brand Identity', 'Logo Design', 'UI/UX Design', 'Advertisement Design', 'YouTube Design', 'Print Design', 'App Icons'].map((item, i) => (
                <span key={i} className="flex items-center gap-3 text-[#666666] text-sm font-medium tracking-wide uppercase">
                  <span className="w-1.5 h-1.5 bg-[#5B3DF6] rounded-full" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
