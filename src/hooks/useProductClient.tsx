"use client";
import { useMutation, useQuery } from "react-query";
import productClient from "@/clients/productClient";
import { CreateProductDto } from "@/types/products";

export function useGetAllProductsQuery(page: number) {
  return useQuery(
    ["getAllProducts"],
    async () => {
      const response = await productClient.getAll(page);
      return response;
    },
    {
      staleTime: 1200000,
    }
  );
}

export function useCountAllProductsQuery() {
  return useQuery(["countAllProducts"], async () => {
    const response = await productClient.countAll();
    return response;
  });
}

export function useCreateProductMutation() {
  return useMutation(async (createProductDto: CreateProductDto) => {
    const response = await productClient.create(createProductDto);
    return response;
  });
}

export function useDeleteProductMutation() {
  return useMutation(async (id: number) => {
    const response = await productClient.delete(id);
    return response;
  });
}

export function useUpdateProductMutation() {
  return useMutation(
    async ({
      id,
      updateProductDto,
    }: {
      id: number;
      updateProductDto: CreateProductDto;
    }) => {
      const response = await productClient.update(id, updateProductDto);
      return response;
    }
  );
}
