import { Item } from './items';

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item;
  success: Item;
  fail: Item;
}

export type EnchantMap = Map<Item, Enchant>;

export enum EnchantStrategy {
  Decrease = 'Decrease',
  Destroy = 'Destroy',
  Drop = 'Drop',
}
