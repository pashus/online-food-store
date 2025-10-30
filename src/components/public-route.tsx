import { getIsAuthenticated } from "@/features/authSlice";
import { useAppSelector } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const isAuth = useAppSelector(getIsAuthenticated);
  return isAuth ? <Navigate to="/users" replace /> : <Outlet />;
}
