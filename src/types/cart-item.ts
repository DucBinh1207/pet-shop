export type CartItemType = {
  id: string;
  idProduct: string;
  productVariantId: string;
  category: "pets" | "foods" | "supplies";
  name: string;
  quantity: number;
  ingredient: string;
  weight: string;
  size: string;
  color: string;
  price: number;
  image: string;
  status: number;
};
