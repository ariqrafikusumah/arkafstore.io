import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  // Gantilah kondisi ini dengan pengecekan autentikasi admin yang sesuai
  const isAuthenticated = localStorage.getItem("isAdminAuthenticated");

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
}

export default PrivateRoute;
