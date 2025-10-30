import { ThemeSelect } from "@/components";
import { LoginForm } from "@/components/login-form";
import { Bounce, Flip, Slide, toast, Zoom } from "react-toastify";

export function LoginPage() {
  const notify = () =>
    toast.error("123", {
      transition: Flip,
    });
  return (
    <div className="relative flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
      <ThemeSelect className="absolute top-4 right-4" />
      <button className="absolute top-4 right-50" onClick={notify}>
        НАЖМИ
      </button>
    </div>
  );
}

// function MyNotify() {
//   return <div className="h-full w-full">Текст</div>;
// }
