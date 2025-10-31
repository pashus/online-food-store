import { Toast } from "@/components";
import type { ToastProps } from "@/types";
import { toast as sonnerToast } from "sonner";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom(
    (id) => (
      <Toast id={id} title={toast.title} description={toast.description} />
    ),
    {
      duration: 4000,
    },
  );
}
