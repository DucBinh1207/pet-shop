import AboutUs from "./_components/about-us";
import Brand from "./_components/brand";
import Carousel from "./_components/carousel";
import CategoryHighlight from "./_components/category-highlight";
import Comments from "./_components/comments";
import Marquee from "./_components/marquee";
import OurGuides from "./_components/our-guides";
import ProductSuggestion from "./_components/product-suggestion";
import TopPets from "./_components/top-pets";

export default function Home() {
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
