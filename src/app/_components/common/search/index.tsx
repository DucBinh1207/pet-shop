import Button from "@/components/common/button";
import CancelIcon from "@/components/common/icons/cancel-icon";
import SearchIcon from "@/components/common/icons/search-icon";
import useSearch from "@/hooks/products/useSearch";
import useBlockScroll from "@/hooks/use-block-scroll";
import { useDebounce } from "@/hooks/use-debounce";
import cn from "@/utils/style/cn";
import { ChangeEvent, useEffect, useState } from "react";
import Item from "./item";

export default function Search() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  useBlockScroll(isSearchOpen);

  const [search, setSearch] = useState("");

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  function handleClear() {
    setSearch("");
  }

  function handleCancel() {
    setSearch("");
    setIsSearchOpen(false);
  }

  const debouncedSearch = useDebounce(search);
  const { products, isLoading, refresh } = useSearch(debouncedSearch);

  useEffect(() => {
    console.log("1");
    if (isSearchOpen) {
      refresh(debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <>
      <li
        className="group relative flex cursor-pointer items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0"
        onClick={() => {
          setIsSearchOpen(true);
        }}
      >
        <span className="flex h-[20px] w-[20px] items-center justify-center">
          <SearchIcon size={21} />
        </span>
      </li>
      {isSearchOpen && (
        <>
          <div className="fixed left-[50%] top-[50%] z-[110] h-[90vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] p-[50px] small-screen:h-0 small-screen:pb-[56.25%]">
            <div className="mx-auto h-full w-full max-w-[670px]">
              <div className="text-center font-quicksand text-[42px] font-bold leading-[1] tracking-[-0.02] text-primary">
                Bạn đang tìm gì ?
              </div>
              <form className="mb-[85px] mt-[54px]">
                <div className="relative w-full">
                  <input
                    className="border-b-solid w-full border-b border-b-primary pb-[15px] pr-[70px] text-[18px] font-semibold text-primary outline-none"
                    type="text"
                    placeholder="Tìm kiếm..."
                    value={search}
                    onChange={handleSearch}
                  />
                  <button
                    className="absolute right-0 top-0 flex items-center justify-center gap-[5px] text-primary"
                    type="button"
                    onClick={handleClear}
                  >
                    <CancelIcon
                      size={20}
                      className="fill-current leading-[1]"
                    />
                  </button>

                  {isLoading && (
                    <div className="hover_animate absolute left-[-10px] top-0 inline-block translate-x-[-100%] cursor-pointer rounded-[25px] border-[2px] border-solid border-white bg-white p-[5px] text-center uppercase text-white outline-none hover:bg-white hover:text-primary">
                      <div className="h-6 w-6 animate-spin rounded-full border-2 border-t-2 border-transparent border-t-primary"></div>
                    </div>
                  )}
                </div>
                <input
                  type="hidden"
                  name="post_type"
                  value="product"
                  className="js-ajax-search-type"
                />
              </form>
              {products && (
                <div className="flex max-h-full flex-col gap-[25px] overflow-y-scroll">
                  {products.map((product, index) => (
                    <Item product={product} key={index} />
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button
            startIcon={<CancelIcon size={32} className="fill-current" />}
            variant="none"
            size="none"
            className="fixed right-[5vw] top-[5vh] z-[110] text-center text-primary"
            onClick={handleCancel}
          />

          <div
            className={cn(
              "fixed inset-0 z-[105] h-[100vh] w-[100vw] bg-overlay_color transition-opacity",
              {
                "block opacity-100": isSearchOpen,
                "hidden opacity-0": !isSearchOpen,
              },
            )}
          />
        </>
      )}
    </>
  );
}
