export type CreateProductDto = {
  handle: string;
  title: string;
  description: string;
  SKU: string;
  grams: number;
  stock: number;
  price: number;
  comparePrice: number;
  barcode: string;
};

export type FormProductInputs = {
  handle: string;
  title: string;
  description: string;
  SKU: string;
  grams: string;
  stock: string;
  price: string;
  comparePrice: string;
  barcode: string;
};

export type ProductForEditData = {
  id: number;
  handle: string;
  title: string;
  description: string;
  SKU: string;
  grams: number;
  stock: number;
  price: number;
  comparePrice: number;
  barcode: string;
};
