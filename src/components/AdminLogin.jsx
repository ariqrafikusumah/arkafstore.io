import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Proses autentikasi sederhana dengan password yang sudah ditentukan
    const correctPassword = "admin123"; // Password yang benar (bisa diganti sesuai kebutuhan)

    if (password === correctPassword) {
      // Set status autentikasi admin jika password benar
      localStorage.setItem("isAdminAuthenticated", "true");
      // Redirect ke Admin Panel
      navigate("/admin-panel");
    } else {
      alert("Password salah!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login Admin</h1>
        <input
          type="password"
          placeholder="Masukkan Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}

export default AdminLogin;
