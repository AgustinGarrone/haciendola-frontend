'use client'
import { LoginMutationData } from "@/types/auth";
import { useMutation } from "react-query";
import AuthClient from "../clients/apiClient";
import { UserWithToken } from "@/types/models";

interface IJwt {
  token_type: string;
  access_token: string;
}


const useLoginMutation = () => {
  return useMutation<UserWithToken, Error, LoginMutationData>(
    async (data: LoginMutationData) => {
      const response = await AuthClient.login(data);
      return response;
    }
  );
};
export const useAuthClient = () => {
  const loginMutation = useLoginMutation();

  return {
    loginMutation,
  };
};

