import { Navigate, Outlet } from "react-router-dom";

export function ProtectedRoute() {
  const isAuth = Boolean(localStorage.getItem("token"));
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}
