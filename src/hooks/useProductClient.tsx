"use client";
import { useMutation, useQuery } from "react-query";
import { Product, UserWithToken } from "@/types/models";
import productClient from "@/clients/productClient";

export function useGetAllProductsQuery() {
    return useQuery(
      ['getAllProducts'],
      async () => {
        const response = await productClient.getAll();
        return response;
      },
    );
  }
