import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-8 py-5 border-b">
        <h1 className="text-xl font-semibold">CiteAI</h1>
        <div className="flex gap-4">
          <Link to="/login" className="text-sm">Login</Link>
          <Link to="/register" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Get Started
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="text-center py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">
          AI Research, Done Properly.
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-8">
          CiteAI delivers evidence-backed answers with structured citations.
          No guessing. Just verifiable research.
        </p>

        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg"
        >
          Start Researching
        </Link>
      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-16">
        {[
          "Evidence-backed answers",
          "Structured citations",
          "Academic-grade responses",
        ].map((item, i) => (
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">{item}</h3>
            <p className="text-gray-500 text-sm">
              Built for serious research workflows.
            </p>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to upgrade your research?
        </h2>
        <Link
          to="/register"
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Create Account
        </Link>
      </section>

    </div>
  );
}