import { useTheme } from "@/hooks";
import { cn } from "@/lib/utils";
import type { Theme } from "@/types";

export function ThemeSelect({ ...props }) {
  const { theme, setTheme } = useTheme();

  return (
    <select
      className={cn(
        "rounded-lg border border-gray-300 bg-white px-4 py-2 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-[#171717]",
        props.className,
      )}
      value={theme}
      onChange={(e) => setTheme(e.target.value as Theme)}
    >
      <option value="light">Светлая</option>
      <option value="dark">Темная</option>
      <option value="system">Системная</option>
    </select>
  );
}
