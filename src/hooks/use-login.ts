import { toast } from "@/features";
import { setToken } from "@/features/authSlice";
import { useAppDispatch } from "@/hooks";
import { authService } from "@/services";
import type { ILoginData } from "@/types";
import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const errorNotify = (text: string) =>
  //   toast({
  //     title: text,
  //     variant: "error",
  //   });

  return useMutation({
    mutationFn: async (userData: ILoginData) => {
      const { data } = await authService.login(userData);
      return data;
    },
    onSuccess: (data) => {
      dispatch(setToken(data.token));
      navigate("/users");
    },
    onError: (error: AxiosError) => {
      // errorNotify(error.message); // например
      console.log(error);
    },
  });
};
