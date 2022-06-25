import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const hatEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  enchantItem: Item.EvaScrollEnchantHairAccessory,
  chances: [100, 100, 100, 50, 40, 40, 8, 8, 5, 2],
  items: itemsRange(Item.Hat, Item.Hat_10),
});
