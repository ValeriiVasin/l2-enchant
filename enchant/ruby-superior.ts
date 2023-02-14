import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const rubySuperiorEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RubyEnergy,
  chances: [30, 30, 20, 10],
  items: itemsRange(Item.RubySuperior_1, Item.RubySuperior_5),
});
