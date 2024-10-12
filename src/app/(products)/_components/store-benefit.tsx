import CarIcon from "@/components/common/icons/car-icon";
import CheckIcon from "@/components/common/icons/check-icon";

export default function StoreBenefit() {
  return (
    <>
      <div className="flex">
        <ul className="mt-[25px] inline-flex flex-col rounded-[4px] border border-dashed border-light_gray_color_second bg-background_color py-[8px]">
          <li className="mx-[20px] my-[8px] flex gap-[15px] text-center text-primary">
            <CarIcon
              size={24}
              className="fill-current text-dark_orange_color"
            />
            <span className="min-w-[100px] font-quicksand text-[14px] font-semibold leading-[1.4] tracking-[-0.02em]">
              Miễn phí vẫn chuyển cho đơn có giá trị hơn 5 triệu đồng
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-[20px]">
        <ul className="columns-2 space-y-[5px] text-[14px] font-normal leading-[1.5] tracking-[0.02em]">
          <li className="flex items-center gap-[10px]">
            <CheckIcon
              size={13}
              className="fill-current text-dark_orange_color"
            />
            Hỗ trợ hoàn tiền
          </li>
          <li className="flex items-center gap-[10px]">
            <CheckIcon
              size={13}
              className="fill-current text-dark_orange_color"
            />
            Sản phẩm chất lượng
          </li>
          <li className="flex items-center gap-[10px]">
            <CheckIcon
              size={13}
              className="fill-current text-dark_orange_color"
            />
            Giao hàng nhanh chóng
          </li>
          <li className="flex items-center gap-[10px]">
            <CheckIcon
              size={13}
              className="fill-current text-dark_orange_color"
            />
            Hỗ trợ 24/7
          </li>
        </ul>
      </div>
    </>
  );
}
