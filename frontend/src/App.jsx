import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import AppPage from "./pages/AppPage";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* Protected App */}
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}