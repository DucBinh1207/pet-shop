"use client";
import BreadCrumb from "@/components/bread-crumb";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";
import { FoodType } from "@/types/food";

export const ProductContext = createContext<FoodType | null>(null);

export default function PageContent() {
  const { id } = useParams();
  // This is where the product's name is retrieved by fetching product data using the ID from the URL path
  const product: FoodType = {
    id: typeof id === "string" ? id : "",
    name: "Premium Cat Food",
    petType: "Cat",
    ingredient: "Chicken, Rice, Fish Oil",
    nutrition_info: "Protein 30%, Fat 10%, Fiber 3%",
    weight: "1.5kg",
    expire_date: "2025-08-10",
    brand: "Whiskers Delight",
    rating: 4.7,
    description:
      "A premium blend of chicken and fish for your cat's daily nutrition.",
    image: "https://example.com/images/premium-cat-food.jpg",
    quantity: 50,
    price: 200000,
  };

  return (
    <ProductContext.Provider value={product}>
      <BreadCrumb
        pathLink={["/foods", `/foods/${product.id}`]}
        pathName={["Foods", product.name]}
      />

      <Detail />
    </ProductContext.Provider>
  );
}
