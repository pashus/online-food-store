import { useTheme } from "@/hooks";
import { ToastContainer } from "react-toastify";

export function ThemedToastContainer() {
  const { theme } = useTheme();

  const toastTheme =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light";

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      closeButton={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toastTheme}
      icon={false}
    />
  );
}
