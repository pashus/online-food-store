import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const isAuth = Boolean(localStorage.getItem("token"));
  return isAuth ? <Navigate to="/" replace /> : <Outlet />;
}
