import { authQueries } from "@/api";
import { setToken } from "@/features/auth-slice";
import { useAppDispatch } from "@/hooks";
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
      const { data } = await authQueries.login(userData);
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
