import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const runeHardinEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RuneHardin_1,
  chances: [60, 55, 50, 45, 45, 40, 35, 30, 25, 35, 30, 25, 20, 15, 25, 20, 15, 10, 5],
  items: itemsRange(Item.RuneHardin_1, Item.RuneHardin_20),
  boundaries: new Set([Item.RuneHardin_6, Item.RuneHardin_11, Item.RuneHardin_16]),
});
