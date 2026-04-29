import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, CheckCircle2, Lock, Zap, Shield } from 'lucide-react'

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <BookOpen size={16} className="text-white" strokeWidth={2} />
            </div>
            <span className="font-serif text-lg font-semibold tracking-tight">
              CiteMind<span className="text-blue-600">AI</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white
                         px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-150
                         active:scale-95"
            >
              Get Started
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated background element */}
        <div
          className="absolute top-20 right-10 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200
                          rounded-full px-4 py-2 mb-8">
            <Zap size={14} className="text-blue-600" />
            <span className="text-xs font-medium text-blue-700">
              Evidence-based research, AI-powered
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold
                         leading-tight tracking-tight mb-6 text-gray-900">
            Research that{' '}
            <span className="relative inline-block">
              <span className="relative z-10">proves itself</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-blue-200 opacity-40 -z-0" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            CiteAI delivers rigorous, evidence-backed answers with structured citations.
            No hallucinations. No guessing. Just verifiable research.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/register"
              className="flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700
                         text-white px-8 py-4 rounded-xl text-base font-medium
                         transition-all duration-150 active:scale-95 shadow-sm hover:shadow-md"
            >
              Start Free
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
            <button
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center justify-center gap-2.5 border border-gray-300
                         hover:border-gray-400 text-gray-700 px-8 py-4 rounded-xl text-base font-medium
                         transition-all duration-150 bg-white hover:bg-gray-50"
            >
              See How It Works
            </button>
          </div>

          {/* Trust badge */}
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600 pt-8
                          border-t border-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-green-600" strokeWidth={2} />
              <span>Academic grade accuracy</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Lock size={16} className="text-green-600" strokeWidth={2} />
              <span>No data leakage</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Problem */}
            <div>
              <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
                The Research Problem
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight">
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
              <p className="text-sm font-medium text-green-600 mb-3 uppercase tracking-wide">
                The CiteAI Approach
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6 leading-tight">
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
                    <span className="text-green-500 mt-0.5 font-bold">✓</span>
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

      {/* FEATURES */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
              Built for Serious Research
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight">
              Everything you need for credible research
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              CiteAI combines advanced AI with academic standards to deliver research that holds up.
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

      {/* USE CASES */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-blue-600 mb-3 uppercase tracking-wide">
              Who Uses CiteAI
            </p>
            <h2 className="font-serif text-4xl font-semibold">
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
                className="p-6 rounded-xl border border-gray-200 bg-white"
              >
                <h3 className="font-serif text-lg font-semibold text-gray-900 mb-2">
                  {item.role}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* FINAL CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6 text-gray-900">
            Transform your research process
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join researchers, journalists, and academics using CiteAI to deliver credible, verifiable, world-class research.
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

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                  <BookOpen size={14} className="text-white" strokeWidth={2} />
                </div>
                <span className="font-serif font-semibold">CiteAI</span>
              </div>
              <p className="text-xs text-gray-500">Evidence-backed research AI.</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Features</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Blog</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3 text-gray-900">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Terms</a></li>
                <li><a href="#" className="hover:text-gray-900 transition">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8">
            <p className="text-center text-xs text-gray-500">
              © 2024 CiteAI. All rights reserved. Built with rigor.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}