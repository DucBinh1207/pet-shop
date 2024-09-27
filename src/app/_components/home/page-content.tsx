import AboutUs from "./about-us";
import Brand from "./brand";
import Carousel from "./carousel";
import CategoryHighlight from "./category-highlight";
import Comments from "./comments";
import Marquee from "./marquee";
import OurGuides from "./our-guides";
import ProductSuggestion from "./product-suggestion";
import TopPets from "./top-pets";

export default function PageContent() {
  return (
    <div>
      <Carousel />
      <TopPets />
      <CategoryHighlight />
      <Marquee />
      <ProductSuggestion />
      <OurGuides />
      <AboutUs />
      <Comments />
      <Brand />
    </div>
  );
}
