"use client";
import BreadCrumb from "@/components/bread-crumb";
import { PetType } from "@/types/pet";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";
import usePetDetail from "@/hooks/products/usePetDetail";
import Loading from "@/app/loading";

export const ProductContext = createContext<PetType>({
  id: "",
  category: "",
  dateCreated: "",
  description: "",
  image: "",
  name: "",
  rating: null,
  variationsPets: [
    {
      id: "",
      idProduct: "",
      breed: "",
      breedOrigin: false,
      dateOfBirth: "",
      deworming: "",
      father: "",
      gender: false, // false có thể mặc định cho trường boolean
      health: "",
      mother: "",
      price: 0,
      quantity: 0,
      trait: "",
      type: "",
      vaccine: 0,
    },
  ],
});

export default function PageContent() {
  const { productId } = useParams<{ productId: string }>();

  const { pet, isLoading, isError } = usePetDetail({ id: productId });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return <Loading />;
  }

  if (pet)
    return (
      <ProductContext.Provider value={pet}>
        <BreadCrumb
          pathLink={["/pets", `/pets/${pet.id}`]}
          pathName={["Pets", pet.name]}
        />

        <Detail />
      </ProductContext.Provider>
    );
}
