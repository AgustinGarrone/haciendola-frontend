"use client";
import {
  useGetAllProductsQuery,
  useCountAllProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
} from "@/hooks/useProductClient";
import { Flex } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { ProductCard } from "../../../../../ui/components/ProductCard";
import { Product } from "@/types/models";
import Pagination from "./pagination";
import { confirmAlert, successAlert, errorAlert } from "@/helpers/alerts";
import { ProductForm } from "../../../../../ui/components/ProductForm";
import { CreateProductDto } from "@/types/products";
import { NoteCreation } from "./NoteCreation";

export const ListedProducts: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openProductForm, setOpenProductForm] = useState(false);
  const [productForEdit, setProductForEdit] = useState<
    CreateProductDto | undefined
  >();
  const [idToEdit, setIdToEdit] = useState<number | undefined>();
  const deleteProductMutation = useDeleteProductMutation();
  const updateProductMutation = useUpdateProductMutation();
  const createProductMutation = useCreateProductMutation();

  const { data, isLoading, refetch, isRefetching } =
    useGetAllProductsQuery(currentPage);
  const { data: productCount, isLoading: totalPagesLoading } =
    useCountAllProductsQuery();

  const handleOnPageChange = (e: number) => {
    setCurrentPage(e);
    refetch();
  };

  const handleOnDeleteCard = async (id: number) => {
    const actionConfirmed = await confirmAlert(
      "Eliminar?",
      "Seguro que desea eliminar este producto? esto es irreversible."
    );
    if (actionConfirmed) {
      deleteProductMutation.mutateAsync(id, {
        onSuccess: () => {
          refetch();
        },
        onError: () => errorAlert("Error al eliminar"),
      });
    }
  };

  const handleOnEditCard = (id: number) => {};

  const handleOpenProductForm = (id: number, data: CreateProductDto) => {
    if (!openProductForm) {
      setOpenProductForm(true);
      setProductForEdit(data);
      setIdToEdit(id);
    } else {
      setOpenProductForm(false);
      setProductForEdit(undefined);
      setIdToEdit(undefined);
    }
  };

  const handleFormOnClose = () => {
    setOpenProductForm(false);
    setProductForEdit(undefined);
    setIdToEdit(undefined);
  };

  const handleSubmitForm = (formData: CreateProductDto, id?: number) => {
    if (id) {
      updateProductMutation.mutateAsync(
        { id, updateProductDto: formData },
        {
          onSuccess: () => {
            refetch();
            setOpenProductForm(false);
            setProductForEdit(undefined);
            setIdToEdit(undefined);
            successAlert("Actualizado con éxito");
          },
          onError: () => errorAlert("Error al actualizar"),
        }
      );
    } else if (!id && formData) {
      createProductMutation.mutateAsync(formData, {
        onSuccess: () => {
          refetch();
          setOpenProductForm(false);
          setProductForEdit(undefined);
          setIdToEdit(undefined);
          successAlert("Creado con éxito");
        },
        onError: () => errorAlert("Error al crear"),
      });
    }
  };

  useEffect(() => {
    setProducts(data!);
  }, [data]);

  useEffect(() => {
    if (productCount && !totalPagesLoading) {
      const total = Math.ceil(productCount / 35);
      setTotalPages(total);
    }
  }, [productCount, totalPagesLoading]);

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <NoteCreation onCreateClick={setOpenProductForm} />
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
                id={product.id}
                handle={product.handle}
                title={product.title}
                description={product.description}
                SKU={product.SKU}
                grams={product.grams}
                stock={product.stock}
                price={product.price}
                comparePrice={product.comparePrice}
                barcode={product.barcode}
                onDelete={handleOnDeleteCard}
                onEdit={handleOpenProductForm}
              />
            ))
          ) : (
            <div style={{ height: "800px", marginTop: "1em" }}>Loading...</div>
          )}
        </Flex>
        {openProductForm && (
          <ProductForm
            isOpen={openProductForm}
            onClose={handleFormOnClose}
            onSubmit={handleSubmitForm}
            initialData={productForEdit && productForEdit}
            id={idToEdit && idToEdit}
          />
        )}
      </Flex>
    </Flex>
  );
};
