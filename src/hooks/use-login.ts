import { authService } from "@/services";
import type { ILoginData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/hooks";
import { setToken } from "@/features/authSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: async (userData: ILoginData) => {
      const { data } = await authService.login(userData);
      return data;
    },
    onSuccess: (data) => {
      dispatch(setToken(data.token));
      navigate("/users");
    },
    onError: (error) => console.log(error),
  });
};
