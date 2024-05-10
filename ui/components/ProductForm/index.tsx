import React, { useEffect, useState } from "react";
import * as z from "zod";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { CreateProductDto, FormProductInputs } from "@/types/products";
import { convertToFormInputs } from "./helpers";
import { CreateProductSchema } from "./schema";

enum FormStatus {
  CREATE = "CREATE",
  EDIT = "EDIT",
}

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: CreateProductDto, id: number) => void;
  initialData?: CreateProductDto;
  id?: number;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  onSubmit,
  initialData = {
    handle: "",
    title: "",
    description: "",
    SKU: "",
    grams: 0,
    stock: 0,
    price: 0,
    comparePrice: 0,
    barcode: "",
  },
  id,
}) => {
  const [formData, setFormData] = useState<FormProductInputs>(
    convertToFormInputs(initialData)
  );
  const [error, setError] = useState<string | null>(null);
  const [formMode, setFormMode] = useState<FormStatus>(FormStatus.CREATE);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      if (formMode === FormStatus.EDIT) {
        console.log("editando");
        const parsedFormData: CreateProductDto = {
          ...formData,
          grams: parseFloat(formData.grams),
          stock: parseFloat(formData.stock),
          price: parseFloat(formData.price),
          comparePrice: parseFloat(formData.comparePrice),
        };
        CreateProductSchema.parse(parsedFormData);
        setError(null);
        onSubmit(parsedFormData, id!);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const firstError = error.errors[0];
        const fieldName = firstError.path[0];
        console.error(`Error en el campo ${fieldName}: ${firstError.message}`);
        setError(firstError.message);
      } else {
        console.error("Error al iniciar sesión:", error);
      }
    }
  };

  useEffect(() => {
    if (id && initialData) {
      setFormMode(FormStatus.EDIT);
    }
  }, [id, initialData]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {initialData ? "Editar Producto" : "Crear Producto"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {error && (
            <Alert status="error" mb={4} borderRadius="md">
              <AlertIcon />
              {error}
            </Alert>
          )}
          <form onSubmit={handleSubmit} id="a-form">
            <FormControl>
              <FormLabel>Handle</FormLabel>
              <Input
                type="text"
                name="handle"
                value={formData.handle}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Titulo</FormLabel>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Descripción</FormLabel>
              <Input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Gramos</FormLabel>
              <Input
                type="number"
                name="grams"
                value={formData.grams}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Stock</FormLabel>
              <Input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Precio</FormLabel>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Precio comparativo</FormLabel>
              <Input
                type="number"
                name="comparePrice"
                value={formData.comparePrice}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>SKU</FormLabel>
              <Input
                type="text"
                name="SKU"
                value={formData.SKU}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Código de Barras</FormLabel>
              <Input
                type="text"
                name="barcode"
                value={formData.barcode}
                onChange={handleChange}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button type="submit" form="a-form">
            {initialData ? "Actualizar" : "Crear"}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
