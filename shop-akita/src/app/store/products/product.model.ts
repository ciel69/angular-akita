import { ID } from '@datorama/akita';

export interface Product {
  id: ID;
  name: string;
  price: number;
  count?: number;
}

export function createProduct(params: Partial<Product>) {
  return {

  } as Product;
}
