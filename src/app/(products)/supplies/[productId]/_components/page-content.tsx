"use client";
import BreadCrumb from "@/components/bread-crumb";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";
import { SupplyType } from "@/types/supply";
import useSupplyDetail from "@/hooks/products/useSupplyDetail";
import Loading from "@/app/loading";

export const ProductContext = createContext<SupplyType>({
  id: "",
  name: "",
  description: "",
  image: "",
  dateCreated: "",
  rating: 0,
  category: "",
  material: "",
  brand: "",
  type: "",
  variationsSupplies: [
    {
      productVariantId: "",
      color: "",
      size: "",
      price: 0,
      quantity: 0,
      dateCreated: "",
    },
  ],
});

export default function PageContent() {
  const { productId } = useParams<{ productId: string }>();

  const { supply, isLoading, isError } = useSupplyDetail({ id: productId });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return <Loading />;
  }

  if (supply)
    return (
      <ProductContext.Provider value={supply}>
        <BreadCrumb
          pathLink={["/supplies", `/supplies/${supply.id}`]}
          pathName={["Supplies", supply.name]}
        />

        <Detail />
      </ProductContext.Provider>
    );
}
