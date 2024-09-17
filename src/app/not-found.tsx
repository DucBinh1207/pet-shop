import Button from "@/components/common/button";
import SearchIcon from "@/components/common/icons/search-icon";
import Input from "@/components/common/input";

export default function NotFound() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex h-full w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <SearchIcon size={90} className="fill-current text-primary" />

          <div className="after:absolute after:bottom-[-15px] after:left-[50%] after:h-[8px] after:w-[80px] after:translate-x-[-50%] after:rounded-[5px] after:bg-primary after:content-['']"></div>
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Oops! That page can’t be found
        </h1>
        <p className="mx-auto mt-[20px] text-text_color">
          The page you are trying to reach is not available. Maybe try a search?
        </p>
        <div className="mx-auto mt-[30px] flex w-[265px] max-w-full gap-[5px]">
          <div className="flex-shrink flex-grow basis-auto">
            <Input placeholder="Search..." className="px-[12px] py-[9px]" />
          </div>
          <Button
            size="search"
            className="btn_icon_hover_animate group relative flex-1"
            startIcon={<SearchIcon size="small" className="fill-current" />}
          />
        </div>
      </div>
    </div>
  );
}
