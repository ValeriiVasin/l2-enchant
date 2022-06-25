import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const ignisNecklaceEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.BlessedSpiritsVarnish,
  chances: [50, 50, 40, 40, 30, 30, 20, 10, 3, 1],
  items: itemsRange(Item.IgnisNecklace, Item.IgnisNecklace_10),
});
