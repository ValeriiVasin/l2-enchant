import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const rubyEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.TwoToOne,
  chances: [65, 40, 20, 10],
  items: [Item.Ruby_1, Item.Ruby_2, Item.Ruby_3, Item.Ruby_4, Item.Ruby_5],
});
