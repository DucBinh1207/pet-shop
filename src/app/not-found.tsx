import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Input from "@/components/common/Input/page";
import Button from "@/components/common/Button/page";
import ToolTip from "@/components/common/Tooltip/page";
import { SearchIcon } from "@/components/common/Icons";

export default function NotFound() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px]">
      <div className="flex h-full w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="5x"
            className="text-primary"
          />
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
          <ToolTip
            value="Search . . . "
            button={
              <Button
                className="btn_icon_hover_animate h group peer relative flex-1 border-primary bg-white px-[15px] py-[0px] text-[16px] leading-[0px] tracking-[0.025em] hover:bg-primary"
                startIcon={
                  <div className="inline bg-primary group-hover:bg-white">
                    <SearchIcon size="small" />
                  </div>
                }
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
