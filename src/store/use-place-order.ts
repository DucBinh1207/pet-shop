import { CouponType } from "@/types/coupon";
import { create } from "zustand";

type CouponStore = {
  coupon: CouponType;
  clearCoupon: () => void;
  setCoupon: (couponData: CouponType) => void;
};

const defaultCoupon: CouponType = {
  id: "",
  code: "",
  percent: 0,
  dateCreated: "",
};

const useCoupon = create<CouponStore>((set) => ({
  coupon: defaultCoupon,
  clearCoupon: () => set({ coupon: defaultCoupon }),
  setCoupon: (couponData: CouponType) => set({ coupon: couponData }),
}));

export default useCoupon;
