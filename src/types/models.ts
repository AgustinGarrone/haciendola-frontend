export interface User {
  id: string;
  name: string;
  lastname: string;
  email: string;
}

export interface UserWithToken extends User {
  token: string;
}

export interface Product {
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
  createdAt: Date;
  updatedAt: Date;
}

export default interface IJwt {
  access_token: string;
  expires_in: number;
  token_type: string;
}
