import { create } from "zustand";

interface NavBarDisplay {
  display?: "none" | "flex";
}

interface NavBarDisplayStore {
  navBarDisplay: NavBarDisplay;
  setNavBarDisplay: (display: "none" | "flex") => void;
}

const useNavBarDisplayStore = create<NavBarDisplayStore>((set) => ({
  navBarDisplay: { display: "none" },
  setNavBarDisplay: (display) => set(() => ({ navBarDisplay: { display } })),
}));

export default useNavBarDisplayStore;
