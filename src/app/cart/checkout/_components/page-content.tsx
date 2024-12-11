import BreadCrumb from "@/components/bread-crumb";
import BillDetails from "./bill-details";

export default function PageContent() {
  return (
    <>
      <BreadCrumb
        pathLink={["/cart", "/cart/checkout"]}
        pathName={["Giỏ hàng", "Thanh toán"]}
      />
      <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
        <BillDetails />
      </div>
    </>
  );
}
