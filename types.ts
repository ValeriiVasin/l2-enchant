import { Item } from './items';

export interface Enchant {
  item: Item;
  successRate: number;
  required: Item;
  success: Item;
  fail: Item;
}

export type EnchantMap = Map<Item, Enchant>;

export interface StrategyConfig {
  chances: number[];
  items: Item[];
  enchantItem?: Item;
}

export enum EnchantStrategy {
  Decrease = 'Decrease',
  Destroy = 'Destroy',
  Drop = 'Drop',
}

export interface EnchantStrategyConfig extends StrategyConfig {
  strategy: EnchantStrategy;
}
