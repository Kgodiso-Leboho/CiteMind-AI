import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft, BookOpen, Mail, CheckCircle2 } from "lucide-react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    try {
      // Replace with your reset logic
      await new Promise((r) => setTimeout(r, 1400));
      setIsSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex font-sans">

      {/* ── LEFT PANEL ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0f1b2d] flex-col justify-between p-14 relative overflow-hidden">

        {/* Geometric decorations */}
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
              Cite<span className="text-blue-400">AI</span>
            </span>
          </Link>
        </div>

        {/* Centre copy */}
        <div className="relative z-10">
          <p className="text-xs font-medium text-blue-400 uppercase tracking-[0.2em] mb-6">
            Account Recovery
          </p>
          <h2 className="font-serif text-5xl font-semibold text-white leading-[1.15] mb-6">
            Back in a<br />
            <em className="not-italic text-blue-400">moment.</em>
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-xs">
            We'll send a secure reset link to your inbox. It expires in 15 minutes for your protection.
          </p>
        </div>

        {/* Bottom trust row */}
        <div className="relative z-10 grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
          {[
            { value: "15 min", label: "Link expiry" },
            { value: "TLS", label: "Encrypted email" },
            { value: "Zero", label: "Data stored" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-serif text-2xl font-semibold text-white mb-0.5">{value}</p>
              <p className="text-white/40 text-xs">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex items-center justify-center px-6 py-16 bg-gray-50">
        <div className="w-full max-w-sm">

          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-2 mb-10">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <BookOpen size={15} className="text-white" strokeWidth={2} />
            </div>
            <span className="font-serif text-xl font-semibold text-gray-900">
              Cite<span className="text-blue-600">AI</span>
            </span>
          </div>

          {/* Back link */}
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-xs text-gray-400
                       hover:text-gray-700 transition-colors mb-10 group"
          >
            <ArrowLeft
              size={13}
              strokeWidth={2}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            Back to sign in
          </Link>

          {/* ── SUCCESS STATE ── */}
          {isSuccess ? (
            <div className="animate-[fadeUp_0.35s_ease_forwards]">
              <div className="w-14 h-14 bg-green-50 border border-green-200 rounded-2xl
                              flex items-center justify-center mb-7">
                <CheckCircle2 size={26} className="text-green-600" strokeWidth={1.8} />
              </div>

              <h1 className="font-serif text-3xl font-semibold text-gray-900 mb-3 tracking-tight">
                Check your inbox
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                We sent a password reset link to{" "}
                <span className="font-medium text-gray-800">{email}</span>.
                It expires in 15 minutes.
              </p>

              <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl mb-7">
                <p className="text-xs text-blue-700 leading-relaxed">
                  Didn't receive it? Check your spam folder, or{" "}
                  <button
                    onClick={() => { setIsSuccess(false); setEmail(""); }}
                    className="font-medium underline hover:text-blue-900 transition-colors"
                  >
                    try a different email
                  </button>
                  .
                </p>
              </div>

              <Link
                to="/login"
                className="flex items-center justify-center gap-2 w-full py-3.5
                           bg-white border border-gray-200 rounded-xl text-sm text-gray-700
                           hover:bg-gray-50 hover:border-gray-300 transition-all duration-150"
              >
                <ArrowLeft size={14} strokeWidth={2} />
                Return to sign in
              </Link>
            </div>

          ) : (

            /* ── FORM STATE ── */
            <>
              <div className="mb-10">
                <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-xl
                                flex items-center justify-center mb-6">
                  <Mail size={22} className="text-blue-600" strokeWidth={1.8} />
                </div>
                <h1 className="font-serif text-3xl font-semibold text-gray-900 mb-2 tracking-tight">
                  Reset your password
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Enter the email associated with your account and we'll send you a secure link.
                </p>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-xl
                                text-sm text-red-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-gray-600 uppercase tracking-wide">
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@university.edu"
                    autoComplete="email"
                    autoFocus
                    className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl
                               text-sm text-gray-900 placeholder-gray-300
                               focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10
                               transition-all duration-150"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2.5
                             bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400
                             text-white font-medium text-sm
                             py-3.5 rounded-xl
                             transition-all duration-150 active:scale-[0.98]
                             focus:outline-none focus:ring-4 focus:ring-blue-500/30"
                >
                  {isLoading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending link…
                    </>
                  ) : (
                    <>
                      Send reset link
                      <ArrowRight size={15} strokeWidth={2.2} />
                    </>
                  )}
                </button>
              </form>

              <p className="mt-8 text-center text-xs text-gray-400">
                Remember your password?{" "}
                <Link
                  to="/login"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </>
          )}

        </div>
      </div>

    </div>
  );
}