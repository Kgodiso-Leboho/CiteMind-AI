import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles, BookOpen, CheckCircle2, Lock, Zap, Shield, Search, User, LogIn } from 'lucide-react'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans selection:bg-blue-100">
      
      {/* DOT GRID BACKGROUND */}
      <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 0)', backgroundSize: '24px 24px' }}>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
              <BookOpen size={14} className="text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight text-blue-600">CiteMindAI</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-slate-600">
            <a href="#" className="text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Features</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Testimonial</a>
            <a href="#" className="hover:text-blue-700 transition-colors">Blogs</a>
            <a href="#" className="hover:text-blue-700 transition-colors">About Us</a>
          </div>

          <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-900/10">
            Start for free <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8 shadow-sm">
            <Sparkles size={12} className="text-blue-600" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-800">
              Welcome To CiteMind AI
            </span>
          </div>

          <h4 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8 text-blue-900">
            Verify Every Claim. <br />
            <span className="text-slate-300">Understand Every Data Point.</span>
          </h4>

          <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto mb-10 leading-relaxed font-light">
            CiteMind AI accelerates your academic journey with advanced verification, 
            synthesis, and structured citations from trusted sources.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
            <Link to="/register" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-transform active:scale-95 shadow-lg shadow-blue-600/20">
              Start for free <ArrowUpRight size={18} />
            </Link>
            <button className="text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors">
              Explore Features
            </button>
          </div>

          {/* Integration Strip */}
          <div className="mb-12">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">Integrated with:</p>
            <div className="flex flex-wrap justify-center gap-6 items-center opacity-70 grayscale">
              <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:grayscale-0 transition-all cursor-pointer">
                <span className="font-serif font-black text-xs italic">nature</span>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:grayscale-0 transition-all cursor-pointer">
                 <span className="font-bold text-xs">PubMed</span>
              </div>
              <div className="p-3 bg-white border border-slate-100 rounded-xl shadow-sm hover:grayscale-0 transition-all cursor-pointer px-4">
                <span className="font-serif font-bold text-xs italic">arXiv</span>
              </div>
            </div>
          </div>

          {/* Floating Cards (Tilted Icons) - Updated to blue theme */}
          {/* Left Tilted Card */}
          <div 
            className="hidden lg:block absolute left-[8%] top-[45%] w-64 h-80 bg-white border border-slate-100 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden transition-transform duration-700 hover:scale-105"
            style={{ transform: `rotate(-12deg) translateY(${scrollY * -0.05}px)` }}
          >
            <div className="h-2/3 bg-blue-50 flex items-center justify-center grayscale">
               <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400" alt="Library" className="object-cover h-full w-full" />
            </div>
            <div className="p-5 text-left">
              <p className="text-[11px] font-bold text-blue-700 leading-tight">1. Structured Lit Reviews: Curated bibliographies.</p>
            </div>
          </div>

          {/* Right Tilted Card - Blue themed */}
          <div 
            className="hidden lg:block absolute right-[8%] top-[35%] w-72 h-96 bg-blue-700 rounded-[2.5rem] shadow-2xl overflow-hidden transition-transform duration-700 hover:scale-105"
            style={{ transform: `rotate(8deg) translateY(${scrollY * -0.08}px)` }}
          >
            <div className="h-3/4 p-4">
               <div className="w-full h-full bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md flex flex-col p-4">
                  <div className="w-8 h-1.5 bg-white/20 rounded-full mb-2" />
                  <div className="w-12 h-1.5 bg-white/20 rounded-full mb-6" />
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-full bg-white/5 rounded-full" />
                    <div className="h-2 w-3/4 bg-white/5 rounded-full" />
                  </div>
               </div>
            </div>
            <div className="p-6 text-left text-white">
              <p className="text-[12px] font-medium leading-relaxed opacity-90">2. Verifiable Insights: Trace every fact back to source.</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex flex-col items-center gap-2 mt-20 opacity-40">
           <div className="w-5 h-8 border-2 border-blue-600 rounded-full flex justify-center p-1">
              <div className="w-1 h-1.5 bg-blue-600 rounded-full animate-bounce" />
           </div>
           <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Scroll Down</span>
        </div>
      </section>

      {/* REMAINDER OF SECTIONS */}
      <section className="py-24 px-6 bg-white relative z-10 border-t border-slate-50">
          <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-10 opacity-20 grayscale grayscale-[50%] contrast-125">
              <span className="font-black italic text-xl">SYNKRON</span>
              <span className="font-black italic text-xl">DATAMATH</span>
              <span className="font-black italic text-xl">BIOME DATA</span>
              <span className="font-black italic text-xl">LOGOS</span>
              <span className="font-black italic text-xl">AETHER PULSE</span>
          </div>
      </section>

      {/* PROBLEM & SOLUTION - Updated to blue */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Problem */}
            <div>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                The Research Problem
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight text-slate-900">
                Standard AI assistants sound confident. But where's the proof?
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  'No source attribution',
                  'Unverifiable claims',
                  'Mixed accuracy levels',
                  'No way to audit reasoning',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-red-500 mt-0.5 font-bold">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">
                When research matters—whether for papers, reports, or critical decisions—you need evidence, not hallucinations.
              </p>
            </div>

            {/* Right: Solution */}
            <div>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                The CiteMindAI Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight text-slate-900">
                Every answer comes with proof.
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  'Structured citations',
                  'Evidence-backed assertions',
                  'Academic-grade rigor',
                  'Transparent sources',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <span className="text-blue-500 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 text-sm">
                Research you can trust. Answers you can defend. Built for academics, journalists, and anyone who needs verifiable intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES - Updated to blue */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
              Built for Serious Research
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight text-slate-900">
              Everything you need for credible research
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CiteMindAI combines advanced AI with academic standards to deliver research that holds up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Evidence-backed responses',
                desc: 'Every claim supported by structured citations and source attribution.',
              },
              {
                icon: BookOpen,
                title: 'Academic rigor',
                desc: 'Built with the research standards of peer-reviewed journals in mind.',
              },
              {
                icon: Zap,
                title: 'Fast & precise',
                desc: 'Get rigorous answers instantly—no waiting for manual research.',
              },
              {
                icon: Lock,
                title: 'Privacy by design',
                desc: 'Your research stays yours. No third-party data sharing.',
              },
              {
                icon: CheckCircle2,
                title: 'Verifiable',
                desc: 'Trace every claim back to its source. Review, audit, defend.',
              },
              {
                icon: BookOpen,
                title: 'Knowledge at scale',
                desc: 'Synthesize decades of research in seconds across disciplines.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-2xl border border-gray-200 bg-white
                           hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <feature.icon
                  size={28}
                  className="text-blue-600 mb-4 group-hover:scale-110 transition-transform"
                  strokeWidth={1.5}
                />
                <h3 className="font-serif text-lg font-semibold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES - Updated to blue */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
              Who Uses CiteMindAI
            </p>
            <h2 className="font-serif text-4xl font-semibold text-slate-900">
              Research, reimagined
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: 'Researchers & Academics',
                desc: 'Build literature reviews with full citations. Defend your findings with traceable evidence.',
              },
              {
                role: 'Journalists & Writers',
                desc: 'Fact-check claims instantly. Source your stories with confidence. Never misquote again.',
              },
              {
                role: 'Business Analysts',
                desc: 'Synthesize market trends, competitor intelligence, and research reports at scale.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 bg-white hover:border-blue-200 hover:shadow-md transition-all"
              >
                <h3 className="font-serif text-lg font-semibold text-blue-700 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - Updated to blue */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-blue-900">
            Transform your research process
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join researchers, journalists, and academics using CiteMindAI to deliver credible, verifiable, world-class research.
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-700
                       text-white px-8 py-4 rounded-xl text-base font-medium
                       transition-all duration-150 active:scale-95 shadow-sm hover:shadow-lg"
          >
            Create Your Free Account
            <ArrowRight size={16} strokeWidth={2} />
          </Link>
          <p className="text-xs text-gray-500 mt-4">
            No credit card required. Full Pro access for 14 days.
          </p>
        </div>
      </section>

      {/* FOOTER - Updated to blue */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen size={14} className="text-white" strokeWidth={2} />
                </div>
                <span className="font-serif font-semibold text-blue-700">CiteMindAI</span>
              </div>
              <p className="text-xs text-gray-500">Evidence-backed research AI.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">Features</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Blog</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-blue-600 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-xs text-gray-500">
              © 2024 CiteMindAI. All rights reserved. Built with rigor.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}