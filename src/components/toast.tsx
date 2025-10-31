import type { ToastProps } from "@/types";
import { toast } from "sonner";

export function Toast({ title, description, id }: ToastProps) {
  return (
    <div className="flex w-full items-center rounded-lg bg-white p-4 shadow-lg ring-1 ring-black/5 md:max-w-[364px] dark:bg-[#171717]">
      <div className="w-full">
        <div className="flex justify-between gap-2">
          <p className="text-md font-medium text-gray-900 dark:text-white">
            {title}
          </p>
          <button
            className="max-h-7 cursor-pointer rounded bg-gray-100 px-2 py-1 text-sm font-semibold text-black hover:bg-gray-200 dark:bg-[#2a2a2a] dark:text-white dark:hover:bg-[#393838]"
            onClick={() => {
              toast.dismiss(id);
            }}
          >
            Х
          </button>
        </div>
        <p className="text-sm text-gray-500 dark:text-white">{description}</p>
      </div>
    </div>
  );
}
