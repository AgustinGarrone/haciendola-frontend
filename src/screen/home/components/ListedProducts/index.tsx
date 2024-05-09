"use client";
import {
  useGetAllProductsQuery,
  useCountAllProductsQuery,
} from "@/hooks/useProductClient";
import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { ProductCard } from "../../../../../ui/components/ProductCard";
import { Product } from "@/types/models";
import Pagination from "./pagination";

export const ListedProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { data, isLoading, refetch, isRefetching } =
    useGetAllProductsQuery(currentPage);
  const { data: productCount, isLoading: totalPagesLoading } =
    useCountAllProductsQuery();

  const handleOnPageChange = (e) => {
    setCurrentPage(e);
    refetch();
  };

  useEffect(() => {
    setProducts(data!);
  }, [data]);

  useEffect(() => {
    if (productCount && !totalPagesLoading) {
      const total = Math.ceil(productCount / 35);
      setTotalPages(total);
    }
  }, [productCount]);

  return (
    <Flex
      w="80%"
      m=" 10px auto"
      alignItems="center"
      justifyContent="center"
      direction="column"
    >
      <Pagination
        currentPage={currentPage}
        onPageChange={handleOnPageChange}
        totalPages={totalPages}
      />
      <Flex
        w="100%"
        mt="2em"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
      >
        {products && !isLoading && !isRefetching ? (
          products.map((product) => (
            <ProductCard
              key={product.handle}
              handle={product.handle}
              title={product.title}
              description={product.description}
              SKU={product.SKU}
              grams={product.grams}
              stock={product.stock}
              price={product.price}
              comparePrice={product.comparePrice}
              barcode={product.barcode}
              onDelete={() => console.log(0)}
              onEdit={() => console.log(0)}
            />
          ))
        ) : (
          <div style={{ marginTop: "1em" }}>Loading...</div>
        )}
      </Flex>
    </Flex>
  );
};
