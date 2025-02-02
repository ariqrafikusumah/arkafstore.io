import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AdminLogin from "./components/AdminLogin";
import AdminPanel from "./components/AdminPanel";
import PrivateRoute from "./components/PrivateRoute"; // Import komponen PrivateRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        {/* Halaman AdminPanel hanya bisa diakses oleh admin yang sudah terautentikasi */}
        <Route
          path="/admin-panel"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
