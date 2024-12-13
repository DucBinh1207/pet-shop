import "swiper/css/pagination";
import NavigationButton from "@/components/navigation-button";
import { TabType, TabTypes } from "./product-suggestion";
import ListDogs from "./list-dogs";
import ListCats from "./list-cats";
import ListFoods from "./list-foods";
import ListSupplies from "./list-supplies";

type props = {
  id: TabTypes;
};

export default function ListProducts({ id }: props) {
  return (
    <div className="relative flex w-[calc(100%-463px)] flex-col small-screen:w-full">
      <div className="peer w-full">
        <div className="w-full overflow-hidden">
          {id === TabType.DOGS && <ListDogs />}
          {id === TabType.CATS && <ListCats/>}
          {id === TabType.FOODS && <ListFoods />}
          {id === TabType.SUPPLIES && <ListSupplies />}
        </div>
      </div>

      <NavigationButton
        prevClass="product-suggestion-swiper-button-prev"
        nextClass="product-suggestion-swiper-button-next"
        typeReference="peer"
      />
    </div>
  );
}
