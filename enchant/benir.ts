import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

// same chances:
// https://dev.l2central.info/essence/items/accessary/talisman/
export const benirEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.BenirEnchantItem,
  chances: [50, 45, 40, 35, 50, 45, 40, 35, 30, 25, 50, 35, 30, 25, 20, 15, 50, 35, 30, 25, 20, 15, 50, 35],
  items: itemsRange(Item.Benir_1, Item.Benir_25),
  boundaries: new Set([Item.Benir_6, Item.Benir_12, Item.Benir_18, Item.Benir_24]),
});
