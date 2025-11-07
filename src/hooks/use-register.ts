import { authQueries } from "@/api";
import type { IRegisterData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (userData: IRegisterData) => {
      const { data } = await authQueries.register(userData);
      return data;
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (error) => console.log(error),
  });
};
