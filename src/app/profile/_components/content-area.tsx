import Button from "@/components/common/button";
import LocateIcon from "@/components/common/icons/locate-icon";
import PenIcon from "@/components/common/icons/pen-icon";
import Input from "@/components/common/input";
import ToolTip from "@/components/common/tooltip";
import useOrder from "@/store/use-order";
import Link from "next/link";
import { Dispatch, SetStateAction, useMemo } from "react";
import OrderCard from "./order-card";
import { useShallow } from "zustand/react/shallow";
import { TABS } from "@/constants/profile-tabs";
import { order } from "@/types/order";
import OrderSection from "./order-section";
import { useRouter } from "next/navigation";

type props = {
  section: (typeof TABS)[number];
  setSection: Dispatch<SetStateAction<(typeof TABS)[number]>>;
};

export default function ContentArea({ section, setSection }: props) {
  const initialOrder: order = {
    id: "unknown",
    product: "unknown",
    quantity: "unknown",
    name: "unknown",
    telephone: 0,
    total: 0,
  };

  const router = useRouter();

  // Set isVisible to true for the selected section from TABS, and false for others
  const isVisible = useMemo(
    () =>
      TABS.map((value) => {
        return value === section;
      }),
    [section],
  );

  const { order, setOrder, clearOrder } = useOrder(
    useShallow((state) => ({
      order: state.order,
      setOrder: state.setOrder,
      clearOrder: state.clearOrder,
    })),
  );

  const RedirectOrderDetail = () => {
    setSection(TABS[1]);
    setOrder(initialOrder);
  };

  return (
    <div className="flex-1 px-[50px] py-[35px] text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
      {/* Dashboard Section */}
      {isVisible[0] && (
        <>
          <div className="mb-[25px] mt-[10px] flex flex-col xxx-smallest-screen:text-center">
            <h2 className="text-[22px] font-medium leading-[28px] text-primary">
              Recent Orders
            </h2>

            {/*Set to true if there are recent orders; set to false if there are no recent orders.*/}
            {false ? (
              <>
                <table className="mt-[20px] w-full xxx-smallest-screen:block">
                  <thead className="w-full border-b border-solid border-light_gray_color_second xxx-smallest-screen:hidden">
                    <tr className="w-full text-left text-[13px] uppercase leading-[1] tracking-[0.02em] text-text_color xxx-smallest-screen:block">
                      <th className="w-[20%] pb-[15px] font-normal">Order</th>
                      <th className="w-[10%] pb-[15px] font-normal">Items</th>
                      <th className="w-[40%] pb-[15px] font-normal">Date</th>
                      <th className="w-[15%] pb-[15px] font-normal">Total</th>
                      <th className="w-[15%] pb-[15px] font-normal">Status</th>
                      <th className="w-[10%] pb-[15px] font-normal">Action</th>
                    </tr>
                  </thead>

                  <tbody className="w-full text-left xxx-smallest-screen:block">
                    <OrderCard RedirectOrderDetail={RedirectOrderDetail} />

                    <OrderCard RedirectOrderDetail={RedirectOrderDetail} />

                    <OrderCard RedirectOrderDetail={RedirectOrderDetail} />
                  </tbody>
                </table>

                <div className="mt-[20px] flex justify-center">
                  <Button
                    variant="primary"
                    size="xsm"
                    className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
                    onClick={() => {
                      setSection(TABS[1]);
                      clearOrder();
                    }}
                  >
                    View All
                  </Button>
                </div>
              </>
            ) : (
              <div className="mt-[20px] flex flex-col items-center gap-[20px]">
                <h3 className="mb-[10px]">No order has been made yet.</h3>
                <div>
                  <Button
                    variant="primary"
                    size="xsm"
                    className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
                    onClick={() => {
                      router.push("/");
                    }}
                  >
                    browser products
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mb-[25px] flex flex-col xxx-smallest-screen:text-center">
            <h2 className="text-[22px] font-medium leading-[28px] text-primary">
              Your Shipping Address
            </h2>

            <div className="mt-[20px] flex items-center gap-[10px]">
              <LocateIcon size={20} className="fill-current text-primary" />

              <span className="text-[16px] leading-[1.5] tracking-[0.02em] text-text_color">
                54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
              </span>

              <ToolTip
                value="Edit"
                element={
                  <Button
                    size="none"
                    variant="icon"
                    startIcon={
                      <PenIcon size={20} className="ml-[5px] fill-current" />
                    }
                    onClick={() => {
                      setSection(TABS[2]);
                    }}
                  ></Button>
                }
              />
            </div>
          </div>

          <div className="flex flex-col xxx-smallest-screen:text-center">
            <h2 className="text-[22px] font-medium leading-[28px] text-primary">
              Account Details
            </h2>

            <div className="mt-[20px] flex items-center justify-center gap-[10px]">
              <table className="min-w-[50%] xxx-smallest-screen:block">
                <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
                  <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                    <th className="min-w-[50%] py-[14px] font-medium text-primary">
                      Name :
                    </th>
                    <td className="min-w-[50%] py-[14px]">Tran Duc Binh</td>
                  </tr>

                  <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                    <th className="min-w-[50%] py-[14px] font-medium text-primary">
                      Telephone :
                    </th>
                    <td className="min-w-[50%] py-[14px]">0123 987 456</td>
                  </tr>

                  <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                    <th className="min-w-[50%] py-[14px] font-medium text-primary">
                      Email :
                    </th>
                    <td className="min-w-[50%] py-[14px]">example@gmail.com</td>
                  </tr>

                  <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                    <th className="min-w-[50%] py-[14px] font-medium text-primary">
                      Nationality :
                    </th>
                    <td className="min-w-[50%] py-[14px]">Viet Nam</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-[20px] flex justify-center">
              <Button
                variant="primary"
                size="xsm"
                className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
                onClick={() => {
                  setSection(TABS[3]);
                }}
              >
                Edit
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Order Section */}
      {isVisible[1] && (
        <div className="mt-[10px] flex flex-col">
          {/* 
            If there is an order to display, render the order details. 
            Otherwise, render the order table.
          */}
          {order ? (
            <div className="flex flex-col">
              <h3 className="mb-[10px]">
                Order #
                <span className="font-bold uppercase text-black">
                  PH1244721
                </span>
                &nbsp;was placed on&nbsp;
                <span className="font-bold capitalize text-black">
                  Sunday,April 21,2024
                </span>
                &nbsp;and is currently&nbsp;
                <span className="font-bold capitalize text-black">
                  processing
                </span>
                .
              </h3>

              <div className="mb-[45px] mt-[30px] flex flex-col">
                <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                  Order Details
                </h2>

                <table className="xxx-smallest-screen:block">
                  <thead className="xxx-smallest-screen:hidden">
                    <tr className="uppercase xxx-smallest-screen:block">
                      <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                        product
                      </th>
                      <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                        total
                      </th>
                    </tr>
                  </thead>

                  <tbody>
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

                  <tfoot>
                    <tr className="uppercase xxx-smallest-screen:block">
                      <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                        subtotal :
                      </th>
                      <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                        <span>15.500.000</span> vnd
                      </td>
                    </tr>

                    <tr className="uppercase xxx-smallest-screen:block">
                      <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                        Shipping :
                      </th>
                      <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
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
          ) : (
            <OrderSection
              RedirectOrderDetail={RedirectOrderDetail}
              orderList={[initialOrder]}
            />
          )}
        </div>
      )}

      {/* Address Section */}
      {isVisible[2] && (
        <div className="mt-[10px] flex max-w-[430px] flex-col">
          <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
            Address
          </h2>

          <form action="" className="mt-[25px] flex flex-col gap-[10px]">
            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="province">
                Province *
              </label>
              <Input id="province"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="district">
                District *
              </label>
              <Input id="district"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="ward">
                Ward *
              </label>
              <Input id="ward"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="street">
                Street *
              </label>
              <Input id="street"></Input>
            </div>

            <Button
              type="submit"
              size="xsm"
              variant="secondary"
              className="mt-[35px] font-bold"
            >
              Save changes
            </Button>
          </form>
        </div>
      )}

      {/* Account Details Section */}
      {isVisible[3] && (
        <div
          className="mt-[10px] flex max-w-[430px] flex-col"
          id="account_details"
        >
          <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
            Account Details
          </h2>

          <form
            action=""
            className="mt-[25px] flex max-w-[430px] flex-col gap-[10px]"
          >
            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="user_name">
                Name *
              </label>
              <Input id="user_name"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="user_telephone">
                Telephone *
              </label>
              <Input id="user_telephone"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="user_email">
                Email *
              </label>
              <Input id="user_email"></Input>
            </div>

            <div className="flex flex-col justify-start gap-[10px]">
              <label className="text-primary" htmlFor="user_nationality">
                Nationnality *
              </label>
              <Input id="user_nationality"></Input>
            </div>

            <fieldset className="mt-[40px] flex max-w-[430px] flex-col gap-[10px]">
              <legend className="mb-[25px] text-[22px] font-medium leading-[28px] text-primary">
                Password Change
              </legend>

              <div className="flex flex-col justify-start gap-[10px]">
                <label className="text-primary" htmlFor="password">
                  Current password (leave blank to leave unchanged)
                </label>
                <Input id="password"></Input>
              </div>

              <div className="flex flex-col justify-start gap-[10px]">
                <label className="text-primary" htmlFor="new_password">
                  New password (leave blank to leave unchanged)
                </label>
                <Input id="new_password"></Input>
              </div>

              <div className="flex flex-col justify-start gap-[10px]">
                <label className="text-primary" htmlFor="confirm_password">
                  Confirm new password
                </label>
                <Input id="confirm_password"></Input>
              </div>
            </fieldset>
          </form>

          <Button
            type="submit"
            size="xsm"
            variant="secondary"
            className="mt-[35px] font-bold"
          >
            Save changes
          </Button>
        </div>
      )}
    </div>
  );
}
