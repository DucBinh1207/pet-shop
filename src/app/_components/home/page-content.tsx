import AboutUs from "./about-us/about-us";
import Brand from "./brand/brand";
import Carousel from "./carousel/carousel";
import CategoryHighlight from "./category-highlight/category-hightlight";
import Comments from "./comments/comments";
import Marquee from "./marquee/marque";
import ProductSuggestion from "./product-suggestion/product-suggestion";
import TopPets from "./top-pets/top-pets";

export default function PageContent() {
  return (
    <div>
      <Carousel />
      <TopPets />
      <CategoryHighlight />
      <Marquee />
      <ProductSuggestion />
      <AboutUs />
      <Comments />
      <Brand />
    </div>
  );
}
