import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ProtectedRoute, PublicRoute } from "@/components";
import { LoginPage, RegisterPage } from "@/pages";

function App() {
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
      children: [{}],
    },
    { path: "*", element: <h1>404: Страница не найдена</h1> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
