import { ID } from '@datorama/akita';

export interface Basket {
  id: ID;
  name: string;
  price: number;
  count: number;
}

export function createBasket(params: Partial<Basket>) {
  return {

  } as Basket;
}
