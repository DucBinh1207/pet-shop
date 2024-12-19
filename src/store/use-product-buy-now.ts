import { create } from "zustand";

export type ProductBuyNowType = {
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

type ProductBuyNowStore = {
  productBuyNow: ProductBuyNowType | null;
  clearProductBuyNow: () => void;
  setProductBuyNow: (productBuyNowData: ProductBuyNowType) => void;
};

const useProductBuyNow = create<ProductBuyNowStore>((set) => ({
  productBuyNow: null,
  clearProductBuyNow: () => set({ productBuyNow: null }),
  setProductBuyNow: (productBuyNowData: ProductBuyNowType) =>
    set({ productBuyNow: productBuyNowData }),
}));

export default useProductBuyNow;
