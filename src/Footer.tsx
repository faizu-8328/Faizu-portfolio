export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5B3DF6] to-[#7B5FFF] flex items-center justify-center font-['Space_Grotesk'] font-bold text-white text-sm">
              MF
            </div>
            <div>
              <div className="font-['Space_Grotesk'] font-semibold text-white">Faizu Design Studio</div>
              <div className="text-xs text-[#666666]">
                <a href="mailto:fayaz628176@gmail.com" className="hover:text-[#5B3DF6] transition-colors">
                  fayaz628176@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { name: 'Instagram', icon: '📸' },
              { name: 'Behance', icon: '🎨' },
              { name: 'Dribbble', icon: '🏀' },
              { name: 'LinkedIn', icon: '💼' },
            ].map(social => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF6]/20 flex items-center justify-center transition-all duration-300"
              >
                <span className="text-sm">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Back to top + Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#666666]">© {new Date().getFullYear()} Muhammed Fayaz</span>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#5B3DF6] flex items-center justify-center transition-all duration-300 text-white"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
