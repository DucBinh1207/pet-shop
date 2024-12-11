import { CartItemType } from "@/types/cart-item";
import { priceRender } from "@/utils/priceRender";

type props = {
  product: CartItemType;
};

export default function OrderItem({ product }: props) {
  return (
    <tr className="mb-[10px] medium-screen:block">
      <td className="flex flex-col pb-[12px]">
        <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
          {product.name}
          <strong className="whitespace-nowrap font-normal">
            ×&nbsp;{product.quantity}
          </strong>
        </span>
        <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
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
              <span className="capitalize text-primary">{product.weight}</span>
            </li>
          )}
        </ul>
      </td>

      <td className="whitespace-wrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
        {priceRender(product.price * product.quantity) + "đ"}
      </td>
    </tr>
  );
}
