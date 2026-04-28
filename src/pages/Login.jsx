import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6">Welcome back</h2>

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
          Login
        </button>

        <div className="flex justify-between mt-4 text-sm">
          <Link to="/forgot">Forgot password?</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>

    </div>
  );
}