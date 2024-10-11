"use client";
import BreadCrumb from "@/components/bread-crumb";
import { PetType } from "@/types/pet";
import { usePathname } from "next/navigation";
import Detail from "./detail";
import usePetProduct from "@/store/use-pet-product";
import { useShallow } from "zustand/react/shallow";

export default function PageContent() {
  const pathName = usePathname();
  const id = pathName.split("/").pop() || "";
  // This is where the product's name is retrieved by fetching product data using the ID from the URL path
  const product: PetType = {
    id: id,
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

  const { setProduct } = usePetProduct(
    useShallow((state) => ({
      setProduct: state.setProduct,
    })),
  );
  setProduct(product);

  return (
    <>
      <BreadCrumb
        pathLink={["/pets", `/pets/${product.id}`]}
        pathName={["Pets", product.name]}
      />

      <Detail />
    </>
  );
}
