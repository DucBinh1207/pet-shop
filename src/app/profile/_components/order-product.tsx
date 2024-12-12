import { OrderItemType } from "@/types/order-item";
import { priceRender } from "@/utils/priceRender";
import Link from "next/link";

type props = {
  product: OrderItemType;
};

export default function OrderProduct({ product }: props) {
  return (
    <tr className="xxx-smallest-screen:block">
      <td className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-left text-[13px] font-normal leading-[1]">
        <div className="flex flex-col">
          <div className="text-[14px] leading-[1.27] text-primary">
            <Link
              href={`/${product.category}/${product.idProduct}`}
              className="hover:text-secondary"
            >
              {product.name}
            </Link>
            <span> ×&nbsp;{product.quantity} </span>
          </div>
          <ul className="mt-[5px] flex gap-[10px]">
            {product.ingredient && (
              <li className="flex items-center whitespace-nowrap">
                <span className="capitalize">Nguyên liệu :&nbsp;</span>
                <span className="capitalize text-primary">
                  {product.ingredient}
                </span>
              </li>
            )}

            {product.size && (
              <li className="flex items-center whitespace-nowrap">
                <span className="capitalize">Kích cỡ :&nbsp;</span>
                <span className="capitalize text-primary">{product.size}</span>
              </li>
            )}

            {product.color && (
              <li className="flex items-center whitespace-nowrap">
                <span className="capitalize">Màu :&nbsp;</span>
                <span className="capitalize text-primary">{product.color}</span>
              </li>
            )}

            {product.weight && (
              <li className="flex items-center whitespace-nowrap">
                <span className="capitalize">Cân nặng :&nbsp;</span>
                <span className="capitalize text-primary">
                  {product.weight}
                </span>
              </li>
            )}
          </ul>
        </div>
      </td>

      <td className="border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
        <span>{priceRender(product.price * product.quantity) + "đ"}</span>
      </td>
    </tr>
  );
}
