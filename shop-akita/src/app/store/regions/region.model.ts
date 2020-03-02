import { ID } from '@datorama/akita';

export interface Region {
  id: ID;
  code: number;
  name: string;
  discount: number;
}

export function createRegion(params: Partial<Region>) {
  return {

  } as Region;
}
