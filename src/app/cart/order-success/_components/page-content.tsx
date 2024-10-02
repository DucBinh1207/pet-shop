import BreadCrumb from "@/components/bread-crumb";
import CartIcon from "@/components/common/icons/cart-icon";
import Link from "next/link";

export default function PageContent() {
  return (
    <>
      <BreadCrumb
        pathLink={["/cart", "/cart/order-success"]}
        pathName={["Cart", "Order Success"]}
      />
      <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
        <div className="flex flex-col px-[45px] py-[65px] text-[13px] font-normal leading-[1] tracking-[0.02em] text-text_color">
          <div className="flex flex-col items-center">
            <CartIcon
              size={60}
              className="fill-current text-dark_orange_color"
            />
            <h2 className="mt-[25px] text-center font-quicksand text-[32px] font-bold leading-[1.125] tracking-[-0.015em] text-primary down-medium-screen:text-[26px] smallest-screen:text-[26px]">
              Cảm ơn bạn. Đơn hàng của bạn đã được tiếp nhận.
            </h2>
          </div>

          <ul className="mt-[50px] flex justify-between text-left smallest-screen:flex-wrap xxx-smallest-screen:flex-col">
            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Order Code :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                #PH1244721
              </span>
            </li>

            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Date :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                Sunday,April 21,2024
              </span>
            </li>

            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Payment Method :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                Direct bank transfer
              </span>
            </li>

            <li className="mb-[35px] up-smallest-screen:shrink-[1] up-smallest-screen:text-right smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Total :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                15.550.000 VND
              </span>
            </li>
          </ul>

          <div className="mx-auto max-w-[530px]">
            <div className="mb-[45px] mt-[30px] flex flex-col">
              <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                Order Details
              </h2>

              <table className="xxx-smallest-screen:block">
                <thead className="xxx-smallest-screen:hidden">
                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                      product
                    </th>
                    <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                      total
                    </th>
                  </tr>
                </thead>

                <tbody className="xxx-smallest-screen:block">
                  <tr className="xxx-smallest-screen:block">
                    <td className="w-[70%] pb-[6px] pt-[15px] text-left text-[13px] font-normal leading-[1]">
                      <div className="flex flex-col">
                        <div className="text-[14px] leading-[1.27] text-primary">
                          <Link
                            href="/pets/{id}"
                            className="hover:text-secondary"
                          >
                            Husky
                          </Link>
                          <span> ×&nbsp;3 </span>
                        </div>
                      </div>
                    </td>

                    <td className="pb-[6px] pt-[15px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>15.000.000</span>&nbsp;VND
                    </td>
                  </tr>

                  <tr className="xxx-smallest-screen:block">
                    <td className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-left text-[13px] font-normal leading-[1]">
                      <div className="flex flex-col">
                        <div className="text-[14px] leading-[1.27] text-primary">
                          <Link
                            href="/pets/{id}"
                            className="hover:text-secondary"
                          >
                            Dog food
                          </Link>
                          <span> ×&nbsp;2 </span>
                        </div>
                        <ul className="mt-[5px] flex gap-[10px]">
                          <li>
                            <span className="capitalize">weight : </span>
                            <span className="text-primary"> 5kg </span>
                          </li>
                          <li>
                            <span className="capitalize">Ingredient : </span>
                            <span className="text-primary"> beef </span>
                          </li>
                        </ul>
                      </div>
                    </td>

                    <td className="border-b border-solid border-light_gray_color_second pb-[15px] pt-[6px] text-right font-quicksand text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>500.000</span>&nbsp;VND
                    </td>
                  </tr>
                </tbody>

                <tfoot className="xxx-smallest-screen:block">
                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                      subtotal :
                    </th>

                    <td className="w-auto border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>15.500.000</span> vnd
                    </td>
                  </tr>

                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                      Shipping :
                    </th>

                    <td className="w-[30%] border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>50.000</span> vnd
                    </td>
                  </tr>

                  <tr className="xxx-smallest-screen:block">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                      payment method :
                    </th>
                    <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary">
                      Direct bank transfer
                    </td>
                  </tr>

                  <tr className="xxx-smallest-screen:block">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                      Total :
                    </th>
                    <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right font-quicksand text-[24px] font-bold leading-[23px] tracking-[-0.02em] text-secondary">
                      <span>15.550.000</span> VND
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mb-[40px] flex flex-wrap">
              <div className="flex w-[220px] flex-col">
                <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                  Bill Detail
                </h2>
                <ul className="flex flex-col">
                  <li>Tran Duc Binh</li>
                  <li>0123 987 456</li>
                  <li>example@gmail.com</li>
                  <li>Viet nam</li>
                </ul>
              </div>

              <div className="flex w-[220px] flex-col">
                <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                  Address Detail
                </h2>
                <ul className="flex flex-col">
                  <li>Da Nang</li>
                  <li>Lien Chieu</li>
                  <li>Hoa Khanh Bac</li>
                  <li>54 Nguyen Luong Bang</li>
                </ul>
              </div>
            </div>

            <div>
              <p>
                <i className="font-bold">Note</i> : Đồ dễ vỡ shipper cẩn thận
                giúp em, nếu không liên lạc được thì gọi cho số 0555666777
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
