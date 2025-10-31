import { ProtectedRoute, PublicRoute } from "@/components";
import { LoginPage, RegisterPage, UsersPage } from "@/pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function App() {
  const router = createBrowserRouter([
    {
      element: <PublicRoute />,
      children: [
        { path: "/", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/login", element: <LoginPage /> },
      ],
    },
    {
      element: <ProtectedRoute />,
      children: [{ path: "/users", element: <UsersPage /> }],
    },
    { path: "*", element: <h1>404: Страница не найдена</h1> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
