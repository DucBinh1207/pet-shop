"use client";
import BreadCrumb from "@/components/bread-crumb";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";
import { SupplyType } from "@/types/supply";

export const ProductContext = createContext<SupplyType | null>(null);

export default function PageContent() {
  const { productId } = useParams();

  // This is where the product's name is retrieved by fetching product data using the ID from the URL path
  const product: SupplyType = {
    id: typeof productId === "string" ? productId : "",
    name: "Natural Clumping Cat Litter",
    petType: "Cat",
    ingredient: "Bentonite Clay, Activated Charcoal",
    nutrition_info: "N/A",
    weight: "10kg",
    expire_date: "2026-01-01",
    brand: "CleanPaws",
    rating: 4.8,
    description:
      "Premium clumping cat litter with activated charcoal for superior odor control.",
    image: "https://example.com/images/natural-clumping-cat-litter.jpg",
    quantity: 100,
    price: 150000,
  };

  return (
    <ProductContext.Provider value={product}>
      <BreadCrumb
        pathLink={["/supplies", `/supplies/${product.id}`]}
        pathName={["Supplies", product.name]}
      />

      <Detail />
    </ProductContext.Provider>
  );
}
