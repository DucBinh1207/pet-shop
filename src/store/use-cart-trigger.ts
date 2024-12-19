import { create } from "zustand";

type CartTriggerStore = {
  triggerNumber: number;
  increaseTriggerNumber: () => void;
};

const useCartTrigger = create<CartTriggerStore>((set) => ({
  triggerNumber: 0,
  increaseTriggerNumber: () =>
    set((state) => ({ triggerNumber: state.triggerNumber + 1 })),
}));

export default useCartTrigger;
