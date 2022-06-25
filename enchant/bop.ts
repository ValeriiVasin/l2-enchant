import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

/**
 * @TODO improve Bx calculation
 */
export const bopEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.EWB,
  chances: [100, 100, 100, ...Array(13).fill(66.6 + 5)],
  items: itemsRange(Item.BOP, Item.BOP_16),
});
