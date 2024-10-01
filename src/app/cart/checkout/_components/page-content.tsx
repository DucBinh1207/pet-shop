import BreadCrumb from "@/components/bread-crumb";
import BillDetails from "./bill-details";
import OrderSummary from "./order-summary";

export default function PageContent() {
  return (
    <>
      <BreadCrumb
        pathLink={["cart", "checkout"]}
        pathName={["Cart", "Checkout"]}
      />
      <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
        <div className="flex h-full w-full text-text_color small-screen:items-center small-screen:px-[20px] small-screen:pb-[20px] smallest-screen:flex-col">
          <BillDetails />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}
