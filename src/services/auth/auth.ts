import { api } from "@/api";
import type { ILoginData, ILoginResponseData, IRegisterData } from "@/types";

export const authService = {
  login: (userData: ILoginData) => {
    return api.post<ILoginResponseData>("/login", userData);
  },
  register: (userData: IRegisterData) => {
    return api.post("/register", userData);
  },
  logout: () => {
    return api.post("/logout");
  },
};
