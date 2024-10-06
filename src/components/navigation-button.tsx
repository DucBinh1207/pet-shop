import cn from "@/utils/style/cn";

type props = {
  prevClass: string;
  nextClass: string;
  typeReference: "peer" | "group";
};

export default function NavigationButton({
  prevClass,
  nextClass,
  typeReference,
}: props) {
  return (
    <div
      className={cn("hidden opacity-0 hover:block hover:!opacity-100", {
        "peer-hover:block peer-hover:opacity-100": typeReference === "peer",
        "group-hover:block group-hover:opacity-100": typeReference === "group",
      })}
    >
      <div
        className={`${prevClass} absolute left-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_prev bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']`}
      />

      <div
        className={`${nextClass} absolute right-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_next bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']`}
      />
    </div>
  );
}
