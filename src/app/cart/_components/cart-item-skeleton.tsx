export default function CartItemSkeleton() {
  return (
    <tr className="medium-screen:item-center group medium-screen:relative medium-screen:mb-[15px] medium-screen:flex medium-screen:w-full medium-screen:flex-wrap medium-screen:border-b medium-screen:border-solid medium-screen:border-light_gray_color_second medium-screen:pb-[20px] medium-screen:pl-[90px]">
      <td className="relative w-[90px] border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] medium-screen:absolute medium-screen:left-0 medium-screen:top-0 medium-screen:h-full medium-screen:w-[70px] medium-screen:border-b-0 medium-screen:p-0">
        <div className="before:absolute before:bottom-0 before:left-[-40px] before:top-0 before:block before:w-[40px] before:content-[''] up-medium-screen:before:left-[-40px] medium-screen:before:content-none">
        </div>
        <div className="relative block h-[75px] w-[90px] medium-screen:h-[60px] medium-screen:w-[70px]">
          <div className="skeleton skeleton-image h-full w-full animate-pulse bg-gray-200" />
        </div>
      </td>
      <td className="border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] up-medium-screen:w-[75%] medium-screen:mb-[20px] medium-screen:block medium-screen:w-full medium-screen:flex-1 medium-screen:basis-auto medium-screen:border-b-0 medium-screen:p-0">
        <div className="flex flex-col pr-[35px] text-[13px] font-normal leading-[16px] tracking-[0.005em] text-text_color">
          <div className="skeleton skeleton-text h-[16px] w-[150px] animate-pulse bg-gray-300" />
          <div className="skeleton skeleton-text mt-[10px] h-[14px] w-[120px] animate-pulse bg-gray-300" />
          <div className="skeleton skeleton-text mt-[10px] h-[14px] w-[200px] animate-pulse bg-gray-300" />
          <div className="skeleton skeleton-text mt-[10px] h-[14px] w-[100px] animate-pulse bg-gray-300" />
        </div>
      </td>
      <td className="border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] medium-screen:block medium-screen:border-b-0 medium-screen:p-0">
        <div className="relative mb-[10px] mr-[5px] inline-flex h-[36px] flex-nowrap overflow-hidden rounded-[18px] border border-solid border-light_gray_color_second">
          <div className="skeleton skeleton-button h-[32px] w-[32px] animate-pulse bg-gray-300" />
          <div className="skeleton skeleton-input h-[32px] w-[50px] animate-pulse bg-gray-300" />
          <div className="skeleton skeleton-button h-[32px] w-[32px] animate-pulse bg-gray-300" />
        </div>
      </td>
      <td className="border-b border-solid border-light_gray_color_second py-[20px] text-right medium-screen:block medium-screen:flex-1 medium-screen:basis-auto medium-screen:border-b-0 medium-screen:p-0">
        <div className="skeleton skeleton-price h-[20px] w-[120px] animate-pulse bg-gray-300" />
      </td>
    </tr>
  );
}
