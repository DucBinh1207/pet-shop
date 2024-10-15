import { UserType } from "@/types/user";
import { create } from "zustand";

type UserStore = {
  user: UserType;
  setUser: (user: UserType) => void;
  clearUser: () => void;
};
const userDefault: UserType = {
  id: "",
  email: "",
  passwordHash: "",
  name: "",
  nationality: "",
  telephoneNumber: "",
  province: "",
  district: "",
  ward: "",
  street: "",
};

const useSidebar = create<UserStore>((set) => ({
  user: userDefault,
  setUser: (user: UserType) => set({ user: user }),
  clearUser: () => set({ user: userDefault }),
}));

export default useSidebar;
