import * as z from "zod";

export const CreateProductSchema = z.object({
  handle: z
    .string()
    .min(1, { message: "El campo handle es requerido" })
    .nonempty("El campo handle es requerido"),
  title: z
    .string()
    .min(1, { message: "El campo titulo es requerido" })
    .nonempty("El campo titulo es requerido"),
  description: z
    .string()
    .min(1, { message: "El campo descripción es requerido" })
    .nonempty("El campo descripción es requerido"),
  SKU: z
    .string()
    .min(1, { message: "El campo SKU es requerido" })
    .nonempty("El campo SKU es requerido"),
  grams: z
    .number()
    .min(1, { message: "El campo gramos debe ser mayor o igual a 0" })
    .nonnegative("El campo gramos debe ser mayor o igual a 0"),
  stock: z
    .number()
    .min(0, { message: "El campo stock debe ser mayor o igual a 0" })
    .nonnegative("El campo stock debe ser mayor o igual a 0")
    .refine((value) => !isNaN(value), {
      message: "El campo stock debe ser un número válido",
    }),
  price: z
    .number()
    .min(0, { message: "El campo precio debe ser mayor o igual a 0" })
    .nonnegative("El campo precio debe ser mayor o igual a 0")
    .refine((value) => !isNaN(value), {
      message: "El campo precio debe ser un número válido",
    }),
  comparePrice: z
    .number()
    .min(0, { message: "El campo precio comparativo debe ser mayor o igual a 0" })
    .nonnegative("El campo precio comparativo debe ser mayor o igual a 0")
    .refine((value) => !isNaN(value), {
      message: "El campo precio comparativo debe ser un número válido",
    }),
  barcode: z
    .string()
    .min(1, { message: "El campo barcode es requerido" })
    .nonempty("El campo barcode es requerido"),
});
