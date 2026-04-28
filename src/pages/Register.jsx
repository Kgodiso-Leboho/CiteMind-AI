import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Create account</h2>

        <input
          type="text"
          placeholder="Full name"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Register
        </button>

        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
}