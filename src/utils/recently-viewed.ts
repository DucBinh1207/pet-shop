import { LocalProduct } from "@/types/local-product";

// Hàm thêm sản phẩm vào danh sách "vừa xem"
export function addToRecentlyViewed({
  id,
  category,
}: {
  id: string;
  category: "pets" | "foods" | "supplies";
}) {
  const maxItems = 5;
  const productList = localStorage.getItem("recentlyViewed");
  let viewedProducts: LocalProduct[] = [];
  if (productList) viewedProducts = JSON.parse(productList);

  viewedProducts = viewedProducts.filter((product) => product.id !== id);

  const product: LocalProduct = { id: id, category: category };
  viewedProducts.unshift(product);

  if (viewedProducts.length > maxItems) {
    viewedProducts.pop();
  }
  localStorage.setItem("recentlyViewed", JSON.stringify(viewedProducts));
}

export function getRecentlyViewed() {
  const productList = localStorage.getItem("recentlyViewed");
  if (productList) return JSON.parse(productList) as LocalProduct[];
  else return [];
}
