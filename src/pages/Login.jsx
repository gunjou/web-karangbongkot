import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ui/ThemeToggle";
import logo from "../assets/icon.png";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // ===== DUMMY LOGIN =====
    if (username === "admin" && password === "admin123") {
      navigate("/dashboard");
    } else {
      setError("Username atau password salah");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300 dark:bg-gray-900 px-4">
      <div className="w-full max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          {/* ===== FORM LOGIN ===== */}
          <div className="p-8 space-y-6">
            {/* HEADER MOBILE */}
            <div className="flex justify-between items-start lg:hidden">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <h1 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                    Desa Karang Bongkot
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Sistem Administrasi Desa
                  </p>
                </div>
              </div>
              <ThemeToggle />
            </div>

            {/* TITLE */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Selamat Datang Kembali
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Login untuk masuk ke sistem
              </p>
            </div>

            {/* ERROR */}
            {error && (
              <div className="text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
                {error}
              </div>
            )}

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full mt-1 px-3 py-2 text-sm rounded-lg border dark:border-gray-700
                  bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                  placeholder-gray-400 dark:placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="admin123"
                    className="w-full px-3 py-2 text-sm rounded-lg border dark:border-gray-700
                    bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100
                    placeholder-gray-400 dark:placeholder-gray-500
                    focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2
                bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <LogIn size={16} />
                Masuk
              </button>
            </form>

            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Outlook Project
            </p>
          </div>

          {/* ===== PANEL LOGO (DESKTOP) ===== */}
          <div className="hidden lg:flex flex-col items-center justify-center relative">
            <img
              src={logo}
              alt="Logo"
              className="w-40 h-40 object-contain mb-6"
            />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Desa Karang Bongkot
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Sistem Administrasi Desa
            </p>

            <div className="absolute top-6 right-6">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
