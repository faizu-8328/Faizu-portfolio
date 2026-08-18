import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { projects, categories } from './portfolio';

// SVG-based mockup designs for additional portfolio items
function MockupDesign({ type, brand, color }: { type: string; brand: string; color: string }) {
  const designs: Record<string, React.ReactNode> = {
    'fashion-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3]" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border border-[#C9A84C]/20 rounded-full" />
        <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-3">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-xl font-bold text-center mb-2">WINTER</div>
        <div className="text-white font-['Space_Grotesk'] text-xl font-bold text-center mb-4">COLLECTION</div>
        <div className="flex gap-2 mb-3">
          {[1, 2, 3].map(n => <div key={n} className="w-12 h-16 rounded bg-white/10 border border-[#C9A84C]/20" />)}
        </div>
        <div className="text-[#C9A84C] text-[10px] tracking-widest uppercase">Swipe →</div>
        <div className="flex gap-1 mt-3">{[1, 2, 3, 4].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 1 ? 'bg-[#C9A84C]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'fashion-story': (
      <div className="w-full h-full bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 flex gap-1 px-2 pt-2">{[1, 2, 3].map(n => <div key={n} className={`flex-1 h-0.5 rounded ${n === 1 ? 'bg-white' : 'bg-white/20'}`} />)}</div>
        <div className="w-16 h-16 rounded-full border-2 border-[#C9A84C] mb-3 flex items-center justify-center text-2xl">👗</div>
        <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-2">SALE UP TO</div>
        <div className="text-[#C9A84C] font-['Space_Grotesk'] text-4xl font-bold mb-3">50% OFF</div>
        <div className="px-4 py-2 border border-[#C9A84C] text-[#C9A84C] text-xs tracking-widest uppercase rounded-sm">Shop Now</div>
      </div>
    ),
    'restaurant-menu': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0f0a] to-[#2a1a10] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#D4883A]/20 rounded-lg" />
        <div className="text-3xl mb-2">🍽️</div>
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-4">MENU</div>
        <div className="w-full max-w-[160px] space-y-2">
          {['Truffle Risotto', 'Wagyu Steak', 'Sea Bass'].map(item => (
            <div key={item} className="flex justify-between items-center border-b border-white/10 pb-1">
              <span className="text-white/70 text-[10px]">{item}</span>
              <span className="text-[#D4883A] text-[10px]">$$$</span>
            </div>
          ))}
        </div>
        <div className="mt-3 text-[8px] text-white/40">Chef's Special Selection</div>
      </div>
    ),
    'restaurant-story': (
      <div className="w-full h-full bg-gradient-to-b from-[#2a1a10] to-[#0a0500] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 flex gap-1 px-2 pt-2">{[1, 2].map(n => <div key={n} className={`flex-1 h-0.5 rounded ${n === 2 ? 'bg-white' : 'bg-white/20'}`} />)}</div>
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-1">TONIGHT'S</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-3">SPECIAL</div>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#D4883A]/30 to-transparent flex items-center justify-center text-4xl mb-3">🥘</div>
        <div className="text-white text-sm font-medium mb-1">Chef's Tasting Menu</div>
        <div className="text-[#D4883A] font-bold text-lg mb-3">$89 per person</div>
        <div className="px-4 py-2 bg-[#D4883A] text-white text-xs tracking-wider uppercase rounded-sm font-medium">Reserve Now</div>
      </div>
    ),
    'tech-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a0a2e] to-[#1a0a3e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 50%, #6C5CE7 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="text-[#6C5CE7] text-xs tracking-[0.3em] uppercase mb-3">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-2">KEY FEATURES</div>
        <div className="space-y-2 w-full max-w-[160px]">
          {['Neural Engine', 'Auto-Scale', 'Real-time ML'].map((f, i) => (
            <div key={f} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
              <div className="w-6 h-6 rounded bg-[#6C5CE7]/30 flex items-center justify-center text-[10px] text-white font-bold">{i + 1}</div>
              <span className="text-white text-[11px] font-medium">{f}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-4">{[1, 2, 3].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 2 ? 'bg-[#6C5CE7]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'tech-ad': (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0030] via-[#1a0a4e] to-[#0a0a2e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-8 right-8 w-20 h-20 border border-[#6C5CE7]/20 rounded-full animate-spin-slow" />
        <div className="text-[#6C5CE7] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-2xl font-bold text-center mb-1">AI-POWERED</div>
        <div className="text-[#6C5CE7] font-['Space_Grotesk'] text-2xl font-bold text-center mb-3">ANALYTICS</div>
        <div className="px-5 py-2 bg-gradient-to-r from-[#6C5CE7] to-[#a78bfa] text-white text-xs font-bold rounded-full tracking-wider uppercase">Start Free Trial</div>
        <div className="mt-4 text-white/40 text-[10px]">No credit card required</div>
      </div>
    ),
    'fitness-motivation': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0a0a] to-[#2a0505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#E74C3C]/10 rounded-full blur-[40px]" />
        <div className="text-5xl mb-3">💪</div>
        <div className="text-[#E74C3C] text-xs tracking-[0.3em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-xl font-bold text-center leading-tight mb-1">NO EXCUSES</div>
        <div className="text-white font-['Space_Grotesk'] text-xl font-bold text-center leading-tight mb-3">ONLY RESULTS</div>
        <div className="w-12 h-0.5 bg-[#E74C3C] mb-3" />
        <div className="text-white/50 text-xs text-center">"The body achieves what the mind believes."</div>
      </div>
    ),
    'fitness-offer': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a0a0a] to-[#1a0505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute -bottom-8 -right-8 w-40 h-40 border-4 border-[#E74C3C]/10 rounded-full" />
        <div className="text-[#E74C3C] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-2">MEMBERSHIP</div>
        <div className="bg-[#E74C3C] text-white font-['Space_Grotesk'] text-3xl font-bold px-4 py-1 rounded mb-2">50% OFF</div>
        <div className="text-white/60 text-xs mb-3">First 3 months • Limited slots</div>
        <div className="space-y-1 mb-3">
          {['Personal Training', 'Group Classes', 'Nutrition Plan'].map(f => (
            <div key={f} className="flex items-center gap-2 text-[11px] text-white/70"><span className="text-[#E74C3C]">✓</span>{f}</div>
          ))}
        </div>
        <div className="px-5 py-2 bg-[#E74C3C] text-white text-xs font-bold rounded tracking-wider uppercase">Join Now</div>
      </div>
    ),
    'fitness-story': (
      <div className="w-full h-full bg-gradient-to-b from-[#2a0505] to-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 flex gap-1 px-2 pt-2">{[1, 2, 3].map(n => <div key={n} className={`flex-1 h-0.5 rounded ${n === 1 ? 'bg-[#E74C3C]' : 'bg-white/20'}`} />)}</div>
        <div className="text-6xl mb-4">🏋️</div>
        <div className="text-[#E74C3C] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-3">FREE TRIAL CLASS</div>
        <div className="text-white/60 text-xs mb-4">This Saturday, 10 AM</div>
        <div className="px-6 py-2 border border-[#E74C3C] text-[#E74C3C] text-xs tracking-widest uppercase rounded-sm">Register</div>
      </div>
    ),
    'realestate-luxury': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#0f1f3d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#C9A84C]/10 rounded-lg" />
        <div className="text-4xl mb-3">🏢</div>
        <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-1">LUXURY PENTHOUSE</div>
        <div className="text-[#C9A84C] font-['Space_Grotesk'] text-2xl font-bold mb-3">$2.5M</div>
        <div className="flex gap-4 mb-3">
          {[{ v: '4', l: 'Beds' }, { v: '3', l: 'Baths' }, { v: '3200', l: 'Sqft' }].map(s => (
            <div key={s.l} className="text-center">
              <div className="text-white font-bold text-sm">{s.v}</div>
              <div className="text-white/40 text-[9px]">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="px-4 py-1.5 bg-[#C9A84C] text-white text-[10px] tracking-wider uppercase font-bold rounded-sm">Schedule Viewing</div>
      </div>
    ),
    'realestate-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#0a0f1e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(45deg, #C9A84C 25%, transparent 25%)', backgroundSize: '40px 40px' }} />
        <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-3">FEATURED PROPERTIES</div>
        <div className="space-y-2 w-full max-w-[160px]">
          {['Marina Bay Villa', 'Skyline Tower', 'Palm Residences'].map((p, i) => (
            <div key={p} className="bg-white/5 rounded-lg p-2.5 border border-[#C9A84C]/10">
              <div className="text-white text-[11px] font-medium">{p}</div>
              <div className="text-[#C9A84C] text-[10px]">From ${(i + 1) * 500}K</div>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-3">{[1, 2, 3].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 1 ? 'bg-[#C9A84C]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'realestate-ad': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a1628] to-[#071020] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A84C] to-transparent" />
        <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-1">DREAM HOME</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-2">AWAITS YOU</div>
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#C9A84C]/20 to-transparent flex items-center justify-center text-4xl mb-3">🏡</div>
        <div className="text-white/50 text-xs text-center mb-3">Free consultation for first-time buyers</div>
        <div className="px-5 py-2 bg-gradient-to-r from-[#C9A84C] to-[#E8D5A3] text-[#0a1628] text-xs font-bold rounded tracking-wider uppercase">Get Started</div>
      </div>
    ),
    'agency-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0030] to-[#1a0a4e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#5B3DF6] text-xs tracking-[0.3em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-4">GROWTH METRICS</div>
        <div className="w-full max-w-[160px] space-y-2">
          {[{ m: 'Engagement', v: '+340%' }, { m: 'Revenue', v: '+280%' }, { m: 'Leads', v: '+520%' }].map(s => (
            <div key={s.m} className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2">
              <span className="text-white/70 text-[11px]">{s.m}</span>
              <span className="text-[#5B3DF6] text-[11px] font-bold">{s.v}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-4">{[1, 2, 3, 4].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 2 ? 'bg-[#5B3DF6]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'agency-ad': (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0030] to-[#0a0020] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#5B3DF6]/10 rounded-full blur-[30px]" />
        <div className="text-[#5B3DF6] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-xl font-bold text-center mb-1">SCALE YOUR</div>
        <div className="text-[#5B3DF6] font-['Space_Grotesk'] text-xl font-bold mb-3">BUSINESS</div>
        <div className="text-white/50 text-xs text-center mb-4 max-w-[160px]">Data-driven marketing strategies that deliver results</div>
        <div className="px-5 py-2 bg-[#5B3DF6] text-white text-xs font-bold rounded-full tracking-wider uppercase">Book a Call</div>
      </div>
    ),
    'agency-story': (
      <div className="w-full h-full bg-gradient-to-b from-[#1a0a4e] to-[#0a0020] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 flex gap-1 px-2 pt-2">{[1, 2].map(n => <div key={n} className={`flex-1 h-0.5 rounded ${n === 1 ? 'bg-[#5B3DF6]' : 'bg-white/20'}`} />)}</div>
        <div className="text-5xl mb-3">📈</div>
        <div className="text-[#5B3DF6] text-xs tracking-[0.3em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-1">CLIENT RESULTS</div>
        <div className="text-[#5B3DF6] font-['Space_Grotesk'] text-3xl font-bold mb-2">+500%</div>
        <div className="text-white/50 text-xs">Average ROI increase</div>
      </div>
    ),
    'ecommerce-discount': (
      <div className="w-full h-full bg-gradient-to-br from-[#001220] to-[#002030] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-[#00B4D8]/10 rounded-full" />
        <div className="text-4xl mb-2">🎧</div>
        <div className="text-[#00B4D8] text-xs tracking-[0.3em] uppercase mb-1">SONIQ AUDIO</div>
        <div className="bg-[#00B4D8] text-white font-['Space_Grotesk'] text-2xl font-bold px-3 py-1 rounded mb-2">30% OFF</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold mb-1">LIMITED TIME</div>
        <div className="text-white/50 text-xs mb-3">Code: SOUND30</div>
        <div className="px-5 py-2 border border-[#00B4D8] text-[#00B4D8] text-xs tracking-wider uppercase font-bold rounded-sm">Shop Now</div>
      </div>
    ),
    'ecommerce-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#001220] to-[#001a2e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#00B4D8] text-xs tracking-[0.3em] uppercase mb-2">SONIQ AUDIO</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-4">FEATURES</div>
        <div className="space-y-2 w-full max-w-[160px]">
          {[{ i: '🔊', f: '40mm Drivers' }, { i: '🔋', f: '48H Battery' }, { i: '📱', f: 'Smart Connect' }].map(f => (
            <div key={f.f} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-[#00B4D8]/10">
              <span>{f.i}</span>
              <span className="text-white text-[11px] font-medium">{f.f}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-4">{[1, 2, 3].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 2 ? 'bg-[#00B4D8]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'ecommerce-story': (
      <div className="w-full h-full bg-gradient-to-b from-[#002030] to-[#001020] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-0.5 flex gap-1 px-2 pt-2">{[1, 2, 3].map(n => <div key={n} className={`flex-1 h-0.5 rounded ${n === 3 ? 'bg-[#00B4D8]' : 'bg-white/20'}`} />)}</div>
        <div className="text-5xl mb-3">🎧</div>
        <div className="text-[#00B4D8] text-xs tracking-[0.3em] uppercase mb-2">SONIQ AUDIO</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-1">NEW DROP</div>
        <div className="text-white/60 text-xs mb-4">Available now worldwide</div>
        <div className="px-6 py-2 bg-[#00B4D8] text-white text-xs tracking-widest uppercase font-bold rounded-sm">Pre-order</div>
      </div>
    ),
    'youtube-banner': (
      <div className="w-full h-full bg-gradient-to-r from-[#1a0000] via-[#2a0a0a] to-[#1a0000] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-600 to-transparent" />
        <div className="text-red-500 text-xs tracking-[0.3em] uppercase mb-1">Creative Pro</div>
        <div className="text-white font-['Space_Grotesk'] text-2xl font-bold text-center">CHANNEL BANNER</div>
        <div className="text-white/40 text-xs mt-2">Design • Create • Inspire</div>
        <div className="flex gap-3 mt-4">
          {['🎨', '✏️', '📸'].map(e => (
            <div key={e} className="w-8 h-8 rounded bg-red-500/10 flex items-center justify-center text-lg">{e}</div>
          ))}
        </div>
      </div>
    ),
    'youtube-promo': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0000] to-[#0a0a0a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded">NEW VIDEO</div>
        <div className="w-16 h-12 rounded-lg bg-red-600/20 flex items-center justify-center text-2xl mb-3">▶️</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold text-center mb-1">How I Design</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold text-center mb-2">Premium Logos</div>
        <div className="text-red-400 text-xs mb-3">Watch now on YouTube</div>
        <div className="flex items-center gap-2 text-white/40 text-[10px]">
          <span>12K views</span><span>•</span><span>2 days ago</span>
        </div>
      </div>
    ),
    'youtube-social': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a0000] to-[#1a0505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-2">Announcement</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-1">🎉 100K</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-1">SUBSCRIBERS!</div>
        <div className="text-red-400 text-xs text-center mb-3">Thank you for the love</div>
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600/30 to-transparent flex items-center justify-center text-3xl">🏆</div>
        <div className="mt-3 px-4 py-1.5 border border-red-500/30 text-red-400 text-[10px] tracking-widest uppercase rounded-sm">Subscribe</div>
      </div>
    ),
    'brand-logo-variations': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a1410] to-[#0a0805] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-3">AURORA STUDIO</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold mb-4">Logo Variations</div>
        <div className="grid grid-cols-2 gap-3">
          {[{ bg: '#D4883A', fg: 'white' }, { bg: 'white', fg: '#D4883A' }, { bg: '#1a1410', fg: '#D4883A' }, { bg: '#0a0805', fg: 'white' }].map((v, i) => (
            <div key={i} className="w-16 h-16 rounded-lg flex items-center justify-center border border-white/10" style={{ backgroundColor: v.bg }}>
              <span className="font-['Space_Grotesk'] font-bold text-sm" style={{ color: v.fg }}>AS</span>
            </div>
          ))}
        </div>
      </div>
    ),
    'brand-colors': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a1410] to-[#0a0805] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-2">AURORA STUDIO</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold mb-4">Color Palette</div>
        <div className="space-y-2 w-full max-w-[160px]">
          {[{ c: '#D4883A', n: 'Primary Gold' }, { c: '#1a1410', n: 'Dark Base' }, { c: '#F5E6D3', n: 'Warm Light' }, { c: '#2A2018', n: 'Deep Brown' }].map(p => (
            <div key={p.n} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg border border-white/10" style={{ backgroundColor: p.c }} />
              <div>
                <div className="text-white text-[10px] font-medium">{p.n}</div>
                <div className="text-white/40 text-[9px]">{p.c}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    'brand-businesscard': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a1410] to-[#0a0805] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-3">AURORA STUDIO</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold mb-4">Business Card</div>
        <div className="w-44 h-24 rounded-lg bg-gradient-to-br from-[#1a1410] to-[#2A2018] border border-[#D4883A]/20 p-3 flex flex-col justify-between shadow-xl transform -rotate-2">
          <div className="font-['Space_Grotesk'] text-[#D4883A] font-bold text-sm">AS</div>
          <div>
            <div className="text-white text-[9px] font-medium">Aurora Studio</div>
            <div className="text-white/40 text-[7px]">Creative Design Agency</div>
          </div>
        </div>
        <div className="w-44 h-24 rounded-lg bg-[#D4883A] p-3 flex items-center justify-center shadow-xl transform rotate-2 -mt-4 ml-8">
          <span className="font-['Space_Grotesk'] text-white font-bold text-2xl">AS</span>
        </div>
      </div>
    ),
    'personal-quote': (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0030] to-[#1a0a4e] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="text-[#5B3DF6] text-5xl mb-3">"</div>
        <div className="text-white font-['Space_Grotesk'] text-base font-bold text-center leading-tight mb-3 max-w-[180px]">
          Design is not just what it looks like. Design is how it works.
        </div>
        <div className="w-8 h-0.5 bg-[#5B3DF6] mb-3" />
        <div className="text-[#5B3DF6] text-xs font-medium">— Steve Jobs</div>
      </div>
    ),
    'personal-service': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a0020] to-[#15003a] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-4 right-4 w-12 h-12 border border-[#5B3DF6]/20 rounded-full" />
        <div className="text-[#5B3DF6] text-xs tracking-[0.3em] uppercase mb-2">Services</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-4">WHAT I OFFER</div>
        <div className="space-y-2 w-full max-w-[160px]">
          {['Brand Strategy', 'Visual Identity', 'Social Media', 'Web Design'].map(s => (
            <div key={s} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2 border border-[#5B3DF6]/10">
              <div className="w-1.5 h-1.5 bg-[#5B3DF6] rounded-full" />
              <span className="text-white text-[11px] font-medium">{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    'personal-carousel': (
      <div className="w-full h-full bg-gradient-to-br from-[#0f0030] to-[#0a0020] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, #5B3DF6 1px, transparent 1px)', backgroundSize: '15px 15px' }} />
        <div className="text-[#5B3DF6] text-xs tracking-[0.3em] uppercase mb-2">Personal Brand</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold text-center mb-3">MY JOURNEY</div>
        <div className="flex flex-col items-center gap-2 w-full max-w-[140px]">
          {['2021 • Started', '2022 • 20 Clients', '2023 • Studio Launch', '2024 • 50+ Projects'].map(y => (
            <div key={y} className="flex items-center gap-2 text-[10px]">
              <div className="w-2 h-2 rounded-full bg-[#5B3DF6]" />
              <span className="text-white/70">{y}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-1 mt-4">{[1, 2, 3].map(n => <div key={n} className={`w-1.5 h-1.5 rounded-full ${n === 3 ? 'bg-[#5B3DF6]' : 'bg-white/20'}`} />)}</div>
      </div>
    ),
    'restaurant-offer': (
      <div className="w-full h-full bg-gradient-to-br from-[#1a0f0a] to-[#0a0500] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4883A]/10 rounded-full blur-[30px]" />
        <div className="text-[#D4883A] text-xs tracking-[0.3em] uppercase mb-1">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-1">WEEKEND</div>
        <div className="text-white font-['Space_Grotesk'] text-lg font-bold mb-2">BRUNCH</div>
        <div className="bg-[#D4883A] text-white font-['Space_Grotesk'] text-xl font-bold px-3 py-1 rounded mb-2">$29.99</div>
        <div className="text-white/50 text-xs mb-3">All-you-can-eat buffet</div>
        <div className="px-4 py-1.5 border border-[#D4883A] text-[#D4883A] text-[10px] tracking-wider uppercase font-bold rounded-sm">Reserve Table</div>
      </div>
    ),
    'fashion-ad': (
      <div className="w-full h-full bg-gradient-to-br from-[#0a0a1e] to-[#000000] flex flex-col items-center justify-center p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#C9A84C]/5 to-transparent" />
        <div className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-2">{brand}</div>
        <div className="text-white font-['Space_Grotesk'] text-2xl font-bold text-center mb-1">EXCLUSIVE</div>
        <div className="text-[#C9A84C] font-['Space_Grotesk'] text-2xl font-bold mb-3">DROP</div>
        <div className="w-20 h-20 rounded-full border border-[#C9A84C]/30 flex items-center justify-center text-3xl mb-3">👜</div>
        <div className="text-white/40 text-xs mb-3">Limited Edition • 100 Pieces Only</div>
        <div className="px-5 py-2 bg-[#C9A84C] text-black text-xs font-bold tracking-wider uppercase rounded-sm">Pre-order Now</div>
      </div>
    ),
  };

  return designs[type] || (
    <div className="w-full h-full bg-gradient-to-br from-[#1A1A1A] to-[#252525] flex items-center justify-center p-6">
      <div className="text-center">
        <div className="text-3xl mb-2" style={{ color }}>{brand.charAt(0)}</div>
        <div className="text-white/60 text-xs">{brand}</div>
      </div>
    </div>
  );
}

// Extended projects with CSS mockups
const extendedProjects = [
  // Fashion additional
  { id: 11, title: 'Instagram Carousel Design', brand: 'NOIR ELEGANCE', category: ['Social Media'], mockupType: 'fashion-carousel', tags: ['Fashion', 'Carousel'], color: '#C9A84C' },
  { id: 12, title: 'Story Design', brand: 'NOIR ELEGANCE', category: ['Social Media'], mockupType: 'fashion-story', tags: ['Fashion', 'Story'], color: '#C9A84C' },
  { id: 13, title: 'Product Advertisement', brand: 'NOIR ELEGANCE', category: ['Advertising'], mockupType: 'fashion-ad', tags: ['Fashion', 'Ad'], color: '#C9A84C' },
  // Restaurant additional
  { id: 14, title: 'Restaurant Offer Poster', brand: 'SAFFRON BISTRO', category: ['Advertising', 'Print Design'], mockupType: 'restaurant-offer', tags: ['Restaurant', 'Offer'], color: '#D4883A' },
  { id: 15, title: 'Menu Design', brand: 'SAFFRON BISTRO', category: ['Print Design'], mockupType: 'restaurant-menu', tags: ['Restaurant', 'Menu'], color: '#D4883A' },
  { id: 16, title: 'Instagram Story', brand: 'SAFFRON BISTRO', category: ['Social Media'], mockupType: 'restaurant-story', tags: ['Restaurant', 'Story'], color: '#D4883A' },
  // Tech additional
  { id: 17, title: 'Feature Carousel', brand: 'NEXUS AI', category: ['Social Media'], mockupType: 'tech-carousel', tags: ['Tech', 'Carousel'], color: '#6C5CE7' },
  { id: 18, title: 'Promotional Ad', brand: 'NEXUS AI', category: ['Advertising'], mockupType: 'tech-ad', tags: ['Tech', 'Ad'], color: '#6C5CE7' },
  // Fitness additional
  { id: 19, title: 'Motivation Post', brand: 'APEX FITNESS', category: ['Social Media'], mockupType: 'fitness-motivation', tags: ['Fitness', 'Motivation'], color: '#E74C3C' },
  { id: 20, title: 'Membership Offer', brand: 'APEX FITNESS', category: ['Advertising'], mockupType: 'fitness-offer', tags: ['Fitness', 'Offer'], color: '#E74C3C' },
  { id: 21, title: 'Instagram Story', brand: 'APEX FITNESS', category: ['Social Media'], mockupType: 'fitness-story', tags: ['Fitness', 'Story'], color: '#E74C3C' },
  // Real Estate additional
  { id: 22, title: 'Luxury Apartment Post', brand: 'SKYLINE PROPERTIES', category: ['Social Media'], mockupType: 'realestate-luxury', tags: ['Real Estate', 'Luxury'], color: '#C9A84C' },
  { id: 23, title: 'Property Carousel', brand: 'SKYLINE PROPERTIES', category: ['Social Media'], mockupType: 'realestate-carousel', tags: ['Real Estate', 'Carousel'], color: '#C9A84C' },
  { id: 24, title: 'Lead-Gen Social Ad', brand: 'SKYLINE PROPERTIES', category: ['Advertising'], mockupType: 'realestate-ad', tags: ['Real Estate', 'Lead Gen'], color: '#C9A84C' },
  // Agency additional
  { id: 25, title: 'Statistics Carousel', brand: 'PULSE DIGITAL', category: ['Social Media'], mockupType: 'agency-carousel', tags: ['Agency', 'Carousel'], color: '#5B3DF6' },
  { id: 26, title: 'Client Acquisition Ad', brand: 'PULSE DIGITAL', category: ['Advertising'], mockupType: 'agency-ad', tags: ['Agency', 'Ad'], color: '#5B3DF6' },
  { id: 27, title: 'Instagram Story', brand: 'PULSE DIGITAL', category: ['Social Media'], mockupType: 'agency-story', tags: ['Agency', 'Story'], color: '#5B3DF6' },
  // Ecommerce additional
  { id: 28, title: 'Discount Advertisement', brand: 'SONIQ AUDIO', category: ['Advertising'], mockupType: 'ecommerce-discount', tags: ['E-commerce', 'Discount'], color: '#00B4D8' },
  { id: 29, title: 'Product Feature Carousel', brand: 'SONIQ AUDIO', category: ['Social Media'], mockupType: 'ecommerce-carousel', tags: ['E-commerce', 'Carousel'], color: '#00B4D8' },
  { id: 30, title: 'Promotional Story', brand: 'SONIQ AUDIO', category: ['Social Media'], mockupType: 'ecommerce-story', tags: ['E-commerce', 'Story'], color: '#00B4D8' },
  // YouTube additional
  { id: 31, title: 'Channel Banner', brand: 'Creative Pro', category: ['YouTube'], mockupType: 'youtube-banner', tags: ['YouTube', 'Banner'], color: '#FF0000' },
  { id: 32, title: 'Video Promotion Post', brand: 'Creative Pro', category: ['YouTube', 'Social Media'], mockupType: 'youtube-promo', tags: ['YouTube', 'Promo'], color: '#FF0000' },
  { id: 33, title: 'Social Announcement', brand: 'Creative Pro', category: ['YouTube', 'Social Media'], mockupType: 'youtube-social', tags: ['YouTube', 'Social'], color: '#FF0000' },
  // Brand Identity additional
  { id: 34, title: 'Logo Variations', brand: 'AURORA STUDIO', category: ['Logo Design', 'Branding'], mockupType: 'brand-logo-variations', tags: ['Logo', 'Branding'], color: '#D4883A' },
  { id: 35, title: 'Color Palette', brand: 'AURORA STUDIO', category: ['Branding'], mockupType: 'brand-colors', tags: ['Branding', 'Colors'], color: '#D4883A' },
  { id: 36, title: 'Business Card Design', brand: 'AURORA STUDIO', category: ['Branding', 'Print Design'], mockupType: 'brand-businesscard', tags: ['Branding', 'Print'], color: '#D4883A' },
  // Personal Brand additional
  { id: 37, title: 'Professional Quote Post', brand: 'Personal Brand', category: ['Social Media'], mockupType: 'personal-quote', tags: ['Personal', 'Quote'], color: '#5B3DF6' },
  { id: 38, title: 'Service Promotion', brand: 'Personal Brand', category: ['Social Media', 'Advertising'], mockupType: 'personal-service', tags: ['Personal', 'Service'], color: '#5B3DF6' },
  { id: 39, title: 'Instagram Carousel', brand: 'Personal Brand', category: ['Social Media'], mockupType: 'personal-carousel', tags: ['Personal', 'Carousel'], color: '#5B3DF6' },
];

type AllProject = (typeof projects[0]) | (typeof extendedProjects[0]);

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<AllProject | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const allProjects: AllProject[] = [...projects, ...extendedProjects];

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(p => p.category.includes(activeFilter));

  return (
    <section id="portfolio" className="py-24 md:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-[#5B3DF6] font-semibold text-sm uppercase tracking-widest mb-4">Portfolio</div>
          <h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#A0A0A0] text-lg">
            A curated selection of projects across social media, branding, advertising, and more.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#5B3DF6] text-white shadow-lg shadow-[#5B3DF6]/25'
                  : 'bg-white/5 text-[#A0A0A0] hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.4) }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#1A1A1A] border border-white/5 hover:border-[#5B3DF6]/30 transition-all duration-500 card-glow">
                  {/* Image / Mockup */}
                  <div className="aspect-square relative overflow-hidden">
                    {'image' in project && project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    ) : (
                      <div className="w-full h-full group-hover:scale-105 transition-transform duration-700">
                        {'mockupType' in project && (
                          <MockupDesign
                            type={project.mockupType}
                            brand={project.brand}
                            color={project.color}
                          />
                        )}
                      </div>
                    )}
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <div>
                        <div className="text-white font-semibold text-sm">{project.title}</div>
                        <div className="text-white/60 text-xs">{project.brand}</div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-['Space_Grotesk'] text-sm font-semibold text-white mb-1 group-hover:text-[#5B3DF6] transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#666666]">{project.brand}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-white/5 text-[#A0A0A0] rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#1A1A1A] rounded-2xl border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-square relative overflow-hidden rounded-t-2xl">
                {'image' in selectedProject && selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                ) : (
                  'mockupType' in selectedProject && (
                    <MockupDesign
                      type={selectedProject.mockupType}
                      brand={selectedProject.brand}
                      color={selectedProject.color}
                    />
                  )
                )}
              </div>
              <div className="p-6">
                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-white mb-1">{selectedProject.title}</h3>
                <p className="text-[#5B3DF6] font-medium text-sm mb-3">{selectedProject.brand}</p>
                {'description' in selectedProject && (
                  <p className="text-[#A0A0A0] text-sm leading-relaxed mb-4">{selectedProject.description}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="text-xs px-3 py-1 bg-white/5 text-[#A0A0A0] rounded-full border border-white/10">{tag}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 bg-[#5B3DF6] text-white text-sm font-semibold rounded-xl hover:bg-[#4A2ED4] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
