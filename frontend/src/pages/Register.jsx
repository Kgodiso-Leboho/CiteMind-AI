import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, BookOpen, Eye, EyeOff, CheckCircle2, Circle } from "lucide-react";

function PasswordStrength({ password }) {
  const checks = [
    { label: "At least 8 characters", pass: password.length >= 8 },
    { label: "One uppercase letter", pass: /[A-Z]/.test(password) },
    { label: "One number", pass: /[0-9]/.test(password) },
  ];
  const strength = checks.filter((c) => c.pass).length;
  const bars = [
    { min: 1, color: "bg-red-400" },
    { min: 2, color: "bg-amber-400" },
    { min: 3, color: "bg-green-500" },
  ];

  if (!password) return null;

  return (
    <div className="mt-2.5 space-y-2">
      <div className="flex gap-1.5">
        {bars.map((bar, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all duration-300
              ${strength > i ? bar.color : "bg-gray-200"}`}
          />
        ))}
      </div>
      <div className="space-y-1">
        {checks.map(({ label, pass }) => (
          <div key={label} className="flex items-center gap-1.5">
            {pass
              ? <CheckCircle2 size={12} className="text-green-500 flex-shrink-0" strokeWidth={2.5} />
              : <Circle size={12} className="text-gray-300 flex-shrink-0" strokeWidth={2} />
            }
            <span className={`text-xs transition-colors ${pass ? "text-green-600" : "text-gray-400"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (error) setError("");
  };

  const passwordStrength = [
    form.password.length >= 8,
    /[A-Z]/.test(form.password),
    /[0-9]/.test(form.password),
  ].filter(Boolean).length;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Please enter your full name.");
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return setError("Please enter a valid email address.");
    if (passwordStrength < 3)
      return setError("Please choose a stronger password.");
    if (!agreed)
      return setError("Please accept the Terms and Privacy Policy to continue.");

    setIsLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1400));
      navigate("/chat");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0f1b2d] flex-col justify-between p-14 relative overflow-hidden">

        <div className="absolute inset-0 pointer-events-none select-none">
          <div className="absolute top-0 right-0 w-72 h-72 border border-white/5 rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute top-0 right-0 w-48 h-48 border border-white/5 rounded-full translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-96 h-96 border border-white/5 rounded-full -translate-x-1/3 translate-y-1/3" />
          <div className="absolute bottom-24 left-14 w-2 h-24 bg-blue-500/30 rounded-full" />
          <div className="absolute bottom-24 left-20 w-2 h-16 bg-blue-500/20 rounded-full" />
          <div className="absolute bottom-24 left-26 w-2 h-10 bg-blue-500/10 rounded-full" />
        </div>

        {/* Logo */}
        <div className="relative z-10">
          <Link to="/" className="flex items-center gap-3 w-fit">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen size={17} className="text-white" strokeWidth={2} />
            </div>
            <span className="font-serif text-xl font-semibold text-white tracking-tight">
              CiteMind<span className="text-blue-400">AI</span>
            </span>
          </Link>
        </div>

        {/* Centre copy */}
        <div className="relative z-10">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mb-6">
            Join CiteMindAI
          </p>
          <h2 className="font-serif text-5xl font-semibold text-white leading-[1.15] mb-6">
            Research that<br />
            <em className="not-italic text-blue-400">earns trust.</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            Join thousands of researchers, journalists, and analysts who rely on CiteMindAI for evidence-backed answers.
          </p>

          {/* Social proof avatars */}
          <div className="flex items-center gap-3 mt-8">
            <div className="flex -space-x-2">
              {["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"].map((color, i) => (
                <div
                  key={i}
                  style={{ background: color }}
                  className="w-8 h-8 rounded-full border-2 border-[#0f1b2d] flex items-center justify-center"
                >
                  <span className="text-white text-[10px] font-semibold select-none">
                    {["R", "A", "M", "J"][i]}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-white/50 text-xs">
              <span className="text-white font-medium">4,200+</span> researchers joined this month
            </p>
          </div>
        </div>

        {/* Bottom stat row */}
        <div className="relative z-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
          {[
            { value: "Free", label: "To get started" },
            { value: "14d", label: "Pro trial included" },
            { value: "No CC", label: "Card required" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-2xl font-semibold text-white mb-0.5">{value}</p>
              <p className="text-white/40 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 bg-gray-50">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen size={15} className="text-white" strokeWidth={2} />
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">
              CiteMind<span className="text-blue-600">AI</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h1 className="font-serif text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
              Create your account
            </h1>
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 px-4 py-3 bg-red-50 border border-red-200 rounded-xl
                            text-sm text-red-700 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-4">

            {/* Full name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                Full name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={set("name")}
                placeholder="Dr. Jane Smith"
                autoComplete="name"
                autoFocus
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl
                           text-sm text-gray-900 placeholder-gray-300
                           focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                           transition-all duration-150"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={set("email")}
                placeholder="you@university.edu"
                autoComplete="email"
                className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl
                           text-sm text-gray-900 placeholder-gray-300
                           focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                           transition-all duration-150"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={set("password")}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  className="w-full px-4 py-3.5 pr-12 bg-white border border-gray-200 rounded-xl
                             text-sm text-gray-900 placeholder-gray-300
                             focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                             transition-all duration-150"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400
                             hover:text-gray-600 transition-colors p-0.5"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword
                    ? <EyeOff size={16} strokeWidth={1.8} />
                    : <Eye size={16} strokeWidth={1.8} />
                  }
                </button>
              </div>
              <PasswordStrength password={form.password} />
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer pt-1 group">
              <div className="relative flex-shrink-0 mt-0.5">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="sr-only"
                />
                <div
                  className={`w-4.5 h-4.5 w-[18px] h-[18px] rounded flex items-center justify-center border transition-all duration-150
                    ${agreed
                      ? "bg-blue-600 border-blue-600"
                      : "bg-white border-gray-300 group-hover:border-blue-400"
                    }`}
                >
                  {agreed && (
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              </div>
              <span className="text-xs text-gray-500 leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline transition-colors">
                  Privacy Policy
                </Link>
                . I understand my research data is private.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2.5
                         bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
                         text-white font-medium text-sm
                         py-3.5 rounded-xl mt-1
                         transition-all duration-150 active:scale-[0.98]
                         focus:outline-none focus:ring-4 focus:ring-blue-500/30"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating account…
                </>
              ) : (
                <>
                  Create account
                  <ArrowRight size={15} strokeWidth={2.2} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-50 px-3 text-xs text-gray-400">or sign up with</span>
            </div>
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                label: "Google",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ),
              },
              {
                label: "GitHub",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                ),
              },
            ].map(({ label, icon }) => (
              <button
                key={label}
                type="button"
                className="flex items-center justify-center gap-2.5 py-3 px-4
                           bg-white border border-gray-200 rounded-xl text-sm text-gray-700
                           hover:bg-gray-50 hover:border-gray-300
                           transition-all duration-150 active:scale-[0.98]"
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>

          <p className="mt-7 text-center text-xs text-gray-400">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}