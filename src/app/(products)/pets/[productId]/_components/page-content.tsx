"use client";
import BreadCrumb from "@/components/bread-crumb";
import { PetType } from "@/types/pet";
import { useParams } from "next/navigation";
import Detail from "./detail";
import { createContext } from "react";

export const ProductContext = createContext<PetType | null>(null);

export default function PageContent() {
  const { id } = useParams();
  // This is where the product's name is retrieved by fetching product data using the ID from the URL path
  const product: PetType = {
    id: typeof id === "string" ? id : "",
    name: "golden retriever 001",
    petType: "dog",
    gender: "male",
    health: "excellent",
    father: "golden Champion",
    mother: "golden Queen",
    type: "golden Retriever",
    deworming: "yes",
    vaccine: "complete",
    breed: "purebred",
    traits: "friendly, loyal",
    rating: 4.5,
    description:
      "Golden Retriever là giống chó có nguồn gốc từ Scotland, nổi tiếng với tính cách hiền lành, thông minh và thân thiện. Chúng có bộ lông màu vàng óng mượt, dày, và dễ chăm sóc. Golden Retriever được yêu thích không chỉ vì ngoại hình đáng yêu mà còn vì tính cách dễ dạy bảo, rất trung thành và thích hoạt động ngoài trời. Đây là giống chó rất phù hợp cho gia đình, đặc biệt là những nhà có trẻ em, bởi chúng rất hòa đồng, kiên nhẫn và yêu thích các hoạt động tương tác. Golden Retriever cũng thường được huấn luyện làm chó nghiệp vụ trong các vai trò như cứu hộ, trợ giúp người khuyết tật, và trong các hoạt động thể thao như bắt đĩa, chạy nhảy.",
    image: "golden_001.jpg",
    quantity: 2,
    price: 1500,
  };

  return (
    <ProductContext.Provider value={product}>
      <BreadCrumb
        pathLink={["/pets", `/pets/${product.id}`]}
        pathName={["Pets", product.name]}
      />

      <Detail />
    </ProductContext.Provider>
  );
}
