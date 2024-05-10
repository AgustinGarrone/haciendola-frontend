"use client";
import { LoginMutationData, RegisterMutationData } from "@/types/auth";
import RESTClient from "./RESTClient";
import { UserWithToken } from "@/types/models";

class AuthClient extends RESTClient {
  private allowedDomain: string | undefined;

  constructor() {
    super();
    this.allowedDomain = 'http://localhost:4000/';
  }

  async login(data: LoginMutationData): Promise<UserWithToken> {
    const response = await this.axios.post(`auth/login`, data);
    return response.data;
  }

  async register(data: RegisterMutationData): Promise<UserWithToken> {
    const response = await this.axios.post("auth/register", data);
    return response.data;
  }
}

const authClient = new AuthClient();

export default authClient;
