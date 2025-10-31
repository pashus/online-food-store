import type { ToastProps } from "@/types";
import { toast } from "sonner";

export function Toast({
  title,
  description,
  id,
  variant = "default",
}: ToastProps) {
  const variants = {
    default: "bg-white text-gray-900 dark:bg-[#171717] dark:text-white",
    success: "bg-green-100 text-green-800 dark:bg-green-700 dark:text-white",
    error: "bg-red-100 text-red-800 dark:bg-red-700 dark:text-white",
    warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-600 dark:text-black",
  };

  return (
    <div
      className={`flex w-full items-center rounded-lg p-4 shadow-lg ring-1 ring-black/5 md:max-w-[364px] ${variants[variant]}`}
    >
      <div className="w-full">
        <div className="flex justify-between gap-2">
          <p className="text-md font-medium">{title}</p>
          <button
            className="max-h-7 cursor-pointer rounded bg-gray-100 px-2 py-1 text-sm font-semibold text-black hover:bg-gray-200 dark:bg-[#2a2a2a] dark:text-white dark:hover:bg-[#393838]"
            onClick={() => toast.dismiss(id)}
          >
            Х
          </button>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
