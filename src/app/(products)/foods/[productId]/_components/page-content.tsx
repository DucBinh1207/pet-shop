"use client";
import BreadCrumb from "@/components/bread-crumb";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";
import { FoodType } from "@/types/food";
import useFoodDetail from "@/hooks/products/useFoodDetail";
import Loading from "@/app/loading";

export const ProductContext = createContext<FoodType>({
  id: "",
  name: "",
  description: "",
  image: "",
  dateCreated: "",
  rating: 0,
  category: "",
  petType: "",
  nutritionInfo: "",
  expireDate: "",
  brand: "",
  variationsFoods: [
    {
      productVariantId: "",
      ingredient: "",
      weight: "",
      price: 0,
      quantity: 0,
      dateCreated: "",
    },
  ],
});

export default function PageContent() {
  const { productId } = useParams<{ productId: string }>();

  const { food, isLoading, isError } = useFoodDetail({ id: productId });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return <Loading />;
  }

  if (food)
    return (
      <ProductContext.Provider value={food}>
        <BreadCrumb
          pathLink={["/foods", `/foods/${food.id}`]}
          pathName={["Foods", food.name]}
        />

        <Detail />
      </ProductContext.Provider>
    );
}
