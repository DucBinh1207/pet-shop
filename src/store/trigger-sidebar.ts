import { create } from "zustand";

type SidebarStore = {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const triggerSidebar = create<SidebarStore>((set) => ({
  sidebar: false,
  openSidebar: () => set({ sidebar: true }),
  closeSidebar: () => set({ sidebar: false }),
}));

export default triggerSidebar;
