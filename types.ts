import { Item } from './items';

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item | Map<Item, number>;
  success: Item;
  fail: Item;
}

export type EnchantMap = Map<Item, Enchant>;

export enum EnchantStrategy {
  // enchant level is decreased by 1 in case of fail
  Decrease = 'Decrease',

  // item is destroyed in case of fail
  Destroy = 'Destroy',

  // enchant level drops to 0 in case of fail
  Drop = 'Drop',

  // one of two items disappears in case of failure
  TwoToOne = 'TwoToOne',

  // enchant, if not - item stays
  Safe = 'Safe',
}
