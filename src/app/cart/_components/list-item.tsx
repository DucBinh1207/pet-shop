import { CartItemType } from "@/types/cart-item";
import ProductItem from "./product-item";
import Button from "@/components/common/button";
import { MouseEvent, useRef, useState } from "react";

type props = {
  cartItems: CartItemType[];
  refresh: () => void;
  mutate: ({ data }: { data: cartItemData[] }) => Promise<void>;
  isMutating: boolean;
};

export type cartItemData = {
  id: string;
  productVariantId: string;
  category: "pets" | "foods" | "supplies";
  quantity: number;
};

export default function ListItem({ cartItems, mutate, isMutating }: props) {
  const [listItem, setListItem] = useState<cartItemData[]>(
    cartItems.map((item) => {
      return {
        id: item.id,
        idProduct: item.idProduct,
        productVariantId: item.productVariantId,
        category: item.category,
        quantity: item.quantity,
      };
    }),
  );

  // Lưu trữ giá trị ban đầu của cartItems để so sánh
  const CartItemsRef = useRef<cartItemData[]>(
    cartItems.map((item) => ({
      id: item.id,
      idProduct: item.idProduct,
      productVariantId: item.productVariantId,
      category: item.category,
      quantity: item.quantity,
    })),
  );

  // Kiểm tra sự thay đổi
  const isDataChanged =
    JSON.stringify(listItem) !== JSON.stringify(CartItemsRef.current);

  async function handleUpdateCart(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) {
    e.preventDefault();
    mutate({ data: listItem });
  }

  return (
    <>
      <tbody className="medium-screen:block medium-screen:w-full">
        {cartItems.map((item) => {
          return (
            <ProductItem
              key={item.productVariantId}
              product={item}
              listItem={listItem}
              setData={setListItem}
              isMutating={isMutating}
            />
          );
        })}

        <tr>
          <td colSpan={5} className="pt-[25px]">
            <div className="flex justify-end">
              {isDataChanged && !isMutating ? (
                <Button type="submit" onClick={handleUpdateCart}>
                  Cật nhật giỏ hàng
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="pointer-events-none cursor-not-allowed opacity-20"
                  disabled
                >
                  Cật nhật giỏ hàng
                </Button>
              )}
            </div>
          </td>
        </tr>
      </tbody>
    </>
  );
}
