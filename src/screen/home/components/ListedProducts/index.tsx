"use client";
import { useGetAllProductsQuery } from "@/hooks/useProductClient";
import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { ProductCard } from "../../../../../ui/components/ProductCard";
import { Product } from "@/types/models";

export const ListedProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { data, isLoading } = useGetAllProductsQuery();

  useEffect(() => {
    setProducts(data!);
    console.log(data);
  }, [data]);


  return (
    <Flex w="80%" alignItems="center" justifyContent="center" flexWrap="wrap">
      {data && !isLoading ? (
        data!.map((product) => (
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
        <div>Loading...</div>
      )}
    </Flex>
  );
};
