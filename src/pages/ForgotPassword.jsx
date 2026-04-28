import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">
          Reset your password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 border rounded-lg"
        />

        <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
          Send Reset Link
        </button>

        <Link to="/login" className="text-sm mt-4 block">
          Back to login
        </Link>
      </div>

    </div>
  );
}