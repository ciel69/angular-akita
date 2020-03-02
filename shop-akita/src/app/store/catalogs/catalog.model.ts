import { ID } from '@datorama/akita';

export interface Catalog {
  id: ID;
  name: string;
  price: number;
  count?: number;
}

export function createCatalog(params: Partial<Catalog>) {
  return {

  } as Catalog;
}
