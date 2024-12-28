"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./input-field";
import useMutation from "@/hooks/use-mutation";
import { toastError } from "@/utils/toast";
import OrderSummary from "./order-summary";
import { CreateOrder, Payment } from "@/services/api/order-api";
import { PaymentMethod } from "@/constants/payment-method";
import useCoupon from "@/store/use-coupon";
import { shippingPrice } from "@/utils/shipping-price";
import useCartItems from "@/hooks/users/useCartItems";
import CartIcon from "@/components/common/icons/cart-icon";
import Button from "@/components/common/button";
import { useRouter } from "next/navigation";
import useProductBuyNow from "@/store/use-product-buy-now";
import { useShallow } from "zustand/react/shallow";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  telephoneNumber: z
    .string()
    .min(3, "Phone number must be at least 3 characters")
    .max(20, "Phone number can have a maximum of 20 characters"),
  email: z.string().email("Invalid email format"),
  province: z.string().min(1, "Province is required"),
  district: z.string().min(1, "District is required"),
  ward: z.string().min(1, "Ward is required"),
  street: z.string().min(1, "Street is required"),
  note: z.string().optional(),
  paymentMethod: z.string(),
});

export type BillFormType = z.infer<typeof schema>;

const orderType = schema.extend({
  totalPrice: z.string(),
  subtotalPrice: z.string(),
  shippingPrice: z.string(),
  voucherCode: z.string().optional(),
});

export type OrderFormType = z.infer<typeof orderType>;

export default function BillDetails() {
  const { coupon } = useCoupon((state) => ({
    coupon: state.coupon,
  }));
  const router = useRouter();

  const { cartItems } = useCartItems();

  const { productBuyNow } = useProductBuyNow(
    useShallow((state) => ({
      productBuyNow: state.productBuyNow,
    })),
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BillFormType>({
    defaultValues: {
      name: "",
      telephoneNumber: "",
      email: "",
      province: "",
      district: "",
      ward: "",
      street: "",
      note: "",
      paymentMethod: PaymentMethod.COD,
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    fetcher: CreateOrder,
    options: {
      onSuccess: async (data) => {
        try {
          if (data && data.idOrder) {
            if (data.paymentMethod === "Trả tiền khi nhận hàng") {
              const url =
                "https://pet-shop-web-pink.vercel.app/cart/order-success?id_order=" +
                data.idOrder;
              window.location.href = url;
              return;
            }

            const dataPayment = {
              idOrder: data.idOrder,
              amount: data.amount,
            };

            const paymentResponse = await Payment({ data: dataPayment });
            if (paymentResponse) {
              window.location.href = paymentResponse.orderUrl;
            }
          }
        } catch (error) {}
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: BillFormType) => {
    if (productBuyNow) {
      const subTotal = productBuyNow.price * productBuyNow.quantity;

      const shipping = subTotal ? shippingPrice(subTotal) : 0;

      let total = subTotal + shipping;

      let discountAmount = 0;

      if (coupon && total) {
        discountAmount = (total * coupon.percent) / 100;
        total = total - discountAmount;
      }

      if (total && subTotal && shipping !== null && shipping !== undefined) {
        const orderData: OrderFormType = {
          ...data,
          totalPrice: total.toString(),
          subtotalPrice: subTotal.toString(),
          shippingPrice: shipping.toString(),
          voucherCode: coupon.code,
        };
        mutate({ data: orderData });
      }
    } else {
      const subTotal = cartItems?.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

      const shipping = subTotal ? shippingPrice(subTotal) : 0;

      let total = subTotal && subTotal + shipping;

      let discountAmount = 0;

      if (coupon && total) {
        discountAmount = (total * coupon.percent) / 100;
        total = total - discountAmount;
      }

      if (total && subTotal && shipping !== null && shipping !== undefined) {
        const orderData: OrderFormType = {
          ...data,
          totalPrice: total.toString(),
          subtotalPrice: subTotal.toString(),
          shippingPrice: shipping.toString(),
          voucherCode: coupon.code,
        };
        // console.log({ orderData });
        mutate({ data: orderData });
      }
    }
  });

  if (cartItems?.length === 0 && productBuyNow === null) {
    return (
      <div className="xx-x-small-screen:w-full mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] x-small-screen:mb-[20px] x-small-screen:mt-[10px]">
        <div className="flex h-full flex-col items-center px-[60px] py-[125px] small-screen:py-[85px]">
          <div>
            <CartIcon size={90} className="fill-current text-primary" />
          </div>
          <h2 className="xxx-x-small-screen:text-[22px] mt-[35px] max-w-[800px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
            Giỏ hàng của bạn đang trống
          </h2>
          <div className="mt-[45px]">
            <Button
              onClick={() => {
                router.push("/");
              }}
            >
              Trở về cửa hàng
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex h-full w-full text-text_color small-screen:items-start small-screen:px-[20px] small-screen:pb-[20px] smallest-screen:flex-col"
    >
      <div className="relative flex-1 px-[40px] py-[20px] medium-screen:px-[30px] smallest-screen:w-full smallest-screen:max-w-full smallest-screen:px-0">
        <div className="flex flex-col py-[15px]">
          <h3 className="relative text-left text-[22px] font-medium leading-[1.27px] text-primary">
            Chi tiết hóa đơn
          </h3>

          <div className="mt-[15px]">
            <InputField
              id='"name'
              label="Họ và tên"
              placeholder="Nhập tên của bạn "
              {...register("name")}
              error={errors.name?.message}
            />

            <InputField
              id="phone"
              label="Số điện thoại"
              placeholder="Nhập số điện thoại của bạn "
              {...register("telephoneNumber")}
              error={errors.telephoneNumber?.message}
            />

            <InputField
              id="email"
              label="Email"
              placeholder="Nhập email của bạn "
              {...register("email")}
              error={errors.email?.message}
            />

            <InputField
              id="province"
              label="Tỉnh/ Thành phố"
              placeholder="Nhập tỉnh/ thành phố "
              {...register("province")}
              error={errors.province?.message}
            />

            <InputField
              id="district"
              label="Quận/ Huyện"
              placeholder="Nhập quận/ huyện "
              {...register("district")}
              error={errors.district?.message}
            />

            <InputField
              id="ward"
              label="Xã/ Phường"
              placeholder="Nhập xã/ phường "
              {...register("ward")}
              error={errors.ward?.message}
            />

            <InputField
              id="street"
              label="Số đường"
              placeholder="Nhập số đường "
              {...register("street")}
              error={errors.street?.message}
            />

            <div className="mt-[25px]">
              <span className="clear-right mb-[20px]">
                <label
                  className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
                  htmlFor="note"
                >
                  Ghi chú
                </label>
                <textarea
                  className="h-auto min-h-[200px] w-full resize-none rounded-[3px] border border-solid border-input_border_color bg-background_color px-[12px] py-[9px] font-quicksand text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary focus:border-primary focus:outline-none"
                  placeholder="Nhập ghi chú về địa chỉ giao hàng của bạn..."
                  id="note"
                  {...register("note")}
                />
                {errors.name && (
                  <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
                    {errors.name?.message}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <OrderSummary register={register} />
    </form>
  );
}
