import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const rubyBigEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Drop,
  enchantItem: Item.RubyEnergy,
  chances: [35, 25, 15, 10],
  items: [Item.RubyBig_1, Item.RubyBig_2, Item.RubyBig_3, Item.RubyBig_4, Item.RubyBig_5],
});
