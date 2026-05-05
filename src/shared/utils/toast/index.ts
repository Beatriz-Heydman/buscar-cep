import type { ReactNode } from "react";
import { toast } from "react-toastify";

export function toastError(reactNode: ReactNode) {
  return toast.error(reactNode, {
    style: {
      fontFamily: "Poppins",
      color: "#af8383",
      display: "flex",
      gap: "5px",
      lineHeight: "20px",
      fontSize: "0.95rem",
    },
  });
}

export function toastWarn(reactNode: ReactNode) {
  return toast.warning(reactNode, {
    style: {
      fontFamily: "Poppins",
      color: "#958f76",
      display: "flex",
      gap: "5px",
      lineHeight: "20px",
      fontSize: "0.95rem",
    },
  });
}

export function toastSuccess(reactNode: ReactNode) {
  toast.success(reactNode, {
    style: {
      fontFamily: "Poppins",
      color: "#5a7d5b",
      fontSize: "0.95rem",
    },
  });
}
