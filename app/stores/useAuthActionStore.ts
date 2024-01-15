import { create } from "zustand";

interface AuthAction {
  action?: "LOGIN" | "SIGNUP";
}

interface AuthActionStore {
  authAction: AuthAction;
  setAction: (action: "LOGIN" | "SIGNUP") => void;
}

const useAuthActionStore = create<AuthActionStore>((set) => ({
  authAction: {},
  setAction: (action) => set(() => ({ authAction: { action } })),
}));

export default useAuthActionStore;
