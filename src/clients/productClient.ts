"use client";
import RESTClient from "./RESTClient";
import { Product, UserWithToken } from "@/types/models";

class ProductClient extends RESTClient {
  private allowedDomain: string | undefined;

  constructor() {
    super();
    this.allowedDomain = process.env.REACT_APP_DOMAIN;
  }

  async getAll(page: number): Promise<Product[]> {
    const response = await this.axios.get(`product?page=${page}`);
    return response.data;
  }

  async create(data: any): Promise<Product> {
    const response = await this.axios.post("product/", data);
    return response.data;
  }

  async countAll(): Promise<number> {
    const response = await this.axios.get("product/count");
    return response.data;
  }

  async delete(id: number): Promise<boolean> {
    const response = await this.axios.delete(`product/${id}`);
    return response.data;
  }

  async update(id: number, data: any): Promise<void> {
    await this.axios.put(`product/${id}`, data);
  }
}

const productClient = new ProductClient();

export default productClient;
