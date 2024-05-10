import { CreateProductDto, FormProductInputs } from "@/types/products";

export function convertToFormInputs(dto: CreateProductDto): FormProductInputs {
  const formInputs: FormProductInputs = {
    handle: dto.handle,
    title: dto.title,
    description: dto.description,
    SKU: dto.SKU,
    grams: dto.grams.toString(),
    stock: dto.stock.toString(),
    price: dto.price.toString(),
    comparePrice: dto.comparePrice.toString(),
    barcode: dto.barcode,
  };
  return formInputs;
}
