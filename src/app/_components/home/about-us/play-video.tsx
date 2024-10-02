import Button from "@/components/common/button";
import CancelIcon from "@/components/common/icons/cancel-icon";
import PlayVideoIcon from "@/components/common/icons/play-video-icon";
import useBlockScroll from "@/hooks/use-block-scroll";
import cn from "@/utils/style/cn";
import { useState } from "react";

export default function PlayVideo() {
  const [isOpen, setIsOpen] = useState(false);

  useBlockScroll(isOpen);

  return (
    <>
      <Button
        startIcon={<PlayVideoIcon size={12} className="fill-current" />}
        variant="secondary"
        size="xsm"
        className="flex items-center gap-[10px] text-center text-[13px] font-bold leading-[16px] tracking-[0.05em]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        See on Video
      </Button>

      {isOpen && (
        <>
          <div className="fixed left-[50%] top-[50%] z-[90] h-[90vh] w-[90vw] translate-x-[-50%] translate-y-[-50%] p-[50px] small-screen:h-0 small-screen:pb-[56.25%]">
            <iframe
              className="absolute left-0 top-0 z-[100] h-full w-full"
              src="https://www.youtube.com/embed/Y6cwMDpARao?autoplay=1&rel=0&si=-Ahx4FeFrsBCfiAt"
              title="Pet Shop Tour"
              allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <Button
            startIcon={<CancelIcon size={32} className="fill-current" />}
            variant="none"
            size="none"
            className="fixed right-[1vw] top-[1vh] z-[101] text-center"
            onClick={() => {
              setIsOpen(false);
            }}
          ></Button>

          <div
            className={cn(
              "fixed inset-0 z-[89] h-[100vh] w-[100vw] bg-overlay_color transition-opacity",
              {
                "block opacity-100": isOpen,
                "hidden opacity-0": !isOpen,
              },
            )}
          ></div>
        </>
      )}
    </>
  );
}
