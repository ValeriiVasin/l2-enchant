import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const rubyBigEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RubyEnergy,
  chances: [35, 25, 15, 10],
  items: itemsRange(Item.RubyBig_1, Item.RubyBig_5),
});
