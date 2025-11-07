import { getIsAuthenticated } from "@/features/auth-slice";
import { useAppSelector } from "@/hooks";
import { Navigate, Outlet } from "react-router-dom";

export function PublicRoute() {
  const isAuth = useAppSelector(getIsAuthenticated);
  return isAuth ? <Navigate to="/users" replace /> : <Outlet />;
}
