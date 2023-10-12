import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toastConfig(theme: string | undefined) {
  if (theme === "dark") {
    return {
      style: {
        border: "1px solid #473a35",
        borderRadius: "10px",
        background: "#1b1614",
        color: "#fff",
      },
    };
  } else {
    return {
      style: {
        border: "1px solid #333",
        borderRadius: "10px",
        background: "#fff",
        color: "#333",
      },
    };
  }
}
