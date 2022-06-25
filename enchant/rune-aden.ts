import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const runeAdenEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RuneAden_1,
  chances: [70, 60, 50, 40, 60, 55, 50, 45, 40, 50, 45, 40, 35, 30, 30, 25, 20, 15, 10],
  items: itemsRange(Item.RuneAden_1, Item.RuneAden_20),
  boundaries: new Set([Item.RuneAden_6, Item.RuneAden_11, Item.RuneAden_16]),
});
