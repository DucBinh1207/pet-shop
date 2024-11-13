import { CartItemType } from "@/types/cart-item";
import { post } from "../axios";

export async function AddToCard({ data }: { data: CartItemType }) {
  return await post({
    url: "/carts",
    data,
  });
}
