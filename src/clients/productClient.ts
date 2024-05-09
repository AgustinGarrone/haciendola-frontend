"use client";
import RESTClient from "./RESTClient";
import { Product, UserWithToken } from "@/types/models";

class ProductClient extends RESTClient {
  private allowedDomain: string | undefined;

  constructor() {
    super();
    this.allowedDomain = process.env.REACT_APP_DOMAIN;
  }

  async getAll(): Promise<Product[]> {
    const response = await this.axios.get(`product/`);
    return response.data;
  }

  async create(data: any): Promise<Product> {
    const response = await this.axios.post("product/", data);
    return response.data;
  }
}

const productClient = new ProductClient();

export default productClient;
