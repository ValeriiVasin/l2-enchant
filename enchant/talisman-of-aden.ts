import { createEnchantMap } from '../helpers/create-enchant-map';
import { Item } from '../items';
import { EnchantStrategy } from '../types';

export const talismanOfAdenEnchantMap = createEnchantMap({
  strategy: EnchantStrategy.Destroy,
  chances: [100, 80, 70, 60, 40, 30, 24, 16, 10, 10],
  items: [
    Item.TalismanOfAden,
    Item.TalismanOfAden_1,
    Item.TalismanOfAden_2,
    Item.TalismanOfAden_3,
    Item.TalismanOfAden_4,
    Item.TalismanOfAden_5,
    Item.TalismanOfAden_6,
    Item.TalismanOfAden_7,
    Item.TalismanOfAden_8,
    Item.TalismanOfAden_9,
    Item.TalismanOfAden_10,
  ],
});
