import { toast } from "react-toastify";
import Button from "./common/button";

export default function ToastAddToCart() {
  return toast.success(
    <div className="flex gap-[5px]">
      Thêm vào giỏ hàng thành công!
      <Button
        className="whitespace-nowrap"
        onClick={() => {
          window.location.href = "/cart";
        }}
      >
        Xem
      </Button>
    </div>,
    {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      progress: undefined,
    },
  );
}
