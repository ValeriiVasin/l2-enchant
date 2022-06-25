import { createEnchantMap } from '../helpers/create-enchant-map';
import { itemsRange } from '../helpers/items-range';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const rubyEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.TwoToOne,
  chances: [65, 40, 20, 10],
  items: itemsRange(Item.Ruby_1, Item.Ruby_5),
});
