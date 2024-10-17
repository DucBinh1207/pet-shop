import { toast } from "react-toastify";

type toastProps = {
  type: "success" | "error";
  message: string;
};

function Toast({ type, message }: toastProps) {
  return toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    progress: undefined,
  });
}

export function ToastError(message: string) {
  return Toast({ type: "error", message: message });
}

export function ToastSuccess(message: string) {
  return Toast({ type: "success", message: message });
}
